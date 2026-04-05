"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  DollarSign,
  RefreshCw,
  Shield,
  BarChart3,
  Clock,
  Wrench,
  Building2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { PRICING } from "@/lib/data";

const investorBenefits = [
  {
    icon: TrendingUp,
    title: "Maximise Rental Yield",
    description:
      "Carpet is the single biggest flooring expense in investment properties. Modular tiles slash both initial installation costs (DIY = no installer) and ongoing turnover costs (replace tiles, not rooms). More rent in your pocket, less going to tradespeople.",
  },
  {
    icon: DollarSign,
    title: "Reduce Turnover Costs by 90%+",
    description:
      "Traditional carpet turnover: $2,500–$5,000 per room. Modular Carpet tile turnover: swap a few tiles for under $200. Over 5 tenancy cycles, the savings on a 3-bedroom property can exceed $15,000.",
  },
  {
    icon: Clock,
    title: "Minimise Vacancy Periods",
    description:
      "Every day a property sits vacant waiting for a carpet installer is lost rent. With Modular Carpet, you can repair flooring between tenants in hours — not weeks. Faster turnovers mean higher annual yield.",
  },
  {
    icon: RefreshCw,
    title: "Replace Sections, Not Entire Rooms",
    description:
      "Tenant damage is rarely wall-to-wall. Usually it's a few stains, a burn mark, or heavy wear in a doorway. Lift out the affected tiles, press in fresh ones, and the room is rent-ready. Keep a box of spares for each property.",
  },
  {
    icon: Building2,
    title: "Scale Across Your Portfolio",
    description:
      "Whether you own one property or twenty, the economics compound. Standardise on one or two colourways across your portfolio and you can swap spare tiles between properties. Bulk ordering reduces your per-metre cost even further.",
  },
  {
    icon: Shield,
    title: "15-Year Commercial-Grade Warranty",
    description:
      "These tiles are rated for commercial foot traffic — offices, retail, hospitality. In a residential rental, they'll comfortably last through multiple tenancy cycles without showing their age.",
  },
];

const roiScenario = {
  rooms: 3,
  roomSize: 15,
  tenancyCycles: 5,
  traditionalPerRoom: 3500,
  modularInitial: 15 * 3 * PRICING.pricePerSqm,
  modularTurnover: 200,
};

const faqs = [
  {
    q: "What's the ROI on carpet tiles for an investment property?",
    a: `For a typical 3-bedroom investment property, traditional carpet costs $3,000–$5,000 per turnover (materials + installer + vacancy). With Modular Carpet, the initial DIY install costs around $${Math.round(roiScenario.modularInitial)} for all three bedrooms, and each turnover costs ~$200 in replacement tiles. Over 5 tenancy cycles, you save $12,000–$20,000 compared to traditional carpet.`,
  },
  {
    q: "Can I install carpet tiles myself in an investment property?",
    a: "Absolutely. That's the whole point. Modular Carpet tiles press onto pressure-sensitive adhesive — no power stretchers, no tack strips, no professional installer. If you can paint a wall, you can carpet a room. Most investors do the initial install on a weekend and handle turnovers themselves in under an hour.",
  },
  {
    q: "Are carpet tiles durable enough for rental properties?",
    a: "More than enough. Our tiles carry a 15-year commercial-grade wear warranty — they're rated for offices and retail, which see far more traffic than a residential rental. The solution-dyed nylon fibre resists stains and fading, and the individual tiles can be replaced if damaged.",
  },
  {
    q: "What colourways work best for investment properties?",
    a: "For investment properties, we recommend neutral, versatile colourways that appeal to a broad range of tenants. From our Haven range, Smoke (IN02) and Kettle (IN05) are popular choices. From Horizon, Bowden (UB01) and Newstead (UB04) are excellent all-rounders.",
  },
  {
    q: "Can I claim carpet tiles as a tax deduction on my investment property?",
    a: "Carpet is generally depreciable as a plant and equipment item in Australian investment properties. We recommend consulting your accountant or quantity surveyor for specific advice on depreciation schedules and deductions applicable to your situation.",
  },
  {
    q: "Do property managers accept carpet tiles in rental properties?",
    a: "Yes. Modern carpet tiles are visually indistinguishable from broadloom carpet — property managers and tenants often can't tell the difference. The key advantage for property managers is faster, cheaper turnover between tenants.",
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
            <h1 className="font-serif text-display-lg md:text-display-xl text-white mb-6 text-balance">
              Smart Investors Use Carpet Tiles — Here&apos;s Why
            </h1>
            <p className="text-body-lg text-brand-300 max-w-2xl">
              Stop losing thousands every tenancy turnover on carpet replacement.
              Modular Carpet tiles let you install flooring yourself, replace damaged
              sections in minutes, and maximise rental yield across your portfolio.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-10">
              <Button size="lg" asChild>
                <Link href="/ranges/haven">
                  Shop Carpet Tiles
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline_white" size="lg" asChild>
                <Link href="/contact">Get an Investor Quote</Link>
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
            title="Traditional Carpet Is Destroying Your Rental Yield"
          />
          <div className="bg-brand-100 rounded-lg p-8 md:p-10">
            <div className="space-y-6 text-body-lg text-brand-600 leading-relaxed">
              <p>
                Every property investor knows the cycle. Tenants move out. The carpet
                is stained or worn. The property manager says it needs replacing before
                the next tenant. You get a quote: <strong>$3,000–$5,000 for materials
                and installation</strong>. The installer can&apos;t come for two weeks.
                That&apos;s two weeks of vacancy on top of the carpet bill.
              </p>
              <p>
                Multiply that across three bedrooms and a living room, and you&apos;re
                looking at <strong>$10,000–$15,000+ per major turnover</strong>. Repeat
                every few years, across multiple properties, and the numbers become
                staggering.
              </p>
              <p className="font-semibold text-brand-800">
                What if you could reduce that cost by 90% — and do it yourself in a
                single afternoon?
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section background="linen">
        <SectionHeader
          overline="The Smart Investor's Flooring"
          title="Why Carpet Tiles Are the Best Flooring for Investment Properties"
          description="Every benefit is designed to protect your bottom line — lower costs, faster turnovers, and a product that outlasts traditional carpet."
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

      {/* ROI Calculator / Comparison */}
      <Section background="white">
        <SectionHeader
          overline="The Numbers Don't Lie"
          title="5-Year Cost Comparison: 3-Bedroom Investment Property"
        />
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-brand-100 rounded-lg p-8">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">
                Traditional Carpet
              </h3>
              <p className="text-body-sm text-brand-400 mb-6">5 turnovers × 3 rooms</p>
              <ul className="space-y-4 text-body-sm text-brand-500">
                <li className="flex justify-between border-b border-brand-200 pb-2">
                  <span>Initial install (professional)</span>
                  <span className="font-semibold text-brand-800">$6,000–$9,000</span>
                </li>
                <li className="flex justify-between border-b border-brand-200 pb-2">
                  <span>4 full re-carpets</span>
                  <span className="font-semibold text-brand-800">$12,000–$20,000</span>
                </li>
                <li className="flex justify-between border-b border-brand-200 pb-2">
                  <span>Vacancy (10 weeks total)</span>
                  <span className="font-semibold text-brand-800">$3,000–$5,000</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span className="font-semibold text-brand-800">5-year total</span>
                  <span className="font-bold text-brand-800 text-body-md">$21,000–$34,000</span>
                </li>
              </ul>
            </div>
            <div className="bg-accent-light rounded-lg p-8 border-2 border-accent/20">
              <h3 className="font-serif text-heading-sm text-brand-800 mb-2">
                Modular Carpet Tiles
              </h3>
              <p className="text-body-sm text-brand-400 mb-6">5 turnovers × 3 rooms</p>
              <ul className="space-y-4 text-body-sm text-brand-700">
                <li className="flex justify-between border-b border-accent/10 pb-2">
                  <span>Initial DIY install (3 rooms)</span>
                  <span className="font-semibold text-brand-800">~$2,633</span>
                </li>
                <li className="flex justify-between border-b border-accent/10 pb-2">
                  <span>4 tile-swap turnovers</span>
                  <span className="font-semibold text-brand-800">~$800</span>
                </li>
                <li className="flex justify-between border-b border-accent/10 pb-2">
                  <span>Vacancy (same-day repairs)</span>
                  <span className="font-semibold text-accent">$0</span>
                </li>
                <li className="flex justify-between pt-2">
                  <span className="font-semibold text-brand-800">5-year total</span>
                  <span className="font-bold text-accent text-body-md">~$3,433</span>
                </li>
              </ul>
              <div className="mt-6 bg-white rounded-md p-4 text-center">
                <p className="text-body-sm text-brand-500">Estimated 5-year saving</p>
                <p className="font-serif text-heading-lg text-accent">$17,000–$30,000+</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Portfolio Strategy */}
      <Section background="linen">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            overline="Portfolio Strategy"
            title="How to Standardise Carpet Tiles Across Your Portfolio"
          />
          <div className="space-y-6">
            {[
              {
                icon: BarChart3,
                title: "Standardise on 1–2 Colourways",
                description:
                  "Choose neutral colourways like Haven Smoke or Horizon Bowden across all your properties. This means spare tiles from one property can be used in another — maximum flexibility, minimum waste.",
              },
              {
                icon: Wrench,
                title: "Keep a Spare Box Per Property",
                description:
                  "Order one extra box (5m²) per property. Store it in the garage or laundry. When tenants move out, you can repair damaged areas immediately without waiting for a delivery.",
              },
              {
                icon: Clock,
                title: "Same-Day Turnover Repairs",
                description:
                  "Between tenancies, walk the property with your spare tiles. Lift damaged tiles, press in fresh ones. The property is rent-ready immediately — no installer, no waiting, no vacancy.",
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
          title="Carpet Tiles for Investment Properties — FAQ"
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
              The Smartest Flooring Decision for Your Portfolio
            </h2>
            <p className="text-body-lg text-brand-300 mb-10">
              From ${PRICING.pricePerSqm.toFixed(2)}/m² inc GST. DIY install. Replace
              tiles, not rooms. The numbers speak for themselves.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/ranges/haven">
                  Shop Carpet Tiles
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button variant="outline_white" size="lg" asChild>
                <Link href="/contact">Get an Investor Quote</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
