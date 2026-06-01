import type { Dictionary } from './types'

const en: Dictionary = {
  meta: {
    title: 'Yaiza Temprado — Engineering Leadership for Women',
    description:
      'Yaiza Temprado helps women in engineering leadership be heard in senior decision forums — with clearer framing, stronger influence, and sustainable delivery.',
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
    heading: 'Helping women lead engineering with confidence',
    lead: 'I work with senior engineers and leaders to navigate the realities of technical leadership — visibility, influence, delivery, and power — without losing themselves in the process.',
    ctaPrimary: 'Explore mentoring',
    ctaSecondary: 'Subscribe',
  },
  about: {
    eyebrow: 'About',
    heading: 'How I think about engineering leadership',
    p1: "I've spent most of my career working inside engineering organisations — building teams, scaling platforms, and delivering under real constraints. What that taught me is that leadership failures rarely come from lack of intelligence or effort. They come from unclear expectations, poor incentives, and systems that reward the wrong behaviour.",
    p2: "I care deeply about technical credibility, not because leaders need to be the best engineers in the room, but because trust is built when decisions are grounded in reality. I've seen what happens when leadership drifts too far from the work — delivery suffers, people disengage, and the same problems repeat under different names.",
    p3: "Much of my focus today is on supporting women in engineering as they move into leadership roles. Not by teaching them to be louder or more confident, but by helping them navigate power, visibility, and decision-making without compromising their values or their technical judgement.",
    metrics: {
      years: { value: '15+', label: 'Years working inside engineering organisations' },
      engineers: { value: '100+', label: "Engineers whose work I've supported and reviewed" },
      companies: { value: '7', label: 'Companies across different countries and stages of scale' },
      transitions: { value: '20+', label: 'Leadership transitions supported' },
    },
  },
  expertise: {
    eyebrow: 'Expertise',
    heading: 'Areas of focus',
    cards: [
      {
        title: 'Supporting engineers as they step into leadership',
        body: "Many of the people I work with are excellent engineers who suddenly find themselves leading others. I help them make sense of that transition, build authority in a way that feels authentic, and stay connected to the work without trying to do everything themselves.",
      },
      {
        title: 'Being heard in senior decision-making forums',
        body: "I work with women who are doing solid work but aren't always heard in senior rooms. We focus on how decisions are framed, when to speak, and how to communicate in ways that carry weight — without performing confidence or becoming someone they're not.",
      },
      {
        title: 'Delivering consistently without burning people out',
        body: "I've seen too many teams rely on goodwill, heroics, and late nights to keep things moving. I focus on creating ways of working that are predictable and sustainable, where delivery doesn't depend on who is willing to sacrifice the most.",
      },
      {
        title: 'Working with product without losing engineering judgement',
        body: 'Working closely with product and design matters, but it only works when roles and expectations are clear. I help engineering teams stay engaged in product decisions while protecting technical judgement and long-term health.',
      },
    ],
  },
  proof: {
    eyebrow: 'Proof',
    heading: 'Selected outcomes',
    cards: [
      {
        label: 'Delivery',
        body: 'Led engineering delivery across the organisation, significantly reducing cycle time by focusing on flow, clarity of ownership, and fewer competing priorities.',
      },
      {
        label: 'Culture',
        body: 'Established an engineering culture aligned with company values, with a strong emphasis on developer experience, predictability, and continuous improvement — moving away from heroics and fire-fighting.',
      },
      {
        label: 'Ways of working',
        body: 'Led the agile transformation at my current organisation, shifting ways of working to improve delivery reliability, decision-making, and trust between engineering and product.',
      },
    ],
  },
  services: {
    eyebrow: 'Services',
    heading: 'Work with me',
    lead: 'Direct mentoring for women in engineering leadership — or about to be. Real situations, concrete plans, honest feedback.',
    cards: [
      {
        tag: 'Free',
        title: 'Diagnostic session',
        description: "Tell me what you're dealing with and I'll give you my honest read. No strings attached.",
        detail: '15 min',
        href: 'https://cal.com/yaiza-temprado/diagnostico',
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
        href: 'https://cal.com/yaiza-temprado/sesion',
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
              'Who decides what in your organisation, how alliances work, how to have influence without flinching at the word «influence».',
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
        buyHref: 'https://buy.stripe.com/bJe9AS1WS3wYcsG5iDg7e01',
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
        buyHref: 'https://buy.stripe.com/cNieVcbxs0kM50e8uPg7e00',
        cta: 'Book your spot',
      },
    ],
  },
  resources: {
    eyebrow: 'Resources',
    heading: 'Guides to download',
    lead: 'Practical guides on leadership, communication, and meetings. Yours to keep and use whenever you need them.',
    cardCta: 'View guide',
    backLabel: '← Back to resources',
    insideHeading: "What's inside",
    forWhoLabel: "Who it's for",
    formHeading: 'Download it free',
    formNote:
      "I'll send it to your email. And you'll join my newsletter on engineering leadership and influence — one email every few days, no filler. Unsubscribe anytime, one click.",
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
    body: "I write about engineering leadership, influence, and what it takes to lead without losing yourself in the process. Subscribe to stay in the loop.",
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
