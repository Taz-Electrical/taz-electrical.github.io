# Taz Electrical — Website

Single-page site for **Taz Electrical**, a licensed electrician in
**St Marys, Australia**. The webmaster is Jaycob (repo owner); the
electrician is his friend **Peter** (business trades as "Taz Electrical").

## Design direction — read this first

v4 ("Sparky in town"). Peter's explicit feedback on the previous, flashier
design: *"far simpler and less trying to sell it — more just stating
there's a sparky in town."* That is the brief. Quiet, plain-spoken,
confident. **Do not add salesy sections, testimonials, stats, forms,
marquees, or animation** unless Peter asks. When in doubt, remove.

Constraints from Peter:
- St Marys only — **do not mention Gray** (dropped by request)
- **Phone contact only** — no email address, no enquiry form

## Status

Live at https://taz-electrical.github.io (GitHub Pages, deploys from
`main`). All business details are placeholder — search `TODO` for every
spot needing a real value (phone, licence no., hours, exact state).

## Tech stack

Plain HTML/CSS/JS. No build step, no framework, no package manager.
One page: `index.html`. `css/styles.css` holds the whole design;
`js/main.js` only sets the footer year.

## Design system

Paper (#f4f1e8), ink (#16150f), and one dab of hazard yellow (#ffd400)
used as underline/accent only. **System fonts only — no webfonts**:
Georgia (headings), system-ui (body), ui-monospace (small labels).
Zero external requests, instant load, nothing to break — deliberate,
don't add font CDNs back. Sections separated by hairline rules. No
motion beyond hover states.

## Conventions

- Keep it one page. If a second page is ever truly needed, mirror the
  header/footer manually (no build step).
- Icons are inline SVGs (24px viewBox, currentColor).
- Never invent business facts, reviews, or stats. Anything fake must be
  `TODO`-commented.
- The phone number appears three times (header, hero button, contact) —
  update all together.

## Open questions

- Real phone number, electrical licence number, ABN
- Which St Marys / state (there are several in Australia)
- Real hours; whether after-hours callouts are offered
- Whether Peter wants his name on the site (currently business name only)
