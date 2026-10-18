import type { Article, Block } from "./types";

const DIAGNOSTICO = "https://cal.com/yaiza-temprado/diagnostico";

/** A bold lead-in followed by its paragraph, as in "**Title.** Text". */
const point = (title: string, text: string): Block => ({
  kind: "p",
  text: [{ text: title, strong: true }, " ", text],
});

/** A sentence to say out loud, in italics, as the other pages quote them. */
const quote = (text: string): Block => ({
  kind: "p",
  text: [{ text, em: true }],
});

// Child page 7 of pillar #9. Copy approved by Yaiza on 18-oct-2026. The text she edits lives in the vault,
// proyectos/optimizacion-seo/paginas/2026-10-18-borrador-miedo-a-equivocarme-en-el-trabajo.md.
// Words are hers: edit here only with her OK.
const article: Article = {
  slug: "miedo-a-equivocarme-en-el-trabajo",
  locale: "es",
  published: "2026-10-18",
  tag: "Crecer hacia dirección",
  title: "Miedo a equivocarme en el trabajo: cómo decidir sin tenerlo todo claro",
  socialImage: {
    src: "/assets/miedo-a-equivocarme-sabado-lunes-social.jpg",
    width: 1200,
    height: 628,
  },
  description:
    "Si te da miedo equivocarte y no terminas de decidir: mejor un plan malo que ningún plan, ponte una fecha límite, saca la decisión de tu cabeza y qué hacer si la has cagado.",
  cardCta: "Leer",
  intro: [
    [
      "Tienes una decisión encima de la mesa. No es enorme, pero importa. Y no terminas de verla clara. Así que pides un dato más. Lo hablas con una persona más. Lo dejas para el lunes, que tendrás la cabeza más fresca. Y el lunes sigues igual.",
    ],
    [
      "Mientras tanto, la decisión no espera. La acaba tomando tu jefe, o el calendario, o no la toma nadie y el problema se hace más grande.",
    ],
    [
      "Y cuanto más subes, más pasa, porque las decisiones son más grandes y la información nunca está completa.",
    ],
  ],
  sections: [
    {
      kind: "text",
      heading: "Lo que cambia cuando subes",
      paragraphs: [
        [
          "Como manager, te han valorado por no fallar: entregar a tiempo, que no se escape nada, que todo salga bien. Ese miedo a equivocarte te ha hecho muy buena en tu trabajo.",
        ],
        [
          "Pero a partir de cierto nivel, lo que se espera de ti es otra cosa: QUE DECIDAS. Con la información que tengas, aunque sea imperfecta. Y eso quiere decir que a veces te vas a equivocar.",
        ],
        [
          "Lo cuento en ",
          {
            text: "cómo conseguir un ascenso en el trabajo",
            href: "/es/recursos/como-conseguir-un-ascenso-en-el-trabajo/",
          },
          ": es uno de los cambios en la forma de pensar que marcan si estás preparada para el salto a dirección.",
        ],
      ],
    },
    {
      kind: "blocks",
      heading: "Mejor un plan malo que ningún plan",
      blocks: [
        {
          kind: "p",
          text: [
            "Empecemos por lo básico: mejor tener un plan, aunque sea malo, y cambiarlo después, que no tener ninguno. Un plan se puede corregir. La ausencia de plan, no.",
          ],
        },
        { kind: "p", text: ["Fíjate en la diferencia entre estas dos frases:"] },
        {
          kind: "list",
          items: [
            ["«Estoy pensando en cancelar el workshop porque no sé si estamos preparados.»"],
            ["«Por ahora lo cancelo, y le pongo fecha nueva cuando tengamos A, B y C.»"],
          ],
        },
        {
          kind: "p",
          text: [
            "Es la misma decisión. Pero la primera suena a alguien que no sabe lo que hace, y la segunda, a alguien con un plan.",
          ],
        },
        {
          kind: "p",
          text: [
            "Y cuando no tienes ni siquiera eso, lleva el plan del plan: «Esto es en lo que estoy trabajando, este es el plan con la información que tenemos hoy, y lo iremos afinando según sepamos más».",
          ],
        },
      ],
    },
    {
      kind: "blocks",
      heading: "La claridad llega con el movimiento (no al revés)",
      blocks: [
        {
          kind: "p",
          text: [
            "La frase que más me gusta de este tema es esta: la claridad llega con el movimiento, no al revés. Porque muchas veces esperamos a verlo claro para empezar. Pero casi siempre es al revés: empiezas a moverte, y es entonces cuando las cosas se aclaran. Aparece la información que te faltaba, ves qué funciona y qué no, y alguien te dice lo que no sabías.",
          ],
        },
        { kind: "p", text: ["Y si te has equivocado, pivotas."] },
        point(
          "Cuando te has equivocado: pivota rápido.",
          "Una vez propuse un cambio en mis equipos. Lo hablé con todo el mundo, convencí a mi jefe y a su jefe, y hasta mandé un email anunciándolo.",
        ),
        {
          kind: "p",
          text: [
            "Unos días después, una persona del equipo me pidió un rato y me explicó, punto por punto, por qué el cambio no era buena idea. Tenía información que yo no tenía. Y tenía razón.",
          ],
        },
        {
          kind: "p",
          text: [
            "Después de comerme mi ego dolido, revertí el cambio. Y en cada conversación dije lo mismo: «Ha surgido información nueva y, a la vista de eso, el nuevo enfoque es este».",
          ],
        },
        {
          kind: "p",
          text: [
            "Lo que de verdad habría costado caro es mantener un cambio equivocado por no quedar mal.",
          ],
        },
      ],
    },
    {
      kind: "text",
      heading: "Ponte una fecha límite para decidir",
      paragraphs: [
        [
          "En muchos casos no vas a ganar más claridad simplemente por esperar. Ojo, porque esperar se siente prudente, pero casi nunca te da la información que te falta: solo te da más tiempo para darle vueltas. Y muchas veces, con la ansiedad subiendo porque la decisión sigue ahí, pendiente.",
        ],
        [
          "Así que ponle fecha, y no te la saltes. «El jueves decido.» Y el jueves decides con la información que tengas.",
        ],
      ],
    },
    {
      kind: "blocks",
      heading: "Saca la decisión de tu cabeza",
      blocks: [
        {
          kind: "p",
          text: [
            "Muchas veces intentamos decidir con toda la información dentro de la cabeza. Y ahí no cabe: das vueltas, se te mezcla lo importante con lo que no, y cada opción parece igual de mala.",
          ],
        },
        {
          kind: "p",
          text: ["Cuando la pones sobre la mesa, cambia. A mí me gusta mucho usar el 1-3-1:"],
        },
        {
          kind: "list",
          items: [
            [{ text: "1 problema:", strong: true }, " qué tienes que decidir, en una frase."],
            [
              { text: "3 opciones:", strong: true },
              " con sus pros, sus contras, sus riesgos e implicaciones.",
            ],
            [{ text: "1 recomendación:", strong: true }, " la que eliges y por qué."],
          ],
        },
        {
          kind: "p",
          text: [
            "Con todo delante, se ve mucho más claro cuál es la mejor decisión. Y si la tienes que llevar a tu jefe, ya la tienes preparada. Lo cuento con un ejemplo en ",
            {
              text: "cómo hablar con tu jefe de un problema",
              href: "/es/recursos/como-hablar-con-tu-jefe-de-un-problema/",
            },
            ".",
          ],
        },
      ],
    },
    {
      kind: "blocks",
      heading: "Juzga la decisión por lo que sabías",
      blocks: [
        {
          kind: "p",
          text: [
            "Si dentro de tres meses ves que una decisión fue errónea, no te fustigues. La tomaste con la información que tenías en ese momento.",
          ],
        },
        quote("«He tomado la mejor decisión con la información que tenía.»"),
        {
          kind: "p",
          text: [
            "Una decisión no es mala porque salió mal. Es mala si, con lo que sabías entonces, había una opción claramente mejor y no la viste.",
          ],
        },
        {
          kind: "p",
          text: [
            "Y piensa en cuántas decisiones tomas al día. En alguna te vas a equivocar. No te atasques en esa si has acertado todas las demás.",
          ],
        },
      ],
    },
    {
      kind: "blocks",
      heading: "Entrena el músculo con decisiones que no importan",
      blocks: [
        {
          kind: "p",
          text: [
            "Si te cuesta muchísimo decidir en general, te propongo un ejercicio para hacer músculo: entrenar la capacidad de decidir con cosas que no tienen ninguna consecuencia.",
          ],
        },
        {
          kind: "list",
          items: [
            ["Qué vas a comer en un restaurante."],
            ["Qué ropa te vas a poner hoy."],
            ["Qué serie empiezas esta noche."],
          ],
        },
        {
          kind: "image",
          src: "/assets/miedo-a-equivocarme-sabado-lunes.webp",
          alt: "Viñeta en dos partes. A la izquierda, en un restaurante de noche, una mujer con una carta abierta se lleva la mano a la frente sin decidirse, mientras el camarero espera con la libreta y cara de impaciencia: «Si no decides el sábado…». A la derecha, la misma mujer en una sala de reuniones, con un documento abierto y la misma cara, mientras tres compañeros esperan su respuesta mirando el reloj: «…tampoco el lunes».",
          width: 1200,
          height: 670,
        },
        { kind: "p", text: ["Ponte un minuto. Ni uno más. Y lo que elijas, eso es."] },
        {
          kind: "p",
          text: [
            "Decidir es un músculo. Y no se entrena el día del presupuesto, se entrena con la carta del restaurante.",
          ],
        },
      ],
    },
  ],
  faqHeading: "Preguntas frecuentes",
  faq: [
    {
      question: "¿Cómo superar el miedo a equivocarme en el trabajo?",
      answer: [
        [
          "No esperando a que se vaya. El miedo no desaparece antes de decidir: baja después, cuando ves que equivocarte tenía arreglo. Ponle fecha a la decisión, sácala de tu cabeza con el 1-3-1 y decide con lo que tengas. Y si te equivocas, pivota pronto.",
        ],
      ],
    },
    {
      question: "¿Por qué tengo miedo a tomar decisiones?",
      answer: [
        [
          "Casi siempre porque te han valorado durante años por no fallar, y decidir sin toda la información se parece mucho a arriesgarte a fallar. No es un defecto: es una costumbre que te ha funcionado. Lo que pasa es que, a partir de cierto nivel, deja de funcionar.",
        ],
      ],
    },
    {
      question: "¿Y si la he cagado de verdad?",
      answer: [
        [
          "Va a pasar. Fustígate 10 minutos como mucho, y luego hazte cargo: dilo tú, antes de que se enteren por otro lado, y llega con un plan para ",
          {
            text: "mitigar el impacto",
            href: "/es/recursos/como-hablar-con-tu-jefe-de-un-problema/",
          },
          ". Algo como ",
          {
            text: "«Soy responsable de este error. El impacto es este, y este es el plan para mitigarlo»",
            em: true,
          },
          ". Quien reconoce un error y se pone a arreglarlo gana muchísima más confianza que quien intenta esconderlo, porque casi siempre se nota.",
        ],
      ],
    },
    {
      question: "¿Cómo tomar buenas decisiones en el trabajo?",
      answer: [
        [
          "Una buena decisión es la que tomas bien, aunque luego salga mal: a tiempo, con las opciones sobre la mesa y sabiendo qué harías si se tuerce. Cómo salga no depende solo de ti.",
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
          " trabajamos las decisiones que tienes encima de la mesa esta semana: cómo plantearlas, cómo llevarlas a tu jefe y cómo sostenerlas cuando no lo tienes todo claro.",
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
