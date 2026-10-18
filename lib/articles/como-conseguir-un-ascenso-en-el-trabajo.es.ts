import type { Article } from "./types";

const DIAGNOSTICO = "https://cal.com/yaiza-temprado/diagnostico";

// Pillar #9. Copy approved by Yaiza on 12-oct-2026. The text she edits lives in the vault,
// proyectos/optimizacion-seo/paginas/2026-10-12-borrador-como-conseguir-un-ascenso-en-el-trabajo.md.
// Words are hers: edit here only with her OK. Links to its child pages (1, 4, 7) get added as they ship.
const article: Article = {
  slug: "como-conseguir-un-ascenso-en-el-trabajo",
  locale: "es",
  published: "2026-10-12",
  tag: "Crecer hacia dirección",
  title: "Cómo conseguir un ascenso en el trabajo (de manager a director)",
  socialImage: {
    src: "/assets/como-conseguir-un-ascenso-productiva-social.jpg",
    width: 1200,
    height: 628,
  },
  description:
    "Cómo conseguir un ascenso en el trabajo de manager a director: qué cambia, por qué las horas no te ascienden, el papel de tus pares y por dónde empezar.",
  cardCta: "Leer",
  intro: [
    [
      "Eres buena manager. Tu equipo entrega, la gente está contenta y cuando hay un fuego, lo apagas tú. En la última evaluación te dijeron que ibas muy bien y que el siguiente paso estaba cerca.",
    ],
    ["Ha pasado otro ciclo. Y el siguiente paso sigue estando cerca."],
    [
      "Mientras tanto, trabajas más horas que nunca. Y no entiendes qué más tienes que hacer.",
    ],
    [
      "Lo que pasa casi siempre es esto: lo que te ha hecho buena manager no es lo que te va a hacer directora. Y nadie te lo explica, porque se da por hecho que lo vas a ver tú sola.",
    ],
  ],
  sections: [
    {
      kind: "text",
      heading: "Qué diferencia hay entre un manager y un director",
      paragraphs: [
        [
          "Como manager, te miden por lo que entrega tu equipo. Estás cerca del detalle, resuelves problemas y proteges a tu gente.",
        ],
        [
          "Como directora, te miden por otra cosa: por cómo conectas lo que necesita el negocio con lo que entrega tu gente. Ya no estás en el detalle, y no puedes estarlo. Tomas decisiones difíciles porque las necesita el negocio, y gestionas a las personas para que las acepten: les das el contexto que necesitan y les evitas el ruido.",
        ],
        [
          "Yo lo resumo así: a este nivel tu trabajo es ser ",
          { text: "lectora de señales", strong: true },
          ". Un proyecto bloqueado, alguien que no rinde, el feedback del equipo que tiene que llegar arriba. Las recibes, las juntas y las pasas a quien corresponde. No tienes que saberlo todo. Tienes que enterarte de lo que importa, a tiempo.",
        ],
        [
          "Y hay otra diferencia que pesa muchísimo: la autonomía. A un manager, su jefe le dice en qué se tiene que centrar. Su lista de tareas, básicamente, se la hace otro. De una directora se espera que conozca lo bastante bien los objetivos de la empresa como para decidir ella dónde pone el foco: de todos los problemas, proyectos o áreas en los que podría meterse, cuáles importan más. Y que sepa decir qué quiere conseguir y cómo va a medir si lo ha conseguido.",
        ],
        [
          "Si sigues esperando a que te digan en qué centrarte, todavía estás trabajando como manager.",
        ],
      ],
    },
    {
      kind: "blocks",
      heading: "Las horas no te ascienden",
      blocks: [
        {
          kind: "p",
          text: [
            "Ojo con la trampa más común en este salto: pensar que más responsabilidad significa más horas. Que para que te asciendan tienes que demostrar que puedes con todo.",
          ],
        },
        {
          kind: "p",
          text: [
            "Pero este trabajo no va del número de horas. Va del impacto. Puedes trabajar diez horas y no sacar nada valioso, súper ocupada todo el día. Y puedes entrar en una reunión, decir los tres mensajes que la gente necesita oír, y que eso tenga más efecto que una semana entera.",
          ],
        },
        {
          kind: "image",
          src: "/assets/como-conseguir-un-ascenso-productiva.webp",
          alt: "Viñeta en dos partes, al estilo del meme «ella piensa / él piensa». A la izquierda, una mujer sonriente rodeada de pantallas, post-its y una lista de tareas que llega al suelo: «Ella: Soy la persona más productiva de esta empresa». A la derecha, su jefe, con las manos en la cabeza, mira en su pantalla un gráfico rojo que cae en picado: «Su jefe: ¿Y por qué nadie está mirando esto?».",
          width: 1200,
          height: 670,
        },
        {
          kind: "p",
          text: [
            "La de la viñeta es lo que yo llamo la Cenicienta. Su jefe confía en ella: sabe que lo va a sacar todo. Pero como siempre cumple y no molesta, nadie la mueve de donde está. Lo cuento entero en ",
            {
              text: "no me valoran en el trabajo",
              href: "/es/recursos/no-me-valoran-en-el-trabajo/",
            },
            ".",
          ],
        },
      ],
    },
    {
      kind: "contrast",
      heading: "Los cambios que marcan el salto",
      intro: [
        "No hay un gran cambio. Hay varios pequeños, y todos van en la misma dirección: de hacer bien tu trabajo a hacerle la vida más fácil a quien decide.",
      ],
      labels: { lose: "Se pierde", gain: "Se gana" },
      items: [
        {
          title: "Del detalle a las señales",
          lose: "Quieres estar en todo para no perderte nada. Contestas preguntas que debería contestar tu equipo y llegas a las reuniones de dirección con el detalle de cada tarea.",
          gain: "Sabes qué está pasando sin estar en todo. Llevas a tu jefe lo que necesita saber, no todo lo que sabes.",
        },
        {
          title: "De resolver a decidir sin tener toda la información",
          lose: "Esperas a tenerlo todo claro antes de decidir. Mientras, la decisión la toma otro, o no la toma nadie.",
          gain: "Decides con la información que tienes, aunque sea imperfecta. Mejor un plan malo que ningún plan: un plan se puede corregir.",
        },
        {
          title: "De tu equipo a tu jefe",
          lose: "Tu trabajo es proteger a tu equipo. Tu jefe es alguien a quien rendir cuentas.",
          gain: "Tu jefe es tu cliente. ¿Qué problema le quitas esta semana? A quien te arregla la vida, no lo sueltas.",
        },
        {
          title: "De pedir permiso a declarar",
          lose: "«¿Tú crees que debería ir a esta reunión?». «¿Cuál es exactamente mi rol aquí?». Pones la decisión en manos de otra persona.",
          gain: "«Quiero llevar esto así. ¿Le ves algún problema?». Declaras, y pides objeciones.",
          link: {
            text: "Me prometieron un ascenso y no me lo dieron",
            href: "/es/recursos/me-prometieron-un-ascenso-y-no-me-lo-dieron/",
          },
        },
        {
          title: "De demostrar lo que sabes a no tener que demostrarlo",
          lose: "Explicas cada decisión con todo detalle para que se vea que la has pensado bien.",
          gain: "Das la respuesta y te callas. Si quieren saber más, te preguntarán.",
          link: {
            text: "Cómo tener autoridad en el trabajo",
            href: "/es/recursos/como-tener-autoridad-en-el-trabajo/",
          },
        },
      ],
    },
    {
      kind: "text",
      paragraphs: [
        [
          "Todo esto tiene un nombre que seguramente has oído en alguna evaluación: ",
          {
            text: "presencia ejecutiva",
            href: "/es/recursos/presencia-ejecutiva/",
          },
          ". Es lo que hace que los demás te vean ya en el siguiente puesto antes de que lo tengas.",
        ],
      ],
    },
    {
      kind: "blocks",
      heading: "Tus pares también deciden",
      blocks: [
        {
          kind: "p",
          text: [
            "Tu ascenso no lo decide solo tu jefe. Casi siempre se discute en una sala donde están sus pares, y tú no estás. Lo que piensen de ti esas personas pesa muchísimo.",
          ],
        },
        {
          kind: "p",
          text: [
            "Y con ellos no tienes autoridad. Lo que tienes es relación. Y una relación de trabajo va de ayudaros unos a otros: entender qué problemas tienen tus pares, ver si lo que tú estás haciendo les ayuda o no, mantenerles al tanto y pedirles feedback. Y al revés: saber en qué te pueden ayudar ellos a ti.",
          ],
        },
        {
          kind: "p",
          text: [
            "Yo me la imagino como una hucha: cada vez que entiendes el problema de alguien y le ayudas con él, echas una monedita. El día que necesitas algo, la hucha está llena.",
          ],
        },
        {
          kind: "p",
          text: [
            "Un test rápido: ¿sabes qué es lo que más le preocupa ahora mismo a cada uno de tus pares? Si no lo sabes, esa relación se está enfriando y todavía no te has enterado.",
          ],
        },
        {
          kind: "p",
          text: ["Dos moneditas que de verdad le sirven a la otra persona:"],
        },
        {
          kind: "list",
          items: [
            [
              { text: "Pregúntale antes de empezar.", strong: true },
              " Cuando vas a arrancar un proyecto que le toca, pídele su opinión antes: «Voy a empezar con esto. ¿Te resuelve algo a ti, o me estoy dejando lo que de verdad te preocupa?». Así compruebas que estás atacando un problema que existe, y el proyecto pasa a ser un poco suyo.",
            ],
            [
              { text: "Inclúyele.", strong: true },
              " Si mandas un resumen semanal de tu proyecto, no esperes a que tu jefe lo reenvíe: «Oye, mando un email cada semana con cómo va esto, ¿quieres que te incluya?». Y cuéntale qué gana él con ese proyecto, no solo cómo va.",
            ],
          ],
        },
      ],
    },
    {
      kind: "blocks",
      heading: "Por dónde empezar",
      blocks: [
        {
          kind: "list",
          items: [
            [
              { text: "Mira a quien ya tiene ese puesto.", strong: true },
              " Antes de nada, observa a las personas que hoy son directoras en tu empresa. ¿Qué hacen? ¿Cómo hablan en las reuniones? ¿Por qué se las valora? No es lo mismo ser director en una empresa que en otra, ni en ingeniería que en marketing. Lo que se premia en la tuya es lo que tienes que aprender a enseñar.",
            ],
            [
              { text: "Abre un fichero de impacto.", strong: true },
              " Una línea por cada cosa que haces: qué hiciste, cuál fue tu papel y qué impacto tuvo. Y compártelo con tu jefe.",
            ],
            [
              { text: "Dilo en voz alta.", strong: true },
              " A tu jefe y también a sus pares: «Estoy pensando en ir hacia este puesto. ¿Cómo me ves? ¿Qué consejo me darías?». Y tómate muy en serio lo que te digan. Cuanta más gente lo sepa, mejor.",
            ],
            [
              { text: "Haz seguimiento.", strong: true },
              " A tu jefe: «Te voy guardando aquí todo lo que hago, para que tengas munición cuando tengas que defender mi caso. ¿Te falta algo?». A quien te dio feedback, unas semanas después: «¿Te acuerdas de lo que me dijiste? Lo he estado trabajando así. ¿Has notado el cambio?».",
            ],
          ],
        },
        {
          kind: "p",
          text: [
            "Con esto pasan a formar parte de tu equipo: tu objetivo pasa a ser un poquito suyo también. Y cuando estén en esa sala hablando de ascensos sin ti, es más probable que se posicionen de tu lado.",
          ],
        },
      ],
    },
  ],
  faqHeading: "Preguntas frecuentes",
  faq: [
    {
      question: "¿Cómo pedir un ascenso a tu jefe?",
      answer: [
        [
          "No lo pidas como un favor ni como un premio por lo que ya has hecho. Plantéalo hacia delante: «Quiero llegar a directora. ¿Qué tendría que ver en mí para que lo tengas claro?». Y propón revisarlo juntos cada pocos meses, con tu fichero de impacto delante. Así el ascenso deja de ser una conversación de una vez al año.",
        ],
      ],
    },
    {
      question: "¿Tengo que saber más que mi equipo para ser directora?",
      answer: [
        [
          "No. A este nivel tu trabajo no es ser la experta. Es gestionar a la gente que sí lo es, y asegurarte de que las buenas ideas salgan adelante.",
        ],
      ],
    },
    {
      question: "¿Y si me lo prometieron y no llega?",
      answer: [
        [
          "Pasa muchísimo. Lo primero es nombrar el desajuste, sin acusar: «Me dijiste que este ciclo tocaba, y no ha pasado. ¿Qué ha cambiado?».",
        ],
        [
          "Lo cuento con más detalle en ",
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
          " trabajamos justo este salto: qué señales mandas hoy y cuáles necesitas mandar para que te vean en el siguiente puesto.",
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
