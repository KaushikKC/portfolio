import React from "react";
import { Link } from "react-scroll"; // Assuming you're using react-scroll for smooth scrolling
import me from "../images/Me.png";
import github from "../images/github.svg";
import linkedin from "../images/linkedin.svg";
import twitter from "../images/twitter.svg";
import medium from "../images/medium.svg";

function Hero({ handleResumeDownload }) {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-8"
    >
      {/* Avatar and Hero Text */}
      <div className="flex flex-col items-center">
        <img
          src={me}
          alt="avatar"
          className="w-32 h-32 sm:w-40 sm:h-40 mb-4 rounded-full" // Adjusted size for better visibility on larger screens
        />
        <h1 className="text-2xl sm:text-3xl">
          Hello! I Am <span className="text-[#7127BA]">Kaushik</span>
        </h1>
        <h2 className="text-3xl sm:text-4xl font-bold mt-2">
          Full-Stack Blockchain Developer
        </h2>
        <p className="mt-4 w-full sm:w-3/4 text-base sm:text-lg">
          Experienced full stack blockchain developer transitioning into a
          Developer Relations (DevRel) role, focused on bridging the gap between
          developers and cutting-edge Web3 technologies.
        </p>
      </div>

      {/* Buttons Section */}
      <div className="flex flex-col sm:flex-row space-x-0 sm:space-x-4 mt-6 sm:mt-8">
        <Link
          to="contact"
          smooth={true}
          className="border border-white text-white py-2 px-6 rounded transition-all duration-300 hover:bg-white hover:text-[#7127BA] hover:shadow-lg mb-4 sm:mb-0"
        >
          Get in Touch
        </Link>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/file/d/1kDfB90UWbGiTdFX4O--wVsUByNIYSxU5/view?usp=sharing"
          className="border border-white text-white py-2 px-6 rounded transition-all duration-300 hover:bg-white hover:text-[#7127BA] hover:shadow-lg"
        >
          Resume
        </a>
      </div>

      {/* Social Icons */}
      <div className="mt-6 sm:mt-8 flex flex-wrap justify-center space-x-4">
        <a
          href="https://github.com/KaushikKC"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={github}
            alt="GitHub"
            className="h-8 w-8 sm:h-10 sm:w-10 shadow-md"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/kaushik-k-36b871219/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={linkedin}
            alt="LinkedIn"
            className="h-8 w-8 sm:h-10 sm:w-10 shadow-md"
          />
        </a>
        <a
          href="https://x.com/0xkaushik_k"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={twitter}
            alt="Twitter"
            className="h-8 w-8 sm:h-10 sm:w-10 shadow-md"
          />
        </a>
        <a
          href="https://medium.com/@kccreations1704"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src={medium}
            alt="Medium"
            className="h-8 w-8 sm:h-10 sm:w-10 shadow-md"
          />
        </a>
      </div>
    </section>
  );
}

export default Hero;
