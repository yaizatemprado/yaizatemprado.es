import { NextRequest, NextResponse } from 'next/server'
import { stripe } from '@/lib/stripe'

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://yaizatemprado.es'
const PRICE_CENTS = parseInt(process.env.SESSION_PRICE_CENTS ?? '15000', 10)

export async function POST(req: NextRequest) {
  const { name, email } = await req.json()

  if (!name || !email) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const session = await stripe.checkout.sessions.create({
    mode: 'payment',
    customer_email: email,
    line_items: [
      {
        price_data: {
          currency: 'eur',
          unit_amount: PRICE_CENTS,
          product_data: {
            name: '60-min Mentoring Session',
            description: 'Engineering leadership mentoring with Yaiza Temprado',
          },
        },
        quantity: 1,
      },
    ],
    metadata: { name, email },
    success_url: `${BASE_URL}/book/session/schedule?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${BASE_URL}/book/session`,
  })

  return NextResponse.json({ url: session.url })
}
