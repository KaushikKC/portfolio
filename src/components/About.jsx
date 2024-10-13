import React from "react";
import { Link } from "react-scroll"; // Importing react-scroll for smooth scrolling
import github from "../images/github.svg";
import reactjs from "../images/react.svg";
import nextjs from "../images/nextjs.svg";
import node from "../images/nodejs.svg";
import solidity from "../images/solidity.svg";
import mongodb from "../images/mongodb.svg";
import typescript from "../images/typescript.svg";
import tailwind from "../images/tailwind.svg";
import express from "../images/express.svg";
import rust from "../images/rust.svg";
import solana from "../images/solana.svg";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center space-y-16 py-12 sm:py-16 px-4 bg-black text-white overflow-x-hidden"
    >
      {/* About Section */}
      <div className="max-w-3xl text-left space-y-6">
        <h1 className="text-3xl sm:text-4xl font-bold text-center">
          Hey there!
        </h1>
        <p className="text-base sm:text-lg">
          I have been actively involved in the Web3 space, contributing to
          various blockchain projects as both a developer and community leader.
          I have expertise in developing full-stack applications using
          JavaScript, React, Solidity, and Web3.js. As part of Web3Chennai, I
          have organized over 5 meetups to foster a thriving blockchain
          community in India.
        </p>
        <p className="text-base sm:text-lg">
          I’m dedicated to driving innovation in the web3 space and continuously
          exploring new opportunities for collaboration and growth.
        </p>
      </div>

      {/* Skills Section */}
      <div className="max-w-5xl text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-8">
          {/* Individual skill icons */}
          <div className="flex flex-col items-center space-y-2">
            <img
              src={reactjs}
              alt="React"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <p>React</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img
              src={nextjs}
              alt="Next.js"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <p>Next.js</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img
              src={tailwind}
              alt="Tailwind CSS"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <p>Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img
              src={typescript}
              alt="TypeScript"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <p>TypeScript</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img
              src={github}
              alt="GitHub"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <p>GitHub</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img src={node} alt="Node" className="w-12 h-12 sm:w-16 sm:h-16" />
            <p>Node</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img
              src={express}
              alt="Express"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <p>Express</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img
              src={mongodb}
              alt="MongoDB"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <p>MongoDB</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img
              src={solidity}
              alt="Solidity"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <p>Solidity</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img src={rust} alt="Rust" className="w-12 h-12 sm:w-16 sm:h-16" />
            <p>Rust</p>
          </div>
          <div className="flex flex-col items-center space-y-2">
            <img
              src={solana}
              alt="Solana"
              className="w-12 h-12 sm:w-16 sm:h-16"
            />
            <p>Solana</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
