/**
 * Verifies GA4 generate_lead fires only on Formspree success.
 * Run: npx tsx scripts/verify-generate-lead.mts
 */
import assert from "node:assert/strict";
import { trackGenerateLead, trackGenerateLeadOnSuccess } from "../src/lib/analytics";

type GtagCall = [string, string, Record<string, unknown>?];

const calls: GtagCall[] = [];

const mockGtag = (
  command: string,
  eventName: string,
  params?: Record<string, unknown>
) => {
  calls.push([command, eventName, params]);
};

Object.defineProperty(globalThis, "window", {
  value: {
    location: {
      pathname: "/contact",
      href: "https://www.modularcarpet.com.au/contact",
    },
    gtag: mockGtag,
  },
  writable: true,
});

function reset() {
  calls.length = 0;
}

reset();
trackGenerateLeadOnSuccess({ ok: true });
assert.equal(calls.length, 1, "success path must call gtag once");
assert.equal(calls[0][0], "event");
assert.equal(calls[0][1], "generate_lead");
assert.deepEqual(calls[0][2], {
  form_id: "xdappbep",
  form_destination: "formspree",
  page_path: "/contact",
  page_location: "https://www.modularcarpet.com.au/contact",
});

reset();
trackGenerateLeadOnSuccess({ ok: false });
assert.equal(calls.length, 0, "failed Formspree response must not call gtag");

reset();
trackGenerateLead();
assert.equal(calls.length, 1, "direct helper still emits the event");

delete (globalThis as { window: { gtag?: typeof mockGtag } }).window.gtag;
reset();
trackGenerateLead();
trackGenerateLeadOnSuccess({ ok: true });
assert.equal(calls.length, 0, "missing gtag is a no-op");

console.log("verify-generate-lead: all assertions passed");
