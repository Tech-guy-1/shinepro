# Shine Pro — Website Files

A multi-page static website for Shine Pro Cleaning (Blantyre, Malawi).

## Structure

```
index.html            Home page
services.html         Detailed service descriptions
about.html            Company story, values
contact.html          Contact info, quote form
privacy-policy.html   Privacy Policy
terms.html            Terms & Conditions
404.html              Custom "page not found" page
robots.txt            Search engine crawl rules
sitemap.xml           Page list for search engines
css/style.css         All styling (colours, layout, components)
js/script.js          Nav menu, footer year, contact form, cookie consent, analytics loader
images/               Logo, photos, favicon, and the social share image
```

## Adding your real logo

Replace `images/logo.svg` with your real logo file. If you keep the exact
filename `logo.svg`, no HTML changes are needed. If you use a PNG/JPG logo
instead, update the `src="images/logo.svg"` reference in the `<header>` of
each HTML file to your new filename.

## Adding real photos

Every photo on the site is currently a labelled placeholder (a light blue
box describing what should go there, e.g. "Office cleaning photo"). To add
a real photo, replace the matching file in `images/` and keep the same
filename — for example, replace `images/hero-cleaning.svg` with your
homepage hero photo, saved as `images/hero-cleaning.svg` (or update the
`src` attribute in the HTML if you use a different file name/format such
as `.jpg`).

## The contact form

The "Request a Quote" form on `contact.html` sends every field (name,
phone, email, service, property type, details) straight to WhatsApp: on
submit it opens `https://wa.me/265990458378` with the full message
pre-filled, addressed to the same number shown in the Contact section. The
person just needs to tap send inside WhatsApp. A visible fallback link
appears in the confirmation message too, in case the pop-up is blocked. To
change the receiving number, update `WHATSAPP_NUMBER` near the top of the
form handler in `js/script.js` (international format, no leading `+` or
spaces, e.g. `265990458378`).

## Link previews (sharing the site)

Every page includes Open Graph and Twitter Card meta tags plus a canonical
URL, so sharing the link on WhatsApp, Facebook, etc. shows a proper
preview card using `images/og-image.png`. Replace that file (1200×630px)
for a different preview image, keeping the same filename.

## Search engines (SEO)

- `robots.txt` allows all crawlers and points to `sitemap.xml`.
- `sitemap.xml` lists every page. Update the `<lastmod>` dates whenever you
  make meaningful content changes, and add new pages here if you create
  any.
- Each page has a unique `<title>`, meta description, and canonical URL.
- `404.html` is a styled "page not found" page — most hosts (including
  GitHub Pages) will show it automatically for broken links once
  configured; check your host's 404 setup if it doesn't appear.

## Cookies & analytics

A cookie consent banner appears on first visit (bottom of the screen) and
remembers the visitor's choice in their browser. Analytics only loads
after someone clicks **Accept** — nothing is loaded before that, and
nothing loads at all if they click Decline.

To turn on Google Analytics: open `js/script.js` and replace
`GA_MEASUREMENT_ID = "G-XXXXXXXXXX"` near the top with your real GA4
Measurement ID. Until you do that, the analytics loader simply does
nothing, so it's safe to leave as-is.

## Accessibility

- A "Skip to main content" link appears when tabbing in with a keyboard.
- All decorative icons are hidden from screen readers so only meaningful
  text and labelled buttons/links are announced.
- Every photo has descriptive alt text; icons paired with visible text
  don't repeat it.
- Colour contrast on muted/secondary text was darkened slightly to meet
  WCAG AA.
- Forms use proper `<label>` elements, required-field validation, and
  visible focus outlines.

## Performance

- Below-the-fold images use `loading="lazy"`; the logo and hero photo load
  immediately since they're visible on first paint.
- The shared script loads with `defer` so it never blocks page rendering.
- Every image has explicit width/height to prevent layout shift while
  loading.
- No animation libraries, external UI frameworks, or heavy scripts — the
  whole site is plain HTML/CSS/JS.

## Testing before you go live

- The contact form was verified end-to-end: filling it out and submitting
  builds a complete WhatsApp message with every field included, and opens
  WhatsApp with it pre-filled.
- All internal links and anchor links (nav, footer, "Learn more" links,
  in-page jumps like `services.html#deep-cleaning`) were checked against
  the actual page IDs — none are broken.
- Recheck both after making edits: if you rename a service's `id` or a
  filename, search the whole project for the old value so no link is left
  pointing at it.

## Colours and fonts

All colours and fonts are defined once, at the top of `css/style.css`,
as CSS variables (`:root { --color-primary: ...; }`). Adjust them there to
update the whole site consistently.

## Viewing the site

Open `index.html` in a browser, or serve the folder with any static file
server (recommended, so the contact form and page anchors behave exactly
as they will once hosted on www.shinepromw.com).
