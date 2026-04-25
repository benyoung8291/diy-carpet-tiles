"use client";

import { motion } from "framer-motion";
import {
  Eye,
  Wrench,
  RefreshCw,
  Sun,
  Droplets,
  Volume2,
  Shield,
  Leaf,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { BENEFITS } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Eye,
  Wrench,
  RefreshCw,
  Sun,
  Droplets,
  Volume2,
  Shield,
  Leaf,
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" as const },
  },
};

export function BenefitsGrid() {
  return (
    <Section background="linen">
      <SectionHeader
        overline="What Makes the Product Different"
        title="The Eight Things That Set Modular Carpet Apart"
        description="The same commercial-grade specification used in hotels, serviced apartments, and considered residential interiors across Australia. Built to be repaired, not replaced - whichever path you take to install it."
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {BENEFITS.map((benefit) => {
          const Icon = iconMap[benefit.icon];
          return (
            <motion.div
              key={benefit.title}
              variants={cardVariants}
              className="bg-white rounded-lg p-8 border border-brand-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-accent-light flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-heading-sm text-brand-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-body-sm text-brand-500 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
