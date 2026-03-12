import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabase } from '@/lib/supabase'
import { sendSessionConfirmation, sendMentorNotification } from '@/lib/email'

export async function POST(req: NextRequest) {
  const { stripeSessionId, slotId } = await req.json()

  if (!stripeSessionId || !slotId) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Verify payment with Stripe
  const checkoutSession = await stripe.checkout.sessions.retrieve(stripeSessionId)
  if (checkoutSession.payment_status !== 'paid') {
    return NextResponse.json({ error: 'Payment not completed' }, { status: 402 })
  }

  const name = checkoutSession.metadata?.name ?? ''
  const email = checkoutSession.metadata?.email ?? checkoutSession.customer_email ?? ''

  // Atomically mark the slot as booked
  const { data: slot, error: slotError } = await supabase
    .from('availability_slots')
    .update({ is_booked: true })
    .eq('id', slotId)
    .eq('is_booked', false)
    .eq('session_type', 'session')
    .select('starts_at')
    .single()

  if (slotError || !slot) {
    return NextResponse.json(
      { error: 'Slot is no longer available. Please choose another time.' },
      { status: 409 }
    )
  }

  // Upsert booking (webhook may have already created a pending_schedule record)
  await supabase
    .from('bookings')
    .upsert(
      {
        stripe_session_id: stripeSessionId,
        slot_id: slotId,
        name,
        email,
        session_type: 'session',
        status: 'confirmed',
      },
      { onConflict: 'stripe_session_id' }
    )

  await Promise.all([
    sendSessionConfirmation(email, name, slot.starts_at),
    sendMentorNotification('session', name, email, slot.starts_at),
  ])

  return NextResponse.json({ ok: true })
}
