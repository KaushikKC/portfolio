import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "blogs", label: "Blogs" },
    { to: "events", label: "Events" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className="p-4 md:p-6 bg-[#251C31] sticky top-0 z-50">
      <nav className="flex items-center justify-between">
        <div className="text-2xl md:text-4xl font-bold">🔗</div>

        {/* Desktop links */}
        <div className="hidden md:flex space-x-8 text-lg flex-1 justify-center">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-purple-300 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile: hamburger button */}
        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">
            {isMenuOpen ? "Close menu" : "Open menu"}
          </span>
          <div className="w-6 h-5 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-white rounded transition-all duration-300 origin-center ${
                isMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white rounded transition-all duration-300 ${
                isMenuOpen ? "opacity-0 scale-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-full bg-white rounded transition-all duration-300 origin-center ${
                isMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Mobile menu - only visible when open */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMenuOpen ? "max-h-80 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-4 text-lg">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={500}
              onClick={closeMenu}
              className="cursor-pointer hover:text-purple-300 transition-colors w-full text-center py-2"
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
