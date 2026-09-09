import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// Logo
import MidaLogo from "../../assets/Midalogo.png";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Destinations", path: "/destinations" },
  { name: "Packages", path: "/packages" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute left-0 top-0 z-50 w-full px-4 pt-4 text-white md:px-8 md:pt-6">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between
                   rounded-full border border-white/10 bg-[#0C2530]/60
                   px-5 py-3 shadow-lg shadow-black/20 backdrop-blur-md
                   md:px-6"
      >
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src={MidaLogo}
            alt="Mida Travels Logo"
            className="h-10 w-auto object-contain md:h-12"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative text-sm font-medium transition duration-300 ${
                  isActive
                    ? "text-[#20B7C8]"
                    : "text-white/90 hover:text-[#20B7C8]"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}
                  <span
                    className={`absolute -bottom-1.5 left-0 h-[2px] w-full rounded-full bg-[#20B7C8] transition-all duration-300 ${
                      isActive ? "opacity-100" : "opacity-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden rounded-full bg-[#1597A8] px-5 py-2 text-sm font-semibold
                     text-white transition duration-300 hover:bg-[#123B4A] md:block"
        >
          Plan Your Journey
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
          className="grid h-9 w-9 place-items-center rounded-full text-lg
                     text-white transition hover:bg-white/10 md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon icon={isMenuOpen ? faXmark : faBars} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="mx-auto mt-3 max-w-6xl rounded-3xl border border-white/10
                     bg-[#0C2530]/95 px-6 py-6 shadow-lg shadow-black/30
                     backdrop-blur-md md:hidden"
        >
          <div className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  `text-sm font-medium transition ${
                    isActive
                      ? "text-[#20B7C8]"
                      : "text-white/90 hover:text-[#20B7C8]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}

            {/* Mobile CTA */}
            <Link
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className="mt-2 rounded-full bg-[#1597A8] px-5 py-3 text-center
                         text-sm font-semibold text-white transition hover:bg-[#123B4A]"
            >
              Plan Your Journey
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;