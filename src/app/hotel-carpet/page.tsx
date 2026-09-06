import { Metadata } from "next";
import { HotelCarpetClient } from "./hotel-carpet-client";
import { faqs } from "./faqs";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "Hotel Carpet Tiles - Supply & Install Melbourne, Sydney, Brisbane",
  description:
    "Premrest supplies and installs hotel carpet tiles in Melbourne, Sydney, and Brisbane. Commercial-grade modular carpet for hotels, motels, and serviced apartments. Replace damaged tiles without closing rooms. 15-year wear warranty.",
  alternates: { canonical: "https://www.modularcarpet.com.au/hotel-carpet" },
  openGraph: {
    title: "Hotel Carpet Tiles - Supply & Install Melbourne, Sydney, Brisbane",
    description:
      "Supply and install commercial-grade hotel carpet tiles in Melbourne, Sydney, and Brisbane. Spot-replace damaged tiles between guests. 15-year wear warranty.",
    url: "https://www.modularcarpet.com.au/hotel-carpet",
    images: [{ url: "/images/lifestyle/hero-home.jpg", width: 1200, height: 630, alt: "Modular carpet for hotel and motel guest rooms" }],
  },
  twitter: {
    title: "Hotel Carpet Tiles - Supply & Install Melbourne, Sydney, Brisbane",
    description:
      "Supply and install commercial-grade hotel carpet tiles in Melbourne, Sydney, and Brisbane. Spot-replace damaged tiles between guests.",
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
  name: "Hotel Carpet Supply and Installation",
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
  serviceType: "Hotel carpet supply and installation",
  description:
    "Premrest supplies and installs commercial-grade modular carpet for hotels, motels, and hospitality venues in Melbourne, Sydney, and Brisbane. Phased room-by-room installation around occupancy, spare-tile allocation for in-house repairs, and a 15-year wear warranty.",
};

export default function HotelCarpetPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.modularcarpet.com.au" },
        { name: "Hotels", url: "https://www.modularcarpet.com.au/hotel-carpet" },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <HotelCarpetClient />
    </>
  );
}
