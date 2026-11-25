import type { Metadata } from 'next'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { List, ListRow, SectionHeader, pageColumn } from '@/components/ui/Section'
import { getDictionary, locales } from '@/lib/i18n'
import { alternates, openGraph, SITE_URL } from '@/lib/seo'
import { articleHref } from '@/lib/articles'
import JsonLd from '@/components/seo/JsonLd'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

type Props = { params: { locale: string } }

// The 15-minute call is a different Cal.com event per language.
// Companies get a 45-minute call, not the 15-minute diagnostic (Yaiza, 25/11). One Cal.com event for both languages.
const DIAGNOSTIC: Record<string, string> = {
  es: 'https://cal.com/yaiza-temprado/empresas?canal=web-empresas',
  en: 'https://cal.com/yaiza-temprado/empresas?canal=web-empresas-en',
}

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const dict = await getDictionary(locale)
  const title = `${dict.companies.heading} — Yaiza Temprado`
  return {
    title,
    description: dict.companies.seoDescription,
    alternates: alternates(locale, 'empresas'),
    openGraph: openGraph(locale, title, dict.companies.seoDescription, 'empresas'),
  }
}

// The page's headings are topics, and a FAQ rich result needs questions. Only the
// wording of the question lives here: every answer is the page's visible copy.
const FAQ_QUESTIONS: Record<string, string[]> = {
  es: [
    '¿Qué es el Método Pericia para empresas?',
    '¿Por qué no basta con un curso de management?',
    '¿Qué hace que lo aprendido se aplique?',
    '¿Cómo funciona?',
    '¿Cómo se mide si ha funcionado?',
    '¿Quién lo imparte?',
  ],
  en: [
    'What is Método Pericia for companies?',
    "Why isn't a management course enough?",
    'What makes the learning stick?',
    'How does it work?',
    "How do you measure whether it's worked?",
    'Who delivers it?',
  ],
}

const bodyClass = 'text-slate leading-[1.7] text-[0.98rem] sm:text-[1.02rem]'
const linkClass =
  'font-semibold text-rose hover:text-anchor no-underline transition-colors duration-200'

export default async function CompaniesPage({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)
  const c = dict.companies
  const diagnosticHref = DIAGNOSTIC[locale] ?? DIAGNOSTIC.es
  const mailto = `mailto:hola@yaizatemprado.es?subject=${encodeURIComponent(c.ctaMailSubject)}`
  const pageUrl = `${SITE_URL}/${locale}/empresas/`
  const quote = locale === 'en' ? `“${c.problemQuote}”` : `«${c.problemQuote}»`
  const join = (xs: Array<{ title: string; body: string }>) =>
    xs.map((x) => `${x.title}: ${x.body}`).join(' ')

  const q = FAQ_QUESTIONS[locale] ?? FAQ_QUESTIONS.es
  const faqPairs: Array<[string, string]> = [
    [q[0], c.lead],
    [q[1], `${quote} ${c.problemBody}`],
    [q[2], `${c.whyLead} ${c.why.map((w) => `${w.title}: ${w.body} (${w.source})`).join(' ')}`],
    [q[3], `${c.howLead} ${join(c.steps)}`],
    [q[4], `${c.measureLead} ${join(c.measures)}`],
    [c.fundaeHeading, c.fundaeBody],
    [q[5], c.whoBody],
  ]

  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: locale === 'en' ? 'en-GB' : 'es-ES',
    mainEntity: faqPairs.map(([question, answer]) => ({
      '@type': 'Question',
      name: question,
      acceptedAnswer: { '@type': 'Answer', text: answer },
    })),
  }

  // No price: this programme is quoted per company.
  const service = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: c.heading,
    serviceType: locale === 'en' ? 'Management development programme' : 'Programa de desarrollo de managers',
    description: c.lead,
    url: pageUrl,
    areaServed: 'ES',
    provider: { '@type': 'Person', '@id': `${SITE_URL}/#yaiza`, name: 'Yaiza Temprado' },
  }

  const ctas = (
    <div className="flex flex-wrap gap-3">
      <Button href={mailto}>{c.ctaPrimary}</Button>
      <Button href={diagnosticHref} external variant="secondary">
        {c.ctaSecondary}
      </Button>
    </div>
  )

  return (
    <main className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-20 pb-20 sm:pt-24 sm:pb-[120px]" id="main">
      <JsonLd data={[faq, service]} />
      <Header locale={locale} dict={dict.nav} />

      <article className={`${pageColumn} py-6 grid gap-16`}>
        <header className="grid gap-6">
          <SectionHeader as="h1" eyebrow={c.eyebrow} title={c.heading} lead={c.lead} />
          {ctas}
        </header>

        <section className="grid gap-6 md:grid-cols-[minmax(0,380px)_minmax(0,1fr)] md:gap-12">
          <SectionHeader title={c.problemHeading} />
          <div className="grid gap-4">
            <blockquote className="border-l-[3px] border-rose pl-5 font-serif text-anchor text-[1.2rem] sm:text-[1.35rem] leading-[1.5] m-0">
              {quote}
              <footer className="mt-2 font-sans text-[0.85rem] text-slate not-italic">Yaiza Temprado</footer>
            </blockquote>
            <p className={bodyClass}>{c.problemBody}</p>
          </div>
        </section>

        <section className="grid gap-8">
          <SectionHeader title={c.whyHeading} lead={c.whyLead} />
          <List>
            {c.why.map((w) => (
              <ListRow key={w.title} title={w.title}>
                <p>{w.body}</p>
                <p className="text-slate/80 text-[0.8rem] italic">{w.source}</p>
              </ListRow>
            ))}
          </List>
        </section>

        <section className="grid gap-8">
          <SectionHeader title={c.howHeading} lead={c.howLead} />
          <List>
            {c.steps.map((s, i) => (
              <ListRow key={s.title} title={s.title} tag={String(i + 1).padStart(2, '0')}>
                <p>{s.body}</p>
              </ListRow>
            ))}
          </List>
        </section>

        <section className="grid gap-8">
          <SectionHeader title={c.measureHeading} lead={c.measureLead} />
          <List>
            {c.measures.map((m) => (
              <ListRow key={m.title} title={m.title}>
                <p>{m.body}</p>
              </ListRow>
            ))}
          </List>
        </section>

        {/* Same shape as «Sobre mí» on the home: photo left, text right. Laura's photo 44 (Nov 2026), cropped narrow
            so the stairs and the door are out (Yaiza, 25/11). */}
        <section className="grid gap-8 md:grid-cols-[minmax(0,260px)_minmax(0,1fr)] md:gap-12 md:items-stretch">
          <img
            src="/assets/yaiza-44.webp"
            alt="Yaiza Temprado"
            width={812}
            height={1300}
            className="w-full max-w-[260px] aspect-[5/8] md:aspect-auto md:h-full object-cover rounded-[20px] border border-line"
            style={{ boxShadow: '0 20px 40px rgba(46, 35, 36, 0.12)' }}
          />
          <div className="grid gap-4">
            <SectionHeader title={c.whoHeading} />
            <p className={bodyClass}>{c.whoBody}</p>
            <div className="grid gap-5 border-y border-line py-5 my-2">
              {[
                { label: c.whoCompanies.label, items: c.whoCompanies.names },
                { label: c.whoCompanies.countriesLabel, items: c.whoCompanies.countries },
              ].map((g) => (
                <div key={g.label} className="grid gap-1.5">
                  <p className="text-[0.72rem] font-extrabold tracking-[0.16em] uppercase text-rose">{g.label}</p>
                  <p className="font-serif text-anchor text-[1.2rem] sm:text-[1.35rem] leading-[1.3] flex flex-wrap gap-x-6 gap-y-1">
                    {g.items.map((n) => (
                      <span key={n}>{n}</span>
                    ))}
                  </p>
                </div>
              ))}
            </div>
            <a href="https://www.linkedin.com/in/yaiza/" target="_blank" rel="noreferrer" className={`text-[1.02rem] ${linkClass}`}>
              LinkedIn →
            </a>
          </div>
        </section>

        <List>
          <ListRow title={c.fundaeHeading}>
            <p>{c.fundaeBody}</p>
          </ListRow>
        </List>

        {/* Closing band, dark like the home newsletter. */}
        <section className="grid gap-5 rounded-[24px] bg-anchor text-cream px-6 py-10 sm:px-12 sm:py-12">
          <h2 className="font-serif text-cream leading-[1.15]" style={{ fontSize: 'clamp(1.6rem, 4vw, 2.6rem)' }}>
            {c.ctaHeading}
          </h2>
          <p className="text-cream/85 leading-[1.7] text-[1rem] max-w-[620px]">{c.ctaBody}</p>
          <div className="flex flex-wrap gap-3">
            <Button href={mailto}>{c.ctaPrimary}</Button>
            <Button href={diagnosticHref} external variant="onDark">
              {c.ctaSecondary}
            </Button>
          </div>
        </section>

        <p className="text-[0.95rem] text-slate">
          {c.individual.text}{' '}
          <Link href={`/${locale}#services`} className={linkClass}>
            {c.individual.cta} →
          </Link>{' '}
          ·{' '}
          <Link href={articleHref('que-lo-pague-tu-empresa', locale)} className={linkClass}>
            {dict.programs.companyGuideCta} →
          </Link>
        </p>
      </article>

      <Footer dict={dict.footer} nav={dict.nav} locale={locale} />
    </main>
  )
}
