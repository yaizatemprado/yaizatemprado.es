import type { Article } from './types'

const DIAGNOSTICO = 'https://cal.com/yaiza-temprado/diagnostico'

// Copy approved by Yaiza on 13-sep-2026 (v7 of the draft in the vault,
// initiatives/website-revamp/2026-09-13-borrador-que-lo-pague-tu-empresa.html).
// Words are hers: edit here only with her OK.
const article: Article = {
  slug: 'que-lo-pague-tu-empresa',
  locale: 'es',
  published: '2026-09-13',
  tag: 'Empresas',
  title: 'Cómo pedirle a tu empresa que pague tu mentoría',
  description:
    'Pedirla como desarrollo personal es la forma más rápida de que te digan que no. Cómo plantearlo, qué gana tu empresa, facturas y FUNDAE.',
  cardCta: 'Leer',
  intro: [
    [
      'Quizá te has planteado hacer sesiones de mentoría. Has valorado que con alguien a tu lado podrías avanzar más deprisa, crecer más o llegar antes al puesto que buscas. O a lo mejor tienes un jefe que no te está ayudando a crecer todo lo que te gustaría.',
    ],
    ['Lo que no sabes es cómo convertir esa necesidad tuya en algo que tu empresa vaya a apoyar.'],
    ['Se puede. Pero depende mucho de cómo lo pidas.'],
  ],
  sections: [
    {
      kind: 'text',
      heading: 'El error que hace que te digan que no',
      paragraphs: [
        ['Pedirlo como desarrollo personal.'],
        [
          '"Me gustaría crecer como líder." "Creo que me vendría bien." "Quiero seguir formándome." Todo verdad. Y la respuesta es el típico "lo hablamos en la próxima revisión".',
        ],
        [
          'Mira, a tu jefe tu crecimiento le parece estupendo. Pero lo que va a pagar es que se arregle algo que ahora mismo le da problemas.',
        ],
        [
          'Y cosas que arreglar hay. Esa reunión de todos los martes de la que nadie sale con una decisión. El comité donde presentas y la conversación sigue como si no hubieras dicho nada. O el equipo que tira porque tiras tú, y que se para en cuanto te vas de vacaciones.',
        ],
      ],
    },
    {
      kind: 'text',
      heading: 'Para qué sirve de verdad una mentoría',
      paragraphs: [
        [
          'Para eso, precisamente. En una mentoría aprendes marcos y herramientas para trabajar esos problemas de base, los que hacen que tu equipo o tu departamento rinda menos de lo que podría.',
        ],
        [
          'Te convierte, como líder, en una herramienta más potente dentro de tu empresa. Así que eso es lo que pides: lo que va a cambiar en tu equipo cuando termines. Lo de crecer tú viene incluido.',
        ],
      ],
    },
    {
      kind: 'cards',
      heading: 'Lo que gana tu empresa',
      intro: [
        'Fíjate en los problemas que tienes alrededor. ¿Cuál es el que más le duele a tu jefe? Por ahí es por donde antes va a ver lo que gana con esta mentoría.',
      ],
      cards: [
        {
          title: 'Reuniones que deciden',
          body: 'Llegas con una posición, llevas la conversación al punto y sales con decisión, dueño y fecha. Tu jefe ha sufrido muchas reuniones de las otras. Sabe lo que cuestan.',
        },
        {
          title: 'Menos ruido hacia arriba',
          body: 'Le cuentas cómo va todo en tres líneas, escalas a tiempo y le das menos sorpresas. Es lo que le pide a todo el mundo y casi nadie le da.',
        },
        {
          title: 'Un equipo que no cuelga de una persona',
          body: 'Delegas de verdad y el ritmo se sostiene sin depender de quién aguanta más. Nadie se quema, y la empresa no pierde a alguien en quien ya ha invertido.',
        },
        {
          title: 'Aplicado la semana siguiente',
          body: 'Nada de teoría para guardar en un cajón. Cada sesión termina con una acción sobre un problema real, y en la siguiente vemos qué ha pasado.',
        },
      ],
    },
    {
      kind: 'text',
      heading: 'El presupuesto existe y casi nunca se gasta entero',
      paragraphs: [
        [
          'La mayoría de las empresas tienen una partida para la formación de sus empleados. Y la inmensa mayoría cierran el año con una parte sin tocar, porque no la pide nadie.',
        ],
        [
          'Así que ojo: no estás pidiendo un favor. Estás levantando la mano por un dinero que ya está presupuestado.',
        ],
        [
          'Y cuando se lo plantees, mándale esto: ',
          { text: 'la página para empresas', href: '/es/empresas/' },
          '. Ahí tiene en dos minutos qué es, qué gana su equipo y cuánto cuesta.',
        ],
      ],
    },
  ],
  faqHeading: 'Preguntas frecuentes',
  faq: [
    {
      question: 'No sé si esto es para mí.',
      answer: [
        [
          'Normal. Mucha gente no sabe muy bien qué esperar de una mentoría. Lo que hacemos es trabajar sobre tu situación concreta, tu equipo, tu jefe y tu empresa, para que salgas con las herramientas que te hacen falta para moverte ahí y crecer profesionalmente.',
        ],
        [
          'Si te cuesta comunicar o posicionarte, o si te han lanzado a un puesto de manager y nadie te ha enseñado cómo se hace, hablamos. Para eso está el ',
          { text: 'diagnóstico gratuito de 15 minutos', href: DIAGNOSTICO },
          ': vemos si esta es la solución que necesitas o no.',
        ],
      ],
    },
    {
      question: '¿Puedes emitir facturas a nombre de la empresa?',
      answer: [
        ['Sí. Con el IVA desglosado y el concepto «Mentoría ejecutiva: liderazgo y comunicación».'],
      ],
    },
    {
      question: '¿Es bonificable por FUNDAE?',
      answer: [
        [
          'Sí. Lo tramita la empresa desde su plataforma de FUNDAE, con el crédito de formación que ya tiene, y hay que comunicarlo antes de empezar.',
        ],
      ],
    },
    {
      question: 'Ninguno de tus programas encaja con lo que necesitamos. ¿Qué hacemos?',
      answer: [
        [
          'Pues lo hablamos. ',
          { text: 'Los primeros 90 días liderando', href: '/es/programas/primeros-90-dias/' },
          ' y ',
          { text: 'Presencia ejecutiva', href: '/es/programas/presencia-ejecutiva/' },
          ' son los dos que más me pide la gente, pero podemos montar perfectamente uno a medida de lo que necesitas.',
        ],
        [
          'Escríbeme o reserva el ',
          { text: 'diagnóstico gratuito de 15 minutos', href: DIAGNOSTICO },
          ' y lo vemos.',
        ],
      ],
    },
  ],
}

export default article
