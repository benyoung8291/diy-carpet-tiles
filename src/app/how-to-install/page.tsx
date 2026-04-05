import { Metadata } from "next";
import { HowToInstallClient } from "./how-to-install-client";

export const metadata: Metadata = {
  title: "How to Install Carpet Tiles",
  description:
    "Step-by-step DIY guide to installing Modular Carpet tiles. No special tools or professional help needed. Install beautiful carpet in an afternoon.",
};

export default function HowToInstallPage() {
  return <HowToInstallClient />;
}
