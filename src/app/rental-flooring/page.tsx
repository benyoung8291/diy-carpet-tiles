import { Metadata } from "next";
import { RentalFlooringClient } from "./rental-flooring-client";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "Carpet Tiles for Rental Properties | DIY Rental Flooring",
  description:
    "The best flooring for rental properties. DIY carpet tiles landlords and tenants can install themselves - no tradesperson needed. Replace damaged tiles between tenancies instead of re-carpeting entire rooms. 15-year warranty.",
  alternates: { canonical: "https://www.modularcarpet.com.au/rental-flooring" },
  openGraph: {
    title: "Carpet Tiles for Rental Properties | DIY Rental Flooring",
    description: "The best flooring for rental properties. Replace damaged tiles between tenancies instead of re-carpeting entire rooms.",
    url: "https://www.modularcarpet.com.au/rental-flooring",
    images: [{ url: "/images/lifestyle/hero-home.jpg", width: 1200, height: 630, alt: "Carpet tiles for rental properties" }],
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
