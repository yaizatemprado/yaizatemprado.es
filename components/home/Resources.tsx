import Link from 'next/link'
import type { Dictionary } from '@/lib/i18n/types'

type Props = { dict: Dictionary['resources']; locale: string }

export default function Resources({ dict, locale }: Props) {
  return (
    <section id="recursos" className="grid gap-9">
      <div className="text-center grid gap-3 justify-items-center">
        <span className="text-[0.78rem] font-extrabold tracking-[0.22em] uppercase text-rose">
          {dict.eyebrow}
        </span>
        <h2
          className="font-serif text-anchor leading-[1.15] sm:leading-[1.1] tracking-[-0.005em]"
          style={{ fontSize: 'clamp(1.7rem, 5.5vw, 3.35rem)' }}
        >
          {dict.heading}
        </h2>
        <p className="text-slate max-w-[600px] leading-[1.7] text-[0.95rem] sm:text-[1rem]">
          {dict.lead}
        </p>
      </div>

      <div className="grid gap-6 max-w-[860px] mx-auto grid-cols-1 sm:grid-cols-2">
        {dict.items.map((item) => (
          <Link
            key={item.slug}
            href={`/${locale}/recursos/${item.slug}`}
            className="group grid gap-3 bg-card rounded-[20px] px-[22px] pt-[22px] pb-6 border border-[#f0e5e1] no-underline transition-transform duration-200 hover:-translate-y-1"
            style={{ boxShadow: '0 12px 20px rgba(60, 40, 42, 0.06)' }}
          >
            <span className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-rose bg-[#fdf0ec] rounded-full px-3 py-1 self-start">
              {item.tag}
            </span>
            <h3 className="font-serif text-[1.25rem] text-anchor leading-[1.2]">{item.title}</h3>
            <p className="text-slate leading-[1.6] text-[0.92rem]">{item.summary}</p>
            <span className="mt-1 text-[0.85rem] font-semibold text-rose group-hover:text-anchor transition-colors duration-200">
              {dict.cardCta} →
            </span>
          </Link>
        ))}
      </div>
    </section>
  )
}
