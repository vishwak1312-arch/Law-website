"use client";
import { SectionHeading, FadeUp } from "@/components/Motion";
import { Award, BookOpen, Mic, Newspaper, Medal, Star } from "lucide-react";

const achievements = [
  { icon: Award, title: "Bar Memberships", items: ["Bar Council of Telangana", "High Court Advocates Association", "Bar Council of India"] },
  { icon: Medal, title: "Awards & Recognition", items: ["Legal Excellence Award 2020–2026", "Top Corporate & Civil Advocates", "Distinguished Legal Counsel — India"] },
  { icon: Newspaper, title: "Media Mentions", items: ["Featured in The Hindu Legal Columns", "Legal Expert on National News", "Guest Contributor — Times of India"] },
  { icon: Mic, title: "Speaking Engagements", items: ["National Legal Conference 2025", "Osmania University Law Symposium", "Telangana Legal Tech Summit"] },
  { icon: BookOpen, title: "Publications", items: ["'Modern Corporate Governance in India'", "'Property & Family Law Insights'", "'IP Protection Strategies'"] },
  { icon: Star, title: "Certifications", items: ["Board Certified — High Court Advocate", "Certified Mediator & Arbitrator", "Corporate Compliance Certification"] },
];

export default function TrustBuilders() {
  return (
    <section className="py-20 lg:py-28 bg-light">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Credentials"
          title="Awards & Recognition"
          description="Our commitment to excellence has been recognized by peers, media, and professional organizations."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map(({ icon: Icon, title, items }, i) => (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm h-full hover:shadow-lg hover:border-navy/20 transition-all duration-500">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-navy/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-navy" />
                  </div>
                  <h3 className="font-heading text-lg font-semibold text-navy">{title}</h3>
                </div>
                <ul className="space-y-2">
                  {items.map((item, j) => (
                    <li key={j} className="text-sm text-gray-600 flex items-start gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-navy mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
