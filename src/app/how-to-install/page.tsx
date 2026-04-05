import { Metadata } from "next";
import { HowToInstallClient } from "./how-to-install-client";

export const metadata: Metadata = {
  title: "How to Install DIY Carpet Tiles | Step-by-Step Guide",
  description:
    "Install premium carpet tiles yourself — no flooring installer needed. Step-by-step DIY guide for anyone handy. No special tools, no tradesperson. Carpet your room in a single afternoon.",
};

export default function HowToInstallPage() {
  return <HowToInstallClient />;
}
