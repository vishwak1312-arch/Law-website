"use client";
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { SectionHeading, FadeUp } from "@/components/Motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";

export default function TestimonialsCarousel() {
  const [idx, setIdx] = useState(0);
  const next = () => setIdx((i) => (i + 1) % testimonials.length);
  const prev = () => setIdx((i) => (i - 1 + testimonials.length) % testimonials.length);
  const t = testimonials[idx];

  return (
    <section className="py-20 lg:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Testimonials"
          title="What Our Clients Say"
          description="Our clients' success stories are the ultimate testament to our commitment."
        />

        <FadeUp className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote icon */}
            <Quote className="absolute top-6 right-6 w-16 h-16 text-gold/10" />

            <AnimatePresence mode="wait">
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                  ))}
                </div>

                <p className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  &ldquo;{t.review}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={56}
                    height={56}
                    className="w-14 h-14 rounded-full object-cover border-2 border-gold/30"
                  />
                  <div>
                    <p className="font-heading font-semibold text-navy">{t.name}</p>
                    <p className="text-sm text-gray-500">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIdx(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${i === idx ? "bg-gold w-8" : "bg-gray-200 hover:bg-gray-300"}`}
                    aria-label={`Testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button onClick={prev} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy transition-all" aria-label="Previous">
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button onClick={next} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-navy hover:text-white hover:border-navy transition-all" aria-label="Next">
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
