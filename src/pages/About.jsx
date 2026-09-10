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
  faAward,
  faMapLocationDot,
  faHeadset,
  faShieldHalved,
  faUserGroup,
  faBullseye,
  faEye,
  faArrowRight,
  faUser
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeLeft = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
};

const About = () => {
  const services = [
    { icon: faGlobe, title: "International & Domestic Tours" },
    { icon: faMapLocationDot, title: "Customized Holiday Planning" },
    { icon: faPassport, title: "Visa Processing Assistance" },
    { icon: faHotel, title: "Hotel & Resort Reservations" },
    { icon: faPlaneDeparture, title: "Flight Booking Assistance" },
    { icon: faGem, title: "Luxury Travel Experiences" },
    { icon: faUsers, title: "Group & Corporate Travel" },
    { icon: faHeart, title: "Destination Weddings" },
    { icon: faShip, title: "Cruise Holidays" },
    { icon: faPlane, title: "Airport Transfers" },
    { icon: faCar, title: "Worldwide Car Rentals" },
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
      {/* ================= HERO ================= */}

      <section className="relative flex min-h-[430px] w-full items-center overflow-hidden bg-[#123B4A] px-6 pb-10 pt-24 text-white lg:min-h-[480px] lg:px-8 lg:pt-20">
        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#1597A8]/10 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#c4953d]/5 blur-3xl" />

        <div className="absolute right-[12%] top-[28%] hidden h-20 w-20 rounded-full border border-white/10 lg:block" />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[#20B7C8]"
          >
            Discover Mida Travels
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
          >
            23 Years Of Delivering
            <span className="block text-[#20B7C8]">Happy Travels</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 md:text-base"
          >
            Your trusted travel partner for unforgettable journeys, meaningful
            experiences and memories that last a lifetime.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= ABOUT CONTENT ================= */}

      <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          {/* Images */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <img
              src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=900&q=80"
              alt="Travel destination"
              className="h-64 w-full rounded-2xl object-cover shadow-lg transition-transform duration-500 hover:scale-[1.02] md:h-72"
            />

            <img
              src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=900&q=80"
              alt="Travel journey"
              className="mt-10 h-64 w-full rounded-2xl object-cover shadow-lg transition-transform duration-500 hover:scale-[1.02] md:h-72"
            />
          </motion.div>

          {/* Content */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
              About Mida Travels
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#123B4A] md:text-5xl">
              Creating Journeys
              <span className="block text-[#1597A8]">Worth Remembering</span>
            </h2>

            <p className="mt-6 leading-7 text-gray-600">
              Founded with a passion for travel and a commitment to excellence,
              Mida Travels has become a trusted partner for individuals,
              families, corporate travelers, groups and honeymooners seeking
              seamless and memorable journeys.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Our team of experienced travel professionals works tirelessly to
              ensure that every trip is tailored to meet the unique preferences,
              interests and budgets of our clients.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              From exotic beach holidays and luxury escapes to cultural tours,
              adventure trips, destination weddings and corporate travel
              arrangements, we provide comprehensive travel services designed to
              make every journey stress-free.
            </p>

            <div className="mt-7 flex items-center gap-4 rounded-2xl border border-[#dcebed] bg-[#f5fafb] p-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1597A8]/10">
                <FontAwesomeIcon
                  icon={faAward}
                  className="text-xl text-[#1597A8]"
                />
              </div>

              <div>
                <h3 className="font-bold text-[#123B4A]">
                  23 Years Of Excellence
                </h3>

                <p className="text-sm text-gray-500">
                  Trusted by travellers across the world.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ================= WHAT WE DO ================= */}

      <section className="bg-[#f3f8f9] px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
              What We Do
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#123B4A] md:text-5xl">
              Everything You Need
              <span className="block text-[#1597A8]">
                For A Perfect Journey
              </span>
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              We offer a complete range of travel and tourism services designed
              to make your journey comfortable, seamless and unforgettable.
            </p>
          </motion.div>

          {/* Services */}

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group rounded-2xl border border-[#dcebed] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#1597A8]/40 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1597A8]/10 transition-colors duration-300 group-hover:bg-[#1597A8]">
                  <FontAwesomeIcon
                    icon={service.icon}
                    className="text-xl text-[#1597A8] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-5 font-bold text-[#123B4A]">
                  {service.title}
                </h3>

                <div className="mt-4 h-1 w-8 rounded-full bg-[#1597A8] transition-all duration-300 group-hover:w-14" />
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-14 max-w-4xl text-center"
          >
            <p className="leading-7 text-gray-600">
              At Mida Travel, customer satisfaction is at the heart of
              everything we do. We are committed to delivering exceptional
              service, transparent communication and carefully curated travel
              experiences that exceed expectations.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              Our goal is to eliminate the complexities of travel planning so
              that our clients can focus on enjoying their journey.
            </p>

            <p className="mt-4 leading-7 text-gray-600">
              We continuously stay updated with global travel trends,
              destination insights and industry developments to provide the best
              recommendations and travel solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}

      <section className="bg-[#123B4A] px-6 py-20 text-white lg:px-8 lg:py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2"
        >
          {/* Mission */}

          <motion.div
            variants={fadeLeft}
            className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.09] md:p-10"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1597A8]">
              <FontAwesomeIcon icon={faBullseye} className="text-xl" />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#20B7C8]">
              Our Mission
            </p>

            <h2 className="mt-3 text-3xl font-bold">Making Travel Better</h2>

            <p className="mt-5 leading-7 text-gray-300">
              To provide exceptional travel experiences through personalized
              service, innovative travel solutions and a commitment to
              excellence, helping travelers explore the world with confidence
              and convenience.
            </p>
          </motion.div>

          {/* Vision */}

          <motion.div
            variants={fadeRight}
            className="rounded-3xl border border-white/10 bg-white/[0.06] p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-white/[0.09] md:p-10"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1597A8]">
              <FontAwesomeIcon icon={faEye} className="text-xl" />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#20B7C8]">
              Our Vision
            </p>

            <h2 className="mt-3 text-3xl font-bold">Inspiring The World</h2>

            <p className="mt-5 leading-7 text-gray-300">
              To become one of the most trusted and preferred travel agencies by
              delivering outstanding customer experiences, building lasting
              relationships and inspiring people to discover the beauty and
              diversity of destinations worldwide.
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= WHY MIDA ================= */}

      <section className="bg-white px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto max-w-3xl text-center"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
              Why Choose Us
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#123B4A] md:text-5xl">
              Why Mida Travels?
            </h2>

            <p className="mt-5 text-gray-600">
              We combine experience, global connections and personalized service
              to create unforgettable travel experiences.
            </p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }}
            className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            {reasons.map((reason) => (
              <motion.div
                key={reason.title}
                variants={fadeUp}
                className="group rounded-2xl border border-[#e4edef] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#1597A8]/40 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#1597A8]/10 transition-colors duration-300 group-hover:bg-[#1597A8]">
                  <FontAwesomeIcon
                    icon={reason.icon}
                    className="text-xl text-[#1597A8] transition-colors duration-300 group-hover:text-white"
                  />
                </div>

                <h3 className="mt-5 text-xl font-bold text-[#123B4A]">
                  {reason.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-600">
                  {reason.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mt-14 max-w-4xl text-center"
          >
            <p className="leading-7 text-gray-600">
              With a passion for exploration and a dedication to service
              excellence, we transform travel aspirations into unforgettable
              adventures.
            </p>

            <p className="mt-3 font-medium text-[#123B4A]">
              Let Mida Travel be your trusted companion in discovering the
              world—one destination at a time.
            </p>
          </motion.div>
        </div>
      </section>
      {/* ================= TESTIMONIAL ================= */}

      <section className="relative overflow-hidden bg-[#EAF8F9] px-6 py-20 lg:px-8 lg:py-24">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-[#20B7C8]/15 blur-3xl" />
        <div className="pointer-events-none absolute -right-32 bottom-0 h-80 w-80 rounded-full bg-[#1597A8]/10 blur-3xl" />

        {/* Decorative circles */}
        <div className="pointer-events-none absolute left-[8%] top-[20%] hidden h-32 w-32 rounded-full border border-[#1597A8]/10 lg:block" />
        <div className="pointer-events-none absolute right-[10%] top-[25%] hidden h-20 w-20 rounded-full border border-[#1597A8]/10 lg:block" />

        {/* Subtle grid */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "linear-gradient(#123B4A 1px, transparent 1px), linear-gradient(90deg, #123B4A 1px, transparent 1px)",
            backgroundSize: "45px 45px",
          }}
        />

        {/* Large quote */}
        <div className="pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 font-serif text-[130px] leading-none text-[#123B4A]/10">
          
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative z-10 mx-auto max-w-5xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1597A8]">
            A Word From Our Team
          </p>

          <blockquote className="mx-auto mt-8 max-w-4xl font-serif text-2xl leading-relaxed text-[#123B4A] sm:text-3xl md:text-4xl">
            “Driven by expertise and a genuine personal touch, the team at Mida
            Travels consistently delivers seamless, customized journeys that
            make every trip truly rewarding.”
          </blockquote>

          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-10 flex flex-col items-center"
          >
            <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full bg-white text-[#1597A8] shadow-md ring-4 ring-white/70">
              <FontAwesomeIcon icon={faUser} className="text-2xl" />
            </div>

            <p className="mt-4 font-semibold text-[#123B4A]">Jithin Hussain</p>

            <p className="mt-1 text-xs text-gray-500">Mida Travels</p>
          </motion.div>
        </motion.div>
      </section>

      {/* ================= CTA ================= */}

      {/* <section className="relative overflow-hidden bg-[#1597A8] px-6 py-16 text-center text-white lg:px-8 lg:py-20">
        <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative z-10 mx-auto max-w-3xl"
        >
          <h2 className="text-3xl font-bold md:text-5xl">
            Ready To Start Your Next Adventure?
          </h2>

          <p className="mt-4 text-white/85">
            Let our travel experts help you plan a journey you will never
            forget.
          </p>

          <Link
            to="/contact"
            className="group mt-7 inline-flex items-center gap-3 rounded-full bg-[#123B4A] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#123B4A]"
          >
            Plan Your Journey
            <FontAwesomeIcon
              icon={faArrowRight}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </section> */}
    </>
  );
};

export default About;
