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
            Melbourne, Sydney, Brisbane
          </p>
          <h2 className="font-serif text-display-md md:text-display-lg text-white mb-6 text-balance">
            Planning Carpet for Your Next Tenancy?
          </h2>
          <p className="text-body-lg text-brand-300 mb-4">
            Request samples for your rental property or ask for a quote.
            Supply-only Australia-wide, or supply and install in Melbourne,
            Sydney and Brisbane. Tell us your suburb and approximate area if known.
          </p>
          <p className="text-body-md text-brand-400 mb-10">
            Call 1300 207 915. We reply within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get a carpet quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button variant="outline_white" size="lg" asChild>
              <Link href="/contact?request=samples#enquiry">Request free samples</Link>
            </Button>
            <Button variant="outline_white" size="lg" asChild>
              <Link href="/installation">Installation Service</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
