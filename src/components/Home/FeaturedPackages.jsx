import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "motion/react";

import {
  internationalPackages,
  domesticPackages,
  offers,
} from "../../Data/packages";

const tabs = [
  {
    id: "international",
    label: "International",
  },
  {
    id: "domestic",
    label: "Domestic",
  },
  {
    id: "offers",
    label: "Special Offers",
  },
];

const packageData = {
  international: internationalPackages,
  domestic: domesticPackages,
  offers: offers,
};

// Different entrance directions for cards
const directions = [
  {
    x: -45,
    y: 25,
    rotate: -1.5,
  },
  {
    x: 0,
    y: 45,
    rotate: 0,
  },
  {
    x: 45,
    y: 25,
    rotate: 1.5,
  },
];

const FeaturedPackages = () => {
  const [activeTab, setActiveTab] = useState("international");

  const shouldReduceMotion = useReducedMotion();

  const currentPackages = packageData[activeTab] || [];

  return (
    <section className="relative overflow-hidden bg-[#F4F9F9] px-5 py-20 sm:px-6 lg:px-8 lg:py-24">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#20B7C8]/10 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-[#1597A8]/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 25,
                  filter: "blur(10px)",
                }
          }
          whileInView={
            shouldReduceMotion
              ? {}
              : {
                  opacity: 1,
                  y: 0,
                  filter: "blur(0px)",
                }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
            Explore Our Packages
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#123B4A] sm:text-4xl md:text-5xl">
            Journeys Designed
            <span className="block text-[#1597A8]">
              Around You.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base sm:leading-7">
            Discover carefully planned travel experiences designed
            to make every journey comfortable, memorable and
            completely stress-free.
          </p>
        </motion.div>

        {/* ================= TABS ================= */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={
            shouldReduceMotion
              ? {}
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{ once: true, amount: 0.2 }}
          transition={{
            duration: 0.6,
            delay: 0.15,
          }}
          className="mt-8 flex justify-center"
        >
          <div className="flex max-w-full overflow-x-auto rounded-full border border-gray-200 bg-white p-1 shadow-sm">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  whileTap={
                    shouldReduceMotion
                      ? {}
                      : {
                          scale: 0.96,
                        }
                  }
                  className={`relative whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-semibold transition-colors duration-300 sm:px-6 sm:text-sm ${
                    isActive
                      ? "text-white"
                      : "text-gray-500 hover:text-[#123B4A]"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="active-package-tab"
                      className="absolute inset-0 rounded-full bg-[#1597A8]"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}

                  <span className="relative z-10">
                    {tab.label}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* ================= PACKAGE GRID ================= */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={
              shouldReduceMotion
                ? false
                : {
                    opacity: 0,
                  }
            }
            animate={{
              opacity: 1,
            }}
            exit={
              shouldReduceMotion
                ? {}
                : {
                    opacity: 0,
                  }
            }
            transition={{
              duration: 0.3,
            }}
            className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
          >
            {currentPackages.map((item, index) => {
              const direction =
                directions[index % directions.length];

              return (
                <motion.article
                  key={item.id ?? item.name ?? index}
                  initial={
                    shouldReduceMotion
                      ? false
                      : {
                          opacity: 0,
                          x: direction.x,
                          y: direction.y,
                          rotate: direction.rotate,
                          scale: 0.96,
                          filter: "blur(6px)",
                        }
                  }
                  animate={
                    shouldReduceMotion
                      ? {}
                      : {
                          opacity: 1,
                          x: 0,
                          y: 0,
                          rotate: 0,
                          scale: 1,
                          filter: "blur(0px)",
                        }
                  }
                  transition={{
                    duration: 0.7,
                    delay: index * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  whileHover={
                    shouldReduceMotion
                      ? {}
                      : {
                          y: -6,
                          transition: {
                            duration: 0.25,
                          },
                        }
                  }
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-[0_8px_25px_rgba(18,59,74,0.07)]"
                >
                  {/* ================= IMAGE ================= */}
                  <div className="relative h-48 overflow-hidden sm:h-52">
                    <motion.img
                      src={item.image}
                      alt={item.name}
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              scale: 1.1,
                              x: 15,
                            }
                      }
                      animate={
                        shouldReduceMotion
                          ? {}
                          : {
                              scale: 1,
                              x: 0,
                            }
                      }
                      transition={{
                        duration: 0.8,
                        delay: index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#123B4A]/75 via-[#123B4A]/10 to-transparent" />

                    {/* Location */}
                    {item.location && (
                      <motion.div
                        initial={
                          shouldReduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 8,
                              }
                        }
                        animate={
                          shouldReduceMotion
                            ? {}
                            : {
                                opacity: 1,
                                y: 0,
                              }
                        }
                        transition={{
                          duration: 0.4,
                          delay: index * 0.08 + 0.35,
                        }}
                        className="absolute bottom-3 left-3"
                      >
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-[#123B4A] shadow-sm backdrop-blur-sm">
                          <FontAwesomeIcon
                            icon={faLocationDot}
                            className="text-[#1597A8]"
                          />

                          {item.location}
                        </span>
                      </motion.div>
                    )}
                  </div>

                  {/* ================= CONTENT ================= */}
                  <div className="p-4 sm:p-5">

                    {/* Animated Accent Line */}
                    <motion.div
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              width: 0,
                            }
                      }
                      animate={
                        shouldReduceMotion
                          ? {}
                          : {
                              width: "100%",
                            }
                      }
                      transition={{
                        duration: 0.6,
                        delay: index * 0.08 + 0.2,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className="mb-3 h-0.5 rounded-full bg-[#1597A8]"
                    />

                    {/* Title */}
                    <motion.h3
                      initial={
                        shouldReduceMotion
                          ? false
                          : {
                              opacity: 0,
                              y: 8,
                            }
                      }
                      animate={
                        shouldReduceMotion
                          ? {}
                          : {
                              opacity: 1,
                              y: 0,
                            }
                      }
                      transition={{
                        duration: 0.4,
                        delay: index * 0.08 + 0.25,
                      }}
                      className="text-xl font-bold text-[#123B4A]"
                    >
                      {item.name}
                    </motion.h3>

                    {/* Description */}
                    {item.description && (
                      <motion.p
                        initial={
                          shouldReduceMotion
                            ? false
                            : {
                                opacity: 0,
                                y: 8,
                              }
                        }
                        animate={
                          shouldReduceMotion
                            ? {}
                            : {
                                opacity: 1,
                                y: 0,
                              }
                        }
                        transition={{
                          duration: 0.4,
                          delay: index * 0.08 + 0.3,
                        }}
                        className="mt-2 line-clamp-2 text-sm leading-5 text-gray-500"
                      >
                        {item.description}
                      </motion.p>
                    )}

                    {/* Bottom Row */}
                    <div className="mt-4 flex items-center justify-between">
                      {/* Price */}
                      {item.price && (
                        <motion.div
                          initial={
                            shouldReduceMotion
                              ? false
                              : {
                                  opacity: 0,
                                }
                          }
                          animate={
                            shouldReduceMotion
                              ? {}
                              : {
                                  opacity: 1,
                                }
                          }
                          transition={{
                            delay: index * 0.08 + 0.35,
                          }}
                        >
                          <p className="text-xs text-gray-400">
                            Starting from
                          </p>

                          <p className="mt-0.5 text-sm font-bold text-[#123B4A]">
                            {item.price}
                          </p>
                        </motion.div>
                      )}

                      {/* Arrow Button */}
                      <Link
                        to="/packages"
                        className="ml-auto"
                      >
                        <motion.div
                          whileHover={
                            shouldReduceMotion
                              ? {}
                              : {
                                  scale: 1.08,
                                }
                          }
                          whileTap={
                            shouldReduceMotion
                              ? {}
                              : {
                                  scale: 0.95,
                                }
                          }
                          className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1597A8] text-white transition-colors duration-300 group-hover:bg-[#123B4A]"
                        >
                          <FontAwesomeIcon
                            icon={faArrowRight}
                            className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                          />
                        </motion.div>
                      </Link>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>

        {/* ================= EXPLORE BUTTON ================= */}
        <motion.div
          initial={
            shouldReduceMotion
              ? false
              : {
                  opacity: 0,
                  y: 20,
                }
          }
          whileInView={
            shouldReduceMotion
              ? {}
              : {
                  opacity: 1,
                  y: 0,
                }
          }
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.6,
            delay: 0.2,
          }}
          className="mt-10 flex justify-center"
        >
          <Link
            to="/packages"
            className="group inline-flex items-center gap-3 rounded-full border border-[#1597A8] bg-white px-6 py-3 text-sm font-semibold text-[#123B4A] transition-all duration-300 hover:bg-[#1597A8] hover:text-white"
          >
            <span>Explore All Packages</span>

            <FontAwesomeIcon
              icon={faArrowRight}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedPackages;