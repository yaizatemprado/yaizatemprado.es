import type { Metadata } from 'next'
import { RootRedirect } from '@/components/layout/RootRedirect'

// The short URL said out loud in stories and the masterclass: yaizatemprado.es/clubpericia.
// Pages has no server redirects, so it forwards on the client to the Spanish page.
export const metadata: Metadata = {
  alternates: { canonical: '/es/clubpericia/' },
  robots: { index: false },
}

export default function ClubPericiaShortUrl() {
  return (
    <>
      <RootRedirect to="/es/clubpericia/" />
      <p style={{ padding: 16 }}>
        <a href="/es/clubpericia/">Club Pericia</a>
      </p>
    </>
  )
}
