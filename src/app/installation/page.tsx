import { Metadata } from "next";
import { InstallationClient } from "./installation-client";
import { faqs } from "./faqs";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";

export const metadata: Metadata = {
  title:
    "Modular Carpet Installation - Melbourne, Sydney, Brisbane | Premrest",
  description:
    "Premrest's full supply-and-install service for modular carpet across Melbourne, Sydney, and Brisbane. Indicative ~$20-25/m² install rate, site-specific costs itemised, 12-month workmanship warranty alongside the 15-year manufacturer warranty.",
  alternates: {
    canonical: "https://www.modularcarpet.com.au/installation",
  },
  openGraph: {
    title:
      "Modular Carpet Installation - Melbourne, Sydney, Brisbane | Premrest",
    description:
      "Full supply-and-install service for modular carpet across Melbourne, Sydney, and Brisbane. One contract, one invoice, one project lead.",
    url: "https://www.modularcarpet.com.au/installation",
    images: [
      {
        url: "/images/lifestyle/hero-home.jpg",
        width: 1200,
        height: 630,
        alt: "Premrest modular carpet installation team",
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

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Modular Carpet Supply and Installation",
  provider: {
    "@type": "Organization",
    name: "Premrest",
    url: "https://www.modularcarpet.com.au",
  },
  areaServed: [
    { "@type": "City", name: "Melbourne" },
    { "@type": "City", name: "Sydney" },
    { "@type": "City", name: "Brisbane" },
  ],
  serviceType: "Carpet supply and installation",
  description:
    "Full supply-and-install service for commercial-grade modular carpet tiles in Melbourne, Sydney, and Brisbane. Includes site measurement, removal of existing flooring, subfloor preparation, installation, transitions, and walk-through handover. Indicative installation rate ~$20-25/m² with site-specific costs itemised separately.",
};

export default function InstallationPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.modularcarpet.com.au" },
          {
            name: "Installation",
            url: "https://www.modularcarpet.com.au/installation",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <InstallationClient />
    </>
  );
}
