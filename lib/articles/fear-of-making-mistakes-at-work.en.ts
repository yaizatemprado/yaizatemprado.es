import type { Article, Block } from './types'

const DIAGNOSTIC = 'https://cal.com/yaiza-temprado/diagnostic-session'

/** A bold lead-in followed by its paragraph, as in "**Title.** Text". */
const point = (title: string, text: string): Block => ({
  kind: 'p',
  text: [{ text: title, strong: true }, ' ', text],
})

/** A sentence to say out loud, in italics, as the other pages quote them. */
const quote = (text: string): Block => ({
  kind: 'p',
  text: [{ text, em: true }],
})

// English copy of miedo-a-equivocarme-en-el-trabajo, approved by Yaiza on
// 18-oct-2026 (she asked for it published without reviewing the English).
// Edit with her OK.
const article: Article = {
  slug: 'fear-of-making-mistakes-at-work',
  translationOf: 'miedo-a-equivocarme-en-el-trabajo',
  locale: 'en',
  published: '2026-10-18',
  tag: 'Getting to director',
  title: 'Fear of making mistakes at work: how to decide without having it all figured out',
  socialImage: {
    src: '/assets/miedo-a-equivocarme-sabado-lunes-en-og.jpg',
    width: 1200,
    height: 628,
  },
  description:
    "If you're afraid of getting it wrong and can't quite decide: a bad plan beats no plan, set yourself a deadline, get the decision out of your head, and what to do if you've messed up.",
  cardCta: 'Read',
  intro: [
    [
      "You've got a decision on the table. It's not huge, but it matters. And you can't quite see it clearly. So you ask for one more piece of data. You talk it over with one more person. You leave it for Monday, when your head will be clearer. And on Monday you're no further on.",
    ],
    [
      "Meanwhile, the decision doesn't wait. Your manager ends up making it, or the calendar does, or nobody makes it and the problem gets bigger.",
    ],
    [
      'And the higher you go, the more it happens, because the decisions get bigger and the information is never complete.',
    ],
  ],
  sections: [
    {
      kind: 'text',
      heading: 'What changes as you move up',
      paragraphs: [
        [
          "As a manager, you've been valued for not failing: delivering on time, letting nothing slip, making sure everything goes well. That fear of getting it wrong has made you very good at your job.",
        ],
        [
          "But from a certain level on, what's expected of you is something else: TO DECIDE. With whatever information you have, even if it's imperfect. And that means you're sometimes going to get it wrong.",
        ],
        [
          'I talk about it in ',
          {
            text: 'how to get promoted to director',
            href: '/en/recursos/how-to-get-promoted-to-director/',
          },
          ": it's one of the shifts in thinking that show whether you're ready for the step up to director.",
        ],
      ],
    },
    {
      kind: 'blocks',
      heading: 'A bad plan beats no plan',
      blocks: [
        {
          kind: 'p',
          text: [
            "Let's start with the basics: it's better to have a plan, even a bad one, and change it later, than to have none. You can correct a plan. You can't correct having no plan.",
          ],
        },
        { kind: 'p', text: ['Notice the difference between these two sentences:'] },
        {
          kind: 'list',
          items: [
            ['"I\'m thinking of cancelling the workshop because I\'m not sure we\'re ready."'],
            ['"I\'m cancelling it for now, and I\'ll set a new date once we have A, B and C."'],
          ],
        },
        {
          kind: 'p',
          text: [
            "It's the same decision. But the first one sounds like someone who doesn't know what they're doing, and the second one like someone with a plan.",
          ],
        },
        {
          kind: 'p',
          text: [
            'And when you don\'t even have that, bring the plan for the plan: "This is what I\'m working on, this is the plan with the information we have today, and we\'ll refine it as we learn more."',
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'Clarity follows movement (not the other way round)',
      blocks: [
        {
          kind: 'p',
          text: [
            "My favourite line on this is: clarity follows movement, not the other way round. Because so often we wait until we can see it clearly before we start. But it's almost always the other way round: you start moving, and that's when things become clear. The information you were missing turns up, you see what works and what doesn't, and someone tells you what you didn't know.",
          ],
        },
        { kind: 'p', text: ["And if you've got it wrong, you pivot."] },
        point(
          "When you've got it wrong: pivot fast.",
          'I once proposed a change to my teams. I talked it through with everyone, convinced my manager and their manager, and even sent an email announcing it.',
        ),
        {
          kind: 'p',
          text: [
            'A few days later, someone on the team asked me for a bit of time and explained, point by point, why the change was a bad idea. They had information I didn\'t. And they were right.',
          ],
        },
        {
          kind: 'p',
          text: [
            'After swallowing my bruised ego, I reversed the change. And in every conversation I said the same thing: "New information has come up and, in light of that, this is the new approach."',
          ],
        },
        {
          kind: 'p',
          text: [
            'What would have really cost me was sticking with the wrong change so I didn\'t look bad.',
          ],
        },
      ],
    },
    {
      kind: 'text',
      heading: 'Set yourself a deadline to decide',
      paragraphs: [
        [
          "In a lot of cases, you won't get any more clarity just by waiting. Look, waiting feels prudent, but it hardly ever gives you the information you're missing: it just gives you more time to keep going over it. And often with your anxiety rising, because the decision is still sitting there, waiting.",
        ],
        [
          'So give it a date, and don\'t skip it. "I\'ll decide on Thursday." And on Thursday you decide with whatever information you have.',
        ],
      ],
    },
    {
      kind: 'blocks',
      heading: 'Get the decision out of your head',
      blocks: [
        {
          kind: 'p',
          text: [
            "We often try to decide with all the information inside our heads. And it doesn't fit: you go round in circles, the important stuff gets mixed up with what isn't, and every option looks equally bad.",
          ],
        },
        {
          kind: 'p',
          text: ['Once you put it on the table, that changes. I really like using the 1-3-1:'],
        },
        {
          kind: 'list',
          items: [
            [{ text: '1 problem:', strong: true }, ' what you need to decide, in one sentence.'],
            [
              { text: '3 options:', strong: true },
              ' with their pros, cons, risks and implications.',
            ],
            [{ text: '1 recommendation:', strong: true }, ' the one you choose and why.'],
          ],
        },
        {
          kind: 'p',
          text: [
            "With everything in front of you, it's much easier to see which decision is best. And if you have to take it to your manager, you've already got it ready. I go through it with an example in ",
            {
              text: 'how to talk to your boss about a problem',
              href: '/en/recursos/how-to-talk-to-your-boss-about-a-problem/',
            },
            '.',
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'Judge the decision by what you knew',
      blocks: [
        {
          kind: 'p',
          text: [
            "If three months from now you see a decision was wrong, don't beat yourself up. You made it with the information you had at the time.",
          ],
        },
        quote('"I made the best decision with the information I had."'),
        {
          kind: 'p',
          text: [
            "A decision isn't bad because it went wrong. It's bad if, with what you knew then, there was a clearly better option and you didn't see it.",
          ],
        },
        {
          kind: 'p',
          text: [
            "And think about how many decisions you make in a day. You're going to get some of them wrong. Don't get stuck on that one if you got all the others right.",
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: "Train the muscle with decisions that don't matter",
      blocks: [
        {
          kind: 'p',
          text: [
            'If you find deciding really hard in general, here\'s an exercise to build the muscle: train your ability to decide on things that have no consequences at all.',
          ],
        },
        {
          kind: 'list',
          items: [
            ["What you're going to eat at a restaurant."],
            ["What you're going to wear today."],
            ['Which series you start tonight.'],
          ],
        },
        {
          kind: 'image',
          src: '/assets/miedo-a-equivocarme-sabado-lunes-en.webp',
          alt: 'Two-panel comic. On the left, in a restaurant at night, a woman holding an open menu puts her hand to her forehead, unable to decide, while the waiter waits with his notepad, looking impatient: "If you can\'t decide on Saturday...". On the right, the same woman in a meeting room, with a document open and the same face, while three colleagues wait for her answer under the wall clock: "...you won\'t on Monday either".',
          width: 1200,
          height: 669,
        },
        { kind: 'p', text: ['Give yourself one minute. Not a second more. And whatever you pick, that\'s it.'] },
        {
          kind: 'p',
          text: [
            "Deciding is a muscle. And you don't train it on budget day, you train it with the restaurant menu.",
          ],
        },
      ],
    },
  ],
  faqHeading: 'Frequently asked questions',
  faq: [
    {
      question: 'How do I get over the fear of making mistakes at work?',
      answer: [
        [
          "Not by waiting for it to go away. The fear doesn't disappear before you decide: it eases afterwards, when you see that getting it wrong could be fixed. Give the decision a date, get it out of your head with the 1-3-1 and decide with what you have. And if you get it wrong, pivot early.",
        ],
      ],
    },
    {
      question: 'Why am I afraid of making decisions?',
      answer: [
        [
          "Almost always because you've been valued for years for not failing, and deciding without all the information feels a lot like risking failure. It isn't a flaw: it's a habit that has worked for you. The thing is, from a certain level on, it stops working.",
        ],
      ],
    },
    {
      question: "What if I've really messed up?",
      answer: [
        [
          "It's going to happen. Beat yourself up for 10 minutes at most, and then own it: say it yourself, before they hear it from someone else, and come with a plan to ",
          {
            text: 'mitigate the impact',
            href: '/en/recursos/how-to-talk-to-your-boss-about-a-problem/',
          },
          '. Something like ',
          {
            text: '"I\'m responsible for this mistake. This is the impact, and this is the plan to mitigate it."',
            em: true,
          },
          ' People who admit a mistake and get on with fixing it earn far more trust than people who try to hide it, because it almost always shows.',
        ],
      ],
    },
    {
      question: 'How do you make good decisions at work?',
      answer: [
        [
          "A good decision is one you make well, even if it goes wrong later: on time, with the options on the table and knowing what you'd do if it goes sideways. How it turns out isn't only down to you.",
        ],
      ],
    },
    {
      question: 'Can you work on this with a mentor?',
      answer: [
        [
          'Yes. In the ',
          {
            text: 'Executive presence',
            href: '/en/programas/presencia-ejecutiva/',
          },
          " programme we work on the decisions you have on the table this week: how to frame them, how to take them to your manager and how to stand by them when you don't have it all figured out.",
        ],
        [
          "If you're not sure it's for you, book the ",
          { text: 'free 15-minute diagnostic', href: DIAGNOSTIC },
          ". And if you'd like your company to pay for it, here's ",
          {
            text: 'how to ask',
            href: '/en/recursos/how-to-ask-your-company-to-pay-for-mentoring/',
          },
          '.',
        ],
      ],
    },
  ],
}

export default article
