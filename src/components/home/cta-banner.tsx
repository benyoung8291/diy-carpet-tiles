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
            Ready to Transform Your Space?
          </p>
          <h2 className="font-serif text-display-md md:text-display-lg text-white mb-6 text-balance">
            Your Dream Floor Is Just a Conversation Away
          </h2>
          <p className="text-body-lg text-brand-300 mb-10">
            Request a free quote, order samples, or book a consultation with our
            flooring specialists. We&apos;re here to help you find the perfect carpet
            tiles for your home.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/contact">
                Get a Free Quote
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
