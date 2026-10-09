import Link from 'next/link'
import type { Paragraph } from '@/lib/articles'

const linkClass =
  'font-semibold text-rose hover:text-anchor underline underline-offset-2 decoration-1 transition-colors duration-200'

/** One paragraph of article copy: plain runs plus inline links, italics and bold. */
export default function Prose({ paragraph, className }: { paragraph: Paragraph; className: string }) {
  return (
    <p className={className}>
      <Runs paragraph={paragraph} />
    </p>
  )
}

/** The runs of a paragraph without the <p>, for list items. */
export function Runs({ paragraph }: { paragraph: Paragraph }) {
  return (
    <>
      {paragraph.map((run, i) => {
        if (typeof run === 'string') return <span key={i}>{run}</span>
        if ('em' in run) return <em key={i}>{run.text}</em>
        if (!('href' in run)) return <strong key={i} className="font-semibold text-anchor">{run.text}</strong>
        const external = run.href.startsWith('http')
        return external ? (
          <a key={i} href={run.href} target="_blank" rel="noreferrer" className={linkClass}>
            {run.text}
          </a>
        ) : (
          <Link key={i} href={run.href} className={linkClass}>
            {run.text}
          </Link>
        )
      })}
    </>
  )
}
