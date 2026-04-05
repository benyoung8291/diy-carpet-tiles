import { Metadata } from "next";
import { WhyTilesClient } from "./why-tiles-client";

export const metadata: Metadata = {
  title: "Why Carpet Tiles? | DIY Carpet You Install Yourself",
  description:
    "Sick of expensive carpet retailers and installer quotes? Modular carpet tiles look like broadloom but you install them yourself in an afternoon. No tradesperson needed. 15-year commercial warranty.",
};

export default function WhyTilesPage() {
  return <WhyTilesClient />;
}
