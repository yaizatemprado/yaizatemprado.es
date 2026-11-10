// Copy of the Club Pericia page. Spanish only: the club runs in Spanish.
// Source of truth for the wording: the vault note proyectos/club-pericia/pagina-web.md
// (Yaiza edits there; this file mirrors it). Dates and links live here so the page
// changes in one place between editions.

export const CLUB_URL = 'https://club-pericia.circle.so'
export const DIAGNOSTIC_URL = 'https://cal.com/yaiza-temprado/diagnostico?canal=web-club'
// Kit form 10169707 ("PERICIA · Lista de espera Club"). The page posts to it directly (the email box on this page),
// so nobody has to leave the site; the Kit landing yaizatemprado.kit.com/pericia still works for old links. It does
// not tag: the waitlist is this form plus the waitlist_pericia tag (ManyChat). Sign-ups also join the newsletter
// (Kit's "any form" automation, accepted by Yaiza 10/11). After subscribing Kit redirects to WAITLIST_THANKS.
export const WAITLIST_URL = 'https://yaizatemprado.kit.com/pericia'
export const WAITLIST_FORM_ACTION = 'https://app.kit.com/forms/10169707/subscriptions'
export const WAITLIST_THANKS = '/es/clubpericia/gracias/'

// Until sales open (Mon 23 Nov) the main button joins the waitlist; flip this on the day
// and it becomes "Quiero entrar" to the Circle checkout everywhere on the page.
export const SALES_OPEN = false
export const PRIMARY = SALES_OPEN
  ? { label: 'Quiero entrar', href: CLUB_URL }
  : { label: 'Avísame cuando abra', href: WAITLIST_URL }

// Pericia brand palette (proyectos/marca-pericia/index.md), not the personal-brand one.
export const BRAND = { night: '#1C2134', terracotta: '#C8694B', cream: '#FFF8F4' }

export const club = {
  title: 'Club Pericia — Liderazgo con IA | Yaiza Temprado',
  description:
    'Para quien propone, le dicen que sí y no pasa nada. Cuatro semanas en grupo para que tus ideas salgan adelante, con la IA que ya usas en el trabajo.',
  // The hero shows «CLUB», Ali's wordmark and this line next to its triangle (no second «Pericia»).
  eyebrow: 'Liderazgo con IA',
  heading: 'Propones algo con sentido. Todos asienten. Y no pasa nada.',
  lead:
    'Mientras, oyes que gente en puestos como el tuyo usa la IA para todo, y no terminas de ver a qué se refieren. El Club Pericia son cuatro semanas en grupo para que tus ideas salgan adelante y se sepa que son tuyas, con la IA que ya tienes en el trabajo haciendo el trabajo pesado.',
  ctaSecondary: 'Cuéntame tu caso en 15 min',

  scenesHeading: '¿Te suena?',
  scenes: [
    {
      title: 'Te dicen que sí, y se queda ahí.',
      body: 'Llevas tu propuesta a la reunión, te dicen que es buena idea y a la semana nadie se acuerda. O sale adelante, pero la acaba presentando otra persona.',
    },
    {
      title: 'La IA de los demás.',
      body: 'Alguien en un puesto como el tuyo dice que ya prepara las reuniones con la IA. Tú la usas para repasar un correo y poco más, y no ves qué hace distinto.',
    },
  ],
  scenesClose:
    'Las dos cosas tienen arreglo, y el arreglo es el mismo: preparar mejor lo que pides, con la IA como multiplicador. Piensa contigo, te ordena las ideas y se queda con el trabajo que no aporta, para que tú te centres en el que sí.',

  outcomesHeading: 'Qué cambia en cuatro semanas',
  outcomes: [
    'Entras en la reunión sabiendo qué sí necesitas, de quién y para cuándo.',
    'Llegas con las preguntas de la sala ya contestadas.',
    'Tu idea sale de la reunión con un seguimiento y una fecha, y no se muere ahí.',
    'Tienes tu IA del trabajo montada con tu contexto, y ves con tus propios casos cómo sacarle toda su potencia.',
  ],

  howHeading: 'Cómo funciona',
  steps: [
    { title: 'Un módulo por semana', body: 'Cada módulo trabaja una parte del liderazgo y cómo llevarla a la práctica con IA. Tiene varios vídeos cortos, de 10 a 15 minutos, y cada vídeo, su ejercicio con tu caso real, no con uno inventado.' },
    { title: 'Un directo los lunes', body: 'Trabajamos los casos del grupo. Se queda grabado.' },
    { title: 'Entre semana, lo haces fuera', body: 'Con tu jefe, tu equipo o la persona que tiene que decirte que sí. Y lo cuentas en el grupo.' },
  ],


  editionHeading: 'Primera edición',
  editionBullets: [
    'Directos los lunes 14 y 21 de diciembre y 11 y 18 de enero, a las 18:00 (hora de Madrid).',
    'Todos los directos se quedan grabados.',
    'Los módulos se abren uno por semana, para que te dé tiempo a hacerlo fuera.',
  ],
  editionNote: 'Las plazas abren el lunes 23 de noviembre.',

  whoHeading: 'Quién lo imparte',
  whoBody:
    'Soy Yaiza Temprado. Fundé el Club Pericia después de 20 años en corporate, en siete empresas y pasando por toda la cadena de mando, de ingeniera a Senior Director. Casi nada de esto me salió natural: lo tuve que aprender. Por eso sé que se puede enseñar.',

  faqHeading: 'Preguntas',
  faq: [
    {
      q: '¿Es un curso de IA?',
      a: 'No exactamente. Es un curso de liderazgo en el que la IA es tu herramienta. Vas a aprender muchísimo sobre cómo usarla, siempre ligada a los objetivos de tus proyectos.',
    },
    {
      q: 'No dirijo a personas. ¿Me sirve?',
      a: 'Sí. Es para cualquiera cuyas ideas dependen de que otra persona diga que sí, tengas equipo o no. Si diriges proyectos o trabajas en una empresa donde tienes que colaborar con más gente, te sirve.',
    },
    {
      q: '¿Tengo que saber de IA?',
      a: 'No. Antes del primer directo compartiré un vídeo de introducción en el que verás, paso a paso, cómo organizarla, para que llegues al curso con todo preparado.',
    },
    {
      q: 'En el trabajo tengo ChatGPT, Copilot, Gemini o Claude. ¿Me vale?',
      a: 'Sí. El método es el mismo para todas, y tendrás los pasos específicos para la tuya.',
    },
    {
      q: 'Solo tengo una versión gratuita. ¿Me vale?',
      a: 'Puedes intentarlo, pero no te lo recomiendo. Trabajamos con proyectos y con tus documentos, y en las versiones gratuitas la potencia es limitada. Te recomiendo la de tu empresa o una de pago tuya: con las versiones básicas de pago es suficiente.',
    },
    { q: '¿Y si no puedo ir a un directo?', a: 'Se quedan grabados, y puedes dejar tu caso en el grupo para que lo veamos.' },
    {
      q: '¿Me lo puede pagar mi empresa?',
      a: 'Sí. Escríbeme a hola@yaizatemprado.es y te hago la factura a nombre de tu empresa.',
    },
  ],

  closing: '¿No sabes si es para ti? Cuéntame tu caso en 15 minutos y te lo digo.',
  waitlistPlaceholder: 'Tu email',
  waitlistNote:
    'Te escribo el día que abran las plazas. Al apuntarte entras también en mi newsletter; si no la quieres, te das de baja con un clic desde cualquier email.',
  thanks: {
    title: 'Estás en la lista — Club Pericia',
    heading: 'Estás en la lista.',
    body: 'Te escribo el lunes 23 de noviembre, el día que abren las plazas de la primera edición. Si no ves mi email, mira en promociones o en spam.',
    diagnosticLead: 'Si mientras quieres contarme tu caso, tienes 15 minutos conmigo.',
    back: 'Volver al Club Pericia',
  },
}
