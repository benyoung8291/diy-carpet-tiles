"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Ruler,
  Trash2,
  Wrench,
  Grid3x3,
  Frame,
  ClipboardCheck,
  MapPin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeader } from "@/components/ui/section";
import { faqs } from "./faqs";

const scopeItems = [
  {
    icon: Ruler,
    title: "Site measurement and shop drawings",
    body: "A Premrest project lead measures every room, marks lines and transitions, and produces a shop drawing showing tile quantities, layout direction, and over-order allowance. The drawing comes to you for sign-off before any product is ordered.",
  },
  {
    icon: Trash2,
    title: "Removal of existing flooring",
    body: "Old broadloom, underlay, or vinyl is lifted, rolled, and disposed of. Existing ceramic, polished concrete, or timber substrates are inspected for suitability and noted in the quote.",
  },
  {
    icon: Wrench,
    title: "Subfloor preparation and levelling",
    body: "Cracks filled, lippage levelled, surface degreased, and primed where required. This is the single biggest determinant of how the finished floor looks - and where most lookalike contractors cut corners.",
  },
  {
    icon: Grid3x3,
    title: "Tile installation in ashlar layout",
    body: "Pressure-sensitive adhesive applied to manufacturer specification. Tiles laid in brick-bond pattern with consistent pile direction across every tile, edges trimmed against a straight-edge for a continuous appearance.",
  },
  {
    icon: Frame,
    title: "Transitions, edges, and finishing",
    body: "Aluminium or hardwood transition strips at doorways, neat scribed cuts against walls and skirtings, the floor vacuumed and ready for furniture and occupation.",
  },
  {
    icon: ClipboardCheck,
    title: "Walk-through and handover",
    body: "Final inspection with you on site, any defect punch-list cleared on the spot, spare tiles labelled and stored where you direct for future repairs.",
  },
];

const audiences = [
  {
    tag: "Hospitality",
    title: "Hotel, motel, and serviced-apartment fit-outs",
    body: "Properties with strict open dates, brand-standard requirements, and zero tolerance for installation overruns. Phased installs across low-occupancy windows are routine.",
  },
  {
    tag: "Considered Home",
    title: "Renovations built to a higher standard",
    body: "Homeowners who specified solid-timber joinery, stone benchtops, and considered lighting - and who don't want flooring to be the part of the renovation that lets the rest down.",
  },
  {
    tag: "Investment",
    title: "Multi-property landlords and asset managers",
    body: "Portfolio-scale projects coordinated through a single point of contact. One brief, one quote, one project lead across multiple addresses or one large property.",
  },
];

const processSteps = [
  {
    n: "1",
    title: "Enquiry and site brief",
    body: "Tell us about the property, the rooms, the timing, and any constraints (open dates, low-occupancy windows, brand standards). Email or the contact form is fine - no in-store appointment required.",
  },
  {
    n: "2",
    title: "Measurement",
    body: "On-site measurement in metro Melbourne, Sydney, or Brisbane. For multi-property briefs or projects with existing architectural plans we work from supplied drawings to issue an indicative quote.",
  },
  {
    n: "3",
    title: "Itemised quote",
    body: "A written quote breaking out the supplied product cost, the installation rate, and any site-specific extras (existing-floor removal, levelling, transitions, after-hours access). No bundled lump sums - everything itemised.",
  },
  {
    n: "4",
    title: "Confirmation and scheduling",
    body: "Once approved, dates are locked in. Hospitality projects can be phased across low-occupancy windows so the property stays in inventory throughout. Most installs run 2-5 days for a single property.",
  },
  {
    n: "5",
    title: "Installation",
    body: "The Premrest team arrives with all materials, tools, and adhesive on site. The product is installed to manufacturer specification, with daily progress updates if you'd prefer not to be on site every day.",
  },
  {
    n: "6",
    title: "Walk-through and handover",
    body: "We walk the floor with you room-by-room, clear any defects on the spot, and hand over labelled spare tiles and the maintenance pack. The 15-year manufacturer warranty starts from handover.",
  },
];

export function InstallationClient() {
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
            <p className="overline text-accent mb-4">
              Supply and Install Service
            </p>
            <h1 className="font-serif text-display-lg md:text-display-xl text-white mb-6 text-balance">
              Modular Carpet Installation - Melbourne, Sydney, Brisbane
            </h1>
            <p className="text-body-lg text-white mb-6 leading-relaxed">
              Premrest&apos;s installation team takes your project from site
              measurement through to a finished, walked, and signed-off floor.
              One contract, one invoice, one project lead - no managing a
              separate installer. Indicatively around{" "}
              <strong className="text-accent">$20-25 per square metre</strong>{" "}
              of laid carpet, with site-specific costs (preparation, levelling,
              transitions, removal of existing flooring) included in the same
              quote.
            </p>
            <p className="text-body-lg text-brand-300">
              If you&apos;ve decided modular carpet is the right product but
              you&apos;d rather hand the install to a team that does this every
              day, this is the path for you. The same commercial-grade,
              solution-dyed nylon Premrest carries across the Haven and Horizon
              ranges, the same 15-year wear warranty - the difference is who
              lays it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Scope */}
      <Section background="white">
        <SectionHeader
          overline="What's Included"
          title="Everything Between Your Brief and a Walked, Signed-Off Floor"
          description="A Premrest installation isn't just labour. It's the full project envelope - measurement, prep, install, finishing, and handover - delivered by a team that does it every day."
        />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {scopeItems.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="bg-brand-50 rounded-lg p-6 border border-brand-200"
              >
                <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="font-serif text-heading-sm text-brand-800 mb-3">
                  {item.title}
                </h3>
                <p className="text-body-sm text-brand-500 leading-relaxed">
                  {item.body}
                </p>
              </div>
            );
          })}
        </div>
        <p className="max-w-3xl mx-auto text-center text-body-lg text-brand-600 italic mt-12">
          Nothing on the punch-list goes home with the installer. The job is
          done when you say it&apos;s done.
        </p>
      </Section>

      {/* Coverage */}
      <Section background="linen">
        <SectionHeader
          overline="Cities Served"
          title="Direct Installation Coverage in Three Capitals"
          description="Premrest installation teams operate as direct service partners in three Australian capital cities."
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              city: "Melbourne",
              area: "Greater metro and inner-bayside coverage. Geelong and Mornington Peninsula quoted on a project basis.",
            },
            {
              city: "Sydney",
              area: "Greater metro and inner-ring coverage. Central Coast, Newcastle, and Wollongong quoted on a project basis.",
            },
            {
              city: "Brisbane",
              area: "Greater metro and bayside coverage. Gold Coast and Sunshine Coast quoted on a project basis.",
            },
          ].map((item) => (
            <div
              key={item.city}
              className="bg-white rounded-lg p-8 border border-brand-200 text-center"
            >
              <div className="w-14 h-14 rounded-full bg-accent-light flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-heading-md text-brand-800 mb-3">
                {item.city}
              </h3>
              <p className="text-body-sm text-brand-500 leading-relaxed">
                {item.area}
              </p>
            </div>
          ))}
        </div>
        <p className="max-w-3xl mx-auto text-center text-body-md text-brand-600 mt-10">
          Outside these three coverage zones, the supply-only path is available
          nationwide and we&apos;re happy to quote regional or interstate
          projects on an individual basis.
        </p>
      </Section>

      {/* Pricing transparency */}
      <Section background="white">
        <SectionHeader
          overline="Pricing Transparency"
          title="What the Indicative Rate Includes - And What Sits Alongside"
          description="Every quote we issue itemises both the per-square-metre install rate and the site-specific extras. There are no bundled lump sums and no surprises after the work starts."
        />
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-accent-light rounded-lg p-8 border-2 border-accent/20">
            <p className="overline mb-3">~$20-25/m² Install Rate</p>
            <h3 className="font-serif text-heading-sm text-brand-800 mb-5">
              Included in the install rate
            </h3>
            <ul className="space-y-2 text-body-sm text-brand-700">
              {[
                "Pressure-sensitive adhesive",
                "Tile installation labour",
                "Ashlar layout pattern and pile-direction setting",
                "Edge trimming and scribed cuts to walls",
                "Daily site clean-up",
                "Final walk-through and handover",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-brand-50 rounded-lg p-8 border border-brand-200">
            <p className="overline mb-3">Site-Specific Extras</p>
            <h3 className="font-serif text-heading-sm text-brand-800 mb-5">
              Quoted alongside, itemised
            </h3>
            <ul className="space-y-2 text-body-sm text-brand-500">
              {[
                "Removal and disposal of existing flooring",
                "Subfloor levelling or patching compound",
                "Aluminium or hardwood transition strips",
                "Furniture relocation (if required)",
                "After-hours, weekend, or split-shift access",
                "Out-of-metro travel and accommodation",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-brand-300 mt-0.5">—</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="max-w-3xl mx-auto text-center text-body-lg text-brand-600 italic mt-10">
          The rate is what installation labour costs. Everything that varies by
          site is quoted on its own line so you can see exactly where the
          number comes from.
        </p>
      </Section>

      {/* Who it's for */}
      <Section background="linen">
        <SectionHeader
          overline="Three Buyers, One Service"
          title="Who the Installation Service Is Built For"
        />
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {audiences.map((item) => (
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
      </Section>

      {/* Process */}
      <Section background="white">
        <SectionHeader
          overline="From Enquiry to Handover"
          title="What Happens Between First Contact and Walked Floor"
        />
        <div className="max-w-3xl mx-auto space-y-6">
          {processSteps.map((step) => (
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
        </div>
      </Section>

      {/* FAQ */}
      <Section background="linen">
        <SectionHeader
          overline="Frequently Asked Questions"
          title="Installation Service - The Specifics"
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
              Hand the Project to a Team That Does This Every Day
            </p>
            <h2 className="font-serif text-display-md text-white mb-6 text-balance">
              Request an Installation Quote
            </h2>
            <p className="text-body-lg text-brand-300 mb-10">
              Tell us about the property, the rooms, and any timing
              constraints. We&apos;ll arrange site measurement (or work from
              your supplied plans) and issue an itemised quote covering both
              the supply and the install.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Request Installation Quote
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
