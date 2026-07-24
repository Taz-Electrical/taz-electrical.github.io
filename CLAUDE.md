# CLAUDE.md

## What this is

The website for **St Marys Electrical** — Peter Hammond, a sole-trader electrician in east coast Tasmania. Static site, no build step, served by GitHub Pages.

Live at **https://stmaryselectrical.au**

## Critical — do not break

**Never delete, rename or edit the `CNAME` file in the repo root.** It contains `stmaryselectrical.au` and is what binds the custom domain to GitHub Pages. Removing it takes the live site offline and requires reconfiguring DNS to recover.

If a task seems to call for cleaning up stray root-level files, `CNAME` is not one of them.

## Deployment

- Branch `main`, folder `/ (root)`, deploy from branch
- Push to `main` → GitHub Pages redeploys → live in a minute or two
- No build command, no CI, no framework

This is a **user/org site**: the repo name must equal the account name (`Taz-Electrical` / `taz-electrical.github.io`). Do not rename the repo.

## Business details — keep accurate and consistent

These appear on the site and must match his Google Business Profile character for character. Do not paraphrase or reformat them.

- **Name:** St Marys Electrical — no apostrophe, no comma, this word order
- **Phone:** 0478 535 090
- **Licence:** Contractor No. 004374773
- **ABN:** 86 877 574 316
- **Service area:** St Marys, Gray & Fingal, Tasmania
- **Hours:** Mon–Fri, 8am–5pm. After-hours by arrangement

He is based at Gray, not St Marys. The business is named for the nearest town. Don't "correct" this.

## Name consistency

The site has historically mixed **"Electrical, St Marys"**, **"Electrical St Marys"** and **"St Mary's Electrical"**. All three are wrong. The only correct form is **St Marys Electrical**.

Inconsistent business names measurably hurt local search ranking, so this matters more than it looks.

## Contact method

Enquiries come in by **text, not email or a form**. Phone links use `sms:+61478535090`. Keep it that way unless asked otherwise — it's deliberate, he's a one-man operation working with his hands.

## Design

- Deep forest green `#12332d` — dominant colour, also the theme-colour meta tag
- Ochre/gold accent
- Warm cream background
- Logos at `assets/logo/logo-primary.svg` and `logo-reversed.svg`

## Audience

Homeowners and small businesses in a rural town of roughly 700 people, skewing older. Plain language, no marketing jargon, fast loading on poor regional mobile signal. Keep the page lightweight — no heavy frameworks or large images.
