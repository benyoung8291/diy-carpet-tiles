import { SectorLandingPage, sectorMetadata } from "@/components/solutions/sector-landing-page";
import { getSectorPage } from "@/lib/sector-pages";

const page = getSectorPage("government-housing-flooring");
export const metadata = sectorMetadata(page);

export default function Page() {
  return <SectorLandingPage page={page} />;
}
