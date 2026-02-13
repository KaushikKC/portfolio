import React, { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { to: "home", label: "Home" },
    { to: "github", label: "GitHub" },
    { to: "about", label: "About" },
    { to: "projects", label: "Projects" },
    { to: "blogs", label: "Blogs" },
    { to: "events", label: "Events" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <header className="bg-white border-b border-black/10 sticky top-0 z-50">
      <nav className="max-w-prose mx-auto px-4 py-4 flex items-center justify-between">
        <span className="text-lg font-semibold text-black">Kaushik K</span>

        <div className="hidden md:flex gap-6 text-black">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={400}
              className="cursor-pointer hover:underline"
            >
              {label}
            </Link>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 text-black focus:outline-none"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        >
          <span className="sr-only">{isMenuOpen ? "Close" : "Menu"}</span>
          <div className="w-6 h-4 flex flex-col justify-between">
            <span
              className={`block h-0.5 w-full bg-black ${isMenuOpen ? "rotate-45 translate-y-1.5" : ""}`}
            />
            <span
              className={`block h-0.5 w-full bg-black ${isMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`block h-0.5 w-full bg-black ${isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`}
            />
          </div>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden border-t border-black/10 px-4 py-4 flex flex-col gap-3">
          {navLinks.map(({ to, label }) => (
            <Link
              key={to}
              to={to}
              smooth={true}
              duration={400}
              onClick={closeMenu}
              className="text-black hover:underline"
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Navbar;
