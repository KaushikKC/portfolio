import React from "react";
// import { Link } from "react-scroll";
import me from "../images/Me.png";

function Hero() {
  return (
    <section
      id="home"
      className="max-w-prose mx-auto px-4 py-10 md:py-14 text-black"
    >
      <div className="flex flex-col items-start">
        <img
          src={me}
          alt="Kaushik"
          className="w-24 h-24 rounded-full mb-6 object-cover"
        />
        <h1 className="text-3xl md:text-4xl font-bold">Kaushik</h1>
        <p className="mt-2 text-xl text-black/80">
          Full-Stack Blockchain Developer
        </p>
        <p className="mt-4 text-base leading-relaxed max-w-prose">
          Blockchain Protocol Engineer building high-performance on-chain
          systems and decentralized financial infrastructure. Currently
          exploring AI-integrated crypto systems and privacy-preserving
          architectures.
        </p>

        {/* <div className="mt-6 flex flex-wrap gap-4">
          <Link to="contact" smooth={true} className="text-black underline">
            Get in Touch
          </Link>
          <a
            href="https://drive.google.com/file/d/1kDfB90UWbGiTdFX4O--wVsUByNIYSxU5/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline"
          >
            Resume
          </a>
        </div> */}

        <div className="mt-6 flex flex-wrap gap-4 text-sm">
          <a
            href="https://github.com/KaushikKC"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/kaushik-k-36b871219/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/0xkaushik_k"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline"
          >
            X / Twitter
          </a>
          <a
            href="https://medium.com/@kccreations1704"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black underline"
          >
            Medium
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
