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
`js/main.js` only sets the footer year. `assets/logo/` holds the source
logo kit SVGs.

## Brand & design system

Built on Peter's **official designer logo kit** — the source SVGs live in
`assets/logo/` (`logo-primary`, `logo-reversed`, `logo-mono`,
`icon-roundel`, `icon-roundel-mono`). The mark is a circle with an amber
sun behind two cream mountain peaks; the wordmark is "Electr[i]cal" (the
"i" dotted with a lightbulb) over a spaced "ST MARYS" line.

- Exact palette (CSS vars at top of `styles.css`): `--green` #12332d,
  `--amber` #e6a12b (sun), `--cream` #f7f3ea, `--amber-deep` #c98a1c
  (amber text on cream, for contrast).
- The **logo lockups are the designer's SVGs, inlined**: `logo-primary`
  in the header, `logo-reversed` in the footer (its own dark rect matches
  the footer green). Inline copies have their clipPath ids renamed
  (`lp`/`lr`) to stay unique in the page. The favicon is a data-URI of
  `icon-roundel`. Edit the artwork in `assets/logo/` and re-inline if it
  changes.
- **Brand fonts, loaded from Google Fonts:** Archivo (800) for the
  wordmark/headings, Space Grotesk (500) for "ST MARYS" and small labels.
  Body stays `system-ui`. NOTE: this deliberately reintroduces webfonts
  (two files, ~small) so the wordmark matches the kit exactly — it's the
  one external dependency on the page. Can be self-hosted from the repo
  later to return to zero third-party requests, if wanted.
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
