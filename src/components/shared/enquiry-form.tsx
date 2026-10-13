"use client";

import { useEffect, useId, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import { trackEnquiryEvent, trackGenerateLeadOnSuccess } from "@/lib/analytics";

interface EnquiryFormProps {
  preselectedRange?: string;
  compact?: boolean;
}

const fieldClass = "w-full bg-white border-[1.5px] border-brand-200 rounded-md px-4 py-3.5 text-brand-800 placeholder:text-brand-400 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent-light transition-colors";
const labelClass = "block text-sm font-medium text-brand-600 mb-1.5";

export function EnquiryForm({ preselectedRange, compact = false }: EnquiryFormProps) {
  const id = useId();
  const started = useRef(false);
  const [requestType, setRequestType] = useState("quote");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (new URLSearchParams(window.location.search).get("request") === "samples") {
      setRequestType("samples");
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (loading) return;
    const formData = new FormData(e.currentTarget);
    setLoading(true);
    setError("");
    trackEnquiryEvent("enquiry_submit", { request_type: requestType });
    try {
      const res = await fetch("https://formspree.io/f/xdappbep", {
        method: "POST", body: formData, headers: { Accept: "application/json" },
      });
      if (res.ok) {
        trackGenerateLeadOnSuccess(res, requestType);
        setSubmitted(true);
      } else {
        trackEnquiryEvent("enquiry_error", { request_type: requestType, error_type: "response", status_code: res.status });
        setError("Your enquiry could not be sent. Please try again, call 1300 207 915 or email modular@premrest.com.au.");
      }
    } catch {
      trackEnquiryEvent("enquiry_error", { request_type: requestType, error_type: "network" });
      setError("Your enquiry could not be sent. Please try again, call 1300 207 915 or email modular@premrest.com.au.");
    } finally { setLoading(false); }
  };

  if (submitted) {
    return (
      <div role="status" className="text-center py-8">
        <Send className="w-8 h-8 text-green-600 mx-auto mb-4" aria-hidden="true" />
        <h3 className="font-serif text-heading-md text-brand-800 mb-2">Thanks — your request has been sent.</h3>
        <p className="text-body-md text-brand-500">Premrest will reply within one business day{requestType === "samples" ? " to confirm your sample selection and delivery details" : " to discuss your project"}.</p>
        <p className="mt-4 text-body-sm text-brand-500">Need to speak sooner? <a className="underline" href="tel:1300207915">Call 1300 207 915</a>.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} onChange={() => {
      if (!started.current) { started.current = true; trackEnquiryEvent("enquiry_start"); }
    }} className="space-y-5" aria-busy={loading}>
      <div>
        <label htmlFor={`${id}-request`} className={labelClass}>How can we help?</label>
        <select id={`${id}-request`} name="request_type" value={requestType} onChange={(e) => setRequestType(e.target.value)} className={fieldClass}>
          <option value="quote">Get a carpet quote</option>
          <option value="samples">Request free carpet samples</option>
          <option value="advice">Ask a question / help me choose</option>
        </select>
      </div>
      <div className={compact ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-5"}>
        <div>
          <label htmlFor={`${id}-name`} className={labelClass}>Name *</label>
          <input id={`${id}-name`} name="name" autoComplete="name" required className={fieldClass} placeholder="Your name" />
        </div>
        <div>
          <label htmlFor={`${id}-email`} className={labelClass}>Email *</label>
          <input type="email" id={`${id}-email`} name="email" autoComplete="email" required className={fieldClass} placeholder="you@example.com" />
        </div>
      </div>
      <div>
        <label htmlFor={`${id}-message`} className={labelClass}>{requestType === "samples" ? "Colours or ranges you’d like to see (optional)" : "Tell us what you need (optional)"}</label>
        <textarea id={`${id}-message`} name="message" rows={compact ? 3 : 4} className={fieldClass} placeholder={requestType === "samples" ? "Haven, Horizon, or help choosing. We’ll confirm delivery details with you." : "Property location, rooms or approximate area — it’s fine if you’re not sure yet."} />
      </div>
      <details className="rounded-lg border border-brand-200 p-4" open={preselectedRange ? true : undefined}>
        <summary className="cursor-pointer font-medium text-brand-700">Add project details (optional)</summary>
        <div className="grid grid-cols-1 gap-4 mt-4">
          <div><label htmlFor={`${id}-phone`} className={labelClass}>Phone</label><input type="tel" id={`${id}-phone`} name="phone" autoComplete="tel" className={fieldClass} /></div>
          <div><label htmlFor={`${id}-location`} className={labelClass}>Property suburb / postcode</label><input id={`${id}-location`} name="property_location" className={fieldClass} /></div>
          <div><label htmlFor={`${id}-range`} className={labelClass}>Preferred range</label><select id={`${id}-range`} name="range" defaultValue={preselectedRange || ""} className={fieldClass}><option value="">Not sure yet</option><option value="haven">Haven</option><option value="horizon">Horizon</option></select></div>
          <div><label htmlFor={`${id}-property`} className={labelClass}>Property type</label><select id={`${id}-property`} name="property_type" defaultValue="" className={fieldClass}><option value="">Select if known</option><option value="hotel">Hotel</option><option value="motel">Motel</option><option value="apartment">Serviced apartment</option><option value="airbnb">Airbnb</option><option value="retreat_or_conference">Retreat / conference venue</option><option value="home">Home</option><option value="rental">Rental property</option><option value="other">Other</option></select></div>
          <div><label htmlFor={`${id}-service`} className={labelClass}>Installation</label><select id={`${id}-service`} name="service_type" defaultValue="not_sure" className={fieldClass}><option value="not_sure">Help me decide</option><option value="supply_and_install">Supply and install — Melbourne, Sydney or Brisbane</option><option value="supply_only">Supply only — Australia-wide</option></select></div>
          {!compact && <div><label htmlFor={`${id}-size`} className={labelClass}>Approximate total carpet area (m²)</label><input id={`${id}-size`} name="project_size" className={fieldClass} placeholder="e.g. 250 m² across 10 rooms — or leave blank" /></div>}
        </div>
      </details>
      {error && <p role="alert" className="text-red-600 text-body-sm">{error} <a className="underline" href="mailto:modular@premrest.com.au">Email Premrest</a></p>}
      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? "Sending…" : requestType === "samples" ? "Request my free samples" : requestType === "advice" ? "Send my question" : "Request my carpet quote"}
        {!loading && <Send className="w-4 h-4 ml-2" aria-hidden="true" />}
      </Button>
      <p className="text-body-sm text-brand-500">Only your name and email are required. We use your details to respond to this request. We reply within one business day.</p>
    </form>
  );
}
