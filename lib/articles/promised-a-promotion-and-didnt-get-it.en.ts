import type { Article } from './types'

const DIAGNOSTIC = 'https://cal.com/yaiza-temprado/diagnostic-session'
const PILLAR = '/en/recursos/how-to-get-promoted-to-director/'

// English copy of me-prometieron-un-ascenso-y-no-me-lo-dieron, approved by Yaiza
// on 18-oct-2026 (she asked for it published without reviewing the English).
// Edit with her OK.
const article: Article = {
  slug: 'promised-a-promotion-and-didnt-get-it',
  translationOf: 'me-prometieron-un-ascenso-y-no-me-lo-dieron',
  locale: 'en',
  published: '2026-10-18',
  tag: 'Getting to director',
  title: "I was promised a promotion and didn't get it. Now what?",
  seoTitle: "Promised a promotion and didn't get it: what to do now",
  socialImage: { src: '/assets/me-prometieron-un-ascenso-y-yo-cuando-en-og.jpg', width: 1200, height: 628 },
  description:
    "You were promised a promotion and it didn't happen. Why it happens, what doesn't work and how to raise it with your manager: name the mismatch, ask for criteria and a date, and put it in writing.",
  cardCta: 'Read',
  intro: [
    [
      'In your last review your manager said it loud and clear: "Next year is your moment." You left that meeting happy. And you started working even harder. You took on things that weren\'t yours, without complaining, because it wasn\'t long now.',
    ],
    ["The promotion cycle has come round. And your name isn't on the list."],
    [
      'They explain it with a sentence that explains nothing: "It wasn\'t possible this year. You just need to wait a little longer." Or they don\'t even explain it: you find out from the email with the list.',
    ],
    [
      "And you're left with two urges. One is to walk into their office and tell them it isn't fair. The other is to say nothing, carry on as if nothing happened and start looking at job ads. Neither of them will get you what you want.",
    ],
  ],
  sections: [
    {
      kind: 'text',
      heading: 'Why it happens',
      paragraphs: [
        [
          'A promise of a promotion is almost never a promise. "It\'s your moment", with no date, no criteria and nothing about what needs to happen, is an intention. And often your manager doesn\'t even decide alone: the promotion is discussed in a room with their peers, with a budget and with other candidates on the table. Your manager can be completely convinced you deserve it and still have it shot down by others.',
        ],
        [
          "In a lot of companies, especially big ones, this is how it works: there's a fixed number of promotions per cycle, and your manager has to argue your case with specific examples in front of other managers who are arguing for their own people. If they don't turn up with proof that you're already working at the level above (and have been for a while, not for the last two weeks), your case falls apart.",
        ],
        [
          "Meanwhile, you've done what almost all of us do: work harder and wait for it to be noticed. Drop hints without ever saying out loud which role you're going for. And without making sure someone with weight is talking about you in that room.",
        ],
        [
          "What you have now is a mismatch. What you were told and what has happened don't add up. And that's exactly what you need to put on the table.",
        ],
        [
          'I explain why your peers carry so much weight in ',
          { text: 'how to get promoted to director', href: PILLAR },
          '.',
        ],
      ],
    },
    {
      kind: 'blocks',
      heading: "What doesn't work",
      blocks: [
        { kind: 'p', text: ['When you go to talk to your manager, avoid these:'] },
        {
          kind: 'list',
          items: [
            [
              { text: '"It\'s not fair."', strong: true },
              " Even if you're right, the conversation becomes about your anger and not about your promotion. And your manager gets defensive, which won't help you.",
            ],
            [
              { text: 'Talking while you\'re still angry.', strong: true },
              ' If you go the same day, you\'ll say "it\'s not fair" even if you don\'t mean to. Give it a day or two.',
            ],
            [
              { text: 'Comparing yourself to someone else.', strong: true },
              ' "So-and-so got promoted and she\'s been here less time than me." In that conversation nobody else exists: it\'s you and your evidence.',
            ],
            [
              { text: 'Playing it down.', strong: true },
              ' "Well, it\'s not like the role matters that much to me." You say it so you don\'t come across as ambitious, and what your manager hears is that there\'s no need to promote you.',
            ],
          ],
        },
        { kind: 'p', text: ["And outside that conversation, this doesn't work either:"] },
        {
          kind: 'list',
          items: [
            [
              { text: 'Saying nothing.', strong: true },
              " Keeping quiet, working the same way and trusting that next year it'll be your turn. It's the same pattern as with pay: you say nothing until the day you leave, and by then there's nothing left to negotiate. I talk about it in ",
              {
                text: 'how to talk to your boss about a problem',
                href: '/en/recursos/how-to-talk-to-your-boss-about-a-problem/',
              },
              '.',
            ],
            [
              { text: 'Turning against the person who did get it.', strong: true },
              " If someone else got promoted, congratulate them. It's not their fault, and tomorrow they might be your manager.",
            ],
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'Name the mismatch',
      blocks: [
        { kind: 'p', text: ['You put it on the table in neutral and let your manager fill it in:'] },
        {
          kind: 'p',
          text: [
            {
              text: '"In my last review you told me this cycle was the one, and it hasn\'t happened. There\'s a mismatch there that I don\'t understand. What\'s changed?"',
              em: true,
            },
          ],
        },
        {
          kind: 'p',
          text: [
            'And then you stop talking. Don\'t fill the silence! Be careful not to make the excuses for them ("I know the budget is tight..."). The question does the work.',
          ],
        },
        {
          kind: 'p',
          text: ['And when they answer, don\'t let it stop at "it wasn\'t possible". Ask for specifics:'],
        },
        {
          kind: 'list',
          items: [
            ['What criteria were used?'],
            ['What was missing in my case? Can you give me specific examples?'],
            ['What would need to happen for me to be the obvious candidate next time?'],
          ],
        },
        {
          kind: 'p',
          text: [
            "If what's going on is that you've been doing the work of the role above for a while, there's an even more objective version:",
          ],
        },
        {
          kind: 'p',
          text: [
            {
              text: '"These are the responsibilities I have now. This is my level. There\'s a discrepancy. How do we fix it?"',
              em: true,
            },
          ],
        },
        {
          kind: 'p',
          text: [
            '"Discrepancy" sounds like a fact. "It\'s not fair" sounds like a complaint. But the fact has to be backed up: go in prepared, with every project you\'ve led, the impact it had and the responsibility you held. I show you how with the ',
            { text: 'impact log', href: PILLAR },
            '.',
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: "Stop asking when it's your turn",
      blocks: [
        {
          kind: 'p',
          text: [
            'The question almost all of us ask after a no is "When do you think it\'ll be my turn?". With that question, the decision is back in someone else\'s hands. And it can get you the answer you don\'t want: "We\'ll see."',
          ],
        },
        {
          kind: 'image',
          src: '/assets/me-prometieron-un-ascenso-y-yo-cuando-en.webp',
          alt: 'Comic panel: in an office, a woman with a folder under her arm asks her manager "So when is it my turn?". He sits behind his desk, smiling awkwardly and sweating, surrounded by speech bubbles: "There\'s no budget this year", "You just need a bit more visibility", "Next year, for sure", "Now\'s not a good time".',
          width: 1200,
          height: 669,
        },
        {
          kind: 'list',
          items: [
            [
              { text: 'You lose:', strong: true },
              ' "Do you think next year might be the one?" You wait for it to be offered.',
            ],
            [
              { text: 'You gain:', strong: true },
              ' "I want to get to that role in the next cycle. What would you need to see from me to be sure?" You say where you\'re going and ask for what\'s missing.',
            ],
          ],
        },
        {
          kind: 'p',
          text: [
            'And if they tell you now isn\'t the time, don\'t settle for "we\'ll see". Ask for the date: "OK. Shall we review it in March, with all of this in front of us?"',
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'Put it in writing',
      blocks: [
        {
          kind: 'p',
          text: [
            'A spoken promise shifts on its own. "It\'s your moment" turns into "I never said this year". Sometimes each person remembers whatever suits them.',
          ],
        },
        { kind: 'p', text: ['So, after the conversation, send them a short email:'] },
        {
          kind: 'p',
          text: [
            {
              text: '"Thanks for today\'s conversation. Just so I don\'t miss anything: we agreed that for the director role you need to see X and Y, and that we\'ll review it in March. Have I understood that right?"',
              em: true,
            },
          ],
        },
        {
          kind: 'p',
          text: [
            "The same thing you'd do after any important meeting: make clear what's been agreed. Nobody will feel attacked by that. And next time nobody has to rely on memory.",
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'If it still doesn\'t happen',
      blocks: [
        {
          kind: 'p',
          text: [
            "Sometimes the answer is that it's not going to happen, or that nobody knows when. That's information too, and you need it:",
          ],
        },
        {
          kind: 'p',
          text: [
            {
              text: '"If this role isn\'t going to exist for me here, I need to know so I can make my own decision."',
              em: true,
            },
          ],
        },
        {
          kind: 'p',
          text: [
            'Watch your tone: not a threat and not a "save me". You\'re asking for the context you\'re missing so you can decide for yourself. No rumours and no emotion: it\'s a work conversation.',
          ],
        },
        {
          kind: 'p',
          text: [
            'And notice what kind of "no" it is. If what\'s missing is something you can work on (more visibility, a type of project, a skill), you have a plan. If what\'s missing doesn\'t depend on you (there\'s no headcount, the structure doesn\'t allow it, the decision is made by someone who doesn\'t know you), no plan is going to fix it. Not getting promoted once is a data point. Twice with the same promise is a pattern.',
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
            [{ text: 'Give it a day or two', strong: true }, ' before you ask for the meeting.'],
            [
              { text: 'Write down what you were told, when and in what words.', strong: true },
              ' "It\'s your moment" is not the same as "in June you move up to director". Knowing what you were really promised changes the conversation.',
            ],
            [
              { text: 'Prepare your summary:', strong: true },
              ' project, impact and the responsibility you held in each one.',
            ],
            [
              { text: 'Your manager first.', strong: true },
              ' HR afterwards, and for something specific (see below).',
            ],
            [
              { text: "Practise what you're going to say out loud, on your own,", strong: true },
              ' until it comes out in one go: without the "well" at the start and without the "I think". It feels awkward the first few times. That\'s normal.',
            ],
            [
              { text: "Don't leave the meeting without a date", strong: true },
              ' to talk about it again.',
            ],
            [
              { text: "Send them what you've agreed in writing", strong: true },
              ' that same day.',
            ],
          ],
        },
      ],
    },
  ],
  faqHeading: 'Frequently asked questions',
  faq: [
    {
      question: "Why am I not getting promoted at work?",
      answer: [
        [
          "Almost always, because what made you good in your current role isn't what you need in the next one, and nobody has explained that to you. I go into it in ",
          { text: 'how to get promoted to director', href: PILLAR },
          ". And if you feel you work incredibly hard and nobody sees it, I go into that in ",
          {
            text: 'I feel undervalued at work',
            href: '/en/recursos/i-feel-undervalued-at-work/',
          },
          '.',
        ],
      ],
    },
    {
      question: 'Should I talk to HR?',
      answer: [
        [
          "After your manager, and for something specific. If you go first, it looks like you've gone over their head, and you need them on your side. Besides, HR almost never decides a promotion on its own.",
        ],
        [
          "Where it does help: understanding how the process works (when the cycles are, what criteria are written down, who decides) and, if you suspect there's more to it than a business decision, getting it on record. And if the problem is your manager, the natural next step is to talk to their manager, not to HR.",
        ],
      ],
    },
    {
      question: "What if my manager says it's not up to them?",
      answer: [
        [
          'Ask who decides and what that person needs to see. And give your manager ammunition: "I\'ll keep everything I do in here, so you have what you need to argue my case." That way your promotion becomes a little bit theirs too.',
        ],
      ],
    },
    {
      question: 'Can you work on this with a mentor?',
      answer: [
        [
          'Yes. In the ',
          { text: 'Executive presence', href: '/en/programas/presencia-ejecutiva/' },
          " programme we prepare this conversation together: what to say, what evidence to bring and how to ask for the date without it sounding like an ultimatum.",
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
