import React from "react";
import blogs from "../data/Blogs"; // Assuming you have blogs data in a similar structure to projects

const Blogs = () => {
  return (
    <div id="blogs" className="flex flex-col items-center mt-10 px-4 md:px-0">
      <p className="text-4xl font-bold mt-2">Blogs</p>
      <div className="flex flex-col items-center space-y-16 py-16 bg-black w-full">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="relative w-full max-w-4xl p-6 bg-[#331b58] rounded-2xl shadow-lg flex flex-col md:flex-row items-center text-center md:text-left"
          >
            {/* Content */}
            <div className="relative z-10 flex-1">
              <h3 className="text-sm font-bold text-[#9b6ef3]">
                Featured Blog
              </h3>
              <h2 className="mt-2 text-2xl font-bold">{blog.title}</h2>
              <p className="mt-4 text-sm leading-relaxed">{blog.description}</p>

              {/* Buttons */}
              <div className="mt-6 flex justify-center md:justify-start space-x-4">
                <a
                  href={blog.url}
                  className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
