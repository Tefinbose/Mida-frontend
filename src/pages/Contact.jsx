import { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
  faPaperPlane,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "motion/react";

// =====================================================
// ANIMATION VARIANTS
// =====================================================

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 25,
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

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

// =====================================================
// CONTACT PAGE
// =====================================================

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // ===================================================
  // HANDLE INPUT CHANGE
  // ===================================================

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ===================================================
  // HANDLE FORM SUBMIT
  // ===================================================

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    alert("Thank you! Your message has been sent successfully.");

    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <>
      {/* =====================================================
          HERO SECTION
      ===================================================== */}

      <section className="relative flex min-h-[430px] w-full items-center overflow-hidden bg-[#123B4A] px-6 pb-10 pt-24 text-white lg:min-h-[480px] lg:px-8 lg:pt-20">

        {/* Background Glow */}

        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#1597A8]/10 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#c4953d]/5 blur-3xl" />

        {/* Decorative Circle */}

        <div className="absolute right-[12%] top-[28%] hidden h-20 w-20 rounded-full border border-white/10 lg:block" />

        <div className="absolute bottom-[18%] left-[10%] hidden h-14 w-14 rounded-full border border-[#1597A8]/20 lg:block" />

        {/* Hero Content */}

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="relative z-10 mx-auto w-full max-w-3xl text-center"
        >
          {/* Label */}

          <motion.p
            variants={fadeUp}
            className="text-xs font-semibold uppercase tracking-[0.25em] text-[#20B7C8]"
          >
            Get In Touch
          </motion.p>

          {/* Heading */}

          <motion.h1
            variants={fadeUp}
            className="mt-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl"
          >
            Let's Plan Your Next Journey
          </motion.h1>

          {/* Description */}

          <motion.p
            variants={fadeUp}
            className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-300 md:text-base"
          >
            Have a question or planning your dream vacation?
            Our travel experts are ready to help you create
            unforgettable experiences.
          </motion.p>
        </motion.div>
      </section>

      {/* =====================================================
          CONTACT INFORMATION CARDS
      ===================================================== */}

      <section className="relative z-10 -mt-10 px-6">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.2,
          }}
          className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {/* =================================================
              PHONE CARD
          ================================================= */}

          <motion.div
            variants={fadeUp}
            className="group rounded-2xl border border-[#dcebed] bg-white p-6 text-center shadow-[0_10px_30px_rgba(18,59,74,0.07)] transition-shadow duration-300 hover:shadow-[0_15px_40px_rgba(18,59,74,0.12)]"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1597A8]/10 text-xl text-[#1597A8] transition-colors duration-300 group-hover:bg-[#1597A8] group-hover:text-white">
              <FontAwesomeIcon icon={faPhone} />
            </div>

            <h3 className="mt-4 text-lg font-bold text-[#123B4A]">
              Call Us
            </h3>

            <a
              href="tel:+919645123447"
              className="mt-3 block text-sm text-gray-600 transition-colors duration-300 hover:text-[#1597A8]"
            >
              +91 96451 23447
            </a>

            <a
              href="tel:+971521037071"
              className="mt-2 block text-sm text-gray-600 transition-colors duration-300 hover:text-[#1597A8]"
            >
              +971 52 103 7071
            </a>
          </motion.div>

          {/* =================================================
              EMAIL CARD
          ================================================= */}

          <motion.div
            variants={fadeUp}
            className="group rounded-2xl border border-[#dcebed] bg-white p-6 text-center shadow-[0_10px_30px_rgba(18,59,74,0.07)] transition-shadow duration-300 hover:shadow-[0_15px_40px_rgba(18,59,74,0.12)]"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1597A8]/10 text-xl text-[#1597A8] transition-colors duration-300 group-hover:bg-[#1597A8] group-hover:text-white">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>

            <h3 className="mt-4 text-lg font-bold text-[#123B4A]">
              Email Us
            </h3>

            <a
              href="mailto:info@midatravels.com"
              className="mt-3 block text-sm text-gray-600 transition-colors duration-300 hover:text-[#1597A8]"
            >
              info@midatravels.com
            </a>

            <a
              href="mailto:sales@midatravels.com"
              className="mt-2 block text-sm text-gray-600 transition-colors duration-300 hover:text-[#1597A8]"
            >
              sales@midatravels.com
            </a>
          </motion.div>

          {/* =================================================
              LOCATION CARD
          ================================================= */}

          <motion.div
            variants={fadeUp}
            className="group rounded-2xl border border-[#dcebed] bg-white p-6 text-center shadow-[0_10px_30px_rgba(18,59,74,0.07)] transition-shadow duration-300 hover:shadow-[0_15px_40px_rgba(18,59,74,0.12)]"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1597A8]/10 text-xl text-[#1597A8] transition-colors duration-300 group-hover:bg-[#1597A8] group-hover:text-white">
              <FontAwesomeIcon icon={faLocationDot} />
            </div>

            <h3 className="mt-4 text-lg font-bold text-[#123B4A]">
              Visit Us
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Dubai, UAE
            </p>

            <p className="mt-2 text-sm text-gray-500">
              International Travel Services
            </p>
          </motion.div>

          {/* =================================================
              SUPPORT CARD
          ================================================= */}

          <motion.div
            variants={fadeUp}
            className="group rounded-2xl border border-[#dcebed] bg-white p-6 text-center shadow-[0_10px_30px_rgba(18,59,74,0.07)] transition-shadow duration-300 hover:shadow-[0_15px_40px_rgba(18,59,74,0.12)]"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1597A8]/10 text-xl text-[#1597A8] transition-colors duration-300 group-hover:bg-[#1597A8] group-hover:text-white">
              <FontAwesomeIcon icon={faHeadset} />
            </div>

            <h3 className="mt-4 text-lg font-bold text-[#123B4A]">
              Travel Support
            </h3>

            <p className="mt-3 text-sm text-gray-600">
              Our travel experts are ready to assist you.
            </p>

            <p className="mt-2 text-sm font-semibold text-[#1597A8]">
              Personalized Travel Support
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          CONTACT FORM SECTION
      ===================================================== */}

      <section className="bg-[#f3f8f9] px-6 py-20 lg:px-8 lg:py-24">
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.15,
          }}
          className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:items-start"
        >
          {/* =================================================
              LEFT CONTENT
          ================================================= */}

          <motion.div variants={fadeLeft}>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
              Contact Mida Travels
            </p>

            <h2 className="mt-4 text-4xl font-bold leading-tight text-[#123B4A] md:text-5xl">
              Start Your Journey With Us
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Whether you're planning a relaxing holiday, an
              adventurous expedition, a honeymoon, a family
              vacation, or corporate travel, our experienced
              travel consultants are here to help.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Tell us about your dream destination, travel dates,
              and preferences. We will help you create a
              personalized travel experience.
            </p>

            {/* Travel Assistance */}

            <div className="mt-8 flex items-start gap-4 rounded-2xl border border-[#dcebed] bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1597A8]/10 text-[#1597A8]">
                <FontAwesomeIcon icon={faClock} />
              </div>

              <div>
                <h3 className="font-bold text-[#123B4A]">
                  Travel Assistance
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Contact our team for travel planning, bookings,
                  visa assistance, hotel reservations, and
                  customized holiday packages.
                </p>
              </div>
            </div>
          </motion.div>

          {/* =================================================
              CONTACT FORM
          ================================================= */}

          <motion.div
            variants={fadeRight}
            className="rounded-3xl border border-[#dcebed] bg-white p-7 shadow-[0_15px_45px_rgba(18,59,74,0.08)] md:p-10"
          >
            <h2 className="text-2xl font-bold text-[#123B4A]">
              Send Us A Message
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Fill out the form and our travel experts will get
              back to you.
            </p>

            <form
              onSubmit={handleSubmit}
              className="mt-8 space-y-5"
            >
              {/* =================================================
                  NAME
              ================================================= */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#123B4A]">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  required
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#1597A8] focus:ring-4 focus:ring-[#1597A8]/10"
                />
              </div>

              {/* =================================================
                  EMAIL + PHONE
              ================================================= */}

              <div className="grid gap-5 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#123B4A]">
                    Email Address
                  </label>

                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your email"
                    required
                    className="w-full rounded-xl border border-gray-200 px-5 py-4 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#1597A8] focus:ring-4 focus:ring-[#1597A8]/10"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-[#123B4A]">
                    Phone Number
                  </label>

                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                    className="w-full rounded-xl border border-gray-200 px-5 py-4 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#1597A8] focus:ring-4 focus:ring-[#1597A8]/10"
                  />
                </div>
              </div>

              {/* =================================================
                  SUBJECT
              ================================================= */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#123B4A]">
                  Subject
                </label>

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 text-sm text-gray-600 outline-none transition-all duration-300 focus:border-[#1597A8] focus:ring-4 focus:ring-[#1597A8]/10"
                >
                  <option value="">
                    Select a subject
                  </option>

                  <option value="Tour Package">
                    Tour Package Inquiry
                  </option>

                  <option value="Visa Assistance">
                    Visa Assistance
                  </option>

                  <option value="Hotel Booking">
                    Hotel Booking
                  </option>

                  <option value="Flight Booking">
                    Flight Booking
                  </option>

                  <option value="Destination Wedding">
                    Destination Wedding
                  </option>

                  <option value="Other">
                    Other
                  </option>
                </select>
              </div>

              {/* =================================================
                  MESSAGE
              ================================================= */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-[#123B4A]">
                  Your Message
                </label>

                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Tell us about your travel plans..."
                  required
                  className="w-full resize-none rounded-xl border border-gray-200 px-5 py-4 text-sm outline-none transition-all duration-300 placeholder:text-gray-400 focus:border-[#1597A8] focus:ring-4 focus:ring-[#1597A8]/10"
                />
              </div>

              {/* =================================================
                  SUBMIT BUTTON
              ================================================= */}

              <motion.button
                type="submit"
                whileTap={{ scale: 0.98 }}
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#123B4A] px-6 py-4 font-semibold text-white transition-all duration-300 hover:bg-[#1597A8] hover:shadow-lg hover:shadow-[#1597A8]/20"
              >
                Send Message

                <FontAwesomeIcon icon={faPaperPlane} />
              </motion.button>
            </form>
          </motion.div>
        </motion.div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#123B4A] px-6 py-20 text-center text-white">

        {/* Background Glow */}

        <div className="absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#1597A8]/10 blur-3xl" />

        <div className="absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#c4953d]/5 blur-3xl" />

        {/* CTA Content */}

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.3,
          }}
          className="relative z-10 mx-auto max-w-3xl"
        >
          <h2 className="text-3xl font-bold md:text-4xl">
            Your Next Adventure Starts Here
          </h2>

          <p className="mt-5 leading-7 text-gray-300">
            From dream destinations to unforgettable experiences,
            Mida Travels is here to make your journey seamless
            and memorable.
          </p>

          <a
            href="tel:+919645123447"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1597A8] px-8 py-4 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#20B7C8] hover:shadow-lg hover:shadow-[#20B7C8]/20"
          >
            <FontAwesomeIcon icon={faPhone} />

            Talk To A Travel Expert
          </a>
        </motion.div>
      </section>
    </>
  );
};

export default Contact;