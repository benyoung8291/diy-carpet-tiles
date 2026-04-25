import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-sans",
  weight: "100 900",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default:
      "Modular Carpet Tiles - Hotels, Homes, and Rentals | Premrest Australia",
    template: "%s | Modular Carpet by Premrest",
  },
  description:
    "Commercial-grade modular carpet tiles for hotels, motels, considered homes, and investment properties. 15-year warranty, solution-dyed nylon, replace damaged tiles instead of whole rooms. Supply-only or supply-and-install in Melbourne, Sydney, and Brisbane.",
  keywords: [
    "carpet tiles",
    "modular carpet",
    "hotel carpet",
    "motel carpet",
    "commercial carpet tiles",
    "carpet tiles Australia",
    "hospitality flooring",
    "rental flooring",
    "investment property flooring",
    "residential carpet tiles",
    "solution-dyed nylon carpet",
    "carpet tiles for home",
    "carpet installation Melbourne",
    "carpet installation Sydney",
    "carpet installation Brisbane",
    "broadloom alternative",
    "Premrest",
  ],
  metadataBase: new URL("https://www.modularcarpet.com.au"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Modular Carpet by Premrest",
    title:
      "Modular Carpet Tiles - Hotels, Homes, and Rentals | Premrest Australia",
    description:
      "Commercial-grade modular carpet for hotels, considered homes, and investment properties. Replace damaged tiles instead of whole rooms. Supply-only or supply-and-install in Melbourne, Sydney, and Brisbane.",
    url: "https://www.modularcarpet.com.au",
    images: [
      {
        url: "/images/lifestyle/hero-home.jpg",
        width: 1200,
        height: 630,
        alt: "Modular Carpet tiles installed in an Australian living room",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Modular Carpet Tiles - Hotels, Homes, and Rentals | Premrest Australia",
    description:
      "Commercial-grade modular carpet for hotels, considered homes, and investment properties. Supply-only or supply-and-install in Melbourne, Sydney, and Brisbane.",
    images: ["/images/lifestyle/hero-home.jpg"],
  },
  alternates: {
    canonical: "https://www.modularcarpet.com.au",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-AU" className={geistSans.variable}>
      <body className="font-sans antialiased bg-brand-50 text-brand-800">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Modular Carpet by Premrest",
              legalName: "Premier Restorations Group Pty Ltd",
              url: "https://www.modularcarpet.com.au",
              telephone: "1300207915",
              email: "modular@premrest.com.au",
              areaServed: {
                "@type": "Country",
                name: "Australia",
              },
              brand: {
                "@type": "Brand",
                name: "Modular Carpet",
              },
              parentOrganization: {
                "@type": "Organization",
                name: "Premrest",
                url: "https://premrest.com.au",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Modular Carpet",
              url: "https://www.modularcarpet.com.au",
              description:
                "Premium DIY carpet tiles for Australian homes. No installer needed. 15-year commercial warranty.",
              publisher: {
                "@type": "Organization",
                name: "Premier Restorations Group Pty Ltd",
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.modularcarpet.com.au/#business",
              name: "Modular Carpet by Premrest",
              image: "https://www.modularcarpet.com.au/images/lifestyle/hero-home.jpg",
              telephone: "1300207915",
              email: "modular@premrest.com.au",
              url: "https://www.modularcarpet.com.au",
              address: {
                "@type": "PostalAddress",
                streetAddress: "1/99 Heyington Ave",
                addressLocality: "Thomastown",
                addressRegion: "VIC",
                postalCode: "3074",
                addressCountry: "AU",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -37.6833,
                longitude: 145.0167,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                opens: "08:30",
                closes: "17:00",
              },
              priceRange: "$$",
              areaServed: {
                "@type": "Country",
                name: "Australia",
              },
              description:
                "Premium DIY carpet tiles for Australian homes, rental properties, investment properties, and hotels. No installer needed. 15-year commercial warranty.",
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Carpet Tile Ranges",
                itemListElement: [
                  {
                    "@type": "OfferCatalog",
                    name: "Haven Range",
                    url: "https://www.modularcarpet.com.au/ranges/haven",
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Horizon Range",
                    url: "https://www.modularcarpet.com.au/ranges/horizon",
                  },
                ],
              },
            }),
          }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-white focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
