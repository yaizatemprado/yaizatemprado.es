import type { Dictionary } from './types'

const en: Dictionary = {
  meta: {
    title: 'Yaiza Temprado — Communication, influence and leadership in engineering, for women',
    description:
      "I'm a Senior Director of Engineering, still in the room. I help women who lead technical teams communicate with weight, get heard, run meetings that actually decide, and earn presence where the decisions get made.",
  },
  nav: {
    about: 'About',
    expertise: 'Expertise',
    services: 'Services',
    resources: 'Resources',
    contact: 'Stay in touch',
  },
  hero: {
    eyebrow: 'Senior Director of Engineering',
    heading: 'Lead engineering and actually get heard. Especially for us.',
    lead: "I'm a Senior Director of Engineering and I deal with the same things you do, every week: meetings that decide nothing, good ideas that go nowhere, rooms where it's hard to be taken seriously. I give you the concrete frameworks to change that.",
    ctaPrimary: 'Work with me',
    ctaSecondary: 'Subscribe',
  },
  about: {
    eyebrow: 'About',
    heading: 'From the inside, not the sidelines',
    p1: "I'm not a coach who left the corporate world ten years ago and tells you what it was like back then. I've spent more than 20 years in engineering and right now I run it, as a Senior Director. I'm still inside: what I tell you about meetings, influence or presence isn't theory from a book — I use it in my own rooms every week.",
    p2: "And there's something I'm watching happen from the inside that almost nobody's talking about: how AI is changing what's expected of anyone leading engineering. I see it in my decisions, in my team, in what now makes a manager valuable and what no longer does. I'm not watching it from outside. I'm the one deciding it.",
    p3: "And there's a part only I can tell you. Most of the challenges of leading are the same for everyone. But there are a couple you only face when you're one of the few women in your layer. I've been through them, and I've learned to navigate them over more than 20 years in mostly male environments. I teach you to do the same.",
    metrics: {
      years: { value: '20+', label: 'Years in engineering and leadership' },
      engineers: { value: '100+', label: "Engineers I've led over my career" },
      companies: { value: '7', label: 'Companies, across different countries and stages' },
      transitions: { value: '20+', label: "People I've helped step into leadership" },
    },
  },
  expertise: {
    eyebrow: 'Expertise',
    heading: 'Where I actually help you',
    cards: [
      {
        title: 'Get heard and get your ideas through',
        body: "Your ideas go unnoticed and never quite move forward, especially in meetings that decide nothing. I give you the frameworks to position them, steer the conversation to the point, and walk out with a decision, owners and a date.",
      },
      {
        title: 'Be taken seriously, especially as a woman',
        body: "When you're assertive, you're “intense”; when you ease off, you “lack presence”. And on top of that you're one of the few women in your layer. I help you earn presence without turning into someone you're not.",
      },
      {
        title: 'Delegate and deliver without burning out',
        body: "You delegate and then redo it because it didn't come out the way you would have, and holding the pace between one reorg and the next wears you down. We look at how to truly let go and deliver without depending on whoever's willing to burn themselves out the most.",
      },
      {
        title: 'Lead when AI moves everything',
        body: "Your team already works with AI and you're not entirely sure what's expected of you now. I help you get your bearings: which parts of your work gain value, which lose it, and how not to fall behind your own people.",
      },
    ],
  },
  proof: {
    eyebrow: 'Why me',
    heading: "Why it helps that I'm still inside",
    cards: [
      {
        label: 'Still in it',
        body: "I don't tell you what leading engineering used to be like. I tell you what it's like today, this week, in an organisation I actually run. The frameworks I give you are ones I'm using for real.",
      },
      {
        label: 'Mentoring',
        body: "What I see in my teams I cross with what the women I mentor tell me: the same blocks, the same meetings, the same fears. That's why what I give you isn't theory — they're patterns that repeat.",
      },
      {
        label: 'Both sides',
        body: "I've sat in your chair and I'm still in a similar one. I know the side of whoever decides promotions and the side of whoever fights to be heard. I help you from both at once.",
      },
    ],
  },
  services: {
    eyebrow: 'Services',
    heading: 'Work with me',
    lead: 'Direct mentoring for women who lead engineering, or are about to. Real situations, concrete plans, honest feedback.',
    cards: [
      {
        tag: 'Free',
        title: 'Diagnostic session',
        description: "Tell me what you're dealing with and I'll give you my honest read. No strings attached.",
        detail: '15 min',
        href: 'https://cal.com/yaiza-temprado/diagnostic-session',
        external: true,
        cta: 'Book free session',
      },
      {
        tag: 'Programme',
        title: 'Stop asking for permission to lead',
        description: "For you if you've been leading for a while but feel your voice doesn't carry the weight it should. Communication, positioning, organisational navigation.",
        detail: '6 sessions · €650',
        href: '/en/programas/deja-de-pedir-permiso',
        cta: 'Learn more',
      },
      {
        tag: 'Programme',
        title: 'Your first 90 days leading',
        description: "For you if you've just landed your first leadership role and nobody gave you the manual.",
        detail: '6 sessions · €650',
        href: '/en/programas/primeros-90-dias',
        cta: 'Learn more',
      },
      {
        tag: 'Session',
        title: 'Working session',
        description: 'One real problem. One hour. You leave with concrete actions to execute the next day.',
        detail: '60 min · €150',
        href: 'https://cal.com/yaiza-temprado/working-session',
        external: true,
        cta: 'Book a session',
      },
    ],
  },
  programs: {
    forWhoLabel: "Who it's for",
    sessionsHeading: 'Sessions included',
    backToServices: '← Back to services',
    items: [
      {
        slug: 'deja-de-pedir-permiso',
        tag: 'Programme',
        title: 'Stop asking for permission to lead',
        forWho:
          "For you if you've been leading for a while but feel you're not taken seriously, that your voice doesn't carry, or that you're doing the work of leading without the real authority.",
        detail: '6 sessions · €650',
        cadence: 'Every two weeks or monthly',
        sessions: [
          {
            title: 'Authority audit',
            description:
              "Where you're giving away power without noticing: in meetings, in emails, in decisions.",
          },
          {
            title: 'Communication and positioning',
            description:
              'The phrases, the patterns, the tics that undercut you. What to say instead.',
          },
          {
            title: 'Political navigation',
            description:
              'Who decides what in your organisation, how alliances work, how to have influence without flinching at the word “influence”.',
          },
          {
            title: "The conversations you're avoiding",
            description: 'Spotting them, preparing them, having them.',
          },
          {
            title: 'Visibility and authorship',
            description:
              'How to stop giving your work away and make sure your impact is seen.',
          },
          {
            title: 'A 6-month positioning plan',
            description: 'What you want to achieve, what you need to change, and how to measure it.',
          },
        ],
        buyHref: 'https://buy.stripe.com/3cI3cuato2sU2S65iDg7e02',
        cta: 'Book your spot',
      },
      {
        slug: 'primeros-90-dias',
        tag: 'Programme',
        title: 'Your first 90 days leading',
        forWho:
          "For you if you've just been promoted into your first leadership role (or you're less than 6 months in and already drowning).",
        detail: '6 sessions · €650',
        cadence: 'Every two weeks (3 months)',
        sessions: [
          {
            title: 'Situation diagnosis',
            description: "What you've inherited, what's expected of you, what nobody told you.",
          },
          {
            title: 'Positioning',
            description:
              "How you want your team, your peers and your boss to see you, and what signals you're sending right now.",
          },
          {
            title: 'Foundational conversations',
            description:
              'The first 1:1s, how to set expectations, how to listen without promising.',
          },
          {
            title: 'Your first conflict',
            description:
              'Feedback, underperformance, or the first unpopular decision. How to handle it without destroying trust.',
          },
          {
            title: 'Managing up',
            description:
              "How to communicate with your manager, ask for resources, say no, give visibility without looking like you're overselling.",
          },
          {
            title: 'Review and flight plan',
            description:
              "What's changed, which patterns you've broken, what's left for you to work on alone.",
          },
        ],
        buyHref: 'https://buy.stripe.com/cNieVceJEaZqgIWh1lg7e03',
        cta: 'Book your spot',
      },
    ],
  },
  resources: {
    eyebrow: 'Resources',
    heading: 'Guides to download',
    lead: "Practical guides on leadership, communication, and meetings. Yours to keep and use whenever you need them. For now, they're available in Spanish.",
    cardCta: 'View guide',
    backLabel: '← Back to resources',
    insideHeading: "What's inside",
    forWhoLabel: "Who it's for",
    formHeading: 'Download it free',
    formNote:
      "The guide is in Spanish. I'll send it to your email, and you'll join my newsletter on engineering leadership and influence — one email every few days, no filler. Unsubscribe anytime, one click.",
    placeholder: 'Your email',
    submit: 'Send me the guide',
    sending: 'Sending...',
    success: 'Check your email: confirm with one click and the guide is yours.',
    error: 'Something went wrong. Please try again.',
    items: [
      {
        slug: 'reuniones-productivas',
        tag: 'Guide',
        title: 'How to make your meetings count',
        summary:
          "Productive meetings don't happen by accident: they need intention, preparation, and positioning. This guide gives you the system so every conversation moves something forward.",
        forWho:
          "For you if you lead, align teams, or try to get your ideas through, and half your week disappears into meetings that decide nothing.",
        highlights: [
          {
            title: 'Before the room',
            description:
              'How to prep a meeting in 10 minutes so it arrives ready to decide, not to start the debate from scratch.',
          },
          {
            title: 'The CPS pattern',
            description:
              'Coalition, positioning, follow-through: why your ideas land "orphaned" in the meeting, and how to give them allies before you walk in.',
          },
          {
            title: 'Position without raising your voice',
            description:
              'The concrete phrases that make your input land, without having to be the one who talks the most.',
          },
          {
            title: "Don't let it die in \"we'll look into it\"",
            description:
              'How to close with owners, dates, and next steps so the decision survives the meeting.',
          },
        ],
        kitFormId: '9509093',
      },
      {
        slug: 'manager-era-ia',
        tag: 'Guide',
        title: "How you'll be measured as a manager in the age of AI",
        summary:
          "The 4 questions they'll use to evaluate you as a manager now that AI is changing the work, the 5 levels to place yourself honestly, and the signs you're ending up on the wrong side.",
        forWho:
          "For you if you lead a team and you can feel the rules changing with AI — and you're not entirely sure what's expected of you now.",
        highlights: [
          {
            title: 'The 4 questions',
            description:
              "The four criteria they'll use to measure you as a manager in the age of AI. So you know where they're looking before they do.",
          },
          {
            title: 'The 5 levels',
            description:
              'A scale to assess yourself with no spin and see which one you’re actually at today.',
          },
          {
            title: 'The red flags',
            description:
              "The warning signs that you're ending up on the redundant side, and what to do when you spot them.",
          },
          {
            title: "The 20% that doesn't get automated",
            description:
              'Where the manager work that gains value —not loses it— lives once AI enters the picture.',
          },
        ],
        kitFormId: '9509223',
      },
    ],
  },
  connect: {
    eyebrow: 'Stay in touch',
    heading: "Don't miss what's next",
    lead: 'Or find me on social media',
  },
  newsletter: {
    eyebrow: 'Newsletter',
    heading: "Don't miss what's coming",
    body: "I write about communication, influence, meetings, presence and how to lead in the age of AI: getting heard without leaving yourself behind. I send 2-3 emails a month, no more, so when one lands it's worth your time. The newsletter is in Spanish.",
    placeholder: 'Your email',
    submit: 'Subscribe',
    success: "You're in. I'll be in touch.",
    error: 'Something went wrong. Please try again.',
    duplicate: "You're already on the list.",
  },
  footer: {
    rights: 'All rights reserved.',
  },
}

export default en
