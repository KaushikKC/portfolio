import React from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GitHubActivity from "./components/GitHubActivity";
import Projects from "./components/Projects";
import About from "./components/About";
import Blogs from "./components/Blogs";
import Events from "./components/Events";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="bg-white text-black min-h-screen font-sans antialiased">
      <Navbar />
      <Hero />
      <GitHubActivity />
      {/* <About /> */}
      <Projects />
      <Blogs />
      <Events />
      <Contact />
    </div>
  );
}

export default App;
