import type { Metadata } from "next";
import { FadeUp } from "@/components/Motion";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = { title: "Privacy Policy", description: `Privacy policy for ${siteConfig.name}.` };

export default function PrivacyPolicy() {
  return (
    <>
      <section className="bg-navy py-16 lg:py-20"><div className="max-w-4xl mx-auto px-6 text-center"><FadeUp><h1 className="font-heading text-4xl font-bold text-white">Privacy Policy</h1><p className="text-white/60 mt-2">Last updated: January 1, 2026</p></FadeUp></div></section>
      <section className="py-16 lg:py-20"><div className="max-w-4xl mx-auto px-6 prose prose-gray">
        <FadeUp>
          <h2>Introduction</h2>
          <p>{siteConfig.name} (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.</p>
          <h2>Information We Collect</h2>
          <p>We may collect personal information that you voluntarily provide to us, including:</p>
          <ul><li>Name, email address, and phone number</li><li>Information about your legal matter</li><li>Payment information (processed securely through Stripe)</li><li>Communication preferences</li></ul>
          <h2>How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul><li>Respond to your inquiries and provide legal services</li><li>Process payments and schedule appointments</li><li>Send relevant legal updates and communications</li><li>Improve our website and services</li><li>Comply with legal obligations</li></ul>
          <h2>Data Security</h2>
          <p>We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
          <h2>Cookies</h2>
          <p>Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You may adjust your browser settings to refuse cookies.</p>
          <h2>Third-Party Services</h2>
          <p>We may use third-party services such as Google Analytics, Calendly, and Stripe that have their own privacy policies governing the use of your information.</p>
          <h2>Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal information. To exercise these rights, please contact us at {siteConfig.email}.</p>
          <h2>Contact Us</h2>
          <p>If you have questions about this Privacy Policy, please contact us at {siteConfig.email} or call {siteConfig.phone}.</p>
        </FadeUp>
      </div></section>
    </>
  );
}
