import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ranges, getRangeBySlug, SHARED_SPECS } from "@/lib/data";
import { RangePageClient } from "./range-page-client";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return ranges.map((range) => ({ slug: range.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const range = getRangeBySlug(params.slug);
  if (!range) return {};

  const title = `${range.name} Modular Carpet Tiles | ${range.colorways.length} Colourways`;
  const description = `${range.name} carpet tiles - ${range.tagline.toLowerCase()}. ${range.colorways.length} colourways. ${SHARED_SPECS.warranty}. Request free samples or a tailored quote. Supply Australia-wide.`;

  return {
    title,
    description,
    alternates: {
      canonical: `https://www.modularcarpet.com.au/ranges/${range.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `https://www.modularcarpet.com.au/ranges/${range.slug}`,
      images: [
        {
          url: range.heroImage,
          width: 1200,
          height: 630,
          alt: `${range.name} modular carpet tiles`,
        },
      ],
    },
    twitter: {
      title,
      description,
    },
  };
}

export default function RangePage({ params }: Props) {
  const range = getRangeBySlug(params.slug);
  if (!range) notFound();

  const productJsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${range.name} Carpet Tiles`,
    description: range.description,
    brand: {
      "@type": "Brand",
      name: "Modular Carpet",
    },
    image: `https://www.modularcarpet.com.au${range.heroImage}`,
    url: `https://www.modularcarpet.com.au/ranges/${range.slug}`,
  };

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.modularcarpet.com.au" },
        { name: "Ranges", url: "https://www.modularcarpet.com.au/ranges/haven" },
        { name: `${range.name} Carpet Tiles`, url: `https://www.modularcarpet.com.au/ranges/${range.slug}` },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <RangePageClient range={range} />
    </>
  );
}
