import { Metadata } from "next";
import { HotelCarpetClient } from "./hotel-carpet-client";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "Hotel Carpet Solution | Stop Disruptions & Costly Repairs",
  description:
    "The modular carpet solution for hotels. Replace damaged tiles without closing rooms. Solution-dyed nylon resists stains, fading and heavy traffic. 15-year warranty. Phased rollouts and volume pricing available. Professionally installed by Premrest.",
  alternates: { canonical: "https://modularcarpet.com.au/hotel-carpet" },
  openGraph: {
    title: "Hotel Carpet Solution | Stop Disruptions & Costly Repairs",
    description: "The modular carpet solution for hotels. Replace damaged tiles without closing rooms. Phased rollouts and volume pricing available.",
    url: "https://modularcarpet.com.au/hotel-carpet",
    images: [{ url: "/images/lifestyle/hero-home.jpg", width: 1200, height: 630, alt: "Modular carpet solution for hotels" }],
  },
};

export default function HotelCarpetPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://modularcarpet.com.au" },
        { name: "Hotels", url: "https://modularcarpet.com.au/hotel-carpet" },
      ]} />
      <HotelCarpetClient />
    </>
  );
}
