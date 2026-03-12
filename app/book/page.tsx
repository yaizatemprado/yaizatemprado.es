import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Book a Session — Yaiza Temprado',
  description:
    'Book a mentoring session with Yaiza Temprado — engineering leadership guidance for women moving into senior roles.',
}

const PRICE_CENTS = parseInt(process.env.SESSION_PRICE_CENTS ?? '15000', 10)
const priceFormatted = new Intl.NumberFormat('en-EU', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 0,
}).format(PRICE_CENTS / 100)

export default function BookPage() {
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
          href="/"
          className="text-[0.9rem] font-medium text-slate hover:text-rose transition-colors duration-200 no-underline"
        >
          ← Back
        </Link>
      </header>

      <div className="max-w-[720px] mb-14">
        <span className="text-[0.78rem] font-extrabold tracking-[0.22em] uppercase text-rose">
          Work with me
        </span>
        <h1
          className="font-serif text-anchor leading-[1.05] tracking-[-0.01em] mt-4 mb-5"
          style={{ fontSize: 'clamp(2.5rem, 3.5vw, 3.5rem)' }}
        >
          Choose your session
        </h1>
        <p className="text-slate text-[1.05rem] leading-[1.7]">
          Sessions are conducted via video call. Pick what works best for where you are right now.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[860px]">
        {/* Intro Call */}
        <div
          className="rounded-2xl p-8 flex flex-col gap-6 border border-[#eadbd6] bg-white"
          style={{ boxShadow: '0 4px 24px rgba(46,35,36,0.06)' }}
        >
          <div className="grid gap-2">
            <span className="text-[0.78rem] font-extrabold tracking-[0.18em] uppercase text-rose">
              Free
            </span>
            <h2 className="font-serif text-anchor text-[1.6rem] leading-[1.1]">Intro Call</h2>
            <p className="text-slate text-[0.95rem] leading-[1.65]">
              A 15-minute conversation to see if we're a good fit and whether I can help you with
              where you are right now.
            </p>
          </div>
          <ul className="grid gap-2 text-[0.9rem] text-slate">
            <li>— 15 minutes</li>
            <li>— No preparation needed</li>
            <li>— No commitment</li>
          </ul>
          <Link
            href="/book/intro"
            className="mt-auto inline-block text-center rounded-full px-8 py-3.5 text-[0.95rem] font-semibold text-anchor no-underline border border-[#e3d2cc] hover:border-rose transition-colors duration-200"
          >
            Book intro call →
          </Link>
        </div>

        {/* 60-min Session */}
        <div
          className="rounded-2xl p-8 flex flex-col gap-6 border border-[#eadbd6] bg-white"
          style={{ boxShadow: '0 4px 24px rgba(46,35,36,0.06)' }}
        >
          <div className="grid gap-2">
            <span className="text-[0.78rem] font-extrabold tracking-[0.18em] uppercase text-rose">
              {priceFormatted}
            </span>
            <h2 className="font-serif text-anchor text-[1.6rem] leading-[1.1]">
              Mentoring Session
            </h2>
            <p className="text-slate text-[0.95rem] leading-[1.65]">
              A focused 60-minute session on your leadership challenges — from navigating senior
              forums to building influence and making decisions under pressure.
            </p>
          </div>
          <ul className="grid gap-2 text-[0.9rem] text-slate">
            <li>— 60 minutes</li>
            <li>— Focused on your specific situation</li>
            <li>— Payment secured via Stripe</li>
          </ul>
          <Link
            href="/book/session"
            className="mt-auto inline-block text-center rounded-full px-8 py-3.5 text-[0.95rem] font-semibold text-white no-underline transition-transform duration-200 hover:-translate-y-px"
            style={{
              background: 'linear-gradient(135deg, #cc6c4e, #b45b41)',
              boxShadow: '0 16px 30px rgba(204, 108, 78, 0.25)',
            }}
          >
            Book session →
          </Link>
        </div>
      </div>
    </main>
  )
}
