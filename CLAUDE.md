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

## Conventions

- Mobile-first responsive CSS, single breakpoint around 700px for the nav.
- Brand colors live as CSS custom properties at the top of `css/styles.css`
  (`--navy`, `--amber`, etc.) — change them there, not inline, when real
  branding arrives.
- No JS frameworks or build tools. Keep `main.js` vanilla and small.
- The contact form has no backend yet — it's markup + basic client-side
  validation only. Wiring it to an actual email/service (e.g. Formspree,
  a serverless function) is a future step, not assumed.

## Open questions for Taz

- Exact business name / logo
- Brand colors (currently placeholder navy/amber)
- Phone number, email, electrical license number
- Exact service area / state (Gray and St Marys exist in more than one
  Australian state — confirm which)
- Real service list and any photos/testimonials to include
