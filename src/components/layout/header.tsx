"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Hotels & Motels", href: "/hotel-carpet" },
  { label: "Installation", href: "/installation" },
  {
    label: "Our Ranges",
    children: [
      { label: "Haven", href: "/ranges/haven" },
      { label: "Horizon", href: "/ranges/horizon" },
    ],
  },
  { label: "Why Tiles?", href: "/why-tiles" },
  {
    label: "Solutions",
    children: [
      { label: "Hotels & Motels", href: "/hotel-carpet" },
      { label: "Rental Properties", href: "/rental-flooring" },
      { label: "Investment Properties", href: "/investment-property-flooring" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-brand-200">
      <div className="container-main flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex flex-col">
            <span className="font-serif text-heading-sm text-brand-800 leading-none">
              Modular Carpet
            </span>
            <span className="text-[10px] tracking-[0.15em] uppercase text-brand-400 font-medium">
              by Premrest
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
          {navigation.map((item) =>
            item.children ? (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenDropdown(item.label)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  className="flex items-center gap-1 text-[15px] font-medium text-brand-600 hover:text-brand-800 transition-colors"
                  aria-expanded={openDropdown === item.label}
                  aria-haspopup="true"
                >
                  {item.label}
                  <ChevronDown className="w-4 h-4" />
                </button>
                <AnimatePresence>
                  {openDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-brand-200 py-2 min-w-[200px]"
                    >
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          className="block px-4 py-2.5 text-[15px] text-brand-600 hover:text-brand-800 hover:bg-brand-50 transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                      {item.label === "Our Ranges" && (
                        <div className="border-t border-brand-200 mt-1 pt-1">
                          <Link
                            href="/ranges/haven"
                            className="block px-4 py-2.5 text-[13px] text-accent font-medium hover:bg-accent-light transition-colors"
                          >
                            View All Ranges →
                          </Link>
                        </div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href!}
                className="text-[15px] font-medium text-brand-600 hover:text-brand-800 transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="tel:1300207915"
            className="text-[15px] font-medium text-brand-600 hover:text-brand-800 transition-colors whitespace-nowrap"
          >
            1300 207 915
          </a>
          <Button size="sm" asChild>
            <Link href="/contact">Request Install Quote</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden p-2 text-brand-700"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-brand-200 bg-white overflow-hidden"
          >
            <nav className="container-main py-6 space-y-1" aria-label="Mobile navigation">
              {navigation.map((item) =>
                item.children ? (
                  <div key={item.label} className="space-y-1">
                    <p className="px-3 py-2 text-label text-brand-400 uppercase">
                      {item.label}
                    </p>
                    {item.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className="block px-3 py-3 text-body-md text-brand-700 hover:bg-brand-100 rounded-md transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    key={item.href}
                    href={item.href!}
                    className="block px-3 py-3 text-body-md text-brand-700 hover:bg-brand-100 rounded-md transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <div className="pt-4 space-y-3">
                <a
                  href="tel:1300207915"
                  className="block px-3 py-3 text-body-md font-medium text-brand-700 hover:bg-brand-100 rounded-md transition-colors"
                >
                  1300 207 915
                </a>
                <Button className="w-full" asChild>
                  <Link href="/contact" onClick={() => setMobileOpen(false)}>
                    Request Install Quote
                  </Link>
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
