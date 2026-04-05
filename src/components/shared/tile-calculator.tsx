"use client";

import { useState } from "react";
import { Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TileCalculator() {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [result, setResult] = useState<{
    area: number;
    tiles: number;
    boxes: number;
  } | null>(null);

  const TILE_AREA = 0.5; // 500mm x 1000mm = 0.5 m²
  const TILES_PER_BOX = 8;
  const WASTAGE_FACTOR = 1.1; // 10% wastage

  const calculate = () => {
    const l = parseFloat(length);
    const w = parseFloat(width);
    if (isNaN(l) || isNaN(w) || l <= 0 || w <= 0) return;

    const area = l * w;
    const tilesNeeded = Math.ceil((area / TILE_AREA) * WASTAGE_FACTOR);
    const boxesNeeded = Math.ceil(tilesNeeded / TILES_PER_BOX);

    setResult({ area, tiles: tilesNeeded, boxes: boxesNeeded });
  };

  return (
    <div className="bg-brand-100 rounded-lg p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center">
          <Calculator className="w-5 h-5 text-accent" />
        </div>
        <h3 className="font-serif text-heading-sm text-brand-800">
          How Many Tiles Do I Need?
        </h3>
      </div>
      <p className="text-body-sm text-brand-500 mb-6">
        Enter your room dimensions to get an estimate. Includes 10% for cuts and
        wastage.
      </p>
      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <label
            htmlFor="calc-length"
            className="block text-sm font-medium text-brand-600 mb-1.5"
          >
            Length (m)
          </label>
          <input
            type="number"
            id="calc-length"
            step="0.1"
            min="0.1"
            value={length}
            onChange={(e) => setLength(e.target.value)}
            className="w-full bg-white border-[1.5px] border-brand-200 rounded-md px-4 py-3 text-brand-800 placeholder:text-brand-300 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent-light transition-colors"
            placeholder="e.g. 5.0"
          />
        </div>
        <div>
          <label
            htmlFor="calc-width"
            className="block text-sm font-medium text-brand-600 mb-1.5"
          >
            Width (m)
          </label>
          <input
            type="number"
            id="calc-width"
            step="0.1"
            min="0.1"
            value={width}
            onChange={(e) => setWidth(e.target.value)}
            className="w-full bg-white border-[1.5px] border-brand-200 rounded-md px-4 py-3 text-brand-800 placeholder:text-brand-300 focus:border-accent focus:outline-none focus:ring-[3px] focus:ring-accent-light transition-colors"
            placeholder="e.g. 4.0"
          />
        </div>
      </div>
      <Button onClick={calculate} size="sm" className="w-full">
        Calculate
      </Button>

      {result && (
        <div className="mt-6 bg-white rounded-md p-5 border border-brand-200">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-label text-brand-400 uppercase mb-1">Area</p>
              <p className="text-heading-sm font-serif text-brand-800">
                {result.area.toFixed(1)} m²
              </p>
            </div>
            <div>
              <p className="text-label text-brand-400 uppercase mb-1">Tiles</p>
              <p className="text-heading-sm font-serif text-accent">
                {result.tiles}
              </p>
            </div>
            <div>
              <p className="text-label text-brand-400 uppercase mb-1">Boxes</p>
              <p className="text-heading-sm font-serif text-brand-800">
                {result.boxes}
              </p>
            </div>
          </div>
          <p className="text-body-sm text-brand-400 text-center mt-3">
            Based on 500 × 1000 mm tiles, {TILES_PER_BOX} tiles per box, +10%
            wastage
          </p>
        </div>
      )}
    </div>
  );
}
