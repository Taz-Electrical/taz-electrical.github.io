# Taz Electrical — Website

Static marketing website for **Taz Electrical**, a residential/commercial
electrician serving the **Gray / St Marys area, Australia**.

## Status

Design v3 ("HIGH VOLTAGE"). Business details (phone/email, electrical
licence number, bio, photos, exact service area/state, real stats) are
placeholder — swap in real details from Taz before promoting the site.
Search the codebase for `TODO` comments marking every spot that needs a
real value. The site is live at https://taz-electrical.github.io
(GitHub Pages, deploys from `main`).

## Tech stack

Plain HTML/CSS/JS. No build step, no framework, no package manager.
Deployable as-is to GitHub Pages or any static host.

## Structure

```
index.html      Home — hero, manifesto, services index, emergency, process, area, CTA
services.html   Numbered service detail blocks (anchors: #wiring #switchboards
                #lighting #power-points #commercial #repairs #emergency)
about.html      Bio + values "stamps" + credentials spec table
contact.html    Call-first layout + "work order" enquiry form
css/styles.css  The whole design system (tokens at top)
js/main.js      Header scroll state, mobile nav, scroll reveals, form stub
```

Header and footer markup is duplicated across each HTML file — there's no
build step to assemble includes. When editing nav, footer, or contact
info, update all four pages together.

## Design system — "HIGH VOLTAGE"

Editorial, type-first design built on the visual language of electricity:
hazard tape, warning stripes, stencil mono labels, work-order paperwork.
**The typography is the design** — no decorative illustrations or stock
imagery.

Three materials only (tokens at the top of `css/styles.css`):

- `--void` — warm near-black. `--paper` — warm off-white. `--volt` —
  hazard yellow (#ffd400).
- Sections alternate `.on-void` / `.on-paper` surfaces for rhythm. Yellow
  is used at full bleed only for the emergency band and marquee tapes.

Type: **Bricolage Grotesque** (display, 800 uppercase for headlines),
**JetBrains Mono** (labels `[ 001 — LIKE THIS ]`, buttons, nav, captions),
**Inter** (body). Loaded from Google Fonts CDN in each page head.

Signature elements:

- `.giant` stacked headlines with per-line rise-in animation on load
- `.marquee` scrolling ticker tapes (duplicate `.marquee-seg` twice for a
  seamless -50% loop; wrapper is `aria-hidden`)
- `.index-row` services list — full-row yellow invert on hover
- `.tape` hazard-stripe dividers (pure CSS repeating gradient)
- `.badge-spin` rotating circular credential badge (SVG textPath)
- `.mega-cta` full-width giant link that inverts to yellow
- `.work-order` form styled as trade paperwork; `.polaroid` photo frame;
  `.stamp` value cards; `.spec` mono definition tables
- Film-grain overlay via `body::after` (inline SVG noise, ~5% opacity)
- `.footer-mark` — giant outlined wordmark across the footer

Motion: `[data-reveal]` + IntersectionObserver (stagger with inline
`--d`), CSS keyframes for marquee/badge/hero. **All motion is disabled
under `prefers-reduced-motion`.**

## Conventions

- Breakpoints: 1020px (grids collapse), 900px (mobile nav takeover),
  640px (single column, badge hidden).
- **Never put `backdrop-filter` on `.site-header`** — it becomes the
  containing block for the fixed mobile nav and collapses it (this bug
  shipped once). The header uses a plain solid background on scroll.
- Icons are inline SVGs (24px viewBox, currentColor). No icon fonts.
- No JS frameworks or build tools. Keep `main.js` vanilla and small.
- The contact form has no backend — markup + client validation only.
  Wiring it to a service (Formspree, serverless fn) is a future step.
- No testimonials section, deliberately: never ship invented reviews.
  Add one only when Taz supplies genuine customer quotes.
- Placeholder rule: anything fake is `TODO`-commented (phone, email,
  licence no., hours, stats, bio, suburbs/state).

## Open questions for Taz

- Phone number, email, electrical licence number, ABN
- Real bio, photos, years of experience / job stats
- Exact service area / state (Gray and St Marys exist in more than one
  Australian state — confirm which)
- Business hours; whether 24/7 emergency callouts are actually offered
- Any genuine testimonials to add later
