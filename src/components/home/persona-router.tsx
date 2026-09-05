"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Hotel, Home, Building2, ArrowRight } from "lucide-react";
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
    body: "The 15-year warranty, solution-dyed nylon, and ashlar-laid finish that hotels specify - in your master bedroom, hallway, family room, or home office. Premrest can install, or your trade can lay the same product.",
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
        title="Start with the Hospitality Brief"
        description="Premrest's primary work is supply-and-install modular carpet for hotels, motels, apartments, and hospitality venues. The same product also suits considered homes and long-hold rentals."
      />
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6"
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
      <p className="mt-8 text-center text-body-sm text-brand-500">
        Laying tiles with an in-house trade or maintenance team?{" "}
        <Link
          href="/how-to-install"
          className="font-medium text-accent hover:text-accent-hover underline underline-offset-4"
        >
          Read the installation guide
        </Link>
        .
      </p>
    </Section>
  );
}
