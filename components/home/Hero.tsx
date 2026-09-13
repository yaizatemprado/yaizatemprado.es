import Image from 'next/image'
import type { Dictionary } from '@/lib/i18n/types'

type Props = { dict: Dictionary['hero'] }

export default function Hero({ dict }: Props) {
  return (
    <section
      className="grid gap-9 items-center py-6"
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(min(280px, 100%), 1fr))',
      }}
    >
      <div className="flex flex-col gap-5 max-w-[640px]">
        <span className="text-[0.78rem] font-extrabold tracking-[0.22em] uppercase text-rose">
          {dict.eyebrow}
        </span>

        <h1
          className="font-serif text-anchor leading-[1.08] sm:leading-[1.05] tracking-[-0.01em]"
          style={{ fontSize: 'clamp(2.05rem, 7vw, 4.35rem)' }}
        >
          {dict.heading}
        </h1>

        <p className="text-slate text-[0.98rem] sm:text-[1.05rem] leading-[1.7] max-w-[520px]">
          {dict.lead}
        </p>

        <div className="flex flex-wrap gap-4">
          <a href="#services" className="btn-primary px-[26px] py-3 text-[0.95rem]">
            {dict.ctaPrimary}
          </a>
          <a href="#contact" className="btn-secondary px-[26px] py-3 text-[0.95rem]">
            {dict.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="grid justify-items-center">
        <div
          className="w-[min(300px,72vw)] h-[min(300px,72vw)] rounded-[24px] overflow-hidden border border-line bg-white"
          style={{ boxShadow: '0 20px 40px rgba(46, 35, 36, 0.12)' }}
        >
          <Image
            src="/assets/yaiza.webp"
            alt="Yaiza Temprado"
            width={1000}
            height={1000}
            priority
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}
