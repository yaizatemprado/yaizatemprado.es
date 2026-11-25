import type { Dictionary } from '@/lib/i18n/types'
import { List, ListRow, SectionHeader, pageColumn } from '@/components/ui/Section'

type Props = { dict: Dictionary['expertise'] }

// A list, not cards (Yaiza, 25/11: the cards looked dated): one row per specialty.
export default function Expertise({ dict }: Props) {
  return (
    <section id="expertise" className={`grid gap-8 sm:gap-10 ${pageColumn}`}>
      <SectionHeader eyebrow={dict.eyebrow} title={dict.heading} />
      <List>
        {dict.cards.map(({ title, body }) => (
          <ListRow key={title} title={title}>
            <p>{body}</p>
          </ListRow>
        ))}
      </List>
    </section>
  )
}
