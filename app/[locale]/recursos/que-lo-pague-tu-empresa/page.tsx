import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getDictionary } from '@/lib/i18n'
import { getArticle, plainText } from '@/lib/articles'
import { alternates, openGraph, SITE_URL } from '@/lib/seo'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import JsonLd from '@/components/seo/JsonLd'
import ArticleView from '@/components/articles/ArticleView'

const SLUG = 'que-lo-pague-tu-empresa'
const PATH = `recursos/${SLUG}`

type Props = { params: { locale: string } }

// Spanish only: FUNDAE and the whole case are Spain-specific, so /en has no copy.
export async function generateStaticParams() {
  const article = getArticle(SLUG)
  return article ? [{ locale: article.locale }] : []
}

export async function generateMetadata({ params: { locale } }: Props): Promise<Metadata> {
  const article = getArticle(SLUG)
  if (!article || article.locale !== locale) return {}
  const title = `${article.title} — Yaiza Temprado`
  return {
    title,
    description: article.description,
    alternates: alternates(locale, PATH, [article.locale]),
    openGraph: { ...openGraph(locale, title, article.description, PATH), type: 'article' },
  }
}

export default async function ArticlePage({ params: { locale } }: Props) {
  const article = getArticle(SLUG)
  if (!article || article.locale !== locale) notFound()
  const dict = await getDictionary(locale)
  const url = `${SITE_URL}/${locale}/${PATH}/`
  const author = { '@type': 'Person', '@id': `${SITE_URL}/#yaiza`, name: 'Yaiza Temprado' }

  const schema = [
    {
      '@context': 'https://schema.org',
      '@type': 'Article',
      headline: article.title,
      description: article.description,
      url,
      mainEntityOfPage: url,
      inLanguage: 'es-ES',
      datePublished: article.published,
      dateModified: article.published,
      author,
      publisher: author,
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      inLanguage: 'es-ES',
      mainEntity: article.faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: plainText(item.answer) },
      })),
    },
  ]

  return (
    <main className="max-w-[1200px] mx-auto px-5 sm:px-6 pt-20 pb-20 sm:pt-24 sm:pb-[120px]" id="main">
      <JsonLd data={schema} />
      <Header locale={locale} dict={dict.nav} />
      <ArticleView article={article} newsletter={dict.newsletter} />
      <Footer dict={dict.footer} nav={dict.nav} locale={locale} />
    </main>
  )
}
