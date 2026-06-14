"use client";
import { FadeUp, SectionHeading } from "@/components/Motion";
import { Play } from "lucide-react";
import { useState } from "react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading
          label="Introduction"
          title="Meet Your Advocate"
          description="Watch a brief introduction from Advocate Vamshi Krishnaa about our firm's approach to legal representation."
        />

        <FadeUp className="max-w-4xl mx-auto">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-navy">
            {!playing ? (
              <div className="absolute inset-0 flex items-center justify-center bg-navy/80 cursor-pointer group" onClick={() => setPlaying(true)}>
                <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-heading text-xl font-semibold">A Message From Our Founder</p>
                  <p className="text-white/60 text-sm">2:30 min</p>
                </div>
              </div>
            ) : (
              <iframe
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                title="Meet Your Advocate"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
