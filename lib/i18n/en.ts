import type { Dictionary } from './types'

const en: Dictionary = {
  meta: {
    title: 'Yaiza Temprado — Communication, influence and leadership',
    description:
      'Founder of Pericia. 20 years in corporate, from junior engineer to Senior Director. Leadership and communication to get your ideas through.',
  },
  nav: {
    about: 'About',
    expertise: 'Expertise',
    services: 'Work with me',
    companies: 'Companies',
    resources: 'Articles and guides',
    contact: 'Newsletter',
  },
  hero: {
    eyebrow: 'Leadership mentoring · Founder of Pericia',
    heading: 'Lead and actually get heard.',
    lead: "I spent 20 years in corporate, in seven companies and two countries, and climbed every rung of the chain of command: from junior engineer to Senior Director. Meetings that decide nothing, good ideas that go nowhere, rooms where it's hard to be taken seriously: I know them because they were mine. I give you the concrete frameworks to change that.",
    ctaPrimary: 'Work with me',
    ctaSecondary: 'Subscribe',
  },
  about: {
    eyebrow: 'About',
    heading: "I've climbed every rung of the chain of command",
    p1: "I'm not telling you this second-hand. I spent 20 years in corporate, in seven companies and two countries, and I held every rung: from junior engineer to manager, director and Senior Director. What I tell you about meetings, influence or presence isn't theory from a book: it's the rooms I've sat in and the rooms I've run.",
    p2: "And there's something almost nobody's telling you: how AI is changing what's expected of anyone who leads. I saw it in my teams and in my own decisions: what now makes a manager valuable and what no longer does. It's not a prediction, it's already happening.",
    p3: "One more thing, because it explains how I work. For 20 years I was one of the few women in the room. I know what it's like to walk in where you don't quite fit, get questioned more than you should, and earn your seat anyway. That serves anyone who feels outside the conversation: because you come from the technical side, because you're the new or the youngest person, or simply because nobody taught you how that game is played.",
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
        title: 'Positioning and executive presence',
        body: "You're already doing the next level's job, but when promotion comes up you're told “not yet”, that you lack executive presence. We look at what signals you send in every meeting, email and decision, and what has to change so leadership already sees you on the next rung, without turning into someone you're not.",
      },
      {
        title: 'Delegate and deliver without burning out',
        body: "You delegate and then redo it because it didn't come out the way you would have, and holding the pace between one reorg and the next wears you down. We look at how to truly let go and deliver without depending on whoever holds out the longest.",
      },
      {
        title: 'Lead when AI changes everything',
        body: "Your team already works with AI and you're not entirely sure what's expected of you now. I help you get your bearings: which parts of your work gain value, which lose it, and how not to fall behind your own people.",
      },
    ],
  },
  proof: {
    eyebrow: 'Why me',
    heading: "Why it helps that I've been through all of it",
    cards: [
      {
        label: 'Every rung',
        body: "Engineer, manager, director, Senior Director. I don't tell you what leading is like from a book: I tell you from every rung I've held and every room I've run.",
      },
      {
        label: 'Mentoring',
        body: "What I saw in my teams I cross with what the people I mentor tell me: the same blocks, the same meetings, the same fears. That's why what I give you isn't theory. They're patterns that repeat.",
      },
      {
        label: 'Both sides',
        body: "I've sat in your chair and in the chair of whoever decides. I know the side of whoever decides promotions and the side of whoever fights to be heard. I help you from both at once.",
      },
    ],
  },
  services: {
    eyebrow: 'Services',
    heading: 'Work with me',
    lead: 'Two ways to work with Pericia. We work on real situations from this week, not theory.',
    cards: [
      {
        title: 'Individual mentoring',
        tag: 'Tailored to you',
        description: 'Real situations, concrete plans, honest feedback. Two six-session packs, depending on where you are, or a working session.',
        links: [
          { label: 'Your first 90 days leading', detail: "If you've just started leading", href: '/en/programas/primeros-90-dias' },
          { label: 'Executive presence', detail: "If you've led for years and your voice doesn't carry the weight it should", href: '/en/programas/presencia-ejecutiva' },
          { label: 'Working session', detail: 'One real problem, one hour', href: 'https://cal.com/yaiza-temprado/working-session', external: true },
        ],
      },
      {
        title: 'For companies',
        tag: 'For a team',
        description: 'The same method inside your company, for a team.',
        links: [{ label: 'Método Pericia for companies', href: '/en/empresas' }],
      },
    ],
    note: {
      text: 'Not sure which one fits?',
      cta: "Let's talk for 15 minutes",
      href: 'https://cal.com/yaiza-temprado/diagnostic-session?canal=web-servicios',
      external: true,
    },
  },
  programs: {
    forWhoLabel: "Who it's for",
    sessionsHeading: 'Sessions included',
    backToServices: '← Work with me',
    companyHeading: 'Could your company pay for it?',
    companyBody:
      'Many companies cover this programme as training. The price is the same, invoiced to the company, with a three-way kickoff with your manager and a closing summary.',
    companyCta: 'For a team of managers? Método Pericia for companies',
    companyGuideCta: 'How to ask your company',
    items: [
      {
        slug: 'primeros-90-dias',
        seoDescription: 'From doing the work to your team doing it. Six individual mentoring sessions for your first leadership role: expectations, first conflict and managing up.',
        tag: 'Programme · New managers',
        title: 'Your first 90 days leading',
        subtitle: 'From doing the work to the team doing it.',
        forWho:
          "For you if you've just stepped into your first leadership role (or you're less than 6 months in and already drowning).",
        detail: '6 sessions · €790 (VAT included)',
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
              'The first one-to-one meetings with your team, how to set expectations, how to listen without promising.',
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
        seoDescription: 'So your voice carries weight where decisions get made. Six individual mentoring sessions for experienced leaders: authority, positioning and influence.',
        tag: 'Programme · Directors and senior managers',
        title: 'Executive presence',
        subtitle: 'Make your voice carry where decisions get made.',
        forWho:
          "For you if you've been leading for years (a team, an area, a project you defend in front of a committee) and you notice that where decisions get made your voice doesn't carry the weight it should: you get questioned more than you should, you hear about what matters late, you do the work of leading without the real authority, or for the next rung you keep hearing “not yet”.",
        detail: '6 sessions · €790 (VAT included)',
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
    seoDescription: 'Pericia\'s method inside your company, for a team of managers: real cases, their own managers involved from the start and a way to measure the change.',
    eyebrow: 'For companies',
    heading: 'Método Pericia for companies',
    lead: 'The same method inside your company, for a team. A group of managers works over several months on their own real cases, with their own managers involved from the start and a way to measure whether anything has changed.',
    problemHeading: "The trouble with the usual course",
    problemQuote:
      "A standard management course isn't bad. You watch it, you find it interesting, and then you go back to your desk and at most you take away three ideas. 95% of how you manage stays the same.",
    problemBody:
      "That's why management training gets measured on attendance and satisfaction figures, and almost never on evidence of change. Meanwhile, managers keep taking to HR what they should be able to handle themselves: the performance conversation, the conflict in the team, the hard feedback.",
    whyHeading: 'What makes it stick',
    whyLead: "The tool takes an afternoon to learn. Whether it gets used depends on three things a course doesn't touch.",
    why: [
      {
        title: "The manager's own manager",
        body: 'What best predicts whether training gets used on the job is where the person goes back to: support from their own manager and a team that welcomes the change.',
        source: 'Blume et al., 2010: 89 studies.',
      },
      {
        title: 'Real cases, not more sessions',
        body: "Coaching works, but the number of sessions doesn't predict the result. What does is working on your own goals between one session and the next.",
        source: 'Jones, Woods & Guillaume, 2016: 17 studies.',
      },
      {
        title: 'Observation and feedback',
        body: 'With theory and demonstration, 5-10% of people apply the new skill at work. Add observation and feedback on the job, and 80-90% do.',
        source: 'Joyce & Showers, from teacher-training research.',
      },
    ],
    howHeading: 'How it works',
    howLead: 'For small, closed groups of managers, with one session a month.',
    steps: [
      {
        title: 'Design session',
        body: "With HR and the managers' own managers. We agree what a good result looks like, how we'll measure it and what each of them does before, during and after the sessions. Without them on board, nothing changes.",
      },
      {
        title: 'Monthly sessions',
        body: "4, 6 or 8 sessions of 90 minutes, one a month. Each one on a real case from the group's teams: a performance conversation, hard feedback, delegating, running a team with AI in the mix. Between sessions there's an open thread, so what happens in week two gets an answer in week two.",
      },
      {
        title: 'Observation, optional',
        body: "I sit in on two of each manager's real meetings (one with someone from their team and one with the whole team), give feedback the same day and leave a short written note. It's booked per person, so you can give it to whoever needs it most.",
      },
      {
        title: 'Closing report',
        body: 'At the end, against the measures we agreed in the design session.',
      },
    ],
    measureHeading: "How it's measured",
    measureLead: "The measures are settled in the design session. Here's my starting proposal.",
    measures: [
      {
        title: 'Escalations to HR',
        body: 'How many basic management questions reach HR from each manager in the group, before and during. Every month.',
      },
      {
        title: 'Four pulse questions',
        body: "Only for the group's teams, at the start and at the end: “My manager gives me feedback that helps me improve”, “Disagreements in our team are handled constructively”, “I know what's expected of me and how my work is evaluated”, “My manager supports my development”.",
      },
      {
        title: 'One real conversation',
        body: 'Each manager runs one hard conversation from their own team during the programme, prepared in the group and reviewed afterwards.',
      },
      {
        title: 'Departures that hurt',
        body: "At 12 months: how many people you didn't want to lose have left the group's teams, compared with the rest.",
      },
    ],
    whoHeading: "Who's behind it",
    whoBody:
      "Yaiza Temprado, founder of Pericia. I started out teaching Machine Learning at Universidad Europea, then spent 20 years in corporate, in seven companies, from junior engineer to Senior Director, with more than 100 people reporting to me over my career. That's how the managers in my organisation grew: working on their real cases with me, their manager. In October I left my role and founded Pericia.",
    whoCompanies: {
      label: 'Has led teams at',
      names: ['Amadeus', 'Telefónica I+D', 'SICPA', 'Busuu'],
      countriesLabel: 'With teams in',
      countries: ['Spain', 'Germany', 'India', 'the US', 'Australia'],
    },
    fundaeHeading: 'Can it be funded through FUNDAE?',
    fundaeBody:
      "It may apply if the Spanish entity of the company is the one contracting. The company handles it from its own FUNDAE platform, and it has to be filed before the programme starts. I'll bring the paperwork.",
    ctaHeading: 'Shall we look at it for your company?',
    ctaBody: "Tell me how many managers there are and what worries you about them, and I'll send you a proposal.",
    ctaPrimary: 'Ask me for a proposal',
    ctaSecondary: 'Book a call',
    ctaMailSubject: 'Método Pericia for companies',
    individual: {
      text: 'Looking for something else? Individual mentoring for one person, paid by the company:',
      cta: 'See the packs',
    },
  },
  resources: {
    eyebrow: 'Articles and guides',
    heading: "When being good at your job isn't enough",
    lead: "On leadership, communication and growing inside your company. Articles you read here. Guides I send to your inbox, and for now they're in Spanish.",
    cardCta: 'View guide',
    guideLabel: 'Free guide',
    articleLabel: 'Article',
    startHeading: 'Where to start',
    moreHeading: 'More articles and guides',
    companyHeading: 'Want your company to pay for it?',
    companyBody: 'Many companies have a training budget for exactly this.',
    companyCta: "Here's how to ask",
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
    eyebrow: 'Newsletter',
    heading: 'What works, told from the inside',
    body: "I write about what has worked for me in 20 years of meetings: getting your ideas through, preparing a difficult conversation, showing what you bring and asking for what you want. And how to let AI do the heavy lifting. The newsletter is in Spanish.",
    note: 'Unsubscribe whenever you like, in one click.',
    lead: 'Or find me on social media',
  },
  newsletter: {
    seoDescription: 'Two or three emails a month on what has worked for me in 20 years of meetings: getting your ideas through and letting AI do the heavy lifting.',
    eyebrow: 'Newsletter',
    heading: 'What works, told from the inside',
    body: "I write about what has worked for me in 20 years of meetings: getting your ideas through, preparing a difficult conversation, showing what you bring and asking for what you want. And how to let AI do the heavy lifting. I send 2 or 3 emails a month, no more, so when one lands it's worth your time. The newsletter is in Spanish.",
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
