import type { EnrichmentResult } from '@/lib/types'

// Known free email providers — subscribers using these are individuals, not corporate.
const FREE_EMAIL_DOMAINS = new Set([
  'gmail.com', 'googlemail.com',
  'yahoo.com', 'yahoo.es', 'yahoo.co.uk',
  'hotmail.com', 'hotmail.es', 'outlook.com', 'live.com',
  'icloud.com', 'me.com', 'mac.com',
  'proton.me', 'protonmail.com',
  'tutanota.com',
])

// .edu TLDs — high signal for student / potential mentee.
const EDU_TLDS = ['.edu', '.ac.uk', '.edu.es', '.uni-', '.ac.', '.edu.au']

export function isFreeDomain(domain: string): boolean {
  return FREE_EMAIL_DOMAINS.has(domain.toLowerCase())
}

export function isEduDomain(domain: string): boolean {
  const lower = domain.toLowerCase()
  return EDU_TLDS.some((tld) => lower.includes(tld))
}

/**
 * Domain-based lookup. No external API required.
 *
 * Returns whatever can be inferred from the email address alone.
 * When an external enrichment API is wired in later (Hunter, PDL, etc.),
 * replace this function body and populate name/company/job_title from the response.
 */
export async function lookupSubscriber(email: string): Promise<EnrichmentResult> {
  const domain = email.split('@')[1]?.toLowerCase() ?? ''

  const raw: Record<string, unknown> = {
    source: 'domain_heuristic',
    domain,
    is_free_domain: isFreeDomain(domain),
    is_edu_domain: isEduDomain(domain),
  }

  // Company name: infer from domain for non-free addresses.
  const company = isFreeDomain(domain) || isEduDomain(domain)
    ? null
    : domainToCompanyName(domain)

  return {
    name: null,       // not knowable without external API
    company,
    job_title: null,  // not knowable without external API
    linkedin_url: null,
    raw_enrichment_data: raw,
  }
}

/** Best-effort: turn "acme-corp.com" → "Acme Corp" */
function domainToCompanyName(domain: string): string {
  const withoutTld = domain.replace(/\.[^.]+$/, '')   // strip last TLD segment
  const withoutSecondTld = withoutTld.replace(/\.[^.]+$/, '') // strip co/com/net second segment if present
  const base = withoutSecondTld || withoutTld
  return base
    .replace(/[-_.]/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
    .trim()
}
