import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <header className="p-6 bg-[#251C31]">
      <nav className="flex items-center justify-between">
        <div className="hidden md:block text-4xl font-bold">🔗</div>
        <div className="hidden md:flex space-x-8 text-lg flex-1 justify-center">
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Home
          </Link>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            About
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Projects
          </Link>
          <Link
            to="blogs"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Blogs
          </Link>
          <Link
            to="events"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Events
          </Link>
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="cursor-pointer"
          >
            Contact
          </Link>
        </div>
      </nav>
      <div className="md:hidden flex flex-col items-center space-y-4 mt-4 text-lg">
        <div className=" text-4xl font-bold">🔗</div>

        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          About
        </Link>
        <Link
          to="projects"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Projects
        </Link>
        <Link
          to="blogs"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Blogs
        </Link>
        <Link
          to="events"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Events
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          className="cursor-pointer"
        >
          Contact
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
