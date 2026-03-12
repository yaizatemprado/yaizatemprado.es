import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendIntroConfirmation, sendMentorNotification } from '@/lib/email'

export async function POST(req: NextRequest) {
  const { name, email, slotId } = await req.json()

  if (!name || !email || !slotId) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  // Atomically mark the slot as booked (prevents double-booking)
  const { data: slot, error: slotError } = await supabase
    .from('availability_slots')
    .update({ is_booked: true })
    .eq('id', slotId)
    .eq('is_booked', false)
    .eq('session_type', 'intro')
    .select('starts_at')
    .single()

  if (slotError || !slot) {
    return NextResponse.json(
      { error: 'Slot is no longer available. Please choose another time.' },
      { status: 409 }
    )
  }

  await supabase.from('bookings').insert({
    slot_id: slotId,
    name,
    email,
    session_type: 'intro',
    status: 'confirmed',
  })

  await Promise.all([
    sendIntroConfirmation(email, name, slot.starts_at),
    sendMentorNotification('intro', name, email, slot.starts_at),
  ])

  return NextResponse.json({ ok: true })
}
