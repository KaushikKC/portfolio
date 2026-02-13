import React from "react";
import blogs from "../data/Blogs";

const Blogs = () => {
  return (
    <div
      id="blogs"
      className="max-w-prose mx-auto px-4 py-10 text-black border-t border-black/10"
    >
      <h2 className="text-2xl font-bold mb-5">Blogs</h2>
      <ul className="space-y-4 list-none pl-0">
        {blogs.map((blog) => (
          <li
            key={blog.id}
            className="border-b border-black/10 pb-4 last:border-0"
          >
            <a
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <span className="font-semibold text-black group-hover:underline">
                {blog.title}
              </span>
              <span className="text-black/60 text-sm block mt-1">
                {blog.date}
              </span>
              <span className="text-black/80 text-sm block mt-1">
                {blog.description}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
