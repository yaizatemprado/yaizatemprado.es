import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Booking Confirmed — Yaiza Temprado',
  description: 'Your session with Yaiza Temprado has been confirmed.',
  robots: { index: false, follow: false },
}

export default function ConfirmedPage() {
  return (
    <main className="max-w-[1200px] mx-auto px-6 pt-24 pb-[120px]">
      <header className="flex items-center justify-between gap-6 mb-24">
        <Link
          href="/"
          className="font-serif text-2xl tracking-[0.08em] uppercase text-anchor no-underline"
        >
          Yaiza Temprado
        </Link>
      </header>

      <div className="max-w-[600px] mx-auto text-center grid gap-6">
        <div
          className="w-16 h-16 rounded-full mx-auto grid place-items-center text-white text-2xl"
          style={{ background: 'linear-gradient(135deg, #cc6c4e, #b45b41)' }}
          aria-hidden="true"
        >
          ✓
        </div>

        <div className="grid gap-3">
          <span className="text-[0.78rem] font-extrabold tracking-[0.22em] uppercase text-rose">
            Confirmed
          </span>
          <h1
            className="font-serif text-anchor leading-[1.1] tracking-[-0.01em]"
            style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)' }}
          >
            You're booked in
          </h1>
        </div>

        <p className="text-slate text-[1.05rem] leading-[1.7]">
          You should receive a calendar invite and confirmation email shortly. I look forward to
          speaking with you.
        </p>

        <Link
          href="/"
          className="inline-block mt-4 rounded-full px-8 py-3.5 text-[0.95rem] font-semibold text-white no-underline transition-transform duration-200 hover:-translate-y-px"
          style={{
            background: 'linear-gradient(135deg, #cc6c4e, #b45b41)',
            boxShadow: '0 16px 30px rgba(204, 108, 78, 0.25)',
          }}
        >
          Back to home
        </Link>
      </div>
    </main>
  )
}
