import { Shield, Wrench, Recycle, MapPin } from "lucide-react";
import { Section } from "@/components/ui/section";

const signals = [
  {
    icon: Shield,
    title: "Commercial-Grade",
    description: "Solution-dyed nylon, manufacturer wear warranty applies",
  },
  {
    icon: Recycle,
    title: "Replace Tiles, Not Rooms",
    description: "Keep matching spare tiles for local repairs",
  },
  {
    icon: Wrench,
    title: "Supply and Install",
    description: "Melbourne, Sydney and Brisbane",
  },
  {
    icon: MapPin,
    title: "Australian-Distributed",
    description: "By Premrest, direct from the warehouse",
  },
];

export function TrustSignals() {
  return (
    <Section background="white" className="!py-12 md:!py-16">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {signals.map((signal) => (
          <div
            key={signal.title}
            className="flex flex-col items-center text-center"
          >
            <signal.icon className="w-8 h-8 text-teal mb-3" />
            <p className="font-semibold text-brand-800 text-body-sm">
              {signal.title}
            </p>
            <p className="text-brand-400 text-body-sm">{signal.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
