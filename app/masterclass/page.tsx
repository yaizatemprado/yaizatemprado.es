import type { Metadata } from 'next'
import { RootRedirect } from '@/components/layout/RootRedirect'

// The short URL said out loud in stories, emails and ManyChat: yaizatemprado.es/masterclass.
// Pages has no server redirects, so it forwards on the client to the Spanish page (same as /clubpericia).
export const metadata: Metadata = {
  alternates: { canonical: '/es/masterclass/' },
  robots: { index: false },
}

export default function MasterclassShortUrl() {
  return (
    <>
      <RootRedirect to="/es/masterclass/" />
      <p style={{ padding: 16 }}>
        <a href="/es/masterclass/">Masterclass del Club Pericia</a>
      </p>
    </>
  )
}
