"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function TactHero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = [
    {
      tag: "PLACEMENTS",
      title: "Careers That Begin on Campus",
      subtitle:
        "124 recruiters visited in 2026, and 2,936 campus placements over the last five years.",
      buttonText: "Placement Record",
      buttonHref: "#placements",
      image: "/images/hero-placements.jpg",
    },
    {
      tag: "WELCOME TO TAPS",
      title: "Where Ambition Finds Its Direction",
      subtitle:
        "Undergraduate programmes in computer applications (BCA) and business administration (BBA), built on the Trident legacy of quality education since 2000.",
      buttonText: "Explore Programmes",
      buttonHref: "#programmes",
      image: "/images/drive/campus-building.png",
    },
    {
      tag: "INDUSTRY CONNECT",
      title: "Learning That Meets the Industry Halfway",
      subtitle:
        "Conclaves, expert talks and MoUs bring leaders from industry and academia onto our campus every semester.",
      buttonText: "Industry Connect",
      buttonHref: "#about",
      image: "/images/drive/academic-infrastructure.png",
    },
    {
      tag: "STUDENT ACTIVITIES",
      title: "Curiosity Becomes Capability",
      subtitle:
        "From hackathons and national seminars to sustainability conclaves, our students learn by doing.",
      buttonText: "Student Activities",
      buttonHref: "#facilities",
      image: "/images/drive/hack-day.png",
    },
  ];

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Featured highlights"
      className="relative h-[72vh] sm:h-[70vh] min-h-[480px] sm:min-h-[540px] max-h-[720px] overflow-hidden bg-black text-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Slides with Cross-Fade */}
      {slides.map((slide, index) => {
        const isActive = index === currentSlide;
        return (
          <div
            key={slide.title}
            aria-hidden={!isActive}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              isActive ? "opacity-100 z-10" : "opacity-0 pointer-events-none z-0"
            }`}
          >
            {/* Background Photograph */}
            <div className="absolute inset-0">
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority={index === 0}
                className="object-cover object-center filter grayscale-[35%]"
                sizes="100vw"
              />
            </div>

            {/* Gradient Overlay in Monochrome */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/80 to-black/40 sm:bg-gradient-to-r sm:from-black/95 sm:via-black/75 sm:to-black/30" />

            {/* Slide Text Content */}
            <div className="relative h-full max-w-[1600px] mx-auto px-6 sm:px-12 md:px-16 flex items-center">
              <div className="max-w-2xl animate-fadeInUp">
                
                {/* Category Tag */}
                <div className="text-xs uppercase tracking-widest text-zinc-300 font-semibold mb-2 sm:mb-4">
                  {slide.tag}
                </div>

                {/* Main Headline */}
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-3 sm:mb-5 tracking-tight text-white">
                  {slide.title}
                </h1>

                {/* Subtitle */}
                <p className="text-sm sm:text-base md:text-lg text-zinc-200 mb-6 sm:mb-8 font-light line-clamp-3 sm:line-clamp-none leading-relaxed">
                  {slide.subtitle}
                </p>

                {/* Primary Black Button */}
                <Link
                  href={slide.buttonHref}
                  className="relative inline-flex items-center justify-center px-7 sm:px-9 py-3 rounded-xl bg-black border border-zinc-700 hover:border-zinc-300 text-white text-sm sm:text-base font-semibold hover:bg-zinc-900 transition-all duration-200 shadow-xl hover-lift active:scale-95"
                >
                  <span>{slide.buttonText}</span>
                  <span className="ml-2">→</span>
                </Link>

              </div>
            </div>
          </div>
        );
      })}

      {/* Left Carousel Arrow */}
      <button
        onClick={prevSlide}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-md border border-white/20 hover:border-white/50 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Right Carousel Arrow */}
      <button
        onClick={nextSlide}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-black/60 hover:bg-black text-white flex items-center justify-center backdrop-blur-md border border-white/20 hover:border-white/50 transition-all duration-200 hover:scale-105 active:scale-95 cursor-pointer"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* Bottom Center Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`transition-all rounded-full cursor-pointer ${
              i === currentSlide ? "w-7 h-2 bg-white" : "w-2 h-2 bg-white/40 hover:bg-white/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
