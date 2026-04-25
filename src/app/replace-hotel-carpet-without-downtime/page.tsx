import { Metadata } from "next";
import { ReplaceHotelCarpetWithoutDowntimeClient } from "./replace-hotel-carpet-without-downtime-client";
import { faqs } from "./faqs";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";

export const metadata: Metadata = {
  title:
    "How to Replace Damaged Hotel Carpet Without Closing the Room",
  description:
    "Replace damaged carpet in a hotel room, rental, or considered home in 60 seconds without closing the room or recarpeting. The operational and lifecycle case for modular carpet tiles - from an Australian commercial-grade supplier.",
  alternates: {
    canonical:
      "https://www.modularcarpet.com.au/replace-hotel-carpet-without-downtime",
  },
  openGraph: {
    title:
      "How to Replace Damaged Hotel Carpet Without Closing the Room",
    description:
      "The operational and 10-year lifecycle case for modular carpet tiles in hotels, investment properties, and considered homes.",
    url: "https://www.modularcarpet.com.au/replace-hotel-carpet-without-downtime",
    images: [
      {
        url: "/images/lifestyle/hero-home.jpg",
        width: 1200,
        height: 630,
        alt: "Replacing a single damaged hotel carpet tile without closing the room",
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

export default function ReplaceHotelCarpetWithoutDowntimePage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.modularcarpet.com.au" },
          {
            name: "Replacing Hotel Carpet Without Downtime",
            url: "https://www.modularcarpet.com.au/replace-hotel-carpet-without-downtime",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <ReplaceHotelCarpetWithoutDowntimeClient />
    </>
  );
}
