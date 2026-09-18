// An inline run of text, optionally a link. Paragraphs are arrays of these so
// the copy can carry links without the page parsing markup.
export type Run = string | { text: string; href: string; strong?: boolean } | { text: string; em: true }

export type Paragraph = Run[]

/** A piece of a 'blocks' section: prose, a bulleted list or an image. */
export type Block =
  | { kind: 'p'; text: Paragraph }
  | { kind: 'list'; items: Paragraph[] }
  | { kind: 'image'; src: string; alt: string; width: number; height: number }

export type ArticleSection =
  | { kind: 'text'; heading?: string; paragraphs: Paragraph[] }
  | { kind: 'blocks'; heading: string; blocks: Block[] }
  | {
      // One behaviour per item, told as what it costs and what replaces it.
      kind: 'contrast'
      heading: string
      intro: Paragraph
      labels: { lose: string; gain: string }
      items: Array<{ title: string; lose: string; gain: string }>
    }
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
  seoTitle?: string // <title> and social card when they differ from the H1
  socialImage?: { src: string; width: number; height: number }
  description: string // meta description, also the card summary
  cardCta: string
  intro: Paragraph[]
  sections: ArticleSection[]
  faqHeading: string
  faq: Array<{ question: string; answer: Paragraph[] }>
}
