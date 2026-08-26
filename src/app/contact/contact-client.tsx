"use client";

import { motion } from "framer-motion";
import { Phone, Mail, Truck, Clock, ExternalLink } from "lucide-react";
import { Section } from "@/components/ui/section";
import { EnquiryForm } from "@/components/shared/enquiry-form";

const contactDetails = [
  {
    icon: Phone,
    label: "Phone",
    value: "1300 207 915",
    href: "tel:1300207915",
  },
  {
    icon: Mail,
    label: "Email",
    value: "modular@premrest.com.au",
    href: "mailto:modular@premrest.com.au",
  },
  {
    icon: Truck,
    label: "Delivery",
    value: "Flat rate shipping, Australia-wide",
    href: undefined,
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Mon–Fri 8:30am – 5:00pm AEST",
    href: undefined,
  },
];

export function ContactClient() {
  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 bg-brand-900">
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <p className="overline text-accent mb-4">Get in Touch</p>
            <h1 className="font-serif text-display-lg md:text-display-xl text-white mb-6 text-balance">
              Request a Quote or Free Samples
            </h1>
            <p className="text-body-lg text-brand-300 max-w-2xl">
              Call 1300 207 915 or send the form. We reply within one business day. Samples ship Australia-wide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form + Contact Info */}
      <Section background="white">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
          {/* Form */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-serif text-heading-lg text-brand-800 mb-2">
                Send Us an Enquiry
              </h2>
              <p className="text-body-md text-brand-500 mb-8">
                Fill in the form below and we&apos;ll get back to you with a
                personalised quote, sample pack, or expert advice.
              </p>
              <EnquiryForm />
            </motion.div>
          </div>

          {/* Contact Details */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-serif text-heading-md text-brand-800 mb-6">
                  Contact Details
                </h3>
                <div className="space-y-5">
                  {contactDetails.map((detail) => (
                    <div key={detail.label} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-accent-light flex items-center justify-center flex-shrink-0">
                        <detail.icon className="w-5 h-5 text-accent" />
                      </div>
                      <div>
                        <p className="text-label text-brand-400 uppercase mb-0.5">
                          {detail.label}
                        </p>
                        {detail.href ? (
                          <a
                            href={detail.href}
                            className="text-body-md text-brand-700 hover:text-accent transition-colors"
                          >
                            {detail.value}
                          </a>
                        ) : (
                          <p className="text-body-md text-brand-700">
                            {detail.value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Premrest link */}
              <div className="bg-brand-100 rounded-lg p-6">
                <p className="text-label text-brand-400 uppercase mb-2">
                  A Premrest Brand
                </p>
                <p className="text-body-sm text-brand-500 mb-4">
                  Modular Carpet is proudly distributed by Premrest - one of
                  Australia&apos;s trusted commercial and residential flooring
                  specialists.
                </p>
                <a
                  href="https://premrest.com.au"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-body-sm text-accent hover:text-accent-hover font-semibold transition-colors"
                >
                  Visit premrest.com.au
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>

              {/* Quick actions */}
              <div className="bg-teal-light rounded-lg p-6">
                <h4 className="font-semibold text-brand-800 mb-3">
                  Quick Actions
                </h4>
                <ul className="space-y-2 text-body-sm text-brand-600">
                  <li>
                    <span className="font-medium text-teal">Free Samples</span>{" "}
                    - Mention your preferred range and colours in the form above
                  </li>
                  <li>
                    <span className="font-medium text-teal">Quotes</span> - Include
                    your approximate room size for faster pricing
                  </li>
                  <li>
                    <span className="font-medium text-teal">Technical</span> - Ask
                    about subfloor suitability, moisture, or acoustic performance
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </>
  );
}
