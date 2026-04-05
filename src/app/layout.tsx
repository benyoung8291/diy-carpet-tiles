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
    "Premium DIY carpet tiles you install yourself — no flooring retailer, no carpet installer, no tradesperson. Looks like broadloom, replaces like tiles. From $58.50/m² inc GST. 15-year warranty. Free delivery Australia-wide.",
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
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Modular Carpet by Premrest",
    title: "DIY Carpet Tiles — No Installer Needed | Modular Carpet Australia",
    description:
      "Premium carpet tiles you install yourself. Skip the carpet store and the installer. From $58.50/m². 15-year warranty. Delivered Australia-wide.",
  },
  alternates: {
    canonical: "https://modularcarpet.com.au",
  },
  robots: {
    index: true,
    follow: true,
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
                "Premium DIY carpet tiles for Australian homes. No installer needed. From $58.50/m².",
              publisher: {
                "@type": "Organization",
                name: "Premier Restorations Group Pty Ltd",
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
