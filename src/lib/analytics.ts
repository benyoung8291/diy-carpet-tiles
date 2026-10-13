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
}

/**
 * Track enquiry activity without sending form values or contact details.
 * Safe no-op when gtag is missing (dev, blocked scripts, or SSR).
 */
export function trackEnquiryEvent(event: string, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined") return;
  const { gtag } = window;
  if (typeof gtag === "function") {
    gtag("event", event, {
      form_id: "xdappbep",
      form_destination: "formspree",
      page_path: window.location.pathname,
      ...params,
    });
  }
}

export function trackGenerateLead(): void {
  trackEnquiryEvent("generate_lead");
}

/** Never count failed submissions as leads. */
export function trackGenerateLeadOnSuccess(response: { ok: boolean }, requestType?: string, sector?: string): void {
  if (!response.ok) return;
  trackEnquiryEvent("generate_lead", { ...(requestType ? { request_type: requestType } : {}), ...(sector ? { sector } : {}) });
}
