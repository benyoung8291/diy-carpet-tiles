const KEY_HREF_MATCHES = [
  "/contact",
  "/contact?*",
  "/installation",
  "/installation?*",
  "/rental-flooring",
  "/rental-flooring?*",
  "/hotel-carpet",
  "/hotel-carpet?*",
  "/investment-property-flooring",
  "/investment-property-flooring?*",
  "/refurbish-motel-without-closing-rooms",
  "/refurbish-motel-without-closing-rooms?*",
  "/replace-hotel-carpet-without-downtime",
  "/replace-hotel-carpet-without-downtime?*",
  "/hotel-grade-carpet-for-home",
  "/hotel-grade-carpet-for-home?*",
];

const EXCLUSIONS = {
  and: [
    { href_matches: KEY_HREF_MATCHES },
    { not: { href_matches: ["https://*", "http://*"] } },
    { not: { selector_matches: ["a[href^='mailto:']", "a[href^='tel:']"] } },
    { not: { selector_matches: ["form a", "form button", "[type=submit]", ".do-not-speculate", "[rel~=nofollow]"] } },
  ],
};

const rules = {
  tag: "modular-carpet-nav",
  prefetch: [
    {
      source: "document",
      where: EXCLUSIONS,
      eagerness: "moderate",
    },
  ],
  prerender: [
    {
      source: "document",
      where: EXCLUSIONS,
      eagerness: "moderate",
    },
  ],
};

/**
 * Speculation Rules for key internal pages. Ignored by browsers without
 * support (Firefox/Safari). Does not target forms, tel/mailto, or external URLs.
 */
export function SpeculationRules() {
  return (
    <script
      type="speculationrules"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(rules) }}
    />
  );
}
