import { Metadata } from "next";
import { HowToInstallClient } from "./how-to-install-client";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "How to Install DIY Carpet Tiles | Step-by-Step Guide",
  description:
    "Install premium carpet tiles yourself - no flooring installer needed. Step-by-step DIY guide for anyone handy. No special tools, no tradesperson. Carpet your room in a single afternoon.",
  alternates: { canonical: "https://modularcarpet.com.au/how-to-install" },
  openGraph: {
    title: "How to Install DIY Carpet Tiles | Step-by-Step Guide",
    description: "Install premium carpet tiles yourself - no flooring installer needed. Step-by-step DIY guide for anyone handy.",
    url: "https://modularcarpet.com.au/how-to-install",
    images: [{ url: "/images/lifestyle/hero-home.jpg", width: 1200, height: 630, alt: "Step-by-step DIY carpet tile installation guide" }],
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Install DIY Carpet Tiles",
  description:
    "Step-by-step guide to installing modular carpet tiles yourself. No professional installer, no special tools, no experience needed. Most rooms take a single afternoon.",
  totalTime: "PT4H",
  estimatedCost: {
    "@type": "MonetaryAmount",
    currency: "AUD",
    value: "0",
  },
  tool: [
    { "@type": "HowToTool", name: "Utility knife with spare blades" },
    { "@type": "HowToTool", name: "Straight edge or T-square" },
    { "@type": "HowToTool", name: "Chalk line" },
    { "@type": "HowToTool", name: "Tape measure" },
    { "@type": "HowToTool", name: "Carpet roller (optional)" },
    { "@type": "HowToTool", name: "Short-nap paint roller or notched trowel" },
    { "@type": "HowToTool", name: "Knee pads" },
  ],
  supply: [
    { "@type": "HowToSupply", name: "Modular Carpet tiles (plus 10% extra for cuts and spares)" },
    { "@type": "HowToSupply", name: "Pressure-sensitive carpet tile adhesive" },
    { "@type": "HowToSupply", name: "Levelling compound (if needed)" },
  ],
  step: [
    {
      "@type": "HowToStep",
      name: "Prepare Your Subfloor",
      text: "Sweep or vacuum the entire subfloor. Fill any cracks, holes, or divots with levelling compound. Ensure the surface is dry. Remove any existing carpet, underlay, or loose flooring material. Concrete, plywood, existing vinyl, and existing tile are all suitable subfloors.",
      url: "https://modularcarpet.com.au/how-to-install",
    },
    {
      "@type": "HowToStep",
      name: "Apply Pressure-Sensitive Adhesive",
      text: "Pour adhesive and spread evenly with a short-nap roller or notched trowel. Work in manageable sections of about 3 to 4 metres at a time. Allow adhesive to tack up until it feels sticky but dry to the touch, typically 30 to 60 minutes depending on conditions.",
      url: "https://modularcarpet.com.au/how-to-install",
    },
    {
      "@type": "HowToStep",
      name: "Lay Your Carpet Tiles",
      text: "Find the centre of the room by snapping chalk lines between opposite walls. Start laying tiles from the centre outward in an ashlar (brick-bond) layout, offsetting each row by half a tile length. Check the arrows on the back of each tile and press each tile firmly into the adhesive.",
      url: "https://modularcarpet.com.au/how-to-install",
    },
    {
      "@type": "HowToStep",
      name: "Trim, Finish and Enjoy",
      text: "Measure edge tiles by flipping the tile upside-down against the wall. Score the backing with a sharp utility knife using a straight edge. Snap the tile along the score line for a clean cut. Press edge tiles firmly into adhesive. Walk on your new floor immediately - no drying time required.",
      url: "https://modularcarpet.com.au/how-to-install",
    },
  ],
};

export default function HowToInstallPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://modularcarpet.com.au" },
        { name: "How to Install", url: "https://modularcarpet.com.au/how-to-install" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <HowToInstallClient />
    </>
  );
}
