import { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-jsonld";
import { PurchasePolicyClient } from "./purchase-policy-client";

export const metadata: Metadata = {
  title: "Purchase Policy, Returns and Terms of Sale",
  description:
    "Modular Carpet purchase policy, terms of sale, returns, refunds, shipping and delivery terms. Read before placing your order.",
  alternates: {
    canonical: "https://modularcarpet.com.au/purchase-policy",
  },
};

export default function PurchasePolicyPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://modularcarpet.com.au" },
          {
            name: "Purchase Policy",
            url: "https://modularcarpet.com.au/purchase-policy",
          },
        ]}
      />
      <PurchasePolicyClient />
    </>
  );
}
