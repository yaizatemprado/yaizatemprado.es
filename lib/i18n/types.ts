export type Dictionary = {
  meta: {
    title: string
    description: string
  }
  nav: {
    about: string
    expertise: string
    services: string
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
