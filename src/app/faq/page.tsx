import type { Metadata } from "next";
import { FadeUp } from "@/components/Motion";
import FAQPreview from "@/components/home/FAQPreview";
import BookConsultationCTA from "@/components/home/BookConsultationCTA";

export const metadata: Metadata = { title: "FAQ", description: "Find answers to frequently asked questions about our legal services, fees, and processes." };

export default function FAQPage() {
  return (
    <>
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #C8A45D 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-4">Help Center</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Frequently Asked Questions</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Find answers to common questions about our services.</p>
          </FadeUp>
        </div>
      </section>
      <FAQPreview />
      <BookConsultationCTA />
    </>
  );
}
