import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faClock,
  faPaperPlane,
  faHeadset,
} from "@fortawesome/free-solid-svg-icons";

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
      {/* Hero Section */}
      <section className="bg-[#123B4A] px-6 py-24 text-center text-white md:py-32">
        <div className="mx-auto max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
            Get In Touch
          </p>

          <h1 className="mt-4 text-4xl font-bold md:text-6xl">
            Let's Plan Your Next Journey
          </h1>

          <p className="mt-5 leading-relaxed text-gray-300">
            Have a question or planning your dream vacation? Our travel experts
            are ready to help you create unforgettable experiences.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="relative z-10 -mt-12 px-6">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-4">
          {/* Phone */}
          <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1597A8]/10 text-xl text-[#1597A8]">
              <FontAwesomeIcon icon={faPhone} />
            </div>

            <h3 className="mt-4 text-lg font-bold text-[#123B4A]">
              Call Us
            </h3>

            <a
              href="tel:+919645123447"
              className="mt-3 block text-sm text-gray-600 hover:text-[#1597A8]"
            >
              +91 96451 23447
            </a>

            <a
              href="tel:+971521037071"
              className="mt-2 block text-sm text-gray-600 hover:text-[#1597A8]"
            >
              +971 52 103 7071
            </a>
          </div>

          {/* Email */}
          <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1597A8]/10 text-xl text-[#1597A8]">
              <FontAwesomeIcon icon={faEnvelope} />
            </div>

            <h3 className="mt-4 text-lg font-bold text-[#123B4A]">
              Email Us
            </h3>

            <a
              href="mailto:info@midatravels.com"
              className="mt-3 block text-sm text-gray-600 hover:text-[#1597A8]"
            >
              info@midatravels.com
            </a>

            <a
              href="mailto:sales@midatravels.com"
              className="mt-2 block text-sm text-gray-600 hover:text-[#1597A8]"
            >
              sales@midatravels.com
            </a>
          </div>

          {/* Location */}
          <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1597A8]/10 text-xl text-[#1597A8]">
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
          </div>

          {/* Support */}
          <div className="rounded-2xl bg-white p-6 text-center shadow-lg">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[#1597A8]/10 text-xl text-[#1597A8]">
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
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-50 px-6 py-20 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
              Contact Mida Travels
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#123B4A] md:text-5xl">
              Start Your Journey With Us
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Whether you're planning a relaxing holiday, an adventurous
              expedition, a honeymoon, a family vacation, or corporate travel,
              our experienced travel consultants are here to help.
            </p>

            <p className="mt-5 leading-8 text-gray-600">
              Tell us about your dream destination, travel dates, and
              preferences. We will help you create a personalized travel
              experience.
            </p>

            {/* Working Hours */}
            <div className="mt-8 flex items-start gap-4 rounded-2xl bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#1597A8]/10 text-[#1597A8]">
                <FontAwesomeIcon icon={faClock} />
              </div>

              <div>
                <h3 className="font-bold text-[#123B4A]">
                  Travel Assistance
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  Contact our team for travel planning, bookings, visa
                  assistance, hotel reservations, and customized holiday
                  packages.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="rounded-3xl bg-white p-7 shadow-lg md:p-10">
            <h2 className="text-2xl font-bold text-[#123B4A]">
              Send Us A Message
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Fill out the form and our travel experts will get back to you.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
              {/* Name */}
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
                  className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#1597A8] focus:ring-2 focus:ring-[#1597A8]/20"
                />
              </div>

              {/* Email and Phone */}
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
                    className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#1597A8] focus:ring-2 focus:ring-[#1597A8]/20"
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
                    className="w-full rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#1597A8] focus:ring-2 focus:ring-[#1597A8]/20"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="mb-2 block text-sm font-semibold text-[#123B4A]">
                  Subject
                </label>

                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-5 py-4 outline-none transition focus:border-[#1597A8] focus:ring-2 focus:ring-[#1597A8]/20"
                >
                  <option value="">Select a subject</option>

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

              {/* Message */}
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
                  className="w-full resize-none rounded-xl border border-gray-200 px-5 py-4 outline-none transition focus:border-[#1597A8] focus:ring-2 focus:ring-[#1597A8]/20"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#123B4A] px-6 py-4 font-semibold text-white transition duration-300 hover:bg-[#1597A8]"
              >
                Send Message

                <FontAwesomeIcon icon={faPaperPlane} />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-[#123B4A] px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">
            Your Next Adventure Starts Here
          </h2>

          <p className="mt-5 leading-7 text-gray-300">
            From dream destinations to unforgettable experiences, Mida Travels
            is here to make your journey seamless and memorable.
          </p>

          <a
            href="tel:+919645123447"
            className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#1597A8] px-8 py-4 font-semibold text-white transition hover:bg-[#0f7d8c]"
          >
            <FontAwesomeIcon icon={faPhone} />

            Talk To A Travel Expert
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;