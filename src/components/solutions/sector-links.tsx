import Link from "next/link";
import { sectorPages } from "@/lib/sector-pages";

export function SectorLinks() {
  return (
    <section className="section-padding bg-white">
      <div className="container-main">
        <div className="max-w-3xl mb-10"><p className="overline mb-4">Flooring for your property type</p><h2 className="font-serif text-heading-lg text-brand-800 mb-4">Start with a flooring brief for your sector</h2><p className="text-body-lg text-brand-600">Explore room selection, maintenance and installation considerations for your property, then request samples or a tailored quote.</p></div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">{sectorPages.map((page) => <Link key={page.slug} href={`/${page.slug}`} className="block rounded-lg border border-brand-200 bg-brand-50 p-6 hover:border-accent hover:shadow-md transition-all"><h3 className="font-serif text-heading-sm text-brand-800 mb-3">{page.label}</h3><p className="text-body-sm text-brand-600 mb-4">{page.audience}</p><span className="text-body-sm text-accent font-semibold">Explore flooring options →</span></Link>)}</div>
      </div>
    </section>
  );
}
