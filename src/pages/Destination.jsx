import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPlane,
  faMapLocationDot,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { motion, AnimatePresence } from "motion/react";

import {
  internationalDestinations,
  domesticDestinations,
} from "../Data/destinations";

import DestinationCard from "../components/Destinations/DestinationCard";
import DestinationDetails from "../components/Destinations/DestinationDetails";

// ===============================
// ANIMATION VARIANTS
// ===============================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const destinationAnimation = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

const Destination = () => {
  const [activeTab, setActiveTab] = useState("international");
  const [selectedDestination, setSelectedDestination] = useState(null);

  const destinationData = {
    international: internationalDestinations,
    domestic: domesticDestinations,
  };

  const destinations = destinationData[activeTab];

  return (
    <>
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative flex min-h-[460px] items-center overflow-hidden bg-[#123B4A] px-6 pb-12 pt-28 text-white lg:min-h-[500px] lg:px-8 lg:pt-24">
  {/* Background Image */}
  <motion.div
    initial={{ scale: 1.04 }}
    animate={{ scale: 1 }}
    transition={{
      duration: 1.5,
      ease: "easeOut",
    }}
    className="absolute inset-0"
  >
    <img
      src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80"
      alt="Travel around the world"
      className="h-full w-full object-cover"
    />
  </motion.div>

  {/* Dark Overlay */}
  <div className="absolute inset-0 bg-[#123B4A]/80" />

  {/* Subtle Gradient */}
  <div className="absolute inset-0 bg-gradient-to-b from-[#123B4A]/40 via-[#123B4A]/60 to-[#123B4A]/90" />

  {/* Decorative Glow */}
  <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#20B7C8]/10 blur-3xl" />

  <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#1597A8]/10 blur-3xl" />

  {/* Hero Content */}
  <motion.div
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, amount: 0.3 }}
    className="relative z-10 mx-auto w-full max-w-4xl text-center"
  >
    {/* Icon */}
    <motion.div
      variants={fadeUp}
      className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#20B7C8]/30 bg-[#1597A8]/20 backdrop-blur-sm"
    >
      <FontAwesomeIcon
        icon={faGlobe}
        className="text-2xl text-[#20B7C8]"
      />
    </motion.div>

    {/* Small Heading */}
    <motion.p
      variants={fadeUp}
      className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#20B7C8]"
    >
      Discover New Horizons
    </motion.p>

    {/* Main Heading */}
    <motion.h1
      variants={fadeUp}
      className="mt-3 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
    >
      Explore The
      <span className="block text-[#20B7C8]">
        World
      </span>
    </motion.h1>

    {/* Description */}
    <motion.p
      variants={fadeUp}
      className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-200 md:text-base md:leading-7"
    >
      Discover some of the world's most captivating destinations
      with Mida Travels. From vibrant cities and tropical islands
      to cultural landmarks and scenic landscapes.
    </motion.p>
  </motion.div>
</section>

      {/* =====================================================
          DESTINATIONS SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f2f8f9] px-6 py-24 lg:px-8">
        {/* Background Decorations */}

        <div className="absolute -left-32 top-40 h-80 w-80 rounded-full bg-[#1597A8]/5 blur-3xl" />

        <div className="absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-[#20B7C8]/5 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-7xl">

          {/* Section Heading */}

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]"
            >
              Choose Your Journey
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-4 text-4xl font-bold text-[#123B4A] md:text-5xl"
            >
              Discover Amazing
              <span className="block text-[#1597A8]">
                Destinations
              </span>
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-600"
            >
              From iconic international destinations to breathtaking
              locations across India, your next adventure starts here.
            </motion.p>
          </motion.div>

          {/* =================================================
              TABS
          ================================================= */}

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="mt-12 flex flex-wrap justify-center gap-4"
          >
            {/* International */}

            <button
              type="button"
              onClick={() => setActiveTab("international")}
              className={`flex items-center gap-3 rounded-full border px-7 py-3 font-semibold transition-all duration-300 ${
                activeTab === "international"
                  ? "border-[#123B4A] bg-[#123B4A] text-white shadow-lg shadow-[#123B4A]/15"
                  : "border-[#d5e5e8] bg-white text-[#123B4A] hover:border-[#1597A8] hover:text-[#1597A8]"
              }`}
            >
              <FontAwesomeIcon icon={faPlane} />

              International
            </button>

            {/* Domestic */}

            <button
              type="button"
              onClick={() => setActiveTab("domestic")}
              className={`flex items-center gap-3 rounded-full border px-7 py-3 font-semibold transition-all duration-300 ${
                activeTab === "domestic"
                  ? "border-[#123B4A] bg-[#123B4A] text-white shadow-lg shadow-[#123B4A]/15"
                  : "border-[#d5e5e8] bg-white text-[#123B4A] hover:border-[#1597A8] hover:text-[#1597A8]"
              }`}
            >
              <FontAwesomeIcon icon={faMapLocationDot} />

              Domestic
            </button>
          </motion.div>

          {/* Destination Count */}

          <motion.p
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="mt-10 text-center text-sm font-medium text-[#1597A8]"
          >
            Showing {destinations.length} destinations
          </motion.p>

          {/* =================================================
              DESTINATION GRID
          ================================================= */}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{
                opacity: 0,
                y: 10,
                transition: {
                  duration: 0.2,
                },
              }}
              className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {destinations.map((destination) => (
                <motion.div
                  key={destination.id}
                  variants={destinationAnimation}
                  className="h-full"
                >
                  <div className="h-full rounded-3xl border border-[#d9e9eb] bg-white p-1 shadow-[0_10px_35px_rgba(18,59,74,0.06)] transition-shadow duration-300 hover:shadow-[0_18px_45px_rgba(18,59,74,0.10)]">
                    <DestinationCard
                      destination={destination}
                      onSelect={setSelectedDestination}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* =====================================================
          CTA SECTION
      ===================================================== */}

      <section className="relative overflow-hidden bg-white px-6 py-24 lg:px-8">
        {/* Decorative Background */}

        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1597A8]/5 blur-3xl" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-[#123B4A] px-8 py-16 text-center text-white shadow-[0_25px_60px_rgba(18,59,74,0.15)] md:px-16"
        >
          {/* Decorative Circle */}

          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#1597A8]/20" />

          <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-[#20B7C8]/10" />

          <div className="relative z-10">

            {/* Icon */}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1597A8]"
            >
              <FontAwesomeIcon
                icon={faGlobe}
                className="text-2xl"
              />
            </motion.div>

            {/* Heading */}

            <h2 className="mt-7 text-4xl font-bold md:text-5xl">
              Your Journey Begins Here!
            </h2>

            {/* Description */}

            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-300">
              Whether you seek luxury, adventure, romance, nature,
              culture, or relaxation, Mida Travels offers expertly
              curated travel experiences across the world's most
              remarkable destinations.
            </p>

            <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-300">
              Let us help you explore new horizons and create memories
              that last a lifetime.
            </p>

            {/* Button */}

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1597A8] px-8 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#20B7C8] hover:shadow-lg hover:shadow-[#20B7C8]/20"
            >
              Plan Your Journey

              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>
        </motion.div>
      </section>

      {/* =====================================================
          DESTINATION DETAILS
      ===================================================== */}

      <DestinationDetails
        destination={selectedDestination}
        onClose={() => setSelectedDestination(null)}
      />
    </>
  );
};

export default Destination;