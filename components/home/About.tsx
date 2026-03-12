import type { Dictionary } from '@/lib/i18n/types'

type Props = { dict: Dictionary['about'] }

export default function About({ dict }: Props) {
  const metrics = [
    dict.metrics.years,
    dict.metrics.engineers,
    dict.metrics.companies,
    dict.metrics.transitions,
  ]

  return (
    <section id="about" className="grid gap-8">
      <div
        className="grid gap-9 items-start max-w-[980px]"
        style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}
      >
        <div className="grid gap-4">
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

        <div className="grid gap-[18px] text-slate text-[1rem] leading-[1.7]">
          <p>{dict.p1}</p>
          <p>{dict.p2}</p>
          <p>{dict.p3}</p>

          <div
            aria-label="Experience highlights"
            className="grid gap-5 mt-2.5"
            style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}
          >
            {metrics.map(({ value, label }) => (
              <div key={value}>
                <strong className="block text-[1.6rem] text-plum font-bold">{value}</strong>
                <span className="text-[0.9rem] leading-[1.4] text-[#7a6160]">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
