"use client";

import { motion } from "framer-motion";
import { Shield, Wrench, Recycle, MapPin } from "lucide-react";
import { Section } from "@/components/ui/section";

const signals = [
  {
    icon: Shield,
    title: "Commercial-Grade",
    description: "Solution-dyed nylon, 15-year wear warranty",
  },
  {
    icon: Recycle,
    title: "Replace Tiles, Not Rooms",
    description: "Damaged tile swapped in under a minute",
  },
  {
    icon: Wrench,
    title: "Supply or Supply + Install",
    description: "Direct, or installed in MEL / SYD / BNE",
  },
  {
    icon: MapPin,
    title: "Australian-Distributed",
    description: "By Premrest, direct from the warehouse",
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
