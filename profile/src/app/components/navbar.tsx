import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black w-screen z-50">
      <div className="w-full">
        <ul className="flex flex-row justify-end items-center space-x-10 text-white py-4 px-10">
          <li>
            <a href="#home" className="hover:text-gray-400 transition">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-gray-400 transition">About Me</a>
          </li>
          <li>
            <a href="#skills" className="hover:text-gray-400 transition">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400 transition">Projects</a>
          </li>
          <li>
            <a href="#experience" className="hover:text-gray-400 transition">Experience</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400 transition">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
