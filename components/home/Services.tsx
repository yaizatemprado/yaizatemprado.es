import Link from 'next/link'
import Button from '@/components/ui/Button'
import { List, ListRow, SectionHeader, pageColumn } from '@/components/ui/Section'
import type { Dictionary } from '@/lib/i18n/types'

type Props = { dict: Dictionary['services'] }

// Same list format as «Especialidad» (Yaiza, 25/11: the cards had too many buttons): one row per way of working,
// name with a terracotta bar on the left, a sentence and plain text links on the right.
const rowClass =
  'group flex items-center justify-between gap-4 py-3.5 border-b border-line no-underline text-[0.98rem] leading-[1.5] hover:bg-stone/60 transition-colors duration-200'

function Row({ href, external, children }: { href: string; external?: boolean; children: React.ReactNode }) {
  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={rowClass}>
      {children}
    </a>
  ) : (
    <Link href={href} className={rowClass}>
      {children}
    </Link>
  )
}

export default function Services({ dict }: Props) {
  return (
    <section id="services" className={`grid gap-8 sm:gap-10 ${pageColumn}`}>
      <SectionHeader eyebrow={dict.eyebrow} title={dict.heading} lead={dict.lead} />

      <div className="grid gap-6">
        <List>
          {dict.cards.map(({ title, tag, description, links }) => (
            <ListRow key={title} title={title} tag={tag}>
              <p>{description}</p>
              {links.length > 1 ? (
                // Several options: a menu, one row each, the whole row clickable.
                <div className="border-t border-line">
                  {links.map((l) => (
                    <Row key={l.href} href={l.href} external={l.external}>
                      <span>
                        <span className="font-bold text-rose">{l.label}</span>
                        {l.detail && <span className="text-slate text-[0.9rem]"> · {l.detail}</span>}
                      </span>
                      <span aria-hidden="true" className="text-rose text-[1.15rem] transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </Row>
                  ))}
                </div>
              ) : (
                <div>
                  {links.map((l) => (
                    <Button key={l.href} href={l.href} external={l.external}>
                      {l.label} →
                    </Button>
                  ))}
                </div>
              )}
            </ListRow>
          ))}
        </List>

        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
          <p className="text-slate text-[0.98rem] sm:text-[1.02rem]">{dict.note.text}</p>
          <div>
            <Button href={dict.note.href} external={dict.note.external} variant="secondary">
              {dict.note.cta} →
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
