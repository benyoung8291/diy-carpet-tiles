"use client";

import { motion } from "framer-motion";
import { Shield, Truck, Recycle, Award } from "lucide-react";
import { Section } from "@/components/ui/section";

const signals = [
  {
    icon: Shield,
    title: "15-Year Warranty",
    description: "Commercial-grade wear warranty",
  },
  {
    icon: Award,
    title: "Solution-Dyed Nylon",
    description: "Fade-resistant, premium fibre",
  },
  {
    icon: Recycle,
    title: "Recycled PET Backing",
    description: "Sustainable, breathable felt",
  },
  {
    icon: Truck,
    title: "Australia-Wide",
    description: "Delivery to your door",
  },
];

export function TrustSignals() {
  return (
    <Section background="white" className="!py-12 md:!py-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-2 lg:grid-cols-4 gap-8"
      >
        {signals.map((signal) => (
          <div
            key={signal.title}
            className="flex flex-col items-center text-center"
          >
            <signal.icon className="w-8 h-8 text-teal mb-3" />
            <p className="font-semibold text-brand-800 text-body-sm">
              {signal.title}
            </p>
            <p className="text-brand-400 text-body-sm">{signal.description}</p>
          </div>
        ))}
      </motion.div>
    </Section>
  );
}
