import type { Metadata } from 'next'
import { RootRedirect } from '@/components/layout/RootRedirect'

type Props = { params: { locale: string } }

// The masterclass (Mon 23/11/2026) is over: old links from stories, emails and ManyChat land on the Club page.
// Pages has no server redirects, so it forwards on the client. The old page is in git history.
export async function generateStaticParams() {
  return [{ locale: 'es' }]
}

export const metadata: Metadata = {
  alternates: { canonical: '/es/clubpericia/' },
  robots: { index: false, follow: true },
}

export default function MasterclassOver({ params: { locale } }: Props) {
  return (
    <>
      <RootRedirect to={`/${locale}/clubpericia/`} />
      <p style={{ padding: 16 }}>
        <a href={`/${locale}/clubpericia/`}>Club Pericia</a>
      </p>
    </>
  )
}
