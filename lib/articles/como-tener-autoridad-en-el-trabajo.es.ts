import type { Article } from './types'

const DIAGNOSTICO = 'https://cal.com/yaiza-temprado/diagnostico'

// Copy approved by Yaiza on 12-oct-2026. The text she edits lives in the vault,
// proyectos/optimizacion-seo/paginas/2026-10-12-borrador-como-tener-autoridad-en-el-trabajo.md.
// Words are hers: edit here only with her OK.
const article: Article = {
  slug: 'como-tener-autoridad-en-el-trabajo',
  locale: 'es',
  published: '2026-10-12',
  tag: 'Presencia ejecutiva',
  title: 'Cómo tener autoridad en el trabajo (sin dar tantas explicaciones)',
  socialImage: { src: '/assets/como-tener-autoridad-42-silencio-social.jpg', width: 1200, height: 628 },
  description:
    'Cómo tener autoridad en el trabajo: por qué nos justificamos tanto, las disculpas pequeñitas que te quitan peso y cómo decir 42 y aguantar el silencio.',
  cardCta: 'Leer',
  intro: [
    [
      'Alguien nuevo en el proyecto te pregunta con quién tiene que hablar de la parte técnica. Y tú le contestas perfecto: «Conmigo. Esa parte la llevo yo». Pero no te callas ahí. Añades: «Así no molestamos a Fulano, que está muy liado».',
    ],
    [
      'Esa segunda frase lo cambia todo. Ya no habla contigo porque eres la responsable. Habla contigo porque otra persona «más importante» no tiene tiempo.',
    ],
    ['Lo hacemos muchísimo. Y casi nunca nos damos cuenta.'],
  ],
  sections: [
    {
      kind: 'blocks',
      heading: 'Por qué nos justificamos: el 42',
      blocks: [
        {
          kind: 'p',
          text: [
            '¿Te acuerdas de los problemas de matemáticas del colegio? Te ponían una ecuación larguísima y no valía con poner 42. Tenías que poner: primero he multiplicado esto por esto, luego he restado tal, luego no sé qué. Porque la profesora quería ver el razonamiento que te había llevado hasta el 42.',
          ],
        },
        {
          kind: 'p',
          text: [
            'Y eso nos lo llevamos al trabajo. Nos cuesta muchísimo decir 42 sin más. Así que enseñamos la cuenta entera. Lo veo por tres motivos:',
          ],
        },
        {
          kind: 'list',
          items: [
            [
              { text: 'Por si me he equivocado.', strong: true },
              ' Es un poquito de inseguridad: «te enseño cómo he llegado al 42, por si acaso me he equivocado, para que lo veas tú también». No sea que la líe.',
            ],
            [
              { text: 'Para que se vea el esfuerzo.', strong: true },
              ' Enseñas todo el trabajo que hay detrás del 42, para que la gente aprecie el tiempo que te ha llevado.',
            ],
            [
              { text: 'Para que se vea que la propuesta es sólida.', strong: true },
              ' A veces no buscas validación. Quieres enseñar lo buenos que son tus argumentos antes de que nadie los ponga en duda.',
            ],
          ],
        },
        {
          kind: 'p',
          text: ['Los tres tienen sentido en tu cabeza: parece que una explicación te da más peso, más credibilidad.'],
        },
        {
          kind: 'p',
          text: [
            'Y desgraciadamente funciona al revés. Cada explicación que nadie te ha pedido le quita peso a lo que acabas de decir.',
          ],
        },
        {
          kind: 'p',
          text: [
            'Es una de las gotitas de las que hablo en ',
            { text: 'presencia ejecutiva', href: '/es/recursos/presencia-ejecutiva/' },
            ': explicar lo que nadie te ha preguntado. Una sola no se nota. Diez al día, sí.',
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'Las disculpas pequeñitas',
      blocks: [
        {
          kind: 'p',
          text: [
            'La otra forma de justificarte es pedir perdón antes de decir nada. Se cuelan al principio de la frase y casi no las oyes:',
          ],
        },
        {
          kind: 'list',
          items: [
            ['«Perdona, ¿puedo añadir una cosa?».'],
            ['«No sé si esto está claro, pero…».'],
            ['«Igual es una tontería, pero…».'],
            ['«A ver si me explico…».'],
          ],
        },
        {
          kind: 'p',
          text: [
            'No son educación. Son pedir perdón casi por existir, por ocupar un espacio que te pertenece. Y te hacen más pequeña antes de que empieces a hablar, independientemente de la validez de lo que digas a continuación.',
          ],
        },
        { kind: 'p', text: ['Hay dos variantes que veo mucho:'] },
        {
          kind: 'list',
          items: [
            [
              { text: 'La doble disculpa.', strong: true },
              ' «Perdona, pero se me ha olvidado preguntarte una cosa». Son dos disculpas: el perdona y el fustigarte porque se te ha olvidado. La versión sin disculpas: «Oye, tengo una pregunta más».',
            ],
            [
              { text: 'El descuento al contar lo tuyo.', strong: true },
              ' Te has pegado una currada enorme y lo cuentas con un «bueno, yo lo único que he hecho ha sido juntar lo que había». Como si fuera vital quitarle importancia a lo que has conseguido.',
            ],
          ],
        },
        {
          kind: 'p',
          text: [
            'Lo que siempre refuerzo en mentoría: nadie te está haciendo un favor por escucharte, entenderte o contestarte. Cuando pides perdón muchas veces es porque todavía no te crees del todo que tienes derecho a estar ahí.',
          ],
        },
      ],
    },
    {
      kind: 'text',
      heading: '«No tengo la respuesta» también es una respuesta',
      paragraphs: [
        [
          'A veces te preguntan algo y no lo sabes. Y el reflejo que te sale es rellenar, ¡no sea que hagas esperar a alguien! Explicar por qué no lo sabes, todo lo que depende de otros, lo que habría que mirar. O, peor, inventarte una fecha que no te crees, solo para tener algo que decir.',
        ],
        [
          'Las dos cosas salen muy caras. La explicación te quita autoridad. Y una fecha que no cumples te quita credibilidad para mucho tiempo.',
        ],
        ['Di que no lo sabes, sin rodeos y con fecha: «Esa respuesta no la tengo. Te la tengo para el lunes». Y ya está.'],
      ],
    },
    {
      kind: 'blocks',
      heading: 'Lo difícil: aguantar el silencio',
      blocks: [
        { kind: 'p', text: ['Decir 42 es la parte fácil. Lo difícil viene justo después.'] },
        {
          kind: 'p',
          text: [
            'Dices 42 y nadie contesta. Silencio. Y tú lo interpretas como que te están cuestionando. Así que te lanzas: «bueno, es que he multiplicado esto por esto, y luego…». Y ahí va la cuenta entera, que nadie te había pedido.',
          ],
        },
        {
          kind: 'image',
          src: '/assets/como-tener-autoridad-42-silencio.webp',
          alt: 'Viñeta al estilo del meme «ella piensa / él piensa»: en una reunión, ella acaba de hablar y se ha quedado preocupada. Arriba: «Ella: Se han quedado callados. Seguro que piensan que no tengo ni idea». Abajo, sus dos compañeros, pensativos: «Ellos: 42… Tiene sentido. Entonces las implicaciones para mi proyecto son…».',
          width: 1200,
          height: 668,
        },
        {
          kind: 'p',
          text: [
            'Pero ese silencio no es un juicio. Es la otra persona procesando lo que le acabas de decir. Es el espacio para que tu mensaje se asiente. Si lo rellenas, tu mensaje pierde peso.',
          ],
        },
        {
          kind: 'p',
          text: [
            'Así que dices 42, y esperas. Si después hay preguntas, las contestas. Y si no las hay, mejor todavía.',
          ],
        },
        {
          kind: 'p',
          text: ['Esa incomodidad con el silencio es la que nos hace rellenar. Y es la que más cuesta entrenar.'],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'Cómo empezar',
      blocks: [
        {
          kind: 'list',
          items: [
            [
              { text: 'Durante una semana, solo observa.', strong: true },
              ' Fíjate en cuántas veces dices «porque», «perdona» o «bueno, es que…» detrás de una frase que ya estaba completa. No lo corrijas todavía. Solo cuéntalo.',
            ],
            [
              { text: 'Mira a tu alrededor.', strong: true },
              ' Seguramente hay alguien en tus reuniones que no se justifica nunca. Fíjate en cómo suena.',
            ],
            [
              { text: 'Prueba a decir solo el 42.', strong: true },
              ' Da la respuesta sin explicarte y mira qué pasa. ¿Te piden las explicaciones o no? Casi siempre, no. Y si te las piden, entonces sí se las das.',
            ],
          ],
        },
        { kind: 'p', text: ['Di 42. Y te callas. ¡No rellenes, aguanta el silencio!'] },
      ],
    },
  ],
  faqHeading: 'Preguntas frecuentes',
  faq: [
    {
      question: '¿Por qué me justifico tanto?',
      answer: [
        [
          'Por el 42: en algún momento aprendiste que enseñar la cuenta te protegía. Si das todos los motivos, nadie puede decir que lo has hecho mal. En el trabajo pasa lo contrario. Cuantas más explicaciones das sin que te las pidan, más parece que necesitas permiso.',
        ],
      ],
    },
    {
      question: '¿No queda borde no dar explicaciones?',
      answer: [
        [
          'No, si el tono es amable. «Lo tengo el jueves» no es borde. «Lo tengo el jueves porque…, y además…, y si no…» es agotador. Y si alguien quiere saber el porqué, te lo va a preguntar. Entonces sí se lo explicas.',
        ],
      ],
    },
    {
      question: '¿Y en las reuniones?',
      answer: [
        [
          'Pasa lo mismo, y además se nota más, porque todo el mundo está mirando. Lo cuento en ',
          { text: 'cómo hablar en reuniones de trabajo', href: '/es/recursos/como-hablar-en-reuniones-de-trabajo/' },
          '.',
        ],
      ],
    },
    {
      question: '¿Se puede trabajar en una mentoría?',
      answer: [
        [
          'Sí. En el programa ',
          { text: 'Presencia ejecutiva', href: '/es/programas/presencia-ejecutiva/' },
          ' cazamos estas frases en directo, sobre lo que tú misma cuentas, que es cuando de verdad se ven.',
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
