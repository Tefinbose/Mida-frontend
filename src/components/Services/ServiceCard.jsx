import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

const ServiceCard = ({ service, onExplore, index }) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 45 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -8 }}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-gray-100
        bg-white
        p-7
        shadow-[0_8px_30px_rgba(18,59,74,0.06)]
        transition-shadow
        duration-300
        hover:shadow-[0_20px_45px_rgba(18,59,74,0.12)]
      "
    >
      {/* Top Accent */}
      <div
        className="
          absolute
          left-0
          top-0
          h-1
          w-0
          bg-[#1597A8]
          transition-all
          duration-500
          group-hover:w-full
        "
      />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.25 }}
        className="
          flex
          h-16
          w-16
          items-center
          justify-center
          rounded-2xl
          bg-[#F0F8F9]
          text-[#1597A8]
          transition-colors
          duration-300
          group-hover:bg-[#1597A8]
          group-hover:text-white
        "
      >
        <FontAwesomeIcon icon={service.icon} className="text-2xl" />
      </motion.div>

      {/* Title */}
      <h3
        className="
          mt-7
          text-xl
          font-bold
          leading-snug
          text-[#123B4A]
        "
      >
        {service.title}
      </h3>

      {/* Description */}
      <p
        className="
          mt-4
          flex-1
          text-sm
          leading-7
          text-gray-500
        "
      >
        {service.shortDescription}
      </p>

      {/* Button */}
      <button
        type="button"
        onClick={() => onExplore(service)}
        className="
          mt-7
          inline-flex
          w-fit
          items-center
          gap-3
          rounded-lg
          bg-[#123B4A]
          px-5
          py-3
          text-sm
          font-semibold
          text-white
          transition-all
          duration-300
          hover:bg-[#1597A8]
        "
      >
        Explore Service

        <FontAwesomeIcon
          icon={faArrowRight}
          className="
            text-xs
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </button>
    </motion.article>
  );
};

export default ServiceCard;