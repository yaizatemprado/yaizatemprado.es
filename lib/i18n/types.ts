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
    // Spanish only: the club runs in Spanish.
    club?: string
  }
  hero: {
    eyebrow: string
    heading: string
    lead: string
    ctaPrimary: string
    ctaSecondary: string
    // Optional overrides for where the two hero buttons go (default: #services and #contact).
    ctaPrimaryHref?: string
    ctaSecondaryHref?: string
    // Words inside the lead that link somewhere (the first time they appear), e.g. «Club Pericia» → its page.
    leadLink?: { text: string; href: string }
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
    // The ways to work with Pericia, in the order of the messaging guide (Club · Mentoría individual · Empresas),
    // shown as a list: one row each, with its own text links.
    cards: Array<{
      title: string
      // Small line under the title (group or individual, edition date…).
      tag: string
      description: string
      // A card with several links shows them as a menu, one row each with its `detail`.
      links: Array<{ label: string; href: string; external?: boolean; detail?: string }>
    }>
    // One line under the list for whoever doesn't know which fits.
    note: { text: string; cta: string; href: string; external?: boolean }
  }
  programs: {
    forWhoLabel: string
    sessionsHeading: string
    backToServices: string
    // "Does your company pay for it?" block on every programme page.
    companyHeading: string
    companyBody: string
    companyCta: string
    // Link to the article on asking the company to pay. Optional per locale.
    companyGuideCta?: string
    items: Array<{
      slug: string
      tag: string
      title: string
      subtitle?: string
      forWho: string
      // Short text for Google (~155 characters); the page falls back to forWho.
      seoDescription?: string
      detail: string
      companyDetail?: string
      cadence: string
      sessions: Array<{ title: string; description: string }>
      buyHref: string
      cta: string
    }>
  }
  // /empresas — Método Pericia para empresas: the group programme for a team of managers.
  // No prices here: only what is in business/tarifas-2026.md gets published.
  companies: {
    // Short text for Google (~155 characters).
    seoDescription: string
    eyebrow: string
    heading: string
    lead: string
    problemHeading: string
    problemQuote: string
    problemBody: string
    whyHeading: string
    whyLead: string
    why: Array<{ title: string; body: string; source: string }>
    howHeading: string
    howLead: string
    steps: Array<{ title: string; body: string }>
    measureHeading: string
    measureLead: string
    measures: Array<{ title: string; body: string }>
    whoHeading: string
    whoBody: string
    // Where she led teams, under the bio (Yaiza, 25/11, from her LinkedIn).
    whoCompanies: { label: string; names: string[]; countriesLabel: string; countries: string[] }
    // FUNDAE: la primera pregunta de quien tiene que aprobar la factura.
    fundaeHeading: string
    fundaeBody: string
    ctaHeading: string
    ctaBody: string
    ctaPrimary: string
    ctaSecondary: string
    ctaMailSubject: string
    // For whoever lands here looking for individual mentoring for one person.
    individual: { text: string; cta: string }
  }
  resources: {
    eyebrow: string
    heading: string
    lead: string
    cardCta: string
    // Card labels on the /recursos hub, by format (the item's own tag is for its page)
    guideLabel: string
    articleLabel: string
    // Hub layout: the pillar pages first, then everything else, then the company box
    startHeading: string
    moreHeading: string
    companyHeading: string
    companyBody: string
    companyCta: string
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
    // The home's newsletter pitch (the articles keep newsletter.body).
    body: string
    // Small reassurance under the form.
    note: string
    lead: string
  }
  newsletter: {
    // Short text for Google (~155 characters).
    seoDescription: string
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
