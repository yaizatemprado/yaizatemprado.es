// An inline run of text, optionally a link. Paragraphs are arrays of these so
// the copy can carry links without the page parsing markup.
export type Run = string | { text: string; href: string; strong?: boolean }

export type Paragraph = Run[]

export type ArticleSection =
  | { kind: 'text'; heading?: string; paragraphs: Paragraph[] }
  | {
      kind: 'cards'
      heading: string
      intro: Paragraph
      cards: Array<{ title: string; body: string }>
    }

/**
 * A long-form page under /recursos that is read, not downloaded: no Kit form of
 * its own, unlike the guides in the dictionary. Written for one locale only.
 */
export type Article = {
  slug: string
  locale: string
  published: string // ISO date, for the Article schema
  tag: string
  title: string
  description: string // meta description, also the card summary
  cardCta: string
  intro: Paragraph[]
  sections: ArticleSection[]
  faqHeading: string
  faq: Array<{ question: string; answer: Paragraph[] }>
}
