import type { Metadata } from 'next'
import Link from 'next/link'
import { getDictionary, locales } from '@/lib/i18n'
import { alternates, openGraph } from '@/lib/seo'
import { articlesFor, keyOf } from '@/lib/articles'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

type Props = { params: { locale: string } }

// key: the Spanish slug, which places an article in the hub in every locale.
type Card = { slug: string; key: string; tag: string; title: string; summary: string; cta: string }

// The pillar pages open the hub: every other article hangs from one of them.
const PILLARS = ['presencia-ejecutiva', 'como-conseguir-un-ascenso-en-el-trabajo']
// The company page is a sales asset, not an answer to a reader's problem: it closes the hub as a box.
const COMPANY = 'que-lo-pague-tu-empresa'

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const dict = await getDictionary(locale)
  return {
    title: `${dict.resources.eyebrow} — Yaiza Temprado`,
    description: dict.resources.lead,
    alternates: alternates(locale, 'recursos'),
    openGraph: openGraph(
      locale,
      `${dict.resources.eyebrow} — Yaiza Temprado`,
      dict.resources.lead,
      'recursos',
    ),
  }
}

export default async function ResourcesPage({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)
  const guides: Card[] = dict.resources.items.map((i) => ({ slug: i.slug, key: i.slug, tag: dict.resources.guideLabel, title: i.title, summary: i.summary, cta: dict.resources.cardCta }))
  const articles: Card[] = articlesFor(locale).map((a) => ({ slug: a.slug, key: keyOf(a), tag: dict.resources.articleLabel, title: a.title, summary: a.description, cta: a.cardCta }))
  const pillars = PILLARS.flatMap((key) => articles.filter((a) => a.key === key))
  const rest = [...guides, ...articles.filter((a) => !PILLARS.includes(a.key) && a.key !== COMPANY)]
  const company = articles.find((a) => a.key === COMPANY)

  return (
    <main className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-20 pb-20 sm:pt-24 sm:pb-[120px]" id="main">
      <Header locale={locale} dict={dict.nav} />

      <section className="max-w-[820px] mx-auto py-12 grid gap-10">
        <header className="grid gap-4 text-center justify-items-center">
          <span className="text-[0.78rem] font-extrabold tracking-[0.22em] uppercase text-rose">
            {dict.resources.eyebrow}
          </span>
          <h1
            className="font-serif text-anchor leading-[1.15] sm:leading-[1.1] tracking-[-0.005em]"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
          >
            {dict.resources.heading}
          </h1>
          <p className="text-slate leading-[1.7] text-[0.98rem] sm:text-[1.05rem] max-w-[620px]">
            {dict.resources.lead}
          </p>
        </header>

        {pillars.length > 0 && (
          <div className="grid gap-5">
            <h2 className="font-serif text-[1.5rem] text-anchor text-center">{dict.resources.startHeading}</h2>
            <CardGrid cards={pillars} locale={locale} large />
          </div>
        )}

        <div className="grid gap-5">
          {pillars.length > 0 && (
            <h2 className="font-serif text-[1.5rem] text-anchor text-center">{dict.resources.moreHeading}</h2>
          )}
          <CardGrid cards={rest} locale={locale} />
        </div>

        {company && (
          <aside className="bg-stone rounded-[14px] border border-line px-6 py-6 grid gap-3">
            <h2 className="text-[1.1rem] font-bold text-anchor">{dict.resources.companyHeading}</h2>
            <p className="text-slate leading-[1.65] text-[0.95rem]">{dict.resources.companyBody}</p>
            <Link
              href={`/${locale}/recursos/${company.slug}`}
              className="text-[0.9rem] font-semibold text-rose hover:text-anchor no-underline transition-colors duration-200"
            >
              {dict.resources.companyCta} →
            </Link>
          </aside>
        )}
      </section>

      <Footer dict={dict.footer} nav={dict.nav} locale={locale} />
    </main>
  )
}

function CardGrid({ cards, locale, large = false }: { cards: Card[]; locale: string; large?: boolean }) {
  return (
    <ul className="grid gap-5 list-none p-0 m-0 sm:grid-cols-2">
      {cards.map((item) => (
        <li key={item.slug}>
          <Link
            href={`/${locale}/recursos/${item.slug}`}
            className={`group grid gap-3 h-full bg-card rounded-[14px] border border-line no-underline transition-transform duration-200 hover:-translate-y-px ${large ? 'px-7 py-8' : 'px-6 py-7'}`}
            style={{ boxShadow: '0 8px 16px rgba(60, 40, 42, 0.05)' }}
          >
            <span className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-rose bg-stone rounded-full px-3 py-1 self-start">
              {item.tag}
            </span>
            <h3 className={`font-serif text-anchor leading-[1.2] ${large ? 'text-[1.55rem]' : 'text-[1.3rem]'}`}>
              {item.title}
            </h3>
            <p className="text-slate leading-[1.6] text-[0.92rem]">{item.summary}</p>
            <span className="mt-1 text-[0.85rem] font-semibold text-rose group-hover:text-anchor transition-colors duration-200">
              {item.cta} →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  )
}
