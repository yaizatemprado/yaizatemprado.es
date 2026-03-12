import Image from 'next/image'
import Link from 'next/link'
import type { Dictionary } from '@/lib/i18n/types'

type Props = { dict: Dictionary['hero']; locale: string }

export default function Hero({ dict, locale }: Props) {
  return (
    <section
      className="relative grid gap-9 items-center py-6"
      style={{
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      }}
    >
      <div
        aria-hidden="true"
        className="absolute -inset-10 -z-10 opacity-90"
        style={{
          background:
            'radial-gradient(circle at 15% 20%, #f7dcd4, transparent 55%), radial-gradient(circle at 75% 15%, #ead7f5, transparent 50%)',
        }}
      />

      <div className="flex flex-col gap-5 max-w-[640px]">
        <span className="text-[0.78rem] font-extrabold tracking-[0.22em] uppercase text-rose">
          {dict.eyebrow}
        </span>

        <h1
          className="font-serif text-anchor leading-[1.05] tracking-[-0.01em]"
          style={{ fontSize: 'clamp(3rem, 4.4vw, 4.35rem)' }}
        >
          {dict.heading}
        </h1>

        <p className="text-slate text-[1.05rem] leading-[1.7] max-w-[520px]">
          {dict.lead}
        </p>

        <div className="flex flex-wrap gap-4">
          <Link
            href={`/${locale}/newsletter`}
            className="rounded-full px-[26px] py-3 text-[0.95rem] font-semibold text-white no-underline transition-transform duration-200 hover:-translate-y-px"
            style={{
              background: 'linear-gradient(135deg, #cc6c4e, #b45b41)',
              boxShadow: '0 16px 30px rgba(204, 108, 78, 0.25)',
            }}
          >
            {dict.ctaPrimary}
          </Link>
          <a
            href="#about"
            className="rounded-full px-[26px] py-3 text-[0.95rem] font-semibold text-plum bg-white border border-[#e6d5cf] no-underline transition-transform duration-200 hover:-translate-y-px"
          >
            {dict.ctaSecondary}
          </a>
        </div>
      </div>

      <div className="grid gap-6 justify-items-center">
        <div
          className="w-[260px] h-[260px] rounded-full p-2.5"
          style={{
            background: 'linear-gradient(135deg, #f5b8a6, #f7d8cc, #e6c7f4)',
            boxShadow: '0 25px 40px rgba(93, 70, 72, 0.2)',
          }}
        >
          <div
            className="w-full h-full rounded-full overflow-hidden grid place-items-center"
            style={{ background: 'linear-gradient(180deg, #fff, #f6ebe7)' }}
          >
            <Image
              src="/assets/yaiza.png"
              alt="Portrait of Yaiza Temprado"
              width={800}
              height={1000}
              priority
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
