import { Resend } from 'resend'
import type { SessionType } from './types'

const resend = new Resend(process.env.RESEND_SECRET_KEY)
const FROM = 'Yaiza Temprado <yaiza@temprado.es>'
const MENTOR_EMAIL = 'yaiza@temprado.es'
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://yaizatemprado.es'

function formatSlot(startsAt: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    timeZone: 'Europe/Madrid',
    timeZoneName: 'short',
  }).format(new Date(startsAt))
}

export async function sendIntroConfirmation(to: string, name: string, startsAt: string) {
  await resend.emails.send({
    from: FROM,
    to,
    subject: 'Your intro call with Yaiza is confirmed',
    html: `<p>Hi ${name},</p>
<p>Your 15-minute intro call is booked for <strong>${formatSlot(startsAt)}</strong>.</p>
<p>I'll send you a video call link closer to the date.</p>
<p>Looking forward to speaking with you,<br>Yaiza</p>`,
  })
}

export async function sendSessionConfirmation(to: string, name: string, startsAt: string) {
  await resend.emails.send({
    from: FROM,
    to,
    subject: 'Your mentoring session with Yaiza is booked',
    html: `<p>Hi ${name},</p>
<p>Your 60-minute mentoring session is booked for <strong>${formatSlot(startsAt)}</strong>.</p>
<p>I'll send you a video call link closer to the date.</p>
<p>Looking forward to our session,<br>Yaiza</p>`,
  })
}

export async function sendMentorNotification(
  type: SessionType,
  name: string,
  email: string,
  startsAt: string
) {
  const label = type === 'intro' ? '15-min intro call' : '60-min session'
  await resend.emails.send({
    from: FROM,
    to: MENTOR_EMAIL,
    subject: `New booking: ${label} with ${name}`,
    html: `<p>New booking received:</p>
<ul>
  <li><strong>Type:</strong> ${label}</li>
  <li><strong>Name:</strong> ${name}</li>
  <li><strong>Email:</strong> ${email}</li>
  <li><strong>Time:</strong> ${formatSlot(startsAt)}</li>
</ul>`,
  })
}

export async function sendSubscriberConfirmation(to: string, locale: string) {
  const isEs = locale === 'es'
  const subject = isEs
    ? 'Gracias por suscribirte'
    : 'Thanks for subscribing'
  const body = isEs
    ? `<p>Hola,</p>
<p>Gracias por suscribirte. Me alegra tenerte aquí.</p>
<p>Ahora mismo estoy definiendo el formato (newsletter, mentoría grupal, mentoría 1:1...) y te escribiré cuando tenga algo concreto para compartir.</p>
<p>Un abrazo y te escribo pronto,<br>Yaiza.</p>`
    : `<p>Hi,</p>
<p>Thanks for subscribing. I'm glad to have you here.</p>
<p>Right now I'm defining the format (newsletter, group mentoring, 1:1 mentoring...) and I'll write to you when I have something concrete to share.</p>
<p>A warm hello and talk soon,<br>Yaiza.</p>`

  await resend.emails.send({
    from: FROM,
    to,
    subject,
    html: `<div style="max-width:520px;margin:0 auto;padding:40px 24px;background:#fff8f4;font-family:system-ui,-apple-system,sans-serif;color:#2e2324;line-height:1.7">
${body}
</div>`,
  })
}

export async function sendFollowUpEmail(to: string, name: string, stripeSessionId: string) {
  const url = `${BASE_URL}/book/session/schedule?session_id=${stripeSessionId}`
  await resend.emails.send({
    from: FROM,
    to,
    subject: "Don't forget to schedule your mentoring session",
    html: `<p>Hi ${name},</p>
<p>You completed payment for a mentoring session but haven't picked a time slot yet.</p>
<p><a href="${url}">Click here to choose your slot</a></p>
<p>If you have any questions, just reply to this email.</p>
<p>Yaiza</p>`,
  })
}
