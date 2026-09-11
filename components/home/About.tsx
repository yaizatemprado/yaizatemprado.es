import type { Dictionary } from '@/lib/i18n/types'

type Props = { dict: Dictionary['about'] }

export default function About({ dict }: Props) {
  return (
    <section id="about" className="grid gap-8">
      <div
        className="grid gap-9 items-start max-w-[980px]"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(min(260px, 100%), 1fr))' }}
      >
        <div className="grid gap-4">
          <span className="text-[0.78rem] font-extrabold tracking-[0.22em] uppercase text-rose">
            {dict.eyebrow}
          </span>
          <h2
            className="font-serif text-anchor leading-[1.15] sm:leading-[1.1] tracking-[-0.005em]"
            style={{ fontSize: 'clamp(1.7rem, 5.5vw, 3.35rem)' }}
          >
            {dict.heading}
          </h2>
        </div>

        <div className="grid gap-[18px] text-slate text-[0.95rem] sm:text-[1rem] leading-[1.7]">
          <p>{dict.p1}</p>
          <p>{dict.p2}</p>
          <p>{dict.p3}</p>
        </div>
      </div>
    </section>
  )
}
