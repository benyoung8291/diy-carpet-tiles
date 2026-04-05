export interface ColorWay {
  name: string;
  code: string;
  slug: string;
  hex: string; // Approximate color for the swatch background
}

export interface ProductRange {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  inspiration: string;
  accentColor: string;
  heroImage: string;
  galleryImages: string[];
  colorways: ColorWay[];
}

export const PRICING = {
  pricePerSqm: 66.55, // $66.55 inc GST per m²
  boxArea: 5, // 5 m² per box (10 tiles per box)
  tilesPerBox: 10,
  tileArea: 0.5, // 500mm × 1000mm = 0.5 m²
  shippingFlat: 55, // $55 inc GST flat rate shipping
  defaultWastage: 10, // 10% recommended
};

export const SHARED_SPECS = {
  tileDimensions: "500 × 1000 mm",
  thickness: "11 mm (±10%)",
  pileFibre: "Solution-dyed nylon",
  backing: "Breathable recycled PET felt",
  acousticRating: "0.25 NRC",
  warranty: "15-year commercial-grade wear warranty",
  layout: "Ashlar (brick-bond) recommended",
  installation: "Pressure-sensitive adhesive (PSA)",
  suitability: "Residential & light commercial",
};

export const ranges: ProductRange[] = [
  {
    slug: "haven",
    name: "Haven",
    tagline: "Fireside Retreat, Modern Sophistication",
    description:
      "With its rich, high-low textured loop pattern, Haven brings the warmth and comfort of a fireside retreat into your home. Eight carefully curated colourways range from deep charcoals to soft ambers, creating a sanctuary of style and serenity in every room.",
    inspiration:
      "Fireside retreat - timeless tradition meets modern sophistication. Your home's sanctuary of style and serenity.",
    accentColor: "#C4874A",
    heroImage: "/images/ranges/haven/hero.jpg",
    galleryImages: [
      "/images/ranges/haven/gallery/room-1.jpg",
      "/images/ranges/haven/gallery/room-2.jpg",
    ],
    colorways: [
      { name: "Hearth", code: "IN01", slug: "hearth", hex: "#8B6E4E" },
      { name: "Smoke", code: "IN02", slug: "smoke", hex: "#8A8580" },
      { name: "Spark", code: "IN03", slug: "spark", hex: "#B5946B" },
      { name: "Glow", code: "IN04", slug: "glow", hex: "#C4A67D" },
      { name: "Kettle", code: "IN05", slug: "kettle", hex: "#5C5550" },
      { name: "Smoulder", code: "IN06", slug: "smoulder", hex: "#6B5D52" },
      { name: "Crackle", code: "IN07", slug: "crackle", hex: "#7A6E63" },
      { name: "Cinder", code: "IN08", slug: "cinder", hex: "#4A4440" },
    ],
  },
  {
    slug: "horizon",
    name: "Horizon",
    tagline: "Australian Energy, Vibrant Living",
    description:
      "Named after vibrant Australian suburbs, Horizon celebrates the energy, architecture, and character of neighbourhood living. With its plush broadloom feel and eight biophilic-inspired designs, this range transforms any room into a statement of modern Australian style.",
    inspiration:
      "Celebrates the energy and character of Australian homes and suburbs.",
    accentColor: "#4A6FA5",
    heroImage: "/images/ranges/horizon/hero.jpg",
    galleryImages: [
      "/images/ranges/horizon/gallery/room-1.jpg",
      "/images/ranges/horizon/gallery/room-2.jpg",
    ],
    colorways: [
      { name: "Bowden", code: "UB01", slug: "bowden", hex: "#7A7570" },
      { name: "Brunswick", code: "UB02", slug: "brunswick", hex: "#5A6A5A" },
      { name: "Alexandria", code: "UB03", slug: "alexandria", hex: "#8A8078" },
      { name: "Newstead", code: "UB04", slug: "newstead", hex: "#A09888" },
      { name: "Leederville", code: "UB05", slug: "leederville", hex: "#6A7A8A" },
      { name: "Parap", code: "UB06", slug: "parap", hex: "#9A8A70" },
      { name: "Braddon", code: "UB07", slug: "braddon", hex: "#606A68" },
      { name: "Newtown", code: "UB08", slug: "newtown", hex: "#8A7A6A" },
    ],
  },
];

export function getRangeBySlug(slug: string): ProductRange | undefined {
  return ranges.find((r) => r.slug === slug);
}

export const BENEFITS = [
  {
    icon: "Eye",
    title: "Looks Like Broadloom",
    description:
      "Forget everything you know about carpet tiles. These aren't office squares - they're precision-engineered to look and feel identical to traditional broadloom carpet.",
  },
  {
    icon: "Wrench",
    title: "Install It Yourself",
    description:
      "No carpet installer, no retailer markup, no waiting weeks for a tradesperson. Press tiles onto adhesive and walk on them immediately. Anyone handy can do it in an afternoon.",
  },
  {
    icon: "RefreshCw",
    title: "Replace, Don't Re-Carpet",
    description:
      "With traditional carpet, one stain means re-carpeting the entire room. With Modular Carpet, lift the damaged tile and swap in a fresh one in 60 seconds.",
  },
  {
    icon: "Sun",
    title: "Fade-Resistant Nylon",
    description:
      "Solution-dyed nylon locks colour in at a molecular level. Perfect for sun-drenched Australian living rooms - no fading, no colour loss, year after year.",
  },
  {
    icon: "Droplets",
    title: "Safe Over Concrete Slabs",
    description:
      "Traditional carpet traps moisture and breeds mould. Our breathable recycled PET felt backing lets your concrete slab breathe - solving the #1 carpet problem in Australian homes.",
  },
  {
    icon: "Volume2",
    title: "Built-In Acoustic Underlay",
    description:
      "No separate underlay to buy or install. The bonded felt backing delivers 0.25 NRC sound absorption - quieter rooms, warmer underfoot, less echo.",
  },
  {
    icon: "Shield",
    title: "15-Year Warranty",
    description:
      "These tiles are rated for commercial offices and retail. In your home, they'll outlast any broadloom. 15-year wear warranty - built for kids, pets, and real life.",
  },
  {
    icon: "Leaf",
    title: "Less Waste, Smarter Design",
    description:
      "Damaged carpet usually means the whole room goes to landfill. With modular tiles, you replace one tile - not the floor. Recycled PET backing. Less waste. Smarter living.",
  },
];

export const INSTALLATION_STEPS = [
  {
    step: 1,
    title: "Prepare Your Subfloor",
    description:
      "Ensure your subfloor is clean, dry, and level. Our breathable felt backing means you can install over most existing hard floors - even moisture-affected concrete.",
    icon: "ClipboardCheck",
  },
  {
    step: 2,
    title: "Apply Pressure-Sensitive Adhesive",
    description:
      "Roll the PSA adhesive evenly across your subfloor. Let it tack up until it's dry to the touch but still sticky - typically 30 to 60 minutes depending on conditions.",
    icon: "Paintbrush",
  },
  {
    step: 3,
    title: "Lay Your Tiles",
    description:
      "Starting from the centre of the room, press tiles firmly into the adhesive in an ashlar (brick-bond) pattern. The tiles grip immediately but can be repositioned within minutes.",
    icon: "LayoutGrid",
  },
  {
    step: 4,
    title: "Trim & Finish",
    description:
      "Use a sharp utility knife to trim edge tiles to fit. The felt backing cuts cleanly and easily. That's it - walk on your beautiful new floor immediately.",
    icon: "Scissors",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "We got three quotes from carpet retailers - $4,000+ installed. With Modular Carpet I did the living room myself for under $1,500. Looks identical to broadloom and I had a beer in hand by 4pm.",
    name: "James K.",
    location: "Sydney, NSW",
    range: "Horizon - Brunswick",
  },
  {
    quote:
      "We have a golden retriever and two kids under five. Last month I replaced a stained tile in 30 seconds. With traditional carpet we'd be looking at re-carpeting the whole room. Game changer.",
    name: "Sarah M.",
    location: "Melbourne, VIC",
    range: "Haven - Hearth",
  },
  {
    quote:
      "As a landlord with six rentals, this is the only flooring that makes sense. Tenants damage one area? I swap tiles between tenancies instead of replacing the whole room. Pays for itself.",
    name: "Linda & Peter D.",
    location: "Brisbane, QLD",
    range: "Haven - Hearth",
  },
];
