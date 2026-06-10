import type { Metadata } from "next";
import { FadeUp, SectionHeading } from "@/components/Motion";
import { siteConfig } from "@/lib/data";
import { Calendar, Phone, Shield, Clock, CheckCircle } from "lucide-react";

export const metadata: Metadata = { title: "Book Consultation", description: "Schedule a confidential consultation with our experienced attorney. Online booking available 24/7." };

const benefits = [
  { icon: Shield, text: "100% Confidential" },
  { icon: Clock, text: "Flexible Scheduling" },
  { icon: CheckCircle, text: "Virtual or In-Person" },
];

export default function BookConsultationPage() {
  return (
    <>
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #C8A45D 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-4">Get Started</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Book Your Consultation</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Take the first step toward resolving your legal matter. Schedule a confidential consultation today.</p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {benefits.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                  <Icon className="w-4 h-4 text-gold" />
                  {text}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Calendly Embed */}
            <div className="lg:col-span-3">
              <FadeUp>
                <div className="bg-light rounded-2xl p-2 border border-gray-100">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm" style={{ minHeight: "700px" }}>
                    <iframe
                      src={process.env.NEXT_PUBLIC_CALENDLY_URL || siteConfig.calendlyUrl}
                      width="100%"
                      height="700"
                      frameBorder="0"
                      title="Schedule Appointment"
                      className="w-full"
                    />
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <FadeUp delay={0.2}>
                <div className="bg-navy rounded-2xl p-8 text-white mb-6">
                  <h3 className="font-heading text-xl font-semibold mb-4">What to Expect</h3>
                  <div className="space-y-4 text-sm text-white/70">
                    <div className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold shrink-0">1</span>
                      <p><strong className="text-white">Choose a Time</strong> — Select a convenient date and time from the calendar.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold shrink-0">2</span>
                      <p><strong className="text-white">Confirm Details</strong> — Provide your contact information and a brief description of your matter.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-gold/20 text-gold flex items-center justify-center text-xs font-bold shrink-0">3</span>
                      <p><strong className="text-white">Meet Your Attorney</strong> — Receive a confirmation email with meeting details.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-light rounded-xl p-6 border border-gray-100">
                  <h3 className="font-heading text-lg font-semibold text-navy mb-3">Prefer to Call?</h3>
                  <p className="text-sm text-gray-500 mb-4">Speak directly with our team to schedule your consultation.</p>
                  <a href={`tel:${siteConfig.phone}`} className="inline-flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-all text-sm w-full justify-center">
                    <Phone className="w-4 h-4" /> {siteConfig.phone}
                  </a>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
