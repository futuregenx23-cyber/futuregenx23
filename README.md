# FuturegenX Design Technology — Website Revamp

A responsive static website built with plain HTML, CSS and JavaScript, using the supplied FuturegenX reference images as the design direction.

## Contents

- `index.html` — page structure, SEO metadata, sections and enquiry form
- `styles.css` — responsive navy / teal design system and mobile layouts
- `script.js` — mobile navigation, service preselection, footer year and email enquiry behavior

## Run locally

No build step or package installation is required.

1. Extract the ZIP.
2. Open `index.html` in a browser, or run a local static server from this folder, for example:
   `python -m http.server 8000`
3. Visit `http://localhost:8000`.

## Deploy to Netlify

### Option A — Netlify Drop
1. Extract the ZIP.
2. Open Netlify Drop at `https://app.netlify.com/drop`.
3. Drag the folder containing `index.html`, `styles.css` and `script.js` into the drop area.

### Option B — Git deployment
1. Commit these files to a Git repository.
2. In Netlify, choose **Add new site → Import an existing project** and connect the repository.
3. Set the publish directory to the repository root. There is no build command.
4. Deploy and verify the production URL.

To replace the existing live site, deploy to the existing Netlify site's connected repository or use its authorized deploy workflow. This package does not itself publish changes to the existing site.

## Before launch

- **Verify contact details:** the supplied design reference shows `futuregenx3@gmail.com` and `+91 88840 65701`; confirm these are still the correct business contacts.
- **Connect a production form:** the current enquiry form opens a prefilled email draft using `mailto:`. It does not store submissions and relies on the visitor having an email application configured. For dependable lead capture, connect Netlify Forms or another form backend and test delivery.
- **Replace illustrative imagery:** images currently load from Unsplash via external URLs. Replace them with approved FuturegenX project images where available, and check image licensing/attribution needs for your intended use.
- **Verify all service descriptions and claims:** the case-study cards are illustrative examples, not claims about completed client work.
- **Add legal pages:** link a privacy policy and any required terms once the final form/data-handling setup is known.
- **Test mobile navigation, form behavior, accessibility, SEO and image loading on the deployed domain.**

## Notes

The implementation is intentionally framework-free. It is suitable for Netlify static hosting and can be adapted into a larger multi-page site later. The current layout includes Home, Industries, Services, About / Why FuturegenX, Process, Project examples and Contact sections.


## Brand logo assets
- `assets/futuregenx-logo-header.png` — black/teal logo used in the white header.
- `assets/futuregenx-logo-footer.png` — white/teal logo used in the dark footer.
