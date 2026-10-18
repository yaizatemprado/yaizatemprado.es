import type { Article } from './types'

const DIAGNOSTIC = 'https://cal.com/yaiza-temprado/diagnostic-session'

// English copy of presencia-ejecutiva, approved by Yaiza on 18-oct-2026. The
// text lives in the vault, proyectos/optimizacion-seo/paginas/
// 2026-10-18-borrador-executive-presence.md. The drops link to their child
// pages like the Spanish copy (the fifth one doesn't, there either). Edit with her OK.
const article: Article = {
  slug: 'executive-presence',
  translationOf: 'presencia-ejecutiva',
  locale: 'en',
  published: '2026-10-18',
  tag: 'Executive presence',
  title: 'I was told I lack executive presence. Now what?',
  seoTitle: "Executive presence: what it is and what to do if you're told you lack it",
  socialImage: { src: '/assets/presencia-ejecutiva-rey-arturo-en-og.jpg', width: 1200, height: 654 },
  description:
    "What executive presence is, why \"you lack executive presence\" doesn't tell you what to do, where you lose it day to day and what to do when you're told.",
  cardCta: 'Read',
  intro: [
    [
      "It comes up in your performance review. Or in a feedback session with your manager. Or right when you bring up that you're due a promotion: \"You're not ready for the next level yet. You need to work on your executive presence.\"",
    ],
    [
      "You don't ask anything else, but you don't really get what just happened either. You keep going over it. Do I need to speak up more in meetings? Change who I am? Do more networking? What exactly am I missing?",
    ],
    [
      "It happened to me, and for a long time I didn't understand what they meant. I was missing \"something\", but it's very hard to improve something you can't describe.",
    ],
    [
      'So I did the only thing I could think of: ask and observe. I asked other people in the organisation for feedback. I watched the people around me who, to me, had that presence. How they communicated. When they spoke and when they didn\'t. How they behaved when something went wrong. And, above all, how the rest of the room reacted when they spoke.',
    ],
    [
      'I became an expert at watching other people. And what I saw was a lot more concrete than "executive presence".',
    ],
  ],
  sections: [
    {
      kind: 'blocks',
      heading: "Why that phrase doesn't help you",
      blocks: [
        {
          kind: 'p',
          text: [
            "Because it sounds binary: you either have it or you don't. And nobody tells you what it's made of, or how you get it.",
          ],
        },
        {
          kind: 'image',
          src: '/assets/presencia-ejecutiva-rey-arturo-en.webp',
          alt: 'Comic panel: in a castle hall, a king with a crown and a red cape touches the shoulder of a kneeling woman in armour with his sword and says "Now you have executive presence."',
          width: 1200,
          height: 654,
        },
        {
          kind: 'p',
          text: ['Look, the phrase is so vague because it lumps together a lot of small things:'],
        },
        {
          kind: 'list',
          items: [
            ["How you express yourself: your tone, the words you choose and the ones you don't need."],
            ['How you present an idea, and whether you come with a recommendation or with a menu of options.'],
            ['What your body says while you speak, and while others speak.'],
            ['When you speak up and when you stay quiet.'],
            ['How you talk about your work: in tasks, or in what it brings to the business.'],
            ["How you influence decisions that aren't yours."],
            ['How you move around the people who make decisions, in meetings and outside them.'],
            ['How you react when something goes wrong. And when it goes right.'],
            ['Your judgement: which problems you take to your manager and which ones you solve without escalating.'],
            ['How you hold a disagreement with someone more senior.'],
          ],
        },
        {
          kind: 'p',
          text: [
            "And quite often, the person telling you can't quite pin it down either. They can tell something's missing, but they can't name it.",
          ],
        },
      ],
    },
    {
      kind: 'text',
      heading: 'What it is, in plain terms',
      paragraphs: [
        [
          "If I had to give you a definition that's actually useful: executive presence is how much weight your words carry in the room where decisions get made.",
        ],
        ["You don't lose that weight all at once. But you don't gain it all at once either."],
        [
          'I picture it as a glass of water. Everything you do is a little drop: how you contribute in a meeting, how you position yourself, how you speak, how you carry yourself. Some drops add water to the glass and some take it out. And how full it is shapes how senior people think you are.',
        ],
        [
          'One drop on its own goes unnoticed. So do ten. But ten a day, every day, and the glass fills up or empties out.',
        ],
        ['So the work has two parts: stop losing drops and start gaining them.'],
      ],
    },
    {
      kind: 'contrast',
      heading: 'Where your drops go',
      intro: ['There are loads. These are five of the ones I see most in mentoring.'],
      labels: { lose: 'You lose', gain: 'You gain' },
      items: [
        {
          title: 'Handing the question to the most senior person',
          lose: "Someone asks you, and you let your manager answer, or the person with the biggest title in the room. To you it feels like respect. What everyone else sees is that you don't count in that room, and the next question goes straight past you.",
          gain: 'You answer. Even if it\'s "Let me look into it and get back to you tomorrow."',
          link: { text: 'How to speak up in meetings', href: '/en/recursos/how-to-speak-up-in-meetings/' },
        },
        {
          title: 'Explaining what nobody asked',
          lose: "You give an answer and then three reasons nobody asked for. It looks like you're justifying yourself, and every justification takes weight away from what you've just said.",
          gain: "You give the answer and stop. Don't fill the silence! If they want to know why, they'll ask.",
          link: { text: 'How to have authority at work', href: '/en/recursos/how-to-have-authority-at-work/' },
        },
        {
          title: 'Taking problems up with no proposal, or taking them all up',
          lose: "You bring your manager a problem and wait for them to decide. Or you bring them every problem, even with a solution. Either way, what they take from it is that you can't yet tell what deserves their time.",
          gain: "Judgement. You solve what's yours, and what you take up comes with a recommendation.",
          link: { text: 'How to talk to your boss about a problem', href: '/en/recursos/how-to-talk-to-your-boss-about-a-problem/' },
        },
        {
          title: 'Reacting to everything with a lot of emotion',
          lose: 'Bad news knocks you off balance and it shows. Good news sets you off just the same. If you react strongly to everything, it looks like things get the better of you.',
          gain: "Composure. You take things seriously, good and bad, but you stay calm. Managing your own emotions is what lets you manage other people's.",
          link: { text: 'How to manage emotions at work', href: '/en/recursos/how-to-manage-emotions-at-work/' },
        },
        {
          title: 'Talking about your work in tasks',
          lose: "You explain everything you've done, step by step. The person listening remembers the effort and forgets the result.",
          gain: 'You talk about it in terms of business impact: what has changed, and how much time, money or risk it has saved.',
        },
      ],
    },
    {
      kind: 'text',
      heading: "What to do when you're told",
      paragraphs: [
        [
          'First, ask for examples. In the moment, if you can: "Do you mean I don\'t speak up much in meetings? The way I express myself? Can you give me a specific example?"',
        ],
        [
          "If they can't give you one there and then, don't let it go. Ask them to flag it next time: \"When you notice it again, will you tell me in the moment?\" (And if it happens again with no example, you ask again.)",
        ],
        ["Don't stop until you can go back to your desk knowing what you'll do differently on Monday."],
        [
          "Ask more people for feedback. Not just your manager: other leaders in the company, people at their level, anyone who's seen you present or take part in a meeting. They've each formed a picture of how you work, and they each see a different part of it.",
        ],
        [
          'And observe. Watch the people who, to you, have executive presence, or who are already in the role you want to get to. How they speak, when, what they do when someone pushes back. And how the people around them react.',
        ],
      ],
    },
  ],
  faqHeading: 'Frequently asked questions',
  faq: [
    {
      question: 'Are you born with executive presence?',
      answer: [
        [
          "No. If it were a trait, you wouldn't have it in one meeting and lose it in the next. And that happens: there are rooms where you speak completely at ease and others where you struggle to be heard. It's tactics and habits. Tactics can be learned. Habits can be changed.",
        ],
      ],
    },
    {
      question: 'Is it the same as being good at public speaking?',
      answer: [
        [
          'No. Public speaking is a small part of it. Some people nail it on stage and then lose all their weight in a six-person meeting the moment someone more senior walks in.',
        ],
      ],
    },
    {
      question: 'Can you work on it with a mentor?',
      answer: [
        [
          "Yes. That's what the ",
          { text: 'Executive presence', href: '/en/programas/presencia-ejecutiva/' },
          " programme is for: six sessions on your real meetings, your stakeholders, your conversations and your company, starting with where you're losing authority without realising it.",
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
