import type { Metadata } from 'next'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import { stripe } from '@/lib/stripe'
import { supabase } from '@/lib/supabase'
import SessionScheduleForm from '@/components/booking/SessionScheduleForm'

export const metadata: Metadata = {
  title: 'Choose Your Time — Yaiza Temprado',
  robots: { index: false, follow: false },
}

interface Props {
  searchParams: { session_id?: string }
}

export default async function SchedulePage({ searchParams }: Props) {
  const { session_id } = searchParams

  if (!session_id) redirect('/book')

  let paid = false
  try {
    const session = await stripe.checkout.sessions.retrieve(session_id)
    paid = session.payment_status === 'paid'
  } catch {
    redirect('/book')
  }

  if (!paid) redirect('/book/session')

  const { data: slots } = await supabase
    .from('availability_slots')
    .select('id, starts_at')
    .eq('session_type', 'session')
    .eq('is_booked', false)
    .gte('starts_at', new Date().toISOString())
    .order('starts_at', { ascending: true })

  return (
    <main className="max-w-[1200px] mx-auto px-6 pt-24 pb-[120px]">
      <header className="flex items-center justify-between gap-6 mb-16">
        <Link
          href="/"
          className="font-serif text-2xl tracking-[0.08em] uppercase text-anchor no-underline"
        >
          Yaiza Temprado
        </Link>
      </header>

      <div className="max-w-[600px] mb-12">
        <span className="text-[0.78rem] font-extrabold tracking-[0.22em] uppercase text-rose">
          Payment confirmed
        </span>
        <h1
          className="font-serif text-anchor leading-[1.05] tracking-[-0.01em] mt-4 mb-5"
          style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)' }}
        >
          Now choose your time
        </h1>
        <p className="text-slate text-[1.05rem] leading-[1.7]">
          Pick a slot below. All times are shown in CET (Madrid). You'll receive a confirmation
          email once booked.
        </p>
      </div>

      <SessionScheduleForm slots={slots ?? []} stripeSessionId={session_id} />
    </main>
  )
}
