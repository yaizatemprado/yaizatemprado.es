import type { Article } from './types'

const DIAGNOSTIC = 'https://cal.com/yaiza-temprado/diagnostic-session'

// English copy of como-tener-autoridad-en-el-trabajo, approved by Yaiza on
// 18-oct-2026 (she asked for it published without reviewing the English).
// Edit with her OK.
const article: Article = {
  slug: 'how-to-have-authority-at-work',
  translationOf: 'como-tener-autoridad-en-el-trabajo',
  locale: 'en',
  published: '2026-10-18',
  tag: 'Executive presence',
  title: 'How to have authority at work (without explaining yourself so much)',
  socialImage: { src: '/assets/como-tener-autoridad-42-silencio-en-og.jpg', width: 1200, height: 628 },
  description:
    'How to have authority at work: why we justify ourselves so much, the tiny apologies that take your weight away, and how to say 42 and hold the silence.',
  cardCta: 'Read',
  intro: [
    [
      'Someone new on the project asks you who they should talk to about the technical side. And your answer is perfect: "Me. I own that part." But you don\'t stop there. You add: "That way we don\'t bother So-and-so, they\'re really busy."',
    ],
    [
      'That second sentence changes everything. Now they\'re not talking to you because you\'re the one responsible. They\'re talking to you because someone "more important" doesn\'t have time.',
    ],
    ['We do this all the time. And we almost never notice.'],
  ],
  sections: [
    {
      kind: 'blocks',
      heading: 'Why we justify ourselves: the 42',
      blocks: [
        {
          kind: 'p',
          text: [
            'Remember maths problems at school? You\'d get a really long equation and writing 42 wasn\'t enough. You had to write: first I multiplied this by this, then I subtracted that, then whatever else. Because the teacher wanted to see the reasoning that got you to 42.',
          ],
        },
        {
          kind: 'p',
          text: [
            'And we bring that to work. We find it really hard to just say 42. So we show all our working. I see three reasons for it:',
          ],
        },
        {
          kind: 'list',
          items: [
            [
              { text: 'In case I got it wrong.', strong: true },
              ' It\'s a little bit of insecurity: "I\'ll show you how I got to 42, just in case I made a mistake, so you can check it too." Wouldn\'t want to mess it up.',
            ],
            [
              { text: 'So people see the effort.', strong: true },
              ' You show all the work behind the 42, so people appreciate how long it took you.',
            ],
            [
              { text: 'So people see the proposal is solid.', strong: true },
              ' Sometimes you\'re not looking for approval. You want to show how good your arguments are before anyone questions them.',
            ],
          ],
        },
        {
          kind: 'p',
          text: ['All three make sense in your head: it feels like an explanation gives you more weight, more credibility.'],
        },
        {
          kind: 'p',
          text: [
            'And unfortunately it works the other way round. Every explanation nobody asked for takes weight away from what you\'ve just said.',
          ],
        },
        {
          kind: 'p',
          text: [
            'It\'s one of the little drops I talk about in ',
            { text: 'executive presence', href: '/en/recursos/executive-presence/' },
            ': explaining what nobody asked. One on its own goes unnoticed. Ten a day doesn\'t.',
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'The tiny apologies',
      blocks: [
        {
          kind: 'p',
          text: [
            'The other way of justifying yourself is apologising before you\'ve said anything. They slip in at the start of the sentence and you barely hear them:',
          ],
        },
        {
          kind: 'list',
          items: [
            ['"Sorry, can I add something?"'],
            ['"I don\'t know if this is clear, but…"'],
            ['"This might be a silly question, but…"'],
            ['"Let me see if I can explain this…"'],
          ],
        },
        {
          kind: 'p',
          text: [
            'They\'re not good manners. They\'re apologising almost for existing, for taking up a space that belongs to you. And they make you smaller before you\'ve even started talking, however valid what you say next is.',
          ],
        },
        { kind: 'p', text: ['There are two versions I see a lot:'] },
        {
          kind: 'list',
          items: [
            [
              { text: 'The double apology.', strong: true },
              ' "Sorry, but I forgot to ask you something." That\'s two apologies: the sorry, and beating yourself up for forgetting. The version with no apologies: "Hey, I\'ve got one more question."',
            ],
            [
              { text: 'Playing down your own work.', strong: true },
              ' You\'ve worked incredibly hard on something and you present it with "well, all I did was pull together what was already there." As if it were vital to downplay what you\'ve achieved.',
            ],
          ],
        },
        {
          kind: 'p',
          text: [
            'What I always come back to in mentoring: nobody is doing you a favour by listening to you, understanding you or answering you. When you apologise a lot, it\'s often because you still don\'t fully believe you have the right to be there.',
          ],
        },
      ],
    },
    {
      kind: 'text',
      heading: '"I don\'t have the answer" is also an answer',
      paragraphs: [
        [
          'Sometimes someone asks you something and you don\'t know. And your reflex is to fill the gap, heaven forbid you keep someone waiting! Explaining why you don\'t know, everything that depends on other people, what would need looking into. Or, worse, making up a date you don\'t believe, just to have something to say.',
        ],
        [
          'Both cost you a lot. The explanation takes away your authority. And a date you miss takes away your credibility for a long time.',
        ],
        ['Say you don\'t know, plainly and with a date: "I don\'t have that answer. I\'ll have it for you on Monday." And that\'s it.'],
      ],
    },
    {
      kind: 'blocks',
      heading: 'The hard part: holding the silence',
      blocks: [
        { kind: 'p', text: ['Saying 42 is the easy part. The hard part comes right after.'] },
        {
          kind: 'p',
          text: [
            'You say 42 and nobody answers. Silence. And you read it as them questioning you. So you jump in: "well, it\'s because I multiplied this by this, and then…" And out comes all the working, which nobody had asked for.',
          ],
        },
        {
          kind: 'image',
          src: '/assets/como-tener-autoridad-42-silencio-en.webp',
          alt: 'Comic panel in the style of the "she thinks / he thinks" meme: in a meeting, she has just spoken and looks worried. At the top: "Her: They\'ve gone quiet. They must think I have no idea". At the bottom, her two colleagues, deep in thought: "Them: 42... Makes sense. So for my project, that means..."',
          width: 1200,
          height: 668,
        },
        {
          kind: 'p',
          text: [
            'But that silence isn\'t a judgement. It\'s the other person processing what you\'ve just told them. It\'s the space for your message to land. If you fill it, your message loses weight.',
          ],
        },
        {
          kind: 'p',
          text: [
            'So you say 42, and you wait. If there are questions afterwards, you answer them. And if there aren\'t, even better.',
          ],
        },
        {
          kind: 'p',
          text: ['That discomfort with silence is what makes us fill it. And it\'s the hardest thing to train.'],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'How to start',
      blocks: [
        {
          kind: 'list',
          items: [
            [
              { text: 'For one week, just observe.', strong: true },
              ' Notice how many times you say "because", "sorry" or "well, it\'s just that…" after a sentence that was already complete. Don\'t correct it yet. Just count.',
            ],
            [
              { text: 'Look around you.', strong: true },
              ' There\'s probably someone in your meetings who never justifies themselves. Notice how they sound.',
            ],
            [
              { text: 'Try saying just the 42.', strong: true },
              ' Give the answer without explaining yourself and see what happens. Do they ask for the explanation or not? Almost always, they don\'t. And if they do, that\'s when you give it.',
            ],
          ],
        },
        { kind: 'p', text: ['Say 42. And stop talking. Don\'t fill it, hold the silence!'] },
      ],
    },
  ],
  faqHeading: 'Frequently asked questions',
  faq: [
    {
      question: 'Why do I justify myself so much?',
      answer: [
        [
          'Because of the 42: at some point you learned that showing your working protected you. If you give every reason, nobody can say you got it wrong. At work it\'s the opposite. The more explanations you give without being asked, the more it looks like you need permission.',
        ],
      ],
    },
    {
      question: 'Isn\'t it rude not to explain?',
      answer: [
        [
          'No, if your tone is friendly. "I\'ll have it on Thursday" isn\'t rude. "I\'ll have it on Thursday because…, and also…, and if not…" is exhausting. And if someone wants to know why, they\'ll ask you. That\'s when you explain.',
        ],
      ],
    },
    {
      question: 'What about in meetings?',
      answer: [
        [
          'Same thing, and it shows even more, because everyone is watching. I go into it in ',
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
          ' programme we catch these phrases live, in the things you tell me yourself, which is when you really see them.',
        ],
        [
          'If you\'re not sure it\'s for you, book the ',
          { text: 'free 15-minute diagnostic', href: DIAGNOSTIC },
          '. And if you\'d like your company to pay for it, here\'s ',
          { text: 'how to ask', href: '/en/recursos/how-to-ask-your-company-to-pay-for-mentoring/' },
          '.',
        ],
      ],
    },
  ],
}

export default article
