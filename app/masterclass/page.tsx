import type { Metadata } from 'next'
import { RootRedirect } from '@/components/layout/RootRedirect'

// The short URL said out loud in stories, emails and ManyChat: yaizatemprado.es/masterclass.
// The masterclass (23/11/2026) is over, so it now forwards to the Club page. Pages has no server redirects.
export const metadata: Metadata = {
  alternates: { canonical: '/es/clubpericia/' },
  robots: { index: false },
}

export default function MasterclassShortUrl() {
  return (
    <>
      <RootRedirect to="/es/clubpericia/" />
      <p style={{ padding: 16 }}>
        <a href="/es/clubpericia/">Club Pericia</a>
      </p>
    </>
  )
}
