import { Metadata } from "next";
import { RefurbishMotelClient } from "./refurbish-motel-without-closing-rooms-client";
import { faqs } from "./faqs";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";

export const metadata: Metadata = {
  title:
    "How to Refurbish Carpet Across an Owner-Operated Motel Without Closing a Single Room",
  description:
    "Refurbish carpet across an owner-operated motel one room at a time, during your low-occupancy windows, without closing the property or financing the whole job in one capital event. A practical playbook for motel owner-operators.",
  alternates: {
    canonical:
      "https://www.modularcarpet.com.au/refurbish-motel-without-closing-rooms",
  },
  openGraph: {
    title:
      "How to Refurbish Carpet Across an Owner-Operated Motel Without Closing a Single Room",
    description:
      "A rolling, room-by-room refurbishment playbook for owner-operators - including a worked 20-room motel example with the full numbers.",
    url: "https://www.modularcarpet.com.au/refurbish-motel-without-closing-rooms",
    images: [
      {
        url: "/images/lifestyle/hero-home.jpg",
        width: 1200,
        height: 630,
        alt: "Owner-operator installing modular carpet tiles in a motel guest room",
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

export default function RefurbishMotelPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://www.modularcarpet.com.au" },
          {
            name: "Refurbishing a Motel Without Closing Rooms",
            url: "https://www.modularcarpet.com.au/refurbish-motel-without-closing-rooms",
          },
        ]}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <RefurbishMotelClient />
    </>
  );
}
