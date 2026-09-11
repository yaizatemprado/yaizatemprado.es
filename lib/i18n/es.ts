import type { Dictionary } from './types'

const es: Dictionary = {
  meta: {
    title: 'Yaiza Temprado — Comunicación, influencia y liderazgo en tech',
    description:
      'Directora Senior de Ingeniería. 20 años en corporate, siete empresas de sectores distintos y toda la cadena de mando recorrida. Mentoría 1:1 para managers y directivos de entornos técnicos: comunicar con peso, hacerse escuchar, sacar reuniones que decidan y ganar presencia donde se decide. También pagada por la empresa.',
  },
  nav: {
    about: 'Sobre mí',
    expertise: 'Especialidades',
    services: 'Servicios',
    companies: 'Empresas',
    resources: 'Recursos',
    contact: 'Newsletter',
  },
  hero: {
    eyebrow: 'Directora Senior de Ingeniería',
    heading: 'Liderar en tech y que de verdad te escuchen.',
    lead: 'Llevo 20 años en corporate, en todo tipo de empresas y sectores, y he pasado por toda la cadena de mando: de ingeniera a Directora Senior. Las reuniones que no deciden nada, las ideas buenas que no salen adelante, las salas donde cuesta que te tomen en serio: las conozco porque han sido las mías. Te doy los marcos concretos para cambiarlo.',
    ctaPrimary: 'Trabaja conmigo',
    ctaSecondary: 'Suscríbete',
  },
  about: {
    eyebrow: 'Sobre mí',
    heading: 'He pasado por toda la cadena de mando',
    p1: 'No te lo cuento de oídas. Llevo más de 20 años en corporate, en siete empresas de sectores y tamaños distintos, y he recorrido cada escalón: ingeniera, manager, directora, Directora Senior de Ingeniería. Lo que te cuento sobre reuniones, influencia o presencia no es teoría de un libro: son las salas por las que he pasado y las que he dirigido.',
    p2: 'Y hay algo que casi nadie te cuenta en español: cómo la IA está cambiando lo que se espera de quien lidera. Lo he visto en mis equipos y en mis propias decisiones: qué suma ahora de un manager y qué deja de sumar. No es una predicción, es lo que ya está pasando.',
    p3: 'Y una cosa más, porque explica cómo trabajo. Llevo 20 años siendo de las pocas mujeres en la sala. Sé lo que es entrar donde no encajas del todo, que te cuestionen más de la cuenta y ganarte el sitio igual. Eso le sirve a cualquiera que se sienta fuera de la conversación: por venir de la parte técnica, por ser la persona nueva o la más joven, o simplemente porque nadie te enseñó a jugar esa partida.',
  },
  expertise: {
    eyebrow: 'Especialidades',
    heading: 'En qué te ayudo de verdad',
    cards: [
      {
        title: 'Que te escuchen y tus ideas salgan adelante',
        body: 'Tus ideas pasan sin pena ni gloria y no acaban de salir adelante, sobre todo en reuniones que no deciden nada. Te doy los marcos para posicionarlas, llevar la conversación al punto y salir con decisión, dueños y fecha.',
      },
      {
        title: 'Posicionamiento y presencia ejecutiva',
        body: 'Haces el trabajo de liderar, pero la etiqueta que llevas puesta sigue siendo «la parte técnica». Vemos qué señales mandas en cada reunión, email y decisión, y cómo cambiar cómo te perciben arriba sin convertirte en alguien que no eres.',
      },
      {
        title: 'Delegar y ejecutar sin quemarte',
        body: 'Delegas y luego lo rehaces porque no sale como tú lo harías, y sostener el ritmo entre reorg y reorg te cuesta. Vemos cómo soltar de verdad y entregar sin depender de quién aguanta más.',
      },
      {
        title: 'Liderar cuando la IA lo mueve todo',
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
        body: 'Ingeniera, manager, directora, Directora Senior. No te hablo de cómo es liderar desde un libro: te hablo desde cada escalón por el que he pasado y de las salas que he dirigido.',
      },
      {
        label: 'Mentoría',
        body: 'Lo que veo en mis equipos lo cruzo con lo que me cuenta la gente a la que mentorizo: los mismos atascos, las mismas reuniones, los mismos miedos. Por eso lo que te doy no es teoría, son patrones que se repiten.',
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
    lead: 'Mentoría directa para quien lidera en tech, o está a punto. Situaciones reales, planes concretos, feedback honesto.',
    companyNote:
      '¿Te lo paga tu empresa? Muchas empresas cubren estos programas como formación. Tienes una página pensada para enviársela a quien lo aprueba.',
    companyCta: 'Ver cómo se pide',
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
        tag: 'Programa · Nuevos managers',
        title: 'Los primeros 90 días liderando',
        description: 'Para ti si acabas de aterrizar en tu primer rol de liderazgo y nadie te ha dado el manual.',
        detail: '6 sesiones · 790 € (IVA incluido)',
        companyDetail: 'Empresa: 1.200 € + IVA',
        href: '/es/programas/primeros-90-dias',
        cta: 'Saber más',
      },
      {
        tag: 'Programa · Directivos',
        title: 'Presencia ejecutiva',
        description: 'Para ti si llevas años liderando y donde se decide tu voz no pesa lo que debería. Comunicación, posicionamiento, navegación política.',
        detail: '6 sesiones · 790 € (IVA incluido)',
        companyDetail: 'Empresa: 1.200 € + IVA',
        href: '/es/programas/presencia-ejecutiva',
        cta: 'Saber más',
      },
      {
        tag: 'Sesión',
        title: 'Sesión de trabajo',
        description: 'Un problema real. Una hora. Sales con acciones concretas para ejecutar al día siguiente.',
        detail: '60 min · 180 € (IVA incluido)',
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
    companyHeading: '¿Te lo paga tu empresa?',
    companyBody:
      'Muchas empresas cubren este programa como formación. Si lo paga la empresa son 1.200 € + IVA, con factura a su nombre, un arranque a tres con tu responsable y un resumen de cierre. Tienes una página pensada para enviársela a quien lo aprueba.',
    companyCta: 'Ver la página para empresas',
    items: [
      {
        slug: 'primeros-90-dias',
        tag: 'Programa · Nuevos managers',
        title: 'Los primeros 90 días liderando',
        subtitle: 'De hacer el trabajo a que lo haga el equipo.',
        forWho:
          'Para ti si acabas de ascender a tu primer rol de liderazgo (o llevas menos de 6 meses y ya vas con el agua al cuello).',
        detail: '6 sesiones · 790 € (IVA incluido)',
        companyDetail: 'Si lo paga tu empresa: 1.200 € + IVA',
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
              'Los 1:1 iniciales, cómo establecer expectativas, cómo escuchar sin prometer.',
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
        tag: 'Programa · Directivos y senior managers',
        title: 'Presencia ejecutiva',
        subtitle: 'Que tu voz pese donde se decide.',
        forWho:
          'Para ti si llevas años liderando (un equipo, un área, un proyecto que defiendes en comité) y notas que donde se decide tu voz no pesa lo que debería: te cuestionan más de la cuenta, te enteras tarde de lo que importa, o haces el trabajo de liderar sin la autoridad real.',
        detail: '6 sesiones · 790 € (IVA incluido)',
        companyDetail: 'Si lo paga tu empresa: 1.200 € + IVA',
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
    eyebrow: 'Para empresas',
    heading: 'Mentoría 1:1 para managers y directivos, pagada por la empresa',
    lead: 'Esta página es para dos personas: quien quiere hacer el programa y quien lo aprueba. Si apruebas tú, en dos minutos sabes qué es, qué gana tu equipo y cuánto cuesta.',
    whatHeading: 'Qué es',
    whatBody:
      'Seis sesiones de una hora, a solas conmigo, online, repartidas en tres a seis meses. Cada sesión trabaja una situación real de esa semana (una reunión, una decisión, una conversación pendiente) y termina con una acción concreta para la siguiente. Lo doy yo: Directora Senior de Ingeniería, 20 años en corporate y toda la cadena de mando recorrida, de ingeniera a dirección.',
    programsHeading: 'Dos programas, según el momento',
    programs: [
      {
        title: 'Los primeros 90 días liderando',
        forWho: 'Para quien acaba de ascender a su primer rol de liderazgo. Expectativas, primeros 1:1, primer conflicto, gestionar hacia arriba.',
        href: '/es/programas/primeros-90-dias',
      },
      {
        title: 'Presencia ejecutiva',
        forWho: 'Para managers y directivos con experiencia cuya voz no pesa lo que debería donde se decide. Autoridad, posicionamiento, navegación política, comité.',
        href: '/es/programas/presencia-ejecutiva',
      },
    ],
    gainsHeading: 'Qué gana la empresa',
    gains: [
      {
        title: 'Reuniones que deciden',
        body: 'La persona llega a la sala con posición, lleva la conversación al punto y sale con decisión, dueños y fecha. Se nota en la segunda semana.',
      },
      {
        title: 'Menos ruido hacia arriba',
        body: 'Status en tres líneas, escalados a tiempo, menos sorpresas para su responsable. Lo que suele pedir un director y casi nunca consigue.',
      },
      {
        title: 'Un equipo que no cuelga de una persona',
        body: 'Delegar de verdad y sostener el ritmo sin que la ejecución dependa de quién aguanta más. Lo contrario de quemar a alguien en quien ya has invertido.',
      },
      {
        title: 'Aplicado la semana siguiente',
        body: 'No hay teoría que guardar en un cajón. Cada sesión sale con una acción sobre un problema real del trabajo, y en la siguiente vemos qué pasó.',
      },
    ],
    howHeading: 'Cómo funciona',
    steps: [
      {
        title: 'Diagnóstico gratis de 15 minutos',
        body: 'Con la persona que va a hacer el programa. Le pongo nombre al problema y le digo si puedo ayudar y con qué programa.',
      },
      {
        title: 'Propuesta de una página',
        body: 'Objetivos, calendario y precio, para que quien aprueba lo tenga por escrito. Sin PowerPoint de cuarenta páginas.',
      },
      {
        title: 'Arranque a tres',
        body: 'Media hora con la persona y su responsable para fijar dos o tres objetivos. Opcional, pero es lo que hace que el programa cuente para la empresa.',
      },
      {
        title: 'Seis sesiones y resumen de cierre',
        body: 'Al terminar, la empresa recibe un resumen con los objetivos y los avances. Lo que se habla dentro de las sesiones es confidencial: queda entre la persona y yo.',
      },
    ],
    priceHeading: 'Precio y factura',
    priceValue: '1.200 € + IVA',
    priceNote: 'por programa de 6 sesiones, con el arranque a tres y el resumen de cierre incluidos',
    priceBullets: [
      'Factura a nombre de la empresa, con el IVA desglosado.',
      'Concepto: «Mentoría ejecutiva: liderazgo y comunicación».',
      'Pago por transferencia al arrancar. Si hace falta en dos plazos, se puede.',
    ],
    selfPayNote: '¿Lo pagas tú? Son 790 € con IVA incluido.',
    selfPayCta: 'Ver los programas',
    teamsHeading: 'Para varios managers a la vez',
    teamsBody: 'Si quieres esto para más de una persona de tu equipo, escríbeme y lo montamos a medida.',
    whoHeading: 'Quién lo da',
    whoBody:
      'Yaiza Temprado. Directora Senior de Ingeniería. Más de 20 años en corporate en siete empresas de sectores y tamaños distintos, toda la cadena de mando recorrida (ingeniera, manager, directora, dirección senior) y más de 100 personas a mi cargo a lo largo de mi carrera. Lo que enseño lo he usado en mis propias salas.',
    ctaPrimary: 'Reservar el diagnóstico gratis',
    ctaSecondary: 'Escríbeme',
    ctaMailSubject: 'Mentoría pagada por la empresa',
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
    eyebrow: 'No te pierdas nada',
    heading: 'Mantente al día',
    lead: 'O sígueme en redes',
  },
  newsletter: {
    eyebrow: 'Newsletter',
    heading: 'No te lo pierdas',
    body: 'Escribo sobre comunicación, influencia, reuniones, presencia y cómo liderar en la era de la IA: hacerte escuchar y no dejarte por el camino. Te mando 2-3 emails al mes, no más, para que cuando te llegue uno tenga chicha.',
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
