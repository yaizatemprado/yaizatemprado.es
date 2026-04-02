# My Project
My personal website, offering mentoring services.

## Tech Stack
- Next.js 14 (App Router, static export)
- TypeScript (strict)
- Tailwind CSS + shadcn/ui
- GitHub Pages (hosting)

## Architecture
- `app/[locale]/` — bilingual pages (en/es) with dictionary-based i18n (`lib/i18n/`)
- `app/[locale]/newsletter/` — newsletter signup page
- Static export via `next build` → `out/` directory
- GitHub Actions workflow deploys `out/` to GitHub Pages on push to main

## Rules
- Use shadcn/ui components
- Server components by default
- Small files (<200 lines)
- Always handle loading/error/empty states
- Plan changes before implementing — get explicit "go" before writing files

## Commands
- npm run dev (development)
- npm run build (production build)
- npm test (run tests)

## Permissions
### Auto-Approved
- npm, git add, git commit, git diff

### Ask Before Running
- git push, rm -rf
