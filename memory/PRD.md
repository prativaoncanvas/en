# Prativa on Canvas — PRD

## Original problem statement
> Look into my website from main branch and update the overall look and feel for a professional looking website with seo tags and stylish responsive look and feel. Update the website name "Prativa on Canvas" in an artistic way as well. Use less AI credits.

## User choices captured
- **Site type:** artist/painter portfolio (with blog/personal touch & light shop intent via WhatsApp enquiry)
- **Visual vibe:** elegant minimal gallery × bold artistic / painterly
- **Logo treatment:** elegant calligraphy script + modern serif
- **SEO targeting keywords:** Prativa Debsharma, watercolor artist, India, Bengali, USA, Jacksonville
- **Production domain:** `https://prativaoncanvas.com`
- **About section:** auto-drafted bio + monogram placeholder portrait
- **Bilingual:** full 1-to-1 Bengali mirror at `/bn/`

## Architecture
- Pure static site at `/app` (HTML / CSS / vanilla JS) — no MongoDB/backend logic needed
- Served on port 3000 by a tiny Express static server in `/app/frontend/server.js`
- Stub FastAPI in `/app/backend/server.py` exists only so supervisor stays green; no API used by the site
- Existing JS modules untouched (only `paintings.js::getImageBase` adjusted to use `/arts/` for bn pages)
- Bengali mirror under `/app/bn/` shares the same `/css`, `/scripts`, `/arts`, `/favicon` via absolute paths

## What's been implemented (2026-01)
### Iteration 1 — redesign + SEO
- **Refreshed visual identity**: warm paper-ivory palette (#f7f1e3), terracotta accent (#b65a3c), deep ink text — replaces the old purple→blue gradient
- **Artistic brand mark** for "Prativa on Canvas": gradient-ink Pinyon Script "Prativa" + uppercase serif "on Canvas" + circular monogram disk
- **Editorial typography**: Cormorant Garamond (headings), Pinyon Script (signature), Manrope (body)
- New home hero with framed featured painting + twin CTA buttons
- Quotes redesigned as left-bordered cards with staggered animations
- Paintings grid with white cards, hover-zoom, accent-pill filter tags
- Videos page: cream player + playlist with terracotta now-playing badge
- Contact: rounded surface card, accent focus states, gradient-pill social icons
- Dark gallery-style lightbox + info modal preserved and recoloured
- Mobile responsive: hamburger menu, breakpoints at 960/820/720/560
- **SEO**: per-page title/description/keywords/author/robots/canonical; OpenGraph + Twitter Card; JSON-LD `Person` schema on home; `robots.txt` + `sitemap.xml`

### Iteration 2 — About + Bengali mirror
- **About section** on home: 2-col layout with an elegant "Pd" monogram placeholder portrait (warm gradient + tilted dual frame), bio in 2 paragraphs, 4-fact quick reference (Born/Based/Mediums/Featured in), and "— Prativa" script signature
- **Full Bengali mirror** at `/app/bn/` covering home, paintings, videos, contact
  - Bengali fonts loaded: Noto Serif Bengali (headings), Hind Siliguri (body), Tiro Bangla (italic flourish)
  - `/app/css/bn.css` overrides typography tokens when `html[lang="bn"]`
  - All translations done (hero copy, About bio, navigation, form labels, footer quote)
  - Bengali contact form posts to the same Google Form (existing entry IDs)
  - Bengali Open Graph/Twitter tags + per-page canonical + `hreflang` alternates between en ↔ bn
- **`hreflang` cross-linking** added to all 4 English pages too (`hreflang="en" / bn / x-default`)
- **Sitemap** updated with 8 URLs and xhtml:link alternates
- Language toggle in header now flips between `/` and `/bn/` correctly

## Files added / changed
- `/app/css/styles.css` — full rewrite + new `.about` section styles
- `/app/css/bn.css` — Bengali typography overrides (new)
- `/app/scripts/header.js` — artistic brand markup + hamburger + active link + en/bn toggle URLs
- `/app/scripts/paintings.js` — getImageBase() uses `/arts/` for bn
- `/app/index.html`, `/app/paintings.html`, `/app/videos.html`, `/app/contact.html`, `/app/connect.html` — SEO + hreflang
- `/app/bn/index.html`, `/app/bn/paintings.html`, `/app/bn/videos.html`, `/app/bn/contact.html` — new Bengali mirror
- `/app/robots.txt`, `/app/sitemap.xml` — new with xhtml:link alternates
- `/app/frontend/{package.json, server.js}`, `/app/backend/{server.py, requirements.txt}` — supervisor scaffolding

## Backlog / next ideas
- P1: When the user has a real photo of Prativa, drop it into `/app/icons/prativa.jpg` and swap the `.about-portrait` placeholder for an `<img>` element
- P1: Add `VisualArtwork` JSON-LD per painting for richer Google image results
- P2: Optimise images (WebP + responsive `srcset`) for faster gallery loads
- P2: Wire a real email backend (Resend/SendGrid) instead of the Google Form
- P2: Add an "About" mid-section on the Bengali home with the bilingual signature

## Iteration — Home hero rotator + mobile tags wrap + lightbox watermark (2026-01)
- `scripts/hero.js`: removed random-on-page-load behaviour; now auto-rotates the featured painting every 10s with a soft fade, ensuring no two consecutive picks are identical.
- `index.html` hero markup reordered to **photo → CTAs → welcome message** (added `.hero hero-stack` and `.hero-actions` containers).
- `css/styles.css`:
  - New `.hero.hero-stack` layout (single column, centered, image capped 520px).
  - Fade transition on `.hero-art img.is-swapping` (220 ms).
  - `.lb-watermark` overlay added on the lightbox stage (bottom-left, Pinyon Script). `.lb-stage` set to `position: relative`. Tuned for ≤560 px viewports.
  - `@media (max-width: 720px)` on the paintings page: hides the scroll arrows, makes `.tag-container` `flex-wrap: wrap`, `white-space: normal`, `overflow-x: visible`, so all tags wrap onto multiple lines on phones.
- `paintings.html`: added `<span class="lb-watermark" data-testid="lightbox-watermark">Prativa on Canvas</span>` inside `.lb-stage`.

## Verification (Jan 2026)
- Mobile (360 × 760): `flex-wrap: wrap`, `overflow-x: visible`, scroll arrows `display: none`; tags wrap into 3 rows.
- Lightbox (1920 × 800): "Prativa on Canvas" watermark visible bottom-left on the fullscreen image.
- Home (1920 + 390): photo → buttons → welcome; image changed between captures within the 10 s window.

