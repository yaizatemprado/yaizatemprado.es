import Link from 'next/link'
import type { Dictionary } from '@/lib/i18n/types'

type Props = { dict: Dictionary['services'] }

const buttonClass =
  'inline-block rounded-full px-5 py-2.5 text-[0.85rem] font-semibold text-white no-underline transition-transform duration-200 hover:-translate-y-px text-center'
const buttonStyle = {
  background: 'linear-gradient(135deg, #cc6c4e, #b45b41)',
  boxShadow: '0 10px 20px rgba(204, 108, 78, 0.2)',
}

export default function Services({ dict }: Props) {
  return (
    <section id="services" className="grid gap-9">
      <div className="text-center grid gap-3 justify-items-center">
        <span className="text-[0.78rem] font-extrabold tracking-[0.22em] uppercase text-rose">
          {dict.eyebrow}
        </span>
        <h2
          className="font-serif text-anchor leading-[1.1] tracking-[-0.005em]"
          style={{ fontSize: 'clamp(2.3rem, 3.2vw, 3.35rem)' }}
        >
          {dict.heading}
        </h2>
        <p className="text-slate max-w-[600px] leading-[1.7] text-[1rem]">
          {dict.lead}
        </p>
      </div>

      <div
        className="grid gap-6 max-w-[1080px] mx-auto"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(240px, 100%), 1fr))' }}
      >
        {dict.cards.map(({ tag, title, description, detail, href, cta, external }) => (
          <article
            key={title}
            className="bg-card rounded-[20px] px-[22px] pt-[22px] pb-6 border border-[#f0e5e1] flex flex-col gap-3.5 transition-transform duration-200 hover:-translate-y-1"
            style={{ boxShadow: '0 12px 20px rgba(60, 40, 42, 0.06)' }}
          >
            <span className="text-[0.72rem] font-bold tracking-[0.15em] uppercase text-rose bg-[#fdf0ec] rounded-full px-3 py-1 self-start">
              {tag}
            </span>
            <h3 className="text-[1.25rem] font-bold text-anchor mt-0.5">
              {title}
            </h3>
            <p className="text-slate leading-[1.6] text-[0.92rem]">
              {description}
            </p>
            <div className="mt-auto flex flex-col gap-3.5">
              <p className="text-[0.85rem] font-semibold text-plum">{detail}</p>
              {external ? (
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className={buttonClass}
                  style={buttonStyle}
                >
                  {cta}
                </a>
              ) : (
                <Link href={href} className={buttonClass} style={buttonStyle}>
                  {cta}
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
