import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDictionary, locales } from '@/lib/i18n'
import { alternates, euroAmount, openGraph, SITE_URL } from '@/lib/seo'
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
    description: item.forWho,
    alternates: alternates(locale, `programas/${slug}`),
    openGraph: openGraph(
      locale,
      `${item.title} — Yaiza Temprado`,
      item.forWho,
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
      url: `${SITE_URL}/${locale}/empresas/`,
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

      <article className="max-w-[820px] mx-auto py-12 grid gap-10">
        <Link
          href={`/${locale}#services`}
          className="text-[0.85rem] font-semibold text-rose no-underline hover:text-anchor transition-colors duration-200"
        >
          {dict.programs.backToServices}
        </Link>

        <header className="grid gap-4">
          <span className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-rose bg-stone rounded-full px-3 py-1 self-start">
            {item.tag}
          </span>
          <h1
            className="font-serif text-anchor leading-[1.15] sm:leading-[1.1] tracking-[-0.005em]"
            style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
          >
            {item.title}
          </h1>
          {item.subtitle && (
            <p className="font-serif text-slate leading-[1.3] text-[1.2rem] sm:text-[1.45rem]">
              {item.subtitle}
            </p>
          )}
          <p className="text-slate leading-[1.7] text-[0.98rem] sm:text-[1.05rem]">
            <span className="font-semibold text-anchor">{dict.programs.forWhoLabel}: </span>
            {item.forWho}
          </p>
          <div className="grid gap-1">
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.9rem] font-semibold text-plum">
              <span>{item.detail}</span>
              <span className="text-slate opacity-40" aria-hidden="true">
                ·
              </span>
              <span>{item.cadence}</span>
            </div>
            {item.companyDetail && (
              <p className="text-[0.88rem] text-slate">{item.companyDetail}</p>
            )}
          </div>
        </header>

        <section className="grid gap-4">
          <h2 className="text-[1.15rem] font-bold text-anchor">
            {dict.programs.sessionsHeading}
          </h2>
          <ol className="grid gap-3 list-none p-0 m-0">
            {item.sessions.map((session, i) => (
              <li
                key={session.title}
                className="bg-card rounded-[12px] px-5 py-4 border border-line flex gap-4 items-start"
                style={{ boxShadow: '0 8px 16px rgba(60, 40, 42, 0.05)' }}
              >
                <span className="shrink-0 w-7 h-7 rounded-full bg-anchor text-white flex items-center justify-center text-[0.85rem] font-bold">
                  {i + 1}
                </span>
                <div className="grid gap-1">
                  <h3 className="text-[1rem] font-bold text-anchor">{session.title}</h3>
                  <p className="text-slate leading-[1.6] text-[0.92rem]">
                    {session.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="grid gap-3 justify-items-center text-center bg-card rounded-[14px] px-6 py-8 border border-line">
          <p className="text-[1.05rem] font-bold text-anchor">{item.detail}</p>
          <a
            href={item.buyHref}
            target="_blank"
            rel="noreferrer"
            className="btn-primary px-7 py-3 text-[0.9rem]"
          >
            {item.cta}
          </a>
          {item.companyDetail && (
            <p className="text-[0.85rem] text-slate">{item.companyDetail}</p>
          )}
        </div>

        <aside className="bg-stone rounded-[14px] border border-line px-6 py-6 grid gap-3">
          <h2 className="text-[1.1rem] font-bold text-anchor">{dict.programs.companyHeading}</h2>
          <p className="text-slate leading-[1.65] text-[0.95rem]">{dict.programs.companyBody}</p>
          <Link
            href={`/${locale}/empresas`}
            className="text-[0.9rem] font-semibold text-rose hover:text-anchor no-underline transition-colors duration-200"
          >
            {dict.programs.companyCta} →
          </Link>
          {dict.programs.companyGuideCta && (
            <Link
              href={`/${locale}/recursos/que-lo-pague-tu-empresa`}
              className="text-[0.9rem] font-semibold text-rose hover:text-anchor no-underline transition-colors duration-200"
            >
              {dict.programs.companyGuideCta} →
            </Link>
          )}
        </aside>
      </article>

      <Footer dict={dict.footer} nav={dict.nav} locale={locale} />
    </main>
  )
}
