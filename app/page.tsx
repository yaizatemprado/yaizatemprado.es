import type { Metadata } from 'next'
import { RootRedirect } from '@/components/layout/RootRedirect'

// Without a canonical, Google read / (and /index.html) as an empty duplicate.
export const metadata: Metadata = {
  alternates: { canonical: '/es/' },
}

export default function Root() {
  return (
    <>
      <RootRedirect to="/es/" />
      <p style={{ padding: 16 }}>
        <a href="/es/">yaizatemprado.es</a>
      </p>
    </>
  )
}
