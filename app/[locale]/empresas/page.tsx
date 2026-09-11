import type { Metadata } from 'next'
import Link from 'next/link'
import { getDictionary, locales } from '@/lib/i18n'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

type Props = { params: { locale: string } }

// The diagnostic is a different Cal.com event per language.
const DIAGNOSTIC: Record<string, string> = {
  es: 'https://cal.com/yaiza-temprado/diagnostico',
  en: 'https://cal.com/yaiza-temprado/diagnostic-session',
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const dict = await getDictionary(locale)
  return {
    title: `${dict.companies.heading} — Yaiza Temprado`,
    description: dict.companies.lead,
    alternates: {
      canonical: `/${locale}/empresas/`,
      languages: { en: '/en/empresas/', es: '/es/empresas/' },
    },
  }
}

const h2Class = 'font-serif text-anchor leading-[1.2] text-[1.5rem] sm:text-[1.8rem]'
const bodyClass = 'text-slate leading-[1.7] text-[0.98rem] sm:text-[1.02rem]'
const linkClass =
  'font-semibold text-rose hover:text-anchor no-underline transition-colors duration-200'

export default async function CompaniesPage({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)
  const c = dict.companies
  const diagnosticHref = DIAGNOSTIC[locale] ?? DIAGNOSTIC.es
  const mailto = `mailto:yaiza@temprado.es?subject=${encodeURIComponent(c.ctaMailSubject)}`

  return (
    <main className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-20 pb-20 sm:pt-24 sm:pb-[120px]" id="main">
      <Header locale={locale} dict={dict.nav} />

      <article className="max-w-[820px] mx-auto py-12 grid gap-12">
        <header className="grid gap-4">
          <span className="text-[0.78rem] font-extrabold tracking-[0.22em] uppercase text-rose">
            {c.eyebrow}
          </span>
          <h1
            className="font-serif text-anchor leading-[1.15] sm:leading-[1.1] tracking-[-0.005em]"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
          >
            {c.heading}
          </h1>
          <p className={bodyClass}>{c.lead}</p>
          <div className="flex flex-wrap gap-3 mt-2">
            <a
              href={diagnosticHref}
              target="_blank"
              rel="noreferrer"
              className="btn-primary px-6 py-3 text-[0.9rem]"
            >
              {c.ctaPrimary}
            </a>
            <a href={mailto} className="btn-secondary px-6 py-3 text-[0.9rem]">
              {c.ctaSecondary}
            </a>
          </div>
        </header>

        <section className="grid gap-3">
          <h2 className={h2Class}>{c.whatHeading}</h2>
          <p className={bodyClass}>{c.whatBody}</p>
        </section>

        <section className="grid gap-4">
          <h2 className={h2Class}>{c.programsHeading}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {c.programs.map((p) => (
              <Link
                key={p.href}
                href={p.href}
                className="group grid gap-2 bg-card rounded-[14px] px-5 py-5 border border-line no-underline hover:border-rose transition-colors duration-200"
                style={{ boxShadow: '0 8px 16px rgba(60, 40, 42, 0.05)' }}
              >
                <h3 className="font-serif text-[1.25rem] text-anchor leading-[1.2]">{p.title}</h3>
                <p className="text-slate text-[0.92rem] leading-[1.6]">{p.forWho}</p>
                <span className="text-[0.85rem] font-semibold text-rose group-hover:text-anchor transition-colors duration-200">
                  →
                </span>
              </Link>
            ))}
          </div>
        </section>

        <section className="grid gap-4">
          <h2 className={h2Class}>{c.gainsHeading}</h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {c.gains.map((g) => (
              <div
                key={g.title}
                className="bg-card rounded-[14px] px-5 py-5 border border-line grid gap-2"
                style={{ boxShadow: '0 8px 16px rgba(60, 40, 42, 0.05)' }}
              >
                <h3 className="text-[1rem] font-bold text-anchor">{g.title}</h3>
                <p className="text-slate text-[0.92rem] leading-[1.6]">{g.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-4">
          <h2 className={h2Class}>{c.howHeading}</h2>
          <ol className="grid gap-3 list-none p-0 m-0">
            {c.steps.map((s, i) => (
              <li
                key={s.title}
                className="bg-card rounded-[12px] px-5 py-4 border border-line flex gap-4 items-start"
                style={{ boxShadow: '0 8px 16px rgba(60, 40, 42, 0.05)' }}
              >
                <span className="shrink-0 w-7 h-7 rounded-full bg-anchor text-white flex items-center justify-center text-[0.85rem] font-bold">
                  {i + 1}
                </span>
                <div className="grid gap-1">
                  <h3 className="text-[1rem] font-bold text-anchor">{s.title}</h3>
                  <p className="text-slate text-[0.92rem] leading-[1.6]">{s.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="grid gap-4 bg-stone rounded-[14px] border border-line px-6 py-6">
          <h2 className={h2Class}>{c.priceHeading}</h2>
          <p className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <span className="font-serif text-[1.9rem] text-anchor leading-none">{c.priceValue}</span>
            <span className="text-slate text-[0.92rem]">{c.priceNote}</span>
          </p>
          <ul className="grid gap-1.5 list-disc pl-5 text-slate text-[0.92rem] leading-[1.6]">
            {c.priceBullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="text-[0.9rem] text-slate">
            {c.selfPayNote}{' '}
            <Link href={`/${locale}#services`} className={linkClass}>
              {c.selfPayCta} →
            </Link>
          </p>
        </section>

        <section className="grid gap-2">
          <h2 className={h2Class}>{c.teamsHeading}</h2>
          <p className={bodyClass}>
            {c.teamsBody}{' '}
            <a href={mailto} className={linkClass}>
              yaiza@temprado.es
            </a>
          </p>
        </section>

        <section className="grid gap-2">
          <h2 className={h2Class}>{c.whoHeading}</h2>
          <p className={bodyClass}>{c.whoBody}</p>
          <a
            href="https://www.linkedin.com/in/yaiza/"
            target="_blank"
            rel="noreferrer"
            className={`text-[0.9rem] ${linkClass}`}
          >
            LinkedIn →
          </a>
        </section>

        <div className="grid gap-4 justify-items-center text-center bg-card rounded-[14px] px-6 py-8 border border-line">
          <p className="text-[1.05rem] font-bold text-anchor">{c.priceValue}</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={diagnosticHref}
              target="_blank"
              rel="noreferrer"
              className="btn-primary px-6 py-3 text-[0.9rem]"
            >
              {c.ctaPrimary}
            </a>
            <a href={mailto} className="btn-secondary px-6 py-3 text-[0.9rem]">
              {c.ctaSecondary}
            </a>
          </div>
        </div>
      </article>

      <Footer dict={dict.footer} nav={dict.nav} locale={locale} />
    </main>
  )
}
