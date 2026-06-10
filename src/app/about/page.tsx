import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeUp, SectionHeading } from "@/components/Motion";
import { Award, BookOpen, GraduationCap, Scale, Briefcase, Star, MapPin, Globe } from "lucide-react";
import { siteConfig } from "@/lib/data";
import CaseResultsStats from "@/components/home/CaseResultsStats";
import BookConsultationCTA from "@/components/home/BookConsultationCTA";

export const metadata: Metadata = { title: "About", description: `Learn about ${siteConfig.attorney} and ${siteConfig.name}. Over 10 years of legal experience in New York.` };

const timeline = [
  { year: "2012", title: "Harvard Law School", desc: "Graduated with honors, J.D." },
  { year: "2013", title: "NY Bar Admission", desc: "Admitted to practice in New York State" },
  { year: "2014", title: "Associate Attorney", desc: "Started at a top NYC firm" },
  { year: "2016", title: "Founded the Firm", desc: "Established Mitchell & Associates" },
  { year: "2020", title: "Super Lawyers", desc: "Named Rising Star 2020–2026" },
  { year: "2024", title: "500+ Cases", desc: "Milestone of cases successfully resolved" },
];

const admissions = ["New York State Bar", "U.S. District Court — SDNY", "U.S. District Court — EDNY", "U.S. Court of Appeals — 2nd Circuit"];

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #C8A45D 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-4">About Us</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Meet Your Attorney</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Dedicated to protecting your rights with strategic legal representation and genuine client care.</p>
          </FadeUp>
        </div>
      </section>

      {/* Attorney Profile */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <div className="relative sticky top-32">
                <div className="absolute -inset-4 bg-gradient-to-br from-gold/10 to-navy/5 rounded-2xl -rotate-2" />
                <Image src="/attorney-portrait.png" alt={siteConfig.attorney} width={600} height={700} className="relative rounded-2xl shadow-2xl w-full" />
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-2">{siteConfig.attorney}</h2>
              <p className="text-gold font-semibold mb-6">Founder & Managing Partner</p>

              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>James Mitchell is a distinguished attorney with over a decade of experience providing strategic legal counsel to individuals and businesses across New York. A graduate of Harvard Law School, he combines academic rigor with practical courtroom expertise.</p>
                <p>Before founding Mitchell & Associates, James honed his skills at one of New York&apos;s leading law firms, where he gained invaluable experience in corporate transactions, complex litigation, and regulatory matters.</p>
                <p>Driven by a commitment to justice and client advocacy, James established Mitchell & Associates to provide the personalized, high-quality representation that every client deserves. His approach combines meticulous preparation with aggressive advocacy.</p>
                <p>Outside the courtroom, James is an active member of the legal community, frequently speaking at conferences, publishing articles, and mentoring young attorneys. He is passionate about making legal services accessible and demystifying the legal process for his clients.</p>
              </div>

              {/* Education & Admissions */}
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="p-5 rounded-xl bg-light border border-gray-100">
                  <div className="flex items-center gap-2 mb-3"><GraduationCap className="w-5 h-5 text-gold" /><h3 className="font-heading font-semibold text-navy">Education</h3></div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Harvard Law School, J.D. (2012)</li>
                    <li>• Columbia University, B.A. (2009)</li>
                    <li>• Moot Court Honors</li>
                  </ul>
                </div>
                <div className="p-5 rounded-xl bg-light border border-gray-100">
                  <div className="flex items-center gap-2 mb-3"><Scale className="w-5 h-5 text-gold" /><h3 className="font-heading font-semibold text-navy">Court Admissions</h3></div>
                  <ul className="space-y-2 text-sm text-gray-600">
                    {admissions.map((a, i) => <li key={i}>• {a}</li>)}
                  </ul>
                </div>
              </div>

              <Link href="/book-consultation" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all shadow-lg shadow-gold/25 text-sm">
                Schedule a Consultation →
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading label="Journey" title="Professional Timeline" />
          <div className="relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gold/20 -translate-x-1/2" />
            {timeline.map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className={`relative flex items-center gap-6 mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 hidden md:block ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 inline-block">
                      <p className="text-gold font-bold text-sm mb-1">{item.year}</p>
                      <p className="font-heading font-semibold text-navy">{item.title}</p>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-3 h-3 bg-gold rounded-full border-4 border-white shadow shrink-0 md:mx-auto" />
                  <div className="flex-1 md:hidden">
                    <p className="text-gold font-bold text-sm">{item.year}</p>
                    <p className="font-heading font-semibold text-navy">{item.title}</p>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                  <div className={`flex-1 hidden md:block ${i % 2 === 0 ? 'text-left' : 'text-right'}`} />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      <CaseResultsStats />
      <BookConsultationCTA />
    </>
  );
}
