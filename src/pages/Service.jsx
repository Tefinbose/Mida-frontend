// src/pages/Service.jsx

import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPlane,
  faArrowRight,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import ServiceCard from "../components/Services/ServiceCard";
import { services } from "../Data/services";

const Service = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#123B4A] px-6 py-28 text-white lg:px-8 lg:py-36">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#1597A8]/20 blur-3xl" />

        <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-orange-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-3xl text-[#1597A8]">
            <FontAwesomeIcon icon={faPlane} />
          </div>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.25em] text-[#1597A8]">
            Travel Made Simple
          </p>

          <h1 className="mt-5 text-4xl font-bold leading-tight md:text-6xl">
            Our Travel Services
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-gray-300">
            From planning your dream holiday to managing every detail of your
            journey, Mida Travels provides complete travel solutions designed
            for comfort, convenience, and unforgettable experiences.
          </p>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-white px-6 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
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

            <p className="mt-6 leading-relaxed text-gray-600">
              At Mida Travels, we believe that every journey should be
              stress-free, exciting, and unforgettable. Our professional travel
              experts handle the details so you can focus on creating memories.
            </p>

            <p className="mt-4 leading-relaxed text-gray-600">
              Whether you're planning a family holiday, romantic honeymoon,
              business trip, destination wedding, or international adventure,
              our team provides personalized solutions tailored to your needs.
            </p>

            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#123B4A] px-7 py-3 font-semibold text-white transition duration-300 hover:bg-[#1597A8]"
            >
              Plan Your Journey
              <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

          {/* WHY CHOOSE US */}
          <div className="rounded-3xl bg-[#F4F9F9] p-8 md:p-10">
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

      {/* SERVICES */}
      <section className="bg-gray-50 px-6 py-20 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
              What We Offer
            </p>

            <h2 className="mt-4 text-4xl font-bold text-[#123B4A] md:text-5xl">
              Complete Travel Solutions
            </h2>

            <p className="mt-5 leading-relaxed text-gray-600">
              Explore our wide range of professional travel services designed
              to make every journey smooth, comfortable, and memorable.
            </p>
          </div>

          <div className="mt-14 grid gap-7 md:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1597A8] px-6 py-20 text-white lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold md:text-5xl">
            Ready To Start Your Journey?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/80">
            Let our travel experts help you plan a journey filled with
            unforgettable experiences and beautiful memories.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="rounded-full bg-white px-7 py-3 font-semibold text-[#123B4A] transition hover:bg-[#123B4A] hover:text-white"
            >
              Contact Us
            </Link>

            <Link
              to="/packages"
              className="rounded-full border border-white px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-[#123B4A]"
            >
              Explore Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Service;