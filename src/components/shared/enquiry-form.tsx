"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

interface EnquiryFormProps {
  preselectedRange?: string;
  compact?: boolean;
}

export function EnquiryForm({
  preselectedRange,
  compact = false,
}: EnquiryFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // TODO: Replace with Formspree or actual form handler
    // Example: await fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: new FormData(e.currentTarget) })
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="text-center py-8">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <Send className="w-7 h-7 text-green-600" />
        </div>
        <h3 className="font-serif text-heading-md text-brand-800 mb-2">
          Thank You!
        </h3>
        <p className="text-body-md text-brand-500">
          We&apos;ve received your enquiry and will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className={compact ? "space-y-4" : "grid grid-cols-1 md:grid-cols-2 gap-5"}>
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-brand-600 mb-1.5"
          >
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full bg-white border-[1.5px] border-brand-200 rounded-md px-4 py-3.5 text-brand-800 placeholder:text-brand-300 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent-light transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-brand-600 mb-1.5"
          >
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full bg-white border-[1.5px] border-brand-200 rounded-md px-4 py-3.5 text-brand-800 placeholder:text-brand-300 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent-light transition-colors"
            placeholder="you@example.com"
          />
        </div>
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-brand-600 mb-1.5"
          >
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full bg-white border-[1.5px] border-brand-200 rounded-md px-4 py-3.5 text-brand-800 placeholder:text-brand-300 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent-light transition-colors"
            placeholder="04XX XXX XXX"
          />
        </div>
        <div>
          <label
            htmlFor="range"
            className="block text-sm font-medium text-brand-600 mb-1.5"
          >
            Preferred Range
          </label>
          <select
            id="range"
            name="range"
            defaultValue={preselectedRange || ""}
            className="w-full bg-white border-[1.5px] border-brand-200 rounded-md px-4 py-3.5 text-brand-800 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent-light transition-colors"
          >
            <option value="">Select a range (optional)</option>
            <option value="inglenook">Inglenook</option>
            <option value="harmonia">Harmonia</option>
            <option value="urbicus">Urbicus</option>
            <option value="undecided">Not sure yet</option>
          </select>
        </div>
      </div>

      {!compact && (
        <div>
          <label
            htmlFor="project-size"
            className="block text-sm font-medium text-brand-600 mb-1.5"
          >
            Approximate Room Size (m²)
          </label>
          <input
            type="text"
            id="project-size"
            name="project_size"
            className="w-full bg-white border-[1.5px] border-brand-200 rounded-md px-4 py-3.5 text-brand-800 placeholder:text-brand-300 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent-light transition-colors"
            placeholder="e.g. 25"
          />
        </div>
      )}

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-brand-600 mb-1.5"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={compact ? 3 : 4}
          className="w-full bg-white border-[1.5px] border-brand-200 rounded-md px-4 py-3.5 text-brand-800 placeholder:text-brand-300 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent-light transition-colors resize-none"
          placeholder="Tell us about your project..."
        />
      </div>

      <Button type="submit" size="lg" className="w-full" disabled={loading}>
        {loading ? "Sending..." : "Send Enquiry"}
        {!loading && <Send className="w-4 h-4 ml-2" />}
      </Button>
    </form>
  );
}
