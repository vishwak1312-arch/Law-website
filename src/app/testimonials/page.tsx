import type { Metadata } from "next";
import Image from "next/image";
import { FadeUp, SectionHeading } from "@/components/Motion";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import BookConsultationCTA from "@/components/home/BookConsultationCTA";

export const metadata: Metadata = { title: "Testimonials", description: "Read what our clients say about their experience with Vamshi Associations." };

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #C8A45D 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-4">Client Reviews</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Testimonials</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Hear directly from our clients about their experience.</p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full relative">
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-gold/10" />
                  <div className="flex gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 italic">&ldquo;{t.review}&rdquo;</p>
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <Image src={t.photo} alt={t.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover border-2 border-gold/20" />
                    <div>
                      <p className="font-heading font-semibold text-navy text-sm">{t.name}</p>
                      <p className="text-xs text-gray-400">{t.role}</p>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <BookConsultationCTA />
    </>
  );
}
