import { Metadata } from "next";
import { InvestmentPropertyClient } from "./investment-property-client";

export const metadata: Metadata = {
  title: "Carpet Tiles for Investment Properties | Smart Investor Flooring",
  description:
    "The best flooring for investment properties. DIY carpet tiles that maximise rental yield and minimise turnover costs. Replace damaged tiles instead of re-carpeting rooms. Install yourself — no tradesperson needed. From $58.50/m².",
};

export default function InvestmentPropertyFlooringPage() {
  return <InvestmentPropertyClient />;
}
