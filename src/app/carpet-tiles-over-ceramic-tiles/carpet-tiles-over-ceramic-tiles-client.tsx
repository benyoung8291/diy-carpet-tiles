"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { faqs } from "./faqs";

export function CarpetTilesOverCeramicTilesClient() {
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
            <p className="overline text-accent mb-4">DIY Flooring Question</p>
            <h1 className="font-serif text-display-lg md:text-display-xl text-white mb-6 text-balance">
              Can You Install Carpet Tiles Over Ceramic Tiles? (Yes - Here&apos;s Exactly How)
            </h1>
            <p className="text-body-lg text-white mb-6 leading-relaxed">
              <strong className="text-accent">Short answer: yes.</strong> You can install
              modular carpet tiles directly over existing ceramic, porcelain, or stone
              tiles, provided the tile is firmly bonded, level, dry, and clean. No
              demolition, no skip bin, no tile removal. Pressure-sensitive adhesive
              bonds the carpet tile to the ceramic surface, and the result is a fully
              carpeted room in an afternoon.
            </p>
            <p className="text-body-lg text-brand-300">
              If you&apos;re staring at cold ceramic tile in your living room, lounge,
              or hallway and wondering whether you have to rip it all up before you can
              have carpet - you don&apos;t. This guide walks through when carpet tiles
              work over existing tile, when they don&apos;t, and the prep steps that
              make the difference between a floor that lasts 15 years and one that
              lifts in six months.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why it works */}
      <Section background="white">
        <SectionHeader
          overline="Why It Works"
          title="Ceramic Tile Is Actually One of the Best Subfloors for Carpet Tiles"
          description="Carpet tile manufacturers spend a lot of words on what kind of subfloor their product needs. Cut through the jargon and the ideal subfloor is hard, flat, dry, clean, and dimensionally stable - and ceramic tile ticks all five."
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Hard and stable",
              body: "Ceramic doesn't flex, swell, or shift seasonally the way timber can. Pressure-sensitive adhesive needs a rigid surface to bond to, and tile is as rigid as it gets.",
            },
            {
              title: "Already sealed",
              body: "Glazed ceramic is essentially impermeable. There's no moisture migration risk from below, and the adhesive can't be drawn into a porous surface and starved of contact.",
            },
            {
              title: "You skip a step",
              body: "Concrete subfloors usually need to be ground back, vacuumed, and primed. Ceramic is already finished - once it's clean and degreased, it's ready to receive adhesive.",
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
      </Section>

      {/* When NOT to install over tiles */}
      <Section background="linen">
        <SectionHeader
          overline="Be Honest With Yourself"
          title="Four Situations Where You Should Not Install Carpet Tiles Over Ceramic"
          description="Carpet tiles work over ceramic in the vast majority of homes. But the prep is only as good as the surface underneath. Walk away from a direct overlay if any of the following apply."
        />
        <div className="max-w-3xl mx-auto space-y-4">
          {[
            {
              title: "Loose, drummy, or cracked tiles",
              body: "Tap a screwdriver handle across the floor. A hollow drum sound means the tile has lost its bond to the slab. Re-bed or remove and patch first - laying carpet over a loose tile guarantees the carpet will lift with it.",
            },
            {
              title: "Significant lippage between tiles",
              body: "If you can feel an edge with your foot, you'll feel it through a carpet tile. Anything over a 2 mm step needs to be levelled with a flexible patching compound before the carpet goes down.",
            },
            {
              title: "Deep, wide, or unusually patterned grout lines",
              body: "Standard 3-5 mm grout lines are fine and disappear under the felt backing. Heavy heritage or rustic tiles with 10 mm+ joins need a skim coat of self-levelling compound or a feather-finish patch to stop the grout pattern telegraphing through the carpet over time.",
            },
            {
              title: "Active moisture issues",
              body: "Efflorescence (white powder around joins), persistent dampness around the perimeter, or a slab that has never been waterproofed below the tile. The tile may be sealed, but if moisture is moving through the joins, fix that first.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-lg p-6 border-l-4 border-accent"
            >
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">
                {item.title}
              </h3>
              <p className="text-body-md text-brand-500 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
          <p className="text-body-md text-brand-600 italic text-center pt-4">
            None of these are deal-breakers - they&apos;re prep tasks. Most homes have
            none of them. Spend 20 minutes inspecting before you order and
            you&apos;ll know exactly which path you&apos;re on.
          </p>
        </div>
      </Section>

      {/* Step-by-step prep */}
      <Section background="white">
        <SectionHeader
          overline="The Prep That Matters"
          title="Six-Step Prep Specifically for Carpet Tiles Over Ceramic"
          description="Most DIY guides assume a concrete or timber subfloor. Here's the prep sequence that's specific to a ceramic, porcelain, or stone tiled floor."
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {[
            {
              n: "1",
              title: "Inspect and tap-test the floor",
              body: "Walk every square metre. Tap a screwdriver handle across each tile and mark anything drummy, loose, or cracked with masking tape. Re-bed loose tiles with epoxy or replace them entirely. This is the most common failure mode for overlay jobs - don't skip it.",
            },
            {
              n: "2",
              title: "Address deep or wide grout lines",
              body: "For grout lines wider than around 6 mm, or recessed more than 2 mm below the tile face, skim the floor with a flexible feather-finish patching compound (Ardex Feather Finish or equivalent). Two thin coats are better than one thick one. Sand lightly between coats.",
            },
            {
              n: "3",
              title: "Level any lippage",
              body: "Run a 1.5-2 m straight edge across the floor. Anywhere you see daylight greater than 2 mm, fill with self-levelling compound. Because glazed tile is non-porous, use a primer designed for non-absorbent surfaces (most levelling-compound brands sell a matching primer) before you pour.",
            },
            {
              n: "4",
              title: "Degrease and clean thoroughly",
              body: "This is where most DIY installs cut corners. Glazed ceramic in a kitchen, dining, or living area carries a film of cooking oils, floor polish residue, and household dust that pressure-sensitive adhesive cannot bond through. Wash with sugar-soap or a TSP solution, rinse with clean water, and let it dry completely - overnight is safest.",
            },
            {
              n: "5",
              title: "Test adhesive bond on a sample patch",
              body: "Apply a 0.5 m² patch of adhesive, let it tack until it feels dry to the touch, and press a tile down. After 24 hours, try to lift it. If it bonds firmly, you're ready to roll the whole room. If it peels off too easily, your glaze is too slick - lightly scuff-sand the floor with 120-grit, vacuum, and re-test.",
            },
            {
              n: "6",
              title: "Lay the tiles",
              body: "From here it's the standard install. Snap chalk lines from the centre of the room, work outward in an ashlar (brick-bond) pattern, and trim edges with a sharp utility knife and straight edge. Walk on the floor immediately - no drying time.",
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
              The whole prep on a clean, modern tiled floor is usually under an
              hour. The whole installation - prep included - still fits inside an
              afternoon.
            </p>
          </div>
        </div>
      </Section>

      {/* Cost comparison */}
      <Section background="linen">
        <SectionHeader
          overline="The Real Cost Comparison"
          title="What Does It Actually Cost vs. Ripping Up the Tiles?"
          description="Tile removal is one of the most expensive prep jobs in residential renovation. Going over the top instead of through avoids almost all of it."
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-8 border border-brand-200">
            <h3 className="font-serif text-heading-sm text-brand-800 mb-5">
              Rip Up The Tiles First
            </h3>
            <ul className="space-y-2 text-body-sm text-brand-500 mb-5">
              {[
                "Tile demolition labour: $35-$60/m²",
                "Skip bin hire: $400-$700",
                "Slab grinding to remove thin-set: $25-$45/m²",
                "Self-levelling compound: $15-$25/m²",
                "Carpet retailer markup + installer labour: $40-$60/m²",
                "New broadloom carpet: $50-$120/m²",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-300 mt-0.5">✕</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-t border-brand-200 pt-4 space-y-1">
              <p className="text-body-sm text-brand-600">
                <strong>Timeline:</strong> 1-3 weeks of unusable rooms
              </p>
              <p className="text-body-md text-brand-800">
                <strong>Typical total: $4,500-$9,000+</strong>
              </p>
            </div>
          </div>
          <div className="bg-accent-light rounded-lg p-8 border-2 border-accent/20">
            <h3 className="font-serif text-heading-sm text-brand-800 mb-5">
              Carpet Tiles Over Existing Tile
            </h3>
            <ul className="space-y-2 text-body-sm text-brand-700 mb-5">
              {[
                "Sugar soap and a sponge: around $15",
                "Patching compound (if needed): $30-$80",
                "Modular Carpet tiles: from $66.55/m² inc GST",
                "Pressure-sensitive adhesive: around $120 for 50 m²",
                "DIY labour: free",
                "No skip bin, no demolition, no grinding",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="border-t border-accent/20 pt-4 space-y-1">
              <p className="text-body-sm text-brand-700">
                <strong>Timeline:</strong> one afternoon
              </p>
              <p className="text-body-md text-brand-800">
                <strong>Typical total: $2,000-$3,500</strong>
              </p>
            </div>
          </div>
        </div>
        <p className="max-w-3xl mx-auto text-center text-body-lg text-brand-600 italic mt-10">
          Going over the tiles instead of through them typically saves a
          homeowner $2,500-$5,000 and around three weeks of disruption. The
          tiles you have stay where they are. The carpet you want goes on top.
        </p>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <SectionHeader
          overline="Frequently Asked Questions"
          title="Carpet Tiles Over Ceramic Tiles: The Specifics"
        />
        <div className="max-w-3xl mx-auto space-y-5">
          {faqs.map((faq) => (
            <div
              key={faq.q}
              className="bg-brand-50 rounded-lg p-6 border border-brand-200"
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
      <Section background="linen">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-heading-lg text-brand-800 mb-6 text-center">
            Continue Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/how-to-install"
              className="block bg-white rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all"
            >
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">
                Full Install Guide
              </h3>
              <p className="text-body-sm text-brand-500">
                Step-by-step DIY guide for any subfloor. Tools, supplies, and
                timing.
              </p>
            </Link>
            <Link
              href="/why-tiles"
              className="block bg-white rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all"
            >
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">
                Why Carpet Tiles?
              </h3>
              <p className="text-body-sm text-brand-500">
                Eight reasons modular beats traditional broadloom in real homes.
              </p>
            </Link>
            <Link
              href="/ranges/haven"
              className="block bg-white rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all"
            >
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">
                Browse the Haven Range
              </h3>
              <p className="text-body-sm text-brand-500">
                Premium solution-dyed nylon. Eight colours. Free samples.
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
              Cover Those Tiles This Weekend
            </p>
            <h2 className="font-serif text-display-md text-white mb-6 text-balance">
              Order Carpet Tiles. Install Over Your Existing Floor. Done by Sunday.
            </h2>
            <p className="text-body-lg text-brand-300 mb-10">
              Free samples on request. Direct from the warehouse - no flooring
              retailer, no installer, no demolition, no skip bin in the driveway.
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
