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
  pricePerSqm: 58.5, // $58.50 inc GST per m²
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
      "Fireside retreat — timeless tradition meets modern sophistication. Your home's sanctuary of style and serenity.",
    accentColor: "#C4874A",
    heroImage: "/images/ranges/haven/hero.jpg",
    galleryImages: [
      "/images/ranges/haven/gallery/room-1.jpg",
      "/images/ranges/haven/gallery/room-2.jpg",
      "/images/ranges/haven/gallery/room-3.jpg",
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
      "/images/ranges/horizon/gallery/room-3.jpg",
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
    title: "Truly Seamless",
    description:
      "Looks and feels exactly like traditional broadloom carpet. Your guests won't know it's tiles — until you tell them.",
  },
  {
    icon: "Wrench",
    title: "DIY Luxury",
    description:
      "Anyone can install it. Simply press tiles onto pressure-sensitive adhesive. No stretching, no power tools, no installer needed.",
  },
  {
    icon: "RefreshCw",
    title: "Replace, Don't Redo",
    description:
      "Spill red wine? Pet accident? Simply lift the damaged tile and replace it in minutes. No more re-carpeting entire rooms.",
  },
  {
    icon: "Sun",
    title: "Fade-Resistant Nylon",
    description:
      "Solution-dyed nylon fibre locks colour in at a molecular level. Your carpet stays vibrant year after year, even in sun-drenched rooms.",
  },
  {
    icon: "Droplets",
    title: "Breathable Backing",
    description:
      "Recycled PET felt backing lets your subfloor breathe. Safe to install over moisture-affected concrete — no trapped moisture, no mould.",
  },
  {
    icon: "Volume2",
    title: "Acoustic Comfort",
    description:
      "Bonded felt underlay delivers excellent sound absorption (0.25 NRC). Quieter rooms, warmer underfoot, better living.",
  },
  {
    icon: "Shield",
    title: "15-Year Warranty",
    description:
      "Commercial-grade durability with a 15-year wear warranty. Built for real life — kids, pets, entertaining, everyday living.",
  },
  {
    icon: "Leaf",
    title: "Sustainable Choice",
    description:
      "Recycled PET felt backing and modular design means less waste. Replace tiles, not rooms. Better for your home, better for the planet.",
  },
];

export const INSTALLATION_STEPS = [
  {
    step: 1,
    title: "Prepare Your Subfloor",
    description:
      "Ensure your subfloor is clean, dry, and level. Our breathable felt backing means you can install over most existing hard floors — even moisture-affected concrete.",
    icon: "ClipboardCheck",
  },
  {
    step: 2,
    title: "Apply Pressure-Sensitive Adhesive",
    description:
      "Roll the PSA adhesive evenly across your subfloor. Let it tack up until it's dry to the touch but still sticky — typically 30 to 60 minutes depending on conditions.",
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
      "Use a sharp utility knife to trim edge tiles to fit. The felt backing cuts cleanly and easily. That's it — walk on your beautiful new floor immediately.",
    icon: "Scissors",
  },
];

export const TESTIMONIALS = [
  {
    quote:
      "We have a golden retriever and two kids under five. Being able to replace individual tiles when accidents happen is an absolute game changer. The carpet looks stunning too.",
    name: "Sarah M.",
    location: "Melbourne, VIC",
    range: "Haven — Hearth",
  },
  {
    quote:
      "I installed the entire living room myself in a single afternoon. No tradesperson, no stress. It looks like professional broadloom and feels incredibly luxurious underfoot.",
    name: "James K.",
    location: "Sydney, NSW",
    range: "Horizon — Brunswick",
  },
  {
    quote:
      "Our concrete slab had moisture issues and every carpet installer said no. Modular Carpet's breathable backing was the only solution that worked. Three years in, still perfect.",
    name: "Linda & Peter D.",
    location: "Brisbane, QLD",
    range: "Haven — Hearth",
  },
];
