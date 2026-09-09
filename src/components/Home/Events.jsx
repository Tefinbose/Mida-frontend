import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faCalendarCheck,
  faBuilding,
  faHeart,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

// Reveals its children once they scroll into view — no animation library needed
const useInView = (options = { threshold: 0.2 }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(node);
      }
    }, options);

    observer.observe(node);
    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return [ref, isInView];
};

const Events = () => {
  const eventServices = [
    { icon: faBuilding, title: "Corporate Events" },
    { icon: faCalendarCheck, title: "Conferences" },
    { icon: faHeart, title: "Destination Weddings" },
    { icon: faUsers, title: "Group Gatherings" },
  ];

  const [imagesRef, imagesInView] = useInView();
  const [contentRef, contentInView] = useInView();

  return (
    <section className="overflow-hidden bg-[#123B4A] px-6 py-24 text-white lg:px-8">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

        {/* Images */}
        <div
          ref={imagesRef}
          className="grid grid-cols-2 gap-4"
        >
          <img
            src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80"
            alt="Event"
            className={`h-72 w-full rounded-2xl object-cover shadow-xl shadow-black/20 transition-all duration-700 ease-out hover:scale-[1.03] ${
              imagesInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          />

          <img
            src="https://images.unsplash.com/photo-1507504031003-b417219a0fde?auto=format&fit=crop&w=800&q=80"
            alt="Wedding"
            className={`mt-10 h-72 w-full rounded-2xl object-cover shadow-xl shadow-black/20 transition-all duration-700 ease-out delay-200 hover:scale-[1.03] ${
              imagesInView
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          />
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className={`transition-all duration-700 ease-out ${
            contentInView
              ? "translate-x-0 opacity-100"
              : "translate-x-8 opacity-0"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#20B7C8]">
            Events With Mida
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight md:text-5xl">
            Creating Experiences
            <span className="block text-[#20B7C8]">
              Beyond Expectations
            </span>
          </h2>

          <p className="mt-6 leading-relaxed text-gray-300">
            For years, Mida Travels has been delivering exceptional events
            with precision, creativity and professionalism. We transform
            ideas into unforgettable experiences across the globe.
          </p>

          <p className="mt-4 leading-relaxed text-gray-300">
            From venue selection and travel arrangements to accommodation,
            entertainment and on-site coordination, our experienced team
            manages every detail with care and expertise.
          </p>

          {/* Event Types */}
          <div className="mt-8 grid grid-cols-2 gap-4">
            {eventServices.map((event, index) => (
              <div
                key={event.title}
                className={`group flex items-center gap-3 rounded-xl bg-white/10 p-4 transition-all duration-500 ease-out hover:-translate-y-1 hover:bg-white/15 ${
                  contentInView
                    ? "translate-y-0 opacity-100"
                    : "translate-y-6 opacity-0"
                }`}
                style={{
                  transitionDelay: contentInView
                    ? `${250 + index * 100}ms`
                    : "0ms",
                }}
              >
                <FontAwesomeIcon
                  icon={event.icon}
                  className="text-xl text-[#20B7C8] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6"
                />
                <span className="text-sm font-medium">{event.title}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events;