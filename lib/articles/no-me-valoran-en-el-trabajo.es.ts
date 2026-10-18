import type { Article, Block } from "./types";

const DIAGNOSTICO = "https://cal.com/yaiza-temprado/diagnostico";

/** A bold lead-in followed by its paragraph, as in "**1. Title.** Text". */
const point = (title: string, text: string): Block => ({
  kind: "p",
  text: [{ text: title, strong: true }, " ", text],
});

// Child page 4 of pillar #9. Copy approved by Yaiza on 18-oct-2026. The text she edits lives in the vault,
// proyectos/optimizacion-seo/paginas/2026-10-17-borrador-no-me-valoran-en-el-trabajo.md.
// The matrix (visibility × effort, «la Cenicienta») is hers: decisions/2026-10-18-matriz-visibilidad-esfuerzo.md.
// Words are hers: edit here only with her OK.
const article: Article = {
  slug: "no-me-valoran-en-el-trabajo",
  locale: "es",
  published: "2026-10-18",
  tag: "Crecer hacia dirección",
  title: "No me valoran en el trabajo: por qué pasa y qué hacer",
  socialImage: {
    src: "/assets/no-me-valoran-matriz-social.jpg",
    width: 1200,
    height: 628,
  },
  description:
    "Trabajas muchísimo y no te valoran. Por qué el esfuerzo no basta, los cuatro perfiles de esfuerzo y visibilidad (la Cenicienta) y cómo hacer que se vea tu trabajo.",
  cardCta: "Leer",
  intro: [
    [
      "Trabajas muchísimo. Llegas pronto, te quedas hasta tarde y no se te escapa un detalle. Y aun así, cuando hay un proyecto goloso o un ascenso sobre la mesa, no eres tú la primera en la lista.",
    ],
    ["Y no entiendes por qué."],
    [
      "El problema casi nunca es tu trabajo. Es lo poco que llega de él a quien opina sobre ti: tu jefe, sus pares, la gente con la que trabajas. Y casi siempre cuando tú no estás delante.",
    ],
  ],
  sections: [
    {
      kind: "blocks",
      heading: "Primero: ¿qué es lo que quieres decir?",
      blocks: [
        {
          kind: "p",
          text: [
            "«No me valoran» quiere decir cosas muy distintas. Aterrizarlo es el primer paso para ponerle solución:",
          ],
        },
        {
          kind: "list",
          items: [
            [
              { text: "Que no te lo digan.", strong: true },
              " Haces un buen trabajo y nadie te dice nada. Ni un «gracias», ni un «esto ha salido muy bien».",
            ],
            [
              { text: "Que lo bueno se lo lleven otros.", strong: true },
              " Los proyectos golosos, las reuniones importantes, los ascensos.",
            ],
            [
              { text: "Que tu opinión no cuente.", strong: true },
              " Propones algo y no pasa nada. O lo propone otra persona una semana después, y entonces sí.",
            ],
            [
              { text: "Que no se note en tu nómina ni en tu nivel.", strong: true },
              " Haces trabajo de más y cobras lo mismo.",
            ],
          ],
        },
        {
          kind: "p",
          text: [
            "Puede ser más de una. Pero casi todas tienen la misma raíz: lo que haces y lo que se ve de lo que haces no coinciden.",
          ],
        },
      ],
    },
    {
      kind: "blocks",
      heading: "Lo que haces y lo que se ve",
      blocks: [
        {
          kind: "p",
          text: [
            "En los años 90, Harvey Coleman ya decía que en una carrera pesa mucho más quién sabe lo que haces que lo que haces. Lo resumía en tres partes: tu rendimiento cuenta un 10 %, tu imagen un 30 % y tu exposición, quién conoce tu trabajo, un 60 %.",
          ],
        },
        {
          kind: "p",
          text: [
            "A mí me gusta visualizarlo en dos ejes: cuánto te esfuerzas y cuánto se ve. Salen cuatro perfiles:",
          ],
        },
        {
          kind: "list",
          items: [
            [
              { text: "La que se come el mundo", strong: true },
              " (mucho esfuerzo, mucha visibilidad). Trabaja, y se nota. Se lleva las oportunidades.",
            ],
            [
              { text: "La Vendehumos", strong: true },
              " (poco esfuerzo, mucha visibilidad). Se le ve en todas partes, pero detrás hay poco. Puede librarse durante un tiempo, pero al final se le ve el plumero.",
            ],
            [
              { text: "La que ni fu ni fa", strong: true },
              " (poco esfuerzo, poca visibilidad). Ni destaca ni se la echa de menos. Ojo porque parece un puesto muy cómodo, pero cuando hay recortes, es la primera en caer.",
            ],
            [
              { text: "La Cenicienta", strong: true },
              " (mucho esfuerzo, poca visibilidad). Lo hace todo, no molesta y espera a que alguien se dé cuenta y la saque de ahí. Spoiler: esto puede no ocurrir nunca.",
            ],
          ],
        },
        {
          kind: "image",
          src: "/assets/no-me-valoran-matriz.webp",
          alt: "Matriz ilustrada de dos ejes: esfuerzo (de poco a mucho) y visibilidad (de poca a mucha). Arriba a la izquierda, «La Vendehumos»: una mujer con un megáfono y una carpeta vacía de la que sale humo. Arriba a la derecha, «La que se come el mundo»: una mujer presenta un gráfico que sube ante compañeros atentos. Abajo a la izquierda, «La que ni fu ni fa»: alguien tranquilo con un café y el móvil en una mesa casi vacía. Abajo a la derecha, destacada, «La Cenicienta»: una mujer trabaja rodeada de carpetas y post-its, el reloj casi en las doce y un zapato de cristal junto a la silla.",
          width: 1200,
          height: 670,
        },
        {
          kind: "p",
          text: [
            "Si buscas «no me valoran en el trabajo», lo más probable es que seas la Cenicienta. Es el perfil que más me encuentro en mentoría, y casi siempre es una mujer.",
          ],
        },
      ],
    },
    {
      kind: "text",
      heading: "Por qué el esfuerzo no basta",
      paragraphs: [
        [
          "Lo que me dicen casi siempre es esto: «No valoran todo lo que me esfuerzo, comparado con compañeros que trabajan mucho menos que yo».",
        ],
        [
          "Y es verdad: te esfuerzas más. El problema es que el esfuerzo no lo ve nadie. Tu jefe ve resultados, y solo los que le llegan. Lo que pasa por el camino (las horas, los fuegos que apagas, lo que sacas adelante sin que nadie se entere) para él no existe.",
        ],
        [
          "Para más inri, ¡el esfuerzo se devalúa según vas siendo más senior! Los primeros años en un puesto, hacer más de lo que te piden te hace destacar muchísimo. Después pasa a ser lo normal: es lo que se espera de ti. Puedes seguir subiendo el esfuerzo y nadie va a notar la diferencia.",
        ],
        [
          "Por eso trabajar más no te saca del cuadrante de la Cenicienta. Te hunde más en él.",
        ],
      ],
    },
    {
      kind: "blocks",
      heading: "Por qué te quedas en ese cuadrante",
      blocks: [
        point(
          "1. Te esfuerzas en lo que a tu jefe no le quita el sueño.",
          "Puedes estar haciendo un trabajo excelente en algo que a tu jefe le importa poco. Pregúntale, sin rodeos: «¿Qué es lo que más te preocupa este trimestre? ¿Lo que estoy haciendo te ayuda con eso?». Si la respuesta es que no, ya sabes dónde mover el foco.",
        ),
        point(
          "2. Haces el trabajo que nadie ve.",
          "Organizar el evento del equipo, tomar notas en las reuniones, hacer el onboarding de los nuevos, apagar el fuego de otro equipo. Es necesario, pero casi nunca cuenta en una evaluación. Y está estudiado: a las mujeres nos lo piden más y, cuando nos lo piden, decimos más que sí. Son las famosas tareas no promocionables. Tira de memoria: de los últimos 5 eventos de team building de tu equipo, ¿cuántos han organizado hombres y cuántos mujeres?",
        ),
        {
          kind: "p",
          text: [
            "No hace falta dejar de hacerlo todo. Pero sí repartirlo («esta vez que tome notas otra persona»), decir que no con una alternativa y, cuando lo hagas, contar el impacto que ha tenido.",
          ],
        },
        point(
          "3. Esperas a que se note solo.",
          "Te han enseñado que el buen trabajo habla por sí solo. Y el trabajo, solo, no habla. Es el corazón de la Cenicienta: hacerlo todo bien y esperar a que alguien venga a reconocerlo.",
        ),
        point(
          "4. Te da miedo parecer que estás dándote importancia.",
          "Conoces a alguna vendehumos, y no quieres ser así. Así que te vas al otro extremo y no cuentas nada. Pero ojo: hacerte visible es que se vea lo que ya haces. Hacer ruido es otra cosa. La Vendehumos enseña lo que no tiene. Tú vas a enseñar lo que sí.",
        ),
      ],
    },
    {
      kind: "blocks",
      heading: "Cómo salir del cuadrante de la Cenicienta",
      blocks: [
        {
          kind: "p",
          text: [
            "No se arregla trabajando más. Se arregla haciendo que se vea lo que ya haces. Mismo trabajo, otra lectura.",
          ],
        },
        point(
          "Un resumen de tres líneas los viernes.",
          "Un mensaje corto a tu jefe, cada semana:",
        ),
        {
          kind: "p",
          text: [
            {
              text: "«Esta semana me he centrado en X. Lo que necesitas saber: Y. Mi prioridad para la semana que viene es Z.»",
              em: true,
            },
          ],
        },
        {
          kind: "p",
          text: [
            "Muy poca gente lo hace, y tiene una potencia tremenda. Poquísimo trabajo, muchísima visibilidad. Y ojo con meter diez cosas: quien pone diez cosas es que no sabe cuál es su prioridad.",
          ],
        },
        point(
          "Cuenta el impacto, no la tarea.",
          "«He terminado la migración» es una tarea. «La migración ya está, y el equipo ha dejado de perder dos horas al día en esto» es impacto. Lo segundo es lo que tu jefe puede contar hacia arriba.",
        ),
        point(
          "Decide, y cuéntalo.",
          "Cuando tomes una decisión que está en tu mano, no la dejes pasar en silencio: «He decidido X por estos motivos. Lo verás reflejado en Y». Así se ve que también decides, además de ejecutar.",
        ),
        {
          kind: "p",
          text: [
            { text: "Que tu nombre salga donde no estás.", strong: true },
            " Tu jefe no es el único que decide. Que sus pares sepan en qué estás y qué has conseguido. Lo cuento en ",
            {
              text: "cómo conseguir un ascenso en el trabajo",
              href: "/es/recursos/como-conseguir-un-ascenso-en-el-trabajo/",
            },
            ".",
          ],
        },
        {
          kind: "p",
          text: [
            { text: "Habla en las reuniones.", strong: true },
            " La reunión en la que te callas es trabajo que no se ve. Lo cuento en ",
            {
              text: "cómo hablar en reuniones de trabajo",
              href: "/es/recursos/como-hablar-en-reuniones-de-trabajo/",
            },
            ".",
          ],
        },
      ],
    },
    {
      kind: "blocks",
      heading: "Habla con tu jefe (sin decirle «no me valoras»)",
      blocks: [
        {
          kind: "p",
          text: [
            "Si vas con «siento que no me valoras», la conversación va de cómo te sientes y tu jefe va a entrar en modo defensivo («¡Por supuesto que te valoro mucho!»). Es una conversación de tu percepción frente a la suya. No te interesa. En lugar de eso, ve con preguntas que le pongan a pensar en tu trabajo:",
          ],
        },
        {
          kind: "p",
          text: [
            {
              text: "«Quiero asegurarme de que pongo el foco donde más te ayuda. De lo que hago, ¿qué es lo que más valoras? ¿Y qué echas en falta?»",
              em: true,
            },
          ],
        },
        {
          kind: "p",
          text: [
            "Escucha, toma nota y no te justifiques. Lo que te diga es la mejor pista de qué tienes que hacer más visible.",
          ],
        },
      ],
    },
    {
      kind: "text",
      heading: "Si nada cambia",
      paragraphs: [
        [
          "A veces haces todo esto y no cambia nada. Puede que el problema no seas tú: hay sitios donde el trabajo que haces no se va a valorar nunca, porque no es lo que esa empresa premia.",
        ],
        [
          "Ojo con aceptar que eso es así y autoconvencerte de que no mereces el reconocimiento. Que no te valoren aquí no quiere decir que no valgas. Y cuanto antes lo veas, antes puedes decidir qué haces con ello.",
        ],
      ],
    },
  ],
  faqHeading: "Preguntas frecuentes",
  faq: [
    {
      question: "¿Qué hago si mi jefe no me valora?",
      answer: [
        [
          "Mira primero qué es lo que no te llega y si tu trabajo se ve. Casi siempre, el problema no es lo que haces, sino lo poco que se ve. Empieza por el resumen de los viernes y pregúntale qué valora de tu trabajo y qué echa en falta, en vez de decirle que no te valora.",
        ],
      ],
    },
    {
      question: "¿Tengo que trabajar más para que me valoren?",
      answer: [
        [
          "No. Es la trampa de la Cenicienta. Trabajar más sin que se vea te deja donde estás, solo que más cansada.",
        ],
      ],
    },
    {
      question: "¿Y si mi jefe no se lo reconoce a nadie?",
      answer: [
        [
          "Hay jefes así. Si lo hace con todo el mundo, no es personal. Pídeselo de forma explícita («me ayuda mucho saber cuándo algo te ha servido») y busca la señal en otros sitios: sus pares, tus clientes internos, tu equipo.",
        ],
      ],
    },
    {
      question: "¿Y si me prometieron un ascenso y no llega?",
      answer: [
        [
          "Eso es otra conversación, con su propia manera de hacerla. La cuento en ",
          {
            text: "me prometieron un ascenso y no me lo dieron",
            href: "/es/recursos/me-prometieron-un-ascenso-y-no-me-lo-dieron/",
          },
          ".",
        ],
      ],
    },
    {
      question: "¿Se puede trabajar en una mentoría?",
      answer: [
        [
          "Sí. En el programa ",
          {
            text: "Presencia ejecutiva",
            href: "/es/programas/presencia-ejecutiva/",
          },
          " vemos qué parte de tu trabajo no se está viendo y cómo hacerla visible sin convertirte en lo que no eres, sobre lo que pasa en tu semana real.",
        ],
        [
          "Si no sabes si es para ti, reserva el ",
          { text: "diagnóstico gratuito de 15 minutos", href: DIAGNOSTICO },
          ". Y si quieres que lo pague tu empresa, aquí te cuento ",
          {
            text: "cómo pedírselo",
            href: "/es/recursos/que-lo-pague-tu-empresa/",
          },
          ".",
        ],
      ],
    },
  ],
};

export default article;
