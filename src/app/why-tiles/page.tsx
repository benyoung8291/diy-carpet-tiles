import { Metadata } from "next";
import { WhyTilesClient } from "./why-tiles-client";

export const metadata: Metadata = {
  title: "Why Carpet Tiles?",
  description:
    "Discover why modular carpet tiles are the smarter choice for Australian homes. Seamless look, DIY installation, replaceable tiles, breathable backing, and a 15-year warranty.",
};

export default function WhyTilesPage() {
  return <WhyTilesClient />;
}
