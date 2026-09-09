import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import {
  internationalPackages,
  domesticPackages,
  offers,
} from "../../Data/packages";
import {motion} from "motion/react"

const FeaturedPackages = () => {
  const [activeTab, setActiveTab] = useState("international");

  const packageData = {
    international: internationalPackages,
    domestic: domesticPackages,
    offers: offers,
  };

  const activePackages = packageData[activeTab];

  return (
    <section className="bg-white px-6 py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
            Travel Packages
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#123B4A] md:text-5xl">
            Find Your Perfect
            <span className="block text-[#1597A8]">
              Travel Experience
            </span>
          </h2>

          <p className="mt-5 leading-relaxed text-gray-600">
            Discover unforgettable destinations with carefully curated travel
            experiences designed for every type of traveller.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">

          <button
            type="button"
            onClick={() => setActiveTab("international")}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${
              activeTab === "international"
                ? "bg-[#123B4A] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-[#1597A8] hover:text-white"
            }`}
          >
            International Tours
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("domestic")}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${
              activeTab === "domestic"
                ? "bg-[#123B4A] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-[#1597A8] hover:text-white"
            }`}
          >
            Domestic Tours
          </button>

          <button
            type="button"
            onClick={() => setActiveTab("offers")}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition duration-300 ${
              activeTab === "offers"
                ? "bg-[#123B4A] text-white"
                : "bg-gray-100 text-gray-600 hover:bg-[#1597A8] hover:text-white"
            }`}
          >
            Special Offers
          </button>

        </div>

        {/* Packages */}
        <motion.div  className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {activePackages.map((item) => (
            <div
              key={item.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl"
            >

              {/* Image */}
              <div className="relative h-60 overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
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
                  Discover unforgettable experiences
                </p>

                <Link
                  to="/packages"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1597A8] text-white transition hover:bg-[#123B4A]"
                >
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>

              </div>

            </div>
          ))}

        </motion.div>

        {/* Explore Button */}
        <div className="mt-12 text-center">

          <Link
            to="/packages"
            className="inline-flex items-center gap-2 rounded-full bg-[#123B4A] px-7 py-3 font-semibold text-white transition hover:bg-[#1597A8]"
          >
            Explore All Packages

            <FontAwesomeIcon icon={faArrowRight} />
          </Link>

        </div>

      </div>
    </section>
  );
};

export default FeaturedPackages;