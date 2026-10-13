import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { EnquiryForm } from "@/components/shared/enquiry-form";
import { getSectorPage, type SectorPage } from "@/lib/sector-pages";

const origin = "https://www.modularcarpet.com.au";

export function sectorMetadata(page: SectorPage): Metadata {
  const url = `${origin}/${page.slug}`;
  const image = { url: "/images/ranges/haven/hero.jpg", width: 1200, height: 630, alt: "Haven carpet range interior example" };
  return {
    title: { absolute: page.title },
    description: page.description,
    alternates: { canonical: url },
    openGraph: { type: "website", title: page.title, description: page.description, url, images: [image] },
    twitter: { card: "summary_large_image", title: page.title, description: page.description, images: [image.url] },
  };
}

export function SectorLandingPage({ page }: { page: SectorPage }) {
  const url = `${origin}/${page.slug}`;
  const sampleUrl = `/contact?request=samples&sector=${page.slug}#enquiry`;
  const schema = [
    {
      "@context": "https://schema.org", "@type": "Service", "@id": `${url}#service`,
      name: page.heading, description: page.description, url,
      serviceType: `${page.label} carpet supply and project enquiries`,
      provider: { "@type": "Organization", name: "Premrest", url: "https://premrest.com.au" },
      areaServed: { "@type": "Country", name: "Australia" },
    },
    {
      "@context": "https://schema.org", "@type": "FAQPage",
      mainEntity: page.faqs.map((faq) => ({ "@type": "Question", name: faq.question, acceptedAnswer: { "@type": "Answer", text: faq.answer } })),
    },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={[{ name: "Home", url: origin }, { name: page.label, url }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema).replace(/</g, "\\u003c") }} />
      <section className="bg-brand-900 py-12 md:py-20">
        <div className="container-main">
          <nav aria-label="Breadcrumb" className="text-body-sm text-brand-300 mb-8"><Link className="underline underline-offset-4" href="/">Home</Link><span aria-hidden="true"> / </span><span>{page.label}</span></nav>
          <div className="max-w-4xl">
            <p className="overline text-accent-light mb-4">{page.audience}</p>
            <h1 className="font-serif text-display-md md:text-display-lg text-white mb-6 text-balance">{page.heading}</h1>
            <p className="text-body-lg text-brand-200 leading-relaxed mb-8 max-w-3xl">{page.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg"><Link href="#project-enquiry">Request a project quote</Link></Button>
              <Button asChild size="lg" variant="outline_white"><Link href={sampleUrl}>Request free carpet samples</Link></Button>
            </div>
            <p className="text-body-sm text-brand-300 mt-6">Supply Australia-wide · Installation in Melbourne, Sydney and Brisbane · <a className="underline underline-offset-4" href="tel:1300207915">1300 207 915</a></p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl mb-10"><p className="overline mb-4">A practical carpet brief</p><h2 className="font-serif text-heading-lg text-brand-800 mb-4">{page.overviewHeading}</h2><p className="text-body-lg text-brand-600 leading-relaxed">{page.overview}</p></div>
          <div className="grid md:grid-cols-3 gap-6">{page.benefits.map((benefit) => <article key={benefit.title} className="bg-brand-50 border border-brand-200 rounded-lg p-6"><h3 className="font-serif text-heading-sm text-brand-800 mb-3">{benefit.title}</h3><p className="text-body-md text-brand-600 leading-relaxed">{benefit.body}</p></article>)}</div>
        </div>
      </section>
      <section className="section-padding bg-brand-100">
        <div className="container-main grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div><h2 className="font-serif text-heading-lg text-brand-800 mb-6">{page.areasHeading}</h2><div className="space-y-6">{page.areas.map((area) => <div key={area.title}><h3 className="font-semibold text-body-lg text-brand-800 mb-2">{area.title}</h3><p className="text-body-md text-brand-600 leading-relaxed">{area.body}</p></div>)}</div></div>
          <div className="bg-white rounded-lg border border-brand-200 p-6 md:p-8"><p className="overline mb-4">Project checklist</p><h2 className="font-serif text-heading-md text-brand-800 mb-5">{page.checklistHeading}</h2><ul className="list-disc pl-5 space-y-3 text-body-md text-brand-600">{page.checklist.map((item) => <li key={item}>{item}</li>)}</ul><p className="text-body-sm text-brand-500 mt-6">An outline is enough to start. You can send more detail after we discuss the scope.</p></div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-main"><div className="max-w-3xl mb-10"><p className="overline mb-4">Compare physical samples</p><h2 className="font-serif text-heading-lg text-brand-800 mb-4">Explore Haven and Horizon</h2><p className="text-body-md text-brand-600">Compare colour and texture in your property, then review the proposed range against your project requirements. Ask for the product data and manufacturer wear-warranty terms before specification.</p></div>
          <div className="grid sm:grid-cols-2 gap-6 max-w-4xl">{["haven", "horizon"].map((range) => <Link key={range} href={`/ranges/${range}`} className="group block overflow-hidden rounded-lg border border-brand-200 bg-brand-50 hover:border-accent transition-colors"><div className="relative aspect-[3/2]"><Image src={`/images/ranges/${range}/hero.jpg`} alt={`${range === "haven" ? "Haven" : "Horizon"} carpet range interior example`} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" /></div><div className="p-5"><h3 className="font-serif text-heading-md text-brand-800 capitalize mb-2">{range}</h3><p className="text-accent font-semibold">View colours and request a quote →</p></div></Link>)}</div>
          <p className="mt-6 text-body-sm text-brand-500">Range imagery illustrates the carpet collections. <Link className="underline text-accent" href={sampleUrl}>Request samples for your own space.</Link></p>
        </div>
      </section>
      <section id="project-enquiry" className="section-padding bg-brand-100 scroll-mt-24">
        <div className="container-main grid lg:grid-cols-2 gap-10 lg:gap-16">
          <div><p className="overline mb-4">Talk to Premrest</p><h2 className="font-serif text-heading-lg text-brand-800 mb-4">{page.quoteHeading}</h2><p className="text-body-lg text-brand-600 leading-relaxed mb-6">{page.quoteIntro}</p><p className="text-body-md text-brand-600 mb-6">Supply-only is available Australia-wide for your flooring trade. Premrest offers supply and installation in Melbourne, Sydney and Brisbane. Location, scope and scheduling are confirmed in your quote.</p><p className="text-body-md text-brand-600 mb-5">We reply within one business day. Prefer to speak? <a className="text-accent underline" href="tel:1300207915">Call 1300 207 915</a>.</p><Link className="text-accent underline font-medium" href="/installation">Read about installation and project scope</Link></div>
          <div className="bg-white rounded-lg border border-brand-200 p-6 md:p-8"><EnquiryForm sector={page.slug} /></div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-main max-w-4xl"><h2 className="font-serif text-heading-lg text-brand-800 mb-8">{page.label} flooring questions</h2><div className="space-y-4">{page.faqs.map((faq) => <details key={faq.question} className="bg-brand-50 border border-brand-200 rounded-lg p-5"><summary className="font-semibold text-brand-800 cursor-pointer">{faq.question}</summary><p className="text-body-md text-brand-600 leading-relaxed mt-3">{faq.answer}</p></details>)}</div></div>
      </section>
      <section className="bg-brand-100 py-12"><div className="container-main"><h2 className="font-serif text-heading-md text-brand-800 mb-6">Related flooring briefs</h2><div className="grid sm:grid-cols-3 gap-4">{page.related.map((slug) => { const related = getSectorPage(slug); return <Link key={slug} href={`/${slug}`} className="bg-white border border-brand-200 rounded-lg p-5 text-brand-700 hover:border-accent transition-colors"><span className="font-semibold">{related.label}</span><span className="block mt-2 text-body-sm text-accent">Explore flooring options →</span></Link>; })}</div><p className="mt-6 text-body-sm"><Link className="text-accent underline" href="/rental-flooring">Rental property carpet</Link><span aria-hidden="true"> · </span><Link className="text-accent underline" href="/hotel-carpet">Hotel and motel carpet</Link></p></div></section>
    </>
  );
}
