import type { Metadata } from 'next'
import { getDictionary, locales } from '@/lib/i18n'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Expertise from '@/components/home/Expertise'
import Proof from '@/components/home/Proof'
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
    alternates: {
      canonical: `/${locale}`,
      languages: { en: '/en', es: '/es' },
    },
    openGraph: {
      title: dict.meta.title,
      description: dict.meta.description,
      url: `https://yaizatemprado.es/${locale}`,
    },
  }
}

function Divider() {
  return (
    <div
      aria-hidden="true"
      className="h-px my-[72px]"
      style={{ background: 'linear-gradient(90deg, transparent, #e3d2cc, transparent)' }}
    />
  )
}

export default async function LocalePage({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)

  return (
    <>
      <a
        href="#main"
        className="absolute left-4 top-4 px-3.5 py-2.5 rounded-full bg-white border border-[#eadbd6] text-anchor font-semibold no-underline z-[999] -translate-y-[150%] focus-visible:translate-y-0 transition-transform duration-200"
      >
        Skip to content
      </a>

      <main className="max-w-[1200px] mx-auto px-6 pt-24 pb-[120px]" id="main">
        <Header locale={locale} dict={dict.nav} />
        <Hero dict={dict.hero} locale={locale} />
        <Divider />
        <About dict={dict.about} />
        <Divider />
        <Expertise dict={dict.expertise} />
        <Divider />
        <Proof dict={dict.proof} />
        <Divider />
        <Connect dict={dict.connect} locale={locale} />
        <Footer dict={dict.footer} />
      </main>
    </>
  )
}
