# Prativa on Canvas — PRD

## Original Problem Statement
1. Update the logo to a modern look matching the site aesthetics, with logo name "Prativa". Create a `<link rel="icon">` for the logo and update it.
2. Add SEO keywords on all pages so Google indexes them:
   `prativa, pratibha, art, canvas, commission art, custom art, art class online, art online class near me`, and others related to art.

### Follow‑up iterations from the user
- Don't use a single‑letter "P" mark — make a stylish full‑word **"Prativa"** logo, "dynamic gif‑type" (animated).
- Because the site name is **"Prativa on Canvas"**, design the logo so the word "Prativa" looks like it is **written on a canvas**.
- Update PNG favicons for mobile/home‑screen as well.

## Architecture
- Static multi‑page site served by `express.static` from `/app/frontend/server.js` on port 3000.
- HTML pages at `/app` root: `index.html`, `paintings.html`, `videos.html`, `contact.html`, `connect.html` (noindex).
- Shared assets: `/app/css/styles.css`, `/app/scripts/*.js`, `/app/icons/`, `/app/favicon/`.
- The header is injected from `/app/scripts/header.js`.

## What's been implemented (2026-01)
### Logo — "Prativa written on a canvas" (animated)
- **`/app/scripts/header.js`** now inlines a full SVG wordmark inside `.brand-wordmark` so it can use the site's already‑loaded **Pinyon Script** font (an `<img src="logo.svg">` cannot, because SVG‑as‑image runs in its own document).
- The SVG depicts a small **framed canvas** (terracotta→gold rim, warm ivory fill, subtle canvas weave texture, soft drop shadow) with the script **"Prativa"** written across it.
- SMIL animations on load:
  1. Clip‑rect **writing reveal** of the script (left→right, ~2.1s).
  2. **Brush‑stroke underline** draws in beneath the word.
  3. **Paint dot** signature pops in the top‑right corner.
  4. Looping subtle **gold shimmer sweep** across the script.
  5. A tiny **brush peeking** from the canvas corner fades in.
- `/app/icons/logo.svg` keeps a non‑animated fallback copy of the same artwork (used if the file is ever referenced directly).
- `.brand-script` (the duplicate "Prativa" text in the header) was removed; only the "on Canvas" subtitle remains beside the wordmark for cleaner identity.
- CSS: new `.brand-wordmark` rules + hover lift/tilt + responsive sizing in `/app/css/styles.css`; subtitle hidden on small screens.

### Favicon & home‑screen icons
- **`/app/favicon/favicon.svg`** — circular "P" monogram (terracotta‑gold rim + ivory disc + ink "P" + paint dot). Linked everywhere via `<link rel="icon" type="image/svg+xml">`.
- **`/app/favicon/icon-solid.svg`** — solid rounded‑square version (no transparent corners) used as the source for mobile home‑screen icons.
- Regenerated PNG bitmaps from the solid SVG:
  - `apple-touch-icon.png` (180×180) — solid rounded ivory background, ideal for iOS home screen
  - `web-app-manifest-192x192.png` and `web-app-manifest-512x512.png` — solid background, Android PWA / manifest
  - `favicon-96x96.png` — transparent variant for browser tabs
  - `favicon.ico` — multi‑resolution (16/32/48/64) regenerated from the solid mark for legacy browsers
- **`/app/favicon/site.webmanifest`** updated: correct `/favicon/...` paths (was previously `/` root), `purpose: "any maskable"`, ivory `theme_color` / `background_color` matching the brand palette.

### SEO keywords (all indexable pages)
Added/updated `<meta name="keywords">` on `index.html`, `paintings.html`, `videos.html`, `contact.html`:
`prativa, pratibha, art, canvas, commission art, custom art, art class online, art online class near me, watercolor art, acrylic painting, pastel art, pencil sketch, Bengali artist, Indian artist, original paintings, art commissions, buy art online` — plus the original page‑specific phrases and Bengali names retained on the homepage. `connect.html` (thank‑you, `noindex`) intentionally untouched.

## Verified
- `http://localhost:3000/` renders the new animated "Prativa on canvas" wordmark in the header (Pinyon Script, terracotta‑gold frame, paint dot, shimmer + brush underline animations).
- `http://localhost:3000/favicon/apple-touch-icon.png` returns a clean 180×180 solid rounded mark suitable for iOS/Android home screen.
- All four indexable pages serve the merged keyword list.

## Backlog / Future
- (Optional) Mirror the same logo + keyword updates into the `/bn/` Bengali subfolder when it is added.
- (Optional) Add JSON‑LD `Organization`/`Person` schema with `logo` pointing to `https://prativaoncanvas.com/icons/logo.svg` for richer Google snippets.
- (Optional) Add a small "Commission a piece" CTA in the header to capture the new `commission art` / `custom art` SEO traffic.
