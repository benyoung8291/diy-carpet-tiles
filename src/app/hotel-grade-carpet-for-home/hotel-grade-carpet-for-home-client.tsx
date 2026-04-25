"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { faqs } from "./faqs";

export function HotelGradeCarpetForHomeClient() {
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
              Specifying for the Long Term
            </p>
            <h1 className="font-serif text-display-lg md:text-display-xl text-white mb-6 text-balance">
              Why Does Hotel Carpet Last Longer Than Home Carpet? (And How to
              Specify the Same Standard at Home)
            </h1>
            <p className="text-body-lg text-white mb-6 leading-relaxed">
              <strong className="text-accent">The short answer:</strong> hotel
              carpet lasts longer because hotels specify commercial-grade
              fibre, dye chemistry, and backing - not residential-grade. The
              carpet itself is the cause. The same commercial specification is
              available to a homeowner or landlord building a property to a
              higher standard, often at a comparable upfront cost to mid-range
              broadloom.
            </p>
            <p className="text-body-lg text-brand-300">
              Walk into a 4½-star hotel. The carpet in the corridor sees more
              foot traffic in a week than a family hallway sees in a year, yet
              it looks better at year ten than the carpet in most homes does at
              year three. That gap is not maintenance, not luck, and not
              budget. It is specification. This article unpacks the four spec
              lines that explain the difference - and shows how to write them
              into your own home, rental, or investment property.
            </p>
          </motion.div>
        </div>
      </section>

      {/* The four specifications */}
      <Section background="white">
        <SectionHeader
          overline="The Specification Difference"
          title="The Four Specifications That Separate Hotel Carpet from Home Carpet"
          description="These are the spec lines an interior architect writes into a hotel tender. The same four lines belong in any home, rental, or investment-property brief written for the long term."
        />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              n: "01",
              title: "Solution-dyed nylon fibre",
              body: "In hotel-grade carpet, the colour is locked into the nylon at a molecular level during manufacturing. In residential-grade carpet, dye is typically applied to the fibre surface afterwards. The difference shows up at year three under sunlight, in spill testing, and the first time someone uses a bleach-based cleaner. Solution-dyed fibre simply doesn't fade or surrender colour the way stock-dyed fibre does.",
            },
            {
              n: "02",
              title: "Commercial-grade pile weight and density",
              body: "Hotel specifications nominate pile density in grams per square metre, not in language like \"soft\" or \"thick\". Mid-range residential carpet typically sits around 600-800 g/m². Commercial-grade carpet specified for hotel guest rooms typically sits at 950+ g/m². Density is what you feel underfoot at year ten - the resistance to crushing, the springiness, the consistent appearance.",
            },
            {
              n: "03",
              title: "Backing built for cleaning, moisture, and replacement",
              body: "Most home broadloom uses a foam or rubber secondary backing that traps moisture, breaks down under steam-cleaning, and cannot be lifted without destroying it. Commercial-grade carpet - and particularly modular tile - uses a bonded felt or recycled PET backing that breathes, tolerates professional cleaning, and (in tile form) can be lifted and re-laid without damage.",
            },
            {
              n: "04",
              title: "Modular, tile-based construction",
              body: "Premium hotels stopped fitting wall-to-wall broadloom in guest rooms a decade ago. Tile construction means a damaged area is repaired in the room, in minutes, by housekeeping. There is no equivalent in residential broadloom: when something goes wrong with a stretched-in carpet, the entire room is replaced.",
            },
          ].map((item) => (
            <div
              key={item.n}
              className="bg-brand-50 rounded-lg p-8 border border-brand-200"
            >
              <p className="overline mb-3">Specification {item.n}</p>
              <h3 className="font-serif text-heading-sm text-brand-800 mb-3">
                {item.title}
              </h3>
              <p className="text-body-md text-brand-500 leading-relaxed">
                {item.body}
              </p>
            </div>
          ))}
        </div>
        <p className="max-w-3xl mx-auto text-center text-body-lg text-brand-600 italic mt-12">
          Hotels are not paying more for the same product. They are paying for
          a different product. That product is also available to homeowners
          and landlords willing to specify it.
        </p>
      </Section>

      {/* Why home carpet is different */}
      <Section background="linen">
        <SectionHeader
          overline="The Residential Default"
          title="Why Mass-Market Home Carpet Is Built to a Different Standard"
          description="Mass-market home carpet is engineered for a price point on a showroom floor, not a 15-year service life. Three structural reasons explain why what arrives in most Australian homes is so different from what arrives in a hotel room two suburbs away."
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "The retailer-led supply chain optimises for price-on-the-shelf",
              body: "The dominant home-carpet model is a showroom retailer, an in-store sample, an installer subcontracted from the retailer, and payment to the retailer. Margin is taken at every step, so the product on the shelf at any given price has been engineered to hit that price after the markup. Fibre, density, backing, and warranty are all the variables that get trimmed first.",
            },
            {
              title: "Polyester replaced nylon as the volume fibre",
              body: "Polyester is significantly cheaper to produce than nylon and feels soft when new. It has roughly half the resilience of nylon under sustained load, fades faster, and is harder to clean stain-for-stain. Most volume-priced home carpet sold in Australia today is PET polyester. Hotels almost universally specify nylon, and almost always solution-dyed.",
            },
            {
              title: "Foam-backed broadloom is built for a single installation",
              body: "Once stretched across tackless strips and trimmed, residential broadloom is structurally a single sheet. There is no provision for repair, no provision for partial replacement, and no provision for lifting and refitting elsewhere in the house. The product was never engineered for what real life - kids, pets, spills, sun, fifteen years - actually does to a floor.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="bg-white rounded-lg p-6 border border-brand-200"
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
          Specifying a different product isn&apos;t an extravagance. It&apos;s
          recognising that the standard on offer at most retail showrooms was
          optimised for a different question than the one a long-term homeowner
          or landlord is actually asking.
        </p>
      </Section>

      {/* Where the upgrade pays back fastest */}
      <Section background="white">
        <SectionHeader
          overline="Where It Matters Most"
          title="The Rooms Where Hotel-Grade Specification Pays Back Fastest"
          description="The premium specification doesn't have to go everywhere in the house. It belongs in the rooms where it earns back its difference the fastest."
        />
        <div className="max-w-3xl mx-auto space-y-5">
          {[
            {
              title: "Hallways and stair landings",
              body: "The single highest-traffic surface in any home. Builder-grade carpet visibly tracks here within 18 months. Commercial-grade nylon at 950+ g/m² sits here for a decade looking unchanged - and modular tiles in the highest-wear pinch points can be rotated forward over time as wear develops.",
            },
            {
              title: "Master bedrooms with north or west aspect",
              body: "UV is the silent destroyer of stock-dyed carpet. Solution-dyed nylon doesn't surrender its colour to sunlight in any meaningful way over the warranty period. If your master suite gets afternoon sun, this is one of the single highest-return upgrades in the house.",
            },
            {
              title: "Family rooms with kids or pets",
              body: "The room where things actually happen. The combination of solution-dyed fibre (cleans without colour loss) and modular tile construction (replace one tile if a permanent mark develops) is purpose-built for this room. The 15-year wear warranty is the same warranty the carpet carries in a commercial corridor.",
            },
            {
              title: "Home offices and study areas",
              body: "Office chairs on castors visibly grind a path into mid-range residential carpet within two years. Commercial-grade pile density is rated for exactly this loading. If you work from home, this is also a tax-deductible spec line worth discussing with your accountant.",
            },
            {
              title: "Holiday-house and short-stay properties",
              body: "Effectively domestic-scale hotels. The same logic that drives a hotel operator's specification applies one-for-one: high turnover, varied use, intolerance for any downtime between bookings, and brand-standard expectations from guests who are paying a nightly rate.",
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
            In modular tile form, you can specify this room by room rather than
            committing the whole house at once.
          </p>
        </div>
      </Section>

      {/* The investor view */}
      <Section background="linen">
        <SectionHeader
          overline="The Investor View"
          title="Why Long-Hold Landlords Are Specifying Hotel-Grade Floors"
          description={`The landlord question isn't "what is the cheapest carpet I can buy this turnover?" It is "what is the lowest 10-year cost of carpet across the portfolio?" The two questions have different answers.`}
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg p-8 border border-brand-200">
            <h3 className="font-serif text-heading-sm text-brand-800 mb-5">
              Builder-grade carpet in a rental
            </h3>
            <ul className="space-y-2 text-body-sm text-brand-500">
              {[
                "Replaced every 5-7 years per typical tenancy cycle",
                "Full-room re-carpet on every replacement event ($2,000-$5,000+ per room)",
                "1-3 weeks of vacancy per replacement, attributable to flooring",
                "Visible patches between tenants - flagged at the next inspection",
                "Each replacement is a fresh capital expense, repeating",
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
              Hotel-grade modular carpet in a rental
            </h3>
            <ul className="space-y-2 text-body-sm text-brand-700">
              {[
                "15-year commercial wear warranty across the range",
                "Spot-replace damaged tiles between tenants in under an hour",
                "No vacancy time attributable to flooring",
                "Repairs invisible to the next tenant - original specification preserved",
                "One capital event over a 10-15 year hold, not five",
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
          The same instinct that drives a hotel operator&apos;s specification
          drives a serious landlord&apos;s specification. Long-hold investing
          and hospitality both reward specifying the floor that earns its
          keep.
        </p>
      </Section>

      {/* The spec sheet to copy */}
      <Section background="white">
        <SectionHeader
          overline="What to Ask For"
          title="The Four-Line Specification You Can Copy Into Any Brief"
          description="Hand this to your builder, architect, interior designer, or carpet retailer. Any supplier who can meet all four lines is in the conversation. Any supplier who pushes back on any of them is selling a different product to a different question."
        />
        <div className="max-w-3xl mx-auto bg-brand-900 rounded-lg p-8 md:p-10 border-l-4 border-accent">
          <p className="overline text-accent mb-6">
            Carpet Specification - Guest Grade
          </p>
          <ol className="space-y-5">
            {[
              {
                label: "Fibre",
                value:
                  "100% solution-dyed nylon. Stain and bleach resistant. No stock-dyed or polyester substitutes.",
              },
              {
                label: "Construction",
                value:
                  "Modular carpet tile (typically 500 × 500 mm), bonded felt or recycled PET secondary backing. No foam-backed or rubber-backed broadloom.",
              },
              {
                label: "Pile weight",
                value:
                  "Minimum 950 g/m². Pile density and resilience rated for commercial corridor use.",
              },
              {
                label: "Warranty",
                value:
                  "Minimum 15-year commercial wear warranty. Manufacturer-backed, not retailer-backed.",
              },
            ].map((line, i) => (
              <li key={line.label} className="flex gap-4">
                <span className="font-serif text-heading-sm text-accent flex-shrink-0 w-8">
                  {i + 1}.
                </span>
                <div>
                  <p className="font-serif text-heading-sm text-white mb-1">
                    {line.label}
                  </p>
                  <p className="text-body-md text-brand-300 leading-relaxed">
                    {line.value}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
        <p className="max-w-3xl mx-auto text-center text-body-lg text-brand-600 italic mt-10">
          The Modular Carpet Haven and Horizon ranges are designed against this
          exact specification - we use it as our internal benchmark too.
        </p>
      </Section>

      {/* FAQ */}
      <Section background="linen">
        <SectionHeader
          overline="Frequently Asked Questions"
          title="What Specifiers, Owners, and Landlords Ask Before Switching Standard"
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
              href="/why-tiles"
              className="block bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all"
            >
              <p className="overline mb-2">Considered Home</p>
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">
                Why Carpet Tiles
              </h3>
              <p className="text-body-sm text-brand-500">
                Eight reasons modular outperforms broadloom in homes built to a
                higher standard.
              </p>
            </Link>
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
                hotels and serviced apartments.
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
                Commercial-grade ranges, full warranty terms, and the brief for
                hospitality fit-outs.
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
              Specify Once. Specify Right.
            </p>
            <h2 className="font-serif text-display-md text-white mb-6 text-balance">
              Order Samples of the Haven and Horizon Ranges
            </h2>
            <p className="text-body-lg text-brand-300 mb-10">
              Physical samples sent free across Australia. See the solution-dyed
              nylon under your own lighting, feel the pile density, and check
              the colour against your room before you specify a single square
              metre.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Request Free Samples
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline_white" size="lg" asChild>
                <Link href="/ranges/haven">Browse Haven Range</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
