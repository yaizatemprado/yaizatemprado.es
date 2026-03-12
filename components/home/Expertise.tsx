import type { Dictionary } from '@/lib/i18n/types'

type Props = { dict: Dictionary['expertise'] }

export default function Expertise({ dict }: Props) {
  return (
    <section id="expertise" className="grid gap-9">
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
      </div>

      <div
        className="grid gap-6 max-w-[1080px] mx-auto"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}
      >
        {dict.cards.map(({ title, body }) => (
          <article
            key={title}
            className="bg-card rounded-[20px] px-[22px] pt-[22px] pb-6 border border-[#f0e5e1] grid gap-3.5 transition-transform duration-200 hover:-translate-y-1"
            style={{ boxShadow: '0 12px 20px rgba(60, 40, 42, 0.06)' }}
          >
            <h3 className="text-[1.25rem] font-bold text-anchor mt-0.5">{title}</h3>
            <p className="text-slate leading-[1.6] text-[0.92rem]">{body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
