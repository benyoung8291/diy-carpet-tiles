// Keep the menu and client-side form context small; full page copy stays server-side.
export const sectorNavigation = [
  { slug: "government-housing-flooring", label: "Government Housing" },
  { slug: "assisted-living-flooring", label: "Assisted Living" },
  { slug: "retirement-living-flooring", label: "Retirement Living" },
  { slug: "airbnb-flooring", label: "Airbnb & Holiday Rentals" },
  { slug: "student-accommodation-flooring", label: "Student Accommodation" },
  { slug: "build-to-rent-flooring", label: "Build-to-Rent" },
  { slug: "serviced-apartment-flooring", label: "Serviced Apartments" },
  { slug: "pet-friendly-rental-flooring", label: "Pet-Friendly Rentals" },
] as const;

export function isSectorSlug(value: string): boolean {
  return sectorNavigation.some((sector) => sector.slug === value);
}
