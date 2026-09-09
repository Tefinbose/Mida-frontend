import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import {
  internationalPackages,
  domesticPackages,
  offers,
} from "../../Data/packages";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";

const tabs = [
  { key: "international", label: "International Tours" },
  { key: "domestic", label: "Domestic Tours" },
  { key: "offers", label: "Special Offers" },
];

const FeaturedPackages = () => {
  const [activeTab, setActiveTab] = useState("international");
  const shouldReduceMotion = useReducedMotion();

  const packageData = {
    international: internationalPackages,
    domestic: domesticPackages,
    offers: offers,
  };

  const activePackages = packageData[activeTab];

  // Motion respects the OS-level "reduce motion" setting: entrances become a
  // plain fade with no movement instead of being skipped outright.
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.12 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: shouldReduceMotion ? 0 : 0.05,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 28, scale: shouldReduceMotion ? 1 : 0.97 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.45, ease: "easeOut" },
    },
  };

  // Smooth scroll fallback — prefer adding `scroll-smooth` directly to the
  // <html> tag in index.html instead; this just guarantees it works either way.
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.style.scrollBehavior;
    root.style.scrollBehavior = "smooth";
    return () => {
      root.style.scrollBehavior = previous;
    };
  }, []);

  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          className="mx-auto max-w-2xl text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          <motion.p
            variants={fadeUp}
            className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]"
          >
            Travel Packages
          </motion.p>

          <motion.h2
            variants={fadeUp}
            className="mt-4 text-4xl font-bold text-[#123B4A] md:text-5xl"
          >
            Find Your Perfect
            <span className="block text-[#1597A8]">
              Travel Experience
            </span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="mt-5 leading-relaxed text-gray-600"
          >
            Discover unforgettable destinations with carefully curated travel
            experiences designed for every type of traveller.
          </motion.p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          role="tablist"
          aria-label="Package categories"
          className="mt-10 flex flex-wrap justify-center gap-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab.key}
              variants={fadeUp}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.key}
              onClick={() => setActiveTab(tab.key)}
              whileTap={{ scale: 0.95 }}
              className={`relative rounded-full px-6 py-3 text-sm font-semibold outline-offset-2 transition-colors duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#1597A8] ${
                activeTab === tab.key
                  ? "text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-[#1597A8] hover:text-white"
              }`}
            >
              {activeTab === tab.key && (
                <motion.span
                  layoutId="active-tab-pill"
                  className="absolute inset-0 rounded-full bg-[#123B4A]"
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className="relative">{tab.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Packages */}
        <AnimatePresence mode="wait">
          {activePackages.length > 0 ? (
            <motion.div
              key={activeTab}
              role="tabpanel"
              className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
              variants={gridVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, transition: { duration: 0.2 } }}
            >
              {activePackages.map((item) => (
                <motion.div
                  key={item.id}
                  variants={cardVariants}
                  whileHover={shouldReduceMotion ? undefined : { y: -8 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  className="group overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-md transition-shadow duration-300 hover:shadow-xl"
                >
                  {/* Image */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      loading="lazy"
                      className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    <h3 className="absolute bottom-5 left-5 text-xl font-semibold text-white">
                      {item.name}
                    </h3>
                  </div>

                  {/* Content */}
                  <div className="flex items-center justify-between gap-4 p-5">
                    <p className="text-sm text-gray-500">
                      {item.description ?? "Curated by our travel experts"}
                    </p>

                    <Link
                      to="/packages"
                      aria-label={`View ${item.name} package`}
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1597A8] text-white outline-offset-2 transition hover:bg-[#123B4A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#123B4A]"
                    >
                      <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-12 rounded-2xl border border-dashed border-gray-200 py-16 text-center text-gray-500"
            >
              New packages in this category are on the way — check back soon.
            </motion.div>
          )}
        </AnimatePresence>

        {/* Explore Button */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link
            to="/packages"
            className="inline-flex items-center gap-2 rounded-full bg-[#123B4A] px-7 py-3 font-semibold text-white outline-offset-2 transition hover:bg-[#1597A8] focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#123B4A]"
          >
            Explore All Packages
            <FontAwesomeIcon icon={faArrowRight} aria-hidden="true" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedPackages;