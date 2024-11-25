"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isClient) return null;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0, 
      behavior: "smooth", 
    });
  };
  const buttonPosition = Math.min(scrollPosition / 2, 100);

  return (
    <div>
      <nav className="fixed w-full top-11 z-50">
        <div className="w-full flex justify-end">
          <ul className="flex flex-row bg-black border rounded-lg items-center space-x-10 py-4 px-10 me-5">
            <li>
              <Link
                to="home"
                smooth={true}
                duration={500}
                offset={-(window.innerHeight / 2) + 60}
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
                offset={-(window.innerHeight / 2) + 70}
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
                offset={-(window.innerHeight / 2) + 150}
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
                offset={-(window.innerHeight / 2) + 100}
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
                offset={-(window.innerHeight / 2) + 100}
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
                offset={-(window.innerHeight / 2) + 100}
                className="cursor-pointer hover:text-gray-400 transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <button
        onClick={scrollToTop} 
        className="fixed right-10 p-4 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-opacity duration-500"
        style={{
          bottom: `${Math.max(10, 100 - buttonPosition)}px`,
          opacity: scrollPosition > 200 ? 1 : 0,
          transition: "bottom 0.3s ease, opacity 0.5s ease",
        }}
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
};

export default Navbar;
