import type { Article } from './types'

const DIAGNOSTIC = 'https://cal.com/yaiza-temprado/diagnostic-session'

// English version of the Spanish article approved on 13-sep-2026. Same copy
// minus the FUNDAE question, which only applies in Spain. Edit with Yaiza's OK.
const article: Article = {
  slug: 'que-lo-pague-tu-empresa',
  locale: 'en',
  published: '2026-09-13',
  tag: 'Companies',
  title: 'How to ask your company to pay for your mentoring',
  description:
    'Asking for it as personal development is the fastest way to get a no. How to put it, what your company gets, and how invoicing works.',
  cardCta: 'Read',
  intro: [
    [
      "Maybe you've thought about doing mentoring sessions. You've realised that with someone at your side you could move faster, grow more or get to the role you're after sooner. Or maybe your manager isn't helping you grow as much as you'd like.",
    ],
    ["What you don't know is how to turn that need of yours into something your company will back."],
    ['It can be done. But a lot depends on how you ask.'],
  ],
  sections: [
    {
      kind: 'text',
      heading: 'The mistake that gets you a no',
      paragraphs: [
        ['Asking for it as personal development.'],
        [
          '"I\'d like to grow as a leader." "I think it would do me good." "I want to keep learning." All true. And the answer is the classic "let\'s talk about it at your next review".',
        ],
        [
          "Look, your manager thinks your growth is great. But what they'll pay for is fixing something that's causing them problems right now.",
        ],
        [
          "And there's plenty to fix. That Tuesday meeting nobody ever leaves with a decision. The committee where you present and the conversation carries on as if you hadn't said a word. Or the team that keeps going because you keep it going, and stops the moment you go on holiday.",
        ],
      ],
    },
    {
      kind: 'text',
      heading: 'What mentoring is really for',
      paragraphs: [
        [
          'Exactly that. In mentoring you learn frameworks and tools to work on those underlying problems, the ones that make your team or your department perform below what it could.',
        ],
        [
          "It makes you, as a leader, a more powerful tool inside your company. So that's what you ask for: what will change in your team when you're done. Your own growth comes included.",
        ],
      ],
    },
    {
      kind: 'cards',
      heading: 'What your company gets',
      intro: [
        "Look at the problems around you. Which one hurts your manager the most? That's where they'll see fastest what they get out of this mentoring.",
      ],
      cards: [
        {
          title: 'Meetings that decide',
          body: 'You walk in with a position, steer the conversation to the point and leave with a decision, an owner and a date. Your manager has sat through plenty of the other kind. They know what they cost.',
        },
        {
          title: 'Less noise upward',
          body: "You tell them how things stand in three lines, escalate in time and give them fewer surprises. It's what they ask of everyone and almost nobody delivers.",
        },
        {
          title: "A team that doesn't hang on one person",
          body: "You delegate for real and the pace holds without depending on whoever lasts longest. Nobody burns out, and the company doesn't lose someone it has already invested in.",
        },
        {
          title: 'Applied the following week',
          body: 'No theory to file away in a drawer. Every session ends with an action on a real problem, and in the next one we look at what happened.',
        },
      ],
    },
    {
      kind: 'text',
      heading: 'The budget exists and almost never gets spent in full',
      paragraphs: [
        [
          'Most companies have a budget for training their people. And the vast majority close the year with part of it untouched, because nobody asks for it.',
        ],
        [
          "So be clear: you're not asking for a favour. You're putting your hand up for money that's already been budgeted.",
        ],
        [
          'And when you raise it, send them this: ',
          { text: 'the page for companies', href: '/en/empresas/' },
          ". In two minutes they'll see what it is, what their team gets and what it costs.",
        ],
      ],
    },
  ],
  faqHeading: 'Frequently asked questions',
  faq: [
    {
      question: "I'm not sure this is for me.",
      answer: [
        [
          "That's normal. A lot of people don't really know what to expect from mentoring. What we do is work on your specific situation, your team, your manager and your company, so you come away with the tools you need to navigate it and grow professionally.",
        ],
        [
          "If you find it hard to communicate or position yourself, or you've been thrown into a manager role and nobody taught you how to do it, let's talk. That's what the ",
          { text: 'free 15-minute diagnostic', href: DIAGNOSTIC },
          " is for: we'll see whether this is the solution you need or not.",
        ],
      ],
    },
    {
      question: 'Can you invoice the company?',
      answer: [['Yes. With VAT itemised and the line item “Executive mentoring: leadership and communication”.']],
    },
    {
      question: 'None of your programmes fits what we need. What do we do?',
      answer: [
        [
          'Then we talk. ',
          { text: 'Your first 90 days leading', href: '/en/programas/primeros-90-dias/' },
          ' and ',
          { text: 'Executive presence', href: '/en/programas/presencia-ejecutiva/' },
          ' are the two people ask me for most, but we can easily put together one tailored to what you need.',
        ],
        [
          'Write to me or book the ',
          { text: 'free 15-minute diagnostic', href: DIAGNOSTIC },
          " and we'll look at it.",
        ],
      ],
    },
  ],
}

export default article
