"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ClipboardCheck,
  Paintbrush,
  LayoutGrid,
  Scissors,
  ArrowRight,
  Check,
  AlertTriangle,
  Lightbulb,
  Ruler,
  Package,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/ui/section";

const steps = [
  {
    step: 1,
    icon: ClipboardCheck,
    title: "Prepare Your Subfloor",
    description:
      "A clean, level subfloor is the foundation of a beautiful carpet tile installation. The good news? Our breathable felt backing is compatible with most existing hard floors.",
    details: [
      "Sweep or vacuum the entire subfloor thoroughly",
      "Fill any cracks, holes, or divots with levelling compound",
      "Ensure the surface is dry (our breathable backing tolerates moisture-affected slabs, but standing water should be addressed)",
      "Remove any existing carpet, underlay, or loose flooring material",
      "Concrete, plywood, existing vinyl, and existing tile are all suitable subfloors",
    ],
    tips: [
      "Run a straight edge across the floor to find high and low spots",
      "Allow new concrete to cure for at least 28 days before installing",
    ],
    image: "/images/installation/step-1-prep.jpg",
  },
  {
    step: 2,
    icon: Paintbrush,
    title: "Apply Pressure-Sensitive Adhesive",
    description:
      "Pressure-sensitive adhesive (PSA) is the secret to easy, repositionable installation. Unlike wet-set adhesive, PSA stays tacky permanently - so tiles can be lifted and repositioned even years later.",
    details: [
      "Pour adhesive and spread evenly with a short-nap roller or notched trowel",
      "Work in manageable sections (about 3–4 metres at a time)",
      "Allow adhesive to 'tack up' - it should feel sticky but dry to the touch (30–60 minutes depending on conditions)",
      "The adhesive remains tacky indefinitely once dry - don't rush this step",
      "Coverage: approximately 5–7 m² per litre",
    ],
    tips: [
      "On hot days the adhesive tacks up faster; on cold or humid days it takes longer",
      "Don't apply adhesive over dusty or oily surfaces - it won't grip",
    ],
    image: "/images/installation/step-2-adhesive.jpg",
  },
  {
    step: 3,
    icon: LayoutGrid,
    title: "Lay Your Carpet Tiles",
    description:
      "This is the satisfying part. Starting from the centre of the room, lay your tiles in an ashlar (brick-bond) pattern for a seamless broadloom look. Each tile presses firmly into the adhesive and grips immediately.",
    details: [
      "Find the centre of the room by snapping chalk lines between opposite walls",
      "Start laying tiles from the centre outward",
      "Use an ashlar (brick-bond) layout - offset each row by half a tile length (500 mm)",
      "Check the arrows on the back of each tile - all arrows should point the same direction",
      "Press each tile firmly into the adhesive with your hands or a carpet roller",
      "Butt tiles tightly together - the seamless look depends on tight joins",
    ],
    tips: [
      "Dry-lay a row first (without adhesive) to plan your cuts at the edges",
      "Work outward in a pyramid pattern to keep everything square",
    ],
    image: "/images/installation/step-3-lay.jpg",
  },
  {
    step: 4,
    icon: Scissors,
    title: "Trim, Finish & Enjoy",
    description:
      "The felt backing cuts cleanly with a standard utility knife. Trim edge tiles to fit, tidy up the perimeter, and you're done. Walk on your new floor immediately - no drying time required.",
    details: [
      "Measure edge tiles by flipping the tile upside-down against the wall",
      "Score the backing with a sharp utility knife using a straight edge",
      "Snap the tile along the score line for a clean cut",
      "Press edge tiles firmly into adhesive",
      "Replace furniture carefully - use felt pads on heavy items",
    ],
    tips: [
      "Change utility knife blades frequently - a sharp blade makes cleaner cuts",
      "Order 10% extra tiles for edge cuts and future replacements",
    ],
    image: "/images/installation/step-4-trim.jpg",
  },
];

const toolsList = [
  "Utility knife with spare blades",
  "Straight edge or T-square",
  "Chalk line",
  "Tape measure",
  "Carpet roller (optional but recommended)",
  "Short-nap paint roller or notched trowel (for adhesive)",
  "Knee pads (for comfort)",
];

export function HowToInstallClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-brand-900">
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="overline text-accent mb-4">DIY Carpet Installation Guide</p>
            <h1 className="font-serif text-display-lg md:text-display-xl text-white mb-6 text-balance">
              Skip the Installer - Lay Premium Carpet Tiles Yourself
            </h1>
            <p className="text-body-lg text-brand-300 max-w-2xl">
              Traditional carpet needs a professional with power stretchers and
              tack strips. Modular Carpet tiles need you, a utility knife, and
              a free afternoon. Here&apos;s exactly how to do it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What you'll need */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Ruler className="w-6 h-6 text-accent" />
                <h2 className="font-serif text-heading-lg text-brand-800">
                  What You&apos;ll Need
                </h2>
              </div>
              <ul className="space-y-3">
                {toolsList.map((tool) => (
                  <li
                    key={tool}
                    className="flex items-center gap-2 text-body-md text-brand-600"
                  >
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {tool}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Package className="w-6 h-6 text-accent" />
                <h2 className="font-serif text-heading-lg text-brand-800">
                  Materials
                </h2>
              </div>
              <ul className="space-y-3">
                {[
                  "Modular Carpet tiles (+ 10% extra for cuts/spares)",
                  "Pressure-sensitive carpet tile adhesive",
                  "Levelling compound (if needed)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-body-md text-brand-600"
                  >
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 bg-warm-light rounded-md p-4 border border-warm/20">
                <div className="flex items-start gap-2">
                  <Lightbulb className="w-5 h-5 text-warm flex-shrink-0 mt-0.5" />
                  <p className="text-body-sm text-brand-600">
                    <strong>Pro Tip:</strong> Order 10% more tiles than your
                    calculation says. This covers edge cuts and gives you spares
                    for future replacements.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Steps */}
      {steps.map((step, index) => (
        <Section
          key={step.step}
          background={index % 2 === 0 ? "linen" : "white"}
        >
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-accent text-white flex items-center justify-center font-serif text-2xl flex-shrink-0">
                    {step.step}
                  </div>
                  <h2 className="font-serif text-heading-lg text-brand-800">
                    {step.title}
                  </h2>
                </div>
                <p className="text-body-lg text-brand-500 mb-6 leading-relaxed">
                  {step.description}
                </p>
                <ul className="space-y-3 mb-6">
                  {step.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-start gap-2 text-body-md text-brand-600"
                    >
                      <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
                {step.tips.map((tip) => (
                  <div
                    key={tip}
                    className="bg-warm-light rounded-md p-4 border border-warm/20 mb-3"
                  >
                    <div className="flex items-start gap-2">
                      <Lightbulb className="w-4 h-4 text-warm flex-shrink-0 mt-0.5" />
                      <p className="text-body-sm text-brand-600">{tip}</p>
                    </div>
                  </div>
                ))}
              </div>
              {/* Image placeholder */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden bg-brand-200">
                {/* TODO: Replace with actual installation step photo */}
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{ backgroundImage: `url('${step.image}')` }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <step.icon className="w-16 h-16 text-brand-400/30" />
                </div>
              </div>
            </div>
          </motion.div>
        </Section>
      ))}

      {/* Important notes */}
      <Section background="white">
        <div className="max-w-3xl mx-auto">
          <div className="bg-accent-light rounded-lg p-8 border border-accent/20">
            <div className="flex items-start gap-3 mb-4">
              <AlertTriangle className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
              <h3 className="font-serif text-heading-md text-brand-800">
                Important Notes
              </h3>
            </div>
            <ul className="space-y-3 text-body-md text-brand-600">
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                Allow tiles to acclimatise in the room for 24 hours before installation
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                Room temperature should be between 18°C and 28°C during installation
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                Keep spare tiles from the same batch for future replacements
              </li>
              <li className="flex items-start gap-2">
                <Check className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                For best results, use a carpet roller after installation to ensure full adhesion
              </li>
            </ul>
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
            <p className="overline text-accent mb-4">Ready to Install?</p>
            <h2 className="font-serif text-display-md text-white mb-6 text-balance">
              Get Started with a Free Quote
            </h2>
            <p className="text-body-lg text-brand-300 mb-10">
              Tell us about your project and we&apos;ll help you choose the right range,
              calculate quantities, and get you started.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">
                  Get a Free Quote
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
