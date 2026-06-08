export type Dictionary = {
  meta: {
    title: string
    description: string
  }
  nav: {
    about: string
    expertise: string
    services: string
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
    metrics: {
      years: { value: string; label: string }
      engineers: { value: string; label: string }
      companies: { value: string; label: string }
      transitions: { value: string; label: string }
    }
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
    cards: Array<{
      tag: string
      title: string
      description: string
      detail: string
      href: string
      cta: string
      external?: boolean
    }>
  }
  programs: {
    forWhoLabel: string
    sessionsHeading: string
    backToServices: string
    items: Array<{
      slug: string
      tag: string
      title: string
      forWho: string
      detail: string
      cadence: string
      sessions: Array<{ title: string; description: string }>
      buyHref: string
      cta: string
    }>
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
