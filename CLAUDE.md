# Zeoli Realty Website

Marketing site for Zeoli Realty — a boutique real estate team in Southeast
Michigan. Next.js (App Router) + Tailwind v4, deployable on Vercel.

## Commands
- `npm run dev` — dev server
- `npm run build` — production build (must pass before pushing)
- `npm run lint` — eslint

## Architecture
- All copy/data lives in `src/content/*.ts` — edit content there, not in pages.
- Shared UI primitives in `src/components/ui.tsx`; layout chrome in
  `Header.tsx` / `Footer.tsx` / `Logo.tsx`.
- Lead forms POST to `src/app/api/lead/route.ts`, which forwards to Follow Up
  Boss when `FUB_API_KEY` is set (otherwise it logs and accepts).

## Brand rules (follow exactly — full guidelines in docs/brand/)
- Colors: ink `#141414`, paper `#fff`, bone `#F4F2EC`, stone `#8C8B7E`,
  graphite `#6B6B66`, slate `#7C7A72`, linen border `#D6D3CA`. Monochrome —
  no accent hues. Backgrounds white or bone; Ink carries the brand.
- Type: headlines = Newsreader serif (weight 500–600) with ONE italic accent
  word (`.display` + `<em>`); body/UI = Plus Jakarta Sans. Eyebrows: 700,
  uppercase, letter-spacing 0.14em (`.eyebrow`).
- Signature device: arch-topped image crops (`.arch`), echoing the doorway
  logo mark. Rounded rectangles ~10px radius — never full pills.
- Voice: confident not loud, warm & clear, long-term. Avoid hype,
  exclamation overload, and "dream home" filler.
- Never make it look like a tech portal (Zillow/Redfin).
- The wordmark is rendered as live text in `Logo.tsx` (not the SVG lockups —
  those depend on a web font that can't load inside `<img>`).
