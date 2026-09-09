import { motion } from "motion/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faGlobe,
  faPlane,
  faSmile,
} from "@fortawesome/free-solid-svg-icons";

const stats = [
  {
    icon: faGlobe,
    number: "20+",
    label: "Destinations",
  },
  {
    icon: faPlane,
    number: "500+",
    label: "Tours Completed",
  },
  {
    icon: faSmile,
    number: "1000+",
    label: "Happy Customers",
  },
];

const containerVariants = {
  hidden: {
    opacity: 0,
  },

  visible: {
    opacity: 1,

    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },

  visible: {
    opacity: 1,
    y: 0,

    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Stats = () => {
  return (
    <section className="relative overflow-hidden bg-[#123B4A] px-6 py-20 text-white lg:px-8 lg:py-24">
      {/* Background Decorations */}
      <div className="absolute -left-24 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-[#1597A8]/10 blur-3xl" />

      <div className="absolute -right-24 top-0 h-72 w-72 rounded-full bg-[#20B7C8]/10 blur-3xl" />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl">

        {/* Section Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.3,
          }}
          transition={{
            duration: 0.6,
          }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#20B7C8]">
            Mida Travels
          </p>

          <h2 className="mt-3 text-3xl font-bold md:text-4xl">
            Trusted By Travelers
          </h2>

          <p className="mt-4 text-sm leading-relaxed text-white/65 md:text-base">
            Creating memorable journeys and unforgettable travel experiences
            for travelers around the world.
          </p>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="grid md:grid-cols-3"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              whileHover={{
                y: -6,
              }}
              transition={{
                type: "spring",
                stiffness: 250,
                damping: 20,
              }}
              className={`
                group
                relative
                flex
                flex-col
                items-center
                px-6
                py-6
                text-center
                md:py-4
                ${
                  index !== stats.length - 1
                    ? "md:border-r md:border-white/10"
                    : ""
                }
              `}
            >
              {/* Icon */}
              <motion.div
                whileHover={{
                  scale: 1.12,
                  rotate: 5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 15,
                }}
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#20B7C8]/10
                  text-2xl
                  text-[#20B7C8]
                  transition-colors
                  duration-300
                  group-hover:bg-[#20B7C8]
                  group-hover:text-white
                "
              >
                <FontAwesomeIcon icon={stat.icon} />
              </motion.div>

              {/* Number */}
              <h3
                className="
                  mt-6
                  text-4xl
                  font-bold
                  tracking-tight
                  text-white
                  md:text-5xl
                "
              >
                {stat.number}
              </h3>

              {/* Label */}
              <p className="mt-2 text-sm font-medium text-white/60 md:text-base">
                {stat.label}
              </p>

              {/* Small Accent */}
              <div
                className="
                  mt-5
                  h-1
                  w-8
                  rounded-full
                  bg-[#20B7C8]
                  transition-all
                  duration-300
                  group-hover:w-14
                "
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Stats;