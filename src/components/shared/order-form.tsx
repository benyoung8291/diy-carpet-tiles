"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { PRICING, type ProductRange, type ColorWay } from "@/lib/data";
import {
  Calculator,
  Send,
  Info,
  Package,
  Truck,
  Minus,
  Plus,
} from "lucide-react";

interface OrderFormProps {
  range: ProductRange;
  selectedColor: ColorWay;
}

export function OrderForm({ range, selectedColor }: OrderFormProps) {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [wastage, setWastage] = useState(PRICING.defaultWastage);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const calculation = useMemo(() => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) return null;

    const rawArea = l * w;
    const wastageFactor = 1 + wastage / 100;
    const totalArea = rawArea * wastageFactor;
    const boxes = Math.ceil(totalArea / PRICING.boxArea);
    const actualArea = boxes * PRICING.boxArea; // You buy full boxes
    const tiles = boxes * PRICING.tilesPerBox;
    const productCost = boxes * PRICING.boxArea * PRICING.pricePerSqm;
    const totalCost = productCost + PRICING.shippingFlat;

    return {
      rawArea,
      totalArea,
      boxes,
      actualArea,
      tiles,
      productCost,
      totalCost,
    };
  }, [length, width, wastage]);

  const adjustWastage = (delta: number) => {
    setWastage((prev) => Math.max(0, Math.min(30, prev + delta)));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!calculation) return;

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("range", range.name);
    formData.append("colour", `${selectedColor.name} (${selectedColor.code})`);
    formData.append("room_length_m", length);
    formData.append("room_width_m", width);
    formData.append("wastage_percent", String(wastage));
    formData.append("room_area_m2", calculation.rawArea.toFixed(1));
    formData.append("total_area_with_wastage_m2", calculation.totalArea.toFixed(1));
    formData.append("boxes", String(calculation.boxes));
    formData.append("actual_area_m2", String(calculation.actualArea));
    formData.append("tiles", String(calculation.tiles));
    formData.append("product_cost", `$${calculation.productCost.toFixed(2)}`);
    formData.append("shipping", `$${PRICING.shippingFlat.toFixed(2)}`);
    formData.append("total_cost_inc_gst", `$${calculation.totalCost.toFixed(2)}`);
    formData.append("delivery_notes", notes);

    try {
      const res = await fetch("https://formspree.io/f/xdappbep", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please email us directly at modular@premrest.com.au");
      }
    } catch {
      setError("Something went wrong. Please email us directly at modular@premrest.com.au");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="text-center py-10">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <Send className="w-7 h-7 text-green-600" />
        </div>
        <h3 className="font-serif text-heading-md text-brand-800 mb-2">
          Order Received!
        </h3>
        <p className="text-body-md text-brand-500 mb-2">
          We&apos;ve sent your order to our team at{" "}
          <strong>modular@premrest.com.au</strong>.
        </p>
        <p className="text-body-sm text-brand-400">
          We&apos;ll be in touch within 1 business day to confirm availability and
          arrange payment.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Pricing header */}
      <div className="bg-accent-light rounded-lg p-5 border border-accent/20">
        <div className="flex items-center justify-between flex-wrap gap-2">
          <div>
            <p className="text-heading-md font-serif text-brand-800">
              ${PRICING.pricePerSqm.toFixed(2)}{" "}
              <span className="text-body-sm font-sans text-brand-500 font-normal">
                per m² inc GST
              </span>
            </p>
            <p className="text-body-sm text-brand-500 mt-0.5">
              Sold in boxes of {PRICING.boxArea} m² ({PRICING.tilesPerBox}{" "}
              tiles) - ${(PRICING.boxArea * PRICING.pricePerSqm).toFixed(2)} per
              box
            </p>
          </div>
          <div className="flex items-center gap-1.5 text-body-sm text-brand-500">
            <Truck className="w-4 h-4" />
            <span>${PRICING.shippingFlat} flat rate shipping inc GST</span>
          </div>
        </div>
      </div>

      {/* Selected colour confirmation */}
      <div className="flex items-center gap-3 bg-brand-100 rounded-md p-4">
        <div
          className="w-10 h-10 rounded-md border border-brand-200 flex-shrink-0 bg-cover bg-center overflow-hidden"
          style={{
            backgroundColor: selectedColor.hex,
            backgroundImage: `url('/images/ranges/${range.slug}/swatches/${selectedColor.slug}.jpg')`,
          }}
        />
        <div>
          <p className="text-body-sm font-semibold text-brand-800">
            {range.name} - {selectedColor.name}
          </p>
          <p className="text-body-sm text-brand-400">{selectedColor.code}</p>
        </div>
      </div>

      {/* Room dimensions */}
      <div>
        <h4 className="font-semibold text-brand-800 text-body-md mb-3 flex items-center gap-2">
          <Calculator className="w-4 h-4 text-accent" />
          Calculate Your Order
        </h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="order-length"
              className="block text-sm font-medium text-brand-600 mb-1.5"
            >
              Room Length (metres) *
            </label>
            <input
              type="number"
              id="order-length"
              step="0.1"
              min="0.1"
              required
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className="w-full bg-white border-[1.5px] border-brand-200 rounded-md px-4 py-3 text-brand-800 placeholder:text-brand-300 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent-light transition-colors"
              placeholder="e.g. 5.0"
            />
          </div>
          <div>
            <label
              htmlFor="order-width"
              className="block text-sm font-medium text-brand-600 mb-1.5"
            >
              Room Width (metres) *
            </label>
            <input
              type="number"
              id="order-width"
              step="0.1"
              min="0.1"
              required
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              className="w-full bg-white border-[1.5px] border-brand-200 rounded-md px-4 py-3 text-brand-800 placeholder:text-brand-300 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent-light transition-colors"
              placeholder="e.g. 4.0"
            />
          </div>
        </div>
      </div>

      {/* Wastage adjuster */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="text-sm font-medium text-brand-600 flex items-center gap-1.5">
            Wastage Allowance
            <span className="relative group">
              <Info className="w-3.5 h-3.5 text-brand-400 cursor-help" />
              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-56 bg-brand-800 text-white text-[12px] rounded-md p-2.5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity z-10 leading-snug">
                Wastage accounts for cuts at room edges and around obstacles. 10%
                is recommended for standard rectangular rooms. Increase for
                L-shaped rooms or rooms with many obstacles.
              </span>
            </span>
          </label>
          <span className="text-body-sm font-semibold text-brand-800">
            {wastage}%
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={() => adjustWastage(-5)}
            disabled={wastage <= 0}
            className="w-9 h-9 rounded-md border border-brand-200 flex items-center justify-center text-brand-600 hover:bg-brand-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <Minus className="w-4 h-4" />
          </button>
          <div className="flex-1 bg-brand-100 rounded-full h-2 relative">
            <div
              className="absolute left-0 top-0 h-full bg-accent rounded-full transition-all"
              style={{ width: `${(wastage / 30) * 100}%` }}
            />
          </div>
          <button
            type="button"
            onClick={() => adjustWastage(5)}
            disabled={wastage >= 30}
            className="w-9 h-9 rounded-md border border-brand-200 flex items-center justify-center text-brand-600 hover:bg-brand-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
          >
            <Plus className="w-4 h-4" />
          </button>
        </div>
        <p className="text-[12px] text-brand-400 mt-1.5">
          Recommended: 10% for standard rooms. Increase for L-shaped or complex
          layouts.
        </p>
      </div>

      {/* Calculation results */}
      {calculation && (
        <div className="bg-white border-[1.5px] border-brand-200 rounded-lg overflow-hidden">
          <div className="grid grid-cols-3 divide-x divide-brand-200 text-center">
            <div className="p-4">
              <p className="text-label text-brand-400 uppercase mb-1">
                Room Area
              </p>
              <p className="text-heading-sm font-serif text-brand-800">
                {calculation.rawArea.toFixed(1)} m²
              </p>
            </div>
            <div className="p-4">
              <p className="text-label text-brand-400 uppercase mb-1">
                Inc. Wastage
              </p>
              <p className="text-heading-sm font-serif text-brand-800">
                {calculation.totalArea.toFixed(1)} m²
              </p>
            </div>
            <div className="p-4 bg-accent-light">
              <p className="text-label text-accent uppercase mb-1">
                Boxes Needed
              </p>
              <p className="text-heading-sm font-serif text-accent">
                {calculation.boxes}
              </p>
            </div>
          </div>
          <div className="border-t border-brand-200 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Package className="w-4 h-4 text-brand-400" />
              <p className="text-body-sm text-brand-600">
                {calculation.boxes} box{calculation.boxes !== 1 ? "es" : ""} ×{" "}
                {PRICING.boxArea} m² = <strong>{calculation.actualArea} m²</strong>{" "}
                ({calculation.tiles} tiles)
              </p>
            </div>
            <div className="space-y-1 text-body-sm">
              <div className="flex justify-between text-brand-600">
                <span>
                  {calculation.boxes} box{calculation.boxes !== 1 ? "es" : ""} @
                  ${(PRICING.boxArea * PRICING.pricePerSqm).toFixed(2)}
                </span>
                <span>${calculation.productCost.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-brand-600">
                <span>Flat rate shipping inc GST</span>
                <span>${PRICING.shippingFlat.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-semibold text-brand-800 text-body-md pt-2 border-t border-brand-200">
                <span>Total inc GST</span>
                <span>${calculation.totalCost.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Contact details for order */}
      {calculation && (
        <>
          <div className="border-t border-brand-200 pt-6">
            <h4 className="font-semibold text-brand-800 text-body-md mb-3">
              Your Details
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="order-name"
                  className="block text-sm font-medium text-brand-600 mb-1.5"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="order-name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border-[1.5px] border-brand-200 rounded-md px-4 py-3 text-brand-800 placeholder:text-brand-300 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent-light transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label
                  htmlFor="order-email"
                  className="block text-sm font-medium text-brand-600 mb-1.5"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="order-email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border-[1.5px] border-brand-200 rounded-md px-4 py-3 text-brand-800 placeholder:text-brand-300 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent-light transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="order-phone"
                className="block text-sm font-medium text-brand-600 mb-1.5"
              >
                Phone Number *
              </label>
              <input
                type="tel"
                id="order-phone"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-white border-[1.5px] border-brand-200 rounded-md px-4 py-3 text-brand-800 placeholder:text-brand-300 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent-light transition-colors"
                placeholder="04XX XXX XXX"
              />
            </div>
            <div className="mt-4">
              <label
                htmlFor="order-notes"
                className="block text-sm font-medium text-brand-600 mb-1.5"
              >
                Delivery Notes (optional)
              </label>
              <textarea
                id="order-notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
                className="w-full bg-white border-[1.5px] border-brand-200 rounded-md px-4 py-3 text-brand-800 placeholder:text-brand-300 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent-light transition-colors resize-none"
                placeholder="Delivery address, special instructions, questions..."
              />
            </div>
          </div>

          {error && (
            <p className="text-red-600 text-body-sm text-center">{error}</p>
          )}

          <Button
            type="submit"
            size="lg"
            className="w-full"
            disabled={loading}
          >
            {loading ? (
              "Submitting Order..."
            ) : (
              <>
                Submit Order - ${calculation.totalCost.toFixed(2)} inc GST
                <Send className="w-4 h-4 ml-2" />
              </>
            )}
          </Button>

          <p className="text-[12px] text-brand-400 text-center">
            Your order will be sent to our team for processing. We&apos;ll
            confirm availability and arrange payment within 1 business day.
          </p>
        </>
      )}
    </form>
  );
}
