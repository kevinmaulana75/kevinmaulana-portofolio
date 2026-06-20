"use client";

import { useRef } from "react";
import ScrollReveal from "./ScrollReveal";

const videos = [
  "/images/video/video1.mp4",
  "/images/video/video2.mp4",
  "/images/video/video3.mp4",
];

export default function ReelsSection() {
  const videoRefs = useRef([]);

  const handleMouseEnter = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.play().catch((error) =>
        console.log("Playback interaction blocked:", error)
      );
    }
  };

  const handleMouseLeave = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.pause();
    }
  };

  return (
    <section
      id="reels"
      className="flex items-center justify-center pt-10 pb-24 px-6 lg:pt-12 lg:pb-32 lg:px-24 relative overflow-hidden"
    >
      {/* Background Large Text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.06] select-none bg-text font-black italic text-white">
        REELS
      </div>

      <ScrollReveal className="container mx-auto z-10">
        <div className="glass-card overflow-hidden p-6 md:p-10 relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {videos.map((src, i) => (
              <div
                key={i}
                className="aspect-[9/16] bg-blue-900/20 rounded-[2rem] md:rounded-[3rem] overflow-hidden relative group shadow-2xl hover:scale-105 transition-all duration-500"
                onMouseEnter={() => handleMouseEnter(i)}
                onMouseLeave={() => handleMouseLeave(i)}
              >
                <video
                  ref={(el) => {
                    videoRefs.current[i] = el;
                  }}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  playsInline
                  preload="metadata"
                >
                  <source src={src} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
