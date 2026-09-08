import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const DestinationCard = ({ destination, onSelect }) => {
  return (
    <div className="group overflow-hidden rounded-2xl bg-white shadow-md transition duration-300 hover:-translate-y-2 hover:shadow-xl">

      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Destination Name */}
        <div className="absolute bottom-5 left-5">
          <div className="flex items-center gap-2 text-sm text-white/80">
            <FontAwesomeIcon icon={faLocationDot} />

            <span>Explore Destination</span>
          </div>

          <h3 className="mt-2 text-2xl font-bold text-white">
            {destination.name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="line-clamp-3 leading-relaxed text-gray-600">
          {destination.description}
        </p>

        <button
          type="button"
          onClick={() => onSelect(destination)}
          className="mt-6 inline-flex items-center gap-2 font-semibold text-[#1597A8] transition hover:text-[#123B4A]"
        >
          Explore More

          <FontAwesomeIcon
            icon={faArrowRight}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </div>

    </div>
  );
};

export default DestinationCard;