import type { Dictionary } from './types'

const es: Dictionary = {
  meta: {
    title: 'Yaiza Temprado — Liderazgo en Ingeniería para Mujeres',
    description:
      'Yaiza Temprado ayuda a las mujeres en liderazgo de ingeniería a hacerse escuchar en los foros de decisión sénior — con un enfoque más claro, mayor influencia y una entrega sostenible.',
  },
  nav: {
    about: 'Sobre mí',
    expertise: 'Especialidades',
    services: 'Servicios',
    resources: 'Recursos',
    contact: 'Contacto',
  },
  hero: {
    eyebrow: 'Directora Sénior de Ingeniería',
    heading: 'Ayudando a las mujeres a liderar ingeniería con confianza',
    lead: 'Trabajo con ingenieras y líderes sénior para navegar las realidades del liderazgo técnico — visibilidad, influencia, entrega y poder — sin perderse a sí mismas en el proceso.',
    ctaPrimary: 'Trabaja conmigo',
    ctaSecondary: 'Suscríbete',
  },
  about: {
    eyebrow: 'Sobre mí',
    heading: 'Cómo entiendo el liderazgo en ingeniería',
    p1: 'He pasado la mayor parte de mi carrera trabajando dentro de organizaciones de ingeniería — construyendo equipos, escalando plataformas y entregando bajo restricciones reales. Lo que eso me enseñó es que los fallos de liderazgo rara vez vienen de falta de inteligencia o esfuerzo. Vienen de expectativas poco claras, incentivos inadecuados y sistemas que recompensan los comportamientos equivocados.',
    p2: 'Me importa profundamente la credibilidad técnica, no porque los líderes tengan que ser los mejores ingenieros de la sala, sino porque la confianza se construye cuando las decisiones están ancladas en la realidad. He visto lo que ocurre cuando el liderazgo se aleja demasiado del trabajo — la entrega sufre, las personas se desconectan y los mismos problemas se repiten con distintos nombres.',
    p3: 'Gran parte de mi enfoque hoy está en apoyar a las mujeres en ingeniería a medida que acceden a roles de liderazgo. No enseñándoles a ser más ruidosas o más seguras, sino ayudándolas a navegar el poder, la visibilidad y la toma de decisiones sin comprometer sus valores ni su criterio técnico.',
    metrics: {
      years: { value: '15+', label: 'Años trabajando dentro de organizaciones de ingeniería' },
      engineers: { value: '100+', label: 'Ingenieras e ingenieros a cuyo trabajo he apoyado y revisado' },
      companies: { value: '7', label: 'Empresas en distintos países y etapas de crecimiento' },
      transitions: { value: '20+', label: 'Transiciones de liderazgo acompañadas' },
    },
  },
  expertise: {
    eyebrow: 'Especialidades',
    heading: 'Áreas de enfoque',
    cards: [
      {
        title: 'Acompañando a ingenieras en su transición al liderazgo',
        body: 'Muchas de las personas con las que trabajo son ingenieras excelentes que de repente se encuentran liderando equipos. Les ayudo a entender esa transición, a construir autoridad de una manera que se sienta auténtica y a mantenerse conectadas al trabajo sin intentar hacerlo todo ellas solas.',
      },
      {
        title: 'Hacerse escuchar en los foros de decisión sénior',
        body: 'Trabajo con mujeres que hacen un trabajo sólido pero que no siempre son escuchadas en las salas de dirección. Nos centramos en cómo se enmarcan las decisiones, cuándo intervenir y cómo comunicar de maneras que tengan peso — sin fingir seguridad ni convertirse en alguien que no son.',
      },
      {
        title: 'Entregar de forma consistente sin agotar al equipo',
        body: 'He visto demasiados equipos depender de la buena voluntad, los heroísmos y las noches largas para mantener el ritmo. Me centro en crear formas de trabajo predecibles y sostenibles, donde la entrega no dependa de quién esté dispuesta a sacrificarse más.',
      },
      {
        title: 'Colaborar con producto sin perder el criterio de ingeniería',
        body: 'Trabajar estrechamente con producto y diseño importa, pero solo funciona cuando los roles y las expectativas están claros. Ayudo a los equipos de ingeniería a mantenerse implicados en las decisiones de producto protegiendo al mismo tiempo el criterio técnico y la salud a largo plazo.',
      },
    ],
  },
  proof: {
    eyebrow: 'Resultados',
    heading: 'Resultados seleccionados',
    cards: [
      {
        label: 'Entrega',
        body: 'Lideré la entrega de ingeniería en toda la organización, reduciendo significativamente el tiempo de ciclo al centrarse en el flujo, la claridad de responsabilidad y menos prioridades en competencia.',
      },
      {
        label: 'Cultura',
        body: 'Establecí una cultura de ingeniería alineada con los valores de la empresa, con un fuerte énfasis en la experiencia del desarrollador, la previsibilidad y la mejora continua — alejándose de los heroísmos y la extinción de incendios.',
      },
      {
        label: 'Formas de trabajo',
        body: 'Lideré la transformación ágil en mi organización actual, cambiando las formas de trabajo para mejorar la fiabilidad de la entrega, la toma de decisiones y la confianza entre ingeniería y producto.',
      },
    ],
  },
  services: {
    eyebrow: 'Servicios',
    heading: 'Trabaja conmigo',
    lead: 'Mentoría directa para mujeres en posiciones de liderazgo en ingeniería — o a punto de estarlo. Situaciones reales, planes concretos, feedback honesto.',
    cards: [
      {
        tag: 'Gratis',
        title: 'Sesión de diagnóstico',
        description: 'Me cuentas qué tienes encima y te doy mi lectura honesta. Sin compromiso.',
        detail: '15 min',
        href: 'https://cal.com/yaiza-temprado/diagnostico',
        external: true,
        cta: 'Reservar sesión gratis',
      },
      {
        tag: 'Programa',
        title: 'Deja de pedir permiso para liderar',
        description: 'Para ti si llevas tiempo liderando pero sientes que tu voz no pesa lo que debería. Comunicación, posicionamiento, navegación organizacional.',
        detail: '6 sesiones · 650 €',
        href: '/es/programas/deja-de-pedir-permiso',
        cta: 'Saber más',
      },
      {
        tag: 'Programa',
        title: 'Los primeros 90 días liderando',
        description: 'Para ti si acabas de aterrizar en tu primer rol de liderazgo y nadie te ha dado el manual.',
        detail: '6 sesiones · 650 €',
        href: '/es/programas/primeros-90-dias',
        cta: 'Saber más',
      },
      {
        tag: 'Sesión',
        title: 'Sesión de trabajo',
        description: 'Un problema real. Una hora. Sales con acciones concretas para ejecutar al día siguiente.',
        detail: '60 min · 150 €',
        href: 'https://cal.com/yaiza-temprado/sesion',
        external: true,
        cta: 'Reservar sesión',
      },
    ],
  },
  programs: {
    forWhoLabel: 'Para quién',
    sessionsHeading: 'Sesiones incluidas',
    backToServices: '← Volver a servicios',
    items: [
      {
        slug: 'deja-de-pedir-permiso',
        tag: 'Programa',
        title: 'Deja de pedir permiso para liderar',
        forWho:
          'Para ti si llevas tiempo en un rol de liderazgo pero sientes que no te toman en serio, que tu voz no pesa, o que estás haciendo el trabajo de liderar sin la autoridad real.',
        detail: '6 sesiones · 650 €',
        cadence: 'Cadencia quincenal o mensual',
        sessions: [
          {
            title: 'Auditoría de autoridad',
            description:
              'Dónde estás cediendo poder sin darte cuenta: en reuniones, en emails, en decisiones.',
          },
          {
            title: 'Comunicación y posicionamiento',
            description:
              'Las frases, los patrones, los tics que te están restando. Qué decir en su lugar.',
          },
          {
            title: 'Navegación política',
            description:
              'Quién decide qué en tu organización, cómo funcionan las alianzas, cómo influir sin que te dé alergia la palabra «influir».',
          },
          {
            title: 'Conversaciones que estás evitando',
            description: 'Identificarlas, prepararlas, ejecutarlas.',
          },
          {
            title: 'Visibilidad y autoría',
            description:
              'Cómo dejar de regalar tu trabajo y asegurarte de que tu impacto se ve.',
          },
          {
            title: 'Plan de posicionamiento a 6 meses',
            description: 'Qué quieres conseguir, qué necesitas cambiar, y cómo medirlo.',
          },
        ],
        buyHref: 'https://buy.stripe.com/bJe9AS1WS3wYcsG5iDg7e01',
        cta: 'Reservar plaza',
      },
      {
        slug: 'primeros-90-dias',
        tag: 'Programa',
        title: 'Los primeros 90 días liderando',
        forWho:
          'Para ti si acabas de ser promocionada a tu primer rol de liderazgo (o llevas menos de 6 meses y ya estás ahogándote).',
        detail: '6 sesiones · 650 €',
        cadence: 'Cadencia quincenal (3 meses)',
        sessions: [
          {
            title: 'Diagnóstico de situación',
            description: 'Qué has heredado, qué se espera de ti, qué no te han dicho.',
          },
          {
            title: 'Posicionamiento',
            description:
              'Cómo quieres que te perciba tu equipo, tus peers y tu jefe, y qué señales estás mandando ahora mismo.',
          },
          {
            title: 'Conversaciones fundacionales',
            description:
              'Los 1:1 iniciales, cómo establecer expectativas, cómo escuchar sin prometer.',
          },
          {
            title: 'Tu primer conflicto',
            description:
              'Feedback, underperformance, o la primera decisión impopular. Cómo gestionarla sin destruir confianza.',
          },
          {
            title: 'Gestionar hacia arriba',
            description:
              'Cómo comunicarte con tu manager, pedir recursos, decir que no, dar visibilidad sin parecer que estás vendiendo humo.',
          },
          {
            title: 'Revisión y plan de vuelo',
            description: 'Qué ha cambiado, qué patrones has roto, qué te queda por trabajar sola.',
          },
        ],
        buyHref: 'https://buy.stripe.com/cNieVcbxs0kM50e8uPg7e00',
        cta: 'Reservar plaza',
      },
    ],
  },
  resources: {
    eyebrow: 'Recursos',
    heading: 'Guías para descargar',
    lead: 'Guías prácticas sobre liderazgo, comunicación y reuniones. Te las quedas y las usas cuando las necesites.',
    cardCta: 'Ver guía',
    backLabel: '← Volver a recursos',
    insideHeading: 'Qué hay dentro',
    forWhoLabel: 'Para quién',
    formHeading: 'Descárgala gratis',
    formNote:
      'Te la envío al email. Y de paso te suscribes a mi newsletter sobre liderazgo en ingeniería e influencia — un email cada pocos días, sin relleno. Te puedes dar de baja cuando quieras, en un clic.',
    placeholder: 'Tu email',
    submit: 'Enviarme la guía',
    sending: 'Enviando...',
    success: 'Revisa tu email: dale a confirmar con un clic y la guía es tuya.',
    error: 'Algo salió mal. Inténtalo de nuevo.',
    items: [
      {
        slug: 'reuniones-productivas',
        tag: 'Guía',
        title: 'Cómo hacer que tus reuniones cuenten',
        summary:
          'Las reuniones productivas no pasan por casualidad: necesitan intención, preparación y posicionamiento. Esta guía te da el sistema para que cada conversación mueva algo.',
        forWho:
          'Para ti si lideras, alineas equipos o intentas que tus ideas avancen, y sientes que se te va media semana en reuniones que no deciden nada.',
        highlights: [
          {
            title: 'Antes de la sala',
            description:
              'Cómo preparar una reunión en 10 minutos para que llegue decidida, no para abrir el debate desde cero.',
          },
          {
            title: 'El patrón CPS',
            description:
              'Coalición, posicionamiento y seguimiento: por qué tus ideas llegan «huérfanas» a la reunión y cómo darles aliados antes de entrar.',
          },
          {
            title: 'Posicionar sin levantar la voz',
            description:
              'Las frases concretas para que tu aportación pese, sin tener que ser la que más habla.',
          },
          {
            title: 'Que no muera en «lo miramos»',
            description:
              'Cómo cerrar con dueños, fechas y siguiente paso para que la decisión sobreviva a la reunión.',
          },
        ],
        kitFormId: '9509093',
      },
      {
        slug: 'manager-era-ia',
        tag: 'Guía',
        title: 'Cómo te van a medir como manager en la era de la IA',
        summary:
          'Las 4 preguntas con las que te van a evaluar como manager ahora que la IA cambia el trabajo, los 5 niveles para situarte con honestidad, y las señales de que te estás quedando en el lado equivocado.',
        forWho:
          'Para ti si lideras un equipo y notas que las reglas del juego están cambiando con la IA — y no tienes del todo claro qué se espera ahora de ti.',
        highlights: [
          {
            title: 'Las 4 preguntas',
            description:
              'Los cuatro criterios con los que te van a medir como manager en la era de la IA. Para que sepas dónde miran antes de que lo hagan.',
          },
          {
            title: 'Los 5 niveles',
            description:
              'Una escala para autoevaluarte sin humo y ver en cuál estás hoy de verdad.',
          },
          {
            title: 'Las señales rojas',
            description:
              'Los avisos de que te estás quedando en el lado que sobra, y qué hacer cuando los detectas.',
          },
          {
            title: 'El 20% que no se automatiza',
            description:
              'Dónde está el trabajo de manager que gana valor —no que lo pierde— cuando la IA entra en escena.',
          },
        ],
        kitFormId: '9509223',
      },
    ],
  },
  connect: {
    eyebrow: 'No te pierdas nada',
    heading: 'Mantente al día',
    lead: 'O sígueme en redes',
  },
  newsletter: {
    eyebrow: 'Newsletter',
    heading: 'No te lo pierdas',
    body: 'Escribo sobre liderazgo en ingeniería, influencia y lo que implica liderar sin dejar de ser tú misma. Suscríbete para estar al día.',
    placeholder: 'Tu email',
    submit: 'Suscríbete',
    success: 'Apuntada. Te escribo pronto.',
    error: 'Algo salió mal. Inténtalo de nuevo.',
    duplicate: 'Ya estás en la lista.',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
}

export default es
