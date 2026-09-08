import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";

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
    <header className="absolute left-0 top-0 z-50 w-full text-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center"
          onClick={() => setIsMenuOpen(false)}
        >
          <img
            src={MidaLogo}
            alt="Mida Travels Logo"
            className="h-14 w-auto object-contain md:h-16"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-sm font-medium transition duration-300 ${
                  isActive
                    ? "text-[#20B7C8]"
                    : "text-white hover:text-[#20B7C8]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* CTA Button */}
        <Link
          to="/contact"
          className="hidden rounded-full bg-[#1597A8] px-5 py-2 text-sm font-semibold text-white transition duration-300 hover:bg-[#123B4A] md:block"
        >
          Plan Your Journey
        </Link>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label="Toggle navigation menu"
          className="text-2xl text-white md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <FontAwesomeIcon
            icon={isMenuOpen ? faXmark : faBars}
          />
        </button>

      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-[#123B4A] px-6 py-6 md:hidden">
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
                      : "text-white hover:text-[#20B7C8]"
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
              className="mt-2 rounded-full bg-[#1597A8] px-5 py-3 text-center text-sm font-semibold text-white"
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