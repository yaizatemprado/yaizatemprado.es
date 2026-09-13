import type { Metadata } from 'next'
import { getDictionary, locales } from '@/lib/i18n'
import { alternates, openGraph, SAME_AS, SITE_URL } from '@/lib/seo'
import JsonLd from '@/components/seo/JsonLd'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Expertise from '@/components/home/Expertise'
import Resources from '@/components/home/Resources'
import Services from '@/components/home/Services'
import Connect from '@/components/home/Connect'

type Props = { params: { locale: string } }

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const dict = await getDictionary(locale)
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: alternates(locale),
    openGraph: openGraph(locale, dict.meta.title, dict.meta.description),
  }
}

function Divider() {
  return (
    <div
      aria-hidden="true"
      className="h-px my-12 sm:my-[72px]"
      style={{ background: 'linear-gradient(90deg, transparent, #e6ded7, transparent)' }}
    />
  )
}

export default async function LocalePage({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)

  const person = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    '@id': `${SITE_URL}/#yaiza`,
    name: 'Yaiza Temprado',
    jobTitle: dict.hero.eyebrow,
    description: dict.meta.description,
    url: `${SITE_URL}/${locale}/`,
    image: `${SITE_URL}/assets/yaiza.webp`,
    knowsLanguage: ['es', 'en'],
    sameAs: SAME_AS,
  }

  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    name: 'Yaiza Temprado',
    url: `${SITE_URL}/${locale}/`,
    inLanguage: locale === 'en' ? 'en-GB' : 'es-ES',
    publisher: { '@id': `${SITE_URL}/#yaiza` },
  }

  return (
    <>
      <JsonLd data={[person, website]} />
      <a
        href="#main"
        className="absolute left-4 top-4 px-3.5 py-2.5 rounded-xl bg-white border border-line text-anchor font-semibold no-underline z-[999] -translate-y-[150%] focus-visible:translate-y-0 transition-transform duration-200"
      >
        Skip to content
      </a>

      <main className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-20 pb-20 sm:pt-24 sm:pb-[120px]" id="main">
        <Header locale={locale} dict={dict.nav} />
        <Hero dict={dict.hero} />
        <Divider />
        <About dict={dict.about} />
        <Divider />
        <Expertise dict={dict.expertise} />
        <Divider />
        <Resources dict={dict.resources} locale={locale} />
        <Divider />
        <Services dict={dict.services} locale={locale} />
        <Divider />
        <Connect dict={dict.connect} newsletterDict={dict.newsletter} />
        <Footer dict={dict.footer} nav={dict.nav} locale={locale} />
      </main>
    </>
  )
}
