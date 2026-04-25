"use client";

import { Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";

interface SupplyOrInstallProps {
  background?: "white" | "linen";
  description?: string;
  path1Suits?: string;
  path2Suits?: string;
  closingNote?: string;
}

const DEFAULT_DESCRIPTION =
  "Modular Carpet by Premrest is available either as a supply-only product or as a full supply-and-install service in Melbourne, Sydney, and Brisbane. The same product, the same 15-year warranty - the difference is who lays it.";

const DEFAULT_PATH_1_SUITS =
  "Suits owner-operators, builders, handy homeowners, and any project on a hands-on schedule";

const DEFAULT_PATH_2_SUITS =
  "Suits hospitality fit-outs, considered home renovations, and multi-property landlords who would rather hand the project off";

const DEFAULT_CLOSING_NOTE =
  "The choice between paths doesn't change the product. It just changes who lays it.";

export function SupplyOrInstall({
  background = "linen",
  description = DEFAULT_DESCRIPTION,
  path1Suits = DEFAULT_PATH_1_SUITS,
  path2Suits = DEFAULT_PATH_2_SUITS,
  closingNote = DEFAULT_CLOSING_NOTE,
}: SupplyOrInstallProps) {
  const path1Card =
    background === "linen"
      ? "bg-white rounded-lg p-8 border border-brand-200"
      : "bg-brand-50 rounded-lg p-8 border border-brand-200";

  const path1Bullets = [
    "Direct from the warehouse to your property",
    "Install with your existing trade, maintenance team, or as an owner-installer project",
    "Adhesive coverage ~180 m² per tub at around $150 each",
    "Written installation guide and pile-direction documentation supplied",
    path1Suits,
  ];

  const path2Bullets = [
    "Premrest manages measurement, supply, and installation",
    "Indicative installation rate ~$20-25/m² of laid carpet",
    "Site preparation, levelling, transitions, and old-carpet removal quoted alongside",
    "One contract, one invoice, one project lead",
    path2Suits,
  ];

  return (
    <Section background={background}>
      <SectionHeader
        overline="Two Paths to a Finished Floor"
        title="Supply Only, or Supply and Install - Your Choice"
        description={description}
      />
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className={path1Card}>
          <p className="overline mb-3">Path 1</p>
          <h3 className="font-serif text-heading-sm text-brand-800 mb-4">
            Supply only - install yourself or via your trade
          </h3>
          <ul className="space-y-2 text-body-sm text-brand-500">
            {path1Bullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-accent-light rounded-lg p-8 border-2 border-accent/20">
          <p className="overline mb-3">Path 2</p>
          <h3 className="font-serif text-heading-sm text-brand-800 mb-4">
            Supply and install - Melbourne, Sydney, Brisbane
          </h3>
          <ul className="space-y-2 text-body-sm text-brand-700">
            {path2Bullets.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <p className="max-w-3xl mx-auto text-center text-body-lg text-brand-600 italic mt-10">
        {closingNote}
      </p>
    </Section>
  );
}
