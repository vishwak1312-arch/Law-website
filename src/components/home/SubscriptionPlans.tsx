"use client";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { SectionHeading, FadeUp } from "@/components/Motion";
import {
  CheckCircle,
  Star,
  Shield,
  Zap,
  Crown,
  ArrowRight,
  Phone,
  FileText,
  Scale,
  Users,
  Clock,
  MessageCircle,
  Sparkles,
} from "lucide-react";

const plans = [
  {
    id: "basic",
    name: "Basic",
    tagline: "Essential Legal Support",
    price: 2999,
    originalPrice: 4999,
    period: "per month",
    icon: FileText,
    popular: false,
    cta: "Get Started",
    ctaLink: "/contact",
    features: [
      { text: "1 Legal Consultation per month (30 min)", included: true },
      { text: "Phone & Email Support", included: true },
      { text: "Basic Document Review (up to 5 pages)", included: true },
      { text: "Legal Advice via WhatsApp", included: true },
      { text: "Monthly Legal Newsletter", included: true },
      { text: "Contract Drafting", included: false },
      { text: "Court Representation", included: false },
      { text: "Priority Scheduling", included: false },
      { text: "Dedicated Case Manager", included: false },
    ],
  },
  {
    id: "professional",
    name: "Professional",
    tagline: "Comprehensive Legal Care",
    price: 5999,
    originalPrice: 8999,
    period: "per month",
    icon: Scale,
    popular: true,
    cta: "Subscribe Now",
    ctaLink: "/contact",
    features: [
      { text: "3 Legal Consultations per month (45 min each)", included: true },
      { text: "Phone, Email & WhatsApp Support", included: true },
      { text: "Document Review (up to 20 pages)", included: true },
      { text: "1 Contract Drafting per month", included: true },
      { text: "Legal Notice Preparation", included: true },
      { text: "Priority Scheduling", included: true },
      { text: "Monthly Legal Newsletter", included: true },
      { text: "Court Representation", included: false },
      { text: "Dedicated Case Manager", included: false },
    ],
  },
  {
    id: "elite",
    name: "Elite",
    tagline: "Premium Legal Partnership",
    price: 14999,
    originalPrice: 19999,
    period: "per month",
    icon: Crown,
    popular: false,
    cta: "Book Now",
    ctaLink: "/contact",
    features: [
      { text: "Unlimited Legal Consultations", included: true },
      { text: "24/7 Priority Support (Phone, Email, WhatsApp)", included: true },
      { text: "Unlimited Document Review & Drafting", included: true },
      { text: "Contract Drafting & Negotiation", included: true },
      { text: "Legal Notice & Response Preparation", included: true },
      { text: "Court Representation (up to 2 hearings/month)", included: true },
      { text: "Dedicated Case Manager", included: true },
      { text: "Priority Scheduling & Same-day Appointments", included: true },
      { text: "Quarterly Legal Audit for Business Clients", included: true },
    ],
  },
];

const addOns = [
  { name: "Will Drafting & Registration", price: "₹4,999", icon: FileText, description: "Legally valid will preparation with registration assistance" },
  { name: "Property Verification", price: "₹7,999", icon: Shield, description: "Complete title search, encumbrance check & verification report" },
  { name: "Company Registration", price: "₹9,999", icon: Users, description: "End-to-end company incorporation with all compliance documents" },
  { name: "Court Hearing (Single)", price: "₹3,999", icon: Scale, description: "Single court hearing representation with case preparation" },
];

export default function SubscriptionPlans() {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section className="py-20 lg:py-28 bg-light relative overflow-hidden" id="pricing">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-navy/[0.02] rounded-full blur-3xl -translate-y-1/2 translate-x-1/4" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-navy/[0.02] rounded-full blur-3xl translate-y-1/2 -translate-x-1/4" />

      <div className="max-w-7xl mx-auto px-6 relative">
        <SectionHeading
          label="Pricing"
          title="Legal Subscription Plans"
          description="Affordable legal protection for individuals and businesses. Choose a plan that fits your needs."
        />

        {/* Billing Toggle */}
        <FadeUp>
          <div className="flex items-center justify-center gap-4 mb-12">
            <span className={`text-sm font-medium transition-colors ${billing === "monthly" ? "text-navy" : "text-gray-400"}`}>
              Monthly
            </span>
            <button
              onClick={() => setBilling(billing === "monthly" ? "yearly" : "monthly")}
              className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                billing === "yearly" ? "bg-navy" : "bg-gray-300"
              }`}
              aria-label="Toggle billing period"
            >
              <motion.div
                className="absolute top-0.5 left-0.5 w-6 h-6 bg-white rounded-full shadow-md"
                animate={{ x: billing === "yearly" ? 28 : 0 }}
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </button>
            <span className={`text-sm font-medium transition-colors ${billing === "yearly" ? "text-navy" : "text-gray-400"}`}>
              Yearly
            </span>
            {billing === "yearly" && (
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="inline-flex items-center gap-1 px-2.5 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full"
              >
                <Sparkles className="w-3 h-3" />
                Save 20%
              </motion.span>
            )}
          </div>
        </FadeUp>

        {/* Plan Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
          {plans.map((plan, i) => {
            const Icon = plan.icon;
            const displayPrice = billing === "yearly"
              ? Math.round(plan.price * 12 * 0.8)
              : plan.price;
            const displayOriginal = billing === "yearly"
              ? Math.round(plan.originalPrice * 12 * 0.8)
              : plan.originalPrice;
            const displayPeriod = billing === "yearly" ? "per year" : "per month";

            return (
              <FadeUp key={plan.id} delay={i * 0.1}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className={`relative rounded-2xl overflow-hidden h-full flex flex-col ${
                    plan.popular
                      ? "bg-navy text-white shadow-2xl shadow-navy/20 ring-2 ring-navy scale-[1.02] lg:scale-105 z-10"
                      : "bg-white text-navy border border-gray-100 shadow-lg hover:shadow-xl"
                  } transition-shadow duration-500`}
                >
                  {/* Recommended badge */}
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 flex justify-center -translate-y-0">
                      <span className="inline-flex items-center gap-1.5 px-4 py-1.5 bg-white text-navy text-xs font-bold uppercase tracking-wider rounded-b-lg shadow-md">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                        Recommended
                      </span>
                    </div>
                  )}

                  {/* Card Header */}
                  <div className={`p-8 pb-6 ${plan.popular ? "pt-12" : ""}`}>
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`font-heading text-xl font-bold ${plan.popular ? "text-white" : "text-navy"}`}>
                          {plan.name}
                        </h3>
                        <p className={`text-sm mt-1 ${plan.popular ? "text-white/60" : "text-gray-500"}`}>
                          {plan.tagline}
                        </p>
                      </div>
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        plan.popular ? "bg-white/10" : "bg-navy/5"
                      }`}>
                        <Icon className={`w-6 h-6 ${plan.popular ? "text-white" : "text-navy"}`} />
                      </div>
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="flex items-baseline gap-2">
                        <span className={`text-sm line-through ${plan.popular ? "text-white/40" : "text-gray-400"}`}>
                          ₹{displayOriginal.toLocaleString("en-IN")}
                        </span>
                      </div>
                      <div className="flex items-baseline gap-1.5">
                        <span className={`text-4xl font-bold ${plan.popular ? "text-white" : "text-navy"}`}>
                          ₹{displayPrice.toLocaleString("en-IN")}
                        </span>
                        <span className={`text-sm ${plan.popular ? "text-white/50" : "text-gray-400"}`}>
                          /{displayPeriod}
                        </span>
                      </div>
                      <p className={`text-xs mt-1.5 ${plan.popular ? "text-white/40" : "text-gray-400"}`}>
                        excluding GST
                      </p>
                    </div>

                    {/* CTA Button */}
                    <Link
                      href={plan.ctaLink}
                      className={`flex items-center justify-center gap-2 w-full py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${
                        plan.popular
                          ? "bg-white text-navy hover:bg-gray-100 shadow-lg"
                          : "bg-navy text-white hover:bg-navy-light shadow-md"
                      }`}
                    >
                      {plan.cta}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Divider */}
                  <div className={`mx-8 border-t ${plan.popular ? "border-white/10" : "border-gray-100"}`} />

                  {/* Features */}
                  <div className="p-8 pt-6 flex-1">
                    <ul className="space-y-3.5">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-3">
                          <CheckCircle
                            className={`w-5 h-5 shrink-0 mt-0.5 ${
                              feature.included
                                ? plan.popular
                                  ? "text-green-400"
                                  : "text-green-500"
                                : plan.popular
                                  ? "text-white/20"
                                  : "text-gray-200"
                            }`}
                          />
                          <span
                            className={`text-sm leading-relaxed ${
                              feature.included
                                ? plan.popular
                                  ? "text-white/80"
                                  : "text-gray-600"
                                : plan.popular
                                  ? "text-white/25 line-through"
                                  : "text-gray-300 line-through"
                            }`}
                          >
                            {feature.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </FadeUp>
            );
          })}
        </div>

        {/* Add-on Services */}
        <FadeUp>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-1.5 bg-navy/10 text-navy text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-4">
                Add-On Services
              </span>
              <h3 className="font-heading text-2xl md:text-3xl font-bold text-navy">
                Need Something Specific?
              </h3>
              <p className="text-gray-500 text-sm mt-2 max-w-xl mx-auto">
                Available as standalone services or add-ons to any subscription plan.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {addOns.map((addon, i) => {
                const AddonIcon = addon.icon;
                return (
                  <FadeUp key={i} delay={i * 0.08}>
                    <div className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm hover:shadow-lg hover:border-navy/10 transition-all duration-500 group">
                      <div className="flex items-start gap-4">
                        <div className="w-11 h-11 rounded-lg bg-navy/5 flex items-center justify-center shrink-0 group-hover:bg-navy/10 transition-colors">
                          <AddonIcon className="w-5 h-5 text-navy" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2 mb-1">
                            <h4 className="font-semibold text-navy text-sm">{addon.name}</h4>
                            <span className="text-navy font-bold text-sm whitespace-nowrap">{addon.price}</span>
                          </div>
                          <p className="text-xs text-gray-500 leading-relaxed">{addon.description}</p>
                        </div>
                      </div>
                    </div>
                  </FadeUp>
                );
              })}
            </div>

            {/* Contact CTA */}
            <div className="text-center mt-10">
              <p className="text-sm text-gray-500 mb-4">
                Need a custom plan for your business? We&apos;ll create one tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-all text-sm shadow-lg hover:-translate-y-0.5"
                >
                  <MessageCircle className="w-4 h-4" />
                  Contact for Custom Plan
                </Link>
                <a
                  href="tel:9963121717"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-all text-sm"
                >
                  <Phone className="w-4 h-4" />
                  Call: 9963121717
                </a>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
