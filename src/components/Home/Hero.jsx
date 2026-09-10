import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";

const SLIDE_DURATION = 4000;

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

  useEffect(() => {
    const interval = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [next]);

  return (
    <section className="relative h-[100svh] min-h-[560px] overflow-hidden bg-[#0C2530]">
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

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/75" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-20 text-center text-white sm:pb-16">
        <div className="max-w-3xl" aria-live="polite">
          {/* Kicker badge — a small pill instead of tracked-out all-caps text,
              so it reads as a label rather than adding another wide line */}
          <span
            key={`kicker-${currentSlide}`}
            className="inline-flex animate-[fade-in-up_0.6s_ease-out] items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-xs font-medium text-white/90 backdrop-blur-sm sm:text-sm"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#20B7C8]" />
            Welcome to Mida Travels
          </span>

          <h1
            key={`title-${currentSlide}`}
            className="mt-5 animate-[fade-in-up_0.6s_ease-out_0.1s_both] text-3xl font-bold leading-[1.15] sm:mt-6 sm:text-5xl lg:text-6xl"
          >
            {slides[currentSlide].title}
          </h1>

          <p
            key={`subtitle-${currentSlide}`}
            className="mx-auto mt-4 max-w-xl animate-[fade-in-up_0.6s_ease-out_0.2s_both] text-sm leading-relaxed text-gray-200 sm:mt-5 sm:text-base"
          >
            {slides[currentSlide].subtitle}
          </p>

          {/* Both CTAs share identical height/padding so their centers line
              up exactly — a text-link paired with a filled pill button
              rarely aligns cleanly since the two have different box heights. */}
          <div className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:mt-9 sm:gap-4">
            <Link
              to="/packages"
              className="group inline-flex h-11 items-center justify-center rounded-full bg-[#1597A8] px-6 text-sm font-semibold leading-none text-white transition hover:bg-[#20B7C8] sm:h-12 sm:px-7 sm:text-base"
            >
              <span className="relative block overflow-hidden">
                {/* Normal Text */}
                <span className="block transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:-translate-y-full">
                  Explore Packages
                </span>

                {/* Hover Text */}
                <span className="absolute left-0 top-full block w-full transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:-translate-y-full">
                  Explore Packages
                </span>
              </span>
            </Link>

            <Link
              to="/contact"
              className="group inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-white/70 px-6 text-sm font-semibold leading-none text-white transition hover:bg-white hover:text-[#123B4A] sm:h-12 sm:px-7 sm:text-base"
            >
              <span className="relative block overflow-hidden">
                {/* Normal Text */}
                <span className="block transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:-translate-y-full">
                  Plan Your Journey
                </span>

                {/* Hover Text */}
                <span className="absolute left-0 top-full block w-full transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:-translate-y-full">
                  Plan Your Journey
                </span>
              </span>
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 shrink-0 transition group-hover:translate-x-0.5">
                <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>

          {/* Small trust cue — light-touch, ties back to the Google reviews already on the site */}
          <p
            key={`trust-${currentSlide}`}
            className="mt-5 animate-[fade-in-up_0.6s_ease-out_0.3s_both] text-xs text-white/70 sm:text-sm"
          >
            Rated 4.9 by 500+ travellers
          </p>
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
      <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-3 sm:bottom-8">
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