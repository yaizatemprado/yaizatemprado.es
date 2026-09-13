import type { Metadata } from 'next'
import { Fragment } from 'react'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDictionary, locales } from '@/lib/i18n'
import { alternates, openGraph, SITE_URL } from '@/lib/seo'
import JsonLd from '@/components/seo/JsonLd'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ResourceForm from '@/components/resources/ResourceForm'

type Props = { params: { locale: string; slug: string } }

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = []
  for (const locale of locales) {
    const dict = await getDictionary(locale)
    for (const item of dict.resources.items) {
      params.push({ locale, slug: item.slug })
    }
  }
  return params
}

export async function generateMetadata({
  params: { locale, slug },
}: Props): Promise<Metadata> {
  const dict = await getDictionary(locale)
  const item = dict.resources.items.find((i) => i.slug === slug)
  if (!item) return {}
  return {
    title: `${item.title} — Yaiza Temprado`,
    description: item.summary,
    alternates: alternates(locale, `recursos/${slug}`),
    openGraph: openGraph(
      locale,
      `${item.title} — Yaiza Temprado`,
      item.summary,
      `recursos/${slug}`,
    ),
  }
}

export default async function ResourcePage({ params: { locale, slug } }: Props) {
  const dict = await getDictionary(locale)
  const item = dict.resources.items.find((i) => i.slug === slug)
  if (!item) notFound()

  // No datePublished: the dictionary does not carry one and inventing a date
  // would be worse than leaving it out. Add one to the dictionary when these
  // guides get a real publication date.
  const article = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: item.title,
    description: item.summary,
    url: `${SITE_URL}/${locale}/recursos/${slug}/`,
    mainEntityOfPage: `${SITE_URL}/${locale}/recursos/${slug}/`,
    inLanguage: locale === 'en' ? 'en-GB' : 'es-ES',
    author: { '@type': 'Person', '@id': `${SITE_URL}/#yaiza`, name: 'Yaiza Temprado' },
    publisher: { '@type': 'Person', '@id': `${SITE_URL}/#yaiza`, name: 'Yaiza Temprado' },
    about: item.highlights.map((h) => h.title),
  }

  // Two-tier paywall: the paid guide is a superset of the free one, so the free
  // chapters come first and the paid ones are appended. The free column ticks
  // the first N, the paid column ticks them all.
  const freeCount = item.highlights.length
  const allChapters = [...item.highlights, ...(item.paid?.highlights ?? [])]

  return (
    <main className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-20 pb-20 sm:pt-24 sm:pb-[120px]" id="main">
      <JsonLd data={article} />
      <Header locale={locale} dict={dict.nav} />

      <article className="max-w-[820px] mx-auto py-12 grid grid-cols-1 gap-10">
        <Link
          href={`/${locale}/recursos`}
          className="text-[0.85rem] font-semibold text-rose no-underline hover:text-anchor transition-colors duration-200"
        >
          {dict.resources.backLabel}
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
          <p className="text-slate leading-[1.7] text-[0.98rem] sm:text-[1.05rem]">{item.summary}</p>
          <p className="text-slate leading-[1.7] text-[0.98rem] sm:text-[1.05rem]">
            <span className="font-semibold text-anchor">{dict.resources.forWhoLabel}: </span>
            {item.forWho}
          </p>
        </header>

        {item.paid ? (
          <>
            <section className="grid grid-cols-1 gap-5">
              <h2 className="text-[1.15rem] font-bold text-anchor">
                {dict.resources.chooseHeading}
              </h2>

              {/* Comparison table: chapters listed once, two tick columns */}
              <div className="min-w-0 rounded-[14px] border border-line overflow-hidden bg-card grid grid-cols-[minmax(0,1fr)_3rem_3.75rem] sm:grid-cols-[minmax(0,1fr)_6.5rem_7.5rem]">
                {/* Header */}
                <div className="px-5 py-4 flex items-end">
                  <span className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-slate/60">
                    {dict.resources.insideHeading}
                  </span>
                </div>
                <div className="px-1 py-4 border-l border-line flex flex-col items-center justify-end text-center">
                  <span className="text-[0.8rem] font-bold text-anchor leading-tight">
                    {dict.resources.freePlanName}
                  </span>
                  <span className="text-[0.82rem] font-extrabold text-slate">
                    {dict.resources.freePlanPrice}
                  </span>
                </div>
                <div className="px-1 py-4 bg-stone flex flex-col items-center justify-end text-center">
                  <span className="text-[0.8rem] font-bold text-rose leading-tight">
                    {dict.resources.paidPlanName}
                  </span>
                  <span className="text-[0.82rem] font-extrabold text-anchor">
                    {item.paid.price}
                  </span>
                </div>

                {/* Rows */}
                {allChapters.map((c, i) => {
                  const included = i < freeCount
                  return (
                    <Fragment key={c.title}>
                      <div className="px-4 sm:px-5 py-3.5 border-t border-line grid gap-0.5">
                        <span className="text-[0.9rem] sm:text-[0.92rem] font-semibold text-anchor leading-[1.35]">
                          {c.title}
                        </span>
                        <span className="hidden sm:block text-[0.8rem] leading-[1.4] text-slate">
                          {c.description}
                        </span>
                      </div>
                      <div className="border-t border-l border-line flex items-center justify-center">
                        {included ? (
                          <span className="w-5 h-5 rounded-full bg-[#e7f4ec] text-emerald-700 flex items-center justify-center text-[0.72rem] font-bold">
                            ✓
                          </span>
                        ) : (
                          <span className="w-5 h-5 rounded-full bg-[#f1eae7] text-slate/40 flex items-center justify-center text-[0.72rem] font-bold">
                            ✕
                          </span>
                        )}
                      </div>
                      <div className="border-t border-line bg-stone flex items-center justify-center">
                        <span className="w-5 h-5 rounded-full bg-emerald-600 text-white flex items-center justify-center text-[0.72rem] font-bold">
                          ✓
                        </span>
                      </div>
                    </Fragment>
                  )
                })}
              </div>

              {/* Action cards: free and paid side by side, not mutually exclusive */}
              <div className="grid gap-5 sm:grid-cols-2 items-stretch">
                {/* Free */}
                <div
                  className="flex flex-col gap-4 bg-card rounded-[14px] px-6 py-6 border border-line"
                  style={{ boxShadow: '0 8px 16px rgba(60, 40, 42, 0.05)' }}
                >
                  <div className="grid gap-1">
                    <h3 className="font-serif text-[1.25rem] text-anchor leading-tight">
                      {dict.resources.freePlanName}
                    </h3>
                    <p className="text-[0.88rem] leading-[1.4] text-slate">
                      {dict.resources.freePlanDesc}
                    </p>
                  </div>
                  <div className="mt-auto">
                    <ResourceForm dict={dict.resources} kitFormId={item.kitFormId} compact />
                  </div>
                </div>

                {/* Paid */}
                <div
                  className="flex flex-col gap-4 bg-stone rounded-[14px] px-6 py-6 border-2 border-rose"
                  style={{ boxShadow: '0 8px 16px rgba(60, 40, 42, 0.06)' }}
                >
                  <div className="grid gap-1">
                    <h3 className="font-serif text-[1.25rem] text-anchor leading-tight">
                      {dict.resources.paidPlanName}
                    </h3>
                    <p className="text-[0.88rem] leading-[1.4] text-slate">
                      {dict.resources.paidPlanDesc}
                    </p>
                  </div>
                  <div className="mt-auto grid gap-2">
                    <a
                      href={item.paid.buyHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full text-center rounded-xl px-6 py-3 text-[0.95rem] font-semibold text-white no-underline transition-transform duration-200 hover:-translate-y-px"
                      style={{
                        background: '#cc6c4e',
                        boxShadow: '0 6px 14px rgba(46, 35, 36, 0.12)',
                      }}
                    >
                      {dict.resources.paidCta} · {item.paid.price} →
                    </a>
                    <p className="text-[0.78rem] text-slate/70 text-center">
                      {dict.resources.paidReassurance}
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="grid gap-4">
              <h2 className="text-[1.15rem] font-bold text-anchor">
                {dict.resources.insideHeading}
              </h2>
              <ul className="grid gap-3 list-none p-0 m-0">
                {item.highlights.map((h) => (
                  <li
                    key={h.title}
                    className="bg-card rounded-[12px] px-5 py-4 border border-line grid gap-1"
                    style={{ boxShadow: '0 8px 16px rgba(60, 40, 42, 0.05)' }}
                  >
                    <h3 className="text-[1rem] font-bold text-anchor">{h.title}</h3>
                    <p className="text-slate leading-[1.6] text-[0.92rem]">{h.description}</p>
                  </li>
                ))}
              </ul>
            </section>

            <ResourceForm dict={dict.resources} kitFormId={item.kitFormId} />
          </>
        )}
      </article>

      <Footer dict={dict.footer} nav={dict.nav} locale={locale} />
    </main>
  )
}
