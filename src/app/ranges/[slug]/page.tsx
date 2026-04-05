import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ranges, getRangeBySlug, PRICING } from "@/lib/data";
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

  return {
    title: `${range.name} DIY Carpet Tiles | ${range.colorways.length} Colours | No Installer Needed`,
    description: `${range.name} carpet tiles - ${range.tagline.toLowerCase()}. ${range.colorways.length} colourways. DIY installation, no tradesperson needed. From $${PRICING.pricePerSqm.toFixed(2)}/m² inc GST. 15-year warranty. Order online, delivered Australia-wide.`,
    alternates: {
      canonical: `https://modularcarpet.com.au/ranges/${range.slug}`,
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
    offers: {
      "@type": "Offer",
      price: PRICING.pricePerSqm.toFixed(2),
      priceCurrency: "AUD",
      priceSpecification: {
        "@type": "UnitPriceSpecification",
        price: PRICING.pricePerSqm.toFixed(2),
        priceCurrency: "AUD",
        referenceQuantity: {
          "@type": "QuantitativeValue",
          value: 1,
          unitCode: "MTK",
        },
      },
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: "Premier Restorations Group Pty Ltd",
      },
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: PRICING.shippingFlat.toString(),
          currency: "AUD",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "AU",
        },
      },
    },
    image: `https://modularcarpet.com.au${range.heroImage}`,
    url: `https://modularcarpet.com.au/ranges/${range.slug}`,
  };

  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://modularcarpet.com.au" },
        { name: "Ranges", url: "https://modularcarpet.com.au/ranges/haven" },
        { name: `${range.name} Carpet Tiles`, url: `https://modularcarpet.com.au/ranges/${range.slug}` },
      ]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }}
      />
      <RangePageClient range={range} />
    </>
  );
}
