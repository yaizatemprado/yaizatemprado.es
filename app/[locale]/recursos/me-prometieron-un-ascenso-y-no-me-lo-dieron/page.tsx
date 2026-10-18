import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary } from '@/lib/i18n'
import { articlePaths, faqText, getArticle, localesOf } from '@/lib/articles'
import { localizedAlternates, openGraph, SITE_URL } from '@/lib/seo'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/seo/JsonLd'
import ArticleView from '@/components/articles/ArticleView'

const SLUG = 'me-prometieron-un-ascenso-y-no-me-lo-dieron'
const PATH = `recursos/${SLUG}`

type Props = { params: { locale: string } }

// Spanish only: the English copy lives at promised-a-promotion-and-didnt-get-it.
export async function generateStaticParams() {
  return localesOf(SLUG).map((locale) => ({ locale }))
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const article = getArticle(SLUG, locale)
  if (!article) return {}
  const title = `${article.seoTitle ?? article.title} — Yaiza Temprado`
  return {
    title,
    description: article.description,
    alternates: localizedAlternates(locale, articlePaths(SLUG)),
    openGraph: { ...openGraph(locale, title, article.description, PATH, article.socialImage), type: 'article' },
  }
}

export default async function ArticlePage({ params: { locale } }: Props) {
  const article = getArticle(SLUG, locale)
  if (!article) notFound()
  const dict = await getDictionary(locale)
  const url = `${SITE_URL}/${locale}/${PATH}/`
  const author = { '@type': 'Person', '@id': `${SITE_URL}/#yaiza`, name: 'Yaiza Temprado' }
  const item = dict.resources.items.find((i) => i.slug === article.guide)
  const guide = item && {
    href: `/${locale}/recursos/${item.slug}/`,
    tag: dict.resources.guideLabel,
    title: item.title,
    summary: item.summary,
    cta: dict.resources.cardCta,
  }

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      url,
      mainEntityOfPage: url,
      inLanguage: locale === 'en' ? 'en-GB' : 'es-ES',
      ...(article.socialImage && { image: `${SITE_URL}${article.socialImage.src}` }),
      datePublished: article.published,
      dateModified: article.published,
      author,
      publisher: author,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: locale === 'en' ? 'en-GB' : 'es-ES',
      mainEntity: article.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: faqText(item) },
      })),
    },
  ]

  return (
    <main className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-20 pb-20 sm:pt-24 sm:pb-[120px]" id="main">
      <JsonLd data={schema} />
      <Header locale={locale} dict={dict.nav} />
      <ArticleView article={article} newsletter={dict.newsletter} guide={guide} />
      <Footer dict={dict.footer} nav={dict.nav} locale={locale} />
    </main>
  )
}
