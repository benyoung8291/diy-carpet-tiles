import { Section, SectionHeader } from "@/components/ui/section";

const faqs = [
  {
    q: "What is modular carpet, and how is it different from broadloom?",
    a: "Modular carpet is precision-cut tile (typically 500 × 1000 mm) installed with pressure-sensitive adhesive in an ashlar (brick-bond) layout. Unlike rolled broadloom, individual tiles can be lifted and replaced if they're damaged, and the floor can be repaired without a full re-carpet. Once installed it is designed to look and feel like premium broadloom.",
  },
  {
    q: "Who is this product for?",
    a: "Landlords and property managers can use modular carpet in rental bedrooms, living rooms and hallways, keeping matching spare tiles for repairs between tenancies. The ranges also suit hospitality venues and homes. Ask Premrest about suitability for your property.",
  },
  {
    q: "Do I install it myself, or do you install for me?",
    a: "Premrest offers supply-and-install in Melbourne, Sydney, and Brisbane with project-specific pricing and site preparation (preparation, levelling, transitions, removal of existing flooring) itemised separately in the quote. Supply-only is available if you have an in-house trade or maintenance team — the same product ships direct from the warehouse.",
  },
  {
    q: "Do the tiles look like real carpet, or do you see grid lines?",
    a: "Modern modular tiles are designed to look like premium broadloom once installed. The ashlar (brick-bond) layout has no continuous grid line for the eye to track, and consistent pile direction across every tile means the floor reflects light as a single surface. The Haven and Horizon ranges are specified for hospitality and considered residential interiors - not 1990s offices.",
  },
  {
    q: "What happens when a tile gets damaged or stained?",
    a: "Lift the damaged tile and press in a fresh one from your spare-tile inventory. A damaged tile can be swapped quickly, leaving the surrounding tiles undisturbed. Batch-matched tiles keep the repair consistent with the rest of the floor. There's no equivalent in broadloom - which is why hotels, motels, and savvy landlords specify modular.",
  },
  {
    q: "Is the carpet rated for hotel and commercial use?",
    a: "Yes. The Haven and Horizon ranges are commercial-grade, solution-dyed nylon backed by the manufacturer's wear warranty. The same product specified for hotel guest rooms and corridors is the product that ships into Australian homes, rentals, and motels - the warranty doesn't change between use cases.",
  },
  {
    q: "Can it be installed over concrete slabs, including moisture-affected slabs?",
    a: "Concrete can be suitable when the subfloor is clean, dry, level and meets the flooring and adhesive requirements. The recycled PET felt backing does not fix a damp slab. Ask Premrest to assess moisture and preparation before installation.",
  },
  {
    q: "How do I order, request samples, or get a quote?",
    a: "Free physical samples ship Australia-wide through the contact page. Direct supply orders are placed via the order form on each range page (with an optional installation-quote checkbox if you'd like both quoted together). For larger projects - hotels, motels, multi-property landlords, considered home renovations - the contact form lets you flag whether you want supply only, supply and install, or are still deciding.",
  },
];

export function FaqSection() {
  return (
    <Section background="linen">
      <SectionHeader
        overline="Common Questions"
        title="Everything You Need to Know About Modular Carpet"
      />
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq) => (
          <div
            key={faq.q}
            className="bg-white rounded-lg p-6 border border-brand-200"
          >
            <h3 className="font-semibold text-brand-800 text-body-lg mb-2">
              {faq.q}
            </h3>
            <p className="text-body-md text-brand-500 leading-relaxed">
              {faq.a}
            </p>
          </div>
        ))}
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          }),
        }}
      />
    </Section>
  );
}
