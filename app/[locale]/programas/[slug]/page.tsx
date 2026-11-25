import type { Metadata } from 'next'
import Button from '@/components/ui/Button'
import { List, ListRow, SectionHeader, pageColumn } from '@/components/ui/Section'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDictionary, locales } from '@/lib/i18n'
import { alternates, euroAmount, openGraph, SITE_URL } from '@/lib/seo'
import { articleHref } from '@/lib/articles'
import JsonLd from '@/components/seo/JsonLd'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

type Props = { params: { locale: string; slug: string } }

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = []
  for (const locale of locales) {
    const dict = await getDictionary(locale)
    for (const item of dict.programs.items) {
      params.push({ locale, slug: item.slug })
    }
  }
  return params
}

export async function generateMetadata({
  params: { locale, slug },
}: Props): Promise<Metadata> {
  const dict = await getDictionary(locale)
  const item = dict.programs.items.find((i) => i.slug === slug)
  if (!item) return {}
  return {
    title: `${item.title} — Yaiza Temprado`,
    description: item.seoDescription ?? item.forWho,
    alternates: alternates(locale, `programas/${slug}`),
    openGraph: openGraph(
      locale,
      `${item.title} — Yaiza Temprado`,
      item.seoDescription ?? item.forWho,
      `programas/${slug}`,
    ),
  }
}

export default async function ProgramPage({ params: { locale, slug } }: Props) {
  const dict = await getDictionary(locale)
  const item = dict.programs.items.find((i) => i.slug === slug)
  if (!item) notFound()

  const pageUrl = `${SITE_URL}/${locale}/programas/${slug}/`
  // Two ways to buy the same programme: the person pays (VAT included) or the
  // company does (VAT on top). Both are on the page, so both are in the schema.
  const selfPaid = euroAmount(item.detail)
  const companyPaid = item.companyDetail ? euroAmount(item.companyDetail) : null
  const offers = [
    selfPaid && {
      '@type': 'Offer',
      url: pageUrl,
      category: locale === 'en' ? 'Paid by the individual' : 'Lo paga la persona',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: selfPaid,
        priceCurrency: 'EUR',
        valueAddedTaxIncluded: true,
      },
    },
    companyPaid && {
      '@type': 'Offer',
      url: pageUrl,
      category: locale === 'en' ? 'Paid by the company' : 'Lo paga la empresa',
      availability: 'https://schema.org/InStock',
      priceSpecification: {
        '@type': 'PriceSpecification',
        price: companyPaid,
        priceCurrency: 'EUR',
        valueAddedTaxIncluded: false,
      },
    },
  ].filter(Boolean)

  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: item.title,
    serviceType: locale === 'en' ? 'Executive mentoring' : 'Mentoría ejecutiva',
    description: item.forWho,
    url: pageUrl,
    areaServed: 'ES',
    inLanguage: locale === 'en' ? 'en-GB' : 'es-ES',
    provider: { '@type': 'Person', '@id': `${SITE_URL}/#yaiza`, name: 'Yaiza Temprado' },
    ...(offers.length ? { offers } : {}),
  }

  return (
    <main className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-20 pb-20 sm:pt-24 sm:pb-[120px]" id="main">
      <JsonLd data={service} />
      <Header locale={locale} dict={dict.nav} />

      <article className={`${pageColumn} py-6 grid gap-14`}>
        <Link
          href={`/${locale}#services`}
          className="text-[0.85rem] font-semibold text-rose no-underline hover:text-anchor transition-colors duration-200"
        >
          {dict.programs.backToServices}
        </Link>

        <header className="grid gap-6">
          <SectionHeader
            as="h1"
            eyebrow={item.tag}
            title={item.title}
            lead={item.subtitle && <span className="font-serif text-[1.2rem] sm:text-[1.45rem] leading-[1.3]">{item.subtitle}</span>}
          />
          <p className="text-slate leading-[1.7] text-[0.98rem] sm:text-[1.05rem] max-w-[760px]">
            <span className="font-semibold text-anchor">{dict.programs.forWhoLabel}: </span>
            {item.forWho}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <Button href={item.buyHref} external>
              {item.cta}
            </Button>
            <p className="text-[0.95rem] font-semibold text-plum">
              {item.detail} <span className="text-slate opacity-40" aria-hidden="true">·</span> {item.cadence}
            </p>
          </div>
          {item.companyDetail && <p className="text-[0.88rem] text-slate">{item.companyDetail}</p>}
        </header>

        <section className="grid gap-8">
          <SectionHeader title={dict.programs.sessionsHeading} />
          <List>
            {item.sessions.map((session, i) => (
              <ListRow key={session.title} title={session.title} tag={String(i + 1).padStart(2, '0')}>
                <p>{session.description}</p>
              </ListRow>
            ))}
          </List>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-3">
            <Button href={item.buyHref} external>
              {item.cta}
            </Button>
            <p className="text-[0.95rem] font-semibold text-plum">{item.detail}</p>
          </div>
        </section>

        <List>
          <ListRow title={dict.programs.companyHeading}>
            <p>{dict.programs.companyBody}</p>
            {dict.programs.companyGuideCta && (
              <Link
                href={articleHref('que-lo-pague-tu-empresa', locale)}
                className="text-[0.95rem] font-semibold text-rose hover:text-anchor no-underline transition-colors duration-200"
              >
                {dict.programs.companyGuideCta} →
              </Link>
            )}
            {/* Not this programme: the group programme for a team of managers. */}
            <Link
              href={`/${locale}/empresas`}
              className="text-[0.88rem] text-slate hover:text-anchor no-underline transition-colors duration-200"
            >
              {dict.programs.companyCta} →
            </Link>
          </ListRow>
        </List>
      </article>

      <Footer dict={dict.footer} nav={dict.nav} locale={locale} />
    </main>
  )
}
