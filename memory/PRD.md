# Prativa on Canvas — PRD

## Problem statement
Static HTML/CSS/JS portfolio site for the artist *Prativa Debsharma*.
This iteration introduced five UX/feature changes requested by the artist:

1. Paintings page must allow **single-tag** selection only (selecting one tag
   automatically deselects any previously active tag).
2. The painting **Info modal on mobile** must be fully scrollable and show the
   hero image at a larger size so additional text remains reachable.
3. A **config flag** must allow the price field to be hidden everywhere with a
   single change in a JS file (no data deletion).
4. Each painting's Info view must offer an **"Enquire"** button beside
   "View fullscreen" that opens the user's mail client with a pre-filled email
   to `prativadebsharma17@gmail.com`.
5. The **Videos** page must be rebuilt as a modern YouTube-style player with a
   scrollable video gallery / playlist.

## Tech stack
- Plain HTML + CSS + vanilla JS (no build step)
- Static asset hosting (artwork JPGs under `/arts`, publications under `/publications`)
- Served via standard static hosting; in the Emergent preview a python
  `http.server` is fronted by Kubernetes ingress on port 3000.

## What was implemented in this iteration (2026-01)
- `scripts/art-filter.js` rewritten to single-select tag behaviour
  (re-click clears back to "all"; `data-testid` selectors preserved).
- `scripts/paintings.js` exposes two new globals at the top:
  - `SHOW_PRICE` (default `false`) — show/hide price row in modal & WhatsApp message
  - `ENQUIRE_WHATSAPP` (default `918637541039`) — WhatsApp number (country code, no `+`)
- `paintings.html`
  - Filter hint copy updated for single-select
  - New `info-actions` row containing existing **View fullscreen** plus new
    **Enquire** button (testid `info-enquire-btn`)
  - `info-price-row` wrapped with an id so it can be hidden by the flag
- `scripts/lightbox.js`
  - `renderInfoView()` now toggles `#info-price-row` based on `SHOW_PRICE`
  - `info-enquire-btn` click opens `https://wa.me/<phone>?text=…` in a new tab.
    The pre-filled text contains painting title in the opening line, then a
    bulleted block (Reference ID, Year, Category, Medium, Dimensions and
    Price when `SHOW_PRICE=true`) and blank `Name` / `City` lines.
- `css/styles.css`
  - New styles for `.info-actions` + `.info-enquire-btn` (yellow CTA)
  - Mobile (≤560px) info modal: full-bleed card, scrollable body
    (`overflow: visible` on the card), hero image up to 70vh, nav arrows hidden
    so the painting is not covered
  - New **Modern Videos** section: `.video-player-wrap` grid (player + playlist),
    `.playlist-item` cards with thumbnail + 2-line clamped title,
    custom scrollbar, mobile breakpoints collapse player above playlist
- `videos.html` rebuilt with main `<iframe>` + sticky playlist aside
- `scripts/videos.js` rebuilt:
  - Defines `videos = [{id}…]` (just YouTube IDs)
  - Renders playlist immediately, then progressively enhances titles via
    `noembed.com` (CORS-friendly, no API key)
  - Click on a playlist item swaps the main iframe with `autoplay=1&rel=0`
    and scrolls the active item into view

## Verified behaviour (manual + scripted)
- Filter active count is exactly 1 after clicking a non-"all" tag; clicking
  a second tag swaps selection (verified via Playwright).
- `info-price-row` hidden when `SHOW_PRICE=false`, visible (`₹6,500`) when
  flipped to `true` at runtime; enquiry mail body includes the price line
  only when the flag is on.
- Mailto URL captured: `mailto:prativadebsharma17@gmail.com?subject=Enquiry:%20…`
  with full structured body.
- Mobile info modal: `scrollHeight > clientHeight` (1096 > 720), scroll moves
  the Enquire button into view; hero image rendered at 483 px tall.
- Videos page: 6 playlist items, real YouTube titles loaded
  (e.g. *"Hanuman ji 🙏 drawing || Free hand drawing || Easy steps ||"*),
  click on item 3 swaps iframe to corresponding `embed/<id>?autoplay=1&rel=0`
  and marks item active.

## Backlog / nice-to-haves
- Add equivalent layout updates to the `/bn/` Bengali mirror once present.
- Wire Enquire mail subject/body to the same template in Bengali when `lang=bn`.
- Optional: add a "Copy enquiry text" fallback when no mail client is available.
- Optional: persist video playback position / start where the user left off.
- Future: replace placeholder paintings.js metadata with real titles + years.
