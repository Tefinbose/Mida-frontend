import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

const SLIDE_DURATION =4000;

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
    title: "Discover A Different World",
    subtitle:
      "Explore extraordinary destinations and create unforgettable memories with Mida Travels.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1920&q=80",
    title: "Explore Dreamy Destinations",
    subtitle:
      "From breathtaking landscapes to vibrant cities, your perfect journey begins here.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=1920&q=80",
    title: "Fly & Find Your Favourite Spot",
    subtitle:
      "Discover beautiful places around the world and experience travel like never before.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80",
    title: "Let That Dream Trip Take-Off",
    subtitle:
      "Turn your travel dreams into unforgettable adventures with Mida Travels.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?auto=format&fit=crop&w=1920&q=80",
    title: "Your Next Adventure Awaits",
    subtitle:
      "Experience new destinations, exciting adventures, and memories that last forever.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=1920&q=80",
    title: "Travel Beyond Borders",
    subtitle:
      "Explore the world with carefully planned journeys and exceptional travel experiences.",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const goTo = useCallback((index) => {
    setCurrentSlide((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(() => goTo(currentSlide + 1), [currentSlide, goTo]);
  const prev = useCallback(() => goTo(currentSlide - 1), [currentSlide, goTo]);

  // Automatic slider — always advances, regardless of hover/focus
  useEffect(() => {
    const interval = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="relative h-screen overflow-hidden bg-[#0C2530]">
      {/* Slides — stacked and crossfaded, each with a slow Ken Burns zoom */}
      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={index !== currentSlide}
        >
          <img
            src={slide.image}
            alt=""
            className={`h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-[7000ms] motion-safe:ease-out ${
              index === currentSlide ? "scale-110" : "scale-100"
            }`}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        </div>
      ))}

      {/* Gradient overlay — heavier at the bottom for text/control legibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
        <div className="max-w-4xl" aria-live="polite">
          <p
            key={`eyebrow-${currentSlide}`}
            className="mb-5 animate-[fade-in-up_0.6s_ease-out] text-sm font-semibold uppercase tracking-[0.3em] text-[#20B7C8] md:text-base"
          >
            Welcome To Mida Travels
          </p>

          <h1
            key={`title-${currentSlide}`}
            className="animate-[fade-in-up_0.6s_ease-out_0.1s_both] text-4xl font-bold leading-tight md:text-6xl lg:text-7xl"
          >
            {slides[currentSlide].title}
          </h1>

          <p
            key={`subtitle-${currentSlide}`}
            className="mx-auto mt-6 max-w-2xl animate-[fade-in-up_0.6s_ease-out_0.2s_both] text-base leading-relaxed text-gray-200 md:text-lg"
          >
            {slides[currentSlide].subtitle}
          </p>

          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            {/* Explore Packages */}
            <Link
              to="/packages"
              className="group relative overflow-hidden rounded-full bg-[#1597A8] px-7 py-3 font-semibold text-white transition hover:bg-[#20B7C8]"
            >
              <span className="relative block overflow-hidden">
                <span className="block transition-transform duration-300 ease-[cubic-bezier(0.44,0.0,0.56,1)] group-hover:-translate-y-full">
                  Explore Packages
                </span>
                <span className="absolute left-0 top-full block transition-transform duration-300 ease-[cubic-bezier(0.44,0.0,0.56,1)] group-hover:-translate-y-full">
                  Explore Packages
                </span>
              </span>
            </Link>

            {/* Plan Your Journey */}
            <Link
              to="/contact"
              className="group relative overflow-hidden rounded-full border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-[#123B4A]"
            >
              <span className="relative block overflow-hidden">
                <span className="block transition-transform duration-300 ease-[cubic-bezier(0.44,0.0,0.56,1)] group-hover:-translate-y-full">
                  Plan Your Journey
                </span>
                <span className="absolute left-0 top-full block transition-transform duration-300 ease-[cubic-bezier(0.44,0.0,0.56,1)] group-hover:-translate-y-full">
                  Plan Your Journey
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>

      {/* Prev / Next arrows */}
      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="group absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/25 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/25 sm:flex md:left-6"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 transition group-hover:-translate-x-0.5">
          <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="group absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/25 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/25 sm:flex md:right-6"
      >
        <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 transition group-hover:translate-x-0.5">
          <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Slide indicators with autoplay progress */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index}
            onClick={() => goTo(index)}
            className={`relative h-1.5 overflow-hidden rounded-full bg-white/30 transition-all duration-300 ${
              currentSlide === index ? "w-10" : "w-4 hover:bg-white/50"
            }`}
          >
            {currentSlide === index && (
              <span
                key={`progress-${currentSlide}`}
                className="absolute inset-y-0 left-0 block bg-[#20B7C8]"
                style={{
                  animation: `slide-progress ${SLIDE_DURATION}ms linear forwards`,
                }}
              />
            )}
          </button>
        ))}
      </div>

      Scroll cue
      {/* <div className="absolute bottom-24 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 text-white/70 sm:flex">
        <span className="text-[11px] font-medium uppercase tracking-[0.25em]">Scroll</span>
        <span className="h-8 w-5 rounded-full border border-white/40 p-1">
          <span className="block h-1.5 w-1.5 animate-bounce rounded-full bg-white/80" />
        </span>
      </div> */}

      <style>{`
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(14px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slide-progress {
          from { width: 0%; }
          to { width: 100%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;