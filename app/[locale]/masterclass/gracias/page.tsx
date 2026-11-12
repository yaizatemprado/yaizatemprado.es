import type { Metadata } from 'next'
import { getDictionary } from '@/lib/i18n'
import { BRAND } from '@/lib/clubpericia'
import { masterclass, googleCalendarUrl, ICS_URL, ZOOM_URL } from '@/lib/masterclass'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ClubLockup } from '@/components/club/ClubSections'

type Props = { params: { locale: string } }

// Where Kit sends people after signing up for the masterclass. Not for search engines.
export async function generateStaticParams() {
  return [{ locale: 'es' }]
}

export const metadata: Metadata = {
  title: masterclass.thanks.title,
  robots: { index: false, follow: false },
}

const pill = 'px-6 py-3 rounded-full text-[0.92rem] font-bold no-underline hover:opacity-90'

export default async function MasterclassGraciasPage({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)
  const t = masterclass.thanks
  return (
    <main className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-20 pb-20 sm:pt-24 sm:pb-[120px]" id="main">
      <Header locale={locale} dict={dict.nav} />
      <article className="max-w-[860px] mx-auto py-10 font-sans">
        <div className="grid gap-5 rounded-[20px] px-6 py-10 sm:px-12 sm:py-14" style={{ background: BRAND.night, color: BRAND.cream }}>
          <ClubLockup />
          <h1 className="font-extrabold leading-[1.12] tracking-[-0.02em]" style={{ fontSize: 'clamp(1.9rem, 5vw, 3.1rem)' }}>{t.heading}</h1>
          <p className="leading-[1.7] text-[1.02rem] opacity-90 max-w-[600px]">{t.body}</p>
          <div className="flex flex-wrap gap-3">
            <a href={googleCalendarUrl()} target="_blank" rel="noreferrer" className={pill} style={{ background: BRAND.terracotta, color: BRAND.cream }}>{t.google}</a>
            <a href={ICS_URL} download className={`${pill} border`} style={{ borderColor: BRAND.cream, color: BRAND.cream }}>{t.ics}</a>
          </div>
          <p className="leading-[1.7] text-[0.95rem] opacity-90 max-w-[600px] break-all">
            {t.zoomLead}{' '}
            <a href={ZOOM_URL} className="underline" style={{ color: BRAND.cream }}>{ZOOM_URL}</a>
          </p>
          <p className="leading-[1.7] text-[1.02rem] opacity-90 max-w-[600px]">{t.calendarLead}</p>
          <p className="leading-[1.7] text-[1.02rem] font-bold">{t.seeYou}</p>
        </div>
      </article>
      <Footer dict={dict.footer} nav={dict.nav} locale={locale} />
    </main>
  )
}
