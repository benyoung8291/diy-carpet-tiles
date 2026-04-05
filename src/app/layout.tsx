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
    default: "DIY Carpet Tiles | No Installer Needed | Modular Carpet Australia",
    template: "%s | Modular Carpet by Premrest",
  },
  description:
    "Premium DIY carpet tiles you install yourself - no flooring retailer, no carpet installer, no tradesperson. Looks like broadloom, replaces like tiles. 15-year commercial warranty. Delivered Australia-wide.",
  keywords: [
    "carpet tiles",
    "DIY carpet",
    "DIY carpet tiles",
    "home carpet",
    "DIY flooring",
    "rental flooring",
    "carpet tiles Australia",
    "modular carpet",
    "residential carpet tiles",
    "carpet tiles for home",
    "self-install carpet",
    "carpet tiles rental property",
    "investment property flooring",
    "replacement carpet tiles",
    "broadloom alternative",
    "Premrest",
  ],
  metadataBase: new URL("https://modularcarpet.com.au"),
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Modular Carpet by Premrest",
    title: "DIY Carpet Tiles - No Installer Needed | Modular Carpet Australia",
    description:
      "Premium carpet tiles you install yourself. Skip the carpet store and the installer. 15-year warranty. Delivered Australia-wide.",
    url: "https://modularcarpet.com.au",
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
    title: "DIY Carpet Tiles - No Installer Needed | Modular Carpet Australia",
    description:
      "Premium carpet tiles you install yourself. Skip the carpet store and the installer. 15-year warranty. Delivered Australia-wide.",
    images: ["/images/lifestyle/hero-home.jpg"],
  },
  alternates: {
    canonical: "https://modularcarpet.com.au",
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
              url: "https://modularcarpet.com.au",
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
              url: "https://modularcarpet.com.au",
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
              "@id": "https://modularcarpet.com.au/#business",
              name: "Modular Carpet by Premrest",
              image: "https://modularcarpet.com.au/images/lifestyle/hero-home.jpg",
              telephone: "1300207915",
              email: "modular@premrest.com.au",
              url: "https://modularcarpet.com.au",
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
                    url: "https://modularcarpet.com.au/ranges/haven",
                  },
                  {
                    "@type": "OfferCatalog",
                    name: "Horizon Range",
                    url: "https://modularcarpet.com.au/ranges/horizon",
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
