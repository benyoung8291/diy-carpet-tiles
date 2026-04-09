import { Metadata } from "next";
import { InvestmentPropertyClient } from "./investment-property-client";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "Carpet Tiles for Investment Properties | Outlasts Traditional Carpet",
  description:
    "The best carpet for investment properties. Commercial-grade carpet tiles with a 15-year warranty that outlasts tenants. Solution-dyed nylon, stain resistant, breathable backing. Professionally installed by Premrest.",
  alternates: { canonical: "https://www.modularcarpet.com.au/investment-property-flooring" },
  openGraph: {
    title: "Carpet Tiles for Investment Properties | Outlasts Traditional Carpet",
    description: "Commercial-grade carpet tiles with a 15-year warranty that outlasts tenants. Professionally installed by Premrest.",
    url: "https://www.modularcarpet.com.au/investment-property-flooring",
    images: [{ url: "/images/lifestyle/hero-home.jpg", width: 1200, height: 630, alt: "Carpet tiles for investment properties" }],
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
