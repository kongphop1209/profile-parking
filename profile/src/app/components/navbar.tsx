import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-11 z-50">
      <div className="w-full flex justify-end">
        <ul className=" flex flex-row bg-black border rounded-lg items-center space-x-10 py-4 px-10 me-5">
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
