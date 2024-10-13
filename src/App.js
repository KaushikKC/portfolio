import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Events from "./components/Events";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-black text-white min-h-screen font-poppins">
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Blogs />
      <Events />
      <Contact />
    </div>
  );
}

export default App;
