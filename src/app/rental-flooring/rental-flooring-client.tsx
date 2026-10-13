"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { EnquiryForm } from "@/components/shared/enquiry-form";
import { PRICING, SHARED_SPECS } from "@/lib/data";

const benefits = [
  { title: "Repair local damage between tenancies", text: "Lift and replace affected tiles instead of replacing all the carpet in a room. Keep matching spare tiles from the original purchase; new batches can vary in colour." },
  { title: "Choose a service that suits your property", text: "Arrange supply-only Australia-wide for your existing flooring trade, or ask Premrest to quote measurement, supply and installation in Melbourne, Sydney or Brisbane." },
  { title: "Choose colours before committing", text: "Request free physical samples of Haven or Horizon. Compare them with your walls, lighting and existing finishes before choosing carpet for one property or a portfolio." },
];
const faqs = [
  { q: "Where can carpet tiles be used in a rental property?", a: "Bedrooms, living rooms, hallways and home offices are common uses. Carpet is not recommended for wet areas such as bathrooms and laundries. Ask Premrest to confirm suitability for your property and subfloor." },
  { q: "Can I replace damaged tiles between tenants?", a: "Individual tiles can be lifted and replaced when installed with a suitable pressure-sensitive adhesive. Keep matching spares from the original batch. Replacement tiles may look different if the surrounding carpet has worn or faded." },
  { q: "How much does the carpet cost?", a: `Supply is $${PRICING.pricePerSqm.toFixed(2)}/m² including GST, sold in ${PRICING.boxArea} m² boxes. Delivery is $${PRICING.shippingFlat} including GST Australia-wide. Allow for cutting waste and adhesive. Installation, old-floor removal and preparation are additional and quoted for your site.` },
  { q: "Do you install, or can my flooring trade do it?", a: "Premrest offers supply and installation in Melbourne, Sydney and Brisbane. Supply-only is available Australia-wide if you arrange a suitable trade. Ask us about preparation, adhesive and layout before installation." },
  { q: "Is it suitable for a damp concrete slab?", a: "The slab must meet the flooring and adhesive moisture requirements. Breathable felt backing does not remedy a damp slab. Ask for an assessment and resolve moisture issues before installation." },
  { q: "Do I need measurements before asking for a quote?", a: "No. Send your suburb and any approximate area or room details you know. Premrest can discuss the next steps. For samples, we will confirm colour selection and delivery details after your request." },
];

export function RentalFlooringClient() {
  return (
    <>
      <section className="bg-brand-900 text-white py-16 md:py-24">
        <div className="container-main max-w-5xl">
          <p className="overline text-accent-light mb-4">For landlords and property managers</p>
          <h1 className="font-serif text-display-md md:text-display-lg mb-6 text-balance">Carpet for Rental Properties — Replace Damaged Tiles Between Tenancies</h1>
          <p className="text-body-lg text-brand-200 max-w-3xl mb-8">Choose modular carpet for your rental bedrooms, living rooms and hallways. Repair local damage with matching spare tiles rather than re-carpeting a whole room. Supply Australia-wide; installation in Melbourne, Sydney and Brisbane.</p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild><Link href="#rental-enquiry">Get a rental property quote</Link></Button>
            <Button size="lg" variant="outline_white" asChild><Link href="/contact?request=samples#enquiry">Request free samples</Link></Button>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="font-serif text-heading-lg mb-8">Plan for the next tenancy, and the repair after that.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {benefits.map((benefit) => <div key={benefit.title} className="bg-brand-50 border border-brand-200 p-6 rounded-lg"><h3 className="font-semibold text-heading-sm mb-3">{benefit.title}</h3><p className="text-body-md text-brand-600">{benefit.text}</p></div>)}
          </div>
        </div>
      </section>
      <section className="section-padding bg-brand-100">
        <div className="container-main grid md:grid-cols-2 gap-10">
          <div><p className="overline mb-4">Clear supply pricing</p><h2 className="font-serif text-heading-lg mb-4">${PRICING.pricePerSqm.toFixed(2)}/m² including GST</h2><p className="text-body-md text-brand-600 mb-4">Sold in {PRICING.boxArea} m² boxes (${(PRICING.pricePerSqm * PRICING.boxArea).toFixed(2)} incl. GST). Delivery: ${PRICING.shippingFlat} incl. GST Australia-wide. Allow for cutting waste and adhesive.</p><p className="text-body-md text-brand-600">Need installation? Ask for a total quote that includes carpet, laying, removal and any site preparation. The laying rate alone is not the finished-floor price.</p></div>
          <div className="bg-white rounded-lg p-6 border border-brand-200"><h3 className="font-serif text-heading-md mb-4">Compare Haven and Horizon</h3><ul className="text-body-md text-brand-600 space-y-2"><li>{SHARED_SPECS.pileFibre} fibre</li><li>{SHARED_SPECS.tileDimensions} tiles</li><li>{SHARED_SPECS.backing} backing</li><li>15-year manufacturer wear warranty — ask for the terms and exclusions</li></ul><div className="flex gap-6 mt-6"><Link className="text-accent font-semibold underline" href="/ranges/haven">View Haven</Link><Link className="text-accent font-semibold underline" href="/ranges/horizon">View Horizon</Link></div></div>
        </div>
      </section>
      <section id="rental-enquiry" className="section-padding bg-white scroll-mt-24">
        <div className="container-main grid md:grid-cols-2 gap-10">
          <div><h2 className="font-serif text-heading-lg mb-4">Get a quote for your rental property</h2><p className="text-body-lg text-brand-600 mb-4">One property or a portfolio? Tell us what you need. You can request pricing, samples or advice without choosing a range first.</p><p className="text-body-md text-brand-600">Prefer to speak? <a className="text-accent underline" href="tel:1300207915">1300 207 915</a>. We reply to enquiries within one business day.</p><p className="mt-6 text-body-md"><Link className="underline text-accent" href="/investment-property-flooring">More about investment property flooring</Link></p></div>
          <EnquiryForm />
        </div>
      </section>
      <section className="section-padding bg-brand-100">
        <div className="container-main max-w-4xl"><h2 className="font-serif text-heading-lg mb-8">Rental carpet questions</h2><div className="space-y-4">{faqs.map((faq) => <details key={faq.q} className="bg-white rounded-lg p-5 border border-brand-200"><summary className="font-semibold cursor-pointer">{faq.q}</summary><p className="mt-3 text-body-md text-brand-600">{faq.a}</p></details>)}</div></div>
      </section>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", mainEntity: faqs.map((faq) => ({ "@type": "Question", name: faq.q, acceptedAnswer: { "@type": "Answer", text: faq.a } })) }) }} />
    </>
  );
}
