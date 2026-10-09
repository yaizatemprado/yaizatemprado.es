import type { Article } from './types'

const DIAGNOSTICO = 'https://cal.com/yaiza-temprado/diagnostico'

// Copy approved by Yaiza on 18-sep-2026. The text she edits lives in the vault,
// proyectos/optimizacion-seo/paginas/2026-09-18-borrador-como-hablar-en-reuniones.md.
// Words are hers: edit here only with her OK.
const article: Article = {
  slug: 'como-hablar-en-reuniones-de-trabajo',
  locale: 'es',
  published: '2026-09-18',
  tag: 'Presencia ejecutiva',
  title: 'Cómo hablar en reuniones de trabajo para que te escuchen',
  socialImage: { src: '/assets/como-hablar-en-reuniones-videollamada-og.jpg', width: 1200, height: 655 },
  description:
    'Cómo hablar en reuniones de trabajo: qué hacer si no sabes la respuesta, si hay alguien con más peso, si te interrumpen o si otro repite tu idea.',
  cardCta: 'Leer',
  intro: [
    ['Hay dos formas de salir de una reunión con la sensación de que no has estado.'],
    [
      'La primera es no haber abierto la boca. Tenías algo que decir, esperaste el momento, el momento no llegó y la reunión se acabó. O no sabías si lo que ibas a decir era lo bastante bueno, el tiempo fue pasando y se te escapó la oportunidad. O te preocupaba tanto aportar algo súper relevante que entraste en parálisis por análisis y al final no dijiste nada.',
    ],
    [
      'La segunda es haberla abierto. Dijiste algo que para ti era una aportación importante, y pasó sin pena ni gloria. Y a veces, más sangrante todavía: diez minutos después, alguien dijo algo muy parecido y todo el mundo asintió, pero lo dejaste pasar, porque al final lo importante es que el comentario se haya hecho, ¿verdad?',
    ],
    [
      'Le pasa a todo el mundo, y casi nunca es por lo que sabes: es por cómo lo dices, cuándo lo dices y lo que hace tu cuerpo mientras tanto.',
    ],
  ],
  sections: [
    {
      kind: 'text',
      heading: '«Qué más da quién lo diga»',
      paragraphs: [
        ['Pensarlo así es muy cómodo, porque te ahorra el conflicto del momento. Pero no es verdad.'],
        [
          'Una idea no pesa lo mismo según quién la diga. Y quien la dice en voz alta, y se queda con ella, es quien sale de la reunión con la siguiente oportunidad.',
        ],
        [
          'Cada intervención es una de esas gotitas de las que hablo en ',
          { text: 'presencia ejecutiva', href: '/es/recursos/presencia-ejecutiva/' },
          '. Una sola no se nota. Diez tampoco. Pero reunión a reunión, el vaso se llena o se vacía. Y las reuniones son donde más gotas se ganan y se pierden, porque es donde te ve la gente que decide.',
        ],
        ['Estos son los cinco momentos de una reunión en los que más veo que se pierden. Y qué hacer en cada uno.'],
      ],
    },
    {
      kind: 'blocks',
      heading: 'Cuando te preguntan algo y no tienes la respuesta',
      blocks: [
        {
          kind: 'p',
          text: [
            'Te hacen una pregunta y no la tienes clara. Así que empiezas a pensar en voz alta. Das vueltas, te vas por las ramas y hablas sin saber muy bien a dónde vas a llegar.',
          ],
        },
        {
          kind: 'p',
          text: [
            'Tú lo haces para no dejar un silencio. Pero lo que ve la sala es a alguien buscando la respuesta en directo. Y cuanto más hablas, menos seguro suena lo que dices.',
          ],
        },
        { kind: 'p', text: ['Qué hacer:'] },
        {
          kind: 'list',
          items: [
            [
              { text: 'Para unos segundos.', strong: true },
              ' Pausa. Piensa qué vas a decir antes de decirlo. A ti ese silencio se te hace eterno, pero a la sala le parece que estás pensando (que es justo lo que estás haciendo).',
            ],
            [
              { text: 'Si no la sabes, dilo.', strong: true },
              ' «Ahora mismo no lo tengo. Lo confirmo con el equipo y te digo algo antes de que acabe el día». Es una respuesta perfectamente válida.',
            ],
            [
              { text: 'Que la respuesta vuelva desde ti.', strong: true },
              ' Después de la reunión se lo preguntas a quien lo sepa, y la respuesta la mandas tú. La pregunta te la hicieron a ti.',
            ],
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'Cuando hay alguien con más peso en la sala',
      blocks: [
        {
          kind: 'p',
          text: [
            'Te preguntan a ti. Y antes de pensarla, ya has girado la cabeza hacia tu jefe, hacia quien tiene más rango en la sala, o lleva más tiempo en la empresa, o lo que sea que te haga pensar que su respuesta tiene más peso que la tuya. Muchas veces ni siquiera es que no lo sepas. Es un reflejo.',
          ],
        },
        {
          kind: 'p',
          text: [
            'Tú lo vives como respeto. O como generosidad: le das la oportunidad de contestar a quien lo sabe mejor. Pero lo que se lee en la sala es otra cosa: «a mí no me preguntes, que yo aquí no pinto nada».',
          ],
        },
        {
          kind: 'p',
          text: [
            'Y tiene un precio muy concreto. La siguiente pregunta ya no te la hacen a ti. Se la hacen directamente a él.',
          ],
        },
        { kind: 'p', text: ['Qué hacer:'] },
        {
          kind: 'list',
          items: [
            [
              { text: 'Imagínate que no está.', strong: true },
              ' Si ese referente no estuviera en la sala, ¡algo contestarías! Pues eso mismo, con él delante. A veces resulta que sí sabías la respuesta y la estabas pasando por defecto.',
            ],
            [
              { text: 'Contesta tú primero y luego invita.', strong: true },
              ' «Yo haría esto. Carlos, ¿tú cómo lo ves?». La pregunta sigue siendo tuya: decides tú y le das paso tú.',
            ],
            [
              { text: 'Pactadlo antes.', strong: true },
              ' Si compartes muchas reuniones con tu jefe y tienes una buena relación con él, díselo: «Quiero ir haciéndome cargo de este proyecto, y mientras tanto tu experiencia me sigue haciendo mucha falta. ¿Estarías cómodo si, cuando me pregunten a mí, contesto yo, y si se me escapa algo, completas tú?». Así no le pillas por sorpresa.',
            ],
          ],
        },
        {
          kind: 'p',
          text: [
            'Ojo, que esto tiene una versión más cara: que el proyecto sea tuyo y, cuando tu jefe está en la sala, lo cuente él entero. El contexto, los avances, los números. Parece que no pasa nada, porque todo lo que dice es verdad. Pero en la cabeza de quien escucha, el proyecto pasa a ser suyo.',
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'Cuando quieres aportar algo',
      blocks: [
        { kind: 'p', text: ['Antes de hablar, mira en qué reunión estás. Cada reunión contesta una pregunta distinta:'] },
        {
          kind: 'list',
          items: [
            ['Las del porqué: si hacemos esto, cómo encaja con la estrategia, qué va a cambiar.'],
            ['Las del qué: qué hacemos y en qué orden.'],
            ['Las del cómo: quién, cuándo, con qué.'],
          ],
        },
        {
          kind: 'p',
          text: [
            'Por ejemplo, si en una reunión del porqué preguntas por el cómo, pasa una de dos: o te contestan rápido para seguir, o la reunión se va veinte minutos a otra conversación. En ninguno de los dos casos pesa lo que has dicho porque no era el momento adecuado. Y ojo, que a lo mejor la pregunta era buenísima. Pero no era para esa reunión.',
          ],
        },
        { kind: 'p', text: ['Luego, cuando hables:'] },
        {
          kind: 'list',
          items: [
            [
              { text: 'La conclusión, primero.', strong: true },
              ' Empieza por el mensaje principal, no por el camino que te llevó a él. Si alguien quiere el camino, ya te lo pedirá. Si lo das antes, cuando llegues al punto ya no te están escuchando. Y tampoco lo des después si no te lo piden: sobrejustificar también te quita presencia, porque parece que buscas que te validen el camino.',
            ],
            [
              { text: 'No pidas permiso para entrar.', strong: true },
              ' «Perdona, ¿puedo añadir una cosa?» o «igual es una tontería, pero…» te quitan peso antes de empezar. «Quiero añadir algo», y ya está. Y mejor todavía: añádelo directamente, sin introducción.',
            ],
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'Cuando te interrumpen',
      blocks: [
        {
          kind: 'p',
          text: [
            'Lo primero que hace el cuerpo cuando te interrumpen es retirarse. Bajas la mirada, sonríes para suavizar, cedes. Y en un segundo, la palabra ya es de otro.',
          ],
        },
        { kind: 'p', text: ['Qué hacer, de más fácil a más difícil:'] },
        {
          kind: 'list',
          items: [
            [
              { text: 'Sostén con el cuerpo.', strong: true },
              ' Espalda recta, la mirada en quien te ha interrumpido y una pausa. El cuerpo dice «no he terminado» antes de que lo digas tú.',
            ],
            [
              { text: 'Sostén con una frase.', strong: true },
              ' «Déjame terminar la idea y te escucho». Sin «perdona», sin «solo quería…». Es seca a propósito. Puedes reforzarla levantando la mano con un gesto de stop. Y si siguen hablando, sube un poco la voz y continúa.',
            ],
            [
              { text: 'Si ya te has quedado fuera, retoma.', strong: true },
              ' Cuando se calme la cosa: «Volviendo a lo que decía antes…». Sin justificar la vuelta ni disculparte por volver. Lo dices y sigues.',
            ],
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'Cuando alguien repite tu idea',
      blocks: [
        { kind: 'p', text: ['Lo dijiste tú. Lo repite otra persona dos minutos después. Y todo el mundo asiente.'] },
        {
          kind: 'list',
          items: [
            [
              { text: 'Recupérala en el momento.', strong: true },
              ' «Sí, justo lo que comentaba antes. Y voy un paso más allá: …». Con tono normal. Marcas de dónde viene y sigues.',
            ],
            [
              { text: 'Si se te pasó el momento, construye encima.', strong: true },
              ' «Enlazando con lo que decía Javier, que es lo que proponía al principio, el siguiente paso sería…». Tu idea y tu desarrollo.',
            ],
            [
              { text: 'Después, déjalo por escrito.', strong: true },
              ' Un mensaje al grupo con lo que se ha hablado y los siguientes pasos: «Como comentaba al principio, la propuesta es esta. Siguientes pasos: …». Cuando luego se decide quién hizo qué, lo escrito gana a lo que cada uno recuerda.',
            ],
          ],
        },
      ],
    },
  ],
  faqHeading: 'Preguntas frecuentes',
  faq: [
    {
      question: '¿Y si me bloqueo cuando me toca hablar?',
      answer: [
        [
          'Prepara una sola frase antes de entrar: lo único que quieres que se lleven de ti en esa reunión. No un discurso. Una frase. Y si te preguntan algo que no esperabas, «déjame que lo mire y te digo» también es contestar.',
        ],
      ],
    },
    {
      question: '¿Hablar más en las reuniones me da más presencia?',
      answer: [
        [
          'No. Hablar más no es pesar más. Una intervención en el momento justo pesa más que cinco para que se note que estás.',
        ],
        [
          'Eso sí, no uses la frase de arriba para justificar no abrir la boca. Si no se te oye en toda la reunión, también se nota. La gente recuerda a medias qué dijo cada uno, pero sí recuerda quién participó y quién pasó la sesión entera en silencio.',
        ],
      ],
    },
    {
      question: '¿Y si la reunión es online?',
      answer: [
        ['Vale todo lo anterior. Y además cuenta la imagen, porque antes de que hables ya te han leído:'],
      ],
      blocks: [
        {
          kind: 'list',
          items: [
            ['Cámara encendida, siempre. No ponerla es como ir a una reunión en persona y sentarte en una esquina.'],
            [
              'Coloca la cámara y la pantalla de forma que, al mirar la pantalla, mires de frente a quien te habla. Si no, se te ve de perfil y quien te habla no sabe si le estás escuchando.',
            ],
            ['Encuadre de pecho para arriba, con la cámara a la altura de los ojos.'],
          ],
        },
        {
          kind: 'image',
          src: '/assets/como-hablar-en-reuniones-videollamada.webp',
          alt: 'Viñeta: en una videollamada, Ana sale de perfil en la pantalla, mirando hacia otro lado, y Pedro, al otro lado, piensa «¿Me estará escuchando o está a su rollo?».',
          width: 1200,
          height: 655,
        },
      ],
    },
    {
      question: '¿Se puede trabajar en una mentoría?',
      answer: [
        [
          'Sí. Es de lo que más trabajamos en el programa ',
          { text: 'Presencia ejecutiva', href: '/es/programas/presencia-ejecutiva/' },
          ': tus reuniones reales, dónde se te van las gotas y qué haces distinto en la siguiente.',
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
  guide: 'reuniones-productivas',
}

export default article
