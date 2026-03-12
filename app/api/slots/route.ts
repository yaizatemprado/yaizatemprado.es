import { NextRequest, NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'
import type { SessionType } from '@/lib/types'

export async function GET(req: NextRequest) {
  const type = req.nextUrl.searchParams.get('type') as SessionType | null

  if (type !== 'intro' && type !== 'session') {
    return NextResponse.json({ error: 'Invalid type' }, { status: 400 })
  }

  const { data, error } = await supabase
    .from('availability_slots')
    .select('id, starts_at, duration_minutes, session_type')
    .eq('session_type', type)
    .eq('is_booked', false)
    .gte('starts_at', new Date().toISOString())
    .order('starts_at', { ascending: true })

  if (error) {
    return NextResponse.json({ error: 'Failed to fetch slots' }, { status: 500 })
  }

  return NextResponse.json(data)
}
