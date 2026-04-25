import { Hero } from "@/components/home/hero";
import { BenefitsGrid } from "@/components/home/benefits-grid";
import { RangesPreview } from "@/components/home/ranges-preview";
import { HowItWorks } from "@/components/home/how-it-works";
import { Testimonials } from "@/components/home/testimonials";
import { TrustSignals } from "@/components/home/trust-signals";
import { FaqSection } from "@/components/home/faq-section";
import { CtaBanner } from "@/components/home/cta-banner";
import { PersonaRouter } from "@/components/home/persona-router";
import { SupplyOrInstall } from "@/components/shared/supply-or-install";

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
      <Testimonials />
      <FaqSection />
      <CtaBanner />
    </>
  );
}
