import Link from 'next/link'
import type { Dictionary } from '@/lib/i18n/types'

type Props = { dict: Dictionary['services']; locale: string }

const buttonClass = 'btn-primary px-5 py-2.5 text-[0.85rem]'

export default function Services({ dict, locale }: Props) {
  return (
    <section id="services" className="grid gap-9">
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

      <div className="grid gap-6 max-w-[1080px] mx-auto grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {dict.cards.map(({ tag, title, description, detail, companyDetail, href, cta, external }) => (
          <article
            key={title}
            className="bg-card rounded-[14px] px-[22px] pt-[22px] pb-6 border border-line flex flex-col gap-3.5 transition-transform duration-200 hover:-translate-y-1"
            style={{ boxShadow: '0 12px 20px rgba(60, 40, 42, 0.06)' }}
          >
            <span className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-rose bg-stone rounded-full px-3 py-1 self-start">
              {tag}
            </span>
            <h3 className="text-[1.25rem] font-bold text-anchor mt-0.5">{title}</h3>
            <p className="text-slate leading-[1.6] text-[0.92rem]">{description}</p>
            <div className="mt-auto flex flex-col gap-3.5">
              <div className="grid gap-0.5">
                <p className="text-[0.85rem] font-semibold text-plum">{detail}</p>
                {companyDetail && (
                  <p className="text-[0.8rem] text-slate">{companyDetail}</p>
                )}
              </div>
              {external ? (
                <a href={href} target="_blank" rel="noreferrer" className={buttonClass}>
                  {cta}
                </a>
              ) : (
                <Link href={href} className={buttonClass}>
                  {cta}
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>

      {/* The company-paid route: one line, one link. Written so the person can forward it. */}
      <div className="max-w-[1080px] mx-auto w-full bg-stone rounded-[14px] border border-line px-6 py-5 flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
        <p className="text-slate text-[0.92rem] leading-[1.6] flex-1">{dict.companyNote}</p>
        <Link
          href={`/${locale}/empresas`}
          className="btn-secondary px-5 py-2.5 text-[0.85rem] whitespace-nowrap"
        >
          {dict.companyCta} →
        </Link>
      </div>
    </section>
  )
}
