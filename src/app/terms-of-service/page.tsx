import type { Metadata } from "next";
import { FadeUp } from "@/components/Motion";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = { title: "Terms of Service", description: `Terms of service for ${siteConfig.name}.` };

export default function TermsOfService() {
  return (
    <>
      <section className="bg-navy py-16 lg:py-20"><div className="max-w-4xl mx-auto px-6 text-center"><FadeUp><h1 className="font-heading text-4xl font-bold text-white">Terms of Service</h1><p className="text-white/60 mt-2">Last updated: January 1, 2026</p></FadeUp></div></section>
      <section className="py-16 lg:py-20"><div className="max-w-4xl mx-auto px-6 prose prose-gray">
        <FadeUp>
          <h2>Agreement to Terms</h2>
          <p>By accessing or using the {siteConfig.name} website, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access the website.</p>
          <h2>Use of Website</h2>
          <p>This website is provided for informational purposes only. The content on this website does not constitute legal advice and should not be relied upon as such. An attorney-client relationship is not established by using this website or contacting us through it.</p>
          <h2>Intellectual Property</h2>
          <p>All content on this website, including text, images, logos, and design, is the property of {siteConfig.name} and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.</p>
          <h2>Limitation of Liability</h2>
          <p>{siteConfig.name} shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use the website.</p>
          <h2>Payments</h2>
          <p>All payments made through our website are processed securely through Stripe. By making a payment, you agree to Stripe&apos;s terms of service. Refund policies are determined on a case-by-case basis.</p>
          <h2>Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of the State of New York, without regard to its conflict of law provisions.</p>
          <h2>Contact</h2>
          <p>For questions about these Terms, contact us at {siteConfig.email}.</p>
        </FadeUp>
      </div></section>
    </>
  );
}
