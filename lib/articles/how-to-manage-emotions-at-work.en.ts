import type { Article } from './types'

const DIAGNOSTIC = 'https://cal.com/yaiza-temprado/diagnostic-session'

// English copy of como-gestionar-las-emociones-en-el-trabajo, approved by Yaiza
// on 18-oct-2026 (she asked for it published without reviewing the English).
// Edit with her OK.
const article: Article = {
  slug: 'how-to-manage-emotions-at-work',
  translationOf: 'como-gestionar-las-emociones-en-el-trabajo',
  locale: 'en',
  published: '2026-10-18',
  tag: 'Executive presence',
  title: 'How to manage emotions at work',
  socialImage: { src: '/assets/como-gestionar-las-emociones-cisne-en-og.jpg', width: 1200, height: 628 },
  description:
    'How to manage emotions at work: what your reaction costs your manager and your team, and what to do in the moment to keep your composure, like the swan.',
  cardCta: 'Read',
  intro: [
    [
      "You're in a meeting and you find out your project has been stopped. Nobody told you before. It shows on your face, you answer more sharply than you meant to, and for the rest of the meeting you're not really there.",
    ],
    [
      "Or the other way round. You get some good news, still unconfirmed, and you walk out of the meeting telling everyone as if it were already a done deal. Two weeks later it falls through, and you have to take it back in front of everyone.",
    ],
    [
      "Both scenes are the same thing: something happens and your reaction moves faster than you do. And what the people around you see is that things get to you. Too much.",
    ],
  ],
  sections: [
    {
      kind: 'text',
      heading: 'What your manager sees (and your team)',
      paragraphs: [
        [
          "Look at it in terms of what it's costing you. On top of having a horrible time, picture how the people around you see your reaction. For example, if your manager knows you're going to take something personally, they stop asking for your input.",
        ],
        [
          "They don't do it to punish you. They do it because telling you things is a hassle: they have to work out how to say it, when, and then deal with your reaction. So they make the next decision without you. And you find out, once again, in a meeting.",
        ],
        [
          "And it doesn't only happen upwards. It happens sideways and, above all, downwards. There's nothing worse than someone on your team telling you about a problem and your reaction being to get really angry or to panic. Next time, they won't tell you.",
        ],
        [
          "Same with uncertainty. When nobody above you really knows what's going to happen, the temptation is to pass it on to your team exactly as it is. But everything gets amplified on the way down. If you're nervous, your team is hysterical. If you're angry, your team is furious. If you don't know where you're going, your team runs around like headless chickens.",
        ],
        [
          "It's one of the drops I talk about in ",
          { text: 'executive presence', href: '/en/recursos/executive-presence/' },
          '. What you want is ',
          { text: 'composure', strong: true },
          ": you take things seriously, good and bad, but calmly. Without turning to stone. Because being able to manage your own emotions is what lets you manage other people's.",
        ],
      ],
    },
    {
      kind: 'blocks',
      heading: 'Like a swan',
      blocks: [
        {
          kind: 'p',
          text: [
            'One day, out of the blue, the team messages me: "Hey, Yaiza, can you jump on a call?" It was a bit odd for them to call me at that time, so I said yes straight away. I join and they all have faces like someone had died. And I go: "Oh my God, what\'s happened?"',
          ],
        },
        {
          kind: 'p',
          text: [
            '"We\'ve made a mistake." A mistake that couldn\'t be undone, that left a very important client without service, and that we wouldn\'t be able to fix until three days later.',
          ],
        },
        {
          kind: 'p',
          text: [
            'I went quiet for a moment. And my reaction was: "OK, guys, first of all, let\'s breathe. Nobody\'s died. Let\'s see what we can do today and how we handle it."',
          ],
        },
        {
          kind: 'p',
          text: [
            'I watched the tension drop all at once, right in front of me. I don\'t know if they thought I was going to start shouting. Or fire people. And that had frozen them: the situation was so big they didn\'t know where to start. When they saw nobody was going to shout at them or fire them, we could start talking. "Right, let\'s make a plan: what\'s the first thing we need to do?"',
          ],
        },
        {
          kind: 'list',
          items: [
            ['"I\'ll email the client."'],
            ['"I\'ll talk to customer support."'],
            ['"I\'ll start working on the script we\'ll use in three days\' time, to get ahead on the fix."'],
          ],
        },
        { kind: 'p', text: ['In 15 minutes we had a mitigation plan.'] },
        {
          kind: 'p',
          text: [
            "For me, that call is the swan. Seen from above, it glides along completely calm. If you look from below, its little feet are paddling flat out. It's the picture that comes to mind whenever I talk about composure at work.",
          ],
        },
        {
          kind: 'image',
          src: '/assets/como-gestionar-las-emociones-cisne-en.webp',
          alt: 'A swan glides calmly while problems pop up all around it ("There\'s a problem!", "The project\'s going to slip!", "We\'re losing two people!", "So when will this be done?"). Under the water, its feet are paddling flat out: "FLAP FLAP FLAP!"',
          width: 1200,
          height: 669,
        },
        {
          kind: 'p',
          text: [
            "Mind you, the swan does move its feet. Calm isn't sitting still and waiting to see what happens. That time we waited the three days we had to wait, yes, but with a plan. First, everyone got to breathe. And then, we worked out what to do.",
          ],
        },
        {
          kind: 'p',
          text: [
            "On the outside, the feeling that everything is under control. Underneath, you're managing: you flag the risks, you get the options ready, you talk to whoever you need to talk to. I go into it in ",
            { text: 'how to talk to your boss about a problem', href: '/en/recursos/how-to-talk-to-your-boss-about-a-problem/' },
            '.',
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'What to do in the moment',
      blocks: [
        {
          kind: 'list',
          items: [
            [
              { text: 'Buy yourself time.', strong: true },
              ' You don\'t have to react right now. "Let me think about it and I\'ll get back to you tomorrow" is a perfectly good answer, and it gives you the night to separate what happened from how you feel.',
            ],
            [
              { text: "Remember it's a job.", strong: true },
              " Most of us aren't saving lives: we run projects, write emails, sit in meetings. Don't treat everything as if your life depended on it.",
            ],
            [
              { text: 'Step back a little.', strong: true },
              " Given the situation you're in, what are the options? What does each one involve? Your job is to lay them out. The decision belongs to whoever has to make it. You can care a lot, but you can't care more than your manager does.",
            ],
            [
              { text: "Let go of what you can't control.", strong: true },
              " Each level sees part of the puzzle, not the whole thing. Sometimes decisions get made above you that you don't understand or that bother you. You can ask for more context, try to understand them, challenge them. But once the decision is made, it's time to focus on how it affects your team and what options you have.",
            ],
            [
              { text: 'Take the responsibility that is yours, no more and no less.', strong: true },
              " If a project that doesn't depend only on you goes wrong, it isn't your personal failure. What is on you is saying what's going on in time.",
            ],
            [
              { text: 'Same with good news.', strong: true },
              " Celebrate it, of course. But share it when it's a fact, not when it's a promise.",
            ],
          ],
        },
      ],
    },
  ],
  faqHeading: 'Frequently asked questions',
  faq: [
    {
      question: 'How do you stop taking things personally at work?',
      answer: [
        [
          "Ask yourself whose decision it is. Almost everything that hurts at work is someone else's decision, made with the information and priorities they had. It isn't against you, even if it affects you. And if it really is against you, that doesn't get fixed with a heated reaction, but with a conversation once you've cooled down.",
        ],
      ],
    },
    {
      question: 'What if I start crying at work?',
      answer: [
        [
          'It happens, and to far more people than you think. If it happens in a meeting, ask for a moment without explaining: "Give me five minutes and we\'ll carry on." Step out, breathe and come back. And if whatever set it off matters, pick it up again later, calmly, with the right person.',
        ],
      ],
    },
    {
      question: 'How do you stay calm in a work meeting?',
      answer: [
        [
          "Pause before you answer. A few seconds of silence feel endless to you, but to the room it looks like you're thinking. And if you don't have the answer, or you're not in a state to give it, say so and come back with it later. I go into more detail in ",
          { text: 'how to speak up in meetings', href: '/en/recursos/how-to-speak-up-in-meetings/' },
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
          ' programme we look at your real situations: what stirs you up, how you react and what you do differently next time.',
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
