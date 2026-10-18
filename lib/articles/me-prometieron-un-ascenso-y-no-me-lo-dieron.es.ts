import type { Article } from "./types";

const DIAGNOSTICO = "https://cal.com/yaiza-temprado/diagnostico";
const PILAR = "/es/recursos/como-conseguir-un-ascenso-en-el-trabajo/";

// Child page 1 of pillar #9. Copy approved by Yaiza on 17-oct-2026. The text she edits lives in the vault,
// proyectos/optimizacion-seo/paginas/2026-10-17-borrador-me-prometieron-un-ascenso.md.
// Words are hers: edit here only with her OK.
const article: Article = {
  slug: "me-prometieron-un-ascenso-y-no-me-lo-dieron",
  locale: "es",
  published: "2026-10-17",
  tag: "Crecer hacia dirección",
  title: "Me prometieron un ascenso y no me lo dieron. ¿Y ahora qué?",
  seoTitle: "Me prometieron un ascenso y no me lo dieron: qué hacer ahora",
  socialImage: {
    src: "/assets/me-prometieron-un-ascenso-y-yo-cuando-social.jpg",
    width: 1200,
    height: 628,
  },
  description:
    "Te prometieron un ascenso y no llegó. Por qué pasa, qué no funciona y cómo hablarlo con tu jefe: nombrar el desajuste, pedir criterios y fecha, y ponerlo por escrito.",
  cardCta: "Leer",
  intro: [
    [
      "En la última evaluación tu jefe te lo dijo bien claro: «El año que viene es tu momento». Saliste de esa reunión contenta. Y te pusiste a trabajar todavía más. Asumiste cosas que no eran tuyas, sin quejarte, porque ya quedaba poco.",
    ],
    ["Ha llegado el ciclo de ascensos. Y tu nombre no está."],
    [
      "Te lo explican con una frase que no explica nada: «Este año no ha podido ser. Hay que esperar un poquito más». O ni siquiera te lo explican: te enteras por el email con la lista.",
    ],
    [
      "Y te quedas con dos impulsos. Uno, ir a su despacho y decirle que no es justo. El otro, no decir nada, seguir como si tal cosa y empezar a mirar ofertas. Ninguno de los dos impulsos te va a dar lo que quieres.",
    ],
  ],
  sections: [
    {
      kind: "text",
      heading: "Por qué pasa",
      paragraphs: [
        [
          "Una promesa de ascenso casi nunca es una promesa. «Es tu momento», sin fecha, sin criterios y sin decir qué tiene que pasar, es una intención. Y muchas veces tu jefe ni siquiera decide solo: el ascenso se discute en una sala con sus pares, con un presupuesto y con otras candidaturas encima de la mesa. Tu jefe puede estar muy convencido de que te lo mereces y que aun así se lo tumben otros.",
        ],
        [
          "En muchas empresas, sobre todo las grandes, funciona así: hay un número cerrado de ascensos por ciclo, y tu jefe tiene que defender tu caso con ejemplos concretos delante de otros managers que defienden a su gente. Si no llega con pruebas de que ya trabajas al nivel de arriba (y desde hace tiempo, no desde hace dos semanas), tu caso se cae.",
        ],
        [
          "Mientras tanto, tú has hecho lo que hacemos casi todas: trabajar más y esperar a que se note. Dar señales sin decir nunca en voz alta a qué puesto vas. Y sin asegurarte de que alguien con peso habla de ti en esa sala.",
        ],
        [
          "Lo que hay ahora es un desajuste. Lo que te dijeron y lo que ha pasado no casan. Y eso es justo lo que tienes que poner encima de la mesa.",
        ],
        [
          "Por qué tus pares pesan tanto lo cuento en ",
          { text: "cómo conseguir un ascenso en el trabajo", href: PILAR },
          ".",
        ],
      ],
    },
    {
      kind: "blocks",
      heading: "Lo que no funciona",
      blocks: [
        { kind: "p", text: ["Cuando vayas a hablar con tu jefe, ojo con esto:"] },
        {
          kind: "list",
          items: [
            [
              { text: "«No es justo».", strong: true },
              " Aunque tengas razón, la conversación pasa a ir de tu enfado y no de tu ascenso. Y tu jefe se pone a la defensiva, que no te va a ayudar.",
            ],
            [
              { text: "Hablar en caliente.", strong: true },
              " Si vas el mismo día, vas a decir «no es justo» aunque no quieras. Deja pasar uno o dos días.",
            ],
            [
              { text: "Compararte con otra persona.", strong: true },
              " «A Fulana la han ascendido y lleva menos tiempo que yo». En esa conversación no existe nadie más: eres tú con tus datos.",
            ],
            [
              { text: "Restarle importancia.", strong: true },
              " «Bueno, tampoco es que el puesto me importe tanto». Lo dices para no parecer ambiciosa, y tu jefe lo que oye es que no hace falta subirte.",
            ],
          ],
        },
        { kind: "p", text: ["Y fuera de esa conversación, tampoco funciona:"] },
        {
          kind: "list",
          items: [
            [
              { text: "No decir nada.", strong: true },
              " Callarte, seguir trabajando igual y confiar en que el año que viene sí te toque. Es el mismo patrón que con el sueldo: no dices nada hasta el día que te vas, y ese día ya no hay nada que negociar. Lo cuento en ",
              {
                text: "cómo hablar con tu jefe de un problema",
                href: "/es/recursos/como-hablar-con-tu-jefe-de-un-problema/",
              },
              ".",
            ],
            [
              { text: "Ponerte en contra de quien sí lo ha conseguido.", strong: true },
              " Si han ascendido a otra persona, felicítala. No tiene la culpa, y puede que mañana sea tu jefa.",
            ],
          ],
        },
      ],
    },
    {
      kind: "blocks",
      heading: "Nombra el desajuste",
      blocks: [
        { kind: "p", text: ["Lo pones encima de la mesa en neutro y dejas que lo llene él:"] },
        {
          kind: "p",
          text: [
            {
              text: "«En la última evaluación me dijiste que este ciclo tocaba, y no ha pasado. Hay un desajuste ahí que no entiendo. ¿Qué ha cambiado?»",
              em: true,
            },
          ],
        },
        {
          kind: "p",
          text: [
            "Y te callas. ¡No rellenes el silencio! Ojo con ponerle tú las excusas («ya sé que el presupuesto está complicado…»). La pregunta hace el trabajo.",
          ],
        },
        {
          kind: "p",
          text: ["Y cuando conteste, que no se quede en «no ha podido ser». Pide concreción:"],
        },
        {
          kind: "list",
          items: [
            ["¿Qué criterios se han usado?"],
            ["¿Qué faltaba en mi caso? ¿Me puedes dar ejemplos concretos?"],
            ["¿Qué tendría que pasar para que la próxima vez fuera la candidata clara?"],
          ],
        },
        {
          kind: "p",
          text: [
            "Si lo que pasa es que llevas tiempo haciendo trabajo del puesto de arriba, hay una versión todavía más objetiva:",
          ],
        },
        {
          kind: "p",
          text: [
            {
              text: "«Estas son las responsabilidades que tengo ahora. Este es mi nivel. Hay una discrepancia. ¿Cómo lo solucionamos?»",
              em: true,
            },
          ],
        },
        {
          kind: "p",
          text: [
            "«Discrepancia» suena a dato. «No es justo» suena a queja. Pero el dato tiene que ir respaldado: llévalo preparado, con cada proyecto que has liderado, el impacto que ha tenido y la responsabilidad que tenías tú. Te cuento cómo en el ",
            { text: "fichero de impacto", href: PILAR },
            ".",
          ],
        },
      ],
    },
    {
      kind: "blocks",
      heading: "Deja de preguntar cuándo te toca",
      blocks: [
        {
          kind: "p",
          text: [
            "La pregunta que casi todas hacemos después de un no es «¿cuándo crees que me tocará?». Con esa pregunta, la decisión vuelve a quedar en manos de otra persona. Y te puede dar la respuesta que no quieres: «Ya veremos».",
          ],
        },
        {
          kind: "image",
          src: "/assets/me-prometieron-un-ascenso-y-yo-cuando.webp",
          alt: "Viñeta. En un despacho, una mujer con una carpeta bajo el brazo le pregunta a su jefe: «¿Y yo cuándo?». Él, sentado tras su mesa, sonríe incómodo y sudando, rodeado de bocadillos: «Este año no hay presupuesto», «Te falta un poquito más de visibilidad», «El año que viene, seguro», «Ahora no es buen momento».",
          width: 1200,
          height: 670,
        },
        {
          kind: "list",
          items: [
            [
              { text: "Se pierde:", strong: true },
              " «¿Tú crees que el año que viene podría ser?». Esperas a que te lo ofrezcan.",
            ],
            [
              { text: "Se gana:", strong: true },
              " «Quiero llegar a ese puesto en el próximo ciclo. ¿Qué tendrías que ver en mí para tenerlo claro?». Declaras a dónde vas y pides lo que falta.",
            ],
          ],
        },
        {
          kind: "p",
          text: [
            "Y si te dice que ahora no es el momento, no te quedes en el «ya veremos». Pide la fecha: «Vale. ¿Lo revisamos en marzo, con todo esto delante?».",
          ],
        },
      ],
    },
    {
      kind: "blocks",
      heading: "Ponlo por escrito",
      blocks: [
        {
          kind: "p",
          text: [
            "Una promesa hablada se mueve sola. «Es tu momento» se convierte en «yo nunca te dije este año». A veces, cada uno se acuerda de lo que le conviene.",
          ],
        },
        { kind: "p", text: ["Así que, después de la conversación, mándale un email corto:"] },
        {
          kind: "p",
          text: [
            {
              text: "«Gracias por la conversación de hoy. Para que no se me escape nada: hemos quedado en que para el puesto de directora necesitas ver X e Y, y en que lo revisamos en marzo. ¿Lo he entendido bien?»",
              em: true,
            },
          ],
        },
        {
          kind: "p",
          text: [
            "Lo mismo que harías después de cualquier reunión importante: dejar claro qué se ha acordado. Nadie se va a sentir atacado por eso. Y la próxima vez no hay que tirar de memoria.",
          ],
        },
      ],
    },
    {
      kind: "blocks",
      heading: "Si aun así no llega",
      blocks: [
        {
          kind: "p",
          text: [
            "A veces la respuesta es que no va a pasar, o que nadie sabe cuándo. Eso también es información, y la necesitas:",
          ],
        },
        {
          kind: "p",
          text: [
            {
              text: "«Si este puesto no va a existir para mí aquí, necesito saberlo para poder tomar yo una decisión.»",
              em: true,
            },
          ],
        },
        {
          kind: "p",
          text: [
            "Ojo con el tono: ni amenaza ni «sálvame». Estás pidiendo el contexto que te falta para decidir tú. Sin rumores y sin emoción: es una conversación de trabajo.",
          ],
        },
        {
          kind: "p",
          text: [
            "Y fíjate en qué tipo de «no» es. Si lo que falta es algo que puedes trabajar (más visibilidad, un tipo de proyecto, una habilidad), tienes un plan. Si lo que falta no depende de ti (no hay plaza, la estructura no lo permite, la decisión la toma alguien que no te conoce), ningún plan lo va a arreglar. Que no te asciendan una vez es un dato. Dos veces con la misma promesa, es un patrón.",
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
            [{ text: "Deja pasar uno o dos días", strong: true }, " antes de pedir la reunión."],
            [
              { text: "Escribe qué te dijeron, cuándo y con qué palabras.", strong: true },
              " «Es tu momento» no es lo mismo que «en junio pasas a directora». Saber qué te prometieron de verdad cambia la conversación.",
            ],
            [
              { text: "Prepara tu resumen:", strong: true },
              " proyecto, impacto y la responsabilidad que tenías en cada uno.",
            ],
            [
              { text: "Primero, tu jefe.", strong: true },
              " Recursos Humanos, después y para algo concreto (ver abajo).",
            ],
            [
              { text: "Ensaya en voz alta, a solas, lo que vas a decir,", strong: true },
              " hasta que te salga entero: sin el «bueno» delante y sin el «creo». Las primeras veces chirría. Es normal.",
            ],
            [
              { text: "No salgas de la reunión sin una fecha", strong: true },
              " para volver a hablarlo.",
            ],
            [
              { text: "Mándale por escrito lo que habéis acordado", strong: true },
              " ese mismo día.",
            ],
          ],
        },
      ],
    },
  ],
  booking: {
    text: "Si la conversación con tu jefe es esta semana, tengo 15 minutos para prepararla contigo.",
    cta: "Reservar el diagnóstico gratis",
    href: DIAGNOSTICO,
    newsletterLine: "¿Todavía no? Te escribo 2-3 emails al mes (no más) sobre estas cosas.",
  },
  faqHeading: "Preguntas frecuentes",
  faq: [
    {
      question: "¿Por qué no me ascienden en el trabajo?",
      answer: [
        [
          "Casi siempre, porque lo que te ha hecho buena en tu puesto no es lo que te hace falta en el siguiente, y nadie te lo ha explicado. Lo cuento en ",
          { text: "cómo conseguir un ascenso en el trabajo", href: PILAR },
          ". Y si sientes que trabajas muchísimo y no se te ve, lo cuento en ",
          {
            text: "no me valoran en el trabajo",
            href: "/es/recursos/no-me-valoran-en-el-trabajo/",
          },
          ".",
        ],
      ],
    },
    {
      question: "¿Hablo con Recursos Humanos?",
      answer: [
        [
          "Después de tu jefe, y para algo concreto. Si vas antes, se lee como que te lo has saltado, y lo necesitas de tu lado. Además, Recursos Humanos casi nunca decide solo un ascenso.",
        ],
        [
          "Para lo que sí te sirve: entender cómo funciona el proceso (cuándo son los ciclos, qué criterios hay escritos, quién decide) y, si sospechas que hay algo más que una decisión de negocio, que quede constancia. Y si el problema es tu jefe, el paso natural es hablar con su jefe, no con Recursos Humanos.",
        ],
      ],
    },
    {
      question: "¿Y si mi jefe me dice que no depende de él?",
      answer: [
        [
          "Pregúntale quién decide y qué necesita ver esa persona. Y ofrécele munición: «Te voy guardando aquí todo lo que hago, para que tengas con qué defender mi caso». Así tu ascenso pasa a ser un poquito suyo también.",
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
          " preparamos juntas esta conversación: qué decir, qué datos llevar y cómo pedir la fecha sin que suene a ultimátum.",
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
