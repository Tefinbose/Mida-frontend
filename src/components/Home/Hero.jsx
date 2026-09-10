import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faCalendarDays,
  faUsers,
  faArrowRight,
  faArrowLeft,
  faCheck,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

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

const steps = [
  ["Destination", "Where would you like to go?", faGlobe],
  ["Travel Date", "When are you planning to travel?", faCalendarDays],
  ["Travelers", "How many people are travelling?", faUsers],
  ["Contact", "How can we reach you?", faEnvelope],
];

const initialQuote = {
  destination: "",
  date: "",
  travelers: 1,
  email: "",
  whatsapp: "",
};

const inputClass =
  "h-11 w-full rounded-xl border border-gray-200 bg-gray-50 pl-11 pr-4 text-sm text-gray-800 outline-none transition focus:border-[#1597A8] focus:bg-white focus:ring-2 focus:ring-[#1597A8]/10";

const HeroInput = ({ type = "text", value, onChange, placeholder, icon, autoFocus }) => (
  <div className="relative">
    <FontAwesomeIcon
      icon={icon}
      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1597A8]"
    />
    <input
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      autoFocus={autoFocus}
      required
      className={inputClass}
    />
  </div>
);

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [quoteData, setQuoteData] = useState(initialQuote);

  /* ================= SLIDER ================= */

  const goTo = useCallback((index) => {
    setCurrentSlide((index + slides.length) % slides.length);
  }, []);

  const next = useCallback(
    () => setCurrentSlide((prev) => (prev + 1) % slides.length),
    []
  );

  const prev = useCallback(
    () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length),
    []
  );

  useEffect(() => {
    const timer = setInterval(next, SLIDE_DURATION);
    return () => clearInterval(timer);
  }, [next]);

  /* ================= QUOTE ================= */

  const updateQuote = (field, value) =>
    setQuoteData((prev) => ({ ...prev, [field]: value }));

  const nextStep = () =>
    currentStep < steps.length - 1 && setCurrentStep((prev) => prev + 1);

  const previousStep = () =>
    currentStep > 0 && setCurrentStep((prev) => prev - 1);

  /* ================= SUBMIT + RESET ================= */

  const handleQuoteSubmit = (e) => {
    e.preventDefault();
    console.log("Quote Details:", quoteData);
    setSubmitted(true);
  };

  useEffect(() => {
    if (!submitted) return;

    const timer = setTimeout(() => {
      setSubmitted(false);
      setCurrentStep(0);
      setQuoteData(initialQuote);
    }, 2200);

    return () => clearTimeout(timer);
  }, [submitted]);

  /* ================= STEP CONTENT ================= */

  const renderStep = () => {
    switch (currentStep) {
      case 0:
        return (
          <HeroInput
            value={quoteData.destination}
            onChange={(e) => updateQuote("destination", e.target.value)}
            placeholder="Enter your destination"
            icon={faGlobe}
            autoFocus
          />
        );

      case 1:
        return (
          <HeroInput
            type="date"
            value={quoteData.date}
            onChange={(e) => updateQuote("date", e.target.value)}
            icon={faCalendarDays}
            autoFocus
          />
        );

      case 2:
        return (
          <div className="flex h-11 items-center justify-between rounded-xl border border-gray-200 bg-gray-50 px-4">
            <span className="flex items-center gap-3 text-sm text-gray-600">
              <FontAwesomeIcon icon={faUsers} className="text-[#1597A8]" />
              Travelers
            </span>

            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() =>
                  updateQuote(
                    "travelers",
                    Math.max(1, quoteData.travelers - 1)
                  )
                }
                className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition duration-300 hover:border-[#1597A8] hover:bg-[#1597A8] hover:text-white"
              >
                −
              </button>

              <span className="min-w-5 text-center text-sm font-semibold text-[#123B4A]">
                {quoteData.travelers}
              </span>

              <button
                type="button"
                onClick={() =>
                  updateQuote("travelers", quoteData.travelers + 1)
                }
                className="flex h-7 w-7 items-center justify-center rounded-full border border-gray-300 text-gray-600 transition duration-300 hover:border-[#1597A8] hover:bg-[#1597A8] hover:text-white"
              >
                +
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-3">
            <HeroInput
              type="email"
              value={quoteData.email}
              onChange={(e) => updateQuote("email", e.target.value)}
              placeholder="Enter your email address"
              icon={faEnvelope}
              autoFocus
            />

            <HeroInput
              type="tel"
              value={quoteData.whatsapp}
              onChange={(e) => updateQuote("whatsapp", e.target.value)}
              placeholder="Enter your WhatsApp number"
              icon={faWhatsapp}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0C2530] lg:h-[100svh]">
      {/* ================= BACKGROUND ================= */}

      {slides.map((slide, index) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt=""
            className={`h-full w-full object-cover motion-safe:transition-transform motion-safe:duration-[7000ms] ${
              index === currentSlide ? "scale-110" : "scale-100"
            }`}
            loading={index === 0 ? "eager" : "lazy"}
            fetchPriority={index === 0 ? "high" : "auto"}
          />
        </div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/75" />

      {/* ================= MAIN ================= */}

      <div className="relative z-10 px-4 pb-16 pt-24 sm:px-8 sm:pt-28 lg:flex lg:h-full lg:items-center lg:px-14 lg:py-20 xl:px-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-7 lg:grid-cols-[1.1fr_0.9fr] xl:gap-14">

          {/* ================= HERO CONTENT ================= */}

          <div
            className="text-center text-white lg:text-left"
            aria-live="polite"
          >
            <span
              key={`kicker-${currentSlide}`}
              className="inline-flex animate-[fade-in-up_0.6s_ease-out] items-center gap-2 rounded-full border border-white/25 bg-white/10 px-3 py-1 text-[10px] font-medium backdrop-blur-sm sm:text-sm"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#20B7C8]" />
              Welcome to Mida Travels
            </span>

            <h1
              key={`title-${currentSlide}`}
              className="mt-4 animate-[fade-in-up_0.6s_ease-out_0.1s_both] text-3xl font-bold leading-[1.15] sm:mt-6 sm:text-5xl lg:text-6xl"
            >
              {slides[currentSlide].title}
            </h1>

            <p
              key={`subtitle-${currentSlide}`}
              className="mx-auto mt-4 max-w-xl animate-[fade-in-up_0.6s_ease-out_0.2s_both] text-sm leading-relaxed text-gray-200 sm:mt-5 sm:text-base lg:mx-0"
            >
              {slides[currentSlide].subtitle}
            </p>

            {/* CTA */}

            <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-9 sm:gap-4 lg:justify-start">
              <Link
                to="/packages"
                className="group inline-flex h-11 items-center justify-center rounded-full bg-[#1597A8] px-6 text-sm font-semibold text-white transition hover:bg-[#20B7C8] sm:h-12 sm:px-7 sm:text-base"
              >
                <span className="relative block overflow-hidden">
                  <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                    Explore Packages
                  </span>
                  <span className="absolute left-0 top-full block w-full transition-transform duration-300 group-hover:-translate-y-full">
                    Explore Packages
                  </span>
                </span>
              </Link>

              <Link
                to="/contact"
                className="group inline-flex h-11 items-center justify-center gap-1.5 rounded-full border border-white/70 px-6 text-sm font-semibold text-white transition hover:bg-white hover:text-[#123B4A] sm:h-12 sm:px-7 sm:text-base"
              >
                <span className="relative block overflow-hidden">
                  <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                    Plan Your Journey
                  </span>
                  <span className="absolute left-0 top-full block w-full transition-transform duration-300 group-hover:-translate-y-full">
                    Plan Your Journey
                  </span>
                </span>

                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-4 w-4 transition group-hover:translate-x-0.5"
                >
                  <path
                    d="M9 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>

            <p
              key={`trust-${currentSlide}`}
              className="mt-4 animate-[fade-in-up_0.6s_ease-out_0.3s_both] text-xs text-white/70 sm:mt-5 sm:text-sm"
            >
              Rated 4.9 by 500+ travellers
            </p>
          </div>

          {/* ================= QUOTE CARD ================= */}

          <div className="mx-auto w-full max-w-md lg:ml-auto">
            <form
              onSubmit={handleQuoteSubmit}
              className="rounded-3xl border border-white/20 bg-white/95 p-5 shadow-2xl backdrop-blur-xl sm:p-6"
            >
              {/* HEADER */}

              <div className="mb-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#1597A8]">
                  Plan With Mida
                </p>

                <h2 className="mt-1 text-xl font-bold text-[#123B4A] sm:text-2xl">
                  Get a Free Quote
                </h2>

                <p className="mt-1 text-xs leading-5 text-gray-500">
                  Tell us about your trip and we'll help you plan it.
                </p>
              </div>

              {/* STEPPER */}

              <div className="mb-5">
                <div className="flex items-start">
                  {steps.map(([title], index) => {
                    const completed = submitted || index < currentStep;
                    const active = index === currentStep && !submitted;

                    return (
                      <div
                        key={title}
                        className="relative flex flex-1 flex-col items-center"
                      >
                        {index < steps.length - 1 && (
                          <div className="absolute left-1/2 top-4 h-[2px] w-full bg-gray-200">
                            <div
                              className={`h-full origin-left bg-[#1597A8] transition-transform duration-500 ${
                                submitted || currentStep > index
                                  ? "scale-x-100"
                                  : "scale-x-0"
                              }`}
                            />
                          </div>
                        )}

                        <button
                          type="button"
                          disabled={index > currentStep || submitted}
                          onClick={() =>
                            index <= currentStep && setCurrentStep(index)
                          }
                          className={`relative z-10 flex h-8 w-8 items-center justify-center rounded-full text-[10px] font-semibold transition-all duration-300 ${
                            completed
                              ? "bg-[#1597A8] text-white shadow-md"
                              : active
                              ? "scale-110 bg-[#123B4A] text-white shadow-lg"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >
                          {completed ? (
                            <FontAwesomeIcon icon={faCheck} />
                          ) : (
                            index + 1
                          )}
                        </button>

                        <span
                          className={`mt-2 text-[8px] font-medium sm:text-[10px] ${
                            active
                              ? "text-[#123B4A]"
                              : completed
                              ? "text-[#1597A8]"
                              : "text-gray-400"
                          }`}
                        >
                          {title}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* ================= SUCCESS ================= */}

              {submitted ? (
                <div className="flex min-h-[145px] animate-[step-in_0.4s_ease-out] flex-col items-center justify-center text-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1597A8]/10 text-[#1597A8]">
                    <FontAwesomeIcon icon={faCheck} className="text-xl" />
                  </div>

                  <h3 className="mt-3 text-base font-semibold text-[#123B4A]">
                    We've Received Your Request!
                  </h3>

                  <p className="mt-1 max-w-xs text-xs leading-5 text-gray-500">
                    Thank you for sharing your travel details with us. Our team
                    will contact you shortly.
                  </p>
                </div>
              ) : (
                <>
                  {/* ================= CURRENT STEP ================= */}

                  <div
                    key={currentStep}
                    className="animate-[step-in_0.4s_ease-out]"
                  >
                    <div className="mb-3">
                      <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#1597A8]/10 text-[#1597A8]">
                          <FontAwesomeIcon icon={steps[currentStep][2]} />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-[#123B4A]">
                            {steps[currentStep][1]}
                          </p>

                          <p className="text-[10px] text-gray-400">
                            {currentStep === 3
                              ? "We'll contact you shortly"
                              : `Step ${currentStep + 1} of ${steps.length}`}
                          </p>
                        </div>
                      </div>
                    </div>

                    {renderStep()}
                  </div>

                  {/* ================= NAVIGATION ================= */}

                  <div className="mt-4 flex items-center gap-2">
                    {currentStep > 0 && (
                      <button
                        type="button"
                        onClick={previousStep}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-gray-200 text-gray-500 transition-all duration-300 hover:border-[#1597A8] hover:text-[#1597A8]"
                      >
                        <FontAwesomeIcon icon={faArrowLeft} />
                      </button>
                    )}

                    {currentStep < steps.length - 1 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        className="group flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#1597A8] text-sm font-semibold text-white transition-all duration-300 hover:bg-[#20B7C8] hover:shadow-lg hover:shadow-[#1597A8]/20"
                      >
                        Continue
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="group flex h-11 flex-1 items-center justify-center gap-2 rounded-xl bg-[#1597A8] text-sm font-semibold text-white transition-all duration-300 hover:bg-[#20B7C8] hover:shadow-lg hover:shadow-[#1597A8]/20"
                      >
                        Get My Free Quote
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          className="transition-transform duration-300 group-hover:translate-x-1"
                        />
                      </button>
                    )}
                  </div>

                  <p className="mt-3 text-center text-[9px] text-gray-400">
                    No obligation • Quick response • Personalized travel
                    planning
                  </p>
                </>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* ================= SLIDER ARROWS ================= */}

      <button
        type="button"
        aria-label="Previous slide"
        onClick={prev}
        className="group absolute left-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/25 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/25 sm:flex md:left-6"
      >
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="transition group-hover:-translate-x-0.5"
        />
      </button>

      <button
        type="button"
        aria-label="Next slide"
        onClick={next}
        className="group absolute right-3 top-1/2 z-20 hidden -translate-y-1/2 rounded-full border border-white/25 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-white/25 sm:flex md:right-6"
      >
        <FontAwesomeIcon
          icon={faArrowRight}
          className="transition group-hover:translate-x-0.5"
        />
      </button>

      {/* ================= SLIDE INDICATORS ================= */}

      <div className="absolute bottom-5 left-1/2 z-20 flex -translate-x-1/2 gap-2 sm:bottom-8 sm:gap-3">
        {slides.map((slide, index) => (
          <button
            key={slide.image}
            type="button"
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentSlide === index}
            onClick={() => goTo(index)}
            className={`relative h-1.5 overflow-hidden rounded-full bg-white/30 transition-all duration-300 ${
              currentSlide === index
                ? "w-8 sm:w-10"
                : "w-3 sm:w-4 hover:bg-white/50"
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

      {/* ================= ANIMATIONS ================= */}

      <style>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(14px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes step-in {
          from {
            opacity: 0;
            transform: translateX(12px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slide-progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }
      `}</style>
    </section>
  );
};

export default Hero;