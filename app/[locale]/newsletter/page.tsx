import type { Metadata } from 'next'
import { getDictionary, locales } from '@/lib/i18n'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import SubscribeForm from '@/components/newsletter/SubscribeForm'

type Props = { params: { locale: string } }

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const dict = await getDictionary(locale)
  return {
    title: `${dict.newsletter.heading} — Yaiza Temprado`,
    description: dict.newsletter.body.split('\n')[0],
    alternates: {
      canonical: `/${locale}/newsletter`,
      languages: { en: '/en/newsletter', es: '/es/newsletter' },
    },
  }
}

export default async function NewsletterPage({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)
  const paragraphs = dict.newsletter.body.split('\n')

  return (
    <>
      <main className="max-w-[1200px] mx-auto px-6 pt-24 pb-[120px]" id="main">
        <Header locale={locale} dict={dict.nav} />

        <section className="grid gap-6 justify-items-center text-center max-w-[640px] mx-auto py-20">
          <span className="text-[0.78rem] font-extrabold tracking-[0.22em] uppercase text-rose">
            {dict.newsletter.eyebrow}
          </span>

          <h1
            className="font-serif text-anchor leading-[1.1] tracking-[-0.005em]"
            style={{ fontSize: 'clamp(2.3rem, 3.2vw, 3.35rem)' }}
          >
            {dict.newsletter.heading}
          </h1>

          {paragraphs.map((p, i) => (
            <p key={i} className="text-slate leading-[1.7] text-[1rem]">
              {p}
            </p>
          ))}

          <div className="w-full mt-4">
            <SubscribeForm dict={dict.newsletter} locale={locale} />
          </div>
        </section>

        <Footer dict={dict.footer} />
      </main>
    </>
  )
}
