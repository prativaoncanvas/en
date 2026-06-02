# Prativa on Canvas — PRD

## Original problem statement
> Look into my website from main branch and update the overall look and feel for a professional looking website with seo tags and stylish responsive look and feel. Update the website name "Prativa on Canvas" in an artistic way as well. Use less AI credits.

## User choices captured
- **Site type:** artist/painter portfolio (with blog/personal touch & light shop intent via WhatsApp enquiry)
- **Visual vibe:** elegant minimal gallery × bold artistic / painterly
- **Logo treatment:** elegant calligraphy script + modern serif
- **SEO targeting keywords:** Prativa Debsharma, watercolor artist, India, Bengali, USA, Jacksonville

## Architecture
- Pure static site at `/app` (HTML / CSS / vanilla JS) — no MongoDB/backend logic needed
- Served on port 3000 by a tiny Express static server in `/app/frontend/server.js`
- Stub FastAPI in `/app/backend/server.py` exists only so supervisor stays green; no API used by the site
- Existing JS modules untouched: paintings, lightbox, art-filter, videos, contact form (Google Form POST)

## What's been implemented (2026-01)
- **Refreshed visual identity**: warm paper-ivory palette (#f7f1e3), terracotta accent (#b65a3c), deep ink text — replaces the old purple→blue gradient
- **Artistic brand mark** for "Prativa on Canvas": gradient-ink Pinyon Script calligraphy "Prativa" + uppercase serif "on Canvas" + circular monogram disk in terracotta→gold
- **Editorial typography**: Cormorant Garamond (headings, italic accents), Pinyon Script (signature), Manrope (body/UI)
- **New home hero**: signature-style name, italic subtitle "a Bengali watercolor artist · Jacksonville · India", twin CTA (View gallery / Get in touch), tilted framed featured painting with handwritten tag
- **Quotes section** redesigned as left-bordered cards with staggered slide-in animations
- **Paintings gallery**: clean white cards on cream, CSS-grid auto-fill, hover lift/zoom, accent-pill filter tags
- **Videos page**: cream-on-white player + playlist with terracotta now-playing badge
- **Contact page**: rounded surface card, accent focus states, gradient-pill social icons
- **Dark gallery-style lightbox + info modal** preserved (best UX for image viewing), recoloured to the new accent
- **Mobile responsive**: hamburger menu, grid breakpoints at 960/820/720/560
- **SEO**: per-page `<title>`, meta description, keywords, author, robots, canonical; Open Graph + Twitter Card tags; JSON-LD `Person` schema on home; `robots.txt` + `sitemap.xml`
- All existing `data-testid` hooks preserved + new test IDs added for header/nav/hero/contact form

## Files added / changed
- `/app/css/styles.css` — full rewrite (gallery aesthetic)
- `/app/scripts/header.js` — artistic brand markup + mobile hamburger + active-link highlight
- `/app/index.html` — new hero, SEO block, JSON-LD
- `/app/paintings.html` — SEO + minor structural tidy
- `/app/videos.html` — SEO
- `/app/contact.html` — SEO + cleaner form labels
- `/app/connect.html` — SEO (no-index thank-you page)
- `/app/robots.txt`, `/app/sitemap.xml` — new
- `/app/frontend/{package.json,server.js}` — static server for port 3000
- `/app/backend/{server.py,requirements.txt}` — minimal stub so supervisor stays healthy

## Backlog / next ideas
- P1: Replace `https://prativaoncanvas.com` placeholder in canonical/OG tags with the final production domain once chosen
- P1: Add an "About" section with artist bio + photo (currently only quotes section)
- P2: Migrate Bengali `/bn/` mirror pages with the new design (header.js already detects `lang="bn"`)
- P2: Optimise images (WebP + responsive `srcset`) for faster gallery loads
- P2: Wire a real email backend (Resend/SendGrid) instead of relying on the Google Form
- P2: Add structured `VisualArtwork` JSON-LD on each painting card for richer Google image results
