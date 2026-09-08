import { Link } from "react-router-dom";

import DestinationCard from "./DestinationCard";

import { destinations } from "../../Data/destinations";

const PopularDestinations = () => {
  return (
    <section className="bg-gray-50 px-6 py-24 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
            Explore The World
          </p>

          <h2 className="mt-4 text-4xl font-bold text-[#123B4A] md:text-5xl">
            Top Tourist Attractions
            <span className="block text-[#1597A8]">
              & Adventures
            </span>
          </h2>

          <p className="mt-5 leading-relaxed text-gray-600">
            Discover breathtaking destinations and unforgettable adventures
            carefully selected for your next journey.
          </p>

        </div>

        {/* Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {destinations.map((destination) => (
            <DestinationCard
              key={destination.id}
              destination={destination}
            />
          ))}

        </div>

        {/* Button */}
        <div className="mt-12 text-center">

          <Link
            to="/destinations"
            className="inline-block rounded-full bg-[#123B4A] px-8 py-4 font-semibold text-white transition hover:bg-[#1597A8]"
          >
            Explore All Destinations
          </Link>

        </div>

      </div>

    </section>
  );
};

export default PopularDestinations;