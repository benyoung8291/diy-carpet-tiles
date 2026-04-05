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
            Skip the Carpet Store. Skip the Installer.
          </p>
          <h1 className="font-serif text-display-md md:text-display-lg lg:text-display-xl text-white mb-4 md:mb-6 text-balance leading-[1.1]">
            DIY Carpet Tiles You Install Yourself — No Tradesperson Needed
          </h1>
          <p className="text-body-md md:text-body-lg text-white/85 mb-8 md:mb-10 max-w-xl leading-relaxed">
            Tired of expensive flooring retailers and waiting weeks for carpet
            installers? Modular Carpet tiles arrive at your door and go down in
            an afternoon. Looks like broadloom, installs like tiles, lasts 15&nbsp;years.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/ranges/haven">
                Shop Carpet Tiles Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline_white" size="lg" asChild>
              <Link href="/how-to-install">See How Easy It Is</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
