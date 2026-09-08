import { useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGlobe,
  faPlane,
  faMapLocationDot,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  internationalDestinations,
  domesticDestinations,
} from "../Data/destinations";

import DestinationCard from "../components/Destinations/DestinationCard";
import DestinationDetails from "../components/Destinations/DestinationDetails";

const Destination = () => {
  const [activeTab, setActiveTab] = useState("international");

  const [selectedDestination, setSelectedDestination] =
    useState(null);

  const destinationData = {
    international: internationalDestinations,
    domestic: domesticDestinations,
  };

  const destinations = destinationData[activeTab];

  return (
    <>
      {/* ================= HERO ================= */}

      <section className="relative overflow-hidden bg-[#123B4A] px-6 py-28 text-white lg:px-8">

        {/* Background */}
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=1920&q=80"
            alt="Travel around the world"
            className="h-full w-full object-cover"
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1597A8]/20">
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-3xl text-[#20B7C8]"
            />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#20B7C8]">
            Discover New Horizons
          </p>

          <h1 className="mt-5 text-5xl font-bold md:text-6xl">
            Explore The
            <span className="block text-[#20B7C8]">
              World
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-gray-200">
            Discover some of the world's most captivating destinations
            with Mida Travels. From vibrant cities and tropical islands
            to cultural landmarks and scenic landscapes.
          </p>

        </div>
      </section>


      {/* ================= DESTINATIONS ================= */}

      <section className="bg-gray-50 px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-7xl">

          {/* Heading */}
          <div className="text-center">

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
              Choose Your Journey
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#123B4A] md:text-5xl">
              Discover Amazing
              <span className="block text-[#1597A8]">
                Destinations
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-gray-600">
              From iconic international destinations to breathtaking
              locations across India, your next adventure starts here.
            </p>

          </div>


          {/* Tabs */}

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <button
              type="button"
              onClick={() =>
                setActiveTab("international")
              }
              className={`flex items-center gap-3 rounded-full px-7 py-3 font-semibold transition ${
                activeTab === "international"
                  ? "bg-[#123B4A] text-white"
                  : "bg-white text-gray-600 shadow hover:bg-[#1597A8] hover:text-white"
              }`}
            >
              <FontAwesomeIcon icon={faPlane} />

              International
            </button>


            <button
              type="button"
              onClick={() =>
                setActiveTab("domestic")
              }
              className={`flex items-center gap-3 rounded-full px-7 py-3 font-semibold transition ${
                activeTab === "domestic"
                  ? "bg-[#123B4A] text-white"
                  : "bg-white text-gray-600 shadow hover:bg-[#1597A8] hover:text-white"
              }`}
            >
              <FontAwesomeIcon icon={faMapLocationDot} />

              Domestic
            </button>

          </div>


          {/* Destination Count */}

          <p className="mt-10 text-center text-sm text-gray-500">
            Showing {destinations.length} destinations
          </p>


          {/* Cards */}

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {destinations.map((destination) => (
              <DestinationCard
                key={destination.id}
                destination={destination}
                onSelect={setSelectedDestination}
              />
            ))}

          </div>

        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="bg-white px-6 py-24 lg:px-8">

        <div className="mx-auto max-w-4xl rounded-3xl bg-[#123B4A] px-8 py-16 text-center text-white md:px-16">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#1597A8]">
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-2xl"
            />
          </div>

          <h2 className="mt-7 text-4xl font-bold md:text-5xl">
            Your Journey Begins Here!
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-300">
            Whether you seek luxury, adventure, romance, nature, culture,
            or relaxation, Mida Travels offers expertly curated travel
            experiences across the world's most remarkable destinations.
          </p>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-gray-300">
            Let us help you explore new horizons and create memories
            that last a lifetime.
          </p>


          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1597A8] px-8 py-4 font-semibold text-white transition duration-300 hover:bg-white hover:text-[#123B4A]"
          >
            Plan Your Journey

            <FontAwesomeIcon icon={faArrowRight} />
          </Link>

        </div>

      </section>


      {/* ================= DETAILS MODAL ================= */}

      <DestinationDetails
        destination={selectedDestination}
        onClose={() =>
          setSelectedDestination(null)
        }
      />

    </>
  );
};

export default Destination;