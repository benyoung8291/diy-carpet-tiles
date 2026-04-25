import { Metadata } from "next";
import { CarpetTilesOverCeramicTilesClient } from "./carpet-tiles-over-ceramic-tiles-client";
import { faqs } from "./faqs";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";

export const metadata: Metadata = {
  title:
    "Can You Install Carpet Tiles Over Ceramic Tiles? (Yes - Here's How)",
  description:
    "Yes - you can install modular carpet tiles directly over existing ceramic, porcelain, or stone tiles. No demolition. Full prep guide, cost comparison, and FAQs from an Australian DIY carpet supplier.",
  alternates: {
    canonical:
      "https://www.modularcarpet.com.au/carpet-tiles-over-ceramic-tiles",
  },
  openGraph: {
    title:
      "Can You Install Carpet Tiles Over Ceramic Tiles? (Yes - Here's How)",
    description:
      "Yes - you can install modular carpet tiles directly over existing ceramic, porcelain, or stone tiles. No demolition. Full prep guide and cost comparison.",
    url: "https://www.modularcarpet.com.au/carpet-tiles-over-ceramic-tiles",
    images: [
      {
        url: "/images/lifestyle/hero-home.jpg",
        width: 1200,
        height: 630,
        alt: "Carpet tiles installed over existing ceramic tile floor",
      },
    ],
  },
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

export default function CarpetTilesOverCeramicTilesPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.modularcarpet.com.au" },
          {
            name: "Carpet Tiles Over Ceramic Tiles",
            url: "https://www.modularcarpet.com.au/carpet-tiles-over-ceramic-tiles",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <CarpetTilesOverCeramicTilesClient />
    </>
  );
}
