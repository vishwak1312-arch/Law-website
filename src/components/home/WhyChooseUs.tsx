"use client";
import { SectionHeading, FadeUp } from "@/components/Motion";
import { UserCheck, Target, MessageSquare, TrendingUp } from "lucide-react";

const features = [
  { icon: UserCheck, title: "Personalized Attention", description: "Every case receives individualized strategy. You'll work directly with your advocate, not a junior associate." },
  { icon: Target, title: "Strategic Legal Solutions", description: "We don't just react — we anticipate. Our proactive approach positions you for the best possible outcome." },
  { icon: MessageSquare, title: "Transparent Communication", description: "You'll never be left in the dark. We provide regular updates and are always available to answer your questions." },
  { icon: TrendingUp, title: "Proven Results", description: "With over 500 cases successfully resolved and a 98% satisfaction rate, our track record speaks for itself." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Why Choose Us"
          title="What Sets Us Apart"
          description="We combine legal expertise with genuine care for our clients' well-being."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map(({ icon: Icon, title, description }, i) => (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="text-center group">
                <div className="w-16 h-16 rounded-2xl bg-navy flex items-center justify-center mx-auto mb-5 group-hover:bg-gray-600 transition-colors duration-500 shadow-lg">
                  <Icon className="w-7 h-7 text-white group-hover:text-white transition-colors duration-500" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-navy mb-3">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
