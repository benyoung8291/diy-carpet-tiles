"use client";

import Link from "next/link";
import { Section } from "@/components/ui/section";

export function HowItWorks() {
  return (
    <Section background="white">
      <div className="max-w-3xl mx-auto text-center">
        <p className="overline mb-3">In-House Installation</p>
        <h2 className="font-serif text-heading-lg text-brand-800 mb-4">
          Laying Tiles with Your Own Team?
        </h2>
        <p className="text-body-md text-brand-500 leading-relaxed">
          Maintenance teams and trades can follow the four-step carpet tile
          installation guide. For hospitality venues in Melbourne, Sydney, and
          Brisbane, Premrest can supply and install instead.{" "}
          <Link
            href="/how-to-install"
            className="font-medium text-accent hover:text-accent-hover underline underline-offset-4"
          >
            Read the installation guide
          </Link>
          .
        </p>
      </div>
    </Section>
  );
}
