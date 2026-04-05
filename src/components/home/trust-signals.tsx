"use client";

import { motion } from "framer-motion";
import { Shield, Truck, Recycle, DollarSign } from "lucide-react";
import { Section } from "@/components/ui/section";

const signals = [
  {
    icon: DollarSign,
    title: "$58.50/m² inc GST",
    description: "Premium carpet tiles, direct pricing",
  },
  {
    icon: Shield,
    title: "15-Year Warranty",
    description: "Commercial-grade wear warranty",
  },
  {
    icon: Recycle,
    title: "Recycled PET Backing",
    description: "Sustainable, breathable felt",
  },
  {
    icon: Truck,
    title: "$55 Flat Rate Shipping",
    description: "Delivered Australia-wide",
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
