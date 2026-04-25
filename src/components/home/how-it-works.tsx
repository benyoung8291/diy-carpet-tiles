"use client";

import { motion } from "framer-motion";
import { Section, SectionHeader } from "@/components/ui/section";
import { INSTALLATION_STEPS } from "@/lib/data";

export function HowItWorks() {
  return (
    <Section background="white">
      <SectionHeader
        overline="How It Goes Down"
        title="Four Steps From Subfloor to Finished Room"
        description="Whether you install yourself or have Premrest install for you, the process is the same. Pressure-sensitive adhesive, ashlar layout, walk on it immediately - no drying time, no off-gassing, no power stretchers."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {INSTALLATION_STEPS.map((step, index) => {
          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="relative"
            >
              {/* Step number */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-serif text-xl">
                  {step.step}
                </div>
                {index < INSTALLATION_STEPS.length - 1 && (
                  <div className="hidden lg:block flex-1 h-px bg-brand-200" />
                )}
              </div>
              <h3 className="font-serif text-heading-sm text-brand-800 mb-3">
                {step.title}
              </h3>
              <p className="text-body-sm text-brand-500 leading-relaxed">
                {step.description}
              </p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
