"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowLeft,
  Ruler,
  Layers,
  Volume2,
  Shield,
  Droplets,
  Sun,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ColorSwatch } from "@/components/ui/color-swatch";
import { Section, SectionHeader } from "@/components/ui/section";
import { OrderForm } from "@/components/shared/order-form";
import { SHARED_SPECS, PRICING, ranges, type ProductRange, type ColorWay } from "@/lib/data";

interface RangePageClientProps {
  range: ProductRange;
}

export function RangePageClient({ range }: RangePageClientProps) {
  const [selectedColor, setSelectedColor] = useState<ColorWay>(
    range.colorways[0]
  );

  // Get sibling ranges for navigation
  const currentIndex = ranges.findIndex((r) => r.slug === range.slug);
  const prevRange = currentIndex > 0 ? ranges[currentIndex - 1] : null;
  const nextRange =
    currentIndex < ranges.length - 1 ? ranges[currentIndex + 1] : null;

  const specs = [
    { label: "Tile Size", value: SHARED_SPECS.tileDimensions, icon: Ruler },
    { label: "Thickness", value: SHARED_SPECS.thickness, icon: Layers },
    { label: "Pile Fibre", value: SHARED_SPECS.pileFibre, icon: Sun },
    { label: "Backing", value: "Breathable recycled PET felt", icon: Droplets },
    { label: "Acoustic Rating", value: SHARED_SPECS.acousticRating, icon: Volume2 },
    { label: "Warranty", value: SHARED_SPECS.warranty, icon: Shield },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden">
        <div className="absolute inset-0 bg-brand-200">
          {/* TODO: Replace with actual range hero lifestyle image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url('${range.heroImage}')`,
            }}
          />
          <div className="absolute inset-0 gradient-overlay-dark" />
        </div>
        <div className="container-main relative z-10 pb-16 pt-32">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="overline text-accent-light mb-3">
              {range.colorways.length} Colourways
            </p>
            <h1 className="font-serif text-display-xl text-white mb-4">
              {range.name}
            </h1>
            <p className="text-body-lg text-white/80 max-w-2xl mb-2">
              {range.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Colour Selector - Interface.com style */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Preview Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[4/3] rounded-lg overflow-hidden bg-brand-200"
          >
            {/* TODO: Replace with actual swatch/room image for selected colour */}
            <div
              className="absolute inset-0 transition-all duration-500"
              style={{
                backgroundColor: selectedColor.hex,
                backgroundImage: `url('/images/ranges/${range.slug}/swatches/${selectedColor.slug}.jpg')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            {/* Colour name overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
              <p className="text-white font-serif text-heading-md">
                {selectedColor.name}
              </p>
              <p className="text-white/70 text-body-sm">{selectedColor.code}</p>
            </div>
          </motion.div>

          {/* Colour Picker & Info */}
          <div>
            <h2 className="font-serif text-heading-lg text-brand-800 mb-2">
              Choose Your Colour
            </h2>
            <p className="text-body-md text-brand-500 mb-8">
              {range.description}
            </p>

            {/* Swatch Grid */}
            <div className="flex flex-wrap gap-3 mb-8">
              {range.colorways.map((color) => (
                <ColorSwatch
                  key={color.code}
                  color={color}
                  selected={selectedColor.code === color.code}
                  onClick={setSelectedColor}
                />
              ))}
            </div>

            {/* Selected colour info */}
            <div className="bg-brand-100 rounded-md p-5 mb-6">
              <div className="flex items-center gap-4">
                <div
                  className="w-16 h-16 rounded-md border border-brand-200"
                  style={{ backgroundColor: selectedColor.hex }}
                />
                <div>
                  <p className="font-semibold text-brand-800 text-body-lg">
                    {selectedColor.name}
                  </p>
                  <p className="text-brand-400 text-body-sm">
                    Code: {selectedColor.code}
                  </p>
                </div>
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-accent-light rounded-md p-5 mb-6 border border-accent/20">
              <p className="text-heading-md font-serif text-brand-800">
                ${PRICING.pricePerSqm.toFixed(2)}{" "}
                <span className="text-body-sm font-sans text-brand-500 font-normal">
                  per m² inc GST
                </span>
              </p>
              <p className="text-body-sm text-brand-500 mt-1">
                Sold in boxes of {PRICING.boxArea} m² — ${PRICING.shippingFlat}{" "}
                flat rate shipping Australia-wide
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild>
                <a href="#order">
                  Order Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </a>
              </Button>
              <Button variant="secondary" asChild>
                <Link href="/contact">Request a Sample</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* Inspiration */}
      <Section background="linen">
        <div className="max-w-3xl mx-auto text-center">
          <p className="overline mb-4">Inspiration</p>
          <blockquote className="font-serif text-display-md text-brand-700 mb-6 italic">
            &ldquo;{range.inspiration}&rdquo;
          </blockquote>
        </div>
      </Section>

      {/* Gallery */}
      <Section background="white">
        <SectionHeader
          overline="Gallery"
          title={`${range.name} in Real Homes`}
          description="See how this range transforms real Australian living spaces."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {range.galleryImages.map((image, index) => (
            <motion.div
              key={image}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-lg overflow-hidden bg-brand-200 ${
                index === 0 ? "md:col-span-2 md:row-span-2 aspect-[4/3]" : "aspect-[3/2]"
              }`}
            >
              {/* TODO: Replace with actual gallery images */}
              <div
                className="absolute inset-0 bg-cover bg-center hover:scale-105 transition-transform duration-700"
                style={{ backgroundImage: `url('${image}')` }}
              />
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Specifications */}
      <Section background="linen">
        <SectionHeader
          overline="Technical Specifications"
          title="Built for Real Life"
          description="Every Modular Carpet tile is engineered for lasting beauty and performance."
        />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {specs.map((spec) => (
            <div
              key={spec.label}
              className="bg-white rounded-md p-6 border border-brand-200"
            >
              <spec.icon className="w-5 h-5 text-accent mb-3" />
              <p className="text-label text-brand-400 uppercase mb-1">
                {spec.label}
              </p>
              <p className="text-body-md font-semibold text-brand-800">
                {spec.value}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-8 bg-white rounded-md p-6 border border-brand-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-label text-brand-400 uppercase mb-1">
                Installation
              </p>
              <p className="text-body-md text-brand-700">
                {SHARED_SPECS.installation}
              </p>
            </div>
            <div>
              <p className="text-label text-brand-400 uppercase mb-1">Layout</p>
              <p className="text-body-md text-brand-700">
                {SHARED_SPECS.layout}
              </p>
            </div>
            <div>
              <p className="text-label text-brand-400 uppercase mb-1">
                Suitability
              </p>
              <p className="text-body-md text-brand-700">
                {SHARED_SPECS.suitability}
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Order Form */}
      <Section background="linen" id="order">
        <div className="max-w-2xl mx-auto">
          <SectionHeader
            overline="Place Your Order"
            title={`Order ${range.name} Carpet Tiles`}
            description="Enter your room dimensions to calculate how much you need. We'll confirm your order within 1 business day."
          />
          <div className="bg-white rounded-lg p-6 md:p-8 border border-brand-200">
            <OrderForm range={range} selectedColor={selectedColor} />
          </div>
        </div>
      </Section>

      {/* Range Navigation */}
      <Section background="white" className="!py-8">
        <div className="flex items-center justify-between">
          {prevRange ? (
            <Link
              href={`/ranges/${prevRange.slug}`}
              className="flex items-center gap-2 text-brand-500 hover:text-brand-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="text-body-sm">{prevRange.name}</span>
            </Link>
          ) : (
            <div />
          )}
          <Link
            href="/"
            className="text-body-sm text-accent hover:text-accent-hover font-medium transition-colors"
          >
            All Ranges
          </Link>
          {nextRange ? (
            <Link
              href={`/ranges/${nextRange.slug}`}
              className="flex items-center gap-2 text-brand-500 hover:text-brand-800 transition-colors"
            >
              <span className="text-body-sm">{nextRange.name}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </Section>
    </>
  );
}
