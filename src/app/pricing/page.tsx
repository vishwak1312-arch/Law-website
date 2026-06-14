import type { Metadata } from "next";
import SubscriptionPlans from "@/components/home/SubscriptionPlans";
import { FadeUp } from "@/components/Motion";
import BookConsultationCTA from "@/components/home/BookConsultationCTA";
import { siteConfig } from "@/lib/data";
import { Shield, CheckCircle, Clock, Users, Headphones, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Pricing & Plans",
  description: `Explore DSP Law Associates' affordable legal subscription plans. Choose from Basic, Professional, or Elite plans for comprehensive legal protection.`,
};

const guarantees = [
  { icon: Shield, title: "100% Confidential", desc: "All consultations are privileged and confidential" },
  { icon: CheckCircle, title: "No Hidden Fees", desc: "Transparent pricing with no surprises" },
  { icon: Clock, title: "Flexible Plans", desc: "Upgrade, downgrade, or cancel anytime" },
  { icon: Users, title: "Expert Advocates", desc: "20+ years of legal expertise at your service" },
  { icon: Headphones, title: "Dedicated Support", desc: "Direct access to your legal team" },
  { icon: FileText, title: "Document Delivery", desc: "All legal documents delivered digitally" },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-4">
              Plans & Pricing
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
              Affordable Legal Protection
            </h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">
              Choose the right legal subscription plan for your personal or business needs. All plans include access to experienced advocates.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Guarantees Bar */}
      <section className="py-12 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {guarantees.map(({ icon: Icon, title, desc }, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="text-center">
                  <Icon className="w-6 h-6 text-navy mx-auto mb-2" />
                  <p className="text-sm font-semibold text-navy">{title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <SubscriptionPlans />

      {/* FAQ for Pricing */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-navy/10 text-navy text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-4">
              FAQ
            </span>
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-navy">Pricing Questions</h2>
          </div>

          <div className="space-y-4">
            {[
              { q: "Can I change my plan later?", a: "Yes! You can upgrade or downgrade your subscription plan at any time. The pricing difference will be adjusted in your next billing cycle." },
              { q: "Is GST included in the pricing?", a: "No, all prices shown are exclusive of GST (18%). GST will be applied at checkout as per applicable laws." },
              { q: "What payment methods do you accept?", a: "We accept UPI, net banking, credit cards, debit cards, and bank transfers. We also accept payments via our secure online payment portal." },
              { q: "Can I cancel my subscription?", a: "Yes, you can cancel your subscription at any time. Your plan will remain active until the end of your current billing period." },
              { q: "Do you offer custom plans for businesses?", a: "Absolutely! We offer tailored legal plans for businesses of all sizes. Contact us at 9963121717 to discuss your specific requirements." },
              { q: "What happens if I need more consultations than my plan allows?", a: "Additional consultations can be booked at a discounted rate for active subscribers. Elite plan members enjoy unlimited consultations." },
            ].map((faq, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <details className="bg-light rounded-xl border border-gray-100 overflow-hidden group">
                  <summary className="flex items-center justify-between p-5 cursor-pointer text-navy font-medium hover:bg-gray-50/50 transition-colors">
                    {faq.q}
                    <span className="w-6 h-6 rounded-full bg-navy/5 flex items-center justify-center shrink-0 ml-4 text-navy text-sm">+</span>
                  </summary>
                  <div className="px-5 pb-5 text-sm text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                </details>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <BookConsultationCTA />
    </>
  );
}
