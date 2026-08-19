# Distinction Car Service — Website

Deployable static site. No build step, no server-side code, no framework —
just plain HTML, CSS, and vanilla JS.

## Structure

```
index.html          the site
css/style.css        all styles
js/main.js            mobile menu toggle + booking form UI
images/               hero and fleet photos
design-source/        original Claude Design project (.dc.html source files,
                       for re-editing in Claude Design later — not needed to
                       host the site)
```

## Deploying

Upload the contents of this repo (or at minimum `index.html`, `css/`, `js/`,
and `images/`) to any static file host. This needs a plan that lets you
upload arbitrary files — a GoDaddy cPanel / shared hosting plan works
(upload into `public_html`). GoDaddy's free "Website Builder" product does
**not** accept custom HTML/CSS uploads — if that's what the domain is
currently on, you'll need to switch to a hosting plan first.

## Known limitation: the booking form doesn't send anywhere

The "Request Reservation" form only swaps to a confirmation message in the
browser — it does not email or otherwise transmit the booking to anyone.
Wire `js/main.js`'s submit handler up to a real backend (a form service
like Formspree, or a server endpoint) before relying on it for actual
reservations.
