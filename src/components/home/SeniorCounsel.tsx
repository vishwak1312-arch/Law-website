"use client";
import Image from "next/image";
import { FadeUp, SectionHeading } from "@/components/Motion";
import {
  Scale,
  Landmark,
  Phone,
  Mail,
  Award,
  BookOpen,
  Gavel,
  Shield,
  Building2,
  FileText,
  Users,
  Globe,
  ChevronRight,
} from "lucide-react";

const expertiseAreas = [
  { icon: Scale, label: "Constitutional Law" },
  { icon: FileText, label: "Writ Petitions (Art. 226 & 227)" },
  { icon: Gavel, label: "Civil Litigation" },
  { icon: Shield, label: "Criminal Litigation" },
  { icon: Landmark, label: "Land Acquisition & Compensation" },
  { icon: Building2, label: "Property, Revenue & Land Laws" },
  { icon: BookOpen, label: "Registration & Stamp Laws" },
  { icon: Users, label: "Service Law" },
  { icon: Globe, label: "Commercial & Contractual Disputes" },
  { icon: Scale, label: "Arbitration & ADR" },
  { icon: FileText, label: "Appeals, Revisions & Second Appeals" },
  { icon: Landmark, label: "Government Litigation" },
  { icon: BookOpen, label: "Legal Opinions & Due Diligence" },
];

export default function SeniorCounsel() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle at 70% 50%, #0a0a0a 0%, transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Senior Counsel"
          title="Distinguished Legal Leadership"
          description="Backed by decades of High Court advocacy and government representation."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-12">
          {/* Image */}
          <FadeUp>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-navy/5 to-gray-200/30 rounded-2xl rotate-1" />
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/senior-counsel.jpg"
                  alt="Ram Prasad Teegala - Senior Counsel, High Court of Telangana"
                  width={700}
                  height={500}
                  className="w-full h-auto object-cover"
                  priority
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                {/* Badge */}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-5 py-3 rounded-xl shadow-lg">
                  <div className="flex items-center gap-2">
                    <Landmark className="w-5 h-5 text-navy" />
                    <div>
                      <p className="text-navy font-bold text-sm">
                        High Court Advocate
                      </p>
                      <p className="text-xs text-gray-500">
                        Former Government Pleader
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Content */}
          <FadeUp delay={0.2}>
            <div>
              {/* Name & Title */}
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <Award className="w-6 h-6 text-navy" />
                  <span className="text-xs font-semibold uppercase tracking-[0.2em] text-navy/60">
                    Senior Counsel
                  </span>
                </div>
                <h3 className="font-heading text-3xl md:text-4xl font-bold text-navy mb-1">
                  Ram Prasad Teegala
                </h3>
                <p className="text-gray-500 font-semibold text-sm">
                  Advocate, High Court for the State of Telangana
                </p>
                <p className="text-navy/60 text-sm mt-1">
                  Former Government Pleader
                </p>
              </div>

              {/* Bio */}
              <div className="space-y-4 text-gray-600 leading-relaxed text-sm mb-8">
                <p>
                  With over two decades of distinguished legal practice, Ram
                  Prasad Teegala is an Advocate practising before the High Court
                  for the State of Telangana. He has served as Government
                  Pleader for the Departments of Revenue (Stamps &
                  Registration), Finance, Information Technology, Planning, and
                  Law & Legislative Affairs, representing the Government in
                  significant constitutional, civil, revenue, and administrative
                  matters.
                </p>
                <p>
                  His practice is founded on legal excellence, meticulous
                  preparation, and effective courtroom advocacy. He regularly
                  represents individuals, institutions, corporate entities, and
                  government bodies before the High Court, District Courts,
                  Tribunals, and other judicial forums.
                </p>
              </div>

              {/* Contact */}
              <div className="flex flex-wrap gap-4 mb-8">
                <a
                  href="tel:+919032866666"
                  className="inline-flex items-center gap-2 px-5 py-3 bg-navy text-white text-sm font-semibold rounded-lg hover:bg-navy-light transition-all shadow-lg shadow-navy/25 hover:-translate-y-0.5"
                >
                  <Phone className="w-4 h-4" />
                  +91 9032866666
                </a>
                <a
                  href="mailto:ramprasadteegala@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-3 border-2 border-navy text-navy text-sm font-semibold rounded-lg hover:bg-navy hover:text-white transition-all"
                >
                  <Mail className="w-4 h-4" />
                  Email
                </a>
              </div>
            </div>
          </FadeUp>
        </div>

        {/* Areas of Expertise */}
        <FadeUp delay={0.3}>
          <div className="mt-16">
            <h4 className="font-heading text-xl font-bold text-navy mb-6 text-center">
              Areas of Expertise
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {expertiseAreas.map(({ icon: Icon, label }, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 rounded-xl bg-light border border-gray-100 hover:border-navy/20 hover:shadow-sm transition-all duration-300 group"
                >
                  <Icon className="w-4 h-4 text-navy/60 group-hover:text-navy shrink-0 transition-colors" />
                  <span className="text-sm text-gray-700 font-medium">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
