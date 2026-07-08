"use client";
import Image from "next/image";
import Link from "next/link";
import { FadeUp } from "@/components/Motion";
import { Award, BookOpen, GraduationCap, Scale } from "lucide-react";

const credentials = [
  { icon: Scale, label: "Licensed Advocate (LLB)" },
  { icon: Award, label: "20+ Years Experience" },
  { icon: GraduationCap, label: "MBA & M.Sc. (Psychology)" },
  { icon: BookOpen, label: "Finance & Legal Expert" },
];

export default function AboutPreview() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <FadeUp>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-navy/5 to-gray-200/30 rounded-2xl rotate-2" />
              <div className="relative rounded-2xl overflow-hidden shadow-xl">
                <Image src="/advocate-meet.jpg" alt="V. Vamshi Krishnaa - D.S.P Law Associates" width={600} height={700} className="w-full h-auto object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-navy text-white px-8 py-4 rounded-xl shadow-xl">
                <p className="font-heading text-2xl font-bold">500+</p>
                <p className="text-xs text-white/80">Cases Successfully Resolved</p>
              </div>
            </div>
          </FadeUp>

          {/* Content */}
          <FadeUp delay={0.2}>
            <span className="inline-block px-4 py-1.5 bg-navy/10 text-navy text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-4">
              About The Firm
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-2">
              Meet Your Advocate
            </h2>
            <p className="font-heading text-xl md:text-2xl font-semibold text-navy/80 mb-2">V. Vamshi Krishna</p>
            <p className="text-sm text-gray-500 font-semibold mb-1">Founder &amp; Managing Partner</p>
            <p className="text-sm text-gray-400 mb-4">D.S.P. Law Associates</p>
            <p className="text-navy/70 italic leading-relaxed mb-4 border-l-4 border-navy/20 pl-4">
              &ldquo;Justice begins with trust, and every successful legal journey begins with the right advocate.&rdquo;
            </p>
            <p className="text-gray-600 leading-relaxed mb-4">
              V. Vamshi Krishna is a distinguished legal professional with nearly 20 years of diverse experience in law, finance, corporate governance, and strategic leadership. His unique multidisciplinary background enables him to provide clients with practical, commercially sound, and legally robust solutions.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              At D.S.P. Law Associates, we are committed to delivering exceptional legal services with integrity, professionalism, and unwavering dedication. Every client deserves individual attention, strategic guidance, and honest legal advice.
            </p>

            {/* Credentials */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {credentials.map(({ icon: Icon, label }, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-light">
                  <Icon className="w-5 h-5 text-navy shrink-0" />
                  <span className="text-sm font-medium text-navy">{label}</span>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-all duration-300 shadow-lg hover:-translate-y-0.5 text-sm"
            >
              Learn More About Us →
            </Link>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
