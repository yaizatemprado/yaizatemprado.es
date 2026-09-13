import type { Article, Paragraph } from './types'
import queLoPagueTuEmpresa from './que-lo-pague-tu-empresa'

export type { Article, ArticleSection, Paragraph, Run } from './types'

export const articles: Article[] = [queLoPagueTuEmpresa]

export function articlesFor(locale: string): Article[] {
  return articles.filter((a) => a.locale === locale)
}

export function getArticle(slug: string): Article | undefined {
  return articles.find((a) => a.slug === slug)
}

/** Plain text of a paragraph, for schema answers and meta fields. */
export function plainText(paragraphs: Paragraph[]): string {
  return paragraphs
    .map((p) => p.map((r) => (typeof r === 'string' ? r : r.text)).join(''))
    .join(' ')
}
