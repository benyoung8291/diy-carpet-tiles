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
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-label uppercase tracking-[0.15em] text-accent-light mb-4 md:mb-6 font-semibold">
            Modular Carpet by Premrest
          </p>
          <h1 className="font-serif text-display-md md:text-display-lg lg:text-display-xl text-white mb-4 md:mb-6 text-balance leading-[1.1]">
            Commercial-Grade Modular Carpet for Hotels, Considered Homes, and Investment Properties
          </h1>
          <p className="text-body-md md:text-body-lg text-white/85 mb-8 md:mb-10 max-w-xl leading-relaxed">
            Solution-dyed nylon, 15-year wear warranty, laid in an ashlar
            pattern that&rsquo;s indistinguishable from broadloom. Order direct
            for in-house install, or take the full supply-and-install service
            in Melbourne, Sydney, or Brisbane. Replace one tile when life
            happens &mdash; never the whole room.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/ranges/haven">
                Browse Ranges
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline_white" size="lg" asChild>
              <Link href="/contact">Request a Quote</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
