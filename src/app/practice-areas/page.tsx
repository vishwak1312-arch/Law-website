import type { Metadata } from "next";
import Link from "next/link";
import { Building2, Heart, Shield, Home, Briefcase, Globe, Lightbulb, Scale } from "lucide-react";
import { FadeUp, SectionHeading } from "@/components/Motion";
import { practiceAreas } from "@/lib/data";
import BookConsultationCTA from "@/components/home/BookConsultationCTA";

export const metadata: Metadata = { title: "Practice Areas", description: "Explore our comprehensive legal services including corporate law, family law, criminal defense, and more." };

const iconMap: Record<string, React.ElementType> = { Building2, Heart, Shield, Home, Briefcase, Globe, Lightbulb, Scale };

export default function PracticeAreasPage() {
  return (
    <>
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #C8A45D 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-4">Our Expertise</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Practice Areas</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Comprehensive legal services across multiple practice areas to meet your unique needs.</p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {practiceAreas.map((area, i) => {
              const Icon = iconMap[area.icon] || Scale;
              return (
                <FadeUp key={area.slug} delay={i * 0.05}>
                  <Link href={`/practice-areas/${area.slug}`} className="group block">
                    <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold/30 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden h-full">
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                      <div className="flex items-start gap-5">
                        <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center shrink-0 group-hover:bg-gold/10 transition-colors">
                          <Icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors" />
                        </div>
                        <div>
                          <h2 className="font-heading text-xl font-semibold text-navy mb-2 group-hover:text-gold transition-colors">{area.title}</h2>
                          <p className="text-gray-500 text-sm leading-relaxed mb-4">{area.description}</p>
                          <span className="text-gold text-sm font-semibold inline-flex items-center gap-1 group-hover:gap-2 transition-all">Learn More →</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </FadeUp>
              );
            })}
          </div>
        </div>
      </section>

      <BookConsultationCTA />
    </>
  );
}
