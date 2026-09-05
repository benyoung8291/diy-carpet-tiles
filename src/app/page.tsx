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

export const metadata: Metadata = {
  title: {
    absolute: "Supply-and-Install Modular Carpet for Hotels | Premrest",
  },
  description:
    "Premrest supplies and installs modular carpet for hotels, motels, apartments, Airbnbs, and hospitality venues in Melbourne, Sydney, and Brisbane. Request an install quote or call 1300 207 915.",
  openGraph: {
    title: "Supply-and-Install Modular Carpet for Hotels | Premrest",
    description:
      "Modular carpet replacement for hospitality venues in Melbourne, Sydney, and Brisbane. Premrest supply-and-install, or supply-only for in-house trades.",
  },
  twitter: {
    title: "Supply-and-Install Modular Carpet for Hotels | Premrest",
    description:
      "Modular carpet replacement for hospitality venues in Melbourne, Sydney, and Brisbane. Request an install quote on 1300 207 915.",
  },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <PersonaRouter />
      <BenefitsGrid />
      <RangesPreview />
      <SupplyOrInstall background="linen" />
      <HowItWorks />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
