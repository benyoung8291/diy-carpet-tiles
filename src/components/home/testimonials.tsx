"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { TESTIMONIALS } from "@/lib/data";

export function Testimonials() {
  return (
    <Section background="linen">
      <SectionHeader
        overline="What Owners and Operators Say"
        title="From a Motel Owner, a Family Home, and a Landlord's Portfolio"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {TESTIMONIALS.map((testimonial, index) => (
          <motion.div
            key={testimonial.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: "easeOut",
            }}
            className="bg-white rounded-lg p-8 border border-brand-200"
          >
            <Quote className="w-8 h-8 text-accent/20 mb-4" />
            {/* Stars */}
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-warm text-warm"
                />
              ))}
            </div>
            <blockquote className="text-body-md text-brand-600 mb-6 leading-relaxed italic">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <div className="border-t border-brand-200 pt-4">
              <p className="font-semibold text-brand-800 text-body-sm">
                {testimonial.name}
              </p>
              <p className="text-brand-400 text-body-sm">
                {testimonial.location}
              </p>
              <p className="text-accent text-body-sm font-medium mt-1">
                {testimonial.range}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
