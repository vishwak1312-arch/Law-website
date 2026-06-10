import type { Metadata } from "next";
import { FadeUp, SectionHeading } from "@/components/Motion";
import { caseStats } from "@/lib/data";
import CaseResultsStats from "@/components/home/CaseResultsStats";
import BookConsultationCTA from "@/components/home/BookConsultationCTA";
import { Trophy, Scale, Users, Star } from "lucide-react";

export const metadata: Metadata = { title: "Case Results", description: "Explore our track record of success with 500+ cases won and a 98% client satisfaction rate." };

const caseStudies = [
  { icon: Scale, category: "Corporate Law", title: "Multi-Million Dollar Merger", result: "$12M Settlement", desc: "Successfully negotiated a complex corporate merger involving multiple stakeholders and regulatory approvals." },
  { icon: Users, category: "Family Law", title: "Complex Custody Resolution", result: "Full Custody Awarded", desc: "Secured full custody rights for a parent in a highly contested multi-state custody dispute." },
  { icon: Trophy, category: "Criminal Defense", title: "Federal Fraud Dismissal", result: "All Charges Dropped", desc: "Achieved complete dismissal of federal fraud charges through meticulous evidence review and expert testimony." },
  { icon: Star, category: "Employment Law", title: "Workplace Discrimination", result: "$2.5M Verdict", desc: "Won a landmark employment discrimination case resulting in significant compensatory and punitive damages." },
];

export default function CaseResultsPage() {
  return (
    <>
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #C8A45D 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-4">Our Track Record</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Case Results</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">A proven history of success across diverse legal matters.</p>
          </FadeUp>
        </div>
      </section>

      <CaseResultsStats />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading label="Success Stories" title="Notable Case Results" description="Representative results from our practice. Past results do not guarantee future outcomes." />
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map(({ icon: Icon, category, title, result, desc }, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="bg-white rounded-xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-500 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center"><Icon className="w-5 h-5 text-gold" /></div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-gold">{category}</span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-navy mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">{desc}</p>
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400 uppercase tracking-wider mb-1">Result</p>
                    <p className="font-heading text-xl font-bold text-gold">{result}</p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
          <p className="text-center text-xs text-gray-400 mt-8">*Disclaimer: Past results do not guarantee a similar outcome. Each case is unique.</p>
        </div>
      </section>

      <BookConsultationCTA />
    </>
  );
}
