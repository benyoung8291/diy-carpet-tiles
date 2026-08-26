import { Metadata } from "next";
import { HotelGradeCarpetForHomeClient } from "./hotel-grade-carpet-for-home-client";
import { faqs } from "./faqs";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";

export const metadata: Metadata = {
  title:
    "Why Hotel Carpet Lasts Longer Than Home Carpet (And How to Specify It at Home)",
  description:
    "Hotel carpet lasts longer because hotels specify commercial-grade fibre, density, and backing - not residential. The four-line specification a homeowner, landlord, or hospitality operator can copy into any brief.",
  alternates: {
    canonical:
      "https://www.modularcarpet.com.au/hotel-grade-carpet-for-home",
  },
  openGraph: {
    title:
      "Why Hotel Carpet Lasts Longer Than Home Carpet (And How to Specify It at Home)",
    description:
      "The four-specification difference between hotel-grade and residential-grade carpet - and how to write the better spec into your home, rental, or hospitality brief.",
    url: "https://www.modularcarpet.com.au/hotel-grade-carpet-for-home",
    images: [
      {
        url: "/images/lifestyle/hero-home.jpg",
        width: 1200,
        height: 630,
        alt: "Hotel-grade modular carpet specified for a considered Australian home",
      },
    ],
  },
  twitter: {
    title:
      "Why Hotel Carpet Lasts Longer Than Home Carpet (And How to Specify It at Home)",
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

export default function HotelGradeCarpetForHomePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.modularcarpet.com.au" },
          {
            name: "Hotel-Grade Carpet for the Home",
            url: "https://www.modularcarpet.com.au/hotel-grade-carpet-for-home",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HotelGradeCarpetForHomeClient />
    </>
  );
}
