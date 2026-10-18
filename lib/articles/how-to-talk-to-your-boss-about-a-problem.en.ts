import type { Article } from './types'

const DIAGNOSTIC = 'https://cal.com/yaiza-temprado/diagnostic-session'

// English copy of como-hablar-con-tu-jefe-de-un-problema, approved by Yaiza on
// 18-oct-2026 (she asked for it published without reviewing the English). Edit
// with her OK.
const article: Article = {
  slug: 'how-to-talk-to-your-boss-about-a-problem',
  translationOf: 'como-hablar-con-tu-jefe-de-un-problema',
  locale: 'en',
  published: '2026-10-18',
  tag: 'Executive presence',
  title: 'How to talk to your boss about a problem (before it blows up)',
  socialImage: { src: '/assets/como-hablar-con-tu-jefe-1-3-1-en-og.jpg', width: 1200, height: 628 },
  description:
    'How to talk to your boss about a problem: raise the risk early, with a plan to mitigate it, and when something outside your control happens, bring options and a recommendation.',
  cardCta: 'Read',
  intro: [
    [
      "A project that looks like it's going to slip. Maybe it will, maybe it won't. So you say nothing: you push harder, speed up, try to get it back on track without anyone noticing.",
    ],
    [
      "Weeks go by and, finally, it's clear: it's going to be late. That's when you tell your manager. But you're not telling them about a risk any more. You're telling them about something that's going to happen. And there's no time left to react.",
    ],
    [
      "What started as not wanting to worry them, or as fixing it yourself without anyone seeing, has turned into a ticking time bomb. And it's gone off in their hands.",
    ],
  ],
  sections: [
    {
      kind: 'blocks',
      heading: 'Why we keep quiet',
      blocks: [
        { kind: 'p', text: ["It's almost never bad faith. It's things like these:"] },
        {
          kind: 'list',
          items: [
            [{ text: "You don't want to worry them", strong: true }, " about something that might not even happen."],
            [
              { text: 'You think you can fix it without anyone seeing.', strong: true },
              " And if you fix it, nobody needs to know it nearly went wrong.",
            ],
            [
              { text: "You're afraid they'll think you can't handle it.", strong: true },
              ' Telling them feels like admitting a mistake.',
            ],
            [
              { text: "You don't feel like having the conversation.", strong: true },
              ' So you keep putting it off until next week.',
            ],
          ],
        },
        {
          kind: 'p',
          text: [
            "Let me tell you how it looks from the other side, because I spent many years being the manager in that conversation. What bothers me isn't that a project is late. That happens. What bothers me is finding out when I can no longer do anything about it: no moving people around, no warning the people who depend on us, no changing the scope. You've taken my options away.",
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'Raise the risk, not the problem',
      blocks: [
        {
          kind: 'p',
          text: [
            "Look, this doesn't mean telling your manager every little thing that worries you. What works is raising risks early, while they're still risks.",
          ],
        },
        { kind: 'p', text: ['You raise a risk with three things:'] },
        {
          kind: 'list',
          items: [
            [{ text: 'What could happen.', strong: true }, ' "The launch might not make it for March."'],
            [
              { text: 'Why.', strong: true },
              ' "We depend on the payments team finishing their part, and they\'re behind."',
            ],
            [
              { text: "What you're doing to stop it happening.", strong: true },
              ' The mitigation plan. "I\'ve spoken to their lead, we\'ve prioritised what\'s blocking us and in two weeks we\'ll know if they\'ll make it."',
            ],
          ],
        },
        {
          kind: 'p',
          text: [
            'Then, every week, one line of follow-up: "This risk is being managed. For now we\'re doing this, this and this. It\'s under control, I\'ll keep you posted."',
          ],
        },
        {
          kind: 'p',
          text: [
            "Notice what changes. If the risk doesn't materialise, nothing has happened: your manager has seen someone who had the situation under control. And if it does materialise, they've known for weeks, they've been able to react and it doesn't catch them by surprise.",
          ],
        },
        { kind: 'p', text: ["That's very different from saying nothing, saying nothing, saying nothing… until it blows up."] },
      ],
    },
    {
      kind: 'blocks',
      heading: "When something outside your control happens: options and a recommendation",
      blocks: [
        {
          kind: 'p',
          text: [
            "Sometimes the risk materialises and there was nothing you could have done to prevent it. Two people get taken off your team, the budget gets cut, a priority changes from above.",
          ],
        },
        {
          kind: 'p',
          text: [
            "When that happens, don't complain and don't put up with it in silence while you try to do everything. Show the options there are, each with its consequence, say which one you recommend and let your manager decide, seeing what each path involves.",
          ],
        },
        {
          kind: 'p',
          text: ['If you want a structure to organise it, I really like using ', { text: 'the 1-3-1:', strong: true }],
        },
        {
          kind: 'list',
          items: [
            [{ text: '1 problem:', strong: true }, " why we're talking about this."],
            [{ text: '3 options:', strong: true }, ' with what each means for cost, risk, impact, and so on.'],
            [{ text: '1 recommendation', strong: true }, ' and why.'],
          ],
        },
        {
          kind: 'image',
          src: '/assets/como-hablar-con-tu-jefe-1-3-1-en.webp',
          alt: 'Diagram of the 1-3-1: "The problem" ("Why we\'re talking about this") branches into Option 1, Option 2 and Option 3, each with "cost · risk · impact", and an arrow runs from Option 1 to "Your recommendation": "Which one you\'d pick and why. Your boss decides."',
          width: 1200,
          height: 520,
        },
        { kind: 'p', text: ['For example, two people get taken off your team:'] },
        {
          kind: 'list',
          items: [
            {
              text: [{ text: 'Option 1: reduce the scope.', strong: true }],
              items: [
                ["Pros: we hit the date with the team we have left and we don't need to change anything else."],
                ['Cons: these two features are left out until next quarter.'],
              ],
            },
            {
              text: [{ text: 'Option 2: hire two people.', strong: true }],
              items: [
                ['Pros: we deliver everything we promised.'],
                [
                  'Cons: the cost of two more salaries, and a risk of delay because of how long it takes to hire and to get new people up to speed.',
                ],
              ],
            },
            {
              text: [{ text: 'Option 3: bring in two people from another department for a few weeks.', strong: true }],
              items: [['Pros: we keep the date and the scope.'], ['Cons: that department pushes back one of its deliverables.']],
            },
            [
              { text: 'My recommendation:', strong: true },
              " the first one. What's left out can wait, and the other two cost more than they save: money and time in the second, another team's work in the third.",
            ],
          ],
        },
        {
          kind: 'p',
          text: [
            "If you choose on your own and say nothing (for example, cutting scope without telling anyone), you're making a decision that isn't yours to make, and your manager finds out once it's already been made. They might agree… or they might not.",
          ],
        },
        {
          kind: 'p',
          text: [
            'And frame it around what matters to them, not around your problem. "The team is swamped" lands as a complaint. "If we don\'t do anything, the launch won\'t make it" lands as something that affects them.',
          ],
        },
      ],
    },
    {
      kind: 'text',
      heading: 'The same goes for your own issues',
      paragraphs: [
        ['Your salary, for example.'],
        [
          "You're unhappy with your salary and you say nothing. Time goes by. You say nothing. You assume your manager knows you're not happy. You say nothing. Your manager doesn't know.",
        ],
        [
          "Then one day an offer comes in from another company that pays you more, and you leave. Maybe your manager could have done something, but they didn't even get the chance to react.",
        ],
        [
          'It\'s the same pattern: I don\'t want to have the conversation… until it blows up. And the fix is the same too: say it while it\'s still a risk. "I\'d like to talk to you about my salary. I\'d rather tell you now than when it\'s too late."',
        ],
      ],
    },
  ],
  faqHeading: 'Frequently asked questions',
  faq: [
    {
      question: "Won't I overwhelm my manager if I tell them about every risk?",
      answer: [
        [
          "Not every risk. The ones that could affect something they care about: a committed date, a client, the budget, the team. The ones you can solve yourself without any of that moving, solve them. Being able to tell one from the other is exactly what's called ",
          { text: 'judgement', strong: true },
          ' in ',
          { text: 'executive presence', href: '/en/recursos/executive-presence/' },
          '.',
        ],
      ],
    },
    {
      question: "What if I'm afraid they'll think I can't handle it?",
      answer: [
        [
          "Raising a risk along with a plan to mitigate it is the exact opposite of not being able to handle it. What makes you look like you can't is something blowing up on them that you saw coming and didn't mention.",
        ],
      ],
    },
    {
      question: "What if my manager doesn't listen?",
      answer: [
        [
          "First, check the why: did you tell them about the risk to them, or about your problem? Often it's not that they're ignoring you. They just haven't seen why it should matter to them.",
        ],
        [
          "If they still don't react, put the risk in writing: what could happen, when, and what you propose. You're not doing it to cover yourself. You're doing it so that doing nothing becomes a decision, not something that slipped through the cracks.",
        ],
      ],
    },
    {
      question: 'Can you work on this with a mentor?',
      answer: [
        [
          'Yes. In the ',
          { text: 'Executive presence', href: '/en/programas/presencia-ejecutiva/' },
          ' programme we prepare your real conversations with your manager: what you take up, when, and how you tell it.',
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
