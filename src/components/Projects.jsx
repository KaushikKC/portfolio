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

import React from "react";
import projects from "../data/Projects";
const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col items-center mt-10 px-4 md:px-0"
    >
      <p className="text-4xl font-bold mt-2">Projects</p>
      <div className="flex flex-col items-center space-y-16 py-16 bg-black w-full">
        {projects.map(project =>
          <div className="w-full max-w-4xl">
            <a
              href={project.demoUrl || project.codeUrl}
              className="relative block w-full bg-[#f2f8f9] rounded-2xl p-6 overflow-hidden group hover:cursor-pointer shadow-lg"
            >
              {/* Expanding circle background effect */}
              <div className="absolute z-0 -top-4 -right-4 w-8 h-8 bg-[#331b58] rounded-full scale-110 group-hover:scale-[110] transition-transform duration-500 ease-out origin-center" />

              {/* Go corner button */}
              <div className="absolute -top-2 -right-2 w-11 h-11 bg-[#331b58] rounded-full flex items-center justify-center overflow-hidden z-10">
                <div className="text-white  text-2xl">→</div>
              </div>

              {/* Content */}
              <div className="flex flex-col md:flex-row items-center text-center md:text-left px-3">
                <div className="relative z-[1] flex-1">
                  <h3 className="text-sm font-bold text-purple-600  group-hover:text-white transition-colors duration-300">
                    Featured Project
                  </h3>
                  <h2 className="mt-2 text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300">
                    {project.title}
                  </h2>
                  <p className="mt-4 mr-4 text-sm leading-relaxed text-gray-600 group-hover:text-white/80 transition-colors duration-300">
                    {project.description}
                  </p>

                  {/* Buttons */}
                  <div className="mt-6 flex justify-center md:justify-start space-x-4">
                    {project.demoUrl
                      ? <button className="px-4 py-2 bg-purple-600  text-white rounded-lg hover:bg-[#8b5ee3] transition">
                          View Demo
                        </button>
                      : <button className="px-4 py-2 bg-purple-600  text-white rounded-lg hover:bg-[#8b5ee3] transition">
                          View Code
                        </button>}
                  </div>
                </div>

                {/* Image */}
                <div className="relative z-[1] mt-8 md:mt-0 flex justify-center w-full md:w-auto">
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} Screenshot`}
                    className="w-full max-w-xs rounded-lg h-[200px] object-cover"
                  />
                </div>
              </div>
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
