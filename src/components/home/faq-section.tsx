"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";

const faqs = [
  {
    q: "What are carpet tiles and how are they different from regular carpet?",
    a: "Carpet tiles (also called modular carpet) are individual carpet squares that interlock to create a seamless floor. Unlike traditional broadloom carpet that comes in heavy rolls and requires professional installation with power stretchers and tack strips, carpet tiles simply press onto adhesive. You install them yourself - no carpet installer needed.",
  },
  {
    q: "Can I really install carpet tiles myself with no experience?",
    a: "Yes. If you're handy enough to paint a wall, you can install carpet tiles. All you need is a utility knife and a straight edge. The tiles press onto pressure-sensitive adhesive and can be repositioned for several minutes. Most people carpet a full room in 2–3 hours. No power tools, no stretching, no tradesperson.",
  },
  {
    q: "Do carpet tiles look like real carpet or do you see the grid lines?",
    a: "Our Modular Carpet tiles are precision-engineered to be indistinguishable from traditional broadloom carpet. Installed in an ashlar (brick-bond) pattern, the join lines disappear completely. Guests genuinely cannot tell it's tiles until you tell them.",
  },
  {
    q: "How much do DIY carpet tiles cost compared to traditional carpet?",
    a: "Modular Carpet tiles are $58.50/m² inc GST - comparable to mid-range broadloom carpet. But because you install them yourself, you save $40–$60/m² in professional installation costs. For a 20m² room, that's $800–$1,200 saved. Plus $55 flat rate shipping Australia-wide.",
  },
  {
    q: "Can I replace individual carpet tiles if one gets stained or damaged?",
    a: "This is the biggest advantage over traditional carpet. If you spill wine, burn a tile, or have a pet accident, simply lift the damaged tile and press in a fresh one. It takes about 60 seconds. No re-carpeting the room, no installer, no matching issues.",
  },
  {
    q: "Are carpet tiles suitable for homes with pets and children?",
    a: "Absolutely - they're ideal. Solution-dyed nylon fibre resists stains and fading, and the 15-year commercial-grade warranty covers heavy residential use. When accidents happen (and they will with kids and pets), you replace individual tiles instead of the entire room.",
  },
  {
    q: "Can carpet tiles be installed over concrete slabs?",
    a: "Yes. Our breathable recycled PET felt backing is specifically designed for Australian conditions, including moisture-affected concrete slabs. Unlike traditional carpet with rubber backing that traps moisture and causes mould, our felt backing lets the slab breathe naturally.",
  },
  {
    q: "Are carpet tiles good for rental properties and investment properties?",
    a: "Carpet tiles are the smartest flooring choice for rental and investment properties. Landlords can replace damaged tiles between tenancies in minutes instead of re-carpeting entire rooms. This reduces turnover costs by 90%+ and eliminates vacancy periods spent waiting for carpet installers.",
  },
];

export function FaqSection() {
  return (
    <Section background="linen">
      <SectionHeader
        overline="Common Questions"
        title="Everything You Need to Know About DIY Carpet Tiles"
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
