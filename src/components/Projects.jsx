// import React from "react";
// import projects from "../data/Projects"; // Assuming you have projects data in a similar structure

// const Projects = ({ project }) => {
//   return (
// <div
//   id="projects"
//   className="flex flex-col items-center mt-10 px-4 md:px-0"
// >
//   <p className="text-4xl font-bold mt-2">Projects</p>
//   <div className="flex flex-col items-center space-y-16 py-16 bg-black w-full">
//     {projects.map(project =>
//           <div
//             key={project.id}
//             className="relative w-full max-w-4xl p-6 bg-[#331b58] rounded-2xl shadow-lg flex flex-col md:flex-row items-center text-center md:text-left"
//           >
//             {/* Gradient Circle */}
//             <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 h-40 w-40 bg-gradient-radial from-[#764ba2] to-transparent rounded-full z-0" />

//             {/* Content */}
//             <div className="relative z-10 flex-1">
//               <h3 className="text-sm font-bold text-[#9b6ef3]">
//                 Featured Project
//               </h3>
//               <h2 className="mt-2 text-2xl font-bold">
//                 {project.title}
//               </h2>
//               <p className="mt-4 mr-4 text-sm leading-relaxed">
//                 {project.description}
//               </p>

//               {/* Buttons */}
//               <div className="mt-6 flex justify-center md:justify-start space-x-4">
//                 {project.demoUrl
//                   ? <a
//                       href={project.demoUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
//                     >
//                       View Demo
//                     </a>
//                   : <a
//                       href={project.codeUrl}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
//                     >
//                       View Code
//                     </a>}
//               </div>
//             </div>

//             {/* Image (Centered) */}
//             <div className="relative z-10 mt-8 md:mt-0 flex justify-center w-full md:w-auto">
//               <img
//                 src={project.imageUrl}
//                 alt={`${project.title} Screenshot`}
//                 className="w-full max-w-xs rounded-lg h-[200px] object-cover" // added object-cover to maintain aspect ratio
//               />
//             </div>
//           </div>
//         )}
//       </div>
//     </div>

//   );
// };

// export default Projects;

import React, { useState } from "react";
import projects from "../data/Projects";

const INITIAL_COUNT = 8;
const SHOW_MORE_COUNT = 20;

const Projects = () => {
  const [displayCount, setDisplayCount] = useState(INITIAL_COUNT);
  const visibleProjects = projects.slice(0, displayCount);
  const hasMore = displayCount < projects.length;
  const canShowMore =
    displayCount < SHOW_MORE_COUNT && projects.length > INITIAL_COUNT;
  const canViewAll =
    displayCount >= SHOW_MORE_COUNT && displayCount < projects.length;

  const handleShowMore = () => {
    if (displayCount < SHOW_MORE_COUNT) {
      setDisplayCount(SHOW_MORE_COUNT);
    }
  };

  const handleViewAll = () => {
    setDisplayCount(projects.length);
  };

  return (
    <div
      id="projects"
      className="flex flex-col items-center w-full max-w-[1400px] mx-auto mt-16 md:mt-20 px-4 md:px-6"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-2 w-full text-center">
        Projects
      </h2>
      <p className="text-gray-500 text-sm md:text-base mb-10 md:mb-12 w-full text-center max-w-xl mx-auto">
        Building across DeFi, ZK, rollups &amp; more
      </p>

      <div className="flex flex-col items-stretch w-full py-12 md:py-16 bg-black rounded-2xl md:rounded-3xl px-4 md:px-6">
        {/* Horizontal scroll container */}
        <div className="overflow-x-auto overflow-y-hidden scroll-smooth pb-2 -mx-1 projects-scroll">
          <div className="flex gap-6 md:gap-8 flex-nowrap min-h-0 pr-2 md:pr-4">
            {visibleProjects.map((project) => (
              <div
                key={project.id}
                className="flex-shrink-0 w-[280px] md:w-[300px]"
              >
                <a
                  href={project.demoUrl || project.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative block w-full h-full min-h-[260px] bg-[#f2f8f9] rounded-xl md:rounded-2xl p-5 overflow-hidden group hover:cursor-pointer shadow-lg"
                >
                  {/* Expanding circle background effect - exact same as Blogs/Events */}
                  <div className="absolute z-0 -top-4 -right-4 w-8 h-8 bg-[#331b58] rounded-full scale-110 group-hover:scale-[110] transition-transform duration-700 ease-in-out origin-center" />
                  {/* Go corner button */}
                  <div className="absolute -top-2 -right-2 w-11 h-11 bg-[#331b58] rounded-full flex items-center justify-center overflow-hidden z-10">
                    <div className="text-white text-2xl">→</div>
                  </div>

                  <div className="relative z-[1] flex flex-col min-h-full text-left">
                    {project.imageUrl && (
                      <div className="rounded-lg overflow-hidden h-20 mb-3 flex-shrink-0">
                        <img
                          src={project.imageUrl}
                          alt=""
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    <span className="text-[11px] uppercase tracking-wider font-bold text-purple-600 group-hover:text-white transition-colors duration-300">
                      Featured Project
                    </span>
                    <h3 className="mt-1.5 text-base md:text-lg font-bold text-gray-800 group-hover:text-white transition-colors duration-300 leading-tight line-clamp-2">
                      {project.title}
                    </h3>
                    <p className="mt-2.5 text-xs leading-relaxed text-gray-600 group-hover:text-white/80 transition-colors duration-300 line-clamp-3 min-h-[3.75rem]">
                      {project.description}
                    </p>
                    <div className="mt-4 flex-shrink-0">
                      {project.demoUrl ? (
                        <span className="inline-block px-3.5 py-2 text-xs font-semibold bg-purple-600 text-white rounded-lg hover:bg-[#7c3aed] transition-colors">
                          View Demo
                        </span>
                      ) : (
                        <span className="inline-block px-3.5 py-2 text-xs font-semibold bg-purple-600 text-white rounded-lg hover:bg-[#7c3aed] transition-colors">
                          View Code
                        </span>
                      )}
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>

        {hasMore && (
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 pt-8 md:pt-10">
            {canShowMore && (
              <button
                type="button"
                onClick={handleShowMore}
                className="w-full sm:w-auto px-6 py-3 bg-[#331b58] text-white rounded-xl font-medium hover:bg-[#4a2480] transition shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                Show more projects
              </button>
            )}
            {canViewAll && displayCount >= SHOW_MORE_COUNT && (
              <button
                type="button"
                onClick={handleViewAll}
                className="w-full sm:w-auto px-6 py-3 bg-[#331b58]/90 text-white rounded-xl font-medium hover:bg-[#4a2480] transition border border-[#331b58] focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black"
              >
                View all ({projects.length} projects)
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
