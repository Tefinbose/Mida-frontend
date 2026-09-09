import React, { useState } from "react";
import { motion } from "motion/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faLocationDot,
  faClock,
  faPaperPlane,
  faGlobe,
} from "@fortawesome/free-solid-svg-icons";

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Contact Form Data:", formData);

    // Add your API call here
  };

  return (
    <main className="bg-white">

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative flex min-h-[460px] items-center overflow-hidden bg-[#123B4A] px-6 pb-12 pt-28 text-white lg:min-h-[500px] lg:px-8 lg:pt-24">

        {/* Background Image */}
        <motion.div
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 1.5,
            ease: "easeOut",
          }}
          className="absolute inset-0"
        >
          <img
            src="https://images.unsplash.com/photo-1500534623283-312aade485b7?auto=format&fit=crop&w=1920&q=80"
            alt="Beautiful travel destination"
            className="h-full w-full object-cover"
          />
        </motion.div>

        {/* Dark Overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1.2,
          }}
          className="absolute inset-0 bg-[#123B4A]/80"
        />

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#123B4A]/30 via-[#123B4A]/60 to-[#123B4A]/95" />

        {/* Decorative Glow */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.4,
            delay: 0.2,
          }}
          className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-[#20B7C8]/10 blur-3xl"
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1.4,
            delay: 0.4,
          }}
          className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#1597A8]/10 blur-3xl"
        />

        {/* Hero Content */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="relative z-10 mx-auto w-full max-w-4xl text-center"
        >
          {/* Icon */}
          <motion.div
            variants={fadeUp}
            className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#20B7C8]/30 bg-[#1597A8]/20 backdrop-blur-sm"
          >
            <FontAwesomeIcon
              icon={faGlobe}
              className="text-2xl text-[#20B7C8]"
            />
          </motion.div>

          {/* Small Heading */}
          <motion.p
            variants={fadeUp}
            className="mt-5 text-xs font-semibold uppercase tracking-[0.25em] text-[#20B7C8]"
          >
            Let's Start Your Journey
          </motion.p>

          {/* Main Heading */}
          <motion.h1
            variants={fadeUp}
            className="mt-3 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
          >
            Get In
            <span className="block text-[#20B7C8]">
              Touch
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-200 md:text-base md:leading-7"
          >
            Have questions about your next trip? Our travel experts
            are here to help you plan a smooth and unforgettable journey.
          </motion.p>
        </motion.div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION + FORM
      ====================================================== */}
      <section className="px-6 py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mb-14 max-w-2xl text-center"
          >
            <motion.p
              variants={fadeUp}
              className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]"
            >
              Contact Mida Travels
            </motion.p>

            <motion.h2
              variants={fadeUp}
              className="mt-3 text-3xl font-bold text-[#123B4A] md:text-4xl"
            >
              We're Here To Help
            </motion.h2>

            <motion.p
              variants={fadeUp}
              className="mt-4 text-gray-500"
            >
              Whether you need help choosing a destination, booking a
              package, or arranging your travel documents, our team is
              ready to assist you.
            </motion.p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">

            {/* =================================================
                CONTACT DETAILS
            ================================================== */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="space-y-5"
            >

              {/* Email */}
              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-gray-100 bg-[#F4F9F9] p-6 shadow-[0_8px_30px_rgba(18,59,74,0.05)]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1597A8]/10 text-[#1597A8]">
                    <FontAwesomeIcon icon={faEnvelope} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#123B4A]">
                      Email Us
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      info@midatravels.com
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      We'll respond as soon as possible.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-gray-100 bg-[#F4F9F9] p-6 shadow-[0_8px_30px_rgba(18,59,74,0.05)]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1597A8]/10 text-[#1597A8]">
                    <FontAwesomeIcon icon={faPhone} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#123B4A]">
                      Call Us
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      +91 XXXXX XXXXX
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Our team is ready to assist you.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Location */}
              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-gray-100 bg-[#F4F9F9] p-6 shadow-[0_8px_30px_rgba(18,59,74,0.05)]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1597A8]/10 text-[#1597A8]">
                    <FontAwesomeIcon icon={faLocationDot} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#123B4A]">
                      Visit Us
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-gray-500">
                      Mida Travels
                      <br />
                      Kerala, India
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Working Hours */}
              <motion.div
                variants={fadeUp}
                className="rounded-2xl border border-gray-100 bg-[#F4F9F9] p-6 shadow-[0_8px_30px_rgba(18,59,74,0.05)]"
              >
                <div className="flex items-start gap-5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1597A8]/10 text-[#1597A8]">
                    <FontAwesomeIcon icon={faClock} />
                  </div>

                  <div>
                    <h3 className="font-bold text-[#123B4A]">
                      Working Hours
                    </h3>

                    <p className="mt-1 text-sm text-gray-500">
                      Monday - Saturday
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      9:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </motion.div>

            </motion.div>

            {/* =================================================
                CONTACT FORM
            ================================================== */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="rounded-3xl border border-gray-100 bg-white p-7 shadow-[0_15px_50px_rgba(18,59,74,0.08)] md:p-10"
            >
              <h3 className="text-2xl font-bold text-[#123B4A]">
                Send Us A Message
              </h3>

              <p className="mt-2 text-sm text-gray-500">
                Fill out the form and our travel team will get back to you.
              </p>

              <form
                onSubmit={handleSubmit}
                className="mt-8 space-y-5"
              >

                {/* Name + Email */}
                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#123B4A]">
                      Your Name
                    </label>

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#1597A8] focus:bg-white focus:ring-2 focus:ring-[#1597A8]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#123B4A]">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#1597A8] focus:bg-white focus:ring-2 focus:ring-[#1597A8]/10"
                    />
                  </div>

                </div>

                {/* Phone + Subject */}
                <div className="grid gap-5 md:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#123B4A]">
                      Phone Number
                    </label>

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#1597A8] focus:bg-white focus:ring-2 focus:ring-[#1597A8]/10"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-semibold text-[#123B4A]">
                      Subject
                    </label>

                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="How can we help?"
                      required
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#1597A8] focus:bg-white focus:ring-2 focus:ring-[#1597A8]/10"
                    />
                  </div>

                </div>

                {/* Message */}
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#123B4A]">
                    Message
                  </label>

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your travel plans..."
                    rows="6"
                    required
                    className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm outline-none transition focus:border-[#1597A8] focus:bg-white focus:ring-2 focus:ring-[#1597A8]/10"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#123B4A] px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#1597A8]"
                >
                  Send Message

                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="text-sm transition-transform duration-300 group-hover:translate-x-1"
                  />
                </button>

              </form>
            </motion.div>

          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}
      <section className="px-6 pb-20 lg:px-8 lg:pb-24">
        <div className="mx-auto max-w-7xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="relative flex min-h-[340px] items-center overflow-hidden rounded-3xl px-8 py-12 text-center text-white"
          >

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
                src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?auto=format&fit=crop&w=1920&q=80"
                alt="Travel experience"
                className="h-full w-full object-cover"
              />
            </motion.div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#123B4A]/80" />

            {/* Gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#123B4A]/40 via-[#123B4A]/60 to-[#123B4A]/95" />

            {/* Glow */}
            <div className="absolute -left-24 top-0 h-64 w-64 rounded-full bg-[#20B7C8]/10 blur-3xl" />

            <div className="absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[#1597A8]/10 blur-3xl" />

            {/* Content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="relative z-10 mx-auto max-w-3xl"
            >
              <motion.h3
                variants={fadeUp}
                className="text-2xl font-bold md:text-3xl"
              >
                Still Have Questions?
              </motion.h3>

              <motion.p
                variants={fadeUp}
                className="mx-auto mt-3 max-w-xl text-gray-200"
              >
                Our travel experts are ready to help you plan your perfect journey.
              </motion.p>

              <motion.div variants={fadeUp}>
                <a
                  href="/contact"
                  className="group relative mt-6 inline-block overflow-hidden rounded-full bg-[#1597A8] px-7 py-3 font-semibold text-white transition hover:bg-[#20B7C8]"
                >
                  <span className="relative block overflow-hidden">

                    <span className="block transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:-translate-y-full">
                      Contact Us
                    </span>

                    <span className="absolute left-0 top-full block w-full transition-transform duration-300 ease-[cubic-bezier(0.44,0,0.56,1)] group-hover:-translate-y-full">
                      Contact Us
                    </span>

                  </span>
                </a>
              </motion.div>

            </motion.div>
          </motion.div>

        </div>
      </section>

    </main>
  );
};

export default Contact;