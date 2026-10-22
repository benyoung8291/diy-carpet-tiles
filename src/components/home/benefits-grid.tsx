import {
  Eye,
  Wrench,
  RefreshCw,
  Sun,
  Droplets,
  Volume2,
  Shield,
  Leaf,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { BENEFITS } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Eye,
  Wrench,
  RefreshCw,
  Sun,
  Droplets,
  Volume2,
  Shield,
  Leaf,
};

export function BenefitsGrid() {
  return (
    <Section background="linen">
      <SectionHeader
        overline="What Makes the Product Different"
        title="The Eight Things That Set Modular Carpet Apart"
        description="Commercial-grade carpet tiles for rental bedrooms, living rooms and hallways. Keep matching spares to repair individual damaged tiles between tenancies."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {BENEFITS.map((benefit) => {
          const Icon = iconMap[benefit.icon];
          return (
            <div
              key={benefit.title}
              className="bg-white rounded-lg p-8 border border-brand-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-lg bg-accent-light flex items-center justify-center mb-5">
                <Icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-serif text-heading-sm text-brand-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-body-sm text-brand-500 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
