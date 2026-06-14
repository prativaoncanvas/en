# Prativa on Canvas — PRD

## Original Problem Statement
Look into the code from main branch and do below:
1. Update the logo to a modern looking one to match the site aesthetics with logo name "Prativa". Create a `link rel="icon"` for the logo as well and update it.
2. Look into the page SEO and add the keywords below on all pages so Google indexes them:
   `prativa, pratibha, art, canvas, commission art, custom art, art class online`, and others related to art.

## Architecture
- Static multi-page site served by `express.static` from `/app/frontend/server.js` (port 3000)
- HTML pages live at `/app` root: `index.html`, `paintings.html`, `videos.html`, `contact.html`, `connect.html` (thank-you, noindex)
- Shared assets: `/app/css/styles.css`, `/app/scripts/*.js`, `/app/icons/`, `/app/favicon/`, `/app/arts/`, `/app/publications/`
- Header injected from `/app/scripts/header.js`

## What's been implemented (2026-01)
- **New modern SVG logo** at `/app/icons/logo.svg` — ivory disc, terracotta→gold gradient ring, hand-drawn "P" monogram with ink gradient, painter's brush stroke at base, signature paint dot. Matches warm palette.
- **New SVG favicon** at `/app/favicon/favicon.svg` — bolder solid terracotta-gold disc with ivory inner and "P" monogram, optimized for small sizes. Already linked via `<link rel="icon" type="image/svg+xml">` on every page.
- **Header updated** in `/app/scripts/header.js` to reference `icons/logo.svg` (instead of the old `logo.png`).
- **SEO keywords** added to all indexable pages (`index.html`, `paintings.html`, `videos.html`, `contact.html`). Common keyword set on every page:
  `prativa, pratibha, art, canvas, commission art, custom art, art class online, art online class near me, watercolor art, acrylic painting, pastel art, pencil sketch, Bengali artist, Indian artist, original paintings, art commissions, buy art online` — plus page-specific terms and the existing Bengali names retained on the homepage.
- `connect.html` (thank-you) intentionally left without keywords (it is `noindex`).

## Verified
- Site rendered at `http://localhost:3000/` — new logo appears in header, harmonizes with "Prativa on Canvas" wordmark.
- All four indexable pages serve the merged keyword list.

## Backlog / Future
- (Optional) Regenerate PNG favicons (`favicon-96x96.png`, `apple-touch-icon.png`, `web-app-manifest-192x192.png`, `web-app-manifest-512x512.png`) from the new mark for Safari iOS / Android home screen consistency.
- (Optional) Add JSON-LD `Organization` schema with the new logo URL for richer Google snippets.
- (Optional) Mirror the same keyword/logo changes into the `/bn/` Bengali subfolder when it's created.
