import type { Metadata } from 'next'
import Link from 'next/link'
import { supabase } from '@/lib/supabase'
import IntroBookingForm from '@/components/booking/IntroBookingForm'

export const metadata: Metadata = {
  title: 'Book an Intro Call — Yaiza Temprado',
  description: 'Book a free 15-minute intro call with Yaiza Temprado.',
  robots: { index: false, follow: false },
}

export default async function IntroPage() {
  const { data: slots } = await supabase
    .from('availability_slots')
    .select('id, starts_at')
    .eq('session_type', 'intro')
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
        <Link
          href="/book"
          className="text-[0.9rem] font-medium text-slate hover:text-rose transition-colors duration-200 no-underline"
        >
          ← Back
        </Link>
      </header>

      <div className="max-w-[600px] mb-12">
        <span className="text-[0.78rem] font-extrabold tracking-[0.22em] uppercase text-rose">
          Free · 15 minutes
        </span>
        <h1
          className="font-serif text-anchor leading-[1.05] tracking-[-0.01em] mt-4 mb-5"
          style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)' }}
        >
          Book an intro call
        </h1>
        <p className="text-slate text-[1.05rem] leading-[1.7]">
          Fill in your details and choose a time. All times are shown in CET (Madrid).
        </p>
      </div>

      <IntroBookingForm slots={slots ?? []} />
    </main>
  )
}
