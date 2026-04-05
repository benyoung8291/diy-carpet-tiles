import { Metadata } from "next";
import { ContactClient } from "./contact-client";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";

export const metadata: Metadata = {
  title: "Contact Us | Free Carpet Tile Quote & Samples",
  description:
    "Get a free quote for DIY carpet tiles, request free samples, or ask about rental and investment property flooring. Call 1300 207 915 or email modular@premrest.com.au. Delivering Australia-wide.",
  alternates: { canonical: "https://modularcarpet.com.au/contact" },
  openGraph: {
    title: "Contact Modular Carpet by Premrest",
    description: "Get a free quote for DIY carpet tiles, request free samples, or ask about flooring for rental properties, investment properties, and hotels.",
    url: "https://modularcarpet.com.au/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd items={[
        { name: "Home", url: "https://modularcarpet.com.au" },
        { name: "Contact", url: "https://modularcarpet.com.au/contact" },
      ]} />
      <ContactClient />
    </>
  );
}
