"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";

const faqs = [
  {
    q: "What is modular carpet, and how is it different from broadloom?",
    a: "Modular carpet is precision-cut tile (typically 500 × 1000 mm) installed with pressure-sensitive adhesive in an ashlar (brick-bond) layout. Unlike rolled broadloom, individual tiles can be lifted and replaced if they're damaged, and the floor can be repaired without a full re-carpet. Once installed it looks and feels like premium broadloom - guests genuinely cannot tell it's tiles.",
  },
  {
    q: "Who is this product for?",
    a: "Three audiences typically: hospitality operators (hotels, motels, serviced apartments) who need a floor that handles commercial traffic and can be repaired without closing rooms; landlords and asset managers who want a floor that survives multiple tenancy cycles without re-carpeting between every tenant; and homeowners building or renovating to a higher standard who want flooring that ages gracefully under real life with kids, pets, and afternoon sun.",
  },
  {
    q: "Do I install it myself, or do you install for me?",
    a: "Both options are available. The supply-only path delivers product direct from the warehouse for an in-house install (with your own trade or as an owner-installer project). The supply-and-install service operates in Melbourne, Sydney, and Brisbane at an indicative ~$20-25/m² installation rate, with site-specific costs (preparation, levelling, transitions, removal of existing flooring) itemised separately in the quote.",
  },
  {
    q: "Do the tiles look like real carpet, or do you see grid lines?",
    a: "Modern modular tiles are precision-engineered to be visually indistinguishable from premium broadloom once installed. The ashlar (brick-bond) layout has no continuous grid line for the eye to track, and consistent pile direction across every tile means the floor reflects light as a single surface. The Haven and Horizon ranges are specified for hospitality and considered residential interiors - not 1990s offices.",
  },
  {
    q: "What happens when a tile gets damaged or stained?",
    a: "Lift the damaged tile and press in a fresh one from your spare-tile inventory. The repair takes about 60 seconds, leaves the surrounding tiles undisturbed, and is invisible to the next guest, tenant, or visitor because the tiles are batch-matched. There's no equivalent in broadloom - which is why hotels, motels, and savvy landlords specify modular.",
  },
  {
    q: "Is the carpet rated for hotel and commercial use?",
    a: "Yes. The Haven and Horizon ranges are commercial-grade, solution-dyed nylon backed by a 15-year manufacturer wear warranty. The same product specified for hotel guest rooms and corridors is the product that ships into Australian homes, rentals, and motels - the warranty doesn't change between use cases.",
  },
  {
    q: "Can it be installed over concrete slabs, including moisture-affected slabs?",
    a: "Yes. The breathable recycled PET felt backing is engineered for Australian slab conditions. Unlike rubber-backed broadloom (which traps moisture and breeds mould over time), the felt backing lets the slab breathe naturally. It also works over plywood, timber, vinyl, and most existing hard floors.",
  },
  {
    q: "How do I order, request samples, or get a quote?",
    a: "Free physical samples ship Australia-wide through the contact page. Direct supply orders are placed via the order form on each range page (with an optional installation-quote checkbox if you'd like both quoted together). For larger projects - hotels, motels, multi-property landlords, considered home renovations - the contact form lets you flag whether you want supply only, supply and install, or are still deciding.",
  },
];

export function FaqSection() {
  return (
    <Section background="linen">
      <SectionHeader
        overline="Common Questions"
        title="Everything You Need to Know About Modular Carpet"
      />
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <motion.div
            key={faq.q}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
            className="bg-white rounded-lg p-6 border border-brand-200"
          >
            <h3 className="font-semibold text-brand-800 text-body-lg mb-2">
              {faq.q}
            </h3>
            <p className="text-body-md text-brand-500 leading-relaxed">
              {faq.a}
            </p>
          </motion.div>
        ))}
      </div>

      {/* FAQ Schema - JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </Section>
  );
}
