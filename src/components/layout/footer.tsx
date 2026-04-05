import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = {
  ranges: [
    { label: "Inglenook", href: "/ranges/inglenook" },
    { label: "Harmonia", href: "/ranges/harmonia" },
    { label: "Urbicus", href: "/ranges/urbicus" },
  ],
  resources: [
    { label: "Why Carpet Tiles?", href: "/why-tiles" },
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
                Premium Carpet Tiles by Premrest
              </span>
            </Link>
            <p className="text-body-sm text-brand-400 mt-4 leading-relaxed max-w-xs">
              Seamless modular carpet tiles for Australian homes.
              The look of broadloom, the freedom of tiles.
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
                  href="tel:1300773677"
                  className="flex items-center gap-2 text-body-sm text-brand-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  1300 PREMREST (1300 773 677)
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@premrest.com.au"
                  className="flex items-center gap-2 text-body-sm text-brand-400 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 flex-shrink-0" />
                  info@premrest.com.au
                </a>
              </li>
              <li>
                <span className="flex items-start gap-2 text-body-sm text-brand-400">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  Melbourne, Australia
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

      {/* Bottom bar */}
      <div className="border-t border-brand-800">
        <div className="container-main py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-body-sm text-brand-500">
            © {new Date().getFullYear()} Premrest Pty Ltd. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
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
