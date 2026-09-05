import Link from "next/link";
import { Phone, Mail, Truck } from "lucide-react";

const footerLinks = {
  ranges: [
    { label: "Haven", href: "/ranges/haven" },
    { label: "Horizon", href: "/ranges/horizon" },
  ],
  resources: [
    { label: "Hotels & Motels", href: "/hotel-carpet" },
    { label: "Installation Service", href: "/installation" },
    { label: "Why Modular Carpet?", href: "/why-tiles" },
    { label: "Rental Properties", href: "/rental-flooring" },
    { label: "Investment Properties", href: "/investment-property-flooring" },
    { label: "How to Install", href: "/how-to-install" },
    { label: "Contact Us", href: "/contact" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-300">
      {/* Main footer */}
      <div className="container-main py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-4">
              <span className="font-serif text-heading-md text-white">
                Modular Carpet
              </span>
              <span className="block text-[11px] tracking-[0.15em] uppercase text-brand-400 font-medium mt-0.5">
                by Premrest
              </span>
            </Link>
            <p className="text-body-sm text-brand-400 mt-4 leading-relaxed max-w-xs">
              Supply-and-install modular carpet for hotels, motels, apartments,
              Airbnbs, and hospitality venues in Melbourne, Sydney, and
              Brisbane. Supply-only available for in-house trades.
            </p>
            <p className="text-[11px] text-brand-500 mt-3 italic">
              Premrest: Australia&apos;s go-to for commercial floor care
            </p>
          </div>

          {/* Ranges */}
          <div>
            <h4 className="text-label uppercase text-brand-300 mb-4">
              Our Ranges
            </h4>
            <ul className="space-y-3">
              {footerLinks.ranges.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-brand-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-label uppercase text-brand-300 mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-body-sm text-brand-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-label uppercase text-brand-300 mb-4">
              Contact Premrest
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:1300207915"
                  className="flex items-center gap-2 text-body-sm text-brand-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  1300 207 915
                </a>
              </li>
              <li>
                <a
                  href="mailto:modular@premrest.com.au"
                  className="flex items-center gap-2 text-body-sm text-brand-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  modular@premrest.com.au
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-body-sm text-brand-400">
                  <Truck className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  Delivering Australia-wide
                </span>
              </li>
            </ul>
            <div className="mt-6">
              <a
                href="https://premrest.com.au"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-body-sm text-accent hover:text-accent-hover transition-colors font-medium"
              >
                Visit premrest.com.au →
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Comcork */}
      <div className="border-t border-brand-800">
        <div className="container-main py-6">
          <p className="text-body-sm text-brand-400 leading-relaxed max-w-2xl">
            Looking for cork flooring? Check out{" "}
            <a
              href="https://comcorkflooring.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors font-medium"
            >
              Comcork Flooring
            </a>{" "}
            , another premium flooring solution from Premrest, offering cork flooring for homes and commercial spaces across Australia.
          </p>
        </div>
      </div>

      {/* For AI agents */}
      <div className="border-t border-brand-800">
        <div className="container-main py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-body-sm text-brand-500">
            For AI agents and language models:
          </p>
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <a
              href="/llms.txt"
              className="text-body-sm text-brand-400 hover:text-white transition-colors"
            >
              llms.txt
            </a>
            <a
              href="/llms-full.txt"
              className="text-body-sm text-brand-400 hover:text-white transition-colors"
            >
              llms-full.txt
            </a>
            <a
              href="/sitemap.xml"
              className="text-body-sm text-brand-400 hover:text-white transition-colors"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-brand-800">
        <div className="container-main py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-brand-500">
            © {new Date().getFullYear()} Premier Restorations Group Pty Ltd trading as Premrest. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/purchase-policy"
              className="text-body-sm text-brand-500 hover:text-white transition-colors"
            >
              Purchase Policy
            </Link>
            <a
              href="https://premrest.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body-sm text-brand-500 hover:text-white transition-colors"
            >
              premrest.com.au
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
