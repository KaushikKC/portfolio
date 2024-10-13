import React from "react";

const Navbar = () => {
  return (
    <header className="p-6">
      <nav className="flex justify-between items-center">
        <div className="text-4xl font-bold">🔗</div>
        <ul className="flex space-x-8 text-lg">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#lab">Lab</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
