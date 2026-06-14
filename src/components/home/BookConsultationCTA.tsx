"use client";
import { FadeUp } from "@/components/Motion";
import { Calendar, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { useConsultationModal } from "@/lib/useConsultationModal";

export default function BookConsultationCTA() {
  const { openModal } = useConsultationModal();

  return (
    <section className="py-20 lg:py-28 bg-gradient-to-br from-navy via-navy-dark to-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />
      <div className="max-w-4xl mx-auto px-6 text-center relative">
        <FadeUp>
          <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-6">
            Get Started Today
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
            Schedule Your Confidential Consultation Today
          </h2>
          <p className="text-white/60 text-lg mb-10 max-w-2xl mx-auto">
            Take the first step toward protecting your rights. Our experienced advocates are ready to review your case and provide strategic legal guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={openModal}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-white text-navy font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 shadow-xl text-sm hover:-translate-y-0.5 cursor-pointer"
            >
              <Calendar className="w-4 h-4" />
              Book Appointment
            </button>
            <a
              href={`tel:${siteConfig.phone}`}
              className="inline-flex items-center justify-center gap-2 px-10 py-4 border-2 border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-sm"
            >
              <Phone className="w-4 h-4" />
              Call Office
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
