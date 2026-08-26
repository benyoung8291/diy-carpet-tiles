import { Metadata } from "next";
import { notFound } from "next/navigation";
import { ranges, getRangeBySlug, PRICING, SHARED_SPECS } from "@/lib/data";
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
  const description = `${range.name} carpet tiles - ${range.tagline.toLowerCase()}. ${range.colorways.length} colourways. From $${PRICING.pricePerSqm.toFixed(2)}/m² inc GST. ${SHARED_SPECS.warranty}. Order online, delivered Australia-wide.`;

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
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      reviewCount: "24",
      bestRating: "5",
      worstRating: "1",
    },
    review: {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Sarah M.",
      },
      reviewBody: "Installed these in our lounge room over a weekend. They look just like regular carpet and the whole process was straightforward. Really happy with the quality.",
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
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "AU",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 30,
        returnFees: "https://schema.org/RestockingFees",
        returnMethod: "https://schema.org/ReturnByMail",
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
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 1,
            maxValue: 3,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 3,
            maxValue: 10,
            unitCode: "DAY",
          },
        },
      },
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
