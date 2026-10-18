import type { Article, Block } from './types'

const DIAGNOSTIC = 'https://cal.com/yaiza-temprado/diagnostic-session'

/** A bold lead-in followed by its paragraph, as in "**1. Title.** Text". */
const point = (title: string, text: string): Block => ({
  kind: 'p',
  text: [{ text: title, strong: true }, ' ', text],
})

// English copy of no-me-valoran-en-el-trabajo, approved by Yaiza on 18-oct-2026 (she asked for it
// published without reviewing the English). The matrix (visibility × effort, "Cinderella") is hers:
// decisions/2026-10-18-matriz-visibilidad-esfuerzo.md in the vault. The four profile names are the
// ones in the English image. Edit with her OK.
const article: Article = {
  slug: 'i-feel-undervalued-at-work',
  translationOf: 'no-me-valoran-en-el-trabajo',
  locale: 'en',
  published: '2026-10-18',
  tag: 'Getting to director',
  title: 'I feel undervalued at work: why it happens and what to do',
  socialImage: { src: '/assets/no-me-valoran-matriz-en-og.jpg', width: 1200, height: 628 },
  description:
    "You work incredibly hard and still feel undervalued. Why effort isn't enough, the four profiles of effort and visibility (Cinderella) and how to get your work seen.",
  cardCta: 'Read',
  intro: [
    [
      "You work incredibly hard. You get in early, you stay late and nothing slips past you. And still, when there's a juicy project or a promotion on the table, you're not the first name on the list.",
    ],
    ["And you don't understand why."],
    [
      "The problem is almost never your work. It's how little of it reaches the people who have an opinion about you: your manager, their peers, the people you work with. And almost always when you're not in the room.",
    ],
  ],
  sections: [
    {
      kind: 'blocks',
      heading: 'First: what do you actually mean?',
      blocks: [
        {
          kind: 'p',
          text: [
            '"I don\'t feel valued" can mean very different things. Pinning it down is the first step to fixing it:',
          ],
        },
        {
          kind: 'list',
          items: [
            [
              { text: "Nobody tells you.", strong: true },
              ' You do good work and nobody says a thing. Not a "thanks", not a "this went really well".',
            ],
            [
              { text: 'Other people get the good stuff.', strong: true },
              ' The juicy projects, the important meetings, the promotions.',
            ],
            [
              { text: "Your opinion doesn't count.", strong: true },
              ' You suggest something and nothing happens. Or someone else suggests it a week later, and then it does.',
            ],
            [
              { text: "It doesn't show in your pay or your level.", strong: true },
              ' You do extra work and get paid the same.',
            ],
          ],
        },
        {
          kind: 'p',
          text: [
            "It can be more than one. But almost all of them have the same root: what you do and what people see of what you do don't match.",
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'What you do and what people see',
      blocks: [
        {
          kind: 'p',
          text: [
            'Back in the 90s, Harvey Coleman was already saying that in a career, who knows what you do matters far more than what you do. He summed it up in three parts: your performance counts for 10%, your image for 30% and your exposure, who knows about your work, for 60%.',
          ],
        },
        {
          kind: 'p',
          text: [
            'I like to picture it on two axes: how much effort you put in and how much of it people see. That gives you four profiles:',
          ],
        },
        {
          kind: 'list',
          items: [
            [
              { text: 'The Go-Getter', strong: true },
              ' (high effort, high visibility). She works hard, and it shows. She gets the opportunities.',
            ],
            [
              { text: 'The All-Talk', strong: true },
              " (low effort, high visibility). You see her everywhere, but there's not much behind it. She can get away with it for a while, but in the end people see right through her.",
            ],
            [
              { text: 'The Coaster', strong: true },
              " (low effort, low visibility). She doesn't stand out and nobody misses her. Careful: it looks like a very comfortable spot, but when there are cuts, she's the first to go.",
            ],
            [
              { text: 'Cinderella', strong: true },
              " (high effort, low visibility). She does everything, doesn't bother anyone and waits for someone to notice and rescue her. Spoiler: that might never happen.",
            ],
          ],
        },
        {
          kind: 'image',
          src: '/assets/no-me-valoran-matriz-en.webp',
          alt: 'Illustrated matrix with two axes: EFFORT (from low to high) and VISIBILITY (from low to high). Top left, "The All-Talk": a smiling woman holding a megaphone and an empty folder with a puff of smoke coming out of it. Top right, "The Go-Getter": a woman presents a rising chart to attentive colleagues. Bottom left, "The Coaster": someone relaxed at an almost empty desk with a coffee and their phone. Bottom right, highlighted, "Cinderella": a woman works surrounded by binders and sticky notes, the clock nearly at twelve and a glass slipper next to her chair.',
          width: 1200,
          height: 669,
        },
        {
          kind: 'p',
          text: [
            'If you\'re searching "I feel undervalued at work", you\'re most likely Cinderella. It\'s the profile I come across most in mentoring, and it\'s almost always a woman.',
          ],
        },
      ],
    },
    {
      kind: 'text',
      heading: "Why effort isn't enough",
      paragraphs: [
        [
          'What I hear almost every time is this: "They don\'t value how hard I work, compared with colleagues who do far less than me."',
        ],
        [
          "And it's true: you do work harder. The problem is that nobody sees effort. Your manager sees results, and only the ones that reach them. Everything that happens along the way (the hours, the fires you put out, what you get done without anyone finding out) doesn't exist for them.",
        ],
        [
          "To make matters worse, effort loses value as you get more senior! In your first years in a role, doing more than you're asked makes you stand out hugely. Later it becomes normal: it's what's expected of you. You can keep piling on the effort and nobody will notice the difference.",
        ],
        ["That's why working harder doesn't get you out of the Cinderella quadrant. It sinks you deeper into it."],
      ],
    },
    {
      kind: 'blocks',
      heading: 'Why you stay in that quadrant',
      blocks: [
        point(
          "1. You put your effort into things that don't keep your manager up at night.",
          'You can be doing excellent work on something your manager barely cares about. Ask them, straight out: "What worries you most this quarter? Is what I\'m doing helping you with that?" If the answer is no, you know where to shift your focus.',
        ),
        point(
          "2. You do the work nobody sees.",
          "Organising the team event, taking notes in meetings, onboarding new people, putting out another team's fire. It's necessary, but it almost never counts in a performance review. And it's been studied: women get asked to do it more, and when we're asked, we say yes more often. These are the famous non-promotable tasks. Think back: of the last 5 team building events in your team, how many were organised by men and how many by women?",
        ),
        {
          kind: 'p',
          text: [
            'You don\'t need to stop doing all of it. But you do need to share it out ("someone else can take notes this time"), say no with an alternative and, when you do it, tell people what impact it had.',
          ],
        },
        point(
          '3. You wait for it to get noticed on its own.',
          "You were taught that good work speaks for itself. And work, on its own, doesn't speak. This is the heart of Cinderella: doing everything well and waiting for someone to come along and recognise it.",
        ),
        point(
          "4. You're scared of looking like you're blowing your own trumpet.",
          "You know an All-Talk or two, and you don't want to be like that. So you go to the other extreme and don't tell anyone anything. But careful: making yourself visible means people see what you already do. Making noise is something else. The All-Talk shows off what she doesn't have. You're going to show what you do have.",
        ),
      ],
    },
    {
      kind: 'blocks',
      heading: 'How to get out of the Cinderella quadrant',
      blocks: [
        {
          kind: 'p',
          text: [
            "Working harder won't fix it. Making what you already do visible will. Same work, seen differently.",
          ],
        },
        point('A three-line summary on Fridays.', 'A short message to your manager, every week:'),
        {
          kind: 'p',
          text: [
            {
              text: '"This week I focused on X. What you need to know: Y. My priority for next week is Z."',
              em: true,
            },
          ],
        },
        {
          kind: 'p',
          text: [
            "Very few people do it, and it's incredibly powerful. Very little work, loads of visibility. And don't cram in ten things: if you list ten things, you don't know what your priority is.",
          ],
        },
        point(
          'Talk about impact, not tasks.',
          '"I\'ve finished the migration" is a task. "The migration\'s done, and the team no longer loses two hours a day on it" is impact. The second one is what your manager can pass on upwards.',
        ),
        point(
          'Make decisions, and say so.',
          'When you make a decision that\'s yours to make, don\'t let it go by in silence: "I\'ve decided X for these reasons. You\'ll see it reflected in Y." That way people see you decide too, not just execute.',
        ),
        {
          kind: 'p',
          text: [
            { text: "Get your name mentioned in rooms you're not in.", strong: true },
            " Your manager isn't the only one who decides. Make sure their peers know what you're working on and what you've achieved. I explain it in ",
            {
              text: 'how to get promoted to director',
              href: '/en/recursos/how-to-get-promoted-to-director/',
            },
            '.',
          ],
        },
        {
          kind: 'p',
          text: [
            { text: 'Speak up in meetings.', strong: true },
            ' The meeting where you stay quiet is work nobody sees. I explain it in ',
            {
              text: 'how to speak up in meetings',
              href: '/en/recursos/how-to-speak-up-in-meetings/',
            },
            '.',
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'Talk to your manager (without telling them "you don\'t value me")',
      blocks: [
        {
          kind: 'p',
          text: [
            'If you go in with "I feel like you don\'t value me", the conversation becomes about how you feel, and your manager will get defensive ("Of course I value you!"). It turns into your perception against theirs. That\'s not where you want to be. Instead, go in with questions that get them thinking about your work:',
          ],
        },
        {
          kind: 'p',
          text: [
            {
              text: '"I want to make sure I\'m focusing where it helps you most. Of everything I do, what do you value most? And what\'s missing?"',
              em: true,
            },
          ],
        },
        {
          kind: 'p',
          text: [
            "Listen, take notes and don't justify yourself. Whatever they tell you is the best clue to what you need to make more visible.",
          ],
        },
      ],
    },
    {
      kind: 'text',
      heading: 'If nothing changes',
      paragraphs: [
        [
          "Sometimes you do all of this and nothing changes. The problem might not be you: there are places where the work you do will never be valued, because it's not what that company rewards.",
        ],
        [
          "Be careful not to accept that's just how it is and talk yourself into believing you don't deserve the recognition. Not being valued here doesn't mean you're not valuable. And the sooner you see it, the sooner you can decide what to do about it.",
        ],
      ],
    },
  ],
  faqHeading: 'Frequently asked questions',
  faq: [
    {
      question: "What do I do if my manager doesn't value me?",
      answer: [
        [
          "First look at what exactly you're not getting and whether your work is visible. Almost always, the problem isn't what you do but how little of it people see. Start with the Friday summary, and ask them what they value about your work and what's missing, instead of telling them they don't value you.",
        ],
      ],
    },
    {
      question: 'Do I have to work harder to be valued?',
      answer: [
        [
          "No. That's the Cinderella trap. Working harder without anyone seeing it leaves you where you are, just more tired.",
        ],
      ],
    },
    {
      question: "What if my manager doesn't give anyone recognition?",
      answer: [
        [
          'Some managers are like that. If they do it with everyone, it\'s not personal. Ask for it explicitly ("it really helps me to know when something was useful to you") and look for the signal elsewhere: their peers, your internal clients, your team.',
        ],
      ],
    },
    {
      question: "What if I was promised a promotion and it isn't happening?",
      answer: [
        [
          "That's a different conversation, with its own way of having it. I cover it in ",
          {
            text: "I was promised a promotion and didn't get it",
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
          " programme we look at which part of your work isn't being seen and how to make it visible without turning into someone you're not, based on what happens in your real week.",
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
