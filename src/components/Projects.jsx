import React from "react";
import projects from "../data/Projects"; // Assuming you have projects data in a similar structure

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center mt-10 px-4 md:px-0"
    >
      <p className="text-4xl font-bold mt-2">Projects</p>
      <div className="flex flex-col items-center space-y-16 py-16 bg-black w-full">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative w-full max-w-4xl p-6 bg-[#331b58] rounded-2xl shadow-lg flex flex-col md:flex-row items-center text-center md:text-left"
          >
            {/* Gradient Circle */}
            <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 h-40 w-40 bg-gradient-radial from-[#764ba2] to-transparent rounded-full z-0"></div>

            {/* Content */}
            <div className="relative z-10 flex-1">
              <h3 className="text-sm font-bold text-[#9b6ef3]">
                Featured Project
              </h3>
              <h2 className="mt-2 text-2xl font-bold">{project.title}</h2>
              <p className="mt-4 mr-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Buttons */}
              <div className="mt-6 flex justify-center md:justify-start space-x-4">
                {project.demoUrl ? (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                  >
                    View Demo
                  </a>
                ) : (
                  <a
                    href={project.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                  >
                    View Code
                  </a>
                )}
              </div>
            </div>

            {/* Image (Centered) */}
            <div className="relative z-10 mt-8 md:mt-0 flex justify-center w-full md:w-auto">
              <img
                src={project.imageUrl}
                alt={`${project.title} Screenshot`}
                className="w-full max-w-xs rounded-lg h-[200px] object-cover" // added object-cover to maintain aspect ratio
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
