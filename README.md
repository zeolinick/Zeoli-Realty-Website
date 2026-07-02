# Zeoli Realty — zeolirealty.com

The marketing website for Zeoli Realty, a boutique real estate team serving
Southeast Michigan. Built with Next.js (App Router), Tailwind CSS v4, and the
2026 Zeoli Realty brand system (Newsreader + Plus Jakarta Sans, monochrome
palette, arch motif).

## Local development

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Editing content

All copy lives in `src/content/` — no code changes needed for content edits:

| File | Contains |
|---|---|
| `site.ts` | Contact info, stats, nav, offices, social links |
| `communities.ts` | The 11 city pages (add/remove cities here) |
| `sell.ts` | Sell page copy (from the listing presentation) |
| `buy.ts` | Buy page copy |
| `testimonials.ts` | Featured quotes and public reviews |
| `team.ts` | Founder bio, team roles, agent roster |

**Before launch, review `team.ts`** — the agent roster was compiled from
public sources and needs confirming/trimming.

## Leads → Follow Up Boss

Both forms (home valuation + contact) POST to `/api/lead`. To pipe leads into
Follow Up Boss, set one environment variable in your host:

```
FUB_API_KEY=<Follow Up Boss → Admin → API → your API key>
```

Without the key, submissions are accepted and logged (so previews work), but
not forwarded. Leads are sent via FUB's Events API and will appear with
source `zeolirealty.com`.

## Deploying (recommended: Vercel)

1. Import this GitHub repo at vercel.com/new.
2. Add the `FUB_API_KEY` environment variable.
3. Point the `zeolirealty.com` domain at Vercel (update DNS where the domain
   is registered — Google Domains registrations now live at Squarespace
   Domains).

## Adding real photography

Current photos were pulled from the listing presentation. To swap/add:

1. Drop optimized JPGs into `public/images/` (≤ 2400px wide is plenty).
2. Reference them from pages/content.
3. Agent headshots: add files like `public/images/agents/first-last.jpg`
   and wire a `photo` field in `src/content/team.ts`.

## Brand

Full brand guidelines: `docs/brand/Zeoli-Realty-Brand-Guidelines.md`.
Logo assets: `public/brand/`. Rules summary for AI tools: `CLAUDE.md`.
