"use client";
import { useState } from "react";
import Link from "next/link";
import { FadeUp } from "@/components/Motion";
import { siteConfig } from "@/lib/data";
import { useConsultationModal } from "@/lib/useConsultationModal";
import { MapPin, Phone, Mail, Clock, AlertTriangle, Send, CheckCircle, MessageCircle, Calendar, Loader2, AlertCircle, Home } from "lucide-react";

// reCAPTCHA v3 helper
declare global {
  interface Window {
    grecaptcha?: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

async function getRecaptchaToken(): Promise<string | null> {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
  if (!siteKey || !window.grecaptcha) return null;

  return new Promise((resolve) => {
    window.grecaptcha!.ready(() => {
      window.grecaptcha!.execute(siteKey, { action: "contact_form" }).then(resolve).catch(() => resolve(null));
    });
  });
}

const legalMatters = ["Corporate Law", "Family Law", "Criminal Defense", "Property Law", "Employment Law", "Immigration Law", "Intellectual Property", "Civil Litigation", "Other"];
const urgencyLevels = ["Low — General inquiry", "Medium — Need guidance soon", "High — Urgent legal matter", "Emergency — Immediate assistance needed"];

interface FormData {
  name: string;
  email: string;
  phone: string;
  matter: string;
  urgency: string;
  message: string;
  preferredDate: string;
  preferredTime: string;
  website: string; // honeypot
}

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { openModal } = useConsultationModal();

  const [form, setForm] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    matter: "",
    urgency: "",
    message: "",
    preferredDate: "",
    preferredTime: "",
    website: "", // honeypot
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Get reCAPTCHA token
      const recaptchaToken = await getRecaptchaToken();

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          recaptchaToken,
          source: "contact_form",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection and try again, or call our office directly.");
    } finally {
      setLoading(false);
    }
  };

  const whatsappMessage = encodeURIComponent("Hello, I would like to schedule a legal consultation regarding my legal matter.");

  return (
    <>
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #C8A45D 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-4">Get In Touch</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Contact Us</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Ready to discuss your legal matter? Reach out today.</p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <FadeUp>
                <h2 className="font-heading text-2xl font-bold text-navy mb-6">Send Us a Message</h2>
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                    <h3 className="font-heading text-xl font-bold text-navy mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">
                      Your consultation request has been received. Our office will contact you shortly.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <Link
                        href="/"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-gray-200 text-navy font-semibold rounded-lg hover:bg-gray-50 transition-colors text-sm"
                      >
                        <Home className="w-4 h-4" />
                        Return Home
                      </Link>
                      <button
                        onClick={openModal}
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-colors text-sm cursor-pointer"
                      >
                        <Calendar className="w-4 h-4" />
                        Schedule Consultation
                      </button>
                      <a
                        href={`https://wa.me/${siteConfig.whatsapp}?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#25D366] text-white font-semibold rounded-lg hover:bg-[#20BD5A] transition-colors text-sm"
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp Now
                      </a>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Error Message */}
                    {error && (
                      <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                        <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                        <p className="text-sm text-red-700">{error}</p>
                      </div>
                    )}

                    {/* Honeypot */}
                    <input type="text" name="website" value={form.website} onChange={handleChange} className="hidden" tabIndex={-1} autoComplete="off" />

                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">Full Name *</label>
                        <input id="name" name="name" type="text" required value={form.name} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all text-sm" placeholder="John Doe" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">Phone Number *</label>
                        <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all text-sm" placeholder="(555) 000-0000" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">Email Address *</label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all text-sm" placeholder="john@example.com" />
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="matter" className="block text-sm font-medium text-gray-700 mb-1.5">Legal Matter *</label>
                        <select id="matter" name="matter" required value={form.matter} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all text-sm bg-white">
                          <option value="">Select type...</option>
                          {legalMatters.map((m) => <option key={m} value={m}>{m}</option>)}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-1.5">Urgency Level</label>
                        <select id="urgency" name="urgency" value={form.urgency} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all text-sm bg-white">
                          <option value="">Select level...</option>
                          {urgencyLevels.map((u) => <option key={u} value={u}>{u}</option>)}
                        </select>
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Date</label>
                        <input id="preferredDate" name="preferredDate" type="date" value={form.preferredDate} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all text-sm" />
                      </div>
                      <div>
                        <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1.5">Preferred Time</label>
                        <input id="preferredTime" name="preferredTime" type="time" value={form.preferredTime} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all text-sm" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">Message *</label>
                      <textarea id="message" name="message" rows={5} required value={form.message} onChange={handleChange} className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all text-sm resize-none" placeholder="Describe your legal matter..." />
                    </div>
                    <button type="submit" disabled={loading} className="w-full sm:w-auto px-10 py-3.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all shadow-lg shadow-gold/25 text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed">
                      {loading ? <><Loader2 className="w-4 h-4 animate-spin" /> Sending...</> : <><Send className="w-4 h-4" /> Send Message</>}
                    </button>
                  </form>
                )}
              </FadeUp>
            </div>

            {/* Info */}
            <div className="lg:col-span-2">
              <FadeUp delay={0.2}>
                <div className="bg-navy rounded-2xl p-8 text-white mb-8">
                  <h3 className="font-heading text-xl font-semibold mb-6">Office Information</h3>
                  <div className="space-y-5">
                    <div className="flex gap-3"><MapPin className="w-5 h-5 text-gold shrink-0 mt-0.5" /><div><p className="font-medium">Address</p><p className="text-white/60 text-sm">{siteConfig.address}</p></div></div>
                    <div className="flex gap-3"><Phone className="w-5 h-5 text-gold shrink-0 mt-0.5" /><div><p className="font-medium">Phone</p><a href={`tel:${siteConfig.phone}`} className="text-white/60 text-sm hover:text-gold transition-colors">{siteConfig.phone}</a></div></div>
                    <div className="flex gap-3"><Mail className="w-5 h-5 text-gold shrink-0 mt-0.5" /><div><p className="font-medium">Email</p><a href={`mailto:${siteConfig.email}`} className="text-white/60 text-sm hover:text-gold transition-colors">{siteConfig.email}</a></div></div>
                    <div className="flex gap-3"><Clock className="w-5 h-5 text-gold shrink-0 mt-0.5" /><div><p className="font-medium">Business Hours</p><p className="text-white/60 text-sm">{siteConfig.hours.weekday}<br />{siteConfig.hours.saturday}<br />{siteConfig.hours.sunday}</p></div></div>
                    <div className="flex gap-3 pt-4 border-t border-white/10"><AlertTriangle className="w-5 h-5 text-gold shrink-0 mt-0.5" /><div><p className="font-medium">Emergency</p><a href={`tel:${siteConfig.emergencyPhone}`} className="text-gold text-sm font-semibold">{siteConfig.emergencyPhone}</a></div></div>
                  </div>
                </div>

                {/* Map */}
                <div className="rounded-xl overflow-hidden shadow-lg border border-gray-100">
                  <iframe
                    src={siteConfig.googleMapsEmbed}
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Office Location"
                  />
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
