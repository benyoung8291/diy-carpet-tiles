import Link from "next/link";
import { Button } from "@/components/ui/button";

export function ProjectStart() {
  return (
    <section className="section-padding bg-brand-100">
      <div className="container-main grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="overline mb-4">For landlords and property managers</p>
          <h2 className="font-serif text-heading-lg text-brand-800 mb-4">
            See the carpet. Choose your colours. Get a quote.
          </h2>
          <p className="text-body-md text-brand-600 mb-6">
            Start with free physical samples of Haven or Horizon. Compare colours
            in your rental property, then ask us to quote the area and installation you need.
            You don&apos;t need measurements to make a first enquiry.
          </p>
          <Button asChild><Link href="/contact?request=samples#enquiry">Request free carpet samples</Link></Button>
        </div>
        <div className="bg-white border border-brand-200 rounded-lg p-6 md:p-8 space-y-5">
          <div>
            <h3 className="font-semibold text-brand-800">A quote tailored to your property</h3>
            <p className="text-body-sm text-brand-500">Tell us your suburb, approximate carpet area and whether you need supply-only or installation. We’ll confirm the right scope for your project.</p>
          </div>
          <div>
            <h3 className="font-semibold text-brand-800">Need installation as well?</h3>
            <p className="text-body-sm text-brand-500">Available in Melbourne, Sydney and Brisbane. Your quote covers the carpet and installation you need, including any removal, preparation and transitions.</p>
          </div>
          <Link className="text-accent font-semibold underline underline-offset-4" href="/contact">Get a quote for your property →</Link>
          <p className="text-body-sm text-brand-500"><Link className="underline" href="/rental-flooring">Carpet for rental properties</Link> · <Link className="underline" href="/installation">Installation options</Link></p>
        </div>
      </div>
    </section>
  );
}
