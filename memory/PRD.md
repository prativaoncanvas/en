# Prativa on Canvas — PRD

## Original Problem Statement
Static portfolio site for Bengali watercolor artist Prativa Debsharma.

## Recent Changes
- 2026-01: Home page hero rearranged — welcome message moved to the LEFT, featured photo on the RIGHT, side-by-side on desktop, stacks (wraps) on mobile (≤960px).

## Architecture
- Static HTML/CSS site served via Express (`/app/frontend/server.js`) from `/app` root
- Minimal FastAPI backend at `/app/backend/server.py` (health check only)

## Files Touched
- `/app/index.html` — Hero section markup reorder
- `/app/css/styles.css` — `.hero.hero-stack` redefined with grid-template-areas + mobile stacking
