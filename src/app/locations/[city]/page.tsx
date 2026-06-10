import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FadeUp, SectionHeading } from "@/components/Motion";
import { locations, siteConfig, practiceAreas } from "@/lib/data";
import { MapPin, Phone, Mail, Clock, CheckCircle } from "lucide-react";
import BookConsultationCTA from "@/components/home/BookConsultationCTA";

export function generateStaticParams() {
  return locations.map((l) => ({ city: l.slug }));
}

type PageProps = { params: Promise<{ city: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { city } = await params;
  const loc = locations.find((l) => l.slug === city);
  if (!loc) return {};
  return { title: `${loc.city} Office`, description: `${siteConfig.name} ${loc.city} office. Legal services in ${loc.city} — corporate, family, criminal defense, and more.` };
}

export default async function LocationPage({ params }: PageProps) {
  const { city } = await params;
  const loc = locations.find((l) => l.slug === city);
  if (!loc) notFound();

  return (
    <>
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #C8A45D 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-4">{loc.city} Office</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">{siteConfig.name} in {loc.city}</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">{loc.description}</p>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <FadeUp>
              <h2 className="font-heading text-2xl font-bold text-navy mb-6">Legal Services in {loc.city}</h2>
              <p className="text-gray-600 leading-relaxed mb-8">Our {loc.city} office provides comprehensive legal services to individuals and businesses. With experienced attorneys dedicated to serving the {loc.city} community, we offer the same premium representation across all our practice areas.</p>
              <div className="grid sm:grid-cols-2 gap-3 mb-8">
                {practiceAreas.map((area) => (
                  <Link key={area.slug} href={`/practice-areas/${area.slug}`} className="flex items-center gap-2 p-3 rounded-lg bg-light hover:bg-gold/5 transition-colors">
                    <CheckCircle className="w-4 h-4 text-gold" />
                    <span className="text-sm text-gray-700">{area.title}</span>
                  </Link>
                ))}
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="bg-navy rounded-2xl p-8 text-white">
                <h3 className="font-heading text-xl font-semibold mb-6">{loc.city} Office Details</h3>
                <div className="space-y-5">
                  <div className="flex gap-3"><MapPin className="w-5 h-5 text-gold shrink-0" /><p className="text-white/70 text-sm">{loc.address}</p></div>
                  <div className="flex gap-3"><Phone className="w-5 h-5 text-gold shrink-0" /><a href={`tel:${loc.phone}`} className="text-white/70 text-sm hover:text-gold transition-colors">{loc.phone}</a></div>
                  <div className="flex gap-3"><Mail className="w-5 h-5 text-gold shrink-0" /><a href={`mailto:${siteConfig.email}`} className="text-white/70 text-sm hover:text-gold transition-colors">{siteConfig.email}</a></div>
                  <div className="flex gap-3"><Clock className="w-5 h-5 text-gold shrink-0" /><div className="text-white/70 text-sm"><p>{siteConfig.hours.weekday}</p><p>{siteConfig.hours.saturday}</p></div></div>
                </div>
              </div>

              <div className="mt-6 rounded-xl overflow-hidden shadow-lg">
                <iframe src={siteConfig.googleMapsEmbed} width="100%" height="300" style={{ border: 0 }} allowFullScreen loading="lazy" title={`${loc.city} Office`} />
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <BookConsultationCTA />
    </>
  );
}
