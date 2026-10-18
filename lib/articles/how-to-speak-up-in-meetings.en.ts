import type { Article } from './types'

const DIAGNOSTIC = 'https://cal.com/yaiza-temprado/diagnostic-session'

// English copy of como-hablar-en-reuniones-de-trabajo, approved by Yaiza on
// 18-oct-2026 (she asked for it published without reviewing the English).
// Edit with her OK.
const article: Article = {
  slug: 'how-to-speak-up-in-meetings',
  translationOf: 'como-hablar-en-reuniones-de-trabajo',
  locale: 'en',
  published: '2026-10-18',
  tag: 'Executive presence',
  title: 'How to speak up in meetings so people actually listen',
  socialImage: { src: '/assets/como-hablar-en-reuniones-videollamada-en-og.jpg', width: 1200, height: 654 },
  description:
    "How to speak up in meetings: what to do when you don't know the answer, when someone more senior is in the room, when you get interrupted or when someone repeats your idea.",
  cardCta: 'Read',
  intro: [
    ["There are two ways to walk out of a meeting feeling like you weren't really there."],
    [
      "The first is not opening your mouth at all. You had something to say, you waited for the right moment, the moment never came and the meeting ended. Or you weren't sure what you wanted to say was good enough, time went by and you missed your chance. Or you were so worried about saying something really relevant that you got stuck in analysis paralysis and in the end you said nothing.",
    ],
    [
      "The second is opening it. You said something that, to you, was an important contribution, and it barely registered. And sometimes, even more painful: ten minutes later, someone said something very similar and everyone nodded, but you let it go, because what matters is that the point got made, right?",
    ],
    [
      "It happens to everyone, and it's hardly ever about what you know. It's about how you say it, when you say it and what your body is doing while you speak.",
    ],
  ],
  sections: [
    {
      kind: 'text',
      heading: '"What does it matter who says it?"',
      paragraphs: [
        ["Thinking about it that way is very comfortable, because it saves you the conflict in the moment. But it isn't true."],
        [
          "An idea doesn't carry the same weight whoever says it. And the person who says it out loud, and gets credit for it, is the one who walks out of the meeting with the next opportunity.",
        ],
        [
          'Every time you speak up is one of those little drops I talk about in ',
          { text: 'executive presence', href: '/en/recursos/executive-presence/' },
          ". One drop on its own goes unnoticed. So do ten. But meeting after meeting, the glass fills up or empties out. And meetings are where you gain and lose the most drops, because that's where the people who make decisions see you.",
        ],
        ['These are the five moments in a meeting where I see people lose the most. And what to do in each one.'],
      ],
    },
    {
      kind: 'blocks',
      heading: "When someone asks you something and you don't have the answer",
      blocks: [
        {
          kind: 'p',
          text: [
            "You get asked a question and you're not sure. So you start thinking out loud. You go round in circles, go off on tangents and talk without really knowing where you'll end up.",
          ],
        },
        {
          kind: 'p',
          text: [
            "You do it so there's no silence. But what the room sees is someone looking for the answer live. And the more you talk, the less sure what you're saying sounds.",
          ],
        },
        { kind: 'p', text: ['What to do:'] },
        {
          kind: 'list',
          items: [
            [
              { text: 'Stop for a few seconds.', strong: true },
              " Pause. Think about what you're going to say before you say it. That silence feels endless to you, but to the room it looks like you're thinking (which is exactly what you're doing).",
            ],
            [
              { text: "If you don't know, say so.", strong: true },
              ' "I don\'t have that right now. I\'ll check with the team and get back to you before the end of the day." That\'s a perfectly good answer.',
            ],
            [
              { text: 'Make sure the answer comes back from you.', strong: true },
              ' After the meeting, ask whoever knows, and send the answer yourself. The question was put to you.',
            ],
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'When someone more senior is in the room',
      blocks: [
        {
          kind: 'p',
          text: [
            "The question is for you. And before you've even thought about it, you've already turned your head towards your manager, towards the most senior person in the room, or whoever has been at the company longest, or whatever makes you think their answer carries more weight than yours. A lot of the time it isn't even that you don't know. It's a reflex.",
          ],
        },
        {
          kind: 'p',
          text: [
            "To you it feels like respect. Or generosity: you're giving the person who knows best the chance to answer. But what the room sees is something else: \"Don't ask me, I don't count for anything here.\"",
          ],
        },
        {
          kind: 'p',
          text: [
            "And it has a very specific cost. The next question doesn't come to you. It goes straight to them.",
          ],
        },
        { kind: 'p', text: ['What to do:'] },
        {
          kind: 'list',
          items: [
            [
              { text: "Imagine they're not there.", strong: true },
              " If that person weren't in the room, you'd answer something! So do exactly that, with them sitting there. Sometimes it turns out you did know the answer and you were just passing it on by default.",
            ],
            [
              { text: 'Answer first, then invite them in.', strong: true },
              ' "I\'d do this. Carlos, how do you see it?" The question is still yours: you decide, and you hand over the floor.',
            ],
            [
              { text: 'Agree on it beforehand.', strong: true },
              " If you share a lot of meetings with your manager and you get on well, tell them: \"I want to start taking ownership of this project, and in the meantime I still really need your experience. Would you be comfortable if, when I'm asked something, I answer, and if I miss anything, you fill in?\" That way you don't catch them off guard.",
            ],
          ],
        },
        {
          kind: 'p',
          text: [
            "And careful, there's a costlier version of this: the project is yours and, when your manager is in the room, they tell the whole story. The context, the progress, the numbers. It looks harmless, because everything they say is true. But in the minds of the people listening, the project becomes theirs.",
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'When you want to contribute',
      blocks: [
        {
          kind: 'p',
          text: ["Before you speak, look at what kind of meeting you're in. Each meeting answers a different question:"],
        },
        {
          kind: 'list',
          items: [
            ["The why meetings: whether we do this, how it fits the strategy, what's going to change."],
            ['The what meetings: what we do and in what order.'],
            ['The how meetings: who, when, with what.'],
          ],
        },
        {
          kind: 'p',
          text: [
            "For example, if you ask about the how in a why meeting, one of two things happens: either they give you a quick answer so they can move on, or the meeting goes off for twenty minutes into a different conversation. Either way, what you said carries no weight because it wasn't the right moment. And look, maybe it was a brilliant question. But it wasn't for that meeting.",
          ],
        },
        { kind: 'p', text: ['Then, when you speak:'] },
        {
          kind: 'list',
          items: [
            [
              { text: 'Conclusion first.', strong: true },
              " Start with your main message, not with the path that got you there. If someone wants the path, they'll ask. If you give it first, by the time you get to the point they've stopped listening. And don't give it afterwards either unless they ask: over-justifying also takes away presence, because it looks like you need them to approve how you got there.",
            ],
            [
              { text: "Don't ask permission to speak.", strong: true },
              ' "Sorry, can I add something?" or "This might be a silly question, but…" take weight away from you before you\'ve even started. "I want to add something", and that\'s it. Even better: just add it, no introduction.',
            ],
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'When you get interrupted',
      blocks: [
        {
          kind: 'p',
          text: [
            'The first thing your body does when you get interrupted is pull back. You look down, you smile to soften it, you give way. And in a second, someone else has the floor.',
          ],
        },
        { kind: 'p', text: ['What to do, from easiest to hardest:'] },
        {
          kind: 'list',
          items: [
            [
              { text: 'Hold your ground with your body.', strong: true },
              ' Back straight, eyes on whoever interrupted you, and a pause. Your body says "I haven\'t finished" before you do.',
            ],
            [
              { text: 'Hold your ground with a sentence.', strong: true },
              ' "Let me finish this thought and then I\'ll hear you out." No "sorry", no "I just wanted to…". It\'s blunt on purpose. You can back it up by raising your hand in a stop gesture. And if they keep talking, raise your voice a little and carry on.',
            ],
            [
              { text: "If you've already lost the floor, take it back.", strong: true },
              ' When things calm down: "Going back to what I was saying earlier…". Don\'t justify coming back to it or apologise for it. Say it and keep going.',
            ],
          ],
        },
      ],
    },
    {
      kind: 'blocks',
      heading: 'When someone repeats your idea',
      blocks: [
        { kind: 'p', text: ['You said it. Someone else repeats it two minutes later. And everyone nods.'] },
        {
          kind: 'list',
          items: [
            [
              { text: 'Claim it back in the moment.', strong: true },
              ' "Yes, that\'s exactly what I was saying earlier. And I\'d take it one step further: …". In a normal tone. You mark where it came from and keep going.',
            ],
            [
              { text: 'If the moment has passed, build on it.', strong: true },
              ' "Picking up on what Javier said, which is what I proposed at the start, the next step would be…". Your idea, and you taking it forward.',
            ],
            [
              { text: 'Afterwards, put it in writing.', strong: true },
              ' A message to the group with what was discussed and the next steps: "As I mentioned at the start, this is the proposal. Next steps: …". When it comes to deciding later who did what, what\'s written down beats what everyone remembers.',
            ],
          ],
        },
      ],
    },
  ],
  faqHeading: 'Frequently asked questions',
  faq: [
    {
      question: 'What if I freeze when it\'s my turn to speak?',
      answer: [
        [
          'Prepare one single sentence before you go in: the one thing you want people to take away from you in that meeting. Not a speech. One sentence. And if they ask you something you weren\'t expecting, "Let me look into it and get back to you" is also an answer.',
        ],
      ],
    },
    {
      question: 'Does speaking more in meetings give me more presence?',
      answer: [
        [
          'No. Talking more isn\'t the same as carrying more weight. One contribution at the right moment carries more weight than five made just to show you\'re there.',
        ],
        [
          "That said, don't use that line as an excuse to keep your mouth shut. If nobody hears from you for the whole meeting, people notice that too. They only half remember what each person said, but they do remember who took part and who spent the whole session in silence.",
        ],
      ],
    },
    {
      question: 'What if the meeting is online?',
      answer: [
        ["Everything above still applies. And on top of that, how you look on screen counts, because people have read you before you've said a word:"],
      ],
      blocks: [
        {
          kind: 'list',
          items: [
            ["Camera on, always. Leaving it off is like going to a meeting in person and sitting in a corner."],
            [
              "Position your camera and screen so that, when you look at the screen, you're facing whoever is talking to you. Otherwise you're seen in profile and the person talking doesn't know whether you're listening.",
            ],
            ['Frame yourself from the chest up, with the camera at eye level.'],
          ],
        },
        {
          kind: 'image',
          src: '/assets/como-hablar-en-reuniones-videollamada-en.webp',
          alt: 'Comic panel: on a Zoom call, Ana appears in profile on the screen, looking away, and Pedro, on the other side, thinks "Is she even listening, or off in her own world?"',
          width: 1200,
          height: 654,
        },
      ],
    },
    {
      question: 'Can you work on this with a mentor?',
      answer: [
        [
          "Yes. It's one of the things we work on most in the ",
          { text: 'Executive presence', href: '/en/programas/presencia-ejecutiva/' },
          ' programme: your real meetings, where your drops are going and what you do differently in the next one.',
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
  guide: 'reuniones-productivas',
}

export default article
