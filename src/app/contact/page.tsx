import { Metadata } from "next";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a free quote, request samples, or book a consultation for Modular Carpet tiles. Contact Premrest for all your carpet tile enquiries.",
};

export default function ContactPage() {
  return <ContactClient />;
}
