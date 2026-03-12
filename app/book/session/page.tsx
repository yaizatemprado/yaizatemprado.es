import type { Metadata } from 'next'
import Link from 'next/link'
import SessionCheckoutForm from '@/components/booking/SessionCheckoutForm'

export const metadata: Metadata = {
  title: 'Book a Mentoring Session — Yaiza Temprado',
  description: 'Book a 60-minute mentoring session with Yaiza Temprado.',
  robots: { index: false, follow: false },
}

const PRICE_CENTS = parseInt(process.env.SESSION_PRICE_CENTS ?? '15000', 10)
const priceFormatted = new Intl.NumberFormat('en-EU', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 0,
}).format(PRICE_CENTS / 100)

export default function SessionPage() {
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
          {priceFormatted} · 60 minutes
        </span>
        <h1
          className="font-serif text-anchor leading-[1.05] tracking-[-0.01em] mt-4 mb-5"
          style={{ fontSize: 'clamp(2rem, 3vw, 2.8rem)' }}
        >
          Book a mentoring session
        </h1>
        <p className="text-slate text-[1.05rem] leading-[1.7]">
          Enter your details below. You'll be taken to a secure checkout, then choose your time slot
          once payment is complete.
        </p>
      </div>

      <SessionCheckoutForm />
    </main>
  )
}
