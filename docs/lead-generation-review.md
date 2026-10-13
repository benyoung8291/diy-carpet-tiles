# Modular Carpet lead-generation review — 13 October 2026

## Findings from the live site and repository

Zero reported leads does not establish whether the problem is traffic, conversion, delivery or measurement. GA4 and Search Console reports were not available through the current connections.

- The homepage already had index/follow tags, a canonical URL, structured data, crawlable HTML and a 14-URL sitemap. Robots.txt allows crawling. These are prerequisites; they do not prove Google has indexed or ranked the pages.
- The headline led with “Supply-and-Install Modular Carpet for Hotels and Hospitality Venues”. Subsequent sections switched between hospitality, homes and rentals. The owner identified landlords and property managers as the priority. This update leads with replaceable rental-property carpet tiles; hospitality pages remain accessible.
- Free samples were mentioned in FAQs and contact-page instructions but were absent from the hero's main actions. Visitors now have explicit quote and sample paths.
- Existing supply pricing ($66.55/m² incl. GST, 5 m² boxes, $55 delivery) was held in product data but absent from the homepage. It is now visible early, with laying rates clearly separated from carpet and site costs. Prices have not been changed.
- The contact page showed a tall introductory section and eight fields before its submit button. It now has a shorter introduction, request type, name, email and an optional message; additional project fields are expandable. Only name and email remain required. Property location is now available to help qualify installation requests.
- Formspree endpoint `xdappbep` is the existing receiver. Its read-only JSON response says “Please submit POST request.” This confirms reachability, not successful submission, inbox delivery or account activation. No test lead was sent.
- Existing GA4 stream `G-GX95EKSH46` tracks successful Formspree submissions. New events track enquiry starts, submission attempts, failures, CTA clicks and phone/email clicks without sending entered form values. Clicks are indicators of interest, not confirmed leads.
- Both HTTPS hostnames served HTML while canonicals pointed at www. A permanent apex-to-www redirect is included and preserves paths/query strings.
- Homepage/contact introductory content was initially transparent until client animation ran. These key sections now render visible immediately.
- Homepage Open Graph and Twitter overrides omitted the parent image configuration. Explicit social image settings now preserve share previews.

## Changes and validation

The rental-flooring page now provides clear product/service information and an inline enquiry form. Unsupported universal savings, damp-slab and bond-protection claims have been removed from that page.

The implementation keeps existing product ranges, prices, Formspree endpoint and GA4 stream. It adds no customer logos, testimonials, reviews or project results. The homepage's blanket assurance about damp concrete was replaced with advice to assess subfloor moisture and adhesive requirements.

Validation passed: `npm run build` (including type checking and 20 static pages), `node scripts/check-enquiry-analytics.cjs`, redirect configuration checks, prerendered homepage/contact/rental content checks, and `git diff --check`. Build reported one existing next/image warning in the unchanged colour-swatch component. The analytics check verifies success-only leads, error events and safe operation when analytics is blocked or during server rendering.

## Checks still needed before attributing the lack of leads

1. In Search Console, inspect the homepage, rental-flooring, investment-property-flooring, installation and range URLs: index status, selected canonical, exclusions and sitemap processing. Compare the last 90 days of impressions and clicks by query, page, country and device. Identify whether carpet for rental properties / carpet tiles for landlords / rental flooring queries produce impressions.
2. In GA4 property 551678243, review Australian landing-page sessions and acquisition sources for the last 90 days. Check the existing `generate_lead` event and mark it as a key event if appropriate. After deployment compare CTA clicks → enquiry starts → submissions → accepted leads. Keep phone/email clicks separate from confirmed leads.
3. Send one clearly labelled controlled enquiry with the owner's real reply address. Confirm Formspree accepts it, it appears in the account's submissions, and the email reaches modular@premrest.com.au (including spam checks). Confirm the Formspree destination, account activation, allowed domains, quotas and notification settings. Also test the existing range order form.
4. Review Google Business Profile eligibility and business details. Add only genuine installation photographs, verified project examples and customer feedback when available. Existing lifestyle imagery should not be presented as a completed Premrest project.
5. Measure the mobile enquiry flow and Core Web Vitals after deployment. This review did not include browser-based visual or mobile verification.

No ranking or lead-volume guarantee can be inferred from these changes. Indexing requests and analytics checks are pending access, not completed actions.

## Deployment access

The connected Vercel account listed project `diy-carpet-tiles` but refused project inspection in team `team_RoZBcsghJxxr0DbcBLVnOa1X` with HTTP 403. No Vercel CLI is installed, and the cloud environment reported no configured credentials. GitHub access allows a reviewable pull request. Production deployment cannot be verified through the available Vercel connection.
