import { Metadata } from "next";
import { RentalFlooringClient } from "./rental-flooring-client";

export const metadata: Metadata = {
  title: "Carpet Tiles for Rental Properties | DIY Rental Flooring",
  description:
    "The best flooring for rental properties. DIY carpet tiles landlords and tenants can install themselves - no tradesperson needed. Replace damaged tiles between tenancies instead of re-carpeting entire rooms. 15-year warranty.",
};

export default function RentalFlooringPage() {
  return <RentalFlooringClient />;
}
