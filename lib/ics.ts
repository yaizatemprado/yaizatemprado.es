interface IcsEvent {
  startsAt: string
  durationMinutes: number
  summary: string
  organizerName: string
  organizerEmail: string
  attendeeEmail: string
}

function toIcsDate(date: Date): string {
  return date.toISOString().replace(/[-:]/g, '').replace(/\.\d{3}/, '')
}

export function generateIcs(event: IcsEvent): string {
  const start = new Date(event.startsAt)
  const end = new Date(start.getTime() + event.durationMinutes * 60_000)
  const uid = `${start.getTime()}-${event.attendeeEmail}@yaizatemprado.es`

  return [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//Yaiza Temprado//Booking//EN',
    'METHOD:REQUEST',
    'BEGIN:VEVENT',
    `UID:${uid}`,
    `DTSTART:${toIcsDate(start)}`,
    `DTEND:${toIcsDate(end)}`,
    `SUMMARY:${event.summary}`,
    `ORGANIZER;CN=${event.organizerName}:mailto:${event.organizerEmail}`,
    `ATTENDEE;RSVP=TRUE:mailto:${event.attendeeEmail}`,
    `DTSTAMP:${toIcsDate(new Date())}`,
    'STATUS:CONFIRMED',
    'END:VEVENT',
    'END:VCALENDAR',
  ].join('\r\n')
}
