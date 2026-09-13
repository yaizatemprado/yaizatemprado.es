import type { MetadataRoute } from 'next'
import { SITE_URL } from '@/lib/seo'

export const dynamic = 'force-static'

/**
 * Everything is crawlable, which is what the site already did by having no
 * robots.txt at all. The file earns its place by pointing at the sitemap.
 *
 * If we ever want to keep an AI crawler out (GPTBot, ClaudeBot, Google-Extended,
 * PerplexityBot), this is the file: add a rule with `disallow: '/'` for it.
 * Blocking them also takes the site out of the answers those models give.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
