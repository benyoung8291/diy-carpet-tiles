"use client";

import { useState, useMemo, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { PRICING, ranges, type ProductRange, type ColorWay } from "@/lib/data";
import {
  Calculator,
  Send,
  Info,
  Package,
  Truck,
  Minus,
  Plus,
  Trash2,
  PlusCircle,
} from "lucide-react";

interface Room {
  id: string;
  label: string;
  length: string;
  width: string;
}

interface LineItem {
  id: string;
  rangeSlug: string;
  colourCode: string;
  rooms: Room[];
  wastage: number;
}

interface OrderFormProps {
  range: ProductRange;
  selectedColor: ColorWay;
}

function generateId() {
  return Math.random().toString(36).substring(2, 9);
}

function createRoom(index: number): Room {
  return { id: generateId(), label: `Room ${index + 1}`, length: "", width: "" };
}

function createLineItem(range: ProductRange, colour: ColorWay): LineItem {
  return {
    id: generateId(),
    rangeSlug: range.slug,
    colourCode: colour.code,
    rooms: [createRoom(0)],
    wastage: PRICING.defaultWastage,
  };
}

function getRange(slug: string): ProductRange {
  return ranges.find((r) => r.slug === slug)!;
}

function getColour(range: ProductRange, code: string): ColorWay {
  return range.colorways.find((c) => c.code === code)!;
}

interface RoomCalc {
  rawArea: number;
  totalArea: number;
  boxes: number;
  actualArea: number;
  tiles: number;
  productCost: number;
}

function calcRoom(length: string, width: string, wastage: number): RoomCalc | null {
  const l = parseFloat(length);
  const w = parseFloat(width);
  if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) return null;
  const rawArea = l * w;
  const totalArea = rawArea * (1 + wastage / 100);
  const boxes = Math.ceil(totalArea / PRICING.boxArea);
  const actualArea = boxes * PRICING.boxArea;
  const tiles = boxes * PRICING.tilesPerBox;
  const productCost = boxes * PRICING.boxArea * PRICING.pricePerSqm;
  return { rawArea, totalArea, boxes, actualArea, tiles, productCost };
}

interface LineItemCalc {
  rooms: (RoomCalc | null)[];
  totalBoxes: number;
  totalProductCost: number;
  totalRawArea: number;
  valid: boolean;
}

function calcLineItem(item: LineItem): LineItemCalc {
  const rooms = item.rooms.map((r) => calcRoom(r.length, r.width, item.wastage));
  const validRooms = rooms.filter((r): r is RoomCalc => r !== null);
  return {
    rooms,
    totalBoxes: validRooms.reduce((s, r) => s + r.boxes, 0),
    totalProductCost: validRooms.reduce((s, r) => s + r.productCost, 0),
    totalRawArea: validRooms.reduce((s, r) => s + r.rawArea, 0),
    valid: validRooms.length > 0,
  };
}

const inputClass =
  "w-full bg-white border-[1.5px] border-brand-200 rounded-md px-4 py-3 text-brand-800 placeholder:text-brand-300 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent-light transition-colors";

export function OrderForm({ range, selectedColor }: OrderFormProps) {
  const [items, setItems] = useState<LineItem[]>([
    createLineItem(range, selectedColor),
  ]);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const itemCalcs = useMemo(() => items.map(calcLineItem), [items]);
  const orderTotal = useMemo(() => {
    const productTotal = itemCalcs.reduce((s, c) => s + c.totalProductCost, 0);
    const totalBoxes = itemCalcs.reduce((s, c) => s + c.totalBoxes, 0);
    return {
      productTotal,
      totalBoxes,
      grandTotal: totalBoxes > 0 ? productTotal + PRICING.shippingFlat : 0,
      hasValidItems: itemCalcs.some((c) => c.valid),
    };
  }, [itemCalcs]);

  const updateItem = useCallback(
    (itemId: string, updater: (item: LineItem) => LineItem) => {
      setItems((prev) => prev.map((i) => (i.id === itemId ? updater(i) : i)));
    },
    []
  );

  const addItem = () => {
    setItems((prev) => [...prev, createLineItem(range, selectedColor)]);
  };

  const removeItem = (itemId: string) => {
    setItems((prev) => (prev.length > 1 ? prev.filter((i) => i.id !== itemId) : prev));
  };

  const addRoom = (itemId: string) => {
    updateItem(itemId, (item) => ({
      ...item,
      rooms: [...item.rooms, createRoom(item.rooms.length)],
    }));
  };

  const removeRoom = (itemId: string, roomId: string) => {
    updateItem(itemId, (item) => ({
      ...item,
      rooms: item.rooms.length > 1 ? item.rooms.filter((r) => r.id !== roomId) : item.rooms,
    }));
  };

  const updateRoom = (itemId: string, roomId: string, field: "length" | "width" | "label", value: string) => {
    updateItem(itemId, (item) => ({
      ...item,
      rooms: item.rooms.map((r) => (r.id === roomId ? { ...r, [field]: value } : r)),
    }));
  };

  const adjustWastage = (itemId: string, delta: number) => {
    updateItem(itemId, (item) => ({
      ...item,
      wastage: Math.max(0, Math.min(30, item.wastage + delta)),
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!orderTotal.hasValidItems) return;

    setLoading(true);
    setError("");

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("delivery_notes", notes);

    items.forEach((item, idx) => {
      const r = getRange(item.rangeSlug);
      const c = getColour(r, item.colourCode);
      const calc = itemCalcs[idx];
      const prefix = `item_${idx + 1}`;
      formData.append(`${prefix}_range`, r.name);
      formData.append(`${prefix}_colour`, `${c.name} (${c.code})`);
      formData.append(`${prefix}_wastage_percent`, String(item.wastage));
      formData.append(`${prefix}_boxes`, String(calc.totalBoxes));
      formData.append(`${prefix}_product_cost`, `$${calc.totalProductCost.toFixed(2)}`);

      item.rooms.forEach((room, rIdx) => {
        const roomCalc = calc.rooms[rIdx];
        if (roomCalc) {
          formData.append(`${prefix}_room_${rIdx + 1}`, `${room.label}: ${room.length}m x ${room.width}m = ${roomCalc.rawArea.toFixed(1)}m2`);
        }
      });
    });

    formData.append("total_items", String(items.length));
    formData.append("total_boxes", String(orderTotal.totalBoxes));
    formData.append("product_total", `$${orderTotal.productTotal.toFixed(2)}`);
    formData.append("shipping", `$${PRICING.shippingFlat.toFixed(2)}`);
    formData.append("grand_total_inc_gst", `$${orderTotal.grandTotal.toFixed(2)}`);

    try {
      const res = await fetch("https://formspree.io/f/xdappbep", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
      } else {
        const data = await res.json().catch(() => null);
        console.error("Form error:", res.status, data);
        setError(
          data?.errors?.[0]?.message ||
          "Something went wrong. Please email us directly at modular@premrest.com.au"
        );
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

      {/* Line items */}
      {items.map((item, itemIdx) => {
        const itemRange = getRange(item.rangeSlug);
        const itemColour = getColour(itemRange, item.colourCode);
        const calc = itemCalcs[itemIdx];

        return (
          <div key={item.id} className="border border-brand-200 rounded-lg overflow-hidden">
            {/* Item header */}
            <div className="bg-brand-100 px-5 py-3 flex items-center justify-between">
              <h4 className="font-semibold text-brand-800 text-body-md">
                {items.length > 1 ? `Item ${itemIdx + 1}: ` : ""}
                {itemRange.name} - {itemColour.name}
              </h4>
              {items.length > 1 && (
                <button
                  type="button"
                  onClick={() => removeItem(item.id)}
                  className="text-brand-400 hover:text-red-500 transition-colors p-1"
                  title="Remove item"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="p-5 space-y-5">
              {/* Range & colour selectors */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brand-600 mb-1.5">
                    Range
                  </label>
                  <select
                    value={item.rangeSlug}
                    onChange={(e) => {
                      const newRange = getRange(e.target.value);
                      updateItem(item.id, (i) => ({
                        ...i,
                        rangeSlug: e.target.value,
                        colourCode: newRange.colorways[0].code,
                      }));
                    }}
                    className={inputClass}
                  >
                    {ranges.map((r) => (
                      <option key={r.slug} value={r.slug}>
                        {r.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-600 mb-1.5">
                    Colour
                  </label>
                  <select
                    value={item.colourCode}
                    onChange={(e) =>
                      updateItem(item.id, (i) => ({ ...i, colourCode: e.target.value }))
                    }
                    className={inputClass}
                  >
                    {itemRange.colorways.map((c) => (
                      <option key={c.code} value={c.code}>
                        {c.name} ({c.code})
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Colour swatch preview */}
              <div className="flex items-center gap-3 bg-white rounded-md p-3 border border-brand-200">
                <div
                  className="w-10 h-10 rounded-md border border-brand-200 flex-shrink-0 bg-cover bg-center overflow-hidden"
                  style={{
                    backgroundColor: itemColour.hex,
                    backgroundImage: `url('/images/ranges/${itemRange.slug}/swatches/${itemColour.slug}.jpg')`,
                  }}
                />
                <div>
                  <p className="text-body-sm font-semibold text-brand-800">
                    {itemRange.name} - {itemColour.name}
                  </p>
                  <p className="text-body-sm text-brand-400">{itemColour.code}</p>
                </div>
              </div>

              {/* Rooms */}
              <div>
                <h5 className="font-semibold text-brand-800 text-body-sm mb-3 flex items-center gap-2">
                  <Calculator className="w-4 h-4 text-accent" />
                  Room Dimensions
                </h5>

                <div className="space-y-3">
                  {item.rooms.map((room, roomIdx) => (
                    <div key={room.id} className="bg-brand-50 rounded-md p-3 border border-brand-100">
                      <div className="flex items-center justify-between mb-2">
                        <input
                          type="text"
                          value={room.label}
                          onChange={(e) => updateRoom(item.id, room.id, "label", e.target.value)}
                          className="text-sm font-medium text-brand-700 bg-transparent border-none p-0 focus:outline-none focus:ring-0 w-auto"
                          style={{ width: `${Math.max(room.label.length, 6)}ch` }}
                        />
                        {item.rooms.length > 1 && (
                          <button
                            type="button"
                            onClick={() => removeRoom(item.id, room.id)}
                            className="text-brand-400 hover:text-red-500 transition-colors p-0.5"
                            title="Remove room"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-[12px] text-brand-500 mb-1">
                            Length (m) *
                          </label>
                          <input
                            type="number"
                            step="0.1"
                            min="0.1"
                            required
                            value={room.length}
                            onChange={(e) => updateRoom(item.id, room.id, "length", e.target.value)}
                            className={inputClass + " !py-2 text-sm"}
                            placeholder="e.g. 5.0"
                          />
                        </div>
                        <div>
                          <label className="block text-[12px] text-brand-500 mb-1">
                            Width (m) *
                          </label>
                          <input
                            type="number"
                            step="0.1"
                            min="0.1"
                            required
                            value={room.width}
                            onChange={(e) => updateRoom(item.id, room.id, "width", e.target.value)}
                            className={inputClass + " !py-2 text-sm"}
                            placeholder="e.g. 4.0"
                          />
                        </div>
                      </div>
                      {calc.rooms[roomIdx] && (
                        <p className="text-[12px] text-brand-500 mt-2">
                          {calc.rooms[roomIdx]!.rawArea.toFixed(1)} m² room area
                          {" / "}
                          {calc.rooms[roomIdx]!.boxes} box{calc.rooms[roomIdx]!.boxes !== 1 ? "es" : ""} needed (inc. {item.wastage}% wastage)
                        </p>
                      )}
                    </div>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={() => addRoom(item.id)}
                  className="mt-3 flex items-center gap-1.5 text-body-sm text-accent hover:text-accent-hover font-medium transition-colors"
                >
                  <PlusCircle className="w-4 h-4" />
                  Add another room
                </button>
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
                    {item.wastage}%
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => adjustWastage(item.id, -5)}
                    disabled={item.wastage <= 0}
                    className="w-9 h-9 rounded-md border border-brand-200 flex items-center justify-center text-brand-600 hover:bg-brand-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <div className="flex-1 bg-brand-100 rounded-full h-2 relative">
                    <div
                      className="absolute left-0 top-0 h-full bg-accent rounded-full transition-all"
                      style={{ width: `${(item.wastage / 30) * 100}%` }}
                    />
                  </div>
                  <button
                    type="button"
                    onClick={() => adjustWastage(item.id, 5)}
                    disabled={item.wastage >= 30}
                    className="w-9 h-9 rounded-md border border-brand-200 flex items-center justify-center text-brand-600 hover:bg-brand-100 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Item subtotal */}
              {calc.valid && (
                <div className="bg-white border border-brand-200 rounded-md p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Package className="w-4 h-4 text-brand-400" />
                    <p className="text-body-sm text-brand-600">
                      {calc.totalBoxes} box{calc.totalBoxes !== 1 ? "es" : ""} ={" "}
                      <strong>{(calc.totalBoxes * PRICING.boxArea)} m²</strong>{" "}
                      ({calc.totalBoxes * PRICING.tilesPerBox} tiles)
                    </p>
                  </div>
                  <div className="flex justify-between text-body-sm text-brand-600">
                    <span>
                      {calc.totalBoxes} box{calc.totalBoxes !== 1 ? "es" : ""} @
                      ${(PRICING.boxArea * PRICING.pricePerSqm).toFixed(2)}
                    </span>
                    <span className="font-semibold">${calc.totalProductCost.toFixed(2)}</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        );
      })}

      {/* Add another item */}
      <button
        type="button"
        onClick={addItem}
        className="w-full flex items-center justify-center gap-2 py-3 border-2 border-dashed border-brand-200 rounded-lg text-body-sm text-brand-500 hover:border-accent hover:text-accent font-medium transition-colors"
      >
        <PlusCircle className="w-4 h-4" />
        Add a different colour or range
      </button>

      {/* Order summary */}
      {orderTotal.hasValidItems && (
        <div className="bg-white border-[1.5px] border-brand-200 rounded-lg overflow-hidden">
          <div className="bg-brand-100 px-5 py-3">
            <h4 className="font-semibold text-brand-800 text-body-md">Order Summary</h4>
          </div>
          <div className="p-5 space-y-2 text-body-sm">
            {items.map((item, idx) => {
              const calc = itemCalcs[idx];
              if (!calc.valid) return null;
              const r = getRange(item.rangeSlug);
              const c = getColour(r, item.colourCode);
              return (
                <div key={item.id} className="flex justify-between text-brand-600">
                  <span>
                    {r.name} - {c.name} ({calc.totalBoxes} box{calc.totalBoxes !== 1 ? "es" : ""})
                  </span>
                  <span>${calc.totalProductCost.toFixed(2)}</span>
                </div>
              );
            })}
            <div className="flex justify-between text-brand-600">
              <span>Flat rate shipping inc GST</span>
              <span>${PRICING.shippingFlat.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-semibold text-brand-800 text-body-md pt-2 border-t border-brand-200">
              <span>Total inc GST</span>
              <span>${orderTotal.grandTotal.toFixed(2)}</span>
            </div>
          </div>
        </div>
      )}

      {/* Contact details for order */}
      {orderTotal.hasValidItems && (
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
                  className={inputClass}
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
                  className={inputClass}
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
                className={inputClass}
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
                className={inputClass + " resize-none"}
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
                Submit Order - ${orderTotal.grandTotal.toFixed(2)} inc GST
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
