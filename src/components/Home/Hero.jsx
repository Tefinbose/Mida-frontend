import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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

  // Automatic slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => {
        return (prevSlide + 1) % slides.length;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Hero Background Image */}
      <img
        src={slides[currentSlide].image}
        alt={slides[currentSlide].title}
        className="absolute inset-0 h-full w-full object-cover transition-opacity duration-700"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6 text-center text-white">
        <div className="max-w-4xl">
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-[#20B7C8] md:text-base">
            Welcome To Mida Travels
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
            {slides[currentSlide].title}
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-200 md:text-lg">
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

      {/* Slider Dots */}
      <div className="absolute bottom-10 left-1/2 z-20 flex -translate-x-1/2 gap-3">
        {slides.map((slide, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "w-8 bg-[#20B7C8]"
                : "w-3 bg-white/60 hover:bg-white"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
