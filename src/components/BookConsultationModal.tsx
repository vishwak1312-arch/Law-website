"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, MessageCircle, Mail, Phone } from "lucide-react";
import { siteConfig } from "@/lib/data";
import { useConsultationModal } from "@/lib/useConsultationModal";

// Declare Calendly on window for TypeScript
declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (opts: { url: string }) => void;
    };
  }
}

export default function BookConsultationModal() {
  const { isOpen, closeModal } = useConsultationModal();

  const calendlyUrl =
    process.env.NEXT_PUBLIC_CALENDLY_URL || siteConfig.calendlyUrl;
  const whatsappNumber =
    process.env.NEXT_PUBLIC_ATTORNEY_WHATSAPP || siteConfig.whatsapp;
  const attorneyEmail =
    process.env.NEXT_PUBLIC_ATTORNEY_EMAIL || siteConfig.email;
  const attorneyPhone =
    process.env.NEXT_PUBLIC_ATTORNEY_PHONE || siteConfig.phone;

  const whatsappMessage = encodeURIComponent(
    "Hello, I would like to schedule a legal consultation regarding my legal matter."
  );
  const emailSubject = encodeURIComponent("Legal Consultation Request");
  const emailBody = encodeURIComponent(
    `Hello,

I would like to schedule a legal consultation.

Name:
Phone:
Legal Matter:

Thank you.`
  );

  const handleCalendly = () => {
    if (window.Calendly) {
      window.Calendly.initPopupWidget({ url: calendlyUrl });
      closeModal();
    } else {
      // Fallback: open Calendly in a new tab
      window.open(calendlyUrl, "_blank", "noopener,noreferrer");
      closeModal();
    }
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`,
      "_blank",
      "noopener,noreferrer"
    );
    closeModal();
  };

  const handleEmail = () => {
    window.location.href = `mailto:${attorneyEmail}?subject=${emailSubject}&body=${emailBody}`;
    closeModal();
  };

  const handleCall = () => {
    window.location.href = `tel:${attorneyPhone}`;
    closeModal();
  };

  const options = [
    {
      icon: Calendar,
      title: "Schedule Consultation",
      description: "Select a date & time that works for you. Automatic email confirmation & calendar invite.",
      action: handleCalendly,
      accent: "bg-navy",
      accentLight: "bg-gray-100 text-navy",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Consultation",
      description: "Connect directly via WhatsApp for a quick, convenient consultation.",
      action: handleWhatsApp,
      accent: "bg-[#25D366]",
      accentLight: "bg-green-50 text-green-600",
    },
    {
      icon: Mail,
      title: "Email Consultation",
      description: "Send a detailed email with your legal matter for our team to review.",
      action: handleEmail,
      accent: "bg-navy",
      accentLight: "bg-gray-50 text-gray-700",
    },
    {
      icon: Phone,
      title: "Call Advocate",
      description: `Speak directly — ${siteConfig.phone} or ${siteConfig.phone2}`,
      action: handleCall,
      accent: "bg-navy",
      accentLight: "bg-gray-100 text-navy",
    },
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[70]"
            onClick={closeModal}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.92, y: 30 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="fixed inset-0 z-[71] flex items-center justify-center p-4"
          >
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full relative overflow-hidden">
              {/* Accent bar */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-navy via-gray-600 to-navy" />

              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-dark p-1.5 rounded-full hover:bg-gray-100 transition-colors z-10"
                aria-label="Close consultation modal"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Header */}
              <div className="px-8 pt-8 pb-4 text-center">
                <h2 className="font-heading text-2xl font-bold text-navy mb-1">
                  Book Your Consultation
                </h2>
                <p className="text-gray-500 text-sm">
                  Choose your preferred method to connect with our advocate
                </p>
              </div>

              {/* Options */}
              <div className="px-6 pb-8 space-y-3">
                {options.map(({ icon: Icon, title, description, action, accentLight }, i) => (
                  <motion.button
                    key={title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    onClick={action}
                    className="w-full flex items-start gap-4 p-4 rounded-xl border border-gray-100 hover:border-navy/30 hover:shadow-md hover:shadow-navy/5 transition-all duration-300 text-left group"
                  >
                    <div
                      className={`w-11 h-11 rounded-lg ${accentLight} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy text-sm group-hover:text-gray-600 transition-colors">
                        {title}
                      </h3>
                      <p className="text-xs text-gray-400 mt-0.5 leading-relaxed">
                        {description}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </div>

              {/* Footer */}
              <div className="bg-gray-50 px-8 py-4 text-center border-t border-gray-100">
                <p className="text-xs text-gray-400">
                  All consultations are <span className="font-medium text-navy">100% confidential</span>
                </p>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
