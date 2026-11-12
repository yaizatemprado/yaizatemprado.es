import type { Metadata } from 'next'
import { getDictionary } from '@/lib/i18n'
import { alternates, openGraph } from '@/lib/seo'
import { BRAND } from '@/lib/clubpericia'
import { masterclass as m, MASTERCLASS_FORM_ACTION } from '@/lib/masterclass'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { ClubLockup } from '@/components/club/ClubSections'

type Props = { params: { locale: string } }

// Spanish only, like the club.
export async function generateStaticParams() {
  return [{ locale: 'es' }]
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  return {
    title: m.title,
    description: m.description,
    alternates: alternates(locale, 'masterclass', ['es']),
    openGraph: openGraph(locale, m.title, m.description, 'masterclass'),
  }
}

const h2 = 'font-sans font-extrabold text-[1.5rem] sm:text-[1.85rem] leading-[1.2] tracking-[-0.01em]'
const body = 'leading-[1.7] text-[0.98rem] sm:text-[1.02rem]'
const pill = 'px-6 py-3 rounded-full text-[0.92rem] font-bold no-underline transition-opacity'
const input = 'flex-1 min-w-0 px-5 py-3 rounded-full text-[0.95rem] outline-none border focus:ring-2'

// Posts straight to the Kit form (same pattern as the club waitlist); Kit redirects to MASTERCLASS_THANKS.
function SignupForm({ onDark = false, id }: { onDark?: boolean; id: string }) {
  const field = { background: onDark ? BRAND.cream : '#fff', color: BRAND.night, borderColor: onDark ? BRAND.cream : '#EADFD8' }
  return (
    <form action={MASTERCLASS_FORM_ACTION} method="post" className="grid gap-2 w-full max-w-[520px]">
      <div className="flex flex-col sm:flex-row gap-2">
        <label htmlFor={`${id}-name`} className="sr-only">Nombre</label>
        <input id={`${id}-name`} type="text" name="fields[first_name]" autoComplete="given-name" placeholder={m.namePlaceholder} className={`${input} sm:max-w-[170px]`} style={field} />
        <label htmlFor={`${id}-email`} className="sr-only">Email</label>
        <input id={`${id}-email`} type="email" name="email_address" required autoComplete="email" placeholder={m.emailPlaceholder} className={input} style={field} />
      </div>
      <button type="submit" className={`${pill} hover:opacity-90 justify-self-start`} style={{ background: BRAND.terracotta, color: BRAND.cream }}>
        {m.cta}
      </button>
      <p className={`text-[0.75rem] leading-[1.5] ${onDark ? 'opacity-70' : 'text-slate'}`}>{m.formNote}</p>
    </form>
  )
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 list-none p-0 m-0">
      {items.map((o) => (
        <li key={o} className="flex gap-3 items-start text-slate text-[0.98rem] leading-[1.6]">
          <span className="shrink-0 mt-[0.45rem] w-2.5 h-2.5 rotate-45" style={{ background: BRAND.terracotta }} />
          {o}
        </li>
      ))}
    </ul>
  )
}

export default async function MasterclassPage({ params: { locale } }: Props) {
  const dict = await getDictionary(locale)
  return (
    <main className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-20 pb-20 sm:pt-24 sm:pb-[120px]" id="main">
      <Header locale={locale} dict={dict.nav} />
      <article className="max-w-[860px] mx-auto py-10 grid gap-14 font-sans">
        <header className="grid gap-5 rounded-[20px] px-6 py-10 sm:px-12 sm:py-14" style={{ background: BRAND.night, color: BRAND.cream }}>
          <ClubLockup />
          <p className="text-[0.85rem] font-extrabold tracking-[0.08em] uppercase" style={{ color: BRAND.terracotta }}>{m.eyebrow}</p>
          <h1 className="font-extrabold leading-[1.12] tracking-[-0.02em]" style={{ fontSize: 'clamp(1.9rem, 5vw, 3.1rem)' }}>{m.heading}</h1>
          <p className={`${body} opacity-90 max-w-[640px]`}>{m.lead}</p>
          <div className="mt-2"><SignupForm onDark id="top" /></div>
        </header>

        <section className="grid gap-4">
          <h2 className={h2} style={{ color: BRAND.night }}>{m.takeHeading}</h2>
          <Bullets items={m.take} />
        </section>

        <section className="grid gap-4 rounded-[14px] px-6 py-6 border" style={{ background: BRAND.cream, borderColor: '#EADFD8' }}>
          <h2 className={h2} style={{ color: BRAND.night }}>{m.logisticsHeading}</h2>
          <Bullets items={m.logistics} />
          <SignupForm id="bottom" />
        </section>

        <section className="grid gap-2">
          <h2 className={h2} style={{ color: BRAND.night }}>{m.whoHeading}</h2>
          <p className={`${body} text-slate`}>{m.whoBody}</p>
        </section>
      </article>
      <Footer dict={dict.footer} nav={dict.nav} locale={locale} />
    </main>
  )
}
