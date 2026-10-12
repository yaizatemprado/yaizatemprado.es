import type { Article } from './types'

const DIAGNOSTICO = 'https://cal.com/yaiza-temprado/diagnostico'

// Copy approved by Yaiza on 12-oct-2026. The text she edits lives in the vault,
// proyectos/optimizacion-seo/paginas/2026-10-11-borrador-como-gestionar-las-emociones-en-el-trabajo.md.
// Words are hers: edit here only with her OK.
const article: Article = {
  slug: 'como-gestionar-las-emociones-en-el-trabajo',
  locale: 'es',
  published: '2026-10-12',
  tag: 'Presencia ejecutiva',
  title: 'Cómo gestionar las emociones en el trabajo',
  socialImage: { src: '/assets/como-gestionar-las-emociones-cisne-social.jpg', width: 1200, height: 628 },
  description:
    'Cómo gestionar las emociones en el trabajo: lo que tu reacción les cuesta a tu jefe y a tu equipo, y qué hacer en el momento para tener templanza, como el cisne.',
  cardCta: 'Leer',
  intro: [
    [
      'Estás en una reunión y te enteras de que han parado tu proyecto. Nadie te lo había dicho antes. Se te nota en la cara, contestas más cortante de lo que querías y el resto de la reunión ya no estás.',
    ],
    [
      'O al revés. Te llega una buena noticia, todavía sin confirmar, y sales de la reunión contándola como si ya fuera un hecho. Dos semanas después se cae, y te toca desdecirte delante de todo el mundo.',
    ],
    [
      'Las dos escenas son la misma: algo pasa y tu reacción va más rápido que tú. Y lo que ve la gente que tienes alrededor es que las cosas te afectan. Demasiado.',
    ],
  ],
  sections: [
    {
      kind: 'text',
      heading: 'Lo que ve tu jefe (y tu equipo)',
      paragraphs: [
        [
          'Míralo desde el punto de vista de lo que te está costando. Además de pasarlo fatal, imagínate cómo ve tu reacción la gente que tienes alrededor. Por ejemplo, si tu jefe sabe que te vas a tomar algo como personal, deja de consultarte.',
        ],
        [
          'No lo hace para castigarte. Lo hace porque contarte las cosas le da pereza: tiene que pensar cómo decírtelo, cuándo, y gestionar tu reacción después. Así que la siguiente decisión la toma sin ti. Y tú te enteras, otra vez, en una reunión.',
        ],
        [
          'Y no pasa solo hacia arriba. Pasa hacia los lados y, sobre todo, hacia abajo. No hay nada peor que alguien de tu equipo te cuente un problema y que tu reacción sea enfadarte un montón o entrar en pánico. La próxima vez no te lo cuenta.',
        ],
        [
          'Lo mismo con la incertidumbre. Cuando arriba nadie sabe muy bien qué va a pasar, la tentación es trasladársela a tu equipo tal cual. Pero todo se amplifica hacia abajo. Si tú estás nerviosa, tu equipo está histérico. Si tú estás enfadada, tu equipo está rabioso. Si tú no sabes hacia dónde vas, tu equipo va como pollo sin cabeza.',
        ],
        [
          'Es una de las gotitas de las que hablo en ',
          { text: 'presencia ejecutiva', href: '/es/recursos/presencia-ejecutiva/' },
          '. Lo que buscas es la ',
          { text: 'templanza', strong: true },
          ': te tomas las cosas en serio, lo bueno y lo malo, pero con calma. Sin volverte de piedra. Porque ser capaz de gestionar tus emociones es lo que te permite gestionar las de los demás.',
        ],
      ],
    },
    {
      kind: 'blocks',
      heading: 'Como un cisne',
      blocks: [
        {
          kind: 'p',
          text: [
            'Un día, el equipo me escribe de repente: «Oye, Yaiza, ¿puedes saltar a una llamada?». Era un poco raro que me llamaran a esa hora, así que dije que sí inmediatamente. Me conecto y tenían todos unas caritas como si se hubiera muerto alguien. Y yo: «Dios mío, ¿qué ha pasado?».',
          ],
        },
        {
          kind: 'p',
          text: [
            '«Hemos cometido un error». Un error que no tenía marcha atrás, que dejaba sin servicio a un cliente muy importante, y que no íbamos a poder arreglar hasta tres días después.',
          ],
        },
        {
          kind: 'p',
          text: [
            'Me quedé un momento callada. Y mi reacción fue: «Bueno, chicos, primero de todo vamos a respirar. No se ha muerto nadie. Vamos a ver qué podemos hacer hoy y cómo lo gestionamos».',
          ],
        },
        {
          kind: 'p',
          text: [
            'Vi delante de mis ojos cómo bajaba el nivel de tensión de golpe. No sé si pensaban que me iba a poner a gritar. O a despedir a gente. Y eso les había dejado bloqueados: la situación era tan gorda que no sabían por dónde tirar. Cuando vieron que nadie les iba a gritar ni a despedir, pudimos empezar a hablar. «Vale, vamos con el plan: ¿qué es lo primero que tenemos que hacer?».',
          ],
        },
        {
          kind: 'list',
          items: [
            ['«Yo mando un email al cliente».'],
            ['«Yo hablo con el departamento de customer support».'],
            [
              '«Yo voy a empezar a trabajar en el script que usaremos dentro de tres días, para ir adelantando la resolución».',
            ],
          ],
        },
        { kind: 'p', text: ['En 15 minutos teníamos un plan de mitigación.'] },
        {
          kind: 'p',
          text: [
            'Para mí, esa llamada es el cisne. Visto desde arriba, nada con una tranquilidad absoluta. Si lo miras desde abajo, las patitas se mueven a toda velocidad. Es la imagen que me viene a la cabeza cuando hablo de templanza en el trabajo.',
          ],
        },
        {
          kind: 'image',
          src: '/assets/como-gestionar-las-emociones-cisne.webp',
          alt: 'Un cisne nada tranquilo mientras a su alrededor saltan los problemas («¡Hay un problema!», «¡El proyecto se va a retrasar!», «¡Nos quitan a dos personas!», «¿Y esto para cuándo?»). Bajo el agua, las patas se mueven a toda velocidad: ¡flap, flap, flap!',
          width: 1200,
          height: 670,
        },
        {
          kind: 'p',
          text: [
            'Ojo, que el cisne mueve las patas. Calma no es quedarse quieto esperando a ver qué pasa. Aquella vez esperamos los tres días que hubo que esperar, sí, pero con un plan. Primero, que todo el mundo pudiera respirar. Y después, a ver qué hacíamos.',
          ],
        },
        {
          kind: 'p',
          text: [
            'Por fuera, la sensación de que todo está bajo control. Por debajo, gestionas: levantas los riesgos, preparas las opciones, hablas con quien tienes que hablar. Lo cuento en ',
            { text: 'cómo hablar con tu jefe de un problema', href: '/es/recursos/como-hablar-con-tu-jefe-de-un-problema/' },
            '.',
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'Qué hacer en el momento',
      blocks: [
        {
          kind: 'list',
          items: [
            [
              { text: 'Gana tiempo.', strong: true },
              ' No tienes que reaccionar ya. «Déjame pensarlo y mañana te digo algo» es una respuesta perfectamente válida, y te da la noche para separar lo que ha pasado de lo que sientes.',
            ],
            [
              { text: 'Recuerda que es un trabajo.', strong: true },
              ' La mayoría no estamos salvando vidas: ejecutamos proyectos, escribimos emails, tenemos reuniones. No te tomes todo como si te fuera la vida en ello.',
            ],
            [
              { text: 'Míralo con un poco de distancia.', strong: true },
              ' Con la situación que tienes, ¿qué opciones hay? ¿Qué implica cada una? Tu trabajo es enseñarlas. La decisión la toma quien tiene que tomarla. Te puede importar mucho, pero no te puede importar más a ti que a tu jefe.',
            ],
            [
              { text: 'Suelta lo que no controlas.', strong: true },
              ' Cada nivel ve una parte del puzle, no el puzle entero. A veces arriba se toman decisiones que no entiendes o que te molestan. Puedes pedir más contexto, intentar entenderlas, cuestionarlas. Pero una vez tomada la decisión, toca centrarse en cómo afecta a tu equipo y qué opciones tienes.',
            ],
            [
              { text: 'Asume la responsabilidad que te toca, ni más ni menos.', strong: true },
              ' Si un proyecto que no depende solo de ti sale mal, no es tu fracaso personal. Lo que sí te toca es contar a tiempo lo que está pasando.',
            ],
            [
              { text: 'Con lo bueno, igual.', strong: true },
              ' Celébralo, claro. Pero cuéntalo cuando sea un hecho, no cuando sea una promesa.',
            ],
          ],
        },
      ],
    },
  ],
  faqHeading: 'Preguntas frecuentes',
  faq: [
    {
      question: '¿Cómo no tomarse las cosas personales en el trabajo?',
      answer: [
        [
          'Pregúntate de quién es la decisión. Casi todo lo que duele en el trabajo es una decisión de otra persona con la información y las prioridades que tenía. No va contra ti, aunque te afecte a ti. Y si de verdad va contra ti, eso no se arregla con una reacción en caliente, sino con una conversación en frío.',
        ],
      ],
    },
    {
      question: '¿Y si se me saltan las lágrimas en el trabajo?',
      answer: [
        [
          'Pasa, y a mucha más gente de la que crees. Si te pasa en una reunión, pide un momento sin dar explicaciones: «dame cinco minutos y seguimos». Sal, respira y vuelve. Y si lo que lo ha provocado es importante, retómalo después, con calma, con quien toque.',
        ],
      ],
    },
    {
      question: '¿Cómo mantener la calma en una reunión de trabajo?',
      answer: [
        [
          'Antes de contestar, pausa. Unos segundos de silencio a ti se te hacen eternos, pero a la sala le parece que estás pensando. Y si no tienes la respuesta o no estás para darla, dilo y vuelve con ella después. Lo cuento con más detalle en ',
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
          ' miramos tus situaciones reales: qué te remueve, cómo reaccionas y qué haces distinto la próxima vez.',
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
