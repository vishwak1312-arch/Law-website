"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading, FadeUp } from "@/components/Motion";
import { Plus, Minus } from "lucide-react";
import { faqs } from "@/lib/data";
import Link from "next/link";

export default function FAQPreview() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 lg:py-28 bg-light">
      <div className="max-w-3xl mx-auto px-6">
        <SectionHeading
          label="FAQ"
          title="Frequently Asked Questions"
          description="Find answers to common questions about our services and processes."
        />

        <div className="space-y-3">
          {faqs.slice(0, 5).map((faq, i) => (
            <FadeUp key={i} delay={i * 0.05}>
              <div className="bg-white rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50/50 transition-colors"
                  aria-expanded={open === i}
                >
                  <span className="font-medium text-navy pr-4">{faq.question}</span>
                  <span className="shrink-0 w-8 h-8 rounded-full bg-navy/5 flex items-center justify-center">
                    {open === i ? <Minus className="w-4 h-4 text-gold" /> : <Plus className="w-4 h-4 text-navy" />}
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-50 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </FadeUp>
          ))}
        </div>

        <FadeUp delay={0.3} className="text-center mt-8">
          <Link href="/faq" className="text-gold font-semibold text-sm hover:text-gold-dark transition-colors">
            View All FAQs →
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
