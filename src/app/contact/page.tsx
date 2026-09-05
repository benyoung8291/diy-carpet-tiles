import { Metadata } from "next";
import { ContactClient } from "./contact-client";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "Contact | Hospitality Install Quotes",
  description:
    "Request a Premrest supply-and-install quote for hotels, motels, serviced apartments, and hospitality venues in Melbourne, Sydney, and Brisbane. Call 1300 207 915 or email modular@premrest.com.au.",
  alternates: { canonical: "https://www.modularcarpet.com.au/contact" },
  openGraph: {
    title: "Contact Modular Carpet by Premrest",
    description:
      "Request a hospitality install quote for hotels, motels, and serviced apartments in Melbourne, Sydney, and Brisbane. Call 1300 207 915.",
    url: "https://www.modularcarpet.com.au/contact",
  },
  twitter: {
    title: "Contact Modular Carpet by Premrest",
    description:
      "Request a hospitality install quote for hotels, motels, and serviced apartments in Melbourne, Sydney, and Brisbane.",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://www.modularcarpet.com.au" },
        { name: "Contact", url: "https://www.modularcarpet.com.au/contact" },
      ]} />
      <ContactClient />
    </>
  );
}
