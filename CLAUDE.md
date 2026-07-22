# Taz Electrical — Website

Static marketing website for **Taz Electrical**, a residential/commercial
electrician serving the **Gray / St Marys area, Australia**.

## Status

Early build. Branding (business name, logo, exact colors, phone/email,
electrical license number, precise service area/state) is placeholder —
swap in real details from Taz before launch. Search the codebase for
`TODO` comments marking every spot that needs a real value.

## Tech stack

Plain HTML/CSS/JS. No build step, no framework, no package manager.
Deployable as-is to GitHub Pages or any static host — just push the repo
and point the host at the root.

## Structure

```
index.html      Home / landing page
services.html   List of electrical services offered
about.html      About Taz / the business
contact.html    Contact details + enquiry form
css/styles.css  Shared stylesheet (CSS variables for brand colors/fonts)
js/main.js      Shared vanilla JS (mobile nav toggle, form handling)
```

Header and footer markup is duplicated across each HTML file rather than
templated — there's no build step to assemble includes. When editing nav
links, footer text, or contact info, update all four pages together.

## Design system ("Live Current")

Dark electric theme: near-black ink surfaces with an amber "voltage"
accent. All tokens live at the top of `css/styles.css`:

- Surfaces: `--ink-950` … `--ink-700` (darkest → lightest)
- Accent: `--volt`, `--volt-hot`, `--volt-deep`, `--volt-soft`, `--volt-line`
- Text: `--text-hi` / `--text-mid` / `--text-low`
- Fonts: Space Grotesk (display) + Inter (body), loaded from Google Fonts
  CDN in each page's `<head>`.

Signature elements: animated circuit-trace SVG in the home hero (CSS
`stroke-dasharray` animation), glass sticky header, scroll-reveal via
`[data-reveal]` + IntersectionObserver (stagger with inline `--d` delay),
outline-numbered process steps, gradient-text stats. All motion respects
`prefers-reduced-motion`.

## Conventions

- Responsive breakpoints: 980px (grids collapse), 900px (mobile nav
  overlay), 620px (single column).
- Icons are inline SVGs (stroke style, 24px viewBox) pasted per use — no
  icon font or sprite.
- No JS frameworks or build tools. Keep `main.js` vanilla and small.
- The contact form has no backend yet — it's markup + basic client-side
  validation only. Wiring it to an actual email/service (e.g. Formspree,
  a serverless function) is a future step, not assumed.
- No testimonials section yet, deliberately: never ship invented reviews.
  Add one only when Taz supplies genuine customer quotes.

## Open questions for Taz

- Exact business name / logo
- Brand colors (currently placeholder navy/amber)
- Phone number, email, electrical license number
- Exact service area / state (Gray and St Marys exist in more than one
  Australian state — confirm which)
- Real service list and any photos/testimonials to include
