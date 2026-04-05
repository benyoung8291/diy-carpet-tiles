"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { ranges } from "@/lib/data";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
};

export function RangesPreview() {
  return (
    <Section background="white">
      <SectionHeader
        overline="Our Collections"
        title="Two Ranges. Endless Possibilities."
        description="Each range brings its own personality — from fireside warmth to vibrant suburban energy. Find the perfect match for your home."
      />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        transition={{ staggerChildren: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
      >
        {ranges.map((range) => (
          <motion.div key={range.slug} variants={cardVariants}>
            <Link
              href={`/ranges/${range.slug}`}
              className="group block bg-white rounded-lg overflow-hidden border border-brand-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-[3/2] bg-brand-200 overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                  style={{
                    backgroundImage: `url('${range.heroImage}')`,
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                {/* Color dots preview */}
                <div className="absolute bottom-4 left-4 flex gap-1.5">
                  {range.colorways.slice(0, 6).map((c) => (
                    <div
                      key={c.code}
                      className="w-5 h-5 rounded-full border-2 border-white/60"
                      style={{ backgroundColor: c.hex }}
                    />
                  ))}
                  {range.colorways.length > 6 && (
                    <div className="w-5 h-5 rounded-full bg-white/30 flex items-center justify-center text-[9px] text-white font-semibold">
                      +{range.colorways.length - 6}
                    </div>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <p className="overline mb-2">{range.colorways.length} Colourways</p>
                <h3 className="font-serif text-heading-md text-brand-800 mb-2">
                  {range.name}
                </h3>
                <p className="text-body-sm text-brand-500 mb-4 line-clamp-2">
                  {range.tagline}
                </p>
                <span className="inline-flex items-center gap-1 text-accent font-semibold text-body-sm group-hover:gap-2 transition-all">
                  View Collection
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
