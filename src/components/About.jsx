import React from "react";

const skills = [
  "React",
  "Next.js",
  "Tailwind CSS",
  "TypeScript",
  "Node",
  "Express",
  "MongoDB",
  "Solidity",
  "Rust",
  "Solana",
  "GitHub",
];

const About = () => {
  return (
    <div
      id="about"
      className="max-w-prose mx-auto px-4 py-10 text-black border-t border-black/10"
    >
      <h2 className="text-2xl font-bold mb-4">About</h2>
      <p className="text-base leading-relaxed mb-4">
        I'm a full-stack blockchain developer transitioning into Developer
        Relations with a solid foundation in blockchain protocols like Ethereum,
        Solana, and Aptos. I've led community-building initiatives like "Dine
        with Devs," which brings Web3 developers together for collaboration and
        learning. My experience spans TypeScript, React, and Solidity, where
        I've created developer-centric content, technical documentation, and
        practical guides.
      </p>
      <p className="text-base leading-relaxed mb-6">
        I'm passionate about bridging technical concepts and community
        engagement to drive adoption and education in the Web3 space.
      </p>
      <p className="text-base">
        <span className="font-semibold">Skills:</span> {skills.join(", ")}.
      </p>
    </div>
  );
};

export default About;
