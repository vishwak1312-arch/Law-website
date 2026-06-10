"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Phone, Calendar, Award, Users, ThumbsUp, BadgeCheck } from "lucide-react";
import { siteConfig } from "@/lib/data";

const trustBadges = [
  { icon: Award, label: "10+ Years", sub: "Experience" },
  { icon: Users, label: "500+", sub: "Cases Handled" },
  { icon: ThumbsUp, label: "98%", sub: "Satisfaction" },
  { icon: BadgeCheck, label: "Licensed", sub: "Attorney" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-white via-light to-white">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230B1F3A' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")" }} />

      <div className="max-w-7xl mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block px-4 py-1.5 bg-navy/5 text-navy text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-6 border border-navy/10">
                {siteConfig.name}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-navy leading-[1.1] mb-6"
            >
              Trusted Legal{" "}
              <span className="relative">
                Representation
                <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                  <path d="M2 10C50 4 150 2 298 6" stroke="#C8A45D" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </span>
              {" "}When It Matters Most
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg"
            >
              Protecting Your Rights, Business, Family, and Future With Strategic Legal Solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <Link
                href="/book-consultation"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all duration-300 shadow-xl shadow-gold/25 hover:shadow-gold/40 hover:-translate-y-0.5 text-sm"
              >
                <Calendar className="w-4 h-4" />
                Book Consultation
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-all duration-300 text-sm"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-4"
            >
              {trustBadges.map(({ icon: Icon, label, sub }, i) => (
                <div key={i} className="text-center p-3 rounded-xl bg-white shadow-sm border border-gray-100">
                  <Icon className="w-5 h-5 text-gold mx-auto mb-1.5" />
                  <p className="text-lg font-bold text-navy">{label}</p>
                  <p className="text-xs text-gray-500">{sub}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Image */}
          <motion.div
            className="order-1 lg:order-2 relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Gold accent border */}
              <div className="absolute -inset-4 bg-gradient-to-br from-gold/20 to-navy/10 rounded-2xl -rotate-3" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/attorney-portrait.png"
                  alt={`${siteConfig.attorney} - Attorney at Law`}
                  width={600}
                  height={700}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/30 via-transparent to-transparent" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-navy text-white px-6 py-3 rounded-xl shadow-xl">
                <p className="text-gold font-bold text-lg">10+</p>
                <p className="text-xs text-white/70">Years of Excellence</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
