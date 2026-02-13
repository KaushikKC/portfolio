import React, { useState } from "react";
import projects from "../data/Projects";

const INITIAL_COUNT = 10;
const SHOW_MORE_STEP = 15;

const Projects = () => {
  const [displayCount, setDisplayCount] = useState(INITIAL_COUNT);
  const visibleProjects = projects.slice(0, displayCount);
  const hasMore = displayCount < projects.length;

  return (
    <div
      id="projects"
      className="max-w-prose mx-auto px-4 py-10 text-black border-t border-black/10"
    >
      <h2 className="text-2xl font-bold mb-2">Projects</h2>
      <p className="text-base text-black/70 mb-5">
        Building across DeFi, ZK, rollups & more.
      </p>

      <ul className="space-y-4 list-none pl-0">
        {visibleProjects.map((project) => (
          <li
            key={project.id}
            className="border-b border-black/10 pb-4 last:border-0"
          >
            <a
              href={project.demoUrl || project.codeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <span className="font-semibold text-black group-hover:underline">
                {project.title}
              </span>
              <span className="text-black/70"> — </span>
              <span className="text-black/80">{project.description}</span>
            </a>
          </li>
        ))}
      </ul>

      {hasMore && (
        <div className="mt-5">
          <button
            type="button"
            onClick={() =>
              setDisplayCount((c) =>
                Math.min(c + SHOW_MORE_STEP, projects.length),
              )
            }
            className="text-black underline"
          >
            Show more ({projects.length - displayCount} remaining)
          </button>
        </div>
      )}
    </div>
  );
};

export default Projects;
