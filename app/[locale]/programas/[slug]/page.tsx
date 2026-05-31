import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDictionary, locales } from '@/lib/i18n'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

type Props = { params: { locale: string; slug: string } }

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = []
  for (const locale of locales) {
    const dict = await getDictionary(locale)
    for (const item of dict.programs.items) {
      params.push({ locale, slug: item.slug })
    }
  }
  return params
}

export async function generateMetadata({
  params: { locale, slug },
}: Props): Promise<Metadata> {
  const dict = await getDictionary(locale)
  const item = dict.programs.items.find((i) => i.slug === slug)
  if (!item) return {}
  return {
    title: `${item.title} — Yaiza Temprado`,
    description: item.forWho,
    alternates: {
      canonical: `/${locale}/programas/${slug}`,
      languages: {
        en: `/en/programas/${slug}`,
        es: `/es/programas/${slug}`,
      },
    },
  }
}

export default async function ProgramPage({ params: { locale, slug } }: Props) {
  const dict = await getDictionary(locale)
  const item = dict.programs.items.find((i) => i.slug === slug)
  if (!item) notFound()

  return (
    <main className="max-w-[1200px] mx-auto px-6 pt-24 pb-[120px]" id="main">
      <Header locale={locale} dict={dict.nav} />

      <article className="max-w-[820px] mx-auto py-12 grid gap-10">
        <Link
          href={`/${locale}#services`}
          className="text-[0.85rem] font-semibold text-rose no-underline hover:text-anchor transition-colors duration-200"
        >
          {dict.programs.backToServices}
        </Link>

        <header className="grid gap-4">
          <span className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-rose bg-[#fdf0ec] rounded-full px-3 py-1 self-start">
            {item.tag}
          </span>
          <h1
            className="font-serif text-anchor leading-[1.1] tracking-[-0.005em]"
            style={{ fontSize: 'clamp(2.1rem, 3.2vw, 3rem)' }}
          >
            {item.title}
          </h1>
          <p className="text-slate leading-[1.7] text-[1.05rem]">
            <span className="font-semibold text-anchor">{dict.programs.forWhoLabel}: </span>
            {item.forWho}
          </p>
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[0.9rem] font-semibold text-plum">
            <span>{item.detail}</span>
            <span className="text-slate opacity-40" aria-hidden="true">
              ·
            </span>
            <span>{item.cadence}</span>
          </div>
        </header>

        <section className="grid gap-4">
          <h2 className="text-[1.15rem] font-bold text-anchor">
            {dict.programs.sessionsHeading}
          </h2>
          <ol className="grid gap-3 list-none p-0 m-0">
            {item.sessions.map((session, i) => (
              <li
                key={session.title}
                className="bg-card rounded-[16px] px-5 py-4 border border-[#f0e5e1] flex gap-4 items-start"
                style={{ boxShadow: '0 8px 16px rgba(60, 40, 42, 0.05)' }}
              >
                <span
                  className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[0.85rem] font-bold text-white"
                  style={{ background: 'linear-gradient(135deg, #cc6c4e, #b45b41)' }}
                >
                  {i + 1}
                </span>
                <div className="grid gap-1">
                  <h3 className="text-[1rem] font-bold text-anchor">{session.title}</h3>
                  <p className="text-slate leading-[1.6] text-[0.92rem]">
                    {session.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <div className="grid gap-3 justify-items-center text-center bg-card rounded-[20px] px-6 py-8 border border-[#f0e5e1]">
          <p className="text-[1.05rem] font-bold text-anchor">{item.detail}</p>
          <a
            href={item.buyHref}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full px-7 py-3 text-[0.9rem] font-semibold text-white no-underline transition-transform duration-200 hover:-translate-y-px"
            style={{
              background: 'linear-gradient(135deg, #cc6c4e, #b45b41)',
              boxShadow: '0 10px 20px rgba(204, 108, 78, 0.2)',
            }}
          >
            {item.cta}
          </a>
        </div>
      </article>

      <Footer dict={dict.footer} />
    </main>
  )
}
