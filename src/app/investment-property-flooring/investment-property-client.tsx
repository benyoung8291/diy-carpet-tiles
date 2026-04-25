"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  Shield,
  BarChart3,
  Clock,
  Building2,
  Paintbrush,
  Droplets,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { SupplyOrInstall } from "@/components/shared/supply-or-install";

const investorBenefits = [
  {
    icon: Shield,
    title: "Outlasts Traditional Carpet - By Years",
    description:
      "These tiles carry a 15-year commercial-grade wear warranty. They're rated for office lobbies and retail floors - environments with far more foot traffic than any rental home. Your carpet won't need replacing between tenancies.",
  },
  {
    icon: Paintbrush,
    title: "Solution-Dyed Nylon Resists Everything",
    description:
      "Solution-dyed nylon locks colour into the fibre at a molecular level. It won't fade in sun-drenched rooms, resists stains far better than polyester, and maintains its appearance through years of tenant wear.",
  },
  {
    icon: DollarSign,
    title: "Lower Lifetime Flooring Costs",
    description:
      "Traditional carpet in rentals typically needs full replacement every 5–7 years. Modular Carpet tiles last 15+ years in residential settings. One installation that outlasts multiple tenancy cycles means fewer capital expenses across your portfolio.",
  },
  {
    icon: Clock,
    title: "Faster Turnovers Between Tenants",
    description:
      "If a tenant does leave a stubborn stain or burn mark, individual tiles can be swapped out in minutes - no need to re-carpet the room and no waiting weeks for an installer. Your property is rent-ready sooner.",
  },
  {
    icon: Droplets,
    title: "Breathable Backing - No Mould Surprises",
    description:
      "Many investment properties sit on concrete slabs. Traditional carpet traps moisture underneath, causing mould and odour issues that are expensive to remediate. Our breathable recycled PET felt backing eliminates this risk entirely.",
  },
  {
    icon: Building2,
    title: "Professional Installation by Premrest",
    description:
      "Premrest handles the full installation for investment properties - measured, supplied, and professionally fitted. One point of contact, one invoice, and a product we stand behind with a 15-year warranty.",
  },
];

const faqs = [
  {
    q: "How long do carpet tiles last in a rental property?",
    a: "Our carpet tiles carry a 15-year commercial-grade wear warranty - they're rated for offices and retail, which see far more traffic than residential rentals. In a typical investment property, you can expect 15+ years of service without needing full replacement. That's typically 5–8 tenancy cycles on a single installation.",
  },
  {
    q: "Does Premrest handle installation for investment properties?",
    a: "Yes. For investment properties, Premrest provides a full professional installation service - we measure, supply, and install. You get a single point of contact and a product backed by a 15-year manufacturer warranty. Contact us for a tailored quote.",
  },
  {
    q: "What happens if a tenant stains or damages the carpet?",
    a: "This is where modular carpet tiles excel. If a tenant leaves a stubborn stain, burn mark, or localised damage, individual tiles can be swapped out in minutes without re-carpeting the room. Keep a small supply of spare tiles and any isolated damage is a quick fix between tenancies.",
  },
  {
    q: "What colourways work best for investment properties?",
    a: "For investment properties, we recommend neutral, versatile colourways that appeal to a broad range of tenants and hide everyday wear. From our Haven range, Smoke (IN02) and Kettle (IN05) are popular choices. From Horizon, Bowden (UB01) and Newstead (UB04) are excellent all-rounders. Premrest can advise on the best option for your property.",
  },
  {
    q: "Can I claim carpet tiles as a tax deduction on my investment property?",
    a: "Carpet is generally depreciable as a plant and equipment item in Australian investment properties. The longer lifespan of modular carpet tiles compared to traditional broadloom also means a more favourable depreciation profile. We recommend consulting your accountant or quantity surveyor for specific advice.",
  },
  {
    q: "Are carpet tiles suitable for all rooms in an investment property?",
    a: "Modular Carpet tiles are ideal for bedrooms, living rooms, hallways, and home offices - anywhere you'd normally install broadloom carpet. They look identical to traditional carpet once installed. We recommend hard flooring for wet areas like bathrooms and laundries.",
  },
  {
    q: "Do property managers and tenants notice it's tiles?",
    a: "No. Modern carpet tiles installed in an ashlar (brick-bond) pattern are visually indistinguishable from broadloom carpet. Property managers and tenants consistently cannot tell the difference. The join lines disappear completely once installed.",
  },
];

export function InvestmentPropertyClient() {
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
            <p className="overline text-accent mb-4">Investment Property Flooring</p>
            <h1 className="font-serif text-display-md md:text-display-lg lg:text-display-xl text-white mb-6 text-balance">
              Carpet That Outlasts Your Tenants
            </h1>
            <p className="text-body-md md:text-body-lg text-brand-300 max-w-2xl">
              Investment properties need flooring that handles years of tenant wear
              without constant replacement. Modular Carpet tiles are commercial-grade,
              stain-resistant, and backed by a 15-year warranty. Professionally installed
              by Premrest.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get an Investor Quote
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
            overline="The Investment Property Carpet Problem"
            title="Traditional Carpet Doesn't Survive Rental Life"
          />
          <div className="bg-brand-100 rounded-lg p-8 md:p-10">
            <div className="space-y-6 text-body-lg text-brand-600 leading-relaxed">
              <p>
                Standard broadloom carpet in a rental property typically lasts 5–7 years
                before it looks tired, matted, and stained. Each replacement cycle means
                engaging a flooring retailer, scheduling an installer, and paying
                <strong> $3,000–$5,000+ per room</strong> for materials and labour - plus
                lost rent while the property sits empty waiting for the work.
              </p>
              <p>
                The underlying problem? Residential broadloom was never designed for
                the wear that rental properties endure. Tenants are harder on carpet
                than owner-occupiers, and standard carpet shows it.
              </p>
              <p className="font-semibold text-brand-800">
                What if your carpet was tough enough to last through multiple tenancy
                cycles - and any isolated damage could be repaired in minutes?
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section background="linen">
        <SectionHeader
          overline="Built for Rental Properties"
          title="Why Carpet Tiles Are the Smartest Flooring for Investment Properties"
          description="Commercial-grade durability, stain-resistant nylon, breathable backing, and a 15-year warranty. Installed by Premrest."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {investorBenefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
              className="bg-white rounded-lg p-8 border border-brand-200"
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

      {/* Durability Comparison */}
      <Section background="white">
        <SectionHeader
          overline="Durability Comparison"
          title="Traditional Carpet vs. Modular Carpet Tiles in Rentals"
        />
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-100 rounded-lg p-8">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-6">
                Traditional Broadloom
              </h3>
              <ul className="space-y-4 text-body-sm text-brand-500">
                <li className="flex justify-between border-b border-brand-200 pb-2">
                  <span>Typical lifespan in rental</span>
                  <span className="font-semibold text-brand-800">5–7 years</span>
                </li>
                <li className="flex justify-between border-b border-brand-200 pb-2">
                  <span>Stain resistance</span>
                  <span className="font-semibold text-brand-800">Moderate</span>
                </li>
                <li className="flex justify-between border-b border-brand-200 pb-2">
                  <span>Fade resistance</span>
                  <span className="font-semibold text-brand-800">Low–Moderate</span>
                </li>
                <li className="flex justify-between border-b border-brand-200 pb-2">
                  <span>Localised damage repair</span>
                  <span className="font-semibold text-brand-800">Full re-carpet</span>
                </li>
                <li className="flex justify-between border-b border-brand-200 pb-2">
                  <span>Moisture/mould risk on slabs</span>
                  <span className="font-semibold text-brand-800">High</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span>Wear warranty</span>
                  <span className="font-semibold text-brand-800">5–10 years</span>
                </li>
              </ul>
            </div>
            <div className="bg-accent-light rounded-lg p-8 border-2 border-accent/20">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-6">
                Modular Carpet Tiles
              </h3>
              <ul className="space-y-4 text-body-sm text-brand-700">
                <li className="flex justify-between border-b border-accent/10 pb-2">
                  <span>Typical lifespan in rental</span>
                  <span className="font-semibold text-accent">15+ years</span>
                </li>
                <li className="flex justify-between border-b border-accent/10 pb-2">
                  <span>Stain resistance</span>
                  <span className="font-semibold text-accent">Excellent (solution-dyed)</span>
                </li>
                <li className="flex justify-between border-b border-accent/10 pb-2">
                  <span>Fade resistance</span>
                  <span className="font-semibold text-accent">Excellent (molecular dye)</span>
                </li>
                <li className="flex justify-between border-b border-accent/10 pb-2">
                  <span>Localised damage repair</span>
                  <span className="font-semibold text-accent">Swap individual tiles</span>
                </li>
                <li className="flex justify-between border-b border-accent/10 pb-2">
                  <span>Moisture/mould risk on slabs</span>
                  <span className="font-semibold text-accent">None (breathable backing)</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span>Wear warranty</span>
                  <span className="font-semibold text-accent">15 years commercial</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Portfolio Strategy */}
      <Section background="linen">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            overline="Portfolio Strategy"
            title="How Smart Investors Manage Carpet Across Their Portfolio"
          />
          <div className="space-y-6">
            {[
              {
                icon: BarChart3,
                title: "Standardise on 1–2 Colourways",
                description:
                  "Choose neutral colourways like Haven Smoke or Horizon Bowden across all your properties. Spare tiles from one property can be used in another - maximum flexibility, minimum waste. Premrest can advise on the best options for your portfolio.",
              },
              {
                icon: TrendingUp,
                title: "One Installation, Multiple Tenancy Cycles",
                description:
                  "With a 15-year commercial warranty and solution-dyed nylon, your carpet tile investment pays for itself by lasting through 5–8 tenancies without needing full replacement. That's a fraction of the lifecycle cost of broadloom.",
              },
              {
                icon: Clock,
                title: "Keep Spare Tiles for Quick Repairs",
                description:
                  "Order a spare box per property. If a tenant leaves isolated damage - a burn, a bleach mark, an uncleanable stain - swap the affected tiles between tenancies. The property is rent-ready immediately.",
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
                <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-accent" />
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
          title="Carpet Tiles for Investment Properties - FAQ"
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

      <SupplyOrInstall
        background="linen"
        description="Premrest works with investment-property owners either as a supply-only partner for trade-savvy landlords managing their own renovations, or as a full supply-and-install service in Melbourne, Sydney, and Brisbane for portfolios that prefer a single point of contact."
        path1Suits="Suits self-managing landlords with an established maintenance trade or DIY-handy ownership"
        path2Suits="Suits asset managers, multi-property owners, and trustees who need one contract per project"
        closingNote="The lifecycle case for modular over broadloom holds either way - the only thing changing between the paths is who lays it."
      />

      {/* Articles & Guides */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <p className="overline text-center mb-3">Articles &amp; Guides</p>
          <h2 className="font-serif text-heading-lg text-brand-800 mb-6 text-center">
            For Asset Managers and Long-Hold Landlords
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/hotel-grade-carpet-for-home" className="block bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">Why Hotel Carpet Lasts Longer</h3>
              <p className="text-body-sm text-brand-500">The four spec lines to write into any long-hold portfolio brief.</p>
            </Link>
            <Link href="/replace-hotel-carpet-without-downtime" className="block bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">Repairing Damage Without Vacancy</h3>
              <p className="text-body-sm text-brand-500">Spot-replacement, lifecycle economics, and the 10-year cost case.</p>
            </Link>
            <Link href="/refurbish-motel-without-closing-rooms" className="block bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">Rolling Refurbishment Across a Property</h3>
              <p className="text-body-sm text-brand-500">A room-by-room refurbishment plan that protects operating cashflow.</p>
            </Link>
          </div>
        </div>
      </Section>

      {/* Related Pages */}
      <Section background="linen">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-heading-lg text-brand-800 mb-6 text-center">
            Related Solutions
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/rental-flooring" className="block bg-white rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">Rental Properties</h3>
              <p className="text-body-sm text-brand-500">DIY carpet tiles for landlords and tenants.</p>
            </Link>
            <Link href="/hotel-carpet" className="block bg-white rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">Hotels</h3>
              <p className="text-body-sm text-brand-500">Minimise room closures with modular carpet tiles.</p>
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
            <p className="overline text-accent mb-4">Protect Your Investment</p>
            <h2 className="font-serif text-display-md text-white mb-6 text-balance">
              Flooring That Works as Hard as Your Property
            </h2>
            <p className="text-body-lg text-brand-300 mb-10">
              Professionally installed by Premrest. 15-year commercial warranty.
              The smartest flooring decision for your portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get an Investor Quote
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
