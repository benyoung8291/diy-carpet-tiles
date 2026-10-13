"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[60vh] md:min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-brand-200">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/lifestyle/hero-home.jpg')",
          }}
        />
        <div className="absolute inset-0 gradient-overlay-dark" />
      </div>

      <div className="container-main relative z-10 py-20 md:py-32">
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-label uppercase tracking-[0.15em] text-accent-light mb-4 md:mb-6 font-semibold">
            Modular Carpet by Premrest
          </p>
          <h1 className="font-serif text-display-md md:text-display-lg lg:text-display-xl text-white mb-4 md:mb-6 text-balance leading-[1.1]">
            Carpet Tiles for Rental Properties. Replace a Tile, Not the Whole Room.
          </h1>
          <p className="text-body-md md:text-body-lg text-white/85 mb-8 md:mb-10 max-w-xl leading-relaxed">
            Stains or damage between tenancies? Replace the affected carpet tiles
            instead of re-carpeting the whole room. For landlords and property
            managers: supply Australia-wide, with installation in Melbourne,
            Sydney and Brisbane. Keep matching spares for future repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get a carpet quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline_white" size="lg" asChild>
              <Link href="/contact?request=samples#enquiry">Request free samples</Link>
            </Button>
          </div>
          <p className="mt-6 text-body-md text-white/85">
            Or call{" "}
            <a
              href="tel:1300207915"
              className="underline underline-offset-4 hover:text-white transition-colors"
            >
              1300 207 915
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
