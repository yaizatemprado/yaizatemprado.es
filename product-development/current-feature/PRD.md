# PRD: Mentoring Session Booking & Payment Flow

## Status
Ready for Development

---

## Problem Statement

Prospective mentees currently have no way to pay for a mentoring session directly on the site. The existing Calendly integration allows booking without payment, creating friction in the form of manual follow-ups and payment coordination after the fact.

The goal is to create a seamless, payment-first checkout experience: the user pays, then books — with no manual intervention required from the mentor.

---

## Target Users

Women in Engineering who are:
- Transitioning into leadership (e.g., moving from IC to first manager role)
- Already in early leadership and looking to grow into more senior positions

These users are busy, goal-oriented, and value a professional, frictionless experience.

---

## Jobs to Be Done

- When I find a mentor I trust, I want to book and pay in one smooth flow, so I can get started without back-and-forth.
- When I'm evaluating whether this mentorship is right for me, I want a low-commitment entry point (intro call), so I can decide before investing more.

---

## Proposed Solution

A streamlined booking flow built on the existing Next.js site:

- **Intro Call (free)**: User selects the intro call → enters email → receives Calendly booking link immediately via email
- **60-min Session (paid)**: User selects the session → completes Stripe checkout → receives Calendly booking link via email on payment success

This keeps Calendly for scheduling and adds Stripe as the payment layer for paid sessions.

---

## Session Types

| Session | Duration | Notes |
|---|---|---|
| Intro Call | 15 min | Free — low-commitment entry point, no payment required |
| Mentoring Session | 60 min | Core paid offering |

---

## Scope

### In Scope
- Session selection page (choose between Intro Call and 60-min Session)
- Stripe checkout integration (hosted or embedded)
- Post-payment success page
- Automated transactional email with Calendly booking link (per session type)
- Basic order record stored in Supabase (session type, payment status, email)

### Out of Scope
- User accounts / login for mentees
- Session history or dashboard for mentees
- Recurring/subscription billing
- Discount codes or coupons
- Refund flow (handled manually for now)
- Video conferencing integration

---

## User Flow

```
Landing page / Mentoring section
        |
        v
Session selection (Intro Call | 60-min Session)
        |
        +----[Intro Call]---------------------------+
        |                                           |
        v                                           v
Stripe Checkout (email, payment)           Enter email only
        |                                           |
        v                                           v
Payment success                            Record in Supabase
        |                                           |
        +-- Record in Supabase                      +-- Send Calendly link via Resend
        |                                           |
        +-- Send Calendly link via Resend           v
        |                                   Success page
        +-- Send mentor notification email
        |
        v
Success page ("Check your inbox to book your session")
        |
        v
[If no booking after 24h] --> Follow-up email sent to mentee
        |
        v
Mentee books via Calendly link
```

---

## Success Metrics

- Primary: End-to-end booking completed without any manual action from the mentor
- Secondary: Checkout drop-off rate (baseline to be established at launch)
- Secondary: Time from landing on the session page to completed booking

---

## Acceptance Criteria

- [ ] User can select between two session types
- [ ] Intro Call selection requires only an email — no payment
- [ ] 60-min Session selection initiates a Stripe checkout with the correct price
- [ ] Failed or cancelled payments do not trigger an email or Supabase record
- [ ] Successful payment or intro call signup triggers a Calendly email within 60 seconds
- [ ] Email contains a working, session-specific Calendly link
- [ ] Mentor receives a notification email when a mentee completes signup or payment
- [ ] A record (email, session type, status) is saved in Supabase for both session types
- [ ] If mentee has not booked via Calendly after 24 hours, a follow-up email is sent
- [ ] Success page clearly tells the user to check their email
- [ ] Flow works correctly on mobile

---

## UX Requirements

- Minimal steps — no account creation required
- Clear session descriptions so users can self-select without needing to ask questions
- Success state must feel reassuring and tell the user exactly what to do next
- Consistent with the existing site design (Tailwind + shadcn/ui)

---

## Technical Considerations

- **Payment**: Stripe Checkout (hosted page preferred for simplicity and PCI compliance)
- **Webhooks**: Stripe `checkout.session.completed` webhook triggers post-payment logic
- **Email**: Resend — templates: (1) mentee confirmation with Calendly link, (2) mentor notification, (3) 24h follow-up reminder
- **Storage**: Supabase table to log signups/orders (email, session type, status, created_at)
- **Calendly**: Separate booking links per session type, embedded in email
- **Follow-up**: Scheduled job (e.g., cron or Supabase function) checks for unbooked sessions after 24h and triggers reminder email via Resend
