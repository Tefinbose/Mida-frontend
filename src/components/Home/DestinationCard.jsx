import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const DestinationCard = ({ destination }) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl">

      {/* Image */}
      <div className="relative h-72 overflow-hidden">

        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        <div className="absolute bottom-0 left-0 w-full p-6 text-white">

          <div className="flex items-center gap-2 text-sm text-gray-200">

            <FontAwesomeIcon icon={faLocationDot} />

            {destination.country}

          </div>

          <h3 className="mt-2 text-3xl font-bold">
            {destination.name}
          </h3>

        </div>

      </div>

      {/* Content */}
      <div className="flex items-center justify-between p-5">

        <p className="text-sm text-gray-500">
          Explore amazing experiences
        </p>

        <Link
          to="/destinations"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1597A8] text-white transition hover:bg-[#123B4A]"
        >
          <FontAwesomeIcon icon={faArrowRight} />
        </Link>

      </div>

    </div>
  );
};

export default DestinationCard;