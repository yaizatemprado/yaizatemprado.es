import type { Metadata } from 'next'
import Link from 'next/link'
import { getDictionary, locales } from '@/lib/i18n'
import { alternates, openGraph } from '@/lib/seo'
import { articlesFor, keyOf } from '@/lib/articles'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { List, ListRow, SectionHeader, pageColumn } from '@/components/ui/Section'

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

      <section className={`${pageColumn} py-6 grid gap-14`}>
        <SectionHeader as="h1" eyebrow={dict.resources.eyebrow} title={dict.resources.heading} lead={dict.resources.lead} />

        {pillars.length > 0 && (
          <div className="grid gap-6">
            <SectionHeader title={dict.resources.startHeading} />
            <ItemList cards={pillars} locale={locale} />
          </div>
        )}

        <div className="grid gap-6">
          {pillars.length > 0 && <SectionHeader title={dict.resources.moreHeading} />}
          <ItemList cards={rest} locale={locale} />
        </div>

        {company && (
          <List>
            <ListRow title={dict.resources.companyHeading}>
              <p>{dict.resources.companyBody}</p>
              <Link href={`/${locale}/recursos/${company.slug}`} className={readLink}>
                {dict.resources.companyCta} →
              </Link>
            </ListRow>
          </List>
        )}
      </section>

      <Footer dict={dict.footer} nav={dict.nav} locale={locale} />
    </main>
  )
}

const readLink = 'text-[0.95rem] font-semibold text-rose hover:text-anchor no-underline transition-colors duration-200'

// Same list as the home: title and type on the left, summary and link on the right.
function ItemList({ cards, locale }: { cards: Card[]; locale: string }) {
  return (
    <List>
      {cards.map((item) => (
        <ListRow
          key={item.slug}
          title={
            <Link href={`/${locale}/recursos/${item.slug}`} className="no-underline text-anchor hover:text-rose transition-colors duration-200">
              {item.title}
            </Link>
          }
          tag={item.tag}
        >
          <p>{item.summary}</p>
          <Link href={`/${locale}/recursos/${item.slug}`} className={readLink}>
            {item.cta} →
          </Link>
        </ListRow>
      ))}
    </List>
  )
}
