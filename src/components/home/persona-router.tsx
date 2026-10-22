import Link from "next/link";
import { Hotel, Home, Building2, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

const personas = [
  { icon: Building2, tag: "Landlords & Property Managers", title: "Carpet for Rental Properties", body: "Replace individual damaged tiles between tenancies. Explore carpet for rental bedrooms, living rooms and hallways, with supply-only or installation options.", cta: "Explore rental property carpet", href: "/rental-flooring" },
  { icon: Home, tag: "Investment Property", title: "Plan for Future Repairs", body: "Choose a range for your investment property and keep matching spare tiles. Ask us about supply and installation for one property or a portfolio.", cta: "See investment property flooring", href: "/investment-property-flooring" },
  { icon: Hotel, tag: "Hospitality", title: "Hotels, Motels & Serviced Apartments", body: "The same modular carpet also suits hospitality refurbishments. Discuss staged installation and your maintenance requirements with Premrest.", cta: "Explore hotel and motel carpet", href: "/hotel-carpet" },
];

export function PersonaRouter() {
  return (
    <Section background="white">
      <SectionHeader
        overline="For Every Type of Property"
        title="Find Carpet for Your Property"
        description="Start with your rental property or investment portfolio. Hospitality options remain available for hotels, motels and serviced apartments."
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {personas.map((persona) => {
          const Icon = persona.icon;
          return (
            <div key={persona.title}>
              <Link
                href={persona.href}
                className="group block h-full bg-brand-50 rounded-lg p-6 border border-brand-200 hover:border-accent/40 hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-accent-light flex items-center justify-center mb-4">
                  <Icon className="w-5 h-5 text-accent" />
                </div>
                <p className="overline mb-2">{persona.tag}</p>
                <h3 className="font-serif text-heading-sm text-brand-800 mb-3">
                  {persona.title}
                </h3>
                <p className="text-body-sm text-brand-500 leading-relaxed mb-5">
                  {persona.body}
                </p>
                <span className="inline-flex items-center gap-1.5 text-body-sm font-medium text-accent group-hover:gap-2.5 transition-all">
                  {persona.cta}
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            </div>
          );
        })}
      </div>
      <p className="mt-8 text-center text-body-sm text-brand-500">
        Laying tiles with an in-house trade or maintenance team?{" "}
        <Link
          href="/how-to-install"
          className="font-medium text-accent hover:text-accent-hover underline underline-offset-4"
        >
          Read the installation guide
        </Link>
        .
      </p>
    </Section>
  );
}
