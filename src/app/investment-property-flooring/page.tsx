import { Metadata } from "next";
import { InvestmentPropertyClient } from "./investment-property-client";

export const metadata: Metadata = {
  title: "Carpet Tiles for Investment Properties | Outlasts Traditional Carpet",
  description:
    "The best carpet for investment properties. Commercial-grade carpet tiles with a 15-year warranty that outlasts tenants. Solution-dyed nylon, stain resistant, breathable backing. Professionally installed by Premrest. From $58.50/m².",
};

export default function InvestmentPropertyFlooringPage() {
  return <InvestmentPropertyClient />;
}
