import type { Dictionary } from './types'

const es: Dictionary = {
  meta: {
    title: 'Yaiza Temprado — Comunicación, influencia y liderazgo',
    description:
      'Fundadora de Pericia. 20 años en corporate, de ingeniera junior a Senior Director. Liderazgo y comunicación para que tus ideas salgan adelante.',
  },
  nav: {
    about: 'Sobre mí',
    expertise: 'Especialidad',
    services: 'Trabaja conmigo',
    companies: 'Empresas',
    resources: 'Artículos y guías',
    contact: 'Newsletter',
    club: 'Club Pericia',
  },
  hero: {
    eyebrow: 'Mentoría y formación en liderazgo · Fundadora de Pericia',
    heading: 'Liderar y que de verdad te escuchen.',
    lead: 'Las reuniones que no deciden nada, las ideas buenas que no salen adelante, las salas donde cuesta que te tomen en serio. Las conozco porque han sido las mías: 20 años en corporate, de ingeniera junior a Senior Director. Te ayudo a cambiarlo en grupo en el Club Pericia, en mentoría individual o con tu equipo.',
    ctaPrimary: 'Conoce el Club Pericia · empieza el 11 de enero',
    ctaSecondary: 'Hablamos 15 minutos',
    ctaPrimaryHref: '/es/clubpericia/',
    ctaSecondaryHref: 'https://cal.com/yaiza-temprado/diagnostico?canal=web-home',
    leadLink: { text: 'Club Pericia', href: '/es/clubpericia/' },
  },
  about: {
    eyebrow: 'Sobre mí',
    heading: 'He pasado por toda la cadena de mando',
    p1: 'No te lo cuento de oídas. He pasado 20 años en corporate, en siete empresas y dos países, y he recorrido cada escalón: de ingeniera junior a manager, directora y Senior Director. Lo que te cuento sobre reuniones, influencia o presencia no es teoría de un libro: son las salas por las que he pasado y las que he dirigido.',
    p2: 'Y hay algo que casi nadie te cuenta en español: cómo la IA está cambiando lo que se espera de quien lidera. Lo vi en mis equipos y en mis propias decisiones: qué suma ahora de un manager y qué deja de sumar. No es una predicción, es lo que ya está pasando.',
    p3: 'Y una cosa más, porque explica cómo trabajo. He pasado 20 años siendo de las pocas mujeres en la sala. Sé lo que es entrar donde no encajas del todo, que te cuestionen más de la cuenta y ganarte el sitio igual. Eso le sirve a cualquiera que se sienta fuera de la conversación: por venir de la parte técnica, por ser la persona nueva o la más joven, o simplemente porque nadie te enseñó a jugar esa partida.',
  },
  expertise: {
    eyebrow: 'Especialidad',
    heading: 'En qué te ayudo de verdad',
    cards: [
      {
        title: 'Que te escuchen y tus ideas salgan adelante',
        body: 'Tus ideas pasan sin pena ni gloria y no acaban de salir adelante, sobre todo en reuniones que no deciden nada. Te doy los marcos para posicionarlas, llevar la conversación al punto y salir con decisión, dueños y fecha.',
      },
      {
        title: 'Posicionamiento y presencia ejecutiva',
        body: 'Ya haces el trabajo del siguiente nivel, pero cuando toca hablar de ascenso te dicen que «todavía no», que te falta presencia ejecutiva. Vemos qué señales mandas en cada reunión, email y decisión, y qué tiene que cambiar para que arriba te vean ya en el escalón siguiente, sin convertirte en alguien que no eres.',
      },
      {
        title: 'Delegar y ejecutar sin quemarte',
        body: 'Delegas y luego lo rehaces porque no sale como tú lo harías, y sostener el ritmo entre reorg y reorg te cuesta. Vemos cómo soltar de verdad y entregar sin depender de quién aguanta más.',
      },
      {
        title: 'Liderar cuando la IA lo cambia todo',
        body: 'Tu equipo ya va con IA y no tienes del todo claro qué se espera ahora de ti. Te ayudo a situarte: qué de tu trabajo gana valor, qué deja de tenerlo, y cómo no quedarte por detrás de tu propia gente.',
      },
    ],
  },
  proof: {
    eyebrow: 'Por qué yo',
    heading: 'Por qué te sirve que haya pasado por todo',
    cards: [
      {
        label: 'Toda la cadena de mando',
        body: 'Ingeniera, manager, directora, Senior Director. No te hablo de cómo es liderar desde un libro: te hablo desde cada escalón por el que he pasado y de las salas que he dirigido.',
      },
      {
        label: 'Mentoría',
        body: 'Lo que vi en mis equipos lo crucé con lo que me cuenta la gente a la que mentorizo: los mismos atascos, las mismas reuniones, los mismos miedos. Por eso lo que te doy no es teoría, son patrones que se repiten.',
      },
      {
        label: 'Los dos lados',
        body: 'He estado en tu silla y en la de quien decide. Conozco el lado de quien decide promociones y el de quien pelea por que le escuchen. Te ayudo desde los dos a la vez.',
      },
    ],
  },
  services: {
    eyebrow: 'Servicios',
    heading: 'Trabaja conmigo',
    lead: 'Tres formas de trabajar con Pericia. Trabajamos sobre situaciones reales de esta semana, no con teoría.',
    cards: [
      {
        title: 'Club Pericia',
        tag: 'En grupo · Primera edición: 11 de enero',
        description: 'Programa de cuatro semanas en grupo, con tu caso real y un directo a la semana.',
        links: [{ label: 'Conoce el Club Pericia', href: '/es/clubpericia/' }],
      },
      {
        title: 'Mentoría individual',
        tag: 'A tu medida',
        description: 'El mismo trabajo, a tu medida. Dos packs de seis sesiones, según el momento en el que estés, o una sesión de trabajo.',
        links: [
          { label: 'Los primeros 90 días liderando', detail: 'Si acabas de estrenarte liderando', href: '/es/programas/primeros-90-dias' },
          { label: 'Presencia ejecutiva', detail: 'Si llevas años y tu voz no pesa lo que debería', href: '/es/programas/presencia-ejecutiva' },
          { label: 'Sesión de trabajo', detail: 'Un problema concreto, una hora', href: 'https://cal.com/yaiza-temprado/sesion', external: true },
        ],
      },
      {
        title: 'Para empresas',
        tag: 'Para un equipo',
        description: 'El mismo método dentro de tu empresa, para un equipo.',
        links: [{ label: 'Método Pericia para empresas', href: '/es/empresas' }],
      },
    ],
    note: {
      text: '¿No sabes cuál te encaja?',
      cta: 'Hablamos 15 minutos',
      href: 'https://cal.com/yaiza-temprado/diagnostico?canal=web-servicios',
      external: true,
    },
  },
  programs: {
    forWhoLabel: 'Para quién',
    sessionsHeading: 'Sesiones incluidas',
    backToServices: '← Trabaja conmigo',
    companyHeading: '¿Te lo paga tu empresa?',
    companyBody:
      'Muchas empresas cubren este programa como formación. El precio es el mismo, con la factura a nombre de la empresa, un arranque a tres con tu responsable y un resumen de cierre.',
    companyCta: '¿Es para un equipo de managers? Método Pericia para empresas',
    companyGuideCta: 'Cómo pedírselo a tu empresa',
    items: [
      {
        slug: 'primeros-90-dias',
        seoDescription: 'De hacer el trabajo a que lo haga el equipo. Mentoría individual para tu primer rol de liderazgo: expectativas, primer conflicto y gestionar hacia arriba.',
        tag: 'Programa · Nuevos managers',
        title: 'Los primeros 90 días liderando',
        subtitle: 'De hacer el trabajo a que lo haga el equipo.',
        forWho:
          'Para ti si acabas de ascender a tu primer rol de liderazgo (o llevas menos de 6 meses y ya vas con el agua al cuello).',
        detail: '6 sesiones · 790 € (IVA incluido)',
        cadence: 'Cadencia quincenal (3 meses)',
        sessions: [
          {
            title: 'Diagnóstico de situación',
            description: 'Qué has heredado, qué se espera de ti, qué no te han dicho.',
          },
          {
            title: 'Posicionamiento',
            description:
              'Cómo quieres que te perciba tu equipo, tus pares y tu jefe, y qué señales estás mandando ahora mismo.',
          },
          {
            title: 'Conversaciones fundacionales',
            description:
              'Las primeras reuniones individuales con tu equipo, cómo establecer expectativas, cómo escuchar sin prometer.',
          },
          {
            title: 'Tu primer conflicto',
            description:
              'Feedback, bajo rendimiento, o la primera decisión impopular. Cómo gestionarla sin destruir confianza.',
          },
          {
            title: 'Gestionar hacia arriba',
            description:
              'Cómo comunicarte con tu manager, pedir recursos, decir que no, dar visibilidad sin parecer que vendes humo.',
          },
          {
            title: 'Revisión y plan de vuelo',
            description: 'Qué ha cambiado, qué patrones has roto, qué te queda por trabajar por tu cuenta.',
          },
        ],
        buyHref: 'https://buy.stripe.com/cNieVcbxs0kM50e8uPg7e00',
        cta: 'Reservar plaza',
      },
      {
        slug: 'presencia-ejecutiva',
        seoDescription: 'Que tu voz pese donde se decide. Mentoría individual de 6 sesiones para quien lleva años liderando: autoridad, posicionamiento y cómo influir en comité.',
        tag: 'Programa · Directivos y senior managers',
        title: 'Presencia ejecutiva',
        subtitle: 'Que tu voz pese donde se decide.',
        forWho:
          'Para ti si llevas años liderando (un equipo, un área, un proyecto que defiendes en comité) y notas que donde se decide tu voz no pesa lo que debería: te cuestionan más de la cuenta, te enteras tarde de lo que importa, haces el trabajo de liderar sin la autoridad real, o para el siguiente escalón llevas tiempo oyendo «todavía no».',
        detail: '6 sesiones · 790 € (IVA incluido)',
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
            title: 'Hacia arriba y en comité',
            description:
              'Cómo presentar a dirección y salir con lo que necesitas: síntesis, escalar a tiempo, pedir recursos, decir que no.',
          },
          {
            title: 'Conversaciones que estás evitando',
            description:
              'Identificarlas, prepararlas, tenerlas. Incluida la de tu propia visibilidad: dejar de regalar tu trabajo.',
          },
          {
            title: 'Plan de posicionamiento a 6 meses',
            description: 'Qué quieres conseguir, qué necesitas cambiar, y cómo medirlo.',
          },
        ],
        buyHref: 'https://buy.stripe.com/bJe9AS1WS3wYcsG5iDg7e01',
        cta: 'Reservar plaza',
      },
    ],
  },
  companies: {
    seoDescription: 'El mismo método de Pericia dentro de tu empresa, para un equipo de managers: casos reales, sus jefes dentro y una forma de medir el cambio.',
    eyebrow: 'Para empresas',
    heading: 'Método Pericia para empresas',
    lead: 'El mismo método dentro de tu empresa, para un equipo. Un grupo de managers trabaja durante varios meses sobre sus casos reales, con sus jefes dentro desde el principio y una forma de medir si ha cambiado algo.',
    problemHeading: 'Lo que pasa con los cursos de siempre',
    problemQuote:
      'Un curso de management al uso no está mal. Lo ves, te parece interesante, y luego te vuelves a tu sitio y como mucho te llevas tres ideas. El 95 % de tu management sigue siendo el mismo.',
    problemBody:
      'Por eso la formación de managers se mide con datos de asistencia y satisfacción, y casi nunca con datos de cambio. Y mientras, los managers siguen llevando a RRHH lo que deberían saber llevar ellos: la conversación de rendimiento, el conflicto del equipo, el feedback difícil.',
    whyHeading: 'Qué hace que se aplique',
    whyLead: 'La herramienta se aprende en una tarde. Que se use depende de tres cosas que un curso no toca.',
    why: [
      {
        title: 'El jefe del manager',
        body: 'Lo que más predice que una formación se use es el sitio al que vuelve la persona: el apoyo de su propio jefe y un equipo que acepta el cambio.',
        source: 'Blume y otros, 2010: 89 estudios.',
      },
      {
        title: 'Casos reales, no más sesiones',
        body: 'El coaching funciona, pero el número de sesiones no predice el resultado. Lo que lo predice es trabajar sobre tus propios objetivos entre una sesión y la siguiente.',
        source: 'Jones, Woods y Guillaume, 2016: 17 estudios.',
      },
      {
        title: 'Observación y feedback',
        body: 'Con teoría y demostración, entre un 5 y un 10 % de la gente aplica lo nuevo en su trabajo. Si se añade observación y feedback sobre el terreno, lo hace un 80-90 %.',
        source: 'Joyce y Showers, con datos de formación de profesorado.',
      },
    ],
    howHeading: 'Cómo funciona',
    howLead: 'Para grupos reducidos de managers, con una sesión al mes.',
    steps: [
      {
        title: 'Sesión de diseño',
        body: 'Con RRHH y con los jefes de los managers. Acordamos qué es un buen resultado, cómo lo vamos a medir y qué hace cada jefe antes, durante y después de las sesiones. Sin los jefes dentro, no cambia nada.',
      },
      {
        title: 'Sesiones mensuales',
        body: '4, 6 u 8 sesiones de 90 minutos, una al mes. Cada una, sobre un caso real de los equipos del grupo: una conversación de rendimiento, un feedback difícil, delegar, llevar un equipo con la IA de por medio. Entre sesiones hay un hilo abierto, para que lo que pasa en la segunda semana tenga respuesta en la segunda semana.',
      },
      {
        title: 'Observación, opcional',
        body: 'Me siento en dos reuniones reales de cada manager (una con alguien de su equipo y otra con el equipo entero), le doy feedback ese mismo día y le dejo una nota corta por escrito. Se contrata por persona, así que puedes dárselo a quien más lo necesita.',
      },
      {
        title: 'Informe de cierre',
        body: 'Al terminar, contra las medidas que acordamos en la sesión de diseño.',
      },
    ],
    measureHeading: 'Cómo se mide',
    measureLead: 'Las medidas se cierran en la sesión de diseño. Esta es mi propuesta de partida.',
    measures: [
      {
        title: 'Escalados a RRHH',
        body: 'Cuántas consultas básicas de gestión le llegan a RRHH de cada manager del grupo, antes y durante. Cada mes.',
      },
      {
        title: 'Cuatro preguntas de pulso',
        body: 'Solo a los equipos del grupo, al empezar y al terminar: «Mi responsable me da feedback que me ayuda a mejorar», «En mi equipo los desacuerdos se resuelven de forma constructiva», «Sé qué se espera de mí y cómo se evalúa mi trabajo», «Mi responsable apoya mi desarrollo».',
      },
      {
        title: 'Una conversación real',
        body: 'Cada manager lleva una conversación difícil de su propio equipo durante el programa, preparada en el grupo y revisada después.',
      },
      {
        title: 'Salidas que duelen',
        body: 'A los 12 meses: cuánta gente que no queríais perder se ha ido de los equipos del grupo, comparado con el resto.',
      },
    ],
    whoHeading: 'Quién está detrás',
    whoBody:
      'Yaiza Temprado, fundadora de Pericia. Empecé dando clase de Machine Learning en la Universidad Europea y después pasé 20 años en corporate, en siete empresas, de ingeniera junior a Senior Director, con más de 100 personas a mi cargo a lo largo de mi carrera. Así crecieron los managers de mi organización: trabajando sus casos reales conmigo, su jefa. En octubre dejé mi puesto y fundé Pericia.',
    whoCompanies: {
      label: 'Ha liderado equipos en',
      names: ['Amadeus', 'Telefónica I+D', 'SICPA', 'Busuu'],
      countriesLabel: 'Con equipos en',
      countries: ['España', 'Alemania', 'India', 'Estados Unidos', 'Australia'],
    },
    fundaeHeading: '¿Es bonificable por FUNDAE?',
    fundaeBody:
      'Puede aplicar si contrata la entidad española de la empresa. La gestión la lleva la empresa desde su plataforma de FUNDAE y hay que comunicarlo antes de empezar. Te llevo la documentación.',
    ctaHeading: '¿Lo vemos para tu empresa?',
    ctaBody: 'Cuéntame cuántos managers son y qué te preocupa de ellos, y te mando una propuesta.',
    ctaPrimary: 'Pídeme una propuesta',
    ctaSecondary: 'Reserva una llamada',
    ctaMailSubject: 'Método Pericia para empresas',
    individual: {
      text: '¿Buscas otra cosa? Mentoría individual para una persona, pagada por la empresa:',
      cta: 'Ver los packs',
    },
  },
  resources: {
    eyebrow: 'Artículos y guías',
    heading: 'Cuando ser buena en el trabajo no basta',
    lead: 'Sobre liderazgo, comunicación y cómo crecer dentro de tu empresa. Los artículos se leen aquí. Las guías te las mando al email.',
    cardCta: 'Ver guía',
    guideLabel: 'Guía gratis',
    articleLabel: 'Artículo',
    startHeading: 'Por dónde empezar',
    moreHeading: 'Más artículos y guías',
    companyHeading: '¿Quieres que lo pague tu empresa?',
    companyBody: 'Muchas empresas tienen presupuesto de formación para esto.',
    companyCta: 'Te cuento cómo pedírselo',
    backLabel: '← Volver a recursos',
    insideHeading: 'Qué hay dentro',
    forWhoLabel: 'Para quién',
    formHeading: 'Descárgala gratis',
    formNote:
      'Te la mando al email y te suscribes a mi newsletter. Te das de baja cuando quieras, en un clic.',
    placeholder: 'Tu email',
    submit: 'Descárgala gratis',
    sending: 'Enviando...',
    success: 'Revisa tu email: dale a confirmar con un clic y la guía es tuya.',
    error: 'Algo salió mal. Inténtalo de nuevo.',
    chooseHeading: 'Elige tu versión',
    freePlanName: 'Gratis',
    freePlanPrice: '0 €',
    freePlanDesc: 'Los primeros capítulos para empezar.',
    paidPlanName: 'Completa',
    paidPlanDesc: 'Todos los capítulos más el plan de acción y el workbook editable.',
    paidReassurance: 'Descarga inmediata',
    paidCta: 'Consíguela completa',
    paidNote: 'Pago único. La versión completa incluye todos los capítulos gratuitos más el plan de acción, el PDF completo y el workbook editable.',
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
              'Las frases concretas para que tu aportación pese, sin tener que ser quien más habla.',
          },
          {
            title: 'Que no muera en «lo miramos»',
            description:
              'Cómo cerrar con dueños, fechas y siguiente paso para que la decisión sobreviva a la reunión.',
          },
        ],
        kitFormId: '9509093',
        paid: {
          price: '29 €',
          buyHref: 'https://yaizatemprado.kit.com/products/haz-tuya-tu-proxima-reunion',
          highlights: [
            {
              title: 'Cuando lideras tú la sala',
              description:
                'Cómo cortar las ramas que descarrilan la reunión: el parking lot y las 3 frases asertivas para reconducir sin quedar mal.',
            },
            {
              title: 'Coalición y lectura de sala',
              description:
                'El mapa de stakeholders, la conversación previa que te ahorra la pelea, y lo único que la IA no puede hacer por ti.',
            },
            {
              title: 'Tus 7 prompts de IA',
              description:
                'PREP, ESPEJO, INICIO, POST-MORTEM, COALICIÓN, PRE-MORTEM y SOMBRA. Listos para copiar y adaptar a tu caso.',
            },
            {
              title: 'El workbook',
              description:
                'Agendas por tipo de reunión, plantilla del email de seguimiento, las 8 preguntas para cerrar bien, y el diario semanal de 5 minutos.',
            },
          ],
        },
      },
      {
        slug: 'manager-era-ia',
        tag: 'Guía',
        title: 'Cómo te van a medir como manager en la era de la IA',
        summary:
          'Las 4 preguntas con las que te van a evaluar como manager ahora que la IA cambia el trabajo, los 5 niveles para situarte con honestidad, y las señales de que te estás quedando en el lado equivocado.',
        forWho:
          'Para ti si lideras un equipo y notas que las reglas del juego están cambiando con la IA, y no tienes del todo claro qué se espera ahora de ti.',
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
              'Dónde está el trabajo de manager que gana valor, no que lo pierde, cuando la IA entra en escena.',
          },
        ],
        kitFormId: '9509223',
        paid: {
          price: '29 €',
          buyHref: 'https://yaizatemprado.kit.com/products/guia-completa-liderazgo-ai',
          highlights: [
            {
              title: 'Diagnóstico de tu equipo',
              description:
                'El framework aptitud × skill × willingness para clasificar a tu gente, la plantilla de la conversación difícil, y qué hacer con el sénior que no quiere adoptar.',
            },
            {
              title: 'Rediseñar el trabajo',
              description:
                'La diferencia entre «usamos IA» y «somos AI-first», y el método de 3 pasos para rediseñar un proceso de verdad.',
            },
            {
              title: 'Narrativa hacia arriba',
              description:
                'Cómo contar tu transformación al CEO sin sonar a humo, con la plantilla de 1 página para tu próximo exec review.',
            },
            {
              title: 'El workbook',
              description:
                'Seis plantillas: autoeval con scoring, matriz de equipo, guion de conversación, mapeo de workflow, exec review y tracker de 12 semanas.',
            },
          ],
        },
      },
    ],
  },
  connect: {
    eyebrow: 'Newsletter',
    heading: 'Lo que funciona, contado desde dentro',
    body: 'Escribo sobre lo que me ha funcionado en 20 años de reuniones: que tus ideas salgan adelante, preparar una conversación difícil, contar lo que aportas y pedir lo que quieres. Y cómo usar la IA para que haga la parte pesada.',
    note: 'Te das de baja cuando quieras, en un clic.',
    lead: 'O sígueme en redes',
  },
  newsletter: {
    seoDescription: 'Dos o tres emails al mes sobre lo que me ha funcionado en 20 años de reuniones: que tus ideas salgan adelante y usar la IA para la parte pesada.',
    eyebrow: 'Newsletter',
    heading: 'Lo que funciona, contado desde dentro',
    body: 'Escribo sobre lo que me ha funcionado en 20 años de reuniones: que tus ideas salgan adelante, preparar una conversación difícil, contar lo que aportas y pedir lo que quieres. Y cómo usar la IA para que haga la parte pesada. Te mando 2 o 3 emails al mes, no más, para que cuando te llegue uno tenga chicha.',
    placeholder: 'Tu email',
    submit: 'Suscríbete',
    success: 'Ya estás dentro. Te escribo pronto.',
    error: 'Algo salió mal. Inténtalo de nuevo.',
    duplicate: 'Ya estás en la lista.',
  },
  footer: {
    rights: 'Todos los derechos reservados.',
  },
}

export default es
