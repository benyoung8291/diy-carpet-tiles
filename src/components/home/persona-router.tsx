"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Hotel, Home, Building2, Wrench, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const personas = [
  {
    icon: Hotel,
    tag: "Hospitality",
    title: "Hotel, Motel, or Serviced Apartment",
    body: "Spec a floor that handles commercial traffic and lets housekeeping spot-replace damaged tiles between guests. Phased installs across low-occupancy windows, no property closure required.",
    cta: "See the Hospitality Brief",
    href: "/hotel-carpet",
  },
  {
    icon: Home,
    tag: "Considered Home",
    title: "A Home Built to a Higher Standard",
    body: "The 15-year warranty, solution-dyed nylon, and ashlar-laid finish that hotels specify - in your master bedroom, hallway, family room, or home office. Install yourself or have us install for you.",
    cta: "Why Tiles for the Home",
    href: "/why-tiles",
  },
  {
    icon: Building2,
    tag: "Investment Property",
    title: "Long-Hold Rental or Portfolio",
    body: "Replace damaged tiles between tenancies in under an hour - never re-carpet a whole room again. One floor that survives multiple tenancy cycles without burning capital.",
    cta: "Read the Investor Case",
    href: "/investment-property-flooring",
  },
  {
    icon: Wrench,
    tag: "Owner-Installer",
    title: "Doing the Work Yourself",
    body: "Trade-savvy homeowner, owner-operator, or hands-on landlord? Order direct, follow the install guide, and lay it yourself. Or pick up a property-sized brief if you're unsure where to start.",
    cta: "Read the Install Guide",
    href: "/how-to-install",
  },
];

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

export function PersonaRouter() {
  return (
    <Section background="white">
      <SectionHeader
        overline="For Every Type of Property"
        title="Find the Approach That Fits Your Project"
        description="The same modular carpet works the same way across hotels, motels, considered homes, and investment properties. The difference is which lens you read it through. Pick yours."
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {personas.map((persona) => {
          const Icon = persona.icon;
          return (
            <motion.div key={persona.title} variants={cardVariants}>
              <Link
                href={persona.href}
                className="group block h-full bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/40 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <p className="overline mb-2">{persona.tag}</p>
                <h3 className="font-serif text-heading-sm text-brand-800 mb-3">
                  {persona.title}
                </h3>
                <p className="text-body-sm text-brand-500 leading-relaxed mb-5">
                  {persona.body}
                </p>
                <span className="inline-flex items-center gap-1.5 text-body-sm font-medium text-accent group-hover:gap-2.5 transition-all">
                  {persona.cta}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
