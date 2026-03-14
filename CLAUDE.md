# My Project
My personal website, offering mentoring services.

## Tech Stack
- Next.js 14 (App Router)
- TypeScript (strict)
- Tailwind CSS + shadcn/ui
- Supabase (Postgres, RLS enabled on booking tables)
- Stripe (paid session checkout)
- Resend (transactional emails)

## Architecture
- `app/[locale]/` — bilingual pages (en/es) with dictionary-based i18n (`lib/i18n/`)
- `app/book/` — booking flow (intro + paid sessions)
- `app/api/` — API routes using Supabase service role (bypasses RLS)
- `lib/rate-limit.ts` — in-memory rate limiting (5 req/IP/min) on booking endpoints
- `lib/ics.ts` — .ics calendar invite generation, attached to booking confirmation emails
- `lib/enrichment/` — subscriber classification pipeline (cron-driven)
- Vercel cron jobs configured in `vercel.json`

## Rules
- Use shadcn/ui components
- Server components by default
- Small files (<200 lines)
- Always handle loading/error/empty states
- All times use Europe/Madrid timezone for display, UTC for storage and .ics files
- Plan changes before implementing — get explicit "go" before writing files

## Commands
- npm run dev (development)
- npm run build (production build)
- npm test (run tests)

## Permissions
### Auto-Approved
- npm, git add, git commit, git diff

### Ask Before Running
- git push, rm -rf, database migrations