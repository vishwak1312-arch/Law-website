import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FadeUp } from "@/components/Motion";
import { practiceAreas, siteConfig } from "@/lib/data";
import { Building2, Heart, Shield, Home, Briefcase, Globe, Lightbulb, Scale, CheckCircle, ArrowLeft } from "lucide-react";
import BookConsultationCTA from "@/components/home/BookConsultationCTA";

const iconMap: Record<string, React.ElementType> = { Building2, Heart, Shield, Home, Briefcase, Globe, Lightbulb, Scale };

export function generateStaticParams() {
  return practiceAreas.map((area) => ({ slug: area.slug }));
}

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) return {};
  return { title: area.title, description: area.description };
}

export default async function PracticeAreaPage({ params }: PageProps) {
  const { slug } = await params;
  const area = practiceAreas.find((a) => a.slug === slug);
  if (!area) notFound();

  const Icon = iconMap[area.icon] || Scale;
  const otherAreas = practiceAreas.filter((a) => a.slug !== slug);

  const benefits = [
    "Free initial case evaluation",
    "Personalized legal strategy",
    "Transparent fee structure",
    "Regular case updates",
    "Aggressive advocacy",
    "Proven track record",
  ];

  return (
    <>
      {/* Hero */}
      <section className="bg-navy py-20 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative">
          <FadeUp>
            <Link href="/practice-areas" className="inline-flex items-center gap-2 text-white/50 hover:text-gold text-sm mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Practice Areas
            </Link>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center">
                <Icon className="w-7 h-7 text-gold" />
              </div>
              <h1 className="font-heading text-4xl md:text-5xl font-bold text-white">{area.title}</h1>
            </div>
            <p className="text-white/60 text-lg max-w-2xl">{area.description}</p>
          </FadeUp>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <FadeUp>
                <h2 className="font-heading text-2xl font-bold text-navy mb-6">Overview</h2>
                <div className="prose prose-gray max-w-none text-gray-600 leading-relaxed space-y-4">
                  <p>{area.details}</p>
                  <p>At {siteConfig.name}, we understand the unique challenges that {area.title.toLowerCase()} cases present. Our experienced legal team works closely with each client to develop a tailored strategy that addresses their specific needs and objectives.</p>
                </div>

                <h3 className="font-heading text-xl font-bold text-navy mt-12 mb-4">Why Choose Us for {area.title}</h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {benefits.map((b, i) => (
                    <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-light">
                      <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                      <span className="text-sm text-gray-700">{b}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-12 p-8 bg-navy rounded-2xl text-center">
                  <h3 className="font-heading text-2xl font-bold text-white mb-3">Need Help With {area.title}?</h3>
                  <p className="text-white/60 mb-6">Schedule a confidential consultation to discuss your case.</p>
                  <Link href="/book-consultation" className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-white font-semibold rounded-lg hover:bg-gold-dark transition-all shadow-lg text-sm">
                    Book Consultation →
                  </Link>
                </div>
              </FadeUp>
            </div>

            {/* Sidebar */}
            <div>
              <FadeUp delay={0.2}>
                <div className="bg-light rounded-xl p-6 border border-gray-100 sticky top-32">
                  <h3 className="font-heading text-lg font-semibold text-navy mb-4">Other Practice Areas</h3>
                  <div className="space-y-2">
                    {otherAreas.map((a) => {
                      const OtherIcon = iconMap[a.icon] || Scale;
                      return (
                        <Link key={a.slug} href={`/practice-areas/${a.slug}`} className="flex items-center gap-3 p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all text-sm text-gray-600 hover:text-navy">
                          <OtherIcon className="w-4 h-4 text-gold" />
                          {a.title}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>

      <BookConsultationCTA />
    </>
  );
}
