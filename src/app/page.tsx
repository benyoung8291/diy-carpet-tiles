import { Hero } from "@/components/home/hero";
import { BenefitsGrid } from "@/components/home/benefits-grid";
import { RangesPreview } from "@/components/home/ranges-preview";
import { HowItWorks } from "@/components/home/how-it-works";
import { Testimonials } from "@/components/home/testimonials";
import { TrustSignals } from "@/components/home/trust-signals";
import { CtaBanner } from "@/components/home/cta-banner";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSignals />
      <BenefitsGrid />
      <RangesPreview />
      <HowItWorks />
      <Testimonials />
      <CtaBanner />
    </>
  );
}
