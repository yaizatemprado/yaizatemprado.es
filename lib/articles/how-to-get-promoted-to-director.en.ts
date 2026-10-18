import type { Article } from './types'

const DIAGNOSTIC = 'https://cal.com/yaiza-temprado/diagnostic-session'

// English copy of como-conseguir-un-ascenso-en-el-trabajo, approved by Yaiza on
// 18-oct-2026 (she asked for it published without reviewing the English). The
// Spanish text lives in the vault, proyectos/optimizacion-seo/paginas/
// 2026-10-12-borrador-como-conseguir-un-ascenso-en-el-trabajo.md. Edit with her OK.
const article: Article = {
  slug: 'how-to-get-promoted-to-director',
  translationOf: 'como-conseguir-un-ascenso-en-el-trabajo',
  locale: 'en',
  published: '2026-10-18',
  tag: 'Getting to director',
  title: 'How to get promoted to director (the jump from manager)',
  socialImage: {
    src: '/assets/como-conseguir-un-ascenso-productiva-en-og.jpg',
    width: 1200,
    height: 628,
  },
  description:
    "How to get promoted from manager to director: what changes, why longer hours won't get you promoted, the role your peers play and where to start.",
  cardCta: 'Read',
  intro: [
    [
      "You're a good manager. Your team delivers, people are happy and when there's a fire, you're the one who puts it out. In your last review you were told you were doing really well and that the next step was close.",
    ],
    ['Another cycle has gone by. And the next step is still close.'],
    ["Meanwhile, you're working longer hours than ever. And you don't understand what else you need to do."],
    [
      "What's going on, almost every time, is this: what made you a good manager is not what will make you a director. And nobody explains it to you, because everyone assumes you'll work it out on your own.",
    ],
  ],
  sections: [
    {
      kind: 'text',
      heading: "What's the difference between a manager and a director",
      paragraphs: [
        [
          "As a manager, you're measured by what your team delivers. You're close to the detail, you solve problems and you protect your people.",
        ],
        [
          "As a director, you're measured by something else: how well you connect what the business needs with what your people deliver. You're no longer in the detail, and you can't be. You make hard decisions because the business needs them, and you manage people so they accept them: you give them the context they need and you keep the noise away from them.",
        ],
        [
          'The way I put it: at this level your job is to be a ',
          { text: 'signal reader', strong: true },
          ". A blocked project, someone who isn't performing, team feedback that needs to reach the top. You pick them up, put them together and pass them on to whoever needs them. You don't have to know everything. You have to find out what matters, in time.",
        ],
        [
          "And there's another difference that carries a huge amount of weight: autonomy. A manager gets told by their manager what to focus on. Their to-do list, basically, is written by someone else. A director is expected to know the company's goals well enough to decide for herself where to put her focus: out of all the problems, projects or areas she could get into, which ones matter most. And to be able to say what she wants to achieve and how she'll measure whether she's achieved it.",
        ],
        ["If you're still waiting to be told what to focus on, you're still working as a manager."],
      ],
    },
    {
      kind: 'blocks',
      heading: "Hours don't get you promoted",
      blocks: [
        {
          kind: 'p',
          text: [
            'The most common trap in this jump: thinking that more responsibility means more hours. That to get promoted you have to prove you can handle everything.',
          ],
        },
        {
          kind: 'p',
          text: [
            "But this job isn't about the number of hours. It's about impact. You can work ten hours and produce nothing of value, flat out busy all day. And you can walk into a meeting, say the three messages people need to hear, and have more effect than a whole week of work.",
          ],
        },
        {
          kind: 'image',
          src: '/assets/como-conseguir-un-ascenso-productiva-en.webp',
          alt: 'Two-panel comic in the style of the "she thinks / he thinks" meme. On the left, a smiling woman surrounded by screens, sticky notes and a to-do list that reaches the floor: "Her: I\'m the most productive person in this company". On the right, her boss, hands on his head, stares at a red chart plummeting on his screen: "Her boss: Why is nobody looking at this?"',
          width: 1200,
          height: 669,
        },
        {
          kind: 'p',
          text: [
            "The woman in the comic is what I call Cinderella. Her boss trusts her: he knows she'll get everything done. But because she always delivers and never makes a fuss, nobody moves her from where she is. I tell the whole story in ",
            { text: 'I feel undervalued at work', href: '/en/recursos/i-feel-undervalued-at-work/' },
            '.',
          ],
        },
      ],
    },
    {
      kind: 'contrast',
      heading: 'The shifts that make the jump',
      intro: [
        "There's no single big change. There are several small ones, and they all go in the same direction: from doing your job well to making life easier for whoever makes the decisions.",
      ],
      labels: { lose: 'You lose', gain: 'You gain' },
      items: [
        {
          title: 'From the detail to the signals',
          lose: "You want to be across everything so you don't miss anything. You answer questions your team should be answering and you turn up to leadership meetings with the detail of every task.",
          gain: "You know what's going on without being in everything. You take your manager what they need to know, not everything you know.",
        },
        {
          title: 'From solving to deciding without all the information',
          lose: "You wait until everything is clear before you decide. Meanwhile, someone else makes the decision, or nobody does.",
          gain: 'You decide with the information you have, even if it\'s imperfect. A bad plan is better than no plan: a plan can be corrected.',
          link: {
            text: 'Fear of making mistakes at work',
            href: '/en/recursos/fear-of-making-mistakes-at-work/',
          },
        },
        {
          title: 'From your team to your manager',
          lose: 'Your job is to protect your team. Your manager is someone you report to.',
          gain: "Your manager is your client. Which problem are you taking off their plate this week? Nobody lets go of the person who makes their life easier.",
        },
        {
          title: 'From asking permission to saying what you\'ll do',
          lose: '"Do you think I should go to this meeting?" "What exactly is my role here?" You put the decision in someone else\'s hands.',
          gain: '"I want to handle this like this. Do you see any problem with that?" You say what you\'ll do, and ask for objections.',
          link: {
            text: "Promised a promotion and didn't get it",
            href: '/en/recursos/promised-a-promotion-and-didnt-get-it/',
          },
        },
        {
          title: "From proving what you know to not needing to prove it",
          lose: "You explain every decision in full detail so everyone can see you've thought it through.",
          gain: "You give the answer and stop talking. If they want to know more, they'll ask.",
          link: {
            text: 'How to have authority at work',
            href: '/en/recursos/how-to-have-authority-at-work/',
          },
        },
      ],
    },
    {
      kind: 'text',
      paragraphs: [
        [
          "All of this has a name you've probably heard in a review: ",
          { text: 'executive presence', href: '/en/recursos/executive-presence/' },
          ". It's what makes other people see you in the next role before you've got it.",
        ],
      ],
    },
    {
      kind: 'blocks',
      heading: 'Your peers have a say too',
      blocks: [
        {
          kind: 'p',
          text: [
            "Your promotion isn't decided by your manager alone. It's almost always discussed in a room with their peers, and you're not in it. What those people think of you carries a huge amount of weight.",
          ],
        },
        {
          kind: 'p',
          text: [
            "And you have no authority over them. What you have is a relationship. And a working relationship is about helping each other: understanding what problems your peers have, seeing whether what you're doing helps them or not, keeping them in the loop and asking them for feedback. And the other way round: knowing what they can help you with.",
          ],
        },
        {
          kind: 'p',
          text: [
            "I picture it as a piggy bank: every time you understand someone's problem and help them with it, you drop in a coin. The day you need something, the piggy bank is full.",
          ],
        },
        {
          kind: 'p',
          text: [
            "A quick test: do you know what each of your peers is most worried about right now? If you don't, that relationship is cooling off and you haven't noticed yet.",
          ],
        },
        {
          kind: 'p',
          text: ['Two coins that really help the other person:'],
        },
        {
          kind: 'list',
          items: [
            [
              { text: 'Ask them before you start.', strong: true },
              ' When you\'re about to kick off a project that affects them, ask for their opinion first: "I\'m about to start on this. Does it solve anything for you, or am I missing what you\'re really worried about?" That way you check you\'re tackling a problem that actually exists, and the project becomes a little bit theirs.',
            ],
            [
              { text: 'Include them.', strong: true },
              ' If you send a weekly update on your project, don\'t wait for your manager to forward it: "Hey, I send an email every week on how this is going. Do you want me to add you?" And tell them what they get out of the project, not just how it\'s going.',
            ],
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'Where to start',
      blocks: [
        {
          kind: 'list',
          items: [
            [
              { text: 'Look at the people who already have that role.', strong: true },
              " Before anything else, watch the people who are directors in your company today. What do they do? How do they speak in meetings? Why are they valued? Being a director at one company isn't the same as at another, or in engineering as in marketing. Whatever gets rewarded in yours is what you need to learn to show.",
            ],
            [
              { text: 'Start an impact log.', strong: true },
              ' One line for each thing you do: what you did, what your role was and what impact it had. And share it with your manager.',
            ],
            [
              { text: 'Say it out loud.', strong: true },
              ' To your manager and to their peers too: "I\'m thinking about going for this role. How do you see me? What advice would you give me?" And take what they tell you very seriously. The more people who know, the better.',
            ],
            [
              { text: 'Follow up.', strong: true },
              ' With your manager: "I\'m keeping everything I do in here, so you\'ve got ammunition when you need to make my case. Is anything missing?" With whoever gave you feedback, a few weeks later: "Remember what you told me? I\'ve been working on it like this. Have you noticed the change?"',
            ],
          ],
        },
        {
          kind: 'p',
          text: [
            "This way they become part of your team: your goal becomes a little bit theirs too. And when they're in that room talking about promotions without you, they're more likely to take your side.",
          ],
        },
      ],
    },
  ],
  faqHeading: 'Frequently asked questions',
  faq: [
    {
      question: 'How do you ask your manager for a promotion?',
      answer: [
        [
          "Don't ask for it as a favour or as a reward for what you've already done. Frame it looking forward: \"I want to become a director. What would you need to see in me to be sure?\" And suggest reviewing it together every few months, with your impact log in front of you. That way the promotion stops being a once-a-year conversation.",
        ],
      ],
    },
    {
      question: 'Do I have to know more than my team to be a director?',
      answer: [
        [
          "No. At this level your job isn't to be the expert. It's to manage the people who are, and to make sure the good ideas get off the ground.",
        ],
      ],
    },
    {
      question: "What if I was promised it and it doesn't happen?",
      answer: [
        [
          'It happens a lot. The first thing is to name the gap, without accusing anyone: "You told me this cycle was the one, and it hasn\'t happened. What\'s changed?"',
        ],
        [
          'I go into it in more detail in ',
          {
            text: "promised a promotion and didn't get it",
            href: '/en/recursos/promised-a-promotion-and-didnt-get-it/',
          },
          '.',
        ],
      ],
    },
    {
      question: 'Can you work on this with a mentor?',
      answer: [
        [
          'Yes. In the ',
          { text: 'Executive presence', href: '/en/programas/presencia-ejecutiva/' },
          " programme we work on exactly this jump: which signals you're sending today and which ones you need to send so people see you in the next role.",
        ],
        [
          "If you're not sure it's for you, book the ",
          { text: 'free 15-minute diagnostic', href: DIAGNOSTIC },
          ". And if you'd like your company to pay for it, here's ",
          { text: 'how to ask', href: '/en/recursos/how-to-ask-your-company-to-pay-for-mentoring/' },
          '.',
        ],
      ],
    },
  ],
}

export default article
