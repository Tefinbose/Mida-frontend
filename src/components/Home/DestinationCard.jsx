import { Link } from "react-router-dom";
import { motion } from "motion/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faLocationDot,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  containerVariants,
  cardVariants,
} from "../common/animations";

const DestinationCard = ({ destination }) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: false,
        amount: 0.2,
      }}
      className="group overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
    >

      {/* Image */}
      <motion.div
        variants={cardVariants}
        className="relative h-72 overflow-hidden"
      >
        <img
          src={destination.image}
          alt={destination.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Destination Name */}
        <div className="absolute bottom-0 left-0 w-full p-6 text-white">

          <div className="flex items-center gap-2 text-sm text-gray-200">

            <FontAwesomeIcon icon={faLocationDot} />

            <span>
              {destination.country}
            </span>

          </div>

          <h3 className="mt-2 text-3xl font-bold">
            {destination.name}
          </h3>

        </div>

      </motion.div>

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

    </motion.div>
  );
};

export default DestinationCard;