import { Metadata } from "next";
import { HotelCarpetClient } from "./hotel-carpet-client";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";

export const metadata: Metadata = {
  title:
    "Hotel & Motel Carpet | Modular Tiles for Hospitality | Premrest Australia",
  description:
    "Commercial-grade modular carpet for hotels, motels, and serviced apartments. Replace damaged tiles without closing rooms, 15-year wear warranty, solution-dyed nylon. Supply-only or full supply-and-install in Melbourne, Sydney, and Brisbane.",
  alternates: { canonical: "https://www.modularcarpet.com.au/hotel-carpet" },
  openGraph: {
    title:
      "Hotel & Motel Carpet | Modular Tiles for Hospitality | Premrest Australia",
    description:
      "Commercial-grade modular carpet for hotels, motels, and serviced apartments. Spot-replace damaged tiles between guests. Supply-only or supply-and-install in Melbourne, Sydney, and Brisbane.",
    url: "https://www.modularcarpet.com.au/hotel-carpet",
    images: [{ url: "/images/lifestyle/hero-home.jpg", width: 1200, height: 630, alt: "Modular carpet for hotel and motel guest rooms" }],
  },
};

export default function HotelCarpetPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.modularcarpet.com.au" },
        { name: "Hotels", url: "https://www.modularcarpet.com.au/hotel-carpet" },
      ]} />
      <HotelCarpetClient />
    </>
  );
}
