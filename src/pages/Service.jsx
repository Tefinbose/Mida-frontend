import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowRight,
  faCheckCircle,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

import ServiceCard from "../components/Services/ServiceCard";
import { services } from "../Data/services";
import { motion } from "motion/react";

const Service = () => {
  const [selectedService, setSelectedService] = useState(null);

  /* -------------------------------------------------------
     PREVENT BODY SCROLL WHEN MODAL IS OPEN
  ------------------------------------------------------- */
  useEffect(() => {
    if (selectedService) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedService]);

  /* -------------------------------------------------------
     CLOSE MODAL WITH ESC KEY
  ------------------------------------------------------- */
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setSelectedService(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* =====================================================
          HERO
      ===================================================== */}
      <section className="relative flex min-h-[460px] items-center overflow-hidden bg-[#123B4A] px-6 py-24 text-white lg:min-h-[500px] lg:px-8">
        {/* Background Shape 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            ease: "easeOut",
          }}
          className="
      absolute
      -right-24
      -top-24
      h-80
      w-80
      rounded-full
      bg-[#1597A8]/20
      blur-3xl
    "
        />
        {/* Background Image */}
                {/* <motion.div
                  initial={{ scale: 1.08 }}
                  animate={{ scale: 1 }}
                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0"
                >
                  <img
                    src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Beautiful travel destination"
                    className="h-full w-full object-cover"
                  />
                </motion.div> */}

        {/* Background Shape 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.2,
            delay: 0.15,
            ease: "easeOut",
          }}
          className="
      absolute
      -bottom-32
      -left-24
      h-80
      w-80
      rounded-full
      bg-[#1597A8]/10
      blur-3xl
    "
        />

        {/* Content */}
        <div className="relative mx-auto w-full max-w-4xl text-center">
          {/* Small Heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
        text-sm
        font-semibold
        uppercase
        tracking-[0.25em]
        text-[#20B7C8]
      "
          >
            Travel Made Simple
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
        mt-5
        text-4xl
        font-bold
        leading-tight
        md:text-6xl
      "
          >
            Our Travel Services
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.45,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
        mx-auto
        mt-6
        max-w-2xl
        text-base
        leading-8
        text-gray-300
        md:text-lg
      "
          >
            From planning your dream holiday to managing every detail of your
            journey, Mida Travels provides complete travel solutions designed
            for comfort, convenience, and unforgettable experiences.
          </motion.p>
        </div>
      </section>

      {/* =====================================================
          INTRODUCTION
      ===================================================== */}
      <section className="bg-white px-6 py-20 lg:px-8"
      
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
              Explore Without Limits
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#123B4A] md:text-5xl">
              Everything You Need
              <span className="block text-[#1597A8]">
                For The Perfect Journey
              </span>
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              At Mida Travels, we believe that every journey should be
              stress-free, exciting, and unforgettable. Our professional travel
              experts handle the details so you can focus on creating memories.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              Whether you're planning a family holiday, romantic honeymoon,
              business trip, destination wedding, or international adventure,
              our team provides personalized solutions tailored to your needs.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 bg-[#123B4A] px-7 py-3 font-semibold text-white rounded-2xl"
            >
              Plan Your Journey
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          {/* RIGHT */}
          <div className="bg-[#F4F9F9] p-8 md:p-10">
            <h3 className="text-2xl font-bold text-[#123B4A]">
              Why Travel With Mida?
            </h3>

            <div className="mt-8 space-y-6">
              {[
                "Personalized travel planning",
                "Experienced travel consultants",
                "Global destination expertise",
                "Trusted travel partners",
                "Competitive pricing",
                "Dedicated customer support",
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#1597A8] text-white">
                    <FontAwesomeIcon icon={faCheckCircle} />
                  </div>

                  <p className="font-medium text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SERVICES
      ===================================================== */}
      <section className="bg-gray-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          {/* HEADER */}
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
              What We Offer
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#123B4A] md:text-5xl">
              Complete Travel Solutions
            </h2>

            <p className="mt-5 leading-8 text-gray-600">
              Explore our wide range of professional travel services designed to
              make every journey smooth, comfortable, and memorable.
            </p>
          </div>

          {/* SERVICE CARDS */}
          <div className="mt-14 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                onExplore={setSelectedService}
              />
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ===================================================== */}
      {/* =====================================================
    CTA
===================================================== */}
<section className="relative overflow-hidden px-6 py-24 lg:px-8">

  {/* Background Image */}
  <motion.div
    initial={{ scale: 1.08 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: true }}
    transition={{
      duration: 1.5,
      ease: "easeOut",
    }}
    className="absolute inset-0"
  >
    <img
      src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1920&q=80"
      alt="Travel destination"
      className="h-full w-full object-cover"
    />
  </motion.div>

  {/* Dark Teal Overlay */}
  <div className="absolute inset-0 bg-[#123B4A]/85" />

  {/* Gradient Overlay */}
  <div className="absolute inset-0 bg-gradient-to-r from-[#123B4A]/95 via-[#123B4A]/80 to-[#1597A8]/70" />

  {/* Decorative Glow */}
  <motion.div
    initial={{ opacity: 0, scale: 0.7 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2 }}
    className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-[#20B7C8]/20 blur-3xl"
  />

  <motion.div
    initial={{ opacity: 0, scale: 0.7 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 1.2, delay: 0.2 }}
    className="absolute -bottom-40 -right-32 h-[450px] w-[450px] rounded-full bg-[#1597A8]/20 blur-3xl"
  />

  {/* Content */}
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    }}
    className="relative z-10 mx-auto max-w-4xl text-center"
  >

    {/* Small Heading */}
    <motion.p
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        text-xs
        font-semibold
        uppercase
        tracking-[0.3em]
        text-[#20B7C8]
        md:text-sm
      "
    >
      Start Planning
    </motion.p>

    {/* Main Heading */}
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.1,
      }}
      className="
        mt-5
        text-4xl
        font-bold
        leading-tight
        text-white
        md:text-5xl
        lg:text-6xl
      "
    >
      Ready To Start Your Journey?
    </motion.h2>

    {/* Description */}
    <motion.p
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.2,
      }}
      className="
        mx-auto
        mt-6
        max-w-2xl
        text-base
        leading-8
        text-gray-200
        md:text-lg
      "
    >
      Let our travel experts help you plan a journey filled with
      unforgettable experiences and beautiful memories.
    </motion.p>

    {/* Buttons */}
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.7,
        delay: 0.35,
      }}
      className="mt-9 flex flex-col justify-center gap-4 sm:flex-row"
    >

      {/* Contact Button */}
      <Link
        to="/contact"
        className="
          group
          relative
          inline-flex
          items-center
          justify-center
          gap-3
          overflow-hidden
          rounded-full
          bg-white
          px-8
          py-4
          font-semibold
          text-[#123B4A]
          transition-all
          duration-300
          hover:bg-[#20B7C8]
          hover:text-white
          hover:shadow-[0_12px_35px_rgba(32,183,200,0.3)]
        "
      >
        <span className="relative z-10">
          Contact Us
        </span>

        <FontAwesomeIcon
          icon={faArrowRight}
          className="
            relative
            z-10
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </Link>

      {/* Packages Button */}
      <Link
        to="/packages"
        className="
          group
          inline-flex
          items-center
          justify-center
          gap-3
          rounded-full
          border
          border-white/40
          bg-white/10
          px-8
          py-4
          font-semibold
          text-white
          backdrop-blur-md
          transition-all
          duration-300
          hover:border-[#20B7C8]
          hover:bg-[#20B7C8]
          hover:shadow-[0_12px_35px_rgba(32,183,200,0.25)]
        "
      >
        Explore Packages

        <FontAwesomeIcon
          icon={faArrowRight}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </Link>

    </motion.div>

  </motion.div>
</section>

      {/* =====================================================
          SERVICE MODAL
      ===================================================== */}
      {selectedService && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-4 py-6"
          onClick={() => setSelectedService(null)}
        >
          {/* MODAL */}
          <div
            className="relative max-h-[90vh] w-full max-w-3xl overflow-hidden bg-white shadow-2xl"
            onClick={(event) => event.stopPropagation()}
          >
            {/* MODAL HEADER */}
            <div className="flex items-center justify-between bg-[#123B4A] px-6 py-5 text-white md:px-8">
              <div className="flex items-center gap-4">
                {/* ICON */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-[#20B7C8]">
                  <FontAwesomeIcon
                    icon={selectedService.icon}
                    className="text-xl"
                  />
                </div>

                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#20B7C8]">
                    Mida Travels
                  </p>

                  <h2 className="mt-1 text-xl font-bold md:text-2xl">
                    {selectedService.title}
                  </h2>
                </div>
              </div>

              {/* CLOSE BUTTON */}
              <button
                type="button"
                onClick={() => setSelectedService(null)}
                aria-label="Close service details"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white"
              >
                <FontAwesomeIcon icon={faXmark} className="text-lg" />
              </button>
            </div>

            {/* MODAL CONTENT */}
            <div className="max-h-[calc(90vh-88px)] overflow-y-auto px-6 py-8 md:px-8 md:py-10">
              {/* INTRO */}
              <p className="text-base leading-8 text-gray-700">
                {selectedService.description}
              </p>

              {/* DETAILS */}
              <div className="mt-6 space-y-5">
                {selectedService.details.map((paragraph, index) => (
                  <p key={index} className="text-base leading-8 text-gray-600">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* BOTTOM CTA */}
              <div className="mt-8 border-t border-gray-100 pt-6">
                <Link
                  to="/contact"
                  onClick={() => setSelectedService(null)}
                  className="inline-flex items-center gap-3 bg-[#123B4A] px-6 py-3 text-sm font-semibold text-white"
                >
                  Enquire About This Service
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Service;
