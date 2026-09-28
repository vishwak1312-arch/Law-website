"use client";
import { FadeUp, SectionHeading } from "@/components/Motion";
import { Play } from "lucide-react";
import { useRef, useState } from "react";

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    setPlaying(true);
    setTimeout(() => {
      videoRef.current?.play();
    }, 0);
  };

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
            <video
              ref={videoRef}
              src="/intro video.mp4"
              controls={playing}
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover"
              onPause={() => {
                if (videoRef.current && videoRef.current.ended) {
                  setPlaying(false);
                }
              }}
              onEnded={() => setPlaying(false)}
            />

            {!playing && (
              <div
                className="absolute inset-0 flex items-center justify-center bg-navy/60 cursor-pointer group z-10"
                onClick={handlePlay}
              >
                <div className="w-20 h-20 rounded-full bg-navy/90 backdrop-blur-sm flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 ring-2 ring-white/20">
                  <Play className="w-8 h-8 text-white ml-1" />
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="font-heading text-xl font-semibold">A Message From Our Founder</p>
                  <p className="text-white/60 text-sm">Introduction Video</p>
                </div>
              </div>
            )}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
