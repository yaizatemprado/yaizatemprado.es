// Shared building blocks of the site's look (Yaiza, 25/11: «deben ser componentes reutilizables»).
// Home, /empresas and the programme pages use these, so a section title or a list row looks the same everywhere.
// The Club page keeps its own variants in components/club (Pericia colours and Manrope), same structure.

type HeadingTag = 'h1' | 'h2'

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return <span className="text-[0.78rem] font-extrabold tracking-[0.22em] uppercase text-rose">{children}</span>
}

// Eyebrow + serif title + optional lead, left-aligned. `as="h1"` for the top of a page.
export function SectionHeader({
  eyebrow,
  title,
  lead,
  as = 'h2',
}: {
  eyebrow?: React.ReactNode
  title: React.ReactNode
  lead?: React.ReactNode
  as?: HeadingTag
}) {
  const Tag = as
  return (
    <div className="grid gap-3">
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <Tag
        className="font-serif text-anchor leading-[1.15] sm:leading-[1.1] tracking-[-0.005em]"
        style={{ fontSize: as === 'h1' ? 'clamp(2rem, 5vw, 3.4rem)' : 'clamp(1.7rem, 4.6vw, 3.1rem)' }}
      >
        {title}
      </Tag>
      {lead && <div className="text-slate leading-[1.7] text-[0.98rem] sm:text-[1.05rem] max-w-[760px] [text-wrap:pretty]">{lead}</div>}
    </div>
  )
}

// A list of rows between thin lines.
export function List({ children }: { children: React.ReactNode }) {
  return <div className="border-b border-line">{children}</div>
}

// One row: title with a terracotta bar (and an optional small tag under it) on the left, content on the right.
export function ListRow({ title, tag, children }: { title: React.ReactNode; tag?: React.ReactNode; children: React.ReactNode }) {
  return (
    <article className="grid gap-3 md:gap-12 md:grid-cols-[minmax(0,380px)_minmax(0,1fr)] py-6 sm:py-7 border-t border-line">
      <div className="self-start border-l-[3px] border-rose pl-3.5 grid gap-1.5">
        <h3 className="text-[1.15rem] sm:text-[1.3rem] font-bold text-anchor leading-[1.35]">{title}</h3>
        {tag && <p className="text-[0.72rem] font-extrabold tracking-[0.14em] uppercase text-rose">{tag}</p>}
      </div>
      <div className="grid gap-3.5 text-slate leading-[1.7] text-[0.95rem] sm:text-[1rem]">{children}</div>
    </article>
  )
}

// The page column every section sits in.
export const pageColumn = 'max-w-[1080px] mx-auto w-full'
