import type { Metadata } from 'next'
import { getDictionary } from '@/lib/i18n'
import { club, BRAND, DIAGNOSTIC_URL } from '@/lib/clubpericia'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ClubLockup } from '@/components/club/ClubSections'

type Props = { params: { locale: string } }

// Where Kit sends people after joining the waitlist (form 10169707's redirect). Not for search engines.
export async function generateStaticParams() {
  return [{ locale: 'es' }]
}

export const metadata: Metadata = {
  title: club.thanks.title,
  robots: { index: false, follow: false },
}

export default async function ClubGraciasPage({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)
  const t = club.thanks
  return (
    <main className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-20 pb-20 sm:pt-24 sm:pb-[120px]" id="main">
      <Header locale={locale} dict={dict.nav} />
      <article className="max-w-[860px] mx-auto py-10 font-sans">
        <div className="grid gap-5 rounded-[20px] px-6 py-10 sm:px-12 sm:py-14" style={{ background: BRAND.night, color: BRAND.cream }}>
          <ClubLockup />
          <h1 className="font-extrabold leading-[1.12] tracking-[-0.02em]" style={{ fontSize: 'clamp(1.9rem, 5vw, 3.1rem)' }}>
            {t.heading}
          </h1>
          <p className="leading-[1.7] text-[1.02rem] opacity-90 max-w-[600px]">{t.body}</p>
          <p className="leading-[1.7] text-[1.02rem] opacity-90 max-w-[600px]">{t.diagnosticLead}</p>
          <div className="flex flex-wrap gap-3 mt-1">
            <a
              href={DIAGNOSTIC_URL.replace('canal=web-club', 'canal=web-club-gracias')}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-full text-[0.92rem] font-bold no-underline hover:opacity-90"
              style={{ background: BRAND.terracotta, color: BRAND.cream }}
            >
              {club.ctaSecondary}
            </a>
            <a
              href="/es/clubpericia/"
              className="px-6 py-3 rounded-full text-[0.92rem] font-bold no-underline border hover:opacity-80"
              style={{ borderColor: BRAND.cream, color: BRAND.cream }}
            >
              {t.back}
            </a>
          </div>
        </div>
      </article>
      <Footer dict={dict.footer} nav={dict.nav} locale={locale} />
    </main>
  )
}
