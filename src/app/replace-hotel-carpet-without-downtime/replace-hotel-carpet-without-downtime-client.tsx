"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { faqs } from "./faqs";

export function ReplaceHotelCarpetWithoutDowntimeClient() {
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
            <p className="overline text-accent mb-4">Hospitality Operations</p>
            <h1 className="font-serif text-display-lg md:text-display-xl text-white mb-6 text-balance">
              How Do You Replace Damaged Hotel Carpet Without Closing the Room?
            </h1>
            <p className="text-body-lg text-white mb-6 leading-relaxed">
              <strong className="text-accent">The short answer: one tile at a time.</strong>{" "}
              Modular carpet tiles allow housekeeping to lift a single damaged
              tile and press in a fresh one in under 60 seconds - no installer,
              no adhesive cure time, no skip bin in the loading dock. The room
              is back online before the next check-in, and the repair is
              invisible to the next guest.
            </p>
            <p className="text-body-lg text-brand-300">
              For a hotel, motel, or serviced-apartment operator, every night a
              room sits offline costs ADR. For a landlord, every day between
              tenants costs rent. For a homeowner who has invested in a
              beautiful home, a single stain shouldn&apos;t trigger a full
              re-carpet. The answer for all three is the same: a flooring system
              designed to be repaired, not replaced.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The hidden P&L of a single stain */}
      <Section background="white">
        <SectionHeader
          overline="What Damage Actually Costs"
          title="The Hidden P&amp;L of a Single Broadloom Carpet Stain"
          description="When a guest spills red wine on broadloom carpet in Room 217, the visible cost is the carpet repair invoice. The real cost is everything else."
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Revenue lost while the room is offline",
              body: "A broadloom patch rarely matches the surrounding carpet after a few months of foot traffic, so most operators end up re-carpeting the entire room. That's 5-14 nights offline waiting on flooring quotes, installer availability, and adhesive cure time. At an ADR of $220 with 80% occupancy, that's $880-$2,460 in lost revenue per room before the repair invoice arrives.",
            },
            {
              title: "Operational drag on the team",
              body: "Coordinating an outside flooring installer means quotes, scheduling, key access, supervision, and a contractor walking through the back-of-house. Every minute the engineering or housekeeping manager spends on this is a minute they aren't spending on turning over occupied rooms or running scheduled maintenance.",
            },
            {
              title: "Slow erosion of brand standard",
              body: "A patched carpet that doesn't quite match. A faintly visible repair line. A guest review that mentions the room felt tired. For a property that competes on review scores and ADR, the long-term cost of one visible repair compounds far beyond the line item on the maintenance ledger.",
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
          The damage is rarely the expensive part. The downtime, the operational
          overhead, and the slow erosion of the room&apos;s standard are.
        </p>
      </Section>

      {/* The five-minute tile swap */}
      <Section background="linen">
        <SectionHeader
          overline="The Repair Procedure"
          title="The Five-Minute Tile Swap, Done by In-House Staff"
          description="Standardised, repeatable, and well within the skill set of any maintenance or housekeeping team. No flooring trade required."
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              n: "1",
              title: "Identify the affected tile or tiles",
              body: "Most damage is contained to one or two tiles. Mark them with painter's tape. There's no need to move furniture from the rest of the room - just clear the immediate work area.",
            },
            {
              n: "2",
              title: "Lift the damaged tile",
              body: "Slide a putty knife under one corner. Pressure-sensitive adhesive releases cleanly, leaving the surrounding tiles undisturbed. Bag the damaged tile for disposal.",
            },
            {
              n: "3",
              title: "Inspect the exposed substrate",
              body: "A quick wipe is all that's needed in most cases. The adhesive remains tacky and re-bonds with the replacement tile. No fresh adhesive, no primer, no rework.",
            },
            {
              n: "4",
              title: "Place a batch-matched spare from inventory",
              body: "Check the directional arrow on the tile backing for pile alignment, position it square to the surrounding tiles, and press firmly. Because every tile is precision-cut to identical dimensions, the replacement sits flush with no visible seam.",
            },
            {
              n: "5",
              title: "Walk the seams and release the room",
              body: "Inspect the joins from a standing position. There is no drying time, no off-gassing, and no adhesive odour for the next guest. The room is immediately ready for turn-down service or check-in.",
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
              The whole procedure fits inside the time it takes to deep-clean a
              bathroom. No installer call-out, no lead time, no contractor
              management, no room out of inventory.
            </p>
          </div>
        </div>
      </Section>

      {/* Brand-standard repairs */}
      <Section background="white">
        <SectionHeader
          overline="Brand-Standard Repairs"
          title="Why the Replacement Is Invisible to the Next Guest"
          description="Every flooring contractor will tell you they can patch broadloom. Few will tell you the patch is visible at six months because the dye lots, pile direction, and wear age never quite match. The modular approach removes the entire variable."
        />
        <div className="max-w-3xl mx-auto space-y-5">
          {[
            {
              title: "Solution-dyed nylon = batch-to-batch colour consistency",
              body: "The colour is locked into the fibre at a molecular level during manufacturing, not surface-applied afterwards. A tile pulled from inventory next year will match the surrounding floor exactly, even after years of UV exposure on the floor it's joining.",
            },
            {
              title: "Ashlar layout hides the join",
              body: "Tiles are installed in a brick-bond pattern with no continuous grid line for the eye to track. A single replaced tile disappears into the broader surface rather than announcing itself the moment a guest walks in.",
            },
            {
              title: "Identical pile direction on every tile",
              body: "Directional arrows on every tile backing ensure the replacement reflects light the same way as its neighbours. There is no shadow line effect that gives a repair away under the directional lighting most hotel rooms use.",
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
            A property is only ever as good as its worst-looking room. Modular
            Carpet lets you keep every room at the standard you originally
            specified - for the full 15-year life of the floor.
          </p>
        </div>
      </Section>

      {/* Same playbook, three properties */}
      <Section background="linen">
        <SectionHeader
          overline="The Same Playbook, Three Properties"
          title="Why Sophisticated Landlords and Homeowners Use the Same Strategy"
          description="The instinct to protect a productive asset from preventable damage doesn't end at the hotel-room door. The same product solves the same problem for landlords and considered home owners."
        />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              tag: "Hospitality",
              title: "Hotels, motels, serviced apartments",
              body: "Operators who refuse to let one damaged room drag down their RevPAR. The product is rated for the corridor and lobby traffic of a commercial environment and backed by a 15-year wear warranty - yet routine repairs are handled by housekeeping, not a procurement-managed contractor.",
            },
            {
              tag: "Investment Property",
              title: "Multi-property landlords",
              body: "Portfolio owners where every vacancy week is rent foregone. Spot-replacing a tile between tenancies is a Saturday morning, not a fortnight of installer scheduling. The same floor carries through five tenancy cycles without a full re-carpet - preserving capital and protecting yield.",
            },
            {
              tag: "Considered Home",
              title: "Homeowners who invest in their home",
              body: "Owners who specified solid-timber joinery, stone benchtops, and considered lighting - and don't accept that a single red-wine spill means re-carpeting the master bedroom. They want flooring that ages gracefully and can be perfected at any moment.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-lg p-8 border border-brand-200"
            >
              <p className="overline mb-3">{item.tag}</p>
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
          The common thread isn&apos;t price sensitivity - it&apos;s investment
          thinking. None of these owners are looking for the cheapest carpet.
          They are looking for the carpet that protects the asset.
        </p>
      </Section>

      {/* 10-year lifecycle economics */}
      <Section background="white">
        <SectionHeader
          overline="The 10-Year View"
          title="Lifecycle Economics: What a 30-Room Property Actually Spends Over 10 Years"
          description="The discipline of lifecycle costing reframes flooring from a one-off line item into a 10-year operating decision. The numbers below assume mid-range Australian rates and an indicative 30-room boutique property; the principle scales in either direction."
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-brand-50 rounded-lg p-8 border border-brand-200">
            <h3 className="font-serif text-heading-sm text-brand-800 mb-5">
              Mid-Range Broadloom
            </h3>
            <ul className="space-y-2 text-body-sm text-brand-500 mb-5">
              {[
                "Initial fit-out: 30 rooms × 25 m² × $80 supplied &amp; installed = $60,000",
                "Re-carpet of damaged rooms (8 rooms × 2 cycles over 10 years): $32,000",
                "Room revenue lost to re-carpet downtime (8 × 2 × 7 nights × $176 RevPAR): $19,712",
                "Disruption: 20+ days of rooms out of inventory across the portfolio",
                "Patches visible at 6 months as dye lots and wear age diverge",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-300 mt-0.5">—</span>
                  <span dangerouslySetInnerHTML={{ __html: item }} />
                </li>
              ))}
            </ul>
            <div className="border-t border-brand-200 pt-4">
              <p className="text-body-md text-brand-800">
                <strong>10-year carpet investment: ~$111,700</strong>
              </p>
            </div>
          </div>
          <div className="bg-accent-light rounded-lg p-8 border-2 border-accent/20">
            <h3 className="font-serif text-heading-sm text-brand-800 mb-5">
              Modular Carpet (Premium)
            </h3>
            <ul className="space-y-2 text-body-sm text-brand-700 mb-5">
              {[
                "Initial fit-out: 30 rooms × 25 m² × $66.55/m² inc GST = $49,912",
                "Pressure-sensitive adhesive (5 × 180 m² tubs at ~$150 each): ~$750",
                "10-year spare-tile inventory and spot replacements: ~$3,500",
                "Room revenue lost to repairs: $0 - repairs handled in-room, in-day",
                "Commercial-grade solution-dyed nylon, 15-year wear warranty",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-t border-accent/20 pt-4">
              <p className="text-body-md text-brand-800">
                <strong>10-year carpet investment: ~$54,000</strong>
              </p>
            </div>
          </div>
        </div>
        <p className="max-w-3xl mx-auto text-center text-body-lg text-brand-600 italic mt-10">
          Over a decade the modular approach is roughly half the total spend of
          mid-range broadloom - and it delivers a commercial-grade,
          solution-dyed nylon product backed by a 15-year warranty. The lower
          lifecycle cost is the consequence of buying the better product, not
          the cheaper one.
        </p>
      </Section>

      {/* Supply only or supply + install */}
      <Section background="white">
        <SectionHeader
          overline="Two Paths to a Finished Floor"
          title="Supply Only, or Supply and Install - Your Choice"
          description="Modular Carpet by Premrest is available either as a supply-only product, or as a full supply-and-install service in Melbourne, Sydney, and Brisbane. Both paths converge on the same in-house spot-replacement procedure for ongoing maintenance once the floor is laid."
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-brand-50 rounded-lg p-8 border border-brand-200">
            <p className="overline mb-3">Path 1</p>
            <h3 className="font-serif text-heading-sm text-brand-800 mb-4">
              Supply only - install in-house or via your trade
            </h3>
            <ul className="space-y-2 text-body-sm text-brand-500">
              {[
                "Direct from the warehouse to your property",
                "Install with your existing maintenance team or preferred contractor",
                "Suits hotels, motels, and asset managers with established trade relationships",
                "Adhesive coverage ~180 m² per tub, around $150 each",
                "Installation guide and pile-direction documentation supplied",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-accent-light rounded-lg p-8 border-2 border-accent/20">
            <p className="overline mb-3">Path 2</p>
            <h3 className="font-serif text-heading-sm text-brand-800 mb-4">
              Supply and install - Melbourne, Sydney, Brisbane
            </h3>
            <ul className="space-y-2 text-body-sm text-brand-700">
              {[
                "Premrest manages measurement, supply, and installation",
                "Indicative installation rate ~$20-25/m² of laid carpet",
                "Site preparation, levelling, and transitions quoted alongside",
                "One contract, one invoice, one project lead - no installer brokerage",
                "Suits properties with strict open dates or remote head offices",
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
          The choice between paths doesn&apos;t change the product. It just
          changes who lays it - and either way, ongoing tile-by-tile repairs
          stay an in-house, no-contractor task.
        </p>
      </Section>

      {/* FAQ */}
      <Section background="linen">
        <SectionHeader
          overline="Frequently Asked Questions"
          title="What Operators, Asset Managers, and Owners Ask Before They Specify"
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
            Continue by Property Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/hotel-carpet"
              className="block bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all"
            >
              <p className="overline mb-2">Hospitality</p>
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">
                Hotel &amp; Motel Specification
              </h3>
              <p className="text-body-sm text-brand-500">
                Commercial-grade ranges and the operational case for modular in
                guest rooms and corridors.
              </p>
            </Link>
            <Link
              href="/investment-property-flooring"
              className="block bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all"
            >
              <p className="overline mb-2">Investment Property</p>
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">
                Landlord &amp; Asset Manager Brief
              </h3>
              <p className="text-body-sm text-brand-500">
                The lifecycle case for landlords with multi-property portfolios
                and long-hold horizons.
              </p>
            </Link>
            <Link
              href="/why-tiles"
              className="block bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all"
            >
              <p className="overline mb-2">Considered Home</p>
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">
                Why Tiles for the Home You&apos;ve Invested In
              </h3>
              <p className="text-body-sm text-brand-500">
                Eight reasons modular outperforms broadloom in homes built to a
                higher standard.
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
              Specify the Floor That Repairs Itself
            </p>
            <h2 className="font-serif text-display-md text-white mb-6 text-balance">
              Request Samples and a Property-Specific Quote
            </h2>
            <p className="text-body-lg text-brand-300 mb-10">
              We&apos;ll send physical samples of the Haven and Horizon ranges
              and prepare a quote tailored to your property - either supply-only
              or full supply-and-install in Melbourne, Sydney, or Brisbane.
              Whichever path suits your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Request Samples &amp; Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline_white" size="lg" asChild>
                <Link href="/hotel-carpet">Hotel-Specification Range</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
