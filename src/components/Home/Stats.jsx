import { motion, useReducedMotion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGlobe,
  faPlaneDeparture,
  faFaceSmile,
} from "@fortawesome/free-solid-svg-icons";

const stats = [
  {
    icon: faGlobe,
    number: "20+",
    label: "Destinations",
  },
  {
    icon: faPlaneDeparture,
    number: "500+",
    label: "Tours Completed",
  },
  {
    icon: faFaceSmile,
    number: "1000+",
    label: "Happy Customers",
  },
];

const Stats = () => {
  const reducedMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#123B4A] px-5 py-12 text-white sm:px-6 sm:py-16 lg:px-8 lg:py-20">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-24 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-[#20B7C8]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[#1597A8]/10 blur-3xl" />

      <div className="relative mx-auto max-w-5xl">

        {/* Heading */}
        <motion.div
          initial={reducedMotion ? false : { opacity: 0, y: 20 }}
          whileInView={reducedMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mb-9 max-w-xl text-center sm:mb-12"
        >
          <motion.p
            initial={reducedMotion ? false : { opacity: 0, letterSpacing: "0.05em" }}
            whileInView={
              reducedMotion
                ? {}
                : { opacity: 1, letterSpacing: "0.2em" }
            }
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-[10px] font-semibold uppercase text-[#20B7C8] sm:text-xs"
          >
            Mida Travels
          </motion.p>

          <h2 className="mt-2 text-2xl font-bold sm:text-3xl md:text-4xl">
            Trusted By Travelers
          </h2>

          <p className="mx-auto mt-2 max-w-md text-xs leading-5 text-white/55 sm:text-sm sm:leading-6">
            Creating memorable journeys and unforgettable travel experiences.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={
                reducedMotion
                  ? false
                  : {
                      opacity: 0,
                      y: 25,
                    }
              }
              whileInView={
                reducedMotion
                  ? {}
                  : {
                      opacity: 1,
                      y: 0,
                    }
              }
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: index * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
              className={`group relative flex flex-col items-center px-2 text-center sm:px-6 ${
                index !== stats.length - 1
                  ? "border-r border-white/10"
                  : ""
              }`}
            >
              {/* Icon */}
              <motion.div
                initial={
                  reducedMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.7,
                        rotate: -10,
                      }
                }
                whileInView={
                  reducedMotion
                    ? {}
                    : {
                        opacity: 1,
                        scale: 1,
                        rotate: 0,
                      }
                }
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12 + 0.15,
                  type: "spring",
                  stiffness: 200,
                }}
                whileHover={
                  reducedMotion
                    ? {}
                    : {
                        scale: 1.1,
                        rotate: 5,
                      }
                }
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#20B7C8]/20 bg-[#20B7C8]/10 text-lg text-[#20B7C8] transition-all duration-300 group-hover:border-[#20B7C8]/40 group-hover:bg-[#20B7C8] group-hover:text-white sm:h-14 sm:w-14 sm:text-xl"
              >
                <FontAwesomeIcon icon={stat.icon} />
              </motion.div>

              {/* Number */}
              <motion.h3
                initial={
                  reducedMotion
                    ? false
                    : {
                        opacity: 0,
                        scale: 0.8,
                      }
                }
                whileInView={
                  reducedMotion
                    ? {}
                    : {
                        opacity: 1,
                        scale: 1,
                      }
                }
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12 + 0.3,
                }}
                className="mt-3 text-2xl font-bold tracking-tight sm:mt-4 sm:text-4xl"
              >
                {stat.number}
              </motion.h3>

              {/* Label */}
              <p className="mt-1 max-w-[90px] text-[10px] font-medium leading-4 text-white/55 sm:max-w-none sm:text-sm">
                {stat.label}
              </p>

              {/* Accent */}
              <motion.div
                initial={
                  reducedMotion
                    ? false
                    : {
                        width: 12,
                        opacity: 0,
                      }
                }
                whileInView={
                  reducedMotion
                    ? {}
                    : {
                        width: 24,
                        opacity: 1,
                      }
                }
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.12 + 0.4,
                }}
                className="mt-3 h-0.5 rounded-full bg-[#20B7C8] transition-all duration-300 group-hover:w-10 sm:mt-4 sm:h-1"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;