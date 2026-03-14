import type { EnrichmentResult, SubscriberClassification } from '@/lib/types'
import { isFreeDomain, isEduDomain } from './lookup'

const MENTEE_TITLE_KEYWORDS = [
  'engineer', 'developer', 'software', 'data', 'product', 'designer',
  'analyst', 'scientist', 'student', 'junior', 'mid', 'senior', 'tech lead',
  'freelance', 'indie', 'founder',
]

const CORPORATE_TITLE_KEYWORDS = [
  'recruiter', 'talent', 'hr', 'people', 'acquisition',
  'account', 'sales', 'business development', 'partnership',
  'marketing', 'vp', 'director', 'head of', 'chief',
]

export interface ClassificationResult {
  classification: SubscriberClassification
  reason: string
}

export function classifySubscriber(
  email: string,
  enrichment: EnrichmentResult,
): ClassificationResult {
  const domain = email.split('@')[1]?.toLowerCase() ?? ''
  const titleLower = enrichment.job_title?.toLowerCase() ?? ''

  // 1. Corporate recruiter / business contact signals
  if (titleLower && CORPORATE_TITLE_KEYWORDS.some((kw) => titleLower.includes(kw))) {
    return {
      classification: 'corporate_contact',
      reason: `Job title "${enrichment.job_title}" matches corporate contact pattern.`,
    }
  }

  // 2. Strong mentee signals: .edu domain
  if (isEduDomain(domain)) {
    return {
      classification: 'potential_mentee',
      reason: `Educational domain (${domain}) — likely a student or academic.`,
    }
  }

  // 3. Mentee signals from job title
  if (titleLower && MENTEE_TITLE_KEYWORDS.some((kw) => titleLower.includes(kw))) {
    return {
      classification: 'potential_mentee',
      reason: `Job title "${enrichment.job_title}" matches individual contributor / mentee pattern.`,
    }
  }

  // 4. Corporate domain without personal title info → corporate contact
  if (!isFreeDomain(domain) && !isEduDomain(domain) && enrichment.company) {
    return {
      classification: 'corporate_contact',
      reason: `Corporate domain (${domain}) with no individual-contributor title signals.`,
    }
  }

  // 5. Free email domain (gmail, etc.) with no other signal → general interest
  if (isFreeDomain(domain)) {
    return {
      classification: 'general_interest',
      reason: `Free email provider (${domain}) with no additional enrichment data.`,
    }
  }

  // 6. Fallback
  return {
    classification: 'general_interest',
    reason: 'Insufficient signals for a more specific classification.',
  }
}
