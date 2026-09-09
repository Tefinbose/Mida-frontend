import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faPhone,
  faEnvelope,
  faLocationDot,
  faPaperPlane,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="bg-[#123B4A] text-white">
      {/* Newsletter Section */}
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-8 px-6 py-14 lg:grid-cols-2 lg:items-center lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#1597A8]">
              Stay Updated
            </p>

            <h2 className="mt-3 text-3xl font-bold md:text-4xl">
              Planning Your Next Getaway?
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-300">
              Discover a whole new world with Mida Travels. Subscribe to get
              travel inspiration, exclusive offers, and exciting holiday
              updates.
            </p>
          </div>

          {/* Subscribe Form */}
          <form className="flex flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full rounded-full bg-white px-6 py-4 text-sm text-gray-700 outline-none"
            />

            <button
  type="submit"
  className="
    group
    flex
    items-center
    justify-center
    gap-2
    rounded-full
    bg-[#1597A8]
    px-7
    py-4
    font-semibold
    text-white
    transition
    duration-300
    hover:bg-[#0f7d8c]
  "
>
  <span className="relative block overflow-hidden">
    
    {/* Normal Text */}
    <span
      className="
        block
        transition-transform
        duration-300
        ease-[cubic-bezier(0.44,0,0.56,1)]
        group-hover:-translate-y-full
      "
    >
      Subscribe
    </span>

    {/* Hover Text */}
    <span
      className="
        absolute
        left-0
        top-full
        block
        w-full
        transition-transform
        duration-300
        ease-[cubic-bezier(0.44,0,0.56,1)]
        group-hover:-translate-y-full
      "
    >
      Subscribe
    </span>

  </span>

  <FontAwesomeIcon
    icon={faPaperPlane}
    className="
      transition-transform
      duration-300
      group-hover:translate-x-1
      group-hover:-translate-y-1
    "
  />
</button>
          </form>
        </div>
      </div>

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Mida Travels */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold">
              Mida <span className="text-[#1597A8]">Travels</span>
            </h2>

            <p className="mt-5 max-w-md text-sm leading-7 text-gray-300">
              Taking world travel to the next level with premium services at
              affordable prices for individuals, couples, families and
              corporates alike for 23 years.
            </p>

            <p className="mt-4 max-w-md text-sm leading-7 text-gray-300">
              International traveller's favourite Destination Management Company
              based in Dubai, UAE.
            </p>

            {/* Social Media */}
            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/mida_travels/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#1597A8]"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <a
                href="https://www.facebook.com/midatourism/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#1597A8]"
              >
                <FontAwesomeIcon icon={faFacebookF} />
              </a>

              <a
                href="https://www.linkedin.com/company/mida-tourism-travels-dubai-uae"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-[#1597A8]"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </div>
          </div>

          {/* Top Destinations */}
          <div>
            <h3 className="text-lg font-bold">Top Destinations</h3>

            <ul className="mt-6 space-y-3">
              {[
                "Dubai",
                "Singapore",
                "Malaysia",
                "Thailand",
                "Bali",
                "Maldives",
              ].map((destination) => (
                <li key={destination}>
                  <Link
                    to="/destination"
                    className="group flex items-center gap-2 text-sm text-gray-300 transition hover:text-[#1597A8]"
                  >
                    <FontAwesomeIcon
                      icon={faArrowRight}
                      className="text-xs transition-transform group-hover:translate-x-1"
                    />

                    {destination}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Tour */}
          <div>
            <h3 className="text-lg font-bold">Quick Links</h3>

            <ul className="mt-6 space-y-3">
              <li>
                <Link
                  to="/service"
                  className="group flex items-center gap-2 text-sm text-gray-300 transition hover:text-[#1597A8]"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-xs transition-transform group-hover:translate-x-1"
                  />
                  Visa Requirements
                </Link>
              </li>

              <li>
                <Link
                  to="/blogs"
                  className="group flex items-center gap-2 text-sm text-gray-300 transition hover:text-[#1597A8]"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-xs transition-transform group-hover:translate-x-1"
                  />
                  Blogs
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="group flex items-center gap-2 text-sm text-gray-300 transition hover:text-[#1597A8]"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-xs transition-transform group-hover:translate-x-1"
                  />
                  Help & Support
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="group flex items-center gap-2 text-sm text-gray-300 transition hover:text-[#1597A8]"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-xs transition-transform group-hover:translate-x-1"
                  />
                  Request Refund
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="group flex items-center gap-2 text-sm text-gray-300 transition hover:text-[#1597A8]"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-xs transition-transform group-hover:translate-x-1"
                  />
                  Payment Problem
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="group flex items-center gap-2 text-sm text-gray-300 transition hover:text-[#1597A8]"
                >
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="text-xs transition-transform group-hover:translate-x-1"
                  />
                  Feedback
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-bold">Contact Us</h3>

            <div className="mt-6 space-y-5">
              {/* Phone */}
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mt-1 text-[#1597A8]"
                />

                <div>
                  <p className="text-sm text-gray-400">Call Us</p>

                  <a
                    href="tel:+919645123447"
                    className="mt-1 block text-sm text-gray-200 transition hover:text-[#1597A8]"
                  >
                    +91 96451 23447
                  </a>

                  <a
                    href="tel:+971521037071"
                    className="mt-1 block text-sm text-gray-200 transition hover:text-[#1597A8]"
                  >
                    +971 52 103 7071
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  className="mt-1 text-[#1597A8]"
                />

                <div>
                  <p className="text-sm text-gray-400">Email Us</p>

                  <a
                    href="mailto:info@midatravels.com"
                    className="mt-1 block break-all text-sm text-gray-200 transition hover:text-[#1597A8]"
                  >
                    info@midatravels.com
                  </a>

                  <a
                    href="mailto:sales@midatravels.com"
                    className="mt-1 block break-all text-sm text-gray-200 transition hover:text-[#1597A8]"
                  >
                    sales@midatravels.com
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-3">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="mt-1 text-[#1597A8]"
                />

                <div>
                  <p className="text-sm text-gray-400">Location</p>

                  <p className="mt-1 text-sm leading-relaxed text-gray-200">
                    Dubai, UAE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Loyalty / Legal Links */}
        <div className="mt-14 border-t border-white/10 pt-10">
          <div className="flex flex-col justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h3 className="text-lg font-bold">Mida Travels</h3>

              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                <Link
                  to="/about"
                  className="text-sm text-gray-300 transition hover:text-[#1597A8]"
                >
                  About Mida Travels
                </Link>

                <Link
                  to="/#testimonials"
                  className="text-sm text-gray-300 transition hover:text-[#1597A8]"
                >
                  Testimonials
                </Link>

                <Link
                  to="/careers"
                  className="text-sm text-gray-300 transition hover:text-[#1597A8]"
                >
                  Careers
                </Link>

                <Link
                  to="/#faq"
                  className="text-sm text-gray-300 transition hover:text-[#1597A8]"
                >
                  FAQs
                </Link>
              </div>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap gap-5">
              <Link
                to="/terms-conditions"
                className="text-sm text-gray-300 transition hover:text-[#1597A8]"
              >
                Terms & Conditions
              </Link>

              <Link
                to="/privacy-policy"
                className="text-sm text-gray-300 transition hover:text-[#1597A8]"
              >
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-white/10 bg-[#0c2b36]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center text-sm text-gray-400 md:flex-row md:text-left lg:px-8">
          <p>
            © {new Date().getFullYear()} Mida Travels. All Rights Reserved.
          </p>

          <p>
            Designed with ❤️ for travellers around the world.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;