import { Metadata } from "next";
import { HowToInstallClient } from "./how-to-install-client";
import { faqs } from "./faqs";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "DIY Carpet Tiles Installation: How to Install",
  description:
    "DIY carpet tiles are a one-afternoon carpet tile installation: pressure-sensitive glue, an ashlar layout, and a utility knife. Premrest also installs in Melbourne, Sydney, and Brisbane.",
  alternates: { canonical: "https://www.modularcarpet.com.au/how-to-install" },
  openGraph: {
    title: "DIY Carpet Tiles Installation: How to Install",
    description:
      "DIY carpet tiles are a one-afternoon carpet tile installation: pressure-sensitive glue, an ashlar layout, and a utility knife. Premrest also installs in Melbourne, Sydney, and Brisbane.",
    url: "https://www.modularcarpet.com.au/how-to-install",
    images: [{ url: "/images/lifestyle/hero-home.jpg", width: 1200, height: 630, alt: "Step-by-step modular carpet tile installation guide" }],
  },
  twitter: {
    title: "DIY Carpet Tiles Installation: How to Install",
  },
};

const howToJsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: "How to Install Modular Carpet Tiles Yourself",
  description:
    "Yes, you can install Modular Carpet tiles yourself. Pressure-sensitive adhesive, an ashlar (brick-bond) layout, and a utility knife are enough for most rooms. Most rooms take a single afternoon.",
  totalTime: "PT4H",
  image: "https://www.modularcarpet.com.au/images/installation/step-3-lay.jpg",
  tool: [
    { "@type": "HowToTool", name: "Utility knife with spare blades" },
    { "@type": "HowToTool", name: "Straight edge or T-square" },
    { "@type": "HowToTool", name: "Chalk line" },
    { "@type": "HowToTool", name: "Tape measure" },
    { "@type": "HowToTool", name: "Carpet roller (optional but recommended)" },
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
      position: 1,
      name: "Prepare Your Subfloor",
      text: "Sweep or vacuum the entire subfloor thoroughly. Fill any cracks, holes, or divots with levelling compound. Ensure the surface is dry. Remove any existing carpet, underlay, or loose flooring material. Concrete, plywood, existing vinyl, and existing tile are all suitable subfloors.",
      url: "https://www.modularcarpet.com.au/how-to-install#step-1",
      image: "https://www.modularcarpet.com.au/images/installation/step-1-prep.jpg",
    },
    {
      "@type": "HowToStep",
      position: 2,
      name: "Apply Pressure-Sensitive Adhesive",
      text: "Pour pressure-sensitive carpet tile adhesive and spread evenly with a short-nap roller or notched trowel. Work in manageable sections of about 3 to 4 metres at a time. Allow adhesive to tack up until it feels sticky but dry to the touch, typically 30 to 60 minutes depending on conditions. Coverage is approximately 5 to 7 m² per litre.",
      url: "https://www.modularcarpet.com.au/how-to-install#step-2",
      image: "https://www.modularcarpet.com.au/images/installation/step-2-adhesive.jpg",
    },
    {
      "@type": "HowToStep",
      position: 3,
      name: "Lay Your Carpet Tiles",
      text: "Find the centre of the room by snapping chalk lines between opposite walls. Start laying tiles from the centre outward in an ashlar (brick-bond) layout, offsetting each row by half a tile length (500 mm). Check the arrows on the back of each tile so all arrows point the same direction. Press each tile firmly into the adhesive and butt tiles tightly together.",
      url: "https://www.modularcarpet.com.au/how-to-install#step-3",
      image: "https://www.modularcarpet.com.au/images/installation/step-3-lay.jpg",
    },
    {
      "@type": "HowToStep",
      position: 4,
      name: "Trim, Finish and Enjoy",
      text: "Measure edge tiles by flipping the tile upside-down against the wall. Score the backing with a sharp utility knife using a straight edge. Snap the tile along the score line for a clean cut. Press edge tiles firmly into adhesive. Walk on your new floor immediately - no drying time required.",
      url: "https://www.modularcarpet.com.au/how-to-install#step-4",
      image: "https://www.modularcarpet.com.au/images/installation/step-4-trim.jpg",
    },
  ],
};

const faqJsonLd = {
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
};

export default function HowToInstallPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.modularcarpet.com.au" },
        { name: "How to Install", url: "https://www.modularcarpet.com.au/how-to-install" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HowToInstallClient />
    </>
  );
}
