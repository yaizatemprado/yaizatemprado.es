import type { Article } from '@/lib/articles'
import type { Dictionary } from '@/lib/i18n/types'
import SubscribeForm from '@/components/newsletter/SubscribeForm'
import Prose, { Runs } from './Prose'

const h2Class = 'font-serif text-anchor leading-[1.2] text-[1.5rem] sm:text-[1.8rem]'
const bodyClass = 'text-slate leading-[1.75] text-[1rem] sm:text-[1.05rem]'

type Props = { article: Article; newsletter: Dictionary['newsletter'] }

export default function ArticleView({ article, newsletter }: Props) {
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
            {section.blocks.map((block, i) =>
              block.kind === 'p' ? (
                <Prose key={i} paragraph={block.text} className={bodyClass} />
              ) : block.kind === 'list' ? (
                <ul key={i} className={`${bodyClass} list-disc pl-6 grid gap-2 m-0`}>
                  {block.items.map((item, j) => (
                    <li key={j}>
                      <Runs paragraph={item} />
                    </li>
                  ))}
                </ul>
              ) : (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={block.src}
                  alt={block.alt}
                  width={block.width}
                  height={block.height}
                  loading="lazy"
                  className="w-full h-auto rounded-[14px] border border-line my-2"
                />
              ),
            )}
          </section>
        ) : section.kind === 'contrast' ? (
          <section key={i} className="grid gap-5">
            <h2 className={h2Class}>{section.heading}</h2>
            <Prose paragraph={section.intro} className={bodyClass} />
            <ul className="grid gap-4 list-none p-0 m-0">
              {section.items.map((item) => (
                <li key={item.title} className="bg-card rounded-[14px] border border-line px-5 py-5 sm:px-6 grid gap-3">
                  <h3 className="text-[1.05rem] font-bold text-anchor">{item.title}</h3>
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
                </li>
              ))}
            </ul>
          </section>
        ) : (
          <section key={i} className="grid gap-5">
            <h2 className={h2Class}>{section.heading}</h2>
            <Prose paragraph={section.intro} className={bodyClass} />
            <ul className="grid gap-4 list-none p-0 m-0 sm:grid-cols-2">
              {section.cards.map((card) => (
                <li key={card.title} className="bg-card rounded-[14px] border border-line px-5 py-5 grid gap-2 content-start">
                  <h3 className="text-[1rem] font-bold text-anchor">{card.title}</h3>
                  <p className="text-slate text-[0.92rem] leading-[1.6]">{card.body}</p>
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
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="grid gap-4 justify-items-center text-center bg-stone rounded-[14px] border border-line px-6 py-10">
        <span className="text-[0.78rem] font-extrabold tracking-[0.22em] uppercase text-rose">
          {newsletter.eyebrow}
        </span>
        <h2 className={h2Class}>{newsletter.heading}</h2>
        <p className="text-slate leading-[1.7] text-[0.98rem] max-w-[540px]">{newsletter.body}</p>
        <div className="w-full max-w-[480px]">
          <SubscribeForm dict={newsletter} />
        </div>
      </section>
    </article>
  )
}
