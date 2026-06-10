"use client";
import { Phone, Calendar } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { useConsultationModal } from "@/lib/useConsultationModal";

export default function StickyMobileCTA() {
  const { openModal } = useConsultationModal();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden bg-navy/95 backdrop-blur-md border-t border-gold/20 safe-area-bottom">
      <div className="flex">
        <a
          href={`tel:${siteConfig.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 text-white font-semibold text-sm hover:bg-white/5 transition-colors"
        >
          <Phone className="w-4 h-4 text-gold" />
          Call Now
        </a>
        <div className="w-px bg-gold/20" />
        <button
          onClick={openModal}
          className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-gold text-white font-semibold text-sm hover:bg-gold-dark transition-colors cursor-pointer"
        >
          <Calendar className="w-4 h-4" />
          Book Now
        </button>
      </div>
    </div>
  );
}
