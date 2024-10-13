import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaMedium } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-16 flex flex-col items-center px-4 bg-[#251C31]"
    >
      <h2 className="text-4xl font-bold text-white mb-6 text-center">
        Get in Touch
      </h2>
      <p className="text-lg text-gray-300 text-center max-w-2xl mb-8">
        I’m currently open to new opportunities, collaborations, or just to chat
        about blockchain, development, or anything tech-related! Feel free to
        reach out via email or connect with me on my social media.
      </p>

      {/* Social Icons */}
      <div className="flex flex-wrap justify-center space-x-8 mb-8">
        <a
          href="https://github.com/KaushikKC"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-purple-400 transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/kaushik-k-36b871219/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-purple-400 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://x.com/Kaushikk1704"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-purple-400 transition"
        >
          <FaTwitter />
        </a>
        <a
          href="https://medium.com/@kccreations1704"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white text-3xl hover:text-purple-400 transition"
        >
          <FaMedium />
        </a>
      </div>

      {/* Email */}
      <a
        href="mailto:kccreations1704@gmail.com"
        className="text-lg text-purple-400 border border-purple-400 py-2 px-6 rounded-lg hover:bg-purple-600 hover:text-white transition"
      >
        Email Me
      </a>
    </section>
  );
};

export default Contact;
