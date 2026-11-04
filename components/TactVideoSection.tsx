"use client";

import { useState } from "react";

export default function TactVideoSection() {
  const [activeVideo, setActiveVideo] = useState<"tour" | "leadership">("tour");
  const [isPlaying, setIsPlaying] = useState(false);

  const videos = {
    tour: {
      id: "1JA-B9Y18eR4OUomEE3snOvO8Pqa3xKiS",
      title: "Campus Life & Infrastructure Tour",
      subtitle: "Experience the vibrant campus environment, smart classrooms, labs, and student life at Trident.",
      badge: "Institutional Film",
      duration: "Full Campus Tour",
      previewUrl: "https://drive.google.com/file/d/1JA-B9Y18eR4OUomEE3snOvO8Pqa3xKiS/preview",
      poster: "/images/drive/campus-walkway.jpg",
    },
    leadership: {
      id: "1FQf8ap4vuzKfxMSGK0wdWU4LNijwx4_j",
      title: "Academic Vision & Leadership Address",
      subtitle: "Address by Dr. Sakuntala Mahapatra on academic excellence, pedagogical standards, and research.",
      badge: "Leadership Perspective",
      duration: "Keynote Address",
      previewUrl: "https://drive.google.com/file/d/1FQf8ap4vuzKfxMSGK0wdWU4LNijwx4_j/preview",
      poster: "/images/drive/academic-infrastructure.png",
    },
  };

  const current = videos[activeVideo];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#001D4A] text-white overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#0020D6]/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-sky-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div>
            <div className="inline-flex items-center gap-2 text-xs sm:text-sm uppercase tracking-[0.2em] text-sky-300 font-bold mb-3">
              Campus In Motion
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white">
              Experience Trident on Video
            </h2>
            <p className="text-base sm:text-lg text-slate-300 mt-2 font-normal max-w-xl">
              Watch official walkthroughs, student perspectives, and leadership discourses from our Bhubaneswar campus.
            </p>
          </div>

          {/* Video Selector Tabs */}
          <div className="flex items-center gap-2 bg-white/10 p-1.5 rounded-2xl border border-white/15 backdrop-blur-md self-start md:self-auto">
            <button
              onClick={() => {
                setActiveVideo("tour");
                setIsPlaying(false);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeVideo === "tour"
                  ? "bg-[#0020D6] text-white shadow-md shadow-blue-900/40"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              🎬 Campus Tour
            </button>
            <button
              onClick={() => {
                setActiveVideo("leadership");
                setIsPlaying(false);
              }}
              className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeVideo === "leadership"
                  ? "bg-[#0020D6] text-white shadow-md shadow-blue-900/40"
                  : "text-slate-300 hover:text-white hover:bg-white/5"
              }`}
            >
              🎓 Leadership Address
            </button>
          </div>
        </div>

        {/* Video Player Display Container */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-white/15 bg-black/60 shadow-2xl aspect-video max-w-5xl mx-auto">
          {isPlaying ? (
            <iframe
              src={current.previewUrl}
              title={current.title}
              className="w-full h-full border-0"
              allow="autoplay; fullscreen"
              allowFullScreen
            />
          ) : (
            <div className="relative w-full h-full group">
              {/* Poster Backdrop */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url('${current.poster}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#001D4A] via-[#001D4A]/50 to-black/30" />

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  aria-label={`Play ${current.title}`}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-[#0020D6] hover:bg-[#0018b3] text-white flex items-center justify-center shadow-2xl shadow-blue-600/50 hover:scale-110 active:scale-95 transition-all duration-300 group/btn cursor-pointer mb-6"
                >
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 ml-1 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>

                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-sky-300 mb-2 border border-white/20">
                  <span>{current.badge}</span>
                  <span>•</span>
                  <span>{current.duration}</span>
                </div>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white max-w-2xl leading-snug">
                  {current.title}
                </h3>
                <p className="text-sm sm:text-base text-slate-200 mt-2 max-w-xl font-normal">
                  {current.subtitle}
                </p>

                <div className="mt-5 text-xs text-slate-300">
                  Click to start playback directly
                </div>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}

