import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { lookupSubscriber } from '@/lib/enrichment/lookup'
import { classifySubscriber } from '@/lib/enrichment/classify'

const BATCH_SIZE = 20

export async function GET(req: NextRequest) {
  if (req.headers.get('authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
  }

  const { data: subscribers } = await supabase
    .from('subscribers')
    .select('id, email')
    .is('enriched_at', null)
    .limit(BATCH_SIZE)

  if (!subscribers?.length) return NextResponse.json({ enriched: 0 })

  const results = await Promise.allSettled(
    subscribers.map(async (subscriber) => {
      const enrichment = await lookupSubscriber(subscriber.email)
      const { classification, reason } = classifySubscriber(subscriber.email, enrichment)

      await supabase
        .from('subscribers')
        .update({
          name: enrichment.name,
          company: enrichment.company,
          job_title: enrichment.job_title,
          linkedin_url: enrichment.linkedin_url,
          raw_enrichment_data: enrichment.raw_enrichment_data,
          classification,
          classification_reason: reason,
          enriched_at: new Date().toISOString(),
        })
        .eq('id', subscriber.id)
    })
  )

  const succeeded = results.filter((r) => r.status === 'fulfilled').length
  const failed = results.filter((r) => r.status === 'rejected').length

  return NextResponse.json({ enriched: succeeded, failed })
}
