// Free masterclass before Club Pericia sales open. Spanish only.
// Source of truth for the wording and the run of show: the vault note
// campaigns/pericia-primera-edicion/masterclass.md. Yaiza edits there; this file mirrors it.

// Kit landing/form 10179617 «PERICIA · Masterclass 23/11 (apuntarse)», duplicated from the 22/09 directo one.
// No confirmation email on purpose: Kit sends it only once per subscriber, so people already on the list would
// never get it. The Zoom link and the calendar buttons live on the thanks page; reminders go as broadcasts on
// the 23rd to «subscribed to this form». Kit redirects to MASTERCLASS_THANKS after subscribing.
export const MASTERCLASS_FORM_ID = '10179617'
export const MASTERCLASS_FORM_ACTION = `https://app.kit.com/forms/${MASTERCLASS_FORM_ID}/subscriptions`
export const MASTERCLASS_THANKS = '/es/masterclass/gracias/'
// Zoom link: also goes in the Kit confirmation email.
export const ZOOM_URL = 'https://us06web.zoom.us/j/86026888903?pwd=2UfMqYF0ghYjfh7zyJTD6bkPJaKMum.1'
// Zoom meeting 860 2688 8903 (Yaiza's Pro account): 1 h 30, cloud recording on, participants muted, no join before host.

// Monday 23 Nov 2026, 18:30-19:45 Madrid (CET, UTC+1) = 17:30-18:45 UTC.
const START_UTC = '20261123T173000Z'
const END_UTC = '20261123T184500Z'
const CAL_TITLE = 'Masterclass Club Pericia · Yaiza Temprado'
const CAL_DETAILS = () =>
  `Por qué tu idea no salió adelante (y qué hacer la próxima vez). En directo por Zoom: ${ZOOM_URL}`

export const googleCalendarUrl = () =>
  'https://calendar.google.com/calendar/render?action=TEMPLATE' +
  `&text=${encodeURIComponent(CAL_TITLE)}` +
  `&dates=${START_UTC}/${END_UTC}` +
  `&details=${encodeURIComponent(CAL_DETAILS())}` +
  `&location=${encodeURIComponent(ZOOM_URL)}`
// Outlook and Apple: the .ics in public/ (regenerate it if the date or the Zoom link change).
export const ICS_URL = '/masterclass-club-pericia.ics'

export const masterclass = {
  title: 'Masterclass gratis: por qué tu idea no salió adelante | Club Pericia',
  description:
    'Una hora en directo, gratis, el lunes 23 de noviembre a las 18:30: en qué momento se muere una buena idea y qué hacer la próxima vez, con la IA que ya usas en el trabajo.',
  eyebrow: 'Masterclass gratis · lunes 23 de noviembre · 18:30',
  heading: 'Propusiste algo con sentido. Todos asintieron. ¿Por qué no salió?',
  lead:
    'Una hora en directo para ver en qué momento se muere una buena idea (antes de la reunión, en la sala o después) y qué hacer la próxima vez, con la IA que ya usas en el trabajo haciendo el trabajo pesado.',
  takeHeading: 'Qué te llevas',
  take: [
    'Sabrás en qué punto se murió tu última idea. Y no fue mala suerte.',
    'Un movimiento completo para la próxima vez: cómo preparar la conversación con quien tiene que decirte que sí, con IA.',
    'Y al final, un regalo: el agente que hace de tu jefe, para ensayar con él antes de la reunión de verdad. Quédate hasta el final.',
  ],
  logisticsHeading: 'Cuándo y dónde',
  logistics: [
    'Lunes 23 de noviembre, a las 18:30 (hora de Madrid). Una hora.',
    'En directo por Zoom. Gratis.',
    'Se queda grabada: si te apuntas y no puedes venir, te mando la grabación.',
  ],
  whoHeading: 'Quién la da',
  whoBody:
    'Soy Yaiza Temprado, fundadora del Club Pericia. Llevo 20 años en corporate, en siete empresas y pasando por toda la cadena de mando, de ingeniera a Senior Director. Casi nada de esto me salió natural: lo tuve que aprender. Por eso sé que se puede enseñar.',
  cta: 'Quiero mi plaza',
  namePlaceholder: 'Tu nombre',
  emailPlaceholder: 'Tu email',
  formNote:
    'Te mando el enlace de Zoom por email, con un botón para guardarlo en tu calendario. Al apuntarte entras también en mi newsletter; te das de baja con un clic desde cualquier email.',
  thanks: {
    title: 'Tienes tu plaza — Masterclass Club Pericia',
    heading: 'Tienes tu plaza.',
    body: 'Lunes 23 de noviembre, a las 18:30 (hora de Madrid), por Zoom. Guárdalo ya en tu calendario: el evento lleva el enlace dentro.',
    calendarLead: 'El lunes por la mañana te escribo para recordártelo. Y si no puedes venir, te mando la grabación.',
    zoomLead: 'El enlace para entrar:',
    google: 'Google Calendar',
    ics: 'Outlook o Apple',
    seeYou: 'Nos vemos el lunes 23 a las 18:30.',
  },
}
