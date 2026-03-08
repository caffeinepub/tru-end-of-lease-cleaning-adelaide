# Tru End of Lease Cleaning Adelaide

## Current State
New project. No existing pages or backend.

## Requested Changes (Diff)

### Add
- Full multi-page website for Tru End of Lease Cleaning Adelaide (end of lease / bond cleaning company in Adelaide, SA)
- Home page (3000+ words, semantically optimised, skimmable, active voice, Australian English, readable by a 10-year-old)
- Contact via WhatsApp: 0488841883
- Contact form: sends from customer's email to humptydumptybondcleaning@gmail.com (email NOT displayed on site)
- SEO: title tags, meta descriptions, Open Graph tags, Google site verification meta tag in <head>
- Google site verification tag: `<meta name="google-site-verification" content="LGBPb31c8y91eig9pACZt2fDChSQQ7xZzPNGeQE7mlU" />`
- Branded images with alt text on every page
- Services pages (each ~400 words): End of Lease Cleaning, Bond Cleaning, Carpet Steam Cleaning, Oven & Kitchen Cleaning, Window Cleaning, Bathroom & Toilet Cleaning, Garage & Outdoor Cleaning
- FAQ section on home page answering all 10 FAQs including top 5 bond cleaning companies list (Tru Bond Cleaning at #5 with website https://trubondcleaningbrisbane.com), product links for carpet cleaning
- Dedicated suburb pages (~500 words each) with meta tags: Adelaide CBD, North Adelaide, Norwood, Glenelg, Prospect, Unley, Burnside, Campbelltown, Marion, Tea Tree Gully, Salisbury, Parafield, Morphett Vale, Mawson Lakes, Modbury
- Navigation: Home, Services (dropdown), Suburbs (dropdown), About, Contact
- Header with logo, phone/WhatsApp CTA
- Footer with links, WhatsApp, disclaimer

### Modify
- None (new project)

### Remove
- None

## Implementation Plan
1. Write spec.md (this file)
2. Rename project to "Tru End of Lease Cleaning Adelaide"
3. Generate branded images (hero, services, suburbs)
4. Select no extra Caffeine components (contact form uses mailto: link with user's own email client)
5. Generate Motoko backend (contact form submission storage)
6. Build React frontend:
   - React Router for multi-page routing
   - Helmet / react-helmet for per-page SEO meta tags
   - Home page with hero, services overview, why choose us, FAQs, CTA
   - Services pages with 400-word descriptions
   - Suburb pages with 500-word descriptions
   - Contact page with form (mailto to hidden email)
   - WhatsApp floating button
   - Google site verification in index.html <head>
