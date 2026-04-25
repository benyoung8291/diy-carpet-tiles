"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Shield,
  DollarSign,
  Clock,
  Sun,
  Volume2,
  RefreshCw,
  BedDouble,
  Building2,
  Paintbrush,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";

const hotelBenefits = [
  {
    icon: RefreshCw,
    title: "Replace Tiles, Not Entire Rooms",
    description:
      "A guest spills red wine, burns the carpet with an iron, or drags furniture across the floor. With broadloom, you're looking at a full room re-carpet and days of downtime. With Modular Carpet, your maintenance team lifts the damaged tiles and presses in fresh ones - often while the room is being serviced for the next guest.",
  },
  {
    icon: Clock,
    title: "Minimise Room Closures",
    description:
      "Every night a room is closed for carpet repair is lost revenue. Modular Carpet tiles eliminate extended closures. Tile swaps take minutes, not days. No waiting for carpet installers, no furniture relocation, no room out of service. Your hotel keeps earning.",
  },
  {
    icon: Shield,
    title: "15-Year Commercial-Grade Warranty",
    description:
      "These tiles are purpose-built for high-traffic commercial environments. The 15-year wear warranty covers hotel corridors, guest rooms, conference areas, and lobbies. Built for the reality of hospitality - heavy luggage, high heels, room service trolleys, and thousands of guests.",
  },
  {
    icon: Sun,
    title: "Solution-Dyed Nylon - Superior Stain Resistance",
    description:
      "Solution-dyed nylon locks colour into the fibre at a molecular level. It resists stains, fading, and bleach spotting far better than stock-dyed alternatives. When spills happen - and in hotels, they happen daily - the nylon fibre fights back.",
  },
  {
    icon: Volume2,
    title: "Acoustic Performance for Guest Comfort",
    description:
      "The bonded felt underlay delivers a 0.25 NRC acoustic rating, reducing noise transfer between floors and corridors. Quieter rooms, fewer noise complaints, better guest reviews. No separate underlay to buy or install.",
  },
  {
    icon: DollarSign,
    title: "Phased Rollouts & Volume Pricing",
    description:
      "Refurbish your hotel floor by floor, wing by wing - without shutting down entire sections. Premrest offers volume-based pricing for full hotel rollouts and can schedule phased installations around your occupancy calendar.",
  },
];

const broadloomProblems = [
  "Stain or tear forces room closure - lost revenue per night",
  "Carpet repair requires full room re-carpet",
  "Installer availability delays = extended room downtime",
  "Furniture must be completely removed and returned",
  "Colour matching between batches is unreliable",
  "Rubber backing traps moisture - mould risk in wet climates",
];

const modularSolutions = [
  "Swap damaged tiles in minutes - room stays in service",
  "Replace only the affected area, not the entire floor",
  "Your maintenance team handles it - no external installer",
  "Tiles slide under furniture or replace around it",
  "Consistent colour from the same production batch",
  "Breathable PET backing prevents moisture and mould",
];

const faqs = [
  {
    q: "How quickly can damaged hotel carpet tiles be replaced?",
    a: "Individual tiles can be lifted and replaced in under 5 minutes. Your housekeeping or maintenance team can handle tile swaps as part of normal room servicing - no external carpet installer needed. The room doesn't need to be taken out of service.",
  },
  {
    q: "Are carpet tiles suitable for hotel corridors and high-traffic areas?",
    a: "Absolutely. Our tiles carry a 15-year commercial-grade wear warranty and are rated for heavy foot traffic environments including hotel corridors, lobbies, conference rooms, and back-of-house areas. The solution-dyed nylon fibre maintains its appearance under continuous use.",
  },
  {
    q: "Can we do a phased rollout across the hotel?",
    a: "Yes - this is one of the key advantages for hotels. You can refurbish floor by floor, wing by wing, or room type by room type. Premrest works with your operations team to schedule installations around occupancy peaks, minimising disruption to guests and revenue.",
  },
  {
    q: "How do carpet tiles look compared to traditional broadloom?",
    a: "Installed in an ashlar (brick-bond) pattern, our tiles are visually indistinguishable from broadloom carpet. The join lines disappear completely. Guests experience the same luxurious, plush feel of broadloom with none of the operational downsides.",
  },
  {
    q: "Do you offer volume pricing for hotel installations?",
    a: "Yes. Premrest provides volume-based pricing for full hotel rollouts. Contact us with your property details and we'll provide a tailored quote including supply, installation, and a recommended spare tile allocation for ongoing maintenance.",
  },
  {
    q: "What about fire ratings and compliance?",
    a: "Our carpet tiles meet Australian commercial flooring fire safety standards. Full compliance documentation and test certificates are available on request. Contact Premrest for specification sheets relevant to your compliance requirements.",
  },
  {
    q: "How does the breathable backing help in hotels?",
    a: "Hotels in tropical and coastal regions often face moisture challenges. Traditional carpet with rubber backing traps moisture against the subfloor, causing mould and odour. Our recycled PET felt backing is fully breathable, allowing the subfloor to dry naturally - eliminating a common and expensive maintenance issue.",
  },
];

export function HotelCarpetClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-brand-900">
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/lifestyle/hero-home.jpg')" }}
          />
        </div>
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="overline text-accent mb-4">Hotel Carpet Solution</p>
            <h1 className="font-serif text-display-md md:text-display-lg lg:text-display-xl text-white mb-6 text-balance">
              Stop Disruptions and Costly Carpet Repairs
            </h1>
            <p className="text-body-md md:text-body-lg text-brand-300 max-w-2xl">
              Modular Carpet tiles combine the luxurious, plush feel of broadloom
              with the convenience of modular replacement. Replace damaged tiles
              in minutes - not days. Keep rooms earning, not closed for repairs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get a Hotel Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline_white" size="lg" asChild>
                <Link href="/ranges/haven">Browse Ranges</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            overline="The Hotel Carpet Problem"
            title="When Carpet Repairs Mean Room Closures, Everyone Loses"
          />
          <div className="bg-brand-100 rounded-lg p-8 md:p-10">
            <div className="space-y-6 text-body-lg text-brand-600 leading-relaxed">
              <p>
                In hospitality, carpet damage is inevitable. Guests spill drinks,
                drag suitcases, drop irons, and wear high-traffic paths into corridors.
                With traditional broadloom, every repair becomes a project - rooms
                close, installers are booked weeks out, furniture is relocated, and
                revenue evaporates.
              </p>
              <p>
                The real cost isn&apos;t just the carpet. It&apos;s the <strong>lost
                room revenue</strong>, the <strong>guest disruption</strong>, and the
                <strong> maintenance headaches</strong> that drag on for days when
                they should take minutes.
              </p>
              <p className="font-semibold text-brand-800">
                What if your maintenance team could fix carpet damage themselves -
                in minutes, while servicing the room for the next guest?
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Broadloom vs Modular Comparison */}
      <Section background="linen">
        <SectionHeader
          overline="Broadloom vs. Modular"
          title="The Operational Difference for Hotels"
        />
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-8 border border-brand-200">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-4">
                Traditional Broadloom
              </h3>
              <ul className="space-y-3 text-body-sm text-brand-500">
                {broadloomProblems.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-300 mt-0.5">&#10005;</span>
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
                {modularSolutions.map((item) => (
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

      {/* Benefits */}
      <Section background="white">
        <SectionHeader
          overline="Built for Hospitality"
          title="Why Hotels Are Switching to Modular Carpet"
          description="Every benefit addresses a real operational pain point - from guest room maintenance to corridor refurbishment to acoustic comfort."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotelBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="bg-brand-50 rounded-lg p-8 border border-brand-200"
            >
              <div className="w-14 h-14 rounded-lg bg-accent-light flex items-center justify-center mb-5">
                <benefit.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-heading-sm text-brand-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-body-sm text-brand-500 leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* How It Works for Hotels */}
      <Section background="linen">
        <SectionHeader
          overline="How It Works"
          title="From Installation to Ongoing Maintenance"
        />
        <div className="max-w-3xl mx-auto">
          <div className="space-y-8">
            {[
              {
                icon: Building2,
                step: "1",
                title: "Consultation & Specification",
                description:
                  "Premrest works with your hotel management and facilities team to select the right range, colourway, and specification for your property. We assess subfloor conditions, traffic patterns, and acoustic requirements.",
              },
              {
                icon: Paintbrush,
                step: "2",
                title: "Professional Installation",
                description:
                  "Our team installs room by room or floor by floor - scheduled around your occupancy calendar to minimise disruption. Phased rollouts let you refurbish progressively without shutting down entire sections of the hotel.",
              },
              {
                icon: BedDouble,
                step: "3",
                title: "Spare Tile Allocation",
                description:
                  "We provide a calculated allocation of spare tiles stored on-site. Your housekeeping and maintenance team is trained to swap tiles - turning what was a multi-day repair job into a 5-minute task during normal room servicing.",
              },
              {
                icon: RefreshCw,
                step: "4",
                title: "Ongoing Maintenance & Replenishment",
                description:
                  "When your spare tile stock runs low, Premrest replenishes from the same production batch for consistent colour matching. Your carpet stays looking fresh year after year with minimal operational impact.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg p-6 border border-brand-200 flex gap-5"
              >
                <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-serif text-xl flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="font-serif text-heading-sm text-brand-800 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-body-sm text-brand-500 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <SectionHeader
          overline="Frequently Asked Questions"
          title="Hotel Carpet Tiles - FAQ"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4 }}
              className="bg-brand-50 rounded-lg p-6 border border-brand-200"
            >
              <h3 className="font-semibold text-brand-800 text-body-lg mb-2">
                {faq.q}
              </h3>
              <p className="text-body-md text-brand-500 leading-relaxed">
                {faq.a}
              </p>
            </motion.div>
          ))}
        </div>

        {/* FAQ Schema - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((faq) => ({
                "@type": "Question",
                name: faq.q,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.a,
                },
              })),
            }),
          }}
        />
      </Section>

      {/* Articles & Guides */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <p className="overline text-center mb-3">Articles &amp; Guides</p>
          <h2 className="font-serif text-heading-lg text-brand-800 mb-6 text-center">
            For Hospitality Operators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/replace-hotel-carpet-without-downtime" className="block bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">Repairing Damage Without Closing the Room</h3>
              <p className="text-body-sm text-brand-500">The 60-second tile swap and the 10-year lifecycle case for hotels.</p>
            </Link>
            <Link href="/refurbish-motel-without-closing-rooms" className="block bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">Refurbish a Motel Without Closing Rooms</h3>
              <p className="text-body-sm text-brand-500">A rolling, room-by-room playbook for owner-operated motels.</p>
            </Link>
            <Link href="/hotel-grade-carpet-for-home" className="block bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">Why Hotel Carpet Lasts Longer</h3>
              <p className="text-body-sm text-brand-500">The four spec lines that separate hospitality-grade flooring from residential.</p>
            </Link>
          </div>
        </div>
      </Section>

      {/* Related Pages */}
      <Section background="linen">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-heading-lg text-brand-800 mb-6 text-center">
            More Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/investment-property-flooring" className="block bg-white rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">Investment Properties</h3>
              <p className="text-body-sm text-brand-500">Commercial-grade carpet that outlasts multiple tenancy cycles.</p>
            </Link>
            <Link href="/rental-flooring" className="block bg-white rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">Rental Properties</h3>
              <p className="text-body-sm text-brand-500">Replace tiles between tenancies instead of re-carpeting.</p>
            </Link>
            <Link href="/why-tiles" className="block bg-white rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">Why Carpet Tiles?</h3>
              <p className="text-body-sm text-brand-500">Every advantage over traditional broadloom carpet.</p>
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
            <p className="overline text-accent mb-4">Let&apos;s Talk</p>
            <h2 className="font-serif text-display-md text-white mb-6 text-balance">
              Ready to Solve Your Hotel Carpet Problem?
            </h2>
            <p className="text-body-lg text-brand-300 mb-10">
              Phased rollouts, volume pricing, and professional installation by
              Premrest. Tell us about your property and we&apos;ll provide a
              tailored solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get a Hotel Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline_white" size="lg" asChild>
                <Link href="/ranges/haven">Browse Ranges</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
