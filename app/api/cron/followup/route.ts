import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendFollowUpEmail } from '@/lib/email'

export async function GET(req: NextRequest) {
  // Vercel sends CRON_SECRET in the Authorization header
  if (req.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const cutoff = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString()

  const { data: pending } = await supabase
    .from('bookings')
    .select('id, name, email, stripe_session_id')
    .eq('status', 'pending_schedule')
    .eq('follow_up_sent', false)
    .lt('created_at', cutoff)

  if (!pending?.length) return NextResponse.json({ sent: 0 })

  await Promise.all(
    pending.map(async (booking) => {
      if (!booking.stripe_session_id) return
      await sendFollowUpEmail(booking.email, booking.name, booking.stripe_session_id)
      await supabase.from('bookings').update({ follow_up_sent: true }).eq('id', booking.id)
    })
  )

  return NextResponse.json({ sent: pending.length })
}
