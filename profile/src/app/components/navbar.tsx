"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Link = dynamic(() => import("react-scroll").then((mod) => mod.Link), { ssr: false });

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) return null; 

  return (
    <nav className="fixed w-full top-11 z-50">
      <div className="w-full flex justify-end">
        <ul className="flex flex-row bg-black border rounded-lg items-center space-x-10 py-4 px-10 me-5">
          <li>
            <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-(window.innerHeight / 2) + 60}  // Adjusted offset to move up
              className="cursor-pointer hover:text-gray-400 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-(window.innerHeight / 2) + 60}  // Adjusted offset to move up
              className="cursor-pointer hover:text-gray-400 transition"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-(window.innerHeight / 2) + 100}  // Adjusted offset to move up
              className="cursor-pointer hover:text-gray-400 transition"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-(window.innerHeight / 2) + 60}  // Adjusted offset to move up
              className="cursor-pointer hover:text-gray-400 transition"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              smooth={true}
              duration={500}
              offset={-(window.innerHeight / 2) + 60}  // Adjusted offset to move up
              className="cursor-pointer hover:text-gray-400 transition"
            >
              Experience
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-(window.innerHeight / 2) + 60}  // Adjusted offset to move up
              className="cursor-pointer hover:text-gray-400 transition"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
