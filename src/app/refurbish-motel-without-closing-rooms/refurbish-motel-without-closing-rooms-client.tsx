"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { faqs } from "./faqs";

export function RefurbishMotelClient() {
  return (
    <>
      {/* Hero + direct answer */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-brand-900">
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="overline text-accent mb-4">
              Owner-Operator Refurbishment
            </p>
            <h1 className="font-serif text-display-lg md:text-display-xl text-white mb-6 text-balance">
              How to Refurbish Carpet Across an Owner-Operated Motel Without
              Closing a Single Room
            </h1>
            <p className="text-body-lg text-white mb-6 leading-relaxed">
              <strong className="text-accent">The short answer:</strong>{" "}
              refurbish one room at a time, during your low-occupancy windows,
              using modular carpet tiles you can install yourself. A typical
              25-room motel can have every guest room refreshed over a single
              quarter without ever taking the property below normal saleable
              inventory. No contractor scheduling, no extended closures, no
              fortnight-long capital crunch.
            </p>
            <p className="text-body-lg text-brand-300">
              Most motel refurbishment advice was written for the chain-hotel
              model - shut a floor, bring in a contractor, take the cost on the
              chin. That model doesn&apos;t fit the way an owner-operated motel
              actually runs. This guide lays out a refurbishment plan written
              for the operator who lives on the property, books the rooms
              personally, and does the work themselves - so the carpet gets
              renewed without the property going off-line.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why broadloom fights the owner-operator */}
      <Section background="white">
        <SectionHeader
          overline="The Refurbishment Mismatch"
          title="Why Broadloom Carpet Fights an Owner-Operator at Every Step"
          description="The traditional motel refurbishment model was designed for a contractor's calendar, not yours. Three concrete frictions explain why most owner-operators put refurbishment off for years longer than they should."
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "You can't book a contractor around your bookings",
              body: "Carpet installers schedule four to six weeks ahead. Your guest bookings come in two weeks ahead. The two calendars don't talk to each other, and the contractor's schedule wins. The result is rooms blocked from inventory at exactly the times you'd otherwise be selling them.",
            },
            {
              title: "Re-carpeting one room empties the room",
              body: "Stretched-in broadloom requires the room to be cleared. Beds, side tables, desks, lamps - out into the corridor or the room next door (which is now also out of inventory). For a single tradesperson working alone in a motel guest room, that's half a day before the carpet job even starts.",
            },
            {
              title: "One quote, one contract, one capital event",
              body: "A contractor writes the quote for the whole property. You sign once, you pay once. There is no smooth way to refurbish six rooms now and the rest in three months when bookings ease - every fresh quote starts back at zero and the unit price climbs each time.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-brand-50 rounded-lg p-6 border border-brand-200"
            >
              <h3 className="font-serif text-heading-sm text-brand-800 mb-3">
                {item.title}
              </h3>
              <p className="text-body-sm text-brand-500 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
        <p className="max-w-3xl mx-auto text-center text-body-lg text-brand-600 italic mt-12">
          The owner-operator pattern - small, hands-on, schedule-driven,
          cashflow-managed - is not what stretched-in broadloom was designed
          for. It is a product built for a contractor&apos;s calendar, not
          yours.
        </p>
      </Section>

      {/* The rolling refurbishment plan */}
      <Section background="linen">
        <SectionHeader
          overline="The Rolling Refurbishment"
          title="The Room-by-Room Plan: Refresh One Room Per Window, Stay Open Throughout"
          description="Refurbishment as a recurring operation rather than a one-off project. Each step is sized to a single owner-operator working alone or with one trusted helper."
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              n: "1",
              title: "Identify your low-occupancy windows",
              body: "Every motel has them. Sunday nights through Tuesday checkouts in regional markets, the mid-week dips between weekends in tourist markets, the post-school-holiday lull. List the next twelve windows in your booking system. Each one is the slot for a single room's refurbishment.",
            },
            {
              n: "2",
              title: "Sequence rooms by condition, not by room number",
              body: "Don't start at Room 1 and march down the property. Start with the rooms that most need it - usually the ones nearest the office (highest traffic) or the ones that get the strongest afternoon sun (most fade). Sequence the rest by how visibly tired they look, so every refurbishment cycle moves the worst-looking room out of inventory and replaces it with the freshest.",
            },
            {
              n: "3",
              title: "Pre-stage materials in a single bulk delivery",
              body: "Order tiles for the whole property in one delivery and store them flat in a spare room or office. Pre-cut adhesive, putty knives, utility knives, and a chalk line live on a single trolley that follows the refurbishment from room to room. No supply runs mid-job, no last-minute orders, no lead-time surprises.",
            },
            {
              n: "4",
              title: "Take the room offline at 11am, back to inventory by 2pm next day",
              body: "The actual install on a standard motel guest room (around 25 m²) takes 4-6 hours including furniture relocation. The remaining time covers prep cleaning, adhesive tack-up, and the housekeeping turn for the next guest. The room is offline for a single night - the one night you'd already chosen as your low-occupancy window.",
            },
            {
              n: "5",
              title: "Update your booking system the moment the room is back",
              body: "Don't block the room out for a buffer night. Once the floor is laid and walked, it's saleable. Modular tiles have no drying time and no adhesive off-gassing, so the next guest can check in that afternoon with no impact on guest experience or review scores.",
            },
          ].map((step) => (
            <div key={step.n} className="flex gap-5">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center font-serif text-heading-sm">
                {step.n}
              </div>
              <div className="flex-1 pt-2">
                <h3 className="font-serif text-heading-sm text-brand-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-body-md text-brand-500 leading-relaxed">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
          <div className="bg-accent-light border-l-4 border-accent rounded-lg p-6 mt-8">
            <p className="text-body-lg text-brand-700 italic">
              Twelve refurbishment windows over a quarter is twelve rooms
              refreshed. Most owner-operated motels run between fifteen and
              thirty rooms - meaning the entire property can be refurbished in
              one to two quarters without ever falling below normal saleable
              inventory.
            </p>
          </div>
        </div>
      </Section>

      {/* Owner-operator install path */}
      <Section background="white">
        <SectionHeader
          overline="Doing the Work Yourself"
          title="What an Owner-Operator Install Actually Looks Like"
          description="The vast majority of owner-operated motels in Australia were originally built and have been progressively refurbished by their owners. Modular carpet tiles fit that lineage. The only specialised tools are a utility knife and a chalk line - both of which already live in your maintenance shed."
        />
        <div className="max-w-3xl mx-auto space-y-5">
          {[
            {
              title: "One person, four to six hours per room",
              body: "No second pair of hands required for a standard 25 m² guest room. Furniture moves to one half of the room, you lay the other half, then you reverse. Total hands-on time fits comfortably inside a single low-occupancy day with breaks for coffee and the front desk.",
            },
            {
              title: "No specialist trade or licence required",
              body: "Pressure-sensitive adhesive systems are explicitly designed for non-professional installation. There is no licensing, no compliance certification, and no trade qualification needed to install or replace tiles in your own property. The skills sit comfortably alongside paint, plumbing repairs, and standard handyman work.",
            },
            {
              title: "Mistakes are reversible during installation",
              body: "Pressure-sensitive adhesive remains repositionable for several minutes after a tile is laid. If you misalign a tile or run a row slightly off-square, you lift it and re-lay it. There is no equivalent forgiveness in stretched-in broadloom - one bad cut can ruin a whole roll.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-4 bg-brand-50 rounded-lg p-6 border border-brand-200"
            >
              <Check className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-serif text-heading-sm text-brand-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-body-md text-brand-500 leading-relaxed">
                  {item.body}
                </p>
              </div>
            </div>
          ))}
          <p className="text-body-lg text-brand-600 italic text-center pt-4">
            If you&apos;ve done your own painting, your own tiling repair, or
            your own furniture assembly to a guest-ready standard, you&apos;ve
            already cleared the bar. The rest is sequencing and a Saturday
            morning.
          </p>
        </div>
      </Section>

      {/* Cashflow-friendly refurbishment */}
      <Section background="linen">
        <SectionHeader
          overline="Cashflow-Friendly Refurbishment"
          title="Spreading the Spend Across the Quarter, Not Financing the Whole Property"
          description="A traditional whole-property re-carpet is a single capital event of $40,000-$80,000 paid to a contractor inside thirty days. For most owner-operated motels running on operating cashflow, that is the actual constraint that delays refurbishment for years. The rolling-refurbishment model removes the constraint."
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-8 border border-brand-200">
            <h3 className="font-serif text-heading-sm text-brand-800 mb-5">
              Whole-property contractor refurb
            </h3>
            <ul className="space-y-2 text-body-sm text-brand-500">
              {[
                "Single tender, single contract, single deposit",
                "$40,000-$80,000 invoice payable inside 30 days",
                "Property either fully closed or partially closed for 2-4 weeks",
                "Refurbishment delayed until cashflow can absorb the lump",
                "All twenty rooms refurbished - but two years later than they should have been",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-300 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-accent-light rounded-lg p-8 border-2 border-accent/20">
            <h3 className="font-serif text-heading-sm text-brand-800 mb-5">
              Rolling refurbishment with modular tiles
            </h3>
            <ul className="space-y-2 text-body-sm text-brand-700">
              {[
                "One bulk tile delivery up-front (often the only capital outlay)",
                "Refurbishment funded from operating cashflow, room by room",
                "Property runs at full saleable inventory throughout",
                "Worst-condition rooms upgraded first - visible quality lift in the first month",
                "All rooms refurbished within one to two quarters, not two years away",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="max-w-3xl mx-auto text-center text-body-lg text-brand-600 italic mt-10">
          The total spend on tiles is comparable. The cashflow shape is
          completely different - and the cashflow shape is what determines
          whether the refurbishment actually happens this year or in three
          years&apos; time.
        </p>
      </Section>

      {/* Worked example */}
      <Section background="white">
        <SectionHeader
          overline="A Worked Example"
          title="A 20-Room Regional Motel: The Numbers in Practice"
          description="A 20-room regional motel running 65% average occupancy at $145 ADR, with 25 m² of carpeted floor per guest room. Carpet was last replaced 9 years ago and is visibly worn in seven of the rooms. Numbers are illustrative but typical."
        />
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Property metrics */}
          <div className="bg-brand-50 rounded-lg p-8 border border-brand-200">
            <h3 className="font-serif text-heading-sm text-brand-800 mb-4">
              Property metrics
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-body-sm text-brand-500">
              <li>20 rooms × 25 m² = 500 m² of guest-room carpet</li>
              <li>Annual room nights at 65% occupancy ≈ 4,745</li>
              <li>Annual room revenue ≈ $688,000</li>
              <li>Daily revenue impact of one room offline ≈ $94</li>
            </ul>
          </div>

          {/* Side-by-side refurb cost */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-accent-light rounded-lg p-8 border-2 border-accent/20">
              <p className="overline mb-3">The owner-operator path</p>
              <h3 className="font-serif text-heading-sm text-brand-800 mb-5">
                Modular tiles, rolling refurb
              </h3>
              <ul className="space-y-2 text-body-sm text-brand-700 mb-5">
                {[
                  "500 m² × $66.55/m² inc GST = $33,275 in tiles",
                  "Pressure-sensitive adhesive across 500 m² ≈ $1,200",
                  "5% over-order for spares and offcuts ≈ $1,665",
                  "Owner-operator labour: 20 rooms × 6 hrs over 12 weeks",
                  "Foregone revenue: 20 rooms × 1 low-occupancy night × $94 ≈ $1,880",
                  "Contractor management cost: $0",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="border-t border-accent/20 pt-4">
                <p className="text-body-md text-brand-800">
                  <strong>Total cost incl. revenue impact: ~$38,000</strong>
                </p>
              </div>
            </div>
            <div className="bg-brand-50 rounded-lg p-8 border border-brand-200">
              <p className="overline mb-3">The contractor path</p>
              <h3 className="font-serif text-heading-sm text-brand-800 mb-5">
                Mid-range broadloom, whole property
              </h3>
              <ul className="space-y-2 text-body-sm text-brand-500 mb-5">
                {[
                  "Broadloom supplied &amp; installed across 500 m² ≈ $45,000",
                  "Furniture relocation and prep across 20 rooms",
                  "Property partially closed for 2-4 weeks",
                  "Foregone revenue ≈ $9,000-$26,000",
                  "Single capital event payable inside 30 days",
                  "Worn-looking patches reappear at year 5-6",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="text-brand-300 mt-0.5">—</span>
                    <span dangerouslySetInnerHTML={{ __html: item }} />
                  </li>
                ))}
              </ul>
              <div className="border-t border-brand-200 pt-4">
                <p className="text-body-md text-brand-800">
                  <strong>Total cost incl. revenue impact: $54,000-$71,000</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
        <p className="max-w-3xl mx-auto text-center text-body-lg text-brand-600 italic mt-10">
          The rolling-refurbishment approach finishes ahead on three measures
          simultaneously: total cash outlay, operating-cashflow shape, and
          revenue protection during the work. For an owner-operator, all three
          matter.
        </p>
      </Section>

      {/* FAQ */}
      <Section background="linen">
        <SectionHeader
          overline="Frequently Asked Questions"
          title="What Owner-Operators Ask Before Starting Refurbishment"
        />
        <div className="max-w-3xl mx-auto space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="bg-white rounded-lg p-6 border border-brand-200"
            >
              <h3 className="font-serif text-heading-sm text-brand-800 mb-3">
                {faq.q}
              </h3>
              <p className="text-body-md text-brand-500 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Related Pages */}
      <Section background="white">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-heading-lg text-brand-800 mb-8 text-center">
            Continue Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/replace-hotel-carpet-without-downtime"
              className="block bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all"
            >
              <p className="overline mb-2">Operations</p>
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">
                Repairing Damage Without Closing the Room
              </h3>
              <p className="text-body-sm text-brand-500">
                The 60-second tile swap and the 10-year lifecycle case for
                hospitality.
              </p>
            </Link>
            <Link
              href="/hotel-grade-carpet-for-home"
              className="block bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all"
            >
              <p className="overline mb-2">Specification</p>
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">
                Why Hotel Carpet Lasts Longer Than Home Carpet
              </h3>
              <p className="text-body-sm text-brand-500">
                The four spec lines that separate hotel-grade flooring from
                residential.
              </p>
            </Link>
            <Link
              href="/hotel-carpet"
              className="block bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all"
            >
              <p className="overline mb-2">Hospitality</p>
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">
                Hotel &amp; Motel Specification
              </h3>
              <p className="text-body-sm text-brand-500">
                Commercial-grade ranges, full warranty terms, and the brief
                for hospitality fit-outs.
              </p>
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
            <p className="overline text-accent mb-4">
              Plan Your Refurbishment This Quarter
            </p>
            <h2 className="font-serif text-display-md text-white mb-6 text-balance">
              Order Samples and a Property-Sized Quote for Your Motel
            </h2>
            <p className="text-body-lg text-brand-300 mb-10">
              Free physical samples of the Haven and Horizon ranges, and a
              property-sized quote tailored to your room count and floor plan.
              Direct from the Australian distributor - no flooring retailer,
              no installer brokerage, no quote walking around your property.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Request Samples &amp; Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline_white" size="lg" asChild>
                <Link href="/hotel-carpet">View Hotel-Spec Range</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
