"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Home,
  DollarSign,
  RefreshCw,
  Shield,
  Clock,
  Wrench,
  Droplets,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { SupplyOrInstall } from "@/components/shared/supply-or-install";

const landlordBenefits = [
  {
    icon: DollarSign,
    title: "Slash Turnover Costs",
    description:
      "Traditional carpet replacement between tenants costs $2,000–$5,000+ per room including retailer markup, materials, and installer labour. With Modular Carpet, swap damaged tiles for a few dollars each - and do it yourself in minutes.",
  },
  {
    icon: RefreshCw,
    title: "Replace Tiles, Not Rooms",
    description:
      "Tenant burned the carpet with an iron? Red wine stain in the bedroom? Instead of re-carpeting the entire room, lift out the damaged tiles and press in fresh ones. Keep spares in the garage for instant repairs between tenancies.",
  },
  {
    icon: Clock,
    title: "Faster Turnover Between Tenants",
    description:
      "No waiting weeks for a carpet installer's availability. Replace damaged tiles yourself in under an hour. Your property is rent-ready faster, reducing vacancy periods and lost income.",
  },
  {
    icon: Shield,
    title: "15-Year Commercial-Grade Warranty",
    description:
      "These tiles are rated for commercial offices and retail traffic. In a rental property, they'll handle years of tenants with ease. One investment that outlasts multiple tenancy cycles.",
  },
  {
    icon: Wrench,
    title: "DIY Installation - No Tradesperson",
    description:
      "Install the initial carpet yourself and save thousands on installation labour. No flooring retailer appointment, no installer quotes, no waiting. Order online, install on the weekend.",
  },
  {
    icon: Droplets,
    title: "Safe Over Concrete Slabs",
    description:
      "Many rental properties sit on concrete slabs with moisture issues. Traditional carpet traps moisture and creates mould - a landlord's nightmare. Our breathable PET felt backing eliminates this problem entirely.",
  },
];

const tenantBenefits = [
  "Install over existing hard floors without damaging them",
  "Take your carpet with you when you move - tiles lift cleanly",
  "No need to ask your landlord to organise a carpet installer",
  "Affordable way to make a rental feel like home",
  "Replace individual tiles if accidents happen - keep your bond",
];

const faqs = [
  {
    q: "Can tenants install carpet tiles in a rental property?",
    a: "Yes. Modular Carpet tiles are installed with pressure-sensitive adhesive, which allows tiles to be lifted and repositioned during installation, and removed cleanly when you move out. Tenants can install carpet tiles directly over existing hard floors like timber, vinyl, or tiles without causing any damage to the property. When the lease ends, simply lift the tiles and take them with you to your next home. Many tenants find this is the most affordable way to add comfort and warmth to a rental without risking their bond.",
  },
  {
    q: "How much do carpet tiles cost compared to traditional carpet for a rental?",
    a: "Modular Carpet tiles are competitively priced with mid-range broadloom carpet, but because you install them yourself, you eliminate the cost of professional installation entirely. For a typical room, that can mean saving hundreds or even thousands of dollars. Visit our product pages for current pricing.",
  },
  {
    q: "Can I replace individual tiles between tenancies?",
    a: "Absolutely. This is the biggest advantage for landlords. Instead of re-carpeting an entire room when tenants move out, simply lift and replace the damaged tiles. Keep a box of spares and your carpet stays perfect through multiple tenancy cycles.",
  },
  {
    q: "Are carpet tiles suitable for all rooms in a rental property?",
    a: "Modular Carpet tiles are ideal for bedrooms, living rooms, hallways, and home offices. They're rated for residential and light commercial use with a 15-year wear warranty. We recommend hard flooring for wet areas like bathrooms and laundries.",
  },
  {
    q: "What if the rental property has a concrete slab with moisture?",
    a: "Our tiles use breathable recycled PET felt backing - specifically designed for Australian conditions. Unlike traditional carpet with rubber backing that traps moisture, our felt backing allows the slab to breathe naturally, preventing mould and odour.",
  },
  {
    q: "How long does it take to install carpet tiles in a rental property?",
    a: "A typical bedroom (12 to 15m²) takes about 2 hours from start to finish, including subfloor preparation and adhesive tack time. A full 3-bedroom house with living areas can be completed in a single day. The only tools you need are a utility knife with spare blades, a straight edge, a tape measure, and a chalk line. No power tools, no carpet stretcher, no professional experience required. You can walk on the carpet immediately after installation.",
  },
];

export function RentalFlooringClient() {
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
            <p className="overline text-accent mb-4">Rental Property Flooring</p>
            <h1 className="font-serif text-display-lg md:text-display-xl text-white mb-6 text-balance">
              The Smartest Flooring for Rental Properties - DIY Carpet Tiles
            </h1>
            <p className="text-body-lg text-brand-300 max-w-2xl">
              Stop re-carpeting entire rooms between tenants. Stop paying installers
              thousands every turnover. Modular Carpet tiles let landlords and tenants
              replace individual tiles in minutes - and anyone handy can install them.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button size="lg" asChild>
                <Link href="/ranges/haven">
                  Shop Carpet Tiles
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline_white" size="lg" asChild>
                <Link href="/contact">Get a Rental Property Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            overline="The Rental Carpet Problem"
            title="Traditional Carpet Is Costing Landlords Thousands"
          />
          <div className="bg-brand-100 rounded-lg p-8 md:p-10">
            <div className="space-y-6 text-body-lg text-brand-600 leading-relaxed">
              <p>
                Every landlord knows the pain. A tenant moves out and the carpet is
                stained, burned, or worn in high-traffic areas. The property manager
                calls with the quote: <strong>$3,000–$5,000 to re-carpet the living
                areas</strong>. You need it done before the next tenant moves in, but
                the installer can&apos;t come for two weeks.
              </p>
              <p>
                That&apos;s two weeks of lost rent, plus thousands in flooring costs -
                for damage that might only affect a few square metres of carpet. And
                the cycle repeats with every tenancy.
              </p>
              <p className="font-semibold text-brand-800">
                What if you could just replace the damaged sections yourself, in minutes,
                for a fraction of the cost?
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Landlord Benefits */}
      <Section background="linen">
        <SectionHeader
          overline="For Landlords & Property Managers"
          title="Why Smart Landlords Are Switching to Carpet Tiles"
          description="Modular Carpet tiles solve every flooring problem rental property owners face - from turnover costs to moisture issues to installation hassles."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {landlordBenefits.map((benefit, index) => (
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

      {/* Cost Comparison */}
      <Section background="white">
        <SectionHeader
          overline="The Numbers"
          title="Rental Carpet Costs: Traditional vs. Modular"
        />
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-100 rounded-lg p-8">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-6">
                Traditional Carpet
              </h3>
              <ul className="space-y-4 text-body-sm text-brand-500">
                <li className="flex justify-between border-b border-brand-200 pb-2">
                  <span>Carpet (20m² room)</span>
                  <span className="font-semibold text-brand-800">$800–$1,200</span>
                </li>
                <li className="flex justify-between border-b border-brand-200 pb-2">
                  <span>Professional installation</span>
                  <span className="font-semibold text-brand-800">$800–$1,200</span>
                </li>
                <li className="flex justify-between border-b border-brand-200 pb-2">
                  <span>Furniture removal/return</span>
                  <span className="font-semibold text-brand-800">$200–$400</span>
                </li>
                <li className="flex justify-between border-b border-brand-200 pb-2">
                  <span>Lost rent (2 weeks vacancy)</span>
                  <span className="font-semibold text-brand-800">$600–$1,000</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span className="font-semibold text-brand-800">Total per turnover</span>
                  <span className="font-bold text-brand-800 text-body-md">$2,400–$3,800</span>
                </li>
              </ul>
            </div>
            <div className="bg-accent-light rounded-lg p-8 border-2 border-accent/20">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-6">
                Modular Carpet Tiles
              </h3>
              <ul className="space-y-4 text-body-sm text-brand-700">
                <li className="flex justify-between border-b border-accent/10 pb-2">
                  <span>Initial install (20m² DIY)</span>
                  <span className="font-semibold text-brand-800">$1,170</span>
                </li>
                <li className="flex justify-between border-b border-accent/10 pb-2">
                  <span>Installation labour</span>
                  <span className="font-semibold text-accent">$0 (DIY)</span>
                </li>
                <li className="flex justify-between border-b border-accent/10 pb-2">
                  <span>Turnover repair (swap 4 tiles)</span>
                  <span className="font-semibold text-brand-800">$117</span>
                </li>
                <li className="flex justify-between border-b border-accent/10 pb-2">
                  <span>Lost rent (same day repair)</span>
                  <span className="font-semibold text-accent">$0</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span className="font-semibold text-brand-800">Cost per turnover</span>
                  <span className="font-bold text-accent text-body-md">~$117</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Tenant Benefits */}
      <Section background="linen">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            overline="For Tenants & Renters"
            title="Renters Love Carpet Tiles Too"
            description="You don't own the property, but you still want it to feel like home. Modular Carpet tiles are the perfect rental flooring solution."
          />
          <div className="bg-white rounded-lg p-8 border border-brand-200">
            <div className="flex items-center gap-3 mb-6">
              <Home className="w-6 h-6 text-accent" />
              <h3 className="font-serif text-heading-md text-brand-800">
                Perfect for Renters
              </h3>
            </div>
            <ul className="space-y-4">
              {tenantBenefits.map((benefit) => (
                <li
                  key={benefit}
                  className="flex items-start gap-3 text-body-md text-brand-600"
                >
                  <Check className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <SectionHeader
          overline="Frequently Asked Questions"
          title="Carpet Tiles for Rental Properties - FAQ"
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
        description="Premrest works with landlords either as a supply-only partner for self-managing owners, or as a full supply-and-install service in Melbourne, Sydney, and Brisbane. Whichever path you choose, ongoing tile-by-tile repairs between tenancies stay an in-house, no-tradesperson task."
        path1Suits="Suits trade-savvy or DIY-handy landlords who'd rather control the schedule"
        path2Suits="Suits multi-property landlords, asset managers, and owners outside major capitals organising work remotely"
        closingNote="Either path delivers the same commercial-grade tile and the same 15-year wear warranty."
      />

      {/* Articles & Guides */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <p className="overline text-center mb-3">Articles &amp; Guides</p>
          <h2 className="font-serif text-heading-lg text-brand-800 mb-6 text-center">
            For Landlords Specifying for the Long Term
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link href="/hotel-grade-carpet-for-home" className="block bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">Why Hotel Carpet Lasts Longer</h3>
              <p className="text-body-sm text-brand-500">The four spec lines that separate hospitality-grade flooring from residential.</p>
            </Link>
            <Link href="/replace-hotel-carpet-without-downtime" className="block bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">Repairing Damage Without Vacancy</h3>
              <p className="text-body-sm text-brand-500">Spot-replacement between tenancies and the 10-year cost case.</p>
            </Link>
            <Link href="/refurbish-motel-without-closing-rooms" className="block bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">Rolling Refurbishment</h3>
              <p className="text-body-sm text-brand-500">Phasing carpet renewal across a portfolio without lump-sum capital.</p>
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
            <Link href="/investment-property-flooring" className="block bg-white rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">Investment Properties</h3>
              <p className="text-body-sm text-brand-500">Commercial-grade carpet that outlasts multiple tenancy cycles.</p>
            </Link>
            <Link href="/how-to-install" className="block bg-white rounded-lg p-6 border border-brand-200 hover:border-accent/30 hover:shadow-md transition-all">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">How to Install</h3>
              <p className="text-body-sm text-brand-500">Step-by-step DIY installation guide for anyone handy.</p>
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
            <p className="overline text-accent mb-4">Ready to Save on Rental Flooring?</p>
            <h2 className="font-serif text-display-md text-white mb-6 text-balance">
              Stop Re-Carpeting Rentals. Start Replacing Tiles.
            </h2>
            <p className="text-body-lg text-brand-300 mb-10">
              Order online, install yourself, and replace individual tiles for
              years to come. The smartest flooring decision a landlord can make.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/ranges/haven">
                  Shop Carpet Tiles
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline_white" size="lg" asChild>
                <Link href="/contact">Get a Landlord Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
