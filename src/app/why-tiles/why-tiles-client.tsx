"use client";

import Link from "next/link";
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
  ArrowRight,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { SupplyOrInstall } from "@/components/shared/supply-or-install";

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

const deepBenefits = [
  {
    icon: "Eye",
    title: "Truly Seamless - Indistinguishable from Broadloom",
    description:
      "Modern carpet tile technology has evolved beyond the visible grid lines of old commercial tiles. Our tiles are precision-cut and designed to create a continuous, seamless surface that looks and feels identical to traditional rolled broadloom carpet. The join lines disappear completely once installed.",
    points: [
      "Precision-engineered edges for invisible joins",
      "Ashlar (brick-bond) layout eliminates grid patterns",
      "Identical texture and pile direction across every tile",
      "Guests genuinely cannot tell it's tiles",
    ],
  },
  {
    icon: "Wrench",
    title: "DIY Installation - No Tradesperson Needed",
    description:
      "Traditional carpet requires a flooring retailer, an installer quote, and weeks of waiting. Modular Carpet tiles arrive at your door and press onto adhesive. No power stretchers, no tack strips, no installer. If you're handy enough to paint a wall, you can carpet a room in an afternoon.",
    points: [
      "No special tools - just a utility knife and straight edge",
      "No flooring retailer or installer - order direct, install yourself",
      "Pressure-sensitive adhesive allows repositioning for minutes",
      "Walk on it immediately - no drying time, no waiting",
    ],
  },
  {
    icon: "RefreshCw",
    title: "Replace Any Tile, Any Time",
    description:
      "This is the game-changer. Red wine on the carpet? Pet accident? A burn mark from a dropped candle? With broadloom, you'd need to re-carpet the entire room. With Modular Carpet, you simply lift the damaged tile and replace it with a fresh one in minutes. Keep a few spares and your carpet stays perfect forever.",
    points: [
      "Individual tiles lift out in seconds",
      "Fresh tile presses into the same adhesive",
      "No colour-matching issues - order the same batch",
      "Perfect for homes with kids and pets",
    ],
  },
  {
    icon: "Sun",
    title: "Solution-Dyed Nylon - The Premium Fibre",
    description:
      "Solution-dyed nylon is the gold standard for carpet fibre. Unlike stock-dyed alternatives, the colour is locked into the fibre at a molecular level during manufacturing. This means extraordinary fade resistance, stain resistance, and colour consistency that lasts the full warranty period.",
    points: [
      "Colour locked in at molecular level - won't fade",
      "Superior stain resistance compared to polyester",
      "Exceptional durability and crush recovery",
      "Maintains appearance in high-traffic areas",
    ],
  },
  {
    icon: "Droplets",
    title: "Breathable Backing - Safe Over Moisture",
    description:
      "Many Australian homes sit on concrete slabs with residual moisture. Traditional carpet with rubber backing traps that moisture, creating mould and odour problems. Our recycled PET felt backing is completely breathable, allowing your subfloor to breathe naturally while still providing comfort and insulation.",
    points: [
      "Install over moisture-affected concrete slabs",
      "No trapped moisture = no mould, no odour",
      "Recycled PET felt is lightweight and sustainable",
      "Passed rigorous moisture vapour testing",
    ],
  },
  {
    icon: "Volume2",
    title: "Acoustic Performance That You'll Feel",
    description:
      "The bonded felt underlay in every tile delivers impressive sound absorption with a 0.25 NRC (Noise Reduction Coefficient) rating. This means quieter rooms, reduced echo, and a warmer, more comfortable living environment - especially in open-plan homes and multi-storey dwellings.",
    points: [
      "0.25 NRC acoustic rating",
      "Reduces footfall noise between floors",
      "Minimises echo in large, open-plan spaces",
      "Bonded underlay - no separate underlay needed",
    ],
  },
  {
    icon: "Shield",
    title: "15-Year Commercial-Grade Warranty",
    description:
      "These tiles are rated for commercial environments - offices, retail, hospitality - and backed by a 15-year wear warranty. In your home, they'll last even longer. This is buy-once, install-once flooring that handles real life with grace.",
    points: [
      "15-year commercial-grade wear warranty",
      "Rated for heavy foot traffic",
      "Exceeds residential durability requirements",
      "Backed by Premrest - trusted Australian distributor",
    ],
  },
  {
    icon: "Leaf",
    title: "The Sustainable Choice",
    description:
      "Modular carpet is inherently more sustainable than broadloom. When a section is damaged, you replace one tile - not the entire floor. The recycled PET felt backing gives new life to post-consumer plastic. Less waste, lower footprint, smarter living.",
    points: [
      "Replace tiles, not entire rooms - less landfill waste",
      "Recycled PET felt backing from post-consumer plastic",
      "Longer lifespan reduces replacement frequency",
      "Modular design means zero off-cut waste during installation",
    ],
  },
];

export function WhyTilesClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-brand-900">
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="overline text-accent mb-4">The Problem with Traditional Carpet</p>
            <h1 className="font-serif text-display-lg md:text-display-xl text-white mb-6 text-balance">
              Why Modular Carpet Outperforms Broadloom
            </h1>
            <p className="text-body-lg text-brand-300 max-w-2xl">
              Traditional carpet means a trip to the flooring store, expensive quotes,
              weeks waiting for an installer, and re-carpeting the entire room when
              something goes wrong. Modular Carpet tiles eliminate every one of those problems.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Comparison quick hits */}
      <Section background="white">
        <SectionHeader
          overline="Carpet Tiles vs. Traditional Carpet"
          title="Everything Traditional Carpet Does. Minus Everything You Hate About It."
        />
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-100 rounded-lg p-8">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-4">
                Traditional Carpet
              </h3>
              <ul className="space-y-3 text-body-sm text-brand-500">
                {[
                  "Visit a flooring retailer and get quotes",
                  "Wait weeks for a carpet installer",
                  "Pay $40–$60/m² just for installation labour",
                  "One stain = re-carpet the entire room",
                  "Traps moisture under rubber backing",
                  "Entire room goes to landfill when worn",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-300 mt-0.5">✕</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-accent-light rounded-lg p-8 border-2 border-accent/20">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-4">
                Modular Carpet Tiles
              </h3>
              <ul className="space-y-3 text-body-sm text-brand-700">
                {[
                  "Order online - no retailer needed",
                  "DIY install in an afternoon - no tradesperson",
                  "Save thousands on installation labour",
                  "Replace individual tiles in 60 seconds",
                  "Breathable felt - safe over concrete slabs",
                  "Replace tiles, not the whole floor",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Deep dive benefits */}
      {deepBenefits.map((benefit, index) => {
        const Icon = iconMap[benefit.icon];
        const isEven = index % 2 === 0;
        return (
          <Section
            key={benefit.title}
            background={isEven ? "linen" : "white"}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-accent-light flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <h2 className="font-serif text-heading-lg text-brand-800">
                  {benefit.title}
                </h2>
              </div>
              <p className="text-body-lg text-brand-500 mb-6 leading-relaxed">
                {benefit.description}
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {benefit.points.map((point) => (
                  <li
                    key={point}
                    className="flex items-start gap-2 text-body-md text-brand-600"
                  >
                    <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Section>
        );
      })}

      <SupplyOrInstall
        background="white"
        description="Premrest sells modular carpet either as a supply-only product you install yourself, or as a full supply-and-install service in Melbourne, Sydney, and Brisbane. Same product, same 15-year warranty - choose whichever path suits the project."
      />

      {/* Articles & Guides */}
      <Section background="linen">
        <div className="max-w-3xl mx-auto">
          <p className="overline text-center mb-3">Articles &amp; Guides</p>
          <h2 className="font-serif text-heading-lg text-brand-800 mb-6 text-center">
            Read Next
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/hotel-grade-carpet-for-home" className="block bg-white rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">Why Hotel Carpet Lasts Longer Than Home Carpet</h3>
              <p className="text-body-sm text-brand-500">The four-line spec to write into any home, rental, or hospitality brief.</p>
            </Link>
            <Link href="/replace-hotel-carpet-without-downtime" className="block bg-white rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">Repairing Damage Without Closing the Room</h3>
              <p className="text-body-sm text-brand-500">The 60-second tile swap and the lifecycle case for hotels and homes.</p>
            </Link>
            <Link href="/refurbish-motel-without-closing-rooms" className="block bg-white rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">Rolling Refurbishment Across a Property</h3>
              <p className="text-body-sm text-brand-500">A room-by-room plan written for owner-operators and serious landlords.</p>
            </Link>
          </div>
        </div>
      </Section>

      {/* Related Pages */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-heading-lg text-brand-800 mb-6 text-center">
            Continue Exploring
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/how-to-install" className="block bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">How to Install</h3>
              <p className="text-body-sm text-brand-500">Step-by-step DIY guide. No tools, no experience needed.</p>
            </Link>
            <Link href="/rental-flooring" className="block bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">Rental Properties</h3>
              <p className="text-body-sm text-brand-500">Why landlords and tenants are switching to carpet tiles.</p>
            </Link>
            <Link href="/investment-property-flooring" className="block bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">Investment Properties</h3>
              <p className="text-body-sm text-brand-500">Commercial-grade carpet that outlasts your tenants.</p>
            </Link>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-brand-900 py-20 md:py-28">
        <div className="container-main text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto"
          >
            <p className="overline text-accent mb-4">Skip the Carpet Store</p>
            <h2 className="font-serif text-display-md text-white mb-6 text-balance">
              Order Premium Carpet Tiles Direct - Install Them Yourself
            </h2>
            <p className="text-body-lg text-brand-300 mb-10">
              No flooring retailer. No installer. No waiting. Choose your range,
              order online, and install beautiful carpet in your home this weekend.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Request Free Samples
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline_white" size="lg" asChild>
                <Link href="/ranges/haven">Explore Ranges</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
