import { Metadata } from "next";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact Us | Free Carpet Tile Quote & Samples",
  description:
    "Get a free quote for DIY carpet tiles, request free samples, or ask about rental and investment property flooring. Call 1300 207 915 or email modular@premrest.com.au. Delivering Australia-wide.",
};

export default function ContactPage() {
  return <ContactClient />;
}
