export type Dictionary = {
  meta: {
    title: string
    description: string
  }
  nav: {
    about: string
    expertise: string
    services: string
    companies: string
    resources: string
    contact: string
  }
  hero: {
    eyebrow: string
    heading: string
    lead: string
    ctaPrimary: string
    ctaSecondary: string
  }
  about: {
    eyebrow: string
    heading: string
    p1: string
    p2: string
    p3: string
  }
  expertise: {
    eyebrow: string
    heading: string
    cards: Array<{ title: string; body: string }>
  }
  proof: {
    eyebrow: string
    heading: string
    cards: Array<{ label: string; body: string }>
  }
  services: {
    eyebrow: string
    heading: string
    lead: string
    // Banner under the cards: the company-paid route, one line + link to /empresas.
    companyNote: string
    companyCta: string
    cards: Array<{
      tag: string
      title: string
      description: string
      detail: string
      // Optional second price line: what it costs when the company pays.
      companyDetail?: string
      href: string
      cta: string
      external?: boolean
    }>
  }
  programs: {
    forWhoLabel: string
    sessionsHeading: string
    backToServices: string
    // "Does your company pay for it?" block on every programme page.
    companyHeading: string
    companyBody: string
    companyCta: string
    items: Array<{
      slug: string
      tag: string
      title: string
      subtitle?: string
      forWho: string
      detail: string
      companyDetail?: string
      cadence: string
      sessions: Array<{ title: string; description: string }>
      buyHref: string
      cta: string
    }>
  }
  // /empresas — the page written for the person who approves the budget.
  companies: {
    eyebrow: string
    heading: string
    lead: string
    whatHeading: string
    whatBody: string
    programsHeading: string
    programs: Array<{ title: string; forWho: string; href: string }>
    gainsHeading: string
    gains: Array<{ title: string; body: string }>
    howHeading: string
    steps: Array<{ title: string; body: string }>
    priceHeading: string
    priceValue: string
    priceNote: string
    priceBullets: string[]
    selfPayNote: string
    selfPayCta: string
    // FUNDAE: la primera pregunta de quien tiene que aprobar una factura de 1.200 €.
    fundaeHeading: string
    fundaeBody: string
    teamsHeading: string
    teamsBody: string
    whoHeading: string
    whoBody: string
    ctaPrimary: string
    ctaSecondary: string
    ctaMailSubject: string
  }
  resources: {
    eyebrow: string
    heading: string
    lead: string
    cardCta: string
    backLabel: string
    insideHeading: string
    forWhoLabel: string
    formHeading: string
    formNote: string
    placeholder: string
    submit: string
    sending: string
    success: string
    error: string
    // Labels for the optional comparison table + plan cards (when item.paid exists)
    chooseHeading: string
    freePlanName: string
    freePlanPrice: string
    freePlanDesc: string
    paidPlanName: string
    paidPlanDesc: string
    paidReassurance: string
    paidCta: string
    paidNote: string
    items: Array<{
      slug: string
      tag: string
      title: string
      summary: string
      forWho: string
      highlights: Array<{ title: string; description: string }>
      // Kit form dedicated to THIS guide: its incentive email delivers the PDF
      // and it subscribes the person to the single newsletter sequence.
      kitFormId: string
      // Optional paid upgrade: a superset of the free guide. When present, the
      // page renders a second tier (what the paid version adds) under the free
      // download, with a checkout CTA to the Kit product.
      paid?: {
        price: string
        buyHref: string
        highlights: Array<{ title: string; description: string }>
      }
    }>
  }
  connect: {
    eyebrow: string
    heading: string
    lead: string
  }
  newsletter: {
    eyebrow: string
    heading: string
    body: string
    placeholder: string
    submit: string
    success: string
    error: string
    duplicate: string
  }
  footer: {
    rights: string
  }
}
