import type { Article } from './types'

const DIAGNOSTICO = 'https://cal.com/yaiza-temprado/diagnostico'

// Copy approved by Yaiza on 18-sep-2026. The text she edits lives in the vault,
// initiatives/website-revamp/2026-09-17-borrador-presencia-ejecutiva.md.
// Words are hers: edit here only with her OK.
const article: Article = {
  slug: 'presencia-ejecutiva',
  locale: 'es',
  published: '2026-09-18',
  tag: 'Presencia ejecutiva',
  title: 'Me han dicho que me falta presencia ejecutiva. ¿Y ahora qué?',
  seoTitle: 'Presencia ejecutiva: qué es y qué hacer si te dicen que te falta',
  socialImage: { src: '/assets/presencia-ejecutiva-rey-arturo-og.jpg', width: 1200, height: 654 },
  description:
    'Qué es la presencia ejecutiva, por qué «te falta presencia ejecutiva» no te dice qué hacer, dónde se pierde en el día a día y qué hacer cuando te lo dicen.',
  cardCta: 'Leer',
  intro: [
    [
      'Te lo dicen en la evaluación de desempeño o ',
      { text: 'performance review', em: true },
      '. O en una sesión de feedback con tu manager. O justo cuando planteas que te toca un ascenso: «Todavía no es el momento para el siguiente nivel, te falta presencia ejecutiva».',
    ],
    [
      'Y no haces más preguntas, pero tampoco entiendes muy bien qué acaba de pasar. Le das vueltas y más vueltas. ¿Tengo que hablar más en las reuniones? ¿Cambiar mi forma de ser? ¿Hacer más networking? ¿Qué es exactamente lo que me falta?',
    ],
    [
      'A mí me pasó, y durante mucho tiempo no entendía a qué se referían. Me faltaba «algo», pero es muy difícil mejorar algo que no sabes describir.',
    ],
    [
      'Así que hice lo único que se me ocurrió: preguntar y observar. Pedí feedback a otras personas de la organización. Me fijaba en la gente de mi alrededor que, para mí, tenía esa presencia. Cómo comunicaban. Cuándo hablaban y cuándo no. Cómo se comportaban cuando algo se torcía. Y, sobre todo, cómo reaccionaba el resto de la sala cuando hablaban ellos.',
    ],
    [
      'Acabé convertida en una experta en observar a los demás. Y lo que veía era mucho más concreto que «presencia ejecutiva».',
    ],
  ],
  sections: [
    {
      kind: 'blocks',
      heading: 'Por qué esa frase no te sirve',
      blocks: [
        {
          kind: 'p',
          text: [
            'Porque suena a algo binario: o la tienes o no la tienes. Y nadie te explica en qué consiste, ni cómo se consigue.',
          ],
        },
        {
          kind: 'image',
          src: '/assets/presencia-ejecutiva-rey-arturo.webp',
          alt: 'Viñeta de cómic: en la sala de un castillo, un rey con corona y capa roja toca con la espada el hombro de una mujer con armadura, arrodillada, y le dice «Ya tienes presencia ejecutiva».',
          width: 1200,
          height: 655,
        },
        {
          kind: 'p',
          text: ['Mira, la frase es tan vaga porque mete en el mismo saco un montón de cosas pequeñas:'],
        },
        {
          kind: 'list',
          items: [
            ['Cómo te expresas: el tono, las palabras que eliges y las que te sobran.'],
            ['Cómo presentas una idea, y si llegas con una recomendación o con un abanico de opciones.'],
            ['Lo que dice tu cuerpo mientras hablas, y mientras hablan los demás.'],
            ['Cuándo hablas y cuándo te callas.'],
            ['Cómo cuentas lo que haces: por las tareas o por lo que le aporta al negocio.'],
            ['Cómo influyes en decisiones que no son tuyas.'],
            ['Cómo te mueves con las personas que deciden, dentro y fuera de las reuniones.'],
            ['Cómo reaccionas cuando algo sale mal. Y cuando sale bien.'],
            ['Tu discernimiento: qué problemas subes a tu jefe y cuáles resuelves sin subirlos.'],
            ['Cómo sostienes un desacuerdo con alguien de más rango.'],
          ],
        },
        {
          kind: 'p',
          text: [
            'Y muchas veces, quien te lo dice tampoco lo tiene identificado del todo. Nota que algo falta, pero no sabe ponerle nombre.',
          ],
        },
      ],
    },
    {
      kind: 'text',
      heading: 'Qué es, aterrizada',
      paragraphs: [
        [
          'Si tengo que darte una definición que sirva para algo: presencia ejecutiva es cuánto pesa lo que dices en la sala donde se decide.',
        ],
        ['Ese peso no se pierde de golpe. Pero tampoco se gana de golpe.'],
        [
          'Yo me lo imagino como un vaso de agua. Cada cosa que haces es una gotita: cómo contribuyes en una reunión, cómo te posicionas, cómo hablas, cómo te mueves. Unas meten agua en el vaso y otras la sacan. Y lo lleno que esté es lo que hace que los demás te vean con más seniority o con menos.',
        ],
        [
          'Una gotita sola no se nota. Diez tampoco. Pero diez al día, todos los días, y el vaso se llena o se vacía.',
        ],
        ['Así que el trabajo tiene dos partes: dejar de perder gotas y empezar a ganarlas.'],
      ],
    },
    {
      kind: 'contrast',
      heading: 'Dónde se te van las gotas',
      intro: ['Hay muchísimas. Estas son cinco de las que más veo en mentoría.'],
      labels: { lose: 'Se pierde', gain: 'Se gana' },
      items: [
        {
          title: 'Pasarle la pregunta a quien tiene más rango',
          lose: 'Te preguntan a ti y dejas que conteste tu jefe, o la persona con el cargo más alto de la sala. Tú lo vives como respeto. Lo que se lee es que ahí no pintas nada, y la siguiente pregunta ya no te la hacen a ti.',
          gain: 'Contestas tú. Aunque sea con un «esto lo miro y mañana te digo algo».',
        },
        {
          title: 'Explicar lo que nadie te ha preguntado',
          lose: 'Das una respuesta y detrás van tres motivos que nadie te ha pedido. Parece que te justificas, y cada justificación le quita peso a lo que acabas de decir.',
          gain: 'Dices la respuesta y te callas. ¡No rellenes! Si quieren saber por qué, ya te lo preguntarán.',
        },
        {
          title: 'Subir problemas sin propuesta, o subirlos todos',
          lose: 'Le llevas a tu jefe un problema y esperas a que decida él. O le llevas todos, aunque sea con solución. En los dos casos, lo que le llega es que todavía no distingues qué merece su tiempo.',
          gain: 'Discernimiento. Resuelves lo que es tuyo, y lo que subes llega con una recomendación.',
        },
        {
          title: 'Reaccionar a todo con mucha emoción',
          lose: 'Una mala noticia te descoloca y se te nota. Una buena te dispara igual. Quien reacciona fuerte a todo transmite que las cosas le pueden.',
          gain: 'Templanza. Te tomas las cosas en serio, lo bueno y lo malo, pero con calma. Gestionar tus emociones es lo que te permite gestionar las de los demás.',
        },
        {
          title: 'Contar tu trabajo en tareas',
          lose: 'Explicas todo lo que has hecho, paso a paso. Quien te escucha se queda con el esfuerzo y se olvida del resultado.',
          gain: 'Lo cuentas por el impacto en el negocio: qué ha cambiado, y cuánto tiempo, dinero o riesgo se ha ahorrado.',
        },
      ],
    },
    {
      kind: 'text',
      heading: 'Qué hacer cuando te lo dicen',
      paragraphs: [
        [
          'Lo primero, pedir ejemplos. En el momento, si puedes: «¿Te refieres a que hablo poco en las reuniones? ¿A cómo me expreso? ¿Me puedes dar un ejemplo concreto?».',
        ],
        [
          'Si en ese momento no te lo saben dar, que no se escape. Pídele que te avise la próxima vez: «Cuando lo vuelvas a notar, ¿me lo dices en el momento?». (Y si vuelve a pasar sin ejemplo, repites pregunta.)',
        ],
        ['No pares hasta que puedas volver a tu sitio sabiendo qué vas a hacer distinto el lunes.'],
        [
          'Pide feedback a más gente. No solo a tu jefe: a otros líderes de la empresa, a personas de su nivel, a quien te haya visto presentar o participar en una reunión. Cada uno se ha hecho una idea de cómo trabajas, y cada uno ve un trozo distinto.',
        ],
        [
          'Y observa. Fíjate en la gente que para ti tiene presencia ejecutiva, o que ya está en el puesto al que quieres llegar. Cómo habla, cuándo, qué hace cuando alguien le lleva la contraria. Y cómo reacciona la gente a su alrededor.',
        ],
      ],
    },
  ],
  faqHeading: 'Preguntas frecuentes',
  faq: [
    {
      question: '¿La presencia ejecutiva es algo con lo que se nace?',
      answer: [
        [
          'No. Si fuera un rasgo, no la tendrías en una reunión para perderla en la siguiente. Y eso pasa: hay salas donde hablas con toda la tranquilidad y otras donde te cuesta que te escuchen. Son tácticas y hábitos. Las tácticas se aprenden. Y los hábitos se cambian.',
        ],
      ],
    },
    {
      question: '¿Es lo mismo que saber hablar en público?',
      answer: [
        [
          'No. Hablar en público es una parte pequeña. Hay gente que lo borda en un escenario y pierde todo el peso en una reunión de seis personas en cuanto entra alguien de más rango.',
        ],
      ],
    },
    {
      question: '¿Se puede trabajar en una mentoría?',
      answer: [
        [
          'Sí. Para eso está el programa ',
          { text: 'Presencia ejecutiva', href: '/es/programas/presencia-ejecutiva/' },
          ': seis sesiones sobre tus reuniones, tus stakeholders, tus conversaciones y tu empresa reales, empezando por ver dónde estás perdiendo autoridad sin darte cuenta.',
        ],
        [
          'Si no sabes si es para ti, reserva el ',
          { text: 'diagnóstico gratuito de 15 minutos', href: DIAGNOSTICO },
          '. Y si quieres que lo pague tu empresa, aquí te cuento ',
          { text: 'cómo pedírselo', href: '/es/recursos/que-lo-pague-tu-empresa/' },
          '.',
        ],
      ],
    },
  ],
}

export default article
