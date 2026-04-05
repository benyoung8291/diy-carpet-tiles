import { Metadata } from "next";
import { HotelCarpetClient } from "./hotel-carpet-client";

export const metadata: Metadata = {
  title: "Hotel Carpet Solution | Stop Disruptions & Costly Repairs",
  description:
    "The modular carpet solution for hotels. Replace damaged tiles without closing rooms. Solution-dyed nylon resists stains, fading and heavy traffic. 15-year warranty. Phased rollouts and volume pricing available. Professionally installed by Premrest.",
};

export default function HotelCarpetPage() {
  return <HotelCarpetClient />;
}
