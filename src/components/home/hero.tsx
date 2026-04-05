"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-brand-200">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/lifestyle/hero-home.jpg')",
          }}
        />
        <div className="absolute inset-0 gradient-overlay-dark" />
      </div>

      <div className="container-main relative z-10 py-32">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-label uppercase tracking-[0.15em] text-accent-light mb-6 font-semibold">
            Premium Modular Carpet Tiles by Premrest
          </p>
          <h1 className="font-serif text-display-xl text-white mb-6 text-balance leading-[1.1]">
            Seamless Carpet Tiles for Australian Homes
          </h1>
          <p className="text-body-lg text-white/85 mb-10 max-w-xl leading-relaxed">
            The look and feel of broadloom carpet — with the freedom to replace
            any tile, any time. DIY installation. 15-year warranty. Breathtakingly
            beautiful.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get a Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline_white" size="lg" asChild>
              <Link href="/ranges/haven">Explore Our Ranges</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
