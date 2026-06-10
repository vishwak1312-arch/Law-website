"use client";
import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${siteConfig.whatsapp}?text=${encodeURIComponent("Hello, I would like to schedule a legal consultation regarding my legal matter.")}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-24 right-6 z-40 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform duration-300 animate-pulse-gold"
      style={{ animationDuration: "2s" }}
    >
      <MessageCircle className="w-7 h-7" />
    </a>
  );
}
