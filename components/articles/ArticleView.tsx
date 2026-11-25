import Button from '@/components/ui/Button'
import Link from 'next/link'
import type { Article, Block } from '@/lib/articles'
import type { Dictionary } from '@/lib/i18n/types'
import SubscribeForm from '@/components/newsletter/SubscribeForm'
import Prose, { Runs } from './Prose'

const h2Class = 'font-serif text-anchor leading-[1.2] text-[1.5rem] sm:text-[1.8rem]'
const bodyClass = 'text-slate leading-[1.75] text-[1rem] sm:text-[1.05rem]'
// Row title with the terracotta bar, as in components/ui/Section (ListRow).
const rowTitle = 'border-l-[3px] border-rose pl-3.5 text-[1.1rem] sm:text-[1.2rem] font-bold text-anchor leading-[1.35]'

/** A guide from the dictionary, as the page resolved it for article.guide. */
type GuideCard = { href: string; tag: string; title: string; summary: string; cta: string }

type Props = { article: Article; newsletter: Dictionary['newsletter']; guide?: GuideCard }

function BlockView({ block }: { block: Block }) {
  if (block.kind === 'p') return <Prose paragraph={block.text} className={bodyClass} />
  if (block.kind === 'list')
    return (
      <ul className={`${bodyClass} list-disc pl-6 grid gap-2 m-0`}>
        {block.items.map((item, j) =>
          Array.isArray(item) ? (
            <li key={j}>
              <Runs paragraph={item} />
            </li>
          ) : (
            <li key={j}>
              <Runs paragraph={item.text} />
              <ul className="list-[circle] pl-6 grid gap-1 mt-2">
                {item.items.map((sub, k) => (
                  <li key={k}>
                    <Runs paragraph={sub} />
                  </li>
                ))}
              </ul>
            </li>
          ),
        )}
      </ul>
    )
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={block.src}
      alt={block.alt}
      width={block.width}
      height={block.height}
      loading="lazy"
      className="w-full h-auto rounded-[14px] border border-line my-2"
    />
  )
}

export default function ArticleView({ article, newsletter, guide }: Props) {
  return (
    <article className="max-w-[720px] mx-auto py-12 grid gap-12">
      <header className="grid gap-5">
        <span className="text-[0.78rem] font-extrabold tracking-[0.22em] uppercase text-rose">
          {article.tag}
        </span>
        <h1
          className="font-serif text-anchor leading-[1.15] sm:leading-[1.1] tracking-[-0.005em]"
          style={{ fontSize: 'clamp(1.8rem, 5vw, 3rem)' }}
        >
          {article.title}
        </h1>
        <div className="grid gap-4">
          {article.intro.map((p, i) => (
            <Prose key={i} paragraph={p} className={bodyClass} />
          ))}
        </div>
      </header>

      {article.sections.map((section, i) =>
        section.kind === 'text' ? (
          <section key={i} className="grid gap-4">
            {section.heading && <h2 className={h2Class}>{section.heading}</h2>}
            {section.paragraphs.map((p, i) => (
              <Prose key={i} paragraph={p} className={bodyClass} />
            ))}
          </section>
        ) : section.kind === 'blocks' ? (
          <section key={i} className="grid gap-4">
            <h2 className={h2Class}>{section.heading}</h2>
            {section.blocks.map((block, i) => (
              <BlockView key={i} block={block} />
            ))}
          </section>
        ) : section.kind === 'contrast' ? (
          <section key={i} className="grid gap-5">
            <h2 className={h2Class}>{section.heading}</h2>
            <Prose paragraph={section.intro} className={bodyClass} />
            <ul className="grid list-none p-0 m-0 border-b border-line">
              {section.items.map((item) => (
                <li key={item.title} className="grid gap-3 py-5 border-t border-line">
                  <h3 className={rowTitle}>{item.title}</h3>
                  <p className="text-slate text-[0.95rem] leading-[1.65]">
                    <span className="text-[0.72rem] font-extrabold tracking-[0.14em] uppercase text-rose mr-2">
                      {section.labels.lose}
                    </span>
                    {item.lose}
                  </p>
                  <p className="text-slate text-[0.95rem] leading-[1.65]">
                    <span className="text-[0.72rem] font-extrabold tracking-[0.14em] uppercase text-anchor mr-2">
                      {section.labels.gain}
                    </span>
                    {item.gain}
                  </p>
                  {item.link && (
                    <Link
                      href={item.link.href}
                      className="text-[0.88rem] font-semibold text-rose hover:text-anchor transition-colors duration-200"
                    >
                      {item.link.text} →
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <section key={i} className="grid gap-5">
            <h2 className={h2Class}>{section.heading}</h2>
            <Prose paragraph={section.intro} className={bodyClass} />
            <ul className="grid list-none p-0 m-0 border-b border-line">
              {section.cards.map((card) => (
                <li key={card.title} className="grid gap-2 py-5 border-t border-line">
                  <h3 className={rowTitle}>{card.title}</h3>
                  <p className={bodyClass}>{card.body}</p>
                </li>
              ))}
            </ul>
          </section>
        ),
      )}

      <section className="grid gap-2">
        <h2 className={h2Class}>{article.faqHeading}</h2>
        <dl className="grid m-0">
          {article.faq.map((item) => (
            <div key={item.question} className="grid gap-2 py-5 border-b border-line">
              <dt className="text-[1.02rem] font-bold text-anchor">{item.question}</dt>
              <dd className="grid gap-3 m-0">
                {item.answer.map((p, i) => (
                  <Prose key={i} paragraph={p} className={bodyClass} />
                ))}
                {item.blocks?.map((block, i) => (
                  <BlockView key={i} block={block} />
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      {guide && (
        <section className="grid gap-3 py-6 border-y border-line">
          <span className="text-[0.72rem] font-extrabold tracking-[0.14em] uppercase text-rose">{guide.tag}</span>
          <h2 className={rowTitle}>{guide.title}</h2>
          <p className={bodyClass}>{guide.summary}</p>
          <div>
            <Button href={guide.href}>{guide.cta} →</Button>
          </div>
        </section>
      )}

      {article.booking ? (
        <div className="grid gap-6">
          <section className="grid gap-5 justify-items-start rounded-[24px] bg-anchor px-6 py-10 sm:px-10">
            <p className="font-serif text-cream leading-[1.3] text-[1.3rem] sm:text-[1.5rem] max-w-[560px]">
              {article.booking.text}
            </p>
            <Button href={article.booking.href} external>
              {article.booking.cta}
            </Button>
          </section>
          <div className="grid gap-3 justify-items-center text-center">
            <p className="text-slate leading-[1.6] text-[0.95rem]">{article.booking.newsletterLine}</p>
            <div className="w-full max-w-[480px]">
              <SubscribeForm dict={newsletter} quiet />
            </div>
          </div>
        </div>
      ) : (
        <section className="grid gap-4 rounded-[24px] bg-anchor text-cream px-6 py-10 sm:px-10">
          <span className="text-[0.78rem] font-extrabold tracking-[0.22em] uppercase text-peach">{newsletter.eyebrow}</span>
          <h2 className="font-serif text-cream leading-[1.2] text-[1.6rem] sm:text-[2rem]">{newsletter.heading}</h2>
          <p className="text-cream/85 leading-[1.7] text-[0.98rem] max-w-[560px]">{newsletter.body}</p>
          <div className="w-full max-w-[520px]">
            <SubscribeForm dict={newsletter} />
          </div>
        </section>
      )}
    </article>
  )
}
