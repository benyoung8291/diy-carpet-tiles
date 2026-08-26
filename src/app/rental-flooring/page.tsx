import { Metadata } from "next";
import { RentalFlooringClient } from "./rental-flooring-client";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "Carpet for Rental Properties | Modular Tiles for Landlords",
  description:
    "Modular carpet for rental properties: replace damaged tiles between tenancies in under an hour instead of re-carpeting whole rooms. 15-year commercial-grade warranty. Supply-only direct from Premrest, or supply-and-install in Melbourne, Sydney, and Brisbane.",
  alternates: { canonical: "https://www.modularcarpet.com.au/rental-flooring" },
  openGraph: {
    title: "Carpet for Rental Properties | Modular Tiles for Landlords",
    description:
      "Modular carpet that survives multiple tenancy cycles. Replace damaged tiles between tenancies, no full re-carpet. Supply-only or supply-and-install.",
    url: "https://www.modularcarpet.com.au/rental-flooring",
    images: [{ url: "/images/lifestyle/hero-home.jpg", width: 1200, height: 630, alt: "Modular carpet tiles in an Australian rental property" }],
  },
  twitter: {
    title: "Carpet for Rental Properties | Modular Tiles for Landlords",
  },
};

export default function RentalFlooringPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.modularcarpet.com.au" },
        { name: "Rental Properties", url: "https://www.modularcarpet.com.au/rental-flooring" },
      ]} />
      <RentalFlooringClient />
    </>
  );
}
