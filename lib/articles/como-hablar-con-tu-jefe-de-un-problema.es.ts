import type { Article } from './types'

const DIAGNOSTICO = 'https://cal.com/yaiza-temprado/diagnostico'

// Copy approved by Yaiza on 11-oct-2026. The text she edits lives in the vault,
// proyectos/optimizacion-seo/paginas/2026-10-09-borrador-como-hablar-con-tu-jefe-de-un-problema.md.
// Words are hers: edit here only with her OK.
const article: Article = {
  slug: 'como-hablar-con-tu-jefe-de-un-problema',
  locale: 'es',
  published: '2026-10-11',
  tag: 'Presencia ejecutiva',
  title: 'Cómo hablar con tu jefe de un problema (antes de que reviente)',
  socialImage: { src: '/assets/como-hablar-con-tu-jefe-1-3-1-og.jpg', width: 1200, height: 628 },
  description:
    'Cómo hablar con tu jefe de un problema: levanta el riesgo pronto, con su plan de mitigación, y cuando pase algo que no controlas, lleva opciones y una recomendación.',
  cardCta: 'Leer',
  intro: [
    [
      'Un proyecto que parece que se va a retrasar. Quizás se retrase, quizás no. Así que no dices nada: aprietas, aceleras, intentas recuperarlo sin que se note.',
    ],
    [
      'Pasan las semanas y, por fin, está claro: se va a retrasar. Y ahí sí se lo cuentas a tu jefe. Pero ya no le estás contando un riesgo, le estás contando algo que va a pasar. Y ya no da tiempo a reaccionar.',
    ],
    [
      'Lo que empezó como no querer preocuparle, o como arreglarlo tú sin que se viera, se ha convertido en una bomba de relojería. Y le ha estallado en las manos a él.',
    ],
  ],
  sections: [
    {
      kind: 'blocks',
      heading: 'Por qué nos callamos',
      blocks: [
        { kind: 'p', text: ['Casi nunca es por mala fe. Es por cosas como estas:'] },
        {
          kind: 'list',
          items: [
            [{ text: 'No quieres preocuparle', strong: true }, ' con algo que a lo mejor ni pasa.'],
            [
              { text: 'Crees que lo puedes arreglar sin que se vea.', strong: true },
              ' Y si lo arreglas, nadie tiene por qué saber que estuvo a punto de torcerse.',
            ],
            [
              { text: 'Te da miedo que piense que no sabes resolverlo.', strong: true },
              ' Contarlo te parece reconocer un error.',
            ],
            [
              { text: 'No te apetece la conversación.', strong: true },
              ' Así que la vas dejando para la semana que viene.',
            ],
          ],
        },
        {
          kind: 'p',
          text: [
            'Te lo cuento desde el otro lado, porque he pasado muchos años siendo la jefa en esa conversación. Lo que me molesta no es que un proyecto se retrase. Eso pasa. Lo que me molesta es enterarme cuando ya no puedo hacer nada: ni mover recursos, ni avisar a quien depende de nosotros, ni cambiar el alcance. Me has quitado las opciones.',
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'Levanta el riesgo, no el problema',
      blocks: [
        {
          kind: 'p',
          text: [
            'Ojo, que esto no significa contarle a tu jefe cada cosa que te preocupa. Lo que funciona es levantar los riesgos pronto, cuando todavía son riesgos.',
          ],
        },
        { kind: 'p', text: ['Un riesgo se levanta con tres cosas:'] },
        {
          kind: 'list',
          items: [
            [{ text: 'Qué puede pasar.', strong: true }, ' «Es posible que el lanzamiento no llegue a marzo».'],
            [
              { text: 'Por qué.', strong: true },
              ' «Dependemos de que el equipo de pagos termine su parte, y van con retraso».',
            ],
            [
              { text: 'Qué estás haciendo para que no pase.', strong: true },
              ' El plan de mitigación. «He hablado con su responsable, hemos priorizado lo que nos bloquea y en dos semanas sabremos si llegan».',
            ],
          ],
        },
        {
          kind: 'p',
          text: [
            'Y luego, cada semana, una línea de seguimiento: «Este riesgo está gestionado. Por ahora estamos haciendo esto, esto y esto. Está controlado, te sigo informando».',
          ],
        },
        {
          kind: 'p',
          text: [
            'Fíjate en lo que cambia. Si el riesgo no se materializa, no ha pasado nada: tu jefe ha visto a alguien que tenía la situación controlada. Y si se materializa, lo sabe desde hace semanas, ha podido reaccionar y no le pilla por sorpresa.',
          ],
        },
        { kind: 'p', text: ['Es muy distinto a no decir nada, no decir nada, no decir nada… hasta que revienta.'] },
      ],
    },
    {
      kind: 'blocks',
      heading: 'Cuando pasa algo que no controlas: opciones y una recomendación',
      blocks: [
        {
          kind: 'p',
          text: [
            'A veces el riesgo se materializa y no estaba en tu mano evitarlo. Te quitan a dos personas del equipo, se recorta el presupuesto, cambia una prioridad de arriba.',
          ],
        },
        {
          kind: 'p',
          text: [
            'Ahí ni te quejes ni aguantes en silencio intentando llegar a todo. Enseña las opciones que hay, cada una con su consecuencia, di cuál recomiendas y deja que decida tu jefe, viendo lo que implica cada camino.',
          ],
        },
        {
          kind: 'p',
          text: ['Si quieres una estructura para ordenarlo, a mí me gusta mucho usar ', { text: 'el 1-3-1:', strong: true }],
        },
        {
          kind: 'list',
          items: [
            [{ text: '1 problema:', strong: true }, ' por qué estamos hablando de esto.'],
            [{ text: '3 opciones:', strong: true }, ' con sus implicaciones en coste, riesgo, impacto, etc.'],
            [{ text: '1 recomendación', strong: true }, ' y el porqué.'],
          ],
        },
        {
          kind: 'image',
          src: '/assets/como-hablar-con-tu-jefe-1-3-1.webp',
          alt: 'Esquema del 1-3-1: el problema (por qué estamos hablando de esto) se abre en tres opciones, cada una con su coste, riesgo e impacto, y de la opción 1 sale una flecha hacia tu recomendación: cuál elegirías y por qué. Decide tu jefe.',
          width: 1200,
          height: 520,
        },
        { kind: 'p', text: ['Por ejemplo, te quitan a dos personas del equipo:'] },
        {
          kind: 'list',
          items: [
            {
              text: [{ text: 'Opción 1: reducir el alcance.', strong: true }],
              items: [
                ['Pros: llegamos a la fecha con el equipo que queda y no hace falta hacer más cambios.'],
                ['Contras: estas dos funcionalidades se quedan fuera hasta el trimestre siguiente.'],
              ],
            },
            {
              text: [{ text: 'Opción 2: contratar a dos personas.', strong: true }],
              items: [
                ['Pros: entregamos todo lo que se había prometido.'],
                [
                  'Contras: el coste de dos sueldos más, y riesgo de retraso por lo que se tarda en contratar y en que las personas nuevas se pongan al día.',
                ],
              ],
            },
            {
              text: [{ text: 'Opción 3: traer a dos personas de otro departamento durante unas semanas.', strong: true }],
              items: [['Pros: mantenemos fecha y alcance.'], ['Contras: ese departamento retrasa uno de sus entregables.']],
            },
            [
              { text: 'Mi recomendación:', strong: true },
              ' la primera. Lo que se queda fuera puede esperar, y las otras dos cuestan más de lo que salvan: dinero y tiempo en la segunda, el trabajo de otro equipo en la tercera.',
            ],
          ],
        },
        {
          kind: 'p',
          text: [
            'Si eliges tú en silencio (por ejemplo, recortar sin decirlo), estás tomando una decisión que no te corresponde, y él se entera cuando ya está tomada. Y puede que esté de acuerdo… o puede que no.',
          ],
        },
        {
          kind: 'p',
          text: [
            'Y cuéntalo desde lo que le importa a él, no desde tu problema. «El equipo está desbordado» le llega como queja. «Si no hacemos nada, el lanzamiento no llega» le llega como algo que le afecta a él.',
          ],
        },
      ],
    },
    {
      kind: 'text',
      heading: 'Con lo tuyo pasa igual',
      paragraphs: [
        ['Por ejemplo, con el sueldo.'],
        [
          'Estás descontenta con tu sueldo y no dices nada. Pasa el tiempo. No dices nada. Das por supuesto que tu jefe sabe que no estás contenta. No dices nada. Tu jefe no lo sabe.',
        ],
        [
          'Y un día llega una oferta de otra empresa que te paga más, y te vas. A lo mejor tu jefe habría podido hacer algo, pero no ha tenido ni tiempo de reaccionar.',
        ],
        [
          'Es el mismo patrón: no quiero tener la conversación… hasta que revienta. Y la solución también es la misma: decirlo cuando todavía es un riesgo. «Quiero hablar contigo de mi sueldo. Prefiero contártelo ahora que cuando sea tarde».',
        ],
      ],
    },
  ],
  faqHeading: 'Preguntas frecuentes',
  faq: [
    {
      question: '¿No le voy a agobiar si le cuento todos los riesgos?',
      answer: [
        [
          'No todos. Los que pueden afectar a algo que le importa a él: una fecha comprometida, un cliente, el presupuesto, el equipo. Los que puedes resolver tú sin que nada de eso se mueva, resuélvelos. Saber distinguir unos de otros es justo lo que se llama ',
          { text: 'discernimiento', strong: true },
          ' en ',
          { text: 'presencia ejecutiva', href: '/es/recursos/presencia-ejecutiva/' },
          '.',
        ],
      ],
    },
    {
      question: '¿Y si me da miedo que piense que no sé resolverlo?',
      answer: [
        [
          'Levantar un riesgo con su plan de mitigación es justo lo contrario de no saber resolverlo. Lo que da imagen de no saber es que le estalle algo que tú ya veías venir y que no hayas dicho nada.',
        ],
      ],
    },
    {
      question: '¿Y si mi jefe no me hace caso?',
      answer: [
        [
          'Primero, revisa el porqué: ¿le has contado el riesgo para él o tu problema? Muchas veces no es que no te haga caso, es que no ha visto por qué tiene que importarle.',
        ],
        [
          'Si aun así no reacciona, pon el riesgo por escrito: qué puede pasar, cuándo y qué propones. No lo haces para cubrirte. Lo haces para que no hacer nada sea una decisión, y no un olvido.',
        ],
      ],
    },
    {
      question: '¿Se puede trabajar en una mentoría?',
      answer: [
        [
          'Sí. En el programa ',
          { text: 'Presencia ejecutiva', href: '/es/programas/presencia-ejecutiva/' },
          ' preparamos las conversaciones reales con tu jefe: qué subes, cuándo y cómo lo cuentas.',
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
