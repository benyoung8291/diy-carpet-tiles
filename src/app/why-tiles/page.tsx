import { Metadata } from "next";
import { WhyTilesClient } from "./why-tiles-client";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";

export const metadata: Metadata = {
  title:
    "Why Modular Carpet? | Eight Reasons It Outperforms Broadloom | Premrest",
  description:
    "Eight reasons modular carpet outperforms traditional broadloom in homes, hotels, motels, and rentals. Solution-dyed nylon, 15-year wear warranty, replace damaged tiles instead of whole rooms. Supply-only or supply-and-install in Melbourne, Sydney, and Brisbane.",
  alternates: { canonical: "https://www.modularcarpet.com.au/why-tiles" },
  openGraph: {
    title:
      "Why Modular Carpet? | Eight Reasons It Outperforms Broadloom | Premrest",
    description:
      "Eight reasons modular carpet outperforms broadloom in homes, hospitality, and rentals. Replace tiles instead of whole rooms.",
    url: "https://www.modularcarpet.com.au/why-tiles",
    images: [{ url: "/images/lifestyle/hero-home.jpg", width: 1200, height: 630, alt: "Why choose modular carpet over traditional broadloom" }],
  },
};

export default function WhyTilesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.modularcarpet.com.au" },
        { name: "Why Carpet Tiles?", url: "https://www.modularcarpet.com.au/why-tiles" },
      ]} />
      <WhyTilesClient />
    </>
  );
}
