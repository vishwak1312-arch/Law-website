"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone, Scale } from "lucide-react";
import { siteConfig, navLinks } from "@/lib/data";
import { useConsultationModal } from "@/lib/useConsultationModal";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openModal } = useConsultationModal();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      {/* Top Bar */}
      <div className="hidden lg:block bg-navy text-white/80 text-sm">
        <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <span>📍 {siteConfig.address}</span>
            <span>🕐 {siteConfig.hours.weekday}</span>
          </div>
          <div className="flex items-center gap-4">
            <a href={`tel:${siteConfig.phone}`} className="hover:text-gold transition-colors">
              <Phone className="inline w-3.5 h-3.5 mr-1" />
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors">{siteConfig.email}</a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-navy/95 backdrop-blur-md shadow-2xl py-3"
            : "bg-white/95 backdrop-blur-sm py-4 border-b border-gray-200"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className={`p-2 rounded-lg transition-colors ${scrolled ? 'bg-gold/20' : 'bg-navy/10'}`}>
              <Scale className={`w-6 h-6 ${scrolled ? 'text-gold' : 'text-navy'}`} />
            </div>
            <div>
              <span className={`font-heading text-xl font-bold tracking-tight block leading-tight ${scrolled ? 'text-white' : 'text-navy'}`}>
                Vamshi
              </span>
              <span className={`text-[10px] uppercase tracking-[0.25em] ${scrolled ? 'text-gold' : 'text-gold-dark'}`}>
                Associations
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 hover:bg-gold/10 ${
                  scrolled ? "text-white/80 hover:text-gold" : "text-dark/70 hover:text-navy"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <button
              onClick={openModal}
              className="ml-4 px-6 py-2.5 bg-gold text-white text-sm font-semibold rounded-md hover:bg-gold-dark transition-all duration-300 shadow-lg shadow-gold/25 hover:shadow-gold/40 hover:-translate-y-0.5 cursor-pointer"
            >
              Book Consultation
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-md ${scrolled ? 'text-white' : 'text-navy'}`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-80 bg-navy z-50 lg:hidden shadow-2xl"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-10">
                  <div>
                    <span className="font-heading text-xl font-bold text-white block">Vamshi</span>
                    <span className="text-gold text-[10px] uppercase tracking-[0.25em]">Associations</span>
                  </div>
                  <button onClick={() => setMobileOpen(false)} className="text-white/60 hover:text-white p-2">
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <nav className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className="block px-4 py-3 text-white/80 hover:text-gold hover:bg-white/5 rounded-lg transition-all text-base"
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
                <div className="mt-8 space-y-3">
                  <button
                    onClick={() => { setMobileOpen(false); openModal(); }}
                    className="block w-full text-center px-6 py-3 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-colors cursor-pointer"
                  >
                    Book Consultation
                  </button>
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="block w-full text-center px-6 py-3 border border-gold/40 text-gold font-semibold rounded-lg hover:bg-gold/10 transition-colors"
                  >
                    <Phone className="inline w-4 h-4 mr-2" />
                    Call Now
                  </a>
                </div>
                <div className="mt-10 pt-6 border-t border-white/10 text-white/50 text-sm space-y-2">
                  <p>📍 {siteConfig.address}</p>
                  <p>🕐 {siteConfig.hours.weekday}</p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
