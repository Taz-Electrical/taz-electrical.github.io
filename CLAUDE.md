# Electrical, St Marys — Website

Single-page site for **Electrical, St Marys** — a licensed electrician in
**St Marys, Australia**. The webmaster is Jaycob (repo owner); the
electrician is his friend **Peter**.

Note: the business was previously called "Taz Electrical" and was renamed
to match the logo kit ("Electrical / St Marys", no "Taz"). The repo and
live URL keep the old name (`taz-electrical.github.io`) — that's fine, the
URL doesn't have to match the business name.

## Design direction — read this first

v5 ("Mountain & sun"), built around Peter's logo kit. Peter's brief on the
earlier, flashier attempts: *"far simpler and less trying to sell it —
more just stating there's a sparky in town."* That is the brief. Quiet,
plain-spoken, confident. **Do not add salesy sections, testimonials,
stats, forms, marquees, or animation** unless Peter asks. When in doubt,
remove.

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

## Brand & design system

From Peter's logo kit — a mountain-and-sun mark in a circle, with the
wordmark "Electr[i]cal" (the "i" dotted with a lightbulb) over a spaced
"ST MARYS" locality line.

- Palette (CSS vars at top of `styles.css`): `--green` #1b3d30 (forest),
  `--amber` #e2a42b (sun), `--cream` #f4f0e5 (paper). `--amber-deep` for
  amber text on cream (contrast). Green and amber-deep carry all text.
- The **logo mark is recreated as inline SVG**, not an image file: a
  clipped green circle + amber sun + cream mountain polygon. The footer
  uses an inverted variant (cream outline, transparent interior) so it
  reads on the green background. The favicon is a small SVG data-URI of
  the same mark. If Peter supplies exact logo files, they can replace the
  inline SVG.
- The bulb-dotted "i" is a tiny inline SVG (`.ibulb`); its base rings use
  `currentColor` so it works in green (header) and cream (footer).
- **System fonts only — no webfonts.** Headings `system-ui` 800; small
  labels are letter-spaced uppercase; phone/legal use `ui-monospace`.
- Section rhythm: cream → cream → **green band** (the pitch line, echoes
  the dark logo lockup) → cream → green footer. No motion beyond hovers.

## Conventions

- Keep it one page. If a second page is ever truly needed, mirror the
  header/footer manually (no build step).
- Brand colours live only as CSS vars — change them there, not inline
  (except inside the logo SVGs, which are self-contained).
- Never invent business facts, reviews, or stats. Anything fake must be
  `TODO`-commented.
- The phone number appears in several spots (header, hero button,
  contact, footer legal) — update them all together.

## Open questions for Peter

- Real phone number, electrical licence number, ABN
- Which St Marys / state (there are several in Australia)
- Real hours; whether after-hours callouts are offered
- Any real photos to use later
