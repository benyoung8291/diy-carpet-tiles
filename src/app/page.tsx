import type { Metadata } from "next";
import { Hero } from "@/components/home/hero";
import { BenefitsGrid } from "@/components/home/benefits-grid";
import { RangesPreview } from "@/components/home/ranges-preview";
import { HowItWorks } from "@/components/home/how-it-works";
import { TrustSignals } from "@/components/home/trust-signals";
import { FaqSection } from "@/components/home/faq-section";
import { CtaBanner } from "@/components/home/cta-banner";
import { PersonaRouter } from "@/components/home/persona-router";
import { SupplyOrInstall } from "@/components/shared/supply-or-install";
import { ProjectStart } from "@/components/home/project-start";

export const metadata: Metadata = {
  title: {
    absolute: "Carpet Tiles for Rental Properties & Landlords | Premrest",
  },
  description:
    "Carpet tiles for landlords and property managers. Replace damaged tiles between tenancies. Supply Australia-wide; install in Melbourne, Sydney and Brisbane.",
  alternates: { canonical: "https://www.modularcarpet.com.au" },
  openGraph: {
    title: "Rental Property Carpet Tiles | Premrest",
    images: [{ url: "/images/lifestyle/hero-home.jpg", width: 1200, height: 630, alt: "Modular carpet interior" }],
    description:
      "Carpet tiles for rental properties: replace damaged tiles between tenancies. Get free samples or a quote. Supply Australia-wide; installation in Melbourne, Sydney and Brisbane.",
  },
  twitter: {
    title: "Rental Property Carpet Tiles | Premrest",
    card: "summary_large_image",
    images: ["/images/lifestyle/hero-home.jpg"],
    description:
      "Replace damaged carpet tiles between tenancies. Samples and quotes for landlords and property managers. Call Premrest on 1300 207 915.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <ProjectStart />
      <RangesPreview />
      <SupplyOrInstall background="linen" description="Choose supply-only for your own flooring trade, or ask Premrest to measure, supply and install in Melbourne, Sydney or Brisbane." path1Suits="Suits landlords and property managers with an existing flooring trade" path2Suits="Suits rental refurbishments and owners who want one project contact" closingNote="Keep matching spare tiles so local damage can be repaired between tenancies." />
      <BenefitsGrid />
      <PersonaRouter />
      <HowItWorks />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
