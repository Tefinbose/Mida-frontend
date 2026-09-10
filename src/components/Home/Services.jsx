import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlane,
  faPassport,
  faHotel,
  faUsers,
  faHeart,
  faGem,
  faCar,
  faMapLocationDot,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const services = [
  {
    icon: faMapLocationDot,
    title: "Inbound Tour Packages",
    description:
      "Explore incredible destinations with perfectly planned travel experiences.",
  },
  {
    icon: faPlane,
    title: "Outbound Tour Packages",
    description:
      "Discover the world with international journeys designed for you.",
  },
  {
    icon: faPassport,
    title: "Visa Processing",
    description:
      "Professional assistance for a smooth and stress-free visa process.",
  },
  {
    icon: faHotel,
    title: "Hotel Bookings",
    description:
      "Comfortable stays and premium accommodation around the world.",
  },
  {
    icon: faUsers,
    title: "Group Tours",
    description:
      "Memorable journeys designed for families, friends and groups.",
  },
  {
    icon: faHeart,
    title: "Destination Wedding",
    description:
      "Turn your dream wedding into an unforgettable destination experience.",
  },
  {
    icon: faGem,
    title: "Luxury Packages",
    description:
      "Experience premium travel with our exclusive luxury holidays.",
  },
  {
    icon: faCar,
    title: "Rent a Car",
    description:
      "Convenient and comfortable transportation for every journey.",
  },
];

// Fires once, the first time the element scrolls into view — drives every
// reveal animation on this page. Kept as one small hook rather than a
// library dependency since it's only ever used for this fade-up pattern.
const useReveal = (threshold = 0.15) => {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return [ref, visible];
};

const ServiceCard = ({ service, index }) => {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: visible ? `${(index % 4) * 90}ms` : "0ms" }}
      className={`group relative overflow-hidden rounded-2xl bg-white p-7 shadow-sm transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-xl hover:shadow-[#1597A8]/10 ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
    >
      {/* Soft accent wash that fades in on hover, kept subtle behind the content */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[#1597A8]/[0.04] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Icon */}
      <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1597A8]/10 text-2xl text-[#1597A8] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#1597A8] group-hover:text-white">
        <FontAwesomeIcon icon={service.icon} />
      </div>

      {/* Title */}
      <h3 className="relative mt-6 text-xl font-bold text-[#123B4A] transition-colors duration-300 group-hover:text-[#1597A8]">
        {service.title}
      </h3>

      {/* Growing accent underline — signals which card is active without extra motion elsewhere */}
      <span className="relative mt-2 block h-0.5 w-8 rounded-full bg-[#1597A8]/30 transition-all duration-300 group-hover:w-14 group-hover:bg-[#1597A8]" />

      {/* Description */}
      <p className="relative mt-4 text-sm leading-relaxed text-gray-500">
        {service.description}
      </p>
    </div>
  );
};

const Services = () => {
  const [headingRef, headingVisible] = useReveal(0.3);
  const [buttonRef, buttonVisible] = useReveal(0.3);

  return (
    <section className="bg-gray-50 px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div
          ref={headingRef}
          className={`mx-auto max-w-2xl text-center transition-all duration-700 ease-out ${
            headingVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
            Our Services
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#123B4A] md:text-5xl">
            Everything You Need
            <span className="block text-[#1597A8]">
              For The Perfect Journey
            </span>
          </h2>

          <p className="mt-5 leading-relaxed text-gray-600">
            From planning your trip to creating unforgettable memories,
            Mida Travels takes care of every detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>

        {/* View All Services Button */}
        <div
          ref={buttonRef}
          className={`mt-12 flex justify-center transition-all duration-700 ease-out ${
            buttonVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          <Link
            to="/services"
            className="group inline-flex items-center gap-3 rounded-full bg-[#123B4A] px-7 py-3.5 font-semibold text-white transition duration-300 hover:bg-[#1597A8]"
          >
            <span className="relative block overflow-hidden">
              {/* Normal Text */}
              <span className="block transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:-translate-y-full">
                View All Services
              </span>

              {/* Hover Text */}
              <span className="absolute left-0 top-full block w-full transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:-translate-y-full">
                View All Services
              </span>
            </span>

            <FontAwesomeIcon
              icon={faArrowRight}
              className="text-sm transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </div>

      </div>
    </section>
  );
};

export default Services;