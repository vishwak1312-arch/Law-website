import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FadeUp, SectionHeading } from "@/components/Motion";
import { Award, BookOpen, GraduationCap, Scale, Briefcase, Star, MapPin, Globe, Trophy, Users, CheckCircle, Building2, TrendingUp } from "lucide-react";
import { siteConfig, education, workExperience, awardsAndRecognition, coreCompetencies, softSkills, profileSummaryPoints, careerTimeline } from "@/lib/data";
import CaseResultsStats from "@/components/home/CaseResultsStats";
import BookConsultationCTA from "@/components/home/BookConsultationCTA";

export const metadata: Metadata = { title: "About", description: `Learn about ${siteConfig.attorney} and ${siteConfig.name}. Over 20 years of experience in finance and legal services.` };

export default function AboutPage() {
  return (
    <>
      {/* Hero Banner */}
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-4">About Us</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Meet Your Advocate</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Dedicated to protecting your rights with strategic legal representation and genuine client care.</p>
          </FadeUp>
        </div>
      </section>

      {/* Attorney Profile */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <FadeUp>
              <div className="relative sticky top-32">
                <div className="absolute -inset-4 bg-gradient-to-br from-gray-200/30 to-navy/5 rounded-2xl -rotate-2" />
                <Image src="/attorney-portrait.jpg" alt={siteConfig.attorney} width={600} height={700} className="relative rounded-2xl shadow-2xl w-full" />
              </div>
            </FadeUp>

            <FadeUp delay={0.2}>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-2">{siteConfig.attorney}</h2>
              <p className="text-gray-500 font-semibold mb-2">Founder & Managing Partner — {siteConfig.name}</p>
              <p className="text-sm text-gray-400 mb-6">Head – Customer Finance | EV & Mobility | Banking & NBFC Ecosystem Leader</p>

              <div className="space-y-4 text-gray-600 leading-relaxed mb-8">
                <p>V. Vamshi Krishnaa is a distinguished advocate and dynamic finance professional with nearly 20 years of progressive experience across finance, law, and business strategy. Holding a Bachelor of Laws (LLB) from Osmania University along with advanced degrees in Psychology and Business Administration, he combines legal acumen with deep business expertise.</p>
                <p>As the founder of DSP Law Associates, Advocate Vamshi Krishnaa established the firm to provide personalized, high-quality legal representation for individuals and businesses. His approach combines meticulous preparation with aggressive advocacy, drawing on extensive experience in corporate finance, regulatory compliance, and strategic leadership.</p>
                <p>With a career spanning leadership roles at Tata Motors Finance, Axis Bank, Mahindra & Mahindra, and Blue Energy Motors, he brings a unique cross-functional perspective to legal practice—understanding both the legal and commercial dimensions of every matter.</p>
              </div>

              {/* Education */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4"><GraduationCap className="w-5 h-5 text-navy" /><h3 className="font-heading font-semibold text-navy text-lg">Education</h3></div>
                <div className="space-y-3">
                  {education.map((edu, i) => (
                    <div key={i} className="p-4 rounded-xl bg-light border border-gray-100">
                      <p className="font-semibold text-navy text-sm">{edu.degree}</p>
                      <p className="text-xs text-gray-500">{edu.institution}{edu.year ? ` | ${edu.year}` : ''}</p>
                    </div>
                  ))}
                </div>
              </div>

              <Link href="/book-consultation" className="inline-flex items-center gap-2 px-8 py-3.5 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-all shadow-lg shadow-navy/25 text-sm">
                Schedule a Consultation →
              </Link>
            </FadeUp>
          </div>
        </div>
      </section>

      {/* Profile Summary */}
      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading label="Expertise" title="Profile Summary" />
          <div className="grid md:grid-cols-2 gap-4 mt-10">
            {profileSummaryPoints.map((point, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="flex gap-3 p-5 rounded-xl bg-white border border-gray-100 shadow-sm h-full">
                  <CheckCircle className="w-5 h-5 text-navy shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600 leading-relaxed">{point}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading label="Skills" title="Core Competencies" />
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10">
            {coreCompetencies.map((comp, i) => (
              <FadeUp key={i} delay={i * 0.03}>
                <div className="p-4 rounded-xl bg-navy text-white text-center text-sm font-medium shadow-sm hover:bg-navy-light transition-colors">
                  {comp}
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Soft Skills */}
          <div className="mt-12">
            <h3 className="font-heading text-xl font-semibold text-navy mb-6 text-center">Soft Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {softSkills.map((skill, i) => (
                <span key={i} className="px-5 py-2.5 rounded-full border-2 border-navy text-navy text-sm font-medium hover:bg-navy hover:text-white transition-all duration-300">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="py-20 bg-light">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading label="Career" title="Work Experience" />
          <div className="space-y-6 mt-10">
            {workExperience.map((job, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                    <div>
                      <h3 className="font-heading text-lg font-bold text-navy">{job.title}</h3>
                      <p className="text-sm font-semibold text-gray-500">{job.company}</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-navy/5 text-navy text-xs font-semibold rounded-full whitespace-nowrap">
                      <Briefcase className="w-3 h-3" />
                      {job.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {job.highlights.map((h, j) => (
                      <li key={j} className="flex gap-2.5 text-sm text-gray-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-navy shrink-0 mt-2" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <SectionHeading label="Journey" title="Career Timeline" />
          <div className="mt-10 relative">
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 -translate-x-1/2" />
            {careerTimeline.map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className={`relative flex items-center gap-6 mb-8 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 hidden md:block ${i % 2 === 0 ? 'text-right' : 'text-left'}`}>
                    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 inline-block">
                      <p className="text-navy font-bold text-sm mb-1">{item.period}</p>
                      <p className="font-heading font-semibold text-navy">{item.company}</p>
                    </div>
                  </div>
                  <div className="relative z-10 w-3 h-3 bg-navy rounded-full border-4 border-white shadow shrink-0 md:mx-auto" />
                  <div className="flex-1 md:hidden">
                    <p className="text-navy font-bold text-sm">{item.period}</p>
                    <p className="font-heading font-semibold text-navy">{item.company}</p>
                  </div>
                  <div className={`flex-1 hidden md:block ${i % 2 === 0 ? 'text-left' : 'text-right'}`} />
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-20 bg-navy text-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-4">Achievements</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">Awards & Recognition</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {awardsAndRecognition.map((award, i) => (
              <FadeUp key={i} delay={i * 0.05}>
                <div className="flex gap-3 p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                  <Trophy className="w-5 h-5 text-white/70 shrink-0 mt-0.5" />
                  <p className="text-sm text-white/80 leading-relaxed">{award}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* Appointment Slots Section */}
      <section className="py-20 bg-light">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeading label="Availability" title="Consultation Hours" />
          <div className="grid md:grid-cols-2 gap-8 mt-10">
            {/* Physical Meeting */}
            <FadeUp>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                    <Building2 className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Physical Meeting</h3>
                    <p className="text-xs text-gray-500">In-Person Consultation</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 border border-green-200">
                    <span className="text-sm font-medium text-navy">Monday – Friday</span>
                    <span className="text-sm font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">4:00 PM – 8:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-gray-50 border border-gray-200">
                    <span className="text-sm font-medium text-navy">Saturday</span>
                    <span className="text-sm font-bold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">By Appointment</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 border border-red-200">
                    <span className="text-sm font-medium text-navy">Sunday</span>
                    <span className="text-sm font-bold text-red-600 bg-red-100 px-3 py-1 rounded-full">Closed</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-green-500"></span> Available</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> Limited</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> Closed</span>
                </div>
              </div>
            </FadeUp>

            {/* Online Consultation */}
            <FadeUp delay={0.15}>
              <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                    <Globe className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-bold text-navy">Online Consultation</h3>
                    <p className="text-xs text-gray-500">Virtual Meeting</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-blue-50 border border-blue-200">
                    <span className="text-sm font-medium text-navy">Morning Slot</span>
                    <span className="text-sm font-bold text-blue-700 bg-blue-100 px-3 py-1 rounded-full">10:00 AM – 12:00 PM</span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-lg bg-green-50 border border-green-200">
                    <span className="text-sm font-medium text-navy">Afternoon Slot</span>
                    <span className="text-sm font-bold text-green-700 bg-green-100 px-3 py-1 rounded-full">3:00 PM – 8:00 PM</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center gap-4 text-xs text-gray-500">
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Online</span>
                  <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-green-500"></span> Available</span>
                </div>
                <p className="text-xs text-gray-400 mt-3">Available all days of the week</p>
              </div>
            </FadeUp>
          </div>
        </div>
      </section>

      <CaseResultsStats />
      <BookConsultationCTA />
    </>
  );
}
