import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import { sendSubscriberConfirmation } from '@/lib/email'

export async function POST(req: NextRequest) {
  const { email, locale } = await req.json()

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ status: 'error' }, { status: 400 })
  }

  const { error } = await supabase.from('subscribers').insert({
    email,
    locale: locale ?? 'en',
  })

  if (error) {
    if (error.code === '23505') {
      return NextResponse.json({ status: 'duplicate' })
    }
    return NextResponse.json({ status: 'error' }, { status: 500 })
  }

  await sendSubscriberConfirmation(email, locale ?? 'en')

  return NextResponse.json({ status: 'ok' })
}
