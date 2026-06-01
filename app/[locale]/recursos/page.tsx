import type { Metadata } from 'next'
import Link from 'next/link'
import { getDictionary, locales } from '@/lib/i18n'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

type Props = { params: { locale: string } }

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const dict = await getDictionary(locale)
  return {
    title: `${dict.resources.heading} — Yaiza Temprado`,
    description: dict.resources.lead,
    alternates: {
      canonical: `/${locale}/recursos`,
      languages: { en: '/en/recursos', es: '/es/recursos' },
    },
  }
}

export default async function ResourcesPage({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)

  return (
    <main className="max-w-[1200px] mx-auto px-6 pt-24 pb-[120px]" id="main">
      <Header locale={locale} dict={dict.nav} />

      <section className="max-w-[820px] mx-auto py-12 grid gap-10">
        <header className="grid gap-4 text-center justify-items-center">
          <span className="text-[0.78rem] font-extrabold tracking-[0.22em] uppercase text-rose">
            {dict.resources.eyebrow}
          </span>
          <h1
            className="font-serif text-anchor leading-[1.1] tracking-[-0.005em]"
            style={{ fontSize: 'clamp(2.1rem, 3.2vw, 3rem)' }}
          >
            {dict.resources.heading}
          </h1>
          <p className="text-slate leading-[1.7] text-[1.05rem] max-w-[620px]">
            {dict.resources.lead}
          </p>
        </header>

        <ul className="grid gap-5 list-none p-0 m-0 sm:grid-cols-2">
          {dict.resources.items.map((item) => (
            <li key={item.slug}>
              <Link
                href={`/${locale}/recursos/${item.slug}`}
                className="group grid gap-3 h-full bg-card rounded-[20px] px-6 py-7 border border-[#f0e5e1] no-underline transition-transform duration-200 hover:-translate-y-px"
                style={{ boxShadow: '0 8px 16px rgba(60, 40, 42, 0.05)' }}
              >
                <span className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-rose bg-[#fdf0ec] rounded-full px-3 py-1 self-start">
                  {item.tag}
                </span>
                <h2 className="font-serif text-[1.3rem] text-anchor leading-[1.2]">
                  {item.title}
                </h2>
                <p className="text-slate leading-[1.6] text-[0.92rem]">{item.summary}</p>
                <span className="mt-1 text-[0.85rem] font-semibold text-rose group-hover:text-anchor transition-colors duration-200">
                  {dict.resources.cardCta} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <Footer dict={dict.footer} />
    </main>
  )
}
