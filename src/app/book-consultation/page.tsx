import type { Metadata } from "next";
import { FadeUp, SectionHeading } from "@/components/Motion";
import { siteConfig } from "@/lib/data";
import { Calendar, Phone, Shield, Clock, CheckCircle, Building2, Globe, MapPin } from "lucide-react";

export const metadata: Metadata = { title: "Book Consultation", description: "Schedule a confidential consultation with our experienced advocate. Online booking available 24/7." };

const benefits = [
  { icon: Shield, text: "100% Confidential" },
  { icon: Clock, text: "Flexible Scheduling" },
  { icon: CheckCircle, text: "Virtual or In-Person" },
];

export default function BookConsultationPage() {
  return (
    <>
      <section className="bg-navy py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, #ffffff 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-6 text-center relative">
          <FadeUp>
            <span className="inline-block px-4 py-1.5 bg-white/10 text-white text-xs font-semibold uppercase tracking-[0.2em] rounded-full mb-4">Get Started</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">Book Your Consultation</h1>
            <p className="text-white/60 text-lg max-w-2xl mx-auto">Take the first step toward resolving your legal matter. Schedule a confidential consultation today.</p>
            <div className="flex flex-wrap justify-center gap-6 mt-8">
              {benefits.map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-center gap-2 text-white/70 text-sm">
                  <Icon className="w-4 h-4 text-white" />
                  {text}
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Main Content - Appointment Slots */}
            <div className="lg:col-span-3">
              <FadeUp>
                <h2 className="font-heading text-2xl font-bold text-navy mb-6">Choose Your Consultation Type</h2>
                
                {/* Physical Meeting Slots */}
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm mb-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                      <Building2 className="w-5 h-5 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-navy">Physical Meeting</h3>
                      <p className="text-xs text-gray-500">In-Person Consultation at Office</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                    {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map((day) => (
                      <div key={day} className="flex items-center justify-between p-3 rounded-lg bg-green-50 border border-green-200">
                        <span className="text-sm font-medium text-navy">{day}</span>
                        <span className="text-xs font-bold text-green-700 bg-green-100 px-2.5 py-1 rounded-full">
                          4:00 PM – 8:00 PM
                        </span>
                      </div>
                    ))}
                    <div className="flex items-center justify-between p-3 rounded-lg bg-red-50 border border-red-200">
                      <span className="text-sm font-medium text-navy">Sat & Sun</span>
                      <span className="text-xs font-bold text-red-600 bg-red-100 px-2.5 py-1 rounded-full">
                        Closed
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-gray-500 pt-3 border-t border-gray-100">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-green-500"></span> Available</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> Closed</span>
                  </div>
                </div>

                {/* Online Consultation Slots */}
                <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm mb-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-navy">Online Consultation</h3>
                      <p className="text-xs text-gray-500">Virtual Meeting via Video Call</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center justify-between p-4 rounded-lg bg-blue-50 border border-blue-200">
                      <div>
                        <span className="text-sm font-medium text-navy block">Morning Slot</span>
                        <span className="text-xs text-gray-500">All Days Available</span>
                      </div>
                      <span className="text-sm font-bold text-blue-700 bg-blue-100 px-3 py-1.5 rounded-full">
                        10:00 AM – 12:00 PM
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg bg-green-50 border border-green-200">
                      <div>
                        <span className="text-sm font-medium text-navy block">Afternoon/Evening Slot</span>
                        <span className="text-xs text-gray-500">All Days Available</span>
                      </div>
                      <span className="text-sm font-bold text-green-700 bg-green-100 px-3 py-1.5 rounded-full">
                        3:00 PM – 8:00 PM
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 text-xs text-gray-500 pt-3 border-t border-gray-100">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-blue-500"></span> Online</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-green-500"></span> Available</span>
                  </div>
                </div>

                {/* Calendly Embed */}
                <div className="bg-light rounded-2xl p-2 border border-gray-100">
                  <div className="bg-white rounded-xl overflow-hidden shadow-sm" style={{ minHeight: "700px" }}>
                    <iframe
                      src={process.env.NEXT_PUBLIC_CALENDLY_URL || siteConfig.calendlyUrl}
                      width="100%"
                      height="700"
                      frameBorder="0"
                      title="Schedule Appointment"
                      className="w-full"
                    />
                  </div>
                </div>
              </FadeUp>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <FadeUp delay={0.2}>
                <div className="bg-navy rounded-2xl p-8 text-white mb-6">
                  <h3 className="font-heading text-xl font-semibold mb-4">What to Expect</h3>
                  <div className="space-y-4 text-sm text-white/70">
                    <div className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-bold shrink-0">1</span>
                      <p><strong className="text-white">Choose a Time</strong> — Select a convenient date and time from the available slots above.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-bold shrink-0">2</span>
                      <p><strong className="text-white">Confirm Details</strong> — Provide your contact information and a brief description of your matter.</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="w-6 h-6 rounded-full bg-white/10 text-white flex items-center justify-center text-xs font-bold shrink-0">3</span>
                      <p><strong className="text-white">Meet Your Advocate</strong> — Receive a confirmation with meeting details.</p>
                    </div>
                  </div>
                </div>

                {/* Contact Cards */}
                <div className="bg-light rounded-xl p-6 border border-gray-100 mb-6">
                  <h3 className="font-heading text-lg font-semibold text-navy mb-3">Prefer to Call?</h3>
                  <p className="text-sm text-gray-500 mb-4">Speak directly with Advocate Vamshi Krishnaa to schedule your consultation.</p>
                  <div className="space-y-3">
                    <a href={`tel:${siteConfig.phone}`} className="flex items-center gap-2 px-6 py-3 bg-navy text-white font-semibold rounded-lg hover:bg-navy-light transition-all text-sm w-full justify-center">
                      <Phone className="w-4 h-4" /> {siteConfig.phone}
                    </a>
                    <a href={`tel:${siteConfig.phone2}`} className="flex items-center gap-2 px-6 py-3 border-2 border-navy text-navy font-semibold rounded-lg hover:bg-navy hover:text-white transition-all text-sm w-full justify-center">
                      <Phone className="w-4 h-4" /> {siteConfig.phone2}
                    </a>
                  </div>
                </div>

                <div className="bg-light rounded-xl p-6 border border-gray-100">
                  <h3 className="font-heading text-lg font-semibold text-navy mb-3">Office Location</h3>
                  <div className="flex items-start gap-2 text-sm text-gray-500">
                    <MapPin className="w-4 h-4 text-navy shrink-0 mt-0.5" />
                    <p>{siteConfig.address}</p>
                  </div>
                </div>
              </FadeUp>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
