import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGlobe,
  faPlane,
  faPassport,
  faHotel,
  faPlaneDeparture,
  faGem,
  faUsers,
  faHeart,
  faShip,
  faCar,
  faCheck,
  faAward,
  faMapLocationDot,
  faHeadset,
  faShieldHalved,
  faUserGroup,
  faBullseye,
  faEye,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const About = () => {
  const services = [
    {
      icon: faGlobe,
      title: "International & Domestic Tours",
    },
    {
      icon: faMapLocationDot,
      title: "Customized Holiday Planning",
    },
    {
      icon: faPassport,
      title: "Visa Processing Assistance",
    },
    {
      icon: faHotel,
      title: "Hotel & Resort Reservations",
    },
    {
      icon: faPlaneDeparture,
      title: "Flight Booking Assistance",
    },
    {
      icon: faGem,
      title: "Luxury Travel Experiences",
    },
    {
      icon: faUsers,
      title: "Group & Corporate Travel",
    },
    {
      icon: faHeart,
      title: "Destination Weddings",
    },
    {
      icon: faShip,
      title: "Cruise Holidays",
    },
    {
      icon: faPlane,
      title: "Airport Transfers",
    },
    {
      icon: faCar,
      title: "Worldwide Car Rentals",
    },
  ];

  const reasons = [
    {
      icon: faAward,
      title: "Expertise You Can Trust",
      description:
        "Our knowledgeable travel specialists bring years of industry experience and destination expertise to every travel plan.",
    },
    {
      icon: faMapLocationDot,
      title: "Tailor-Made Experiences",
      description:
        "We understand that every traveler is unique. That's why we create customized itineraries designed around your interests, preferences and travel goals.",
    },
    {
      icon: faGlobe,
      title: "Global Reach",
      description:
        "From popular tourist destinations to hidden gems, we offer travel solutions across multiple continents and countries.",
    },
    {
      icon: faHeadset,
      title: "End-to-End Support",
      description:
        "We provide complete travel assistance, from planning and bookings to documentation and on-trip support.",
    },
    {
      icon: faShieldHalved,
      title: "Quality & Reliability",
      description:
        "We work with trusted travel partners worldwide to ensure high-quality services and memorable experiences.",
    },
    {
      icon: faUserGroup,
      title: "Customer-Centric Approach",
      description:
        "Your comfort, satisfaction and peace of mind remain our highest priorities throughout your travel journey.",
    },
  ];

  return (
    <>
      {/* ================= ABOUT HERO ================= */}

      <section className="relative overflow-hidden bg-[#123B4A] px-6 py-28 text-white lg:px-8">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80"
            alt="Travel"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#20B7C8]">
            Discover Mida Travels
          </p>

          <h1 className="mt-5 text-5xl font-bold md:text-6xl">
            23 Years Of Delivering
            <span className="block text-[#20B7C8]">
              Happy Travels
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-200">
            Your trusted travel partner for unforgettable journeys, meaningful
            experiences and memories that last a lifetime.
          </p>
        </div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">

          {/* Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"
              alt="Travel destination"
              className="h-72 w-full rounded-2xl object-cover shadow-lg"
            />

            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80"
              alt="Travel journey"
              className="mt-12 h-72 w-full rounded-2xl object-cover shadow-lg"
            />
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
              About Mida Travels
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#123B4A] md:text-5xl">
              Creating Journeys
              <span className="block text-[#1597A8]">
                Worth Remembering
              </span>
            </h2>

            <p className="mt-6 leading-relaxed text-gray-600">
              Founded with a passion for travel and a commitment to excellence,
              Mida Travels has become a trusted partner for individuals,
              families, corporate travelers, groups and honeymooners seeking
              seamless and memorable journeys.
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              Our team of experienced travel professionals works tirelessly to
              ensure that every trip is tailored to meet the unique preferences,
              interests and budgets of our clients.
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              From exotic beach holidays and luxury escapes to cultural tours,
              adventure trips, destination weddings and corporate travel
              arrangements, we provide comprehensive travel services designed
              to make every journey stress-free and enjoyable.
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              We take pride in offering personalized attention, expert guidance
              and reliable support from the moment you start planning until you
              return home.
            </p>

            <div className="mt-8 flex items-center gap-3 text-[#123B4A]">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1597A8]/10">
                <FontAwesomeIcon
                  icon={faAward}
                  className="text-xl text-[#1597A8]"
                />
              </div>

              <div>
                <h3 className="font-bold">23 Years Of Excellence</h3>

                <p className="text-sm text-gray-500">
                  Trusted by travellers across the world.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}

      <section className="bg-gray-50 px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#123B4A] md:text-5xl">
              Everything You Need
              <span className="block text-[#1597A8]">
                For A Perfect Journey
              </span>
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600">
              We offer a complete range of travel and tourism services designed
              to make your journey comfortable, seamless and unforgettable.
            </p>
          </div>

          {/* Services */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-2xl bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1597A8]/10">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="text-2xl text-[#1597A8]"
                  />
                </div>

                <h3 className="mt-5 text-lg font-bold text-[#123B4A]">
                  {service.title}
                </h3>

                <div className="mt-4 h-1 w-10 rounded-full bg-[#1597A8] transition-all duration-300 group-hover:w-16" />
              </div>
            ))}
          </div>

          {/* Additional Content */}
          <div className="mx-auto mt-16 max-w-4xl text-center">
            <p className="leading-relaxed text-gray-600">
              At Mida Travel, customer satisfaction is at the heart of
              everything we do. We are committed to delivering exceptional
              service, transparent communication and carefully curated travel
              experiences that exceed expectations.
            </p>

            <p className="mt-5 leading-relaxed text-gray-600">
              Our goal is to eliminate the complexities of travel planning so
              that our clients can focus on enjoying their journey.
            </p>

            <p className="mt-5 leading-relaxed text-gray-600">
              We continuously stay updated with global travel trends,
              destination insights and industry developments to provide the
              best recommendations and travel solutions.
            </p>

            <p className="mt-5 leading-relaxed text-gray-600">
              Through our extensive network of international partners, hotels,
              airlines and tourism providers, we ensure quality, value and
              reliability in every service we offer.
            </p>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}

      <section className="bg-[#123B4A] px-6 py-24 text-white lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2">

          {/* Mission */}
          <div className="rounded-2xl bg-white/10 p-10 backdrop-blur-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#20B7C8] text-2xl">
              <FontAwesomeIcon icon={faBullseye} />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-[#20B7C8]">
              Our Mission
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Making Travel Better
            </h2>

            <p className="mt-5 leading-relaxed text-gray-300">
              To provide exceptional travel experiences through personalized
              service, innovative travel solutions and a commitment to
              excellence, helping travelers explore the world with confidence
              and convenience.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-2xl bg-white/10 p-10 backdrop-blur-sm">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#20B7C8] text-2xl">
              <FontAwesomeIcon icon={faEye} />
            </div>

            <p className="mt-7 text-sm font-semibold uppercase tracking-[0.2em] text-[#20B7C8]">
              Our Vision
            </p>

            <h2 className="mt-4 text-3xl font-bold">
              Inspiring The World
            </h2>

            <p className="mt-5 leading-relaxed text-gray-300">
              To become one of the most trusted and preferred travel agencies
              by delivering outstanding customer experiences, building lasting
              relationships and inspiring people to discover the beauty and
              diversity of destinations worldwide.
            </p>
          </div>

        </div>
      </section>

      {/* ================= WHY MIDA ================= */}

      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#123B4A] md:text-5xl">
              Why Mida Travels?
            </h2>

            <p className="mt-5 text-gray-600">
              We combine experience, global connections and personalized
              service to create unforgettable travel experiences.
            </p>
          </div>

          {/* Reasons */}
          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-2xl border border-gray-100 bg-white p-8 transition duration-300 hover:border-[#1597A8] hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1597A8]/10">
                  <FontAwesomeIcon
                    icon={reason.icon}
                    className="text-xl text-[#1597A8]"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-[#123B4A]">
                  {reason.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-gray-600">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>

          {/* Closing */}
          <div className="mx-auto mt-16 max-w-4xl text-center">
            <p className="text-lg leading-relaxed text-gray-600">
              With a passion for exploration and a dedication to service
              excellence, we transform travel aspirations into unforgettable
              adventures.
            </p>

            <p className="mt-4 text-lg font-medium text-[#123B4A]">
              Let Mida Travel be your trusted companion in discovering the
              world—one destination at a time.
            </p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}

      <section className="bg-[#1597A8] px-6 py-20 text-center text-white lg:px-8">
        <div className="mx-auto max-w-3xl">

          <h2 className="text-4xl font-bold md:text-5xl">
            Ready To Start Your Next Adventure?
          </h2>

          <p className="mt-5 text-lg text-white/85">
            Let our travel experts help you plan a journey you will never
            forget.
          </p>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#123B4A] px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#123B4A]"
          >
            Plan Your Journey

            <FontAwesomeIcon icon={faArrowRight} />
          </Link>

        </div>
      </section>
    </>
  );
};

export default About;