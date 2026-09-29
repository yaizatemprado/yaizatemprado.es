'use client'

import { useEffect } from 'react'

// GitHub Pages can't send a server-side 301, so / redirects on the client.
export function RootRedirect({ to }: { to: string }) {
  useEffect(() => {
    window.location.replace(to)
  }, [to])

  return null
}
