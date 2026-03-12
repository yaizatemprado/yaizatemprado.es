import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'
import { supabase } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const body = await req.text()
  const sig = req.headers.get('stripe-signature')

  if (!sig || !process.env.STRIPE_WEBHOOK_SECRET) {
    return NextResponse.json({ error: 'Missing signature' }, { status: 400 })
  }

  let event
  try {
    event = stripe.webhooks.constructEvent(body, sig, process.env.STRIPE_WEBHOOK_SECRET)
  } catch {
    return NextResponse.json({ error: 'Invalid signature' }, { status: 400 })
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object
    if (session.payment_status !== 'paid') return NextResponse.json({ ok: true })

    const name = session.metadata?.name ?? ''
    const email = session.metadata?.email ?? session.customer_email ?? ''

    // Create a pending_schedule record for 24h follow-up tracking
    await supabase.from('bookings').upsert(
      {
        stripe_session_id: session.id,
        name,
        email,
        session_type: 'session',
        status: 'pending_schedule',
      },
      { onConflict: 'stripe_session_id' }
    )
  }

  return NextResponse.json({ ok: true })
}
