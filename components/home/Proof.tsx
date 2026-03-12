import type { Dictionary } from '@/lib/i18n/types'

type Props = { dict: Dictionary['proof'] }

export default function Proof({ dict }: Props) {
  return (
    <section id="proof" className="grid gap-7 max-w-[1080px] mx-auto">
      <div className="text-center grid gap-3.5 justify-items-center max-w-[980px] mx-auto">
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
        aria-label="Selected outcomes"
        className="grid gap-[18px] max-w-[1080px] mx-auto"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}
      >
        {dict.cards.map(({ label, body }) => (
          <article
            key={label}
            className="bg-card rounded-[20px] px-5 pt-5 pb-[22px] border border-[#f0e5e1] grid gap-3"
            style={{ boxShadow: '0 10px 18px rgba(60, 40, 42, 0.05)' }}
          >
            <span className="text-[0.76rem] font-extrabold tracking-[0.18em] uppercase text-rose">
              {label}
            </span>
            <p className="text-slate leading-[1.65] text-[0.94rem]">{body}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
