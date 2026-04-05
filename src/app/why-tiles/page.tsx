import { Metadata } from "next";
import { WhyTilesClient } from "./why-tiles-client";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "Why Carpet Tiles? | DIY Carpet You Install Yourself",
  description:
    "Sick of expensive carpet retailers and installer quotes? Modular carpet tiles look like broadloom but you install them yourself in an afternoon. No tradesperson needed. 15-year commercial warranty.",
  alternates: { canonical: "https://modularcarpet.com.au/why-tiles" },
  openGraph: {
    title: "Why Carpet Tiles? | DIY Carpet You Install Yourself",
    description: "Sick of expensive carpet retailers and installer quotes? Modular carpet tiles look like broadloom but you install them yourself in an afternoon.",
    url: "https://modularcarpet.com.au/why-tiles",
    images: [{ url: "/images/lifestyle/hero-home.jpg", width: 1200, height: 630, alt: "Why choose modular carpet tiles over traditional broadloom" }],
  },
};

export default function WhyTilesPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://modularcarpet.com.au" },
        { name: "Why Carpet Tiles?", url: "https://modularcarpet.com.au/why-tiles" },
      ]} />
      <WhyTilesClient />
    </>
  );
}
