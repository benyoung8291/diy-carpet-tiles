"use client";

import { useEffect } from "react";
import { trackEnquiryEvent } from "@/lib/analytics";

export function EnquiryTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!(event.target instanceof Element)) return;
      const link = event.target.closest("a");
      const href = link?.getAttribute("href");
      if (!href) return;
      if (href.startsWith("tel:")) trackEnquiryEvent("phone_click");
      else if (href.startsWith("mailto:")) trackEnquiryEvent("email_click");
      else {
        const url = new URL(href, window.location.origin);
        if (url.origin === window.location.origin && url.pathname === "/contact") {
          trackEnquiryEvent("enquiry_cta_click", { request_type: url.searchParams.get("request") === "samples" ? "samples" : "quote" });
        }
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return null;
}
