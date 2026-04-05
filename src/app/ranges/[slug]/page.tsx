import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ranges, getRangeBySlug } from "@/lib/data";
import { RangePageClient } from "./range-page-client";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return ranges.map((range) => ({ slug: range.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const range = getRangeBySlug(params.slug);
  if (!range) return {};

  return {
    title: `${range.name} Carpet Tiles`,
    description: `${range.description} ${range.colorways.length} colourways available. 500 × 1000 mm modular carpet tiles with 15-year warranty.`,
  };
}

export default function RangePage({ params }: Props) {
  const range = getRangeBySlug(params.slug);
  if (!range) notFound();

  return <RangePageClient range={range} />;
}
