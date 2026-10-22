"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

const KEY_PATHS = new Set([
  "/contact",
  "/installation",
  "/rental-flooring",
  "/hotel-carpet",
  "/investment-property-flooring",
  "/refurbish-motel-without-closing-rooms",
  "/replace-hotel-carpet-without-downtime",
  "/hotel-grade-carpet-for-home",
]);

function supportsSpeculationRules(): boolean {
  return typeof HTMLScriptElement !== "undefined" && typeof HTMLScriptElement.supports === "function" && HTMLScriptElement.supports("speculationrules");
}

/**
 * Hover/pointer prefetch for browsers that do not implement Speculation Rules.
 * Same key routes only; skips forms, tel/mailto, and cross-origin links.
 */
export function IntentPrefetchFallback() {
  const router = useRouter();

  useEffect(() => {
    if (supportsSpeculationRules()) return;

    const seen = new Set<string>();
    const onPointerEnter = (event: Event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;
      const anchor = target.closest("a");
      if (!anchor || anchor.closest("form")) return;
      const raw = anchor.getAttribute("href");
      if (!raw || raw.startsWith("mailto:") || raw.startsWith("tel:") || raw.startsWith("#")) return;

      let url: URL;
      try {
        url = new URL(raw, window.location.origin);
      } catch {
        return;
      }
      if (url.origin !== window.location.origin) return;
      if (!KEY_PATHS.has(url.pathname)) return;

      const key = `${url.pathname}${url.search}`;
      if (seen.has(key)) return;
      seen.add(key);
      router.prefetch(key);
    };

    document.addEventListener("pointerenter", onPointerEnter, true);
    return () => document.removeEventListener("pointerenter", onPointerEnter, true);
  }, [router]);

  return null;
}
