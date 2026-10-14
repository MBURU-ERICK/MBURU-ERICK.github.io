# Afribyte Static Website

A responsive website built with plain HTML, CSS and JavaScript. No server, database, build process, or paid hosting is required.

## Files
- `index.html` — website content and service sections
- `style.css` — responsive styling
- `script.js` — mobile navigation and contact form handoff

## Before publishing
1. Open `index.html` and review the services. Remove any service you do not offer.
2. Open `script.js` and set `AFRIBYTE_WHATSAPP_NUMBER` to your WhatsApp number in international format, digits only. Example: `254712345678`.
3. Set `AFRIBYTE_EMAIL` to your real email address.
4. Set `AFRIBYTE_DISPLAY_PHONE` to the phone number you want displayed.
5. Test the site in a browser on desktop and mobile.

## Contact form
This static site does not store submissions. When configured, the form opens WhatsApp with a prepared message, or an email app if WhatsApp is not configured. Visitors must review and send the message themselves.

## Free hosting: GitHub Pages
1. Create a GitHub repository, for example `afribyte-website`.
2. Upload `index.html`, `style.css`, `script.js`, and this README to the repository root.
3. Open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for the published URL shown in the Pages section.

You can also deploy the folder with Netlify or Cloudflare Pages. No build command is needed.

## Notes
- Google Fonts are loaded externally; fallback fonts are available if they cannot load.
- The website does not claim affiliation with KRA, HELB, or any government agency.
- Never ask customers to share passwords, PINs, or one-time authentication codes.
