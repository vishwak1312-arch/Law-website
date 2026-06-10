"use client";
import Link from "next/link";
import { Building2, Heart, Shield, Home, Briefcase, Globe, Lightbulb, Scale } from "lucide-react";
import { SectionHeading, FadeUp } from "@/components/Motion";
import { practiceAreas } from "@/lib/data";

const iconMap: Record<string, React.ElementType> = {
  Building2, Heart, Shield, Home, Briefcase, Globe, Lightbulb, Scale,
};

export default function PracticeAreasGrid() {
  return (
    <section className="py-20 lg:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Our Expertise"
          title="Practice Areas"
          description="We provide comprehensive legal services across multiple practice areas to meet your unique needs."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {practiceAreas.map((area, i) => {
            const Icon = iconMap[area.icon] || Scale;
            return (
              <FadeUp key={area.slug} delay={i * 0.05}>
                <Link href={`/practice-areas/${area.slug}`} className="group block h-full">
                  <div className="bg-white rounded-xl p-6 h-full border border-gray-100 shadow-sm hover:shadow-xl hover:border-gold/30 transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                    {/* Gold top accent on hover */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 bg-gold scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />

                    <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-gold/10 transition-colors duration-500">
                      <Icon className="w-6 h-6 text-navy group-hover:text-gold transition-colors duration-500" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold text-navy mb-2">{area.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4">{area.description}</p>
                    <span className="text-gold text-sm font-semibold group-hover:gap-2 inline-flex items-center gap-1 transition-all duration-300">
                      Learn More →
                    </span>
                  </div>
                </Link>
              </FadeUp>
            );
          })}
        </div>

        <FadeUp delay={0.3} className="text-center mt-10">
          <Link href="/practice-areas" className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-all duration-300 text-sm">
            View All Practice Areas
          </Link>
        </FadeUp>
      </div>
    </section>
  );
}
