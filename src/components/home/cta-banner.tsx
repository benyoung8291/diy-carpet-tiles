"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-brand-900">
      <div className="absolute inset-0 opacity-10">
        {/* Subtle texture pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/lifestyle/hero-home.jpg')",
          }}
        />
      </div>
      <div className="container-main relative z-10 py-20 md:py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto"
        >
          <p className="text-label uppercase tracking-[0.15em] text-accent mb-4 font-semibold">
            Ditch the Carpet Store. Do It Yourself.
          </p>
          <h2 className="font-serif text-display-md md:text-display-lg text-white mb-6 text-balance">
            From $58.50/m² - Delivered to Your Door
          </h2>
          <p className="text-body-lg text-brand-300 mb-4">
            No flooring retailer. No installer quotes. No waiting weeks for a tradesperson.
            Order online and install premium carpet tiles yourself this weekend.
          </p>
          <p className="text-body-md text-brand-400 mb-10">
            Choose your colour, enter your room size, and order. $55 flat rate
            shipping Australia-wide. We confirm within 1 business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/ranges/haven">
                Browse &amp; Order
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline_white" size="lg" asChild>
              <Link href="/contact">Request Free Samples</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
