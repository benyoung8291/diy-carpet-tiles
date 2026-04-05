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
    default: "Modular Carpet | Premium Carpet Tiles for Australian Homes",
    template: "%s | Modular Carpet by Premrest",
  },
  description:
    "Seamless modular carpet tiles that look and feel like broadloom. DIY installation, replaceable tiles, breathable backing, 15-year warranty. Premium carpet tiles by Premrest.",
  keywords: [
    "carpet tiles",
    "modular carpet",
    "residential carpet tiles",
    "DIY carpet",
    "seamless carpet tiles",
    "Australian carpet tiles",
    "Premrest",
    "carpet tile installation",
  ],
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: "Modular Carpet by Premrest",
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
