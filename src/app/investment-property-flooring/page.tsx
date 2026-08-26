import { Metadata } from "next";
import { InvestmentPropertyClient } from "./investment-property-client";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "Carpet for Investment Properties | Built for Long-Hold Portfolios",
  description:
    "Commercial-grade modular carpet for investment properties and long-hold portfolios. 15-year wear warranty, replace damaged tiles between tenancies in under an hour, no full re-carpet. Supply-only or full supply-and-install in Melbourne, Sydney, and Brisbane.",
  alternates: { canonical: "https://www.modularcarpet.com.au/investment-property-flooring" },
  openGraph: {
    title: "Carpet for Investment Properties | Built for Long-Hold Portfolios",
    description:
      "Modular carpet engineered for investment-property lifecycle costs. Replace damaged tiles between tenancies, never re-carpet whole rooms again. Supply-only or supply-and-install.",
    url: "https://www.modularcarpet.com.au/investment-property-flooring",
    images: [{ url: "/images/lifestyle/hero-home.jpg", width: 1200, height: 630, alt: "Modular carpet tiles in an investment property" }],
  },
  twitter: {
    title: "Carpet for Investment Properties | Built for Long-Hold Portfolios",
  },
};

export default function InvestmentPropertyFlooringPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.modularcarpet.com.au" },
        { name: "Investment Properties", url: "https://www.modularcarpet.com.au/investment-property-flooring" },
      ]} />
      <InvestmentPropertyClient />
    </>
  );
}
