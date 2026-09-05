/** Existing Modular Carpet GA4 web stream (property 551678243). */
export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_ID || "G-GX95EKSH46";

type GtagCommand = "config" | "event" | "js" | "set";

type Gtag = (
  command: GtagCommand,
  targetOrEventName: string,
  params?: Record<string, unknown>
) => void;

declare global {
  interface Window {
    gtag?: Gtag;
  }

  var gtag: Gtag | undefined;
}

/**
 * Fire GA4 generate_lead after a successful Formspree submit only.
 * Safe no-op when gtag is missing (dev, blocked scripts, or SSR).
 */
export function trackGenerateLead(): void {
  if (typeof gtag === "function") {
    gtag("event", "generate_lead", {
      form_id: "xdappbep",
      form_destination: "formspree",
      page_path: window.location.pathname,
      page_location: window.location.href,
    });
  }
}

/** Shared Formspree hook: never fires on failed, validation, or network errors. */
export function trackGenerateLeadOnSuccess(response: { ok: boolean }): void {
  if (!response.ok) return;
  trackGenerateLead();
}
