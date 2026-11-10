import type { Metadata } from 'next'
import { getDictionary } from '@/lib/i18n'
import { alternates, openGraph, SITE_URL } from '@/lib/seo'
import { club } from '@/lib/clubpericia'
import JsonLd from '@/components/seo/JsonLd'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Hero, Scenes, Outcomes, Numbered } from '@/components/club/ClubSections'
import { Edition, Who, Testimonials, Faq, Closing } from '@/components/club/ClubDetails'

type Props = { params: { locale: string } }

// Spanish only: the club runs in Spanish, so no /en/ copy and no English hreflang.
export async function generateStaticParams() {
  return [{ locale: 'es' }]
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return {
    title: club.title,
    description: club.description,
    alternates: alternates(locale, 'clubpericia', ['es']),
    openGraph: openGraph(locale, club.title, club.description, 'clubpericia'),
  }
}

// Section order borrowed from the Maven course pages Yaiza uses as reference:
// promise → recognition → outcomes → how → edition → who → FAQ. Modules go back in once defined.
export default async function ClubPericiaPage({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)

  // FAQ schema has to match what a reader sees: same questions, same answers.
  const faq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    inLanguage: 'es-ES',
    url: `${SITE_URL}/es/clubpericia/`,
    mainEntity: club.faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  }

  return (
    <main className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-20 pb-20 sm:pt-24 sm:pb-[120px]" id="main">
      <JsonLd data={[faq]} />
      <Header locale={locale} dict={dict.nav} />

      <article className="max-w-[860px] mx-auto py-10 grid gap-14 font-sans">
        <Hero />
        <Scenes />
        <Outcomes />
        <Numbered heading={club.howHeading} items={club.steps} />
        <Edition />
        <Who />
        <Testimonials />
        <Faq />
        <Closing />
      </article>

      <Footer dict={dict.footer} nav={dict.nav} locale={locale} />
    </main>
  )
}
