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
                <Image src="/attorney-casual.jpg" alt="V. Vamshi Krishnaa - DSP Law Associates" width={600} height={700} className="w-full h-auto object-cover" />
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
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-navy leading-tight mb-6">
              Meet Your Advocate
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              V. Vamshi Krishnaa is a seasoned advocate with nearly 20 years of progressive experience in finance, law, and strategic leadership. Holding a Bachelor of Laws (LLB) from Osmania University alongside MBA and M.Sc. degrees, he combines deep legal knowledge with exceptional business acumen.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              At DSP Law Associates, we believe every client deserves personalized attention and a clear path forward. Whether you&apos;re facing a complex business transaction, a family crisis, or a criminal charge, we fight to protect what matters most to you.
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
