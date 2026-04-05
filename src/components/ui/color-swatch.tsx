"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ColorWay } from "@/lib/data";

interface ColorSwatchProps {
  color: ColorWay;
  selected: boolean;
  onClick: (color: ColorWay) => void;
  rangeSlug?: string;
  size?: "sm" | "md" | "lg";
}

export function ColorSwatch({
  color,
  selected,
  onClick,
  rangeSlug,
  size = "md",
}: ColorSwatchProps) {
  const sizeClasses = {
    sm: "w-10 h-10",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  };

  const swatchImage = rangeSlug
    ? `/images/ranges/${rangeSlug}/swatches/${color.slug}.jpg`
    : undefined;

  return (
    <motion.button
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(color)}
      className={cn(
        "rounded-md border-2 transition-all duration-200 cursor-pointer group relative overflow-hidden",
        sizeClasses[size],
        selected
          ? "border-accent shadow-[0_0_0_3px] shadow-accent-light"
          : "border-transparent hover:shadow-md"
      )}
      style={{ backgroundColor: color.hex }}
      title={`${color.name} (${color.code})`}
      aria-label={`Select ${color.name} colour`}
      aria-pressed={selected}
    >
      {swatchImage && (
        <img
          src={swatchImage}
          alt={color.name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      )}
      {/* Tooltip */}
      <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-body-sm text-brand-600 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10">
        {color.name}
      </span>
    </motion.button>
  );
}
