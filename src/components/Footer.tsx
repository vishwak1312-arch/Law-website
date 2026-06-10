import Link from "next/link";
import { Scale, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig, navLinks, practiceAreas } from "@/lib/data";

const socialLinks = [
  { label: "Facebook", href: "#", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { label: "Twitter", href: "#", path: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" },
  { label: "Instagram", href: "#", path: "M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8 1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z" },
  { label: "LinkedIn", href: "#", path: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-gold/20 rounded-lg"><Scale className="w-6 h-6 text-gold" /></div>
              <div>
                <span className="font-heading text-xl font-bold text-white block leading-tight">Mitchell</span>
                <span className="text-gold text-[10px] uppercase tracking-[0.25em]">& Associates</span>
              </div>
            </Link>
            <p className="text-sm leading-relaxed mb-6">
              Providing trusted, strategic legal representation for individuals and businesses. Your rights, our priority.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href, path }, i) => (
                <a key={i} href={href} className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-gold hover:text-white transition-all duration-300" aria-label={label}>
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d={path} /></svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm hover:text-gold transition-colors hover:pl-1 duration-300 block">{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Practice Areas */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-6">Practice Areas</h3>
            <ul className="space-y-3">
              {practiceAreas.slice(0, 6).map((area) => (
                <li key={area.slug}>
                  <Link href={`/practice-areas/${area.slug}`} className="text-sm hover:text-gold transition-colors hover:pl-1 duration-300 block">{area.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading text-lg font-semibold text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3"><MapPin className="w-4 h-4 text-gold mt-0.5 shrink-0" />{siteConfig.address}</li>
              <li className="flex gap-3"><Phone className="w-4 h-4 text-gold mt-0.5 shrink-0" /><a href={`tel:${siteConfig.phone}`} className="hover:text-gold transition-colors">{siteConfig.phone}</a></li>
              <li className="flex gap-3"><Mail className="w-4 h-4 text-gold mt-0.5 shrink-0" /><a href={`mailto:${siteConfig.email}`} className="hover:text-gold transition-colors">{siteConfig.email}</a></li>
            </ul>
            <div className="mt-6 text-sm space-y-1">
              <p>{siteConfig.hours.weekday}</p>
              <p>{siteConfig.hours.saturday}</p>
              <p>{siteConfig.hours.sunday}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
            <p>© {new Date().getFullYear()} Mitchell & Associates. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/privacy-policy" className="hover:text-gold transition-colors">Privacy Policy</Link>
              <Link href="/terms-of-service" className="hover:text-gold transition-colors">Terms of Service</Link>
              <Link href="/attorney-disclaimer" className="hover:text-gold transition-colors">Attorney Disclaimer</Link>
            </div>
          </div>
          <p className="text-center text-[10px] text-white/25 mt-4">
            Attorney Advertising. Prior results do not guarantee a similar outcome. This website is for informational purposes only and does not constitute legal advice.
          </p>
        </div>
      </div>
    </footer>
  );
}
