"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Section } from "@/components/ui/section";

export function PurchasePolicyClient() {
  const lastUpdated = "6 April 2026";

  return (
    <>
      {/* Hero */}
      <section className="bg-brand-900 pt-32 pb-16">
        <div className="container-main">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <h1 className="font-serif text-display-md md:text-display-lg text-white mb-4">
              Purchase Policy &amp; Terms of Sale
            </h1>
            <p className="text-body-lg text-brand-300 max-w-2xl">
              Please read these terms carefully before placing an order. By
              submitting an order through our website, you agree to be bound by
              these terms.
            </p>
            <p className="text-body-sm text-brand-400 mt-4">
              Last updated: {lastUpdated}
            </p>
          </motion.div>
        </div>
      </section>

      <Section background="white">
        <div className="max-w-3xl mx-auto prose-policy">
          {/* 1. Business Details */}
          <h2>1. Seller Identification</h2>
          <p>
            All products sold through modularcarpet.com.au are sold by{" "}
            <strong>Premier Restorations Group Pty Ltd</strong> (ABN to be
            confirmed), trading as <strong>Premrest</strong>, located at 1/99
            Heyington Avenue, Thomastown VIC 3074, Australia. Phone: 1300 207
            915. Email: modular@premrest.com.au.
          </p>
          <p>
            &quot;Modular Carpet&quot; is a brand of Premrest. References to
            &quot;we&quot;, &quot;us&quot;, or &quot;our&quot; in this policy
            refer to Premier Restorations Group Pty Ltd.
          </p>

          {/* 2. Order Process & Acceptance */}
          <h2>2. Order Process and Acceptance</h2>
          <p>
            Submitting an order through our website constitutes an{" "}
            <strong>offer to purchase</strong>, not a binding contract. A
            binding contract is formed only when we confirm your order via email
            and process payment. We reserve the right to decline or cancel any
            order for any reason, including but not limited to product
            availability, pricing errors, or suspected fraudulent activity.
          </p>
          <p>
            By submitting an order, the customer acknowledges and agrees to all
            terms set out in this Purchase Policy. The order confirmation email
            will reference these terms. Customers are required to tick a
            checkbox confirming acceptance of this policy before their order can
            be submitted.
          </p>

          {/* 3. Pricing & Payment */}
          <h2>3. Pricing and Payment</h2>
          <ul>
            <li>
              All prices displayed on this website are in{" "}
              <strong>Australian Dollars (AUD)</strong> and are{" "}
              <strong>inclusive of GST</strong>.
            </li>
            <li>
              Prices are subject to change without notice. The price applicable
              to your order is the price displayed at the time of order
              confirmation.
            </li>
            <li>
              Payment is processed after order confirmation. We accept payment
              via bank transfer, credit card, or other methods as advised at the
              time of purchase.
            </li>
            <li>
              Orders are not dispatched until full payment has been received and
              cleared.
            </li>
          </ul>

          {/* 4. Product Descriptions */}
          <h2>4. Product Descriptions and Colour Accuracy</h2>
          <p>
            We make every effort to display product colours and descriptions
            accurately. However, actual carpet tile colours may vary slightly
            from images shown on screen due to differences in monitor
            calibrations, lighting conditions, and dye lot variations inherent
            in textile manufacturing.
          </p>
          <p>
            <strong>
              Colour variation between screen images and the delivered product
              does not constitute a product defect or fault and is not grounds
              for a return or refund.
            </strong>
          </p>
          <p>
            We strongly recommend requesting a physical sample before placing
            large orders. Samples can be requested via our{" "}
            <Link href="/contact" className="text-accent hover:text-accent-hover">
              contact page
            </Link>
            .
          </p>

          {/* 5. Shipping & Delivery */}
          <h2>5. Shipping and Delivery</h2>
          <ul>
            <li>
              A flat-rate shipping fee applies to all orders, as displayed at
              checkout. Shipping is Australia-wide.
            </li>
            <li>
              Estimated delivery timeframes are indicative only and are not
              guaranteed. Handling time is typically 1 to 3 business days.
              Transit times vary by location (typically 3 to 10 business days).
            </li>
            <li>
              We are not liable for delays caused by couriers, weather events,
              public holidays, or other circumstances beyond our reasonable
              control.
            </li>
            <li>
              <strong>Risk of loss and title</strong> pass to the customer upon
              delivery to the shipping address provided. It is the
              customer&apos;s responsibility to ensure the delivery address is
              correct and that someone is available to receive the goods.
            </li>
            <li>
              If a parcel is returned to us due to an incorrect address,
              refused delivery, or failure to collect, the customer is
              responsible for any re-delivery charges. We may deduct these
              charges from any refund.
            </li>
          </ul>

          {/* 6. Inspection Upon Delivery */}
          <h2>6. Inspection Upon Delivery</h2>
          <p>
            The customer must inspect all goods{" "}
            <strong>within 48 hours of delivery</strong>. Any visible damage,
            defects, or discrepancies in quantity must be reported to us in
            writing (email to modular@premrest.com.au) within this 48-hour
            window, accompanied by photographs.
          </p>
          <p>
            Failure to report issues within 48 hours may limit our ability to
            investigate and resolve claims. Goods that have been installed,
            cut, or modified in any way are considered accepted and cannot be
            returned.
          </p>

          {/* 7. Returns - Faulty/Defective */}
          <h2>7. Returns for Faulty or Defective Products</h2>
          <p>
            If a product is found to be faulty or defective upon delivery, we
            will, at our discretion:
          </p>
          <ul>
            <li>Replace the faulty product at no additional cost; or</li>
            <li>
              Issue a full refund for the faulty product (including any
              associated shipping costs for the faulty items).
            </li>
          </ul>
          <p>
            To make a claim for faulty goods, customers must provide
            photographic evidence of the defect and a description of the issue
            within the 48-hour inspection window described in Section 6.
          </p>
          <p>
            This section does not exclude, restrict, or modify any rights or
            remedies the customer may have under the Australian Consumer Law.
          </p>

          {/* 8. Returns - Change of Mind */}
          <h2>8. Change of Mind Returns</h2>
          <p>
            We are not legally required to offer change-of-mind returns.
            However, we may accept returns of unused product subject to{" "}
            <strong>all</strong> of the following conditions:
          </p>
          <ul>
            <li>
              The return request is made within <strong>14 days</strong> of
              delivery.
            </li>
            <li>
              The product is in its <strong>original, unopened packaging</strong>
              , unused, uninstalled, uncut, and in a condition suitable for
              resale.
            </li>
            <li>
              The customer contacts us at modular@premrest.com.au to obtain a
              Return Authorisation before returning any goods. Goods returned
              without prior authorisation will not be accepted.
            </li>
            <li>
              A <strong>restocking fee of 20% of the product value</strong>{" "}
              applies to all change-of-mind returns. This fee covers inspection,
              repackaging, and restocking costs.
            </li>
            <li>
              The customer is responsible for all return shipping costs. Goods
              must be returned via a trackable shipping method.
            </li>
            <li>
              The original flat-rate shipping fee is <strong>non-refundable</strong>.
            </li>
          </ul>
          <p>
            Refunds for approved change-of-mind returns will be calculated as
            the product purchase price minus the 20% restocking fee, minus
            original shipping. Refunds are processed within 10 business days of
            receiving and inspecting the returned goods.
          </p>
          <p>
            <strong>
              We reserve the right to refuse any change-of-mind return where
              the goods do not meet the above conditions, or where the goods
              show signs of use, installation, cutting, damage, or exposure to
              adhesive.
            </strong>
          </p>

          {/* 9. Non-Returnable Items */}
          <h2>9. Non-Returnable Items</h2>
          <p>The following items cannot be returned under any circumstances (except where the product is faulty):</p>
          <ul>
            <li>Products that have been installed, laid, adhered, cut, or modified.</li>
            <li>Products not in original packaging or in a condition unsuitable for resale.</li>
            <li>Custom or special orders.</li>
            <li>Products where more than 14 days have elapsed since delivery.</li>
          </ul>

          {/* 10. Refund Method */}
          <h2>10. Refund Method</h2>
          <p>
            Approved refunds will be issued to the original payment method
            used at the time of purchase. Refunds are processed within 10
            business days of approval. Depending on your financial institution,
            it may take an additional 5 to 10 business days for the refund to
            appear in your account.
          </p>
          <p>
            We do not issue refunds in cash, store credit, or to a different
            payment method than the one originally used, unless required by law.
          </p>

          {/* 11. Cancellations */}
          <h2>11. Order Cancellations</h2>
          <p>
            Orders may be cancelled without charge if the cancellation request
            is received <strong>before the order has been dispatched</strong>.
            Contact us immediately at modular@premrest.com.au or 1300 207 915.
          </p>
          <p>
            Once an order has been dispatched, it cannot be cancelled. The
            change-of-mind returns policy in Section 8 will apply.
          </p>
          <p>
            If we cancel your order (e.g. due to stock unavailability), you
            will receive a full refund of all amounts paid, including shipping.
          </p>

          {/* 12. Chargebacks & Disputes */}
          <h2>12. Payment Disputes and Chargebacks</h2>
          <p>
            By placing an order, you agree to contact us directly at
            modular@premrest.com.au to resolve any issues before initiating a
            payment dispute or chargeback with your bank or credit card
            provider.
          </p>
          <p>
            <strong>
              Initiating a chargeback without first contacting us and allowing
              a reasonable period (14 business days) to resolve the matter
              constitutes a breach of these terms.
            </strong>{" "}
            We will provide all transaction records, delivery confirmation,
            communication logs, and evidence of policy acceptance to the
            payment provider in response to any chargeback.
          </p>
          <p>
            Where a chargeback is found to be fraudulent or unjustified, we
            reserve the right to:
          </p>
          <ul>
            <li>
              Recover the full order value plus any fees incurred as a result
              of the chargeback.
            </li>
            <li>Refer the matter to a debt collection agency.</li>
            <li>
              Report the matter to the relevant authorities if fraud is
              suspected.
            </li>
          </ul>

          {/* 13. Warranty */}
          <h2>13. Product Warranty</h2>
          <p>
            Modular Carpet tiles come with a 15-year commercial-grade wear
            warranty. This warranty covers manufacturing defects in materials
            and workmanship under normal use and maintenance conditions.
          </p>
          <p>The warranty does not cover:</p>
          <ul>
            <li>Damage caused by improper installation, misuse, or neglect.</li>
            <li>Normal wear and tear, fading from direct sunlight exposure beyond normal conditions, or damage from chemicals or cleaning agents not recommended by us.</li>
            <li>Colour variation between production batches (dye lots).</li>
            <li>Products installed in applications not recommended by us.</li>
          </ul>

          {/* 14. Limitation of Liability */}
          <h2>14. Limitation of Liability</h2>
          <p>
            To the maximum extent permitted by law, our total liability for
            any claim arising out of or in connection with the supply of
            products is limited to the purchase price of the products in
            question.
          </p>
          <p>
            We are not liable for any indirect, incidental, special, or
            consequential damages, including but not limited to loss of
            profits, installation costs, removal costs, or costs of
            replacement flooring, except where required by the Australian
            Consumer Law.
          </p>

          {/* 15. Australian Consumer Law */}
          <h2>15. Australian Consumer Law</h2>
          <p>
            Nothing in this policy is intended to exclude, restrict, or modify
            any consumer guarantee or right under the Australian Consumer Law
            (Schedule 2 of the Competition and Consumer Act 2010). If any
            provision of this policy conflicts with the Australian Consumer
            Law, the Australian Consumer Law prevails to the extent of the
            inconsistency.
          </p>

          {/* 16. Privacy */}
          <h2>16. Privacy and Data</h2>
          <p>
            Personal information collected during the order process is used
            solely for order fulfilment, communication regarding your order,
            and compliance with legal obligations. We do not sell or share
            your personal information with third parties except as necessary
            to fulfil your order (e.g. courier services).
          </p>

          {/* 17. Governing Law */}
          <h2>17. Governing Law</h2>
          <p>
            These terms are governed by the laws of the State of Victoria,
            Australia. Any disputes arising from these terms or any purchase
            will be subject to the exclusive jurisdiction of the courts of
            Victoria.
          </p>

          {/* 18. Amendments */}
          <h2>18. Amendments to This Policy</h2>
          <p>
            We reserve the right to update or amend this policy at any time.
            The version in effect at the time of your order is the version that
            applies to your purchase. The current version is always available
            at this page.
          </p>

          {/* 19. Contact */}
          <h2>19. Contact Us</h2>
          <p>
            For any questions about this policy, or to report an issue with
            your order, please contact us:
          </p>
          <ul>
            <li>Email: modular@premrest.com.au</li>
            <li>Phone: 1300 207 915</li>
            <li>
              Address: 1/99 Heyington Avenue, Thomastown VIC 3074, Australia
            </li>
          </ul>

          {/* Acceptance */}
          <div className="mt-12 p-6 bg-brand-100 rounded-lg border border-brand-200">
            <h3 className="font-serif text-heading-sm text-brand-800 mb-3">
              Acknowledgement
            </h3>
            <p className="text-body-sm text-brand-600">
              By placing an order on modularcarpet.com.au, you confirm that you
              have read, understood, and agree to be bound by this Purchase
              Policy and Terms of Sale in their entirety. Your acceptance is
              recorded at the time of order submission.
            </p>
          </div>
        </div>
      </Section>
    </>
  );
}
