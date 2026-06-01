import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { getDictionary, locales } from '@/lib/i18n'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ResourceForm from '@/components/resources/ResourceForm'

type Props = { params: { locale: string; slug: string } }

export async function generateStaticParams() {
  const params: Array<{ locale: string; slug: string }> = []
  for (const locale of locales) {
    const dict = await getDictionary(locale)
    for (const item of dict.resources.items) {
      params.push({ locale, slug: item.slug })
    }
  }
  return params
}

export async function generateMetadata({
  params: { locale, slug },
}: Props): Promise<Metadata> {
  const dict = await getDictionary(locale)
  const item = dict.resources.items.find((i) => i.slug === slug)
  if (!item) return {}
  return {
    title: `${item.title} — Yaiza Temprado`,
    description: item.summary,
    alternates: {
      canonical: `/${locale}/recursos/${slug}`,
      languages: {
        en: `/en/recursos/${slug}`,
        es: `/es/recursos/${slug}`,
      },
    },
  }
}

export default async function ResourcePage({ params: { locale, slug } }: Props) {
  const dict = await getDictionary(locale)
  const item = dict.resources.items.find((i) => i.slug === slug)
  if (!item) notFound()

  return (
    <main className="max-w-[1200px] mx-auto px-6 pt-24 pb-[120px]" id="main">
      <Header locale={locale} dict={dict.nav} />

      <article className="max-w-[820px] mx-auto py-12 grid gap-10">
        <Link
          href={`/${locale}/recursos`}
          className="text-[0.85rem] font-semibold text-rose no-underline hover:text-anchor transition-colors duration-200"
        >
          {dict.resources.backLabel}
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
          <p className="text-slate leading-[1.7] text-[1.05rem]">{item.summary}</p>
          <p className="text-slate leading-[1.7] text-[1.05rem]">
            <span className="font-semibold text-anchor">{dict.resources.forWhoLabel}: </span>
            {item.forWho}
          </p>
        </header>

        <section className="grid gap-4">
          <h2 className="text-[1.15rem] font-bold text-anchor">
            {dict.resources.insideHeading}
          </h2>
          <ul className="grid gap-3 list-none p-0 m-0">
            {item.highlights.map((h) => (
              <li
                key={h.title}
                className="bg-card rounded-[16px] px-5 py-4 border border-[#f0e5e1] grid gap-1"
                style={{ boxShadow: '0 8px 16px rgba(60, 40, 42, 0.05)' }}
              >
                <h3 className="text-[1rem] font-bold text-anchor">{h.title}</h3>
                <p className="text-slate leading-[1.6] text-[0.92rem]">{h.description}</p>
              </li>
            ))}
          </ul>
        </section>

        <ResourceForm dict={dict.resources} kitFormId={item.kitFormId} />
      </article>

      <Footer dict={dict.footer} />
    </main>
  )
}
