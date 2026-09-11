import type { Dictionary } from './types'

const en: Dictionary = {
  meta: {
    title: 'Yaiza Temprado — Communication, influence and leadership in tech',
    description:
      'Senior Director of Engineering, still in the room. 1:1 mentoring for managers and directors in technical organisations: communicate with weight, get heard, run meetings that decide, and earn presence where the decisions get made. Company-funded too.',
  },
  nav: {
    about: 'About',
    expertise: 'Expertise',
    services: 'Services',
    companies: 'Companies',
    resources: 'Resources',
    contact: 'Newsletter',
  },
  hero: {
    eyebrow: 'Senior Director of Engineering',
    heading: 'Lead in tech and actually get heard.',
    lead: "I'm a Senior Director of Engineering and I deal with the same things you do, every week: meetings that decide nothing, good ideas that go nowhere, rooms where it's hard to be taken seriously. I give you the concrete frameworks to change that.",
    ctaPrimary: 'Work with me',
    ctaSecondary: 'Subscribe',
  },
  about: {
    eyebrow: 'About',
    heading: 'From the inside, not the sidelines',
    p1: "I'm not a coach who left the corporate world ten years ago and tells you what it was like back then. I've spent more than 20 years in engineering and right now I run it, as a Senior Director. I'm still inside: what I tell you about meetings, influence or presence isn't theory from a book. I use it in my own rooms every week.",
    p2: "And there's something I'm watching happen from the inside that almost nobody's talking about: how AI is changing what's expected of anyone who leads. I see it in my decisions, in my team, in what now makes a manager valuable and what no longer does. I'm not watching it from outside. I'm the one deciding it.",
    p3: "One more thing, because it explains how I work. For 20 years I've been one of the few women in the room. I know what it's like to walk in where you don't quite fit, get questioned more than you should, and earn your seat anyway. That serves anyone who feels outside the conversation: because you come from the technical side, because you're the new or the youngest person, or simply because nobody taught you how that game is played.",
    metrics: {
      years: { value: '20+', label: 'Years in engineering and leadership' },
      engineers: { value: '100+', label: 'People I have led in engineering teams' },
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
        title: 'Be taken seriously where decisions get made',
        body: "Push and you're “intense”; ease off and you “lack presence”. And in the leadership room you're still “the technical side”, not someone who leads. I help you earn presence without turning into someone you're not.",
      },
      {
        title: 'Delegate and deliver without burning out',
        body: "You delegate and then redo it because it didn't come out the way you would have, and holding the pace between one reorg and the next wears you down. We look at how to truly let go and deliver without depending on whoever holds out the longest.",
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
        body: "What I see in my teams I cross with what the people I mentor tell me: the same blocks, the same meetings, the same fears. That's why what I give you isn't theory. They're patterns that repeat.",
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
    lead: 'Direct mentoring for people who lead in tech, or are about to. Real situations, concrete plans, honest feedback.',
    companyNote:
      'Could your company pay for it? Many companies cover these programmes as training. There is a page written for whoever approves it.',
    companyCta: 'See how it works',
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
        tag: 'Programme · New managers',
        title: 'Your first 90 days leading',
        description: "For you if you've just landed your first leadership role and nobody gave you the manual.",
        detail: '6 sessions · €790 (VAT included)',
        companyDetail: 'Company: €1,200 + VAT',
        href: '/en/programas/primeros-90-dias',
        cta: 'Learn more',
      },
      {
        tag: 'Programme · Senior leaders',
        title: 'Executive presence',
        description: "For you if you've been leading for years and your voice doesn't carry the weight it should where decisions get made. Communication, positioning, political navigation.",
        detail: '6 sessions · €790 (VAT included)',
        companyDetail: 'Company: €1,200 + VAT',
        href: '/en/programas/presencia-ejecutiva',
        cta: 'Learn more',
      },
      {
        tag: 'Session',
        title: 'Working session',
        description: 'One real problem. One hour. You leave with concrete actions to execute the next day.',
        detail: '60 min · €180 (VAT included)',
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
    companyHeading: 'Could your company pay for it?',
    companyBody:
      'Many companies cover this programme as training. When the company pays it is €1,200 + VAT, invoiced to the company, with a three-way kickoff with your manager and a closing summary. There is a page written for whoever approves it.',
    companyCta: 'See the page for companies',
    items: [
      {
        slug: 'primeros-90-dias',
        tag: 'Programme · New managers',
        title: 'Your first 90 days leading',
        subtitle: 'From doing the work to the team doing it.',
        forWho:
          "For you if you've just stepped into your first leadership role (or you're less than 6 months in and already drowning).",
        detail: '6 sessions · €790 (VAT included)',
        companyDetail: 'If your company pays: €1,200 + VAT',
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
              "What's changed, which patterns you've broken, what's left for you to work on by yourself.",
          },
        ],
        buyHref: 'https://buy.stripe.com/cNieVceJEaZqgIWh1lg7e03',
        cta: 'Book your spot',
      },
      {
        slug: 'presencia-ejecutiva',
        tag: 'Programme · Directors and senior managers',
        title: 'Executive presence',
        subtitle: 'Make your voice carry where decisions get made.',
        forWho:
          "For you if you've been leading for years (a team, an area, a project you defend in front of a committee) and you notice that where decisions get made your voice doesn't carry the weight it should: you get questioned more than you should, you hear about what matters late, or you do the work of leading without the real authority.",
        detail: '6 sessions · €790 (VAT included)',
        companyDetail: 'If your company pays: €1,200 + VAT',
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
            title: 'Upward and in committee',
            description:
              'How to present to leadership and walk out with what you need: synthesis, escalating in time, asking for resources, saying no.',
          },
          {
            title: "The conversations you're avoiding",
            description:
              'Spotting them, preparing them, having them. Including the one about your own visibility: stop giving your work away.',
          },
          {
            title: 'A 6-month positioning plan',
            description: 'What you want to achieve, what you need to change, and how to measure it.',
          },
        ],
        buyHref: 'https://buy.stripe.com/3cI3cuato2sU2S65iDg7e02',
        cta: 'Book your spot',
      },
    ],
  },
  companies: {
    eyebrow: 'For companies',
    heading: '1:1 mentoring for managers and directors, paid by the company',
    lead: "This page is for two people: the one who wants to do the programme and the one who approves it. If you're the approver, in two minutes you know what it is, what your team gets and what it costs.",
    whatHeading: 'What it is',
    whatBody:
      "Six one-hour sessions, one on one with me, online, spread over three to six months. Each session works on a real situation from that week (a meeting, a decision, a pending conversation) and ends with one concrete action for the next. I deliver it myself: Senior Director of Engineering, still in the role, with more than 20 years leading technical teams.",
    programsHeading: 'Two programmes, depending on the moment',
    programs: [
      {
        title: 'Your first 90 days leading',
        forWho: 'For someone who has just stepped into their first leadership role. Expectations, first 1:1s, first conflict, managing up.',
        href: '/en/programas/primeros-90-dias',
      },
      {
        title: 'Executive presence',
        forWho: "For experienced managers and directors whose voice doesn't carry the weight it should where decisions get made. Authority, positioning, political navigation, committee.",
        href: '/en/programas/presencia-ejecutiva',
      },
    ],
    gainsHeading: 'What the company gets',
    gains: [
      {
        title: 'Meetings that decide',
        body: 'The person walks into the room with a position, steers the conversation to the point and leaves with a decision, owners and a date. You notice it by the second week.',
      },
      {
        title: 'Less noise upward',
        body: 'Status in three lines, escalations in time, fewer surprises for their manager. What a director usually asks for and almost never gets.',
      },
      {
        title: "A team that doesn't hang on one person",
        body: "Real delegation and a sustainable pace, so delivery doesn't depend on whoever holds out the longest. The opposite of burning out someone you've already invested in.",
      },
      {
        title: 'Applied the following week',
        body: 'No theory to file in a drawer. Every session ends with an action on a real problem at work, and in the next one we look at what happened.',
      },
    ],
    howHeading: 'How it works',
    steps: [
      {
        title: 'Free 15-minute diagnostic',
        body: 'With the person who will do the programme. I name the problem and tell them whether I can help, and with which programme.',
      },
      {
        title: 'A one-page proposal',
        body: 'Goals, calendar and price, so the approver has it in writing. No forty-slide deck.',
      },
      {
        title: 'Three-way kickoff',
        body: "Half an hour with the person and their manager to set two or three goals. Optional, but it's what makes the programme count for the company.",
      },
      {
        title: 'Six sessions and a closing summary',
        body: 'At the end, the company receives a summary with the goals and the progress. What is said inside the sessions is confidential: it stays between the person and me.',
      },
    ],
    priceHeading: 'Price and invoice',
    priceValue: '€1,200 + VAT',
    priceNote: 'per 6-session programme, three-way kickoff and closing summary included',
    priceBullets: [
      'Invoiced to the company, with VAT itemised.',
      'Line item: “Executive mentoring: leadership and communication”.',
      'Paid by bank transfer at the start. Two instalments if needed.',
    ],
    selfPayNote: 'Paying yourself? It is €790, VAT included.',
    selfPayCta: 'See the programmes',
    teamsHeading: 'For several managers at once',
    teamsBody: 'If you want this for more than one person on your team, write to me and we shape it to your case.',
    whoHeading: 'Who delivers it',
    whoBody:
      'Yaiza Temprado. Senior Director of Engineering, still in the role, more than 20 years in engineering, more than 100 people led over my career across 7 companies. What I teach, I use every week in my own rooms.',
    ctaPrimary: 'Book the free diagnostic',
    ctaSecondary: 'Write to me',
    ctaMailSubject: 'Company-funded mentoring',
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
      "The guide is in Spanish. I'll email it to you and you'll join my newsletter. Unsubscribe anytime, one click.",
    placeholder: 'Your email',
    submit: 'Download it free',
    sending: 'Sending...',
    success: 'Check your email: confirm with one click and the guide is yours.',
    error: 'Something went wrong. Please try again.',
    chooseHeading: 'Choose your version',
    freePlanName: 'Free',
    freePlanPrice: '€0',
    freePlanDesc: 'The first chapters to get you started.',
    paidPlanName: 'Complete',
    paidPlanDesc: 'Every chapter plus the action plan and the editable workbook.',
    paidReassurance: 'Instant download',
    paidCta: 'Get the full version',
    paidNote: 'One-time payment. The complete version includes all the free chapters plus the action plan, the complete PDF, and the editable workbook.',
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
        paid: {
          price: '€29',
          buyHref: 'https://yaizatemprado.kit.com/products/haz-tuya-tu-proxima-reunion',
          highlights: [
            {
              title: 'When you run the room',
              description:
                'How to cut the branches that derail a meeting: the parking lot and the 3 assertive phrases to steer it back without looking bad.',
            },
            {
              title: 'Coalition and reading the room',
              description:
                'The stakeholder map, the prior conversation that saves you the fight, and the one thing AI can\'t do for you.',
            },
            {
              title: 'Your 7 AI prompts',
              description:
                'PREP, MIRROR, KICKOFF, POST-MORTEM, COALITION, PRE-MORTEM and SHADOW. Ready to copy and adapt to your case.',
            },
            {
              title: 'The workbook',
              description:
                'Agendas by meeting type, the follow-up email template, the 8 questions to close well, and the 5-minute weekly journal.',
            },
          ],
        },
      },
      {
        slug: 'manager-era-ia',
        tag: 'Guide',
        title: "How you'll be measured as a manager in the age of AI",
        summary:
          "The 4 questions they'll use to evaluate you as a manager now that AI is changing the work, the 5 levels to place yourself honestly, and the signs you're ending up on the wrong side.",
        forWho:
          "For you if you lead a team and you can feel the rules changing with AI, and you're not entirely sure what's expected of you now.",
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
              'Where the manager work that gains value, not loses it, lives once AI enters the picture.',
          },
        ],
        kitFormId: '9509223',
        paid: {
          price: '€29',
          buyHref: 'https://yaizatemprado.kit.com/products/guia-completa-liderazgo-ai',
          highlights: [
            {
              title: 'Diagnose your team',
              description:
                'The aptitude × skill × willingness framework to classify your people, the difficult-conversation template, and what to do with the senior who won\'t adopt.',
            },
            {
              title: 'Redesign the work',
              description:
                'The difference between "we use AI" and "we\'re AI-first", and the 3-step method to genuinely redesign a process.',
            },
            {
              title: 'The narrative upward',
              description:
                'How to tell your transformation to the CEO without sounding like spin, with the 1-page template for your next exec review.',
            },
            {
              title: 'The workbook',
              description:
                'Six templates: self-assessment with scoring, team matrix, conversation script, workflow mapping, exec review, and a 12-week tracker.',
            },
          ],
        },
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
