"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // Check for mobile view
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); // Check initial screen size

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
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
        <div className="w-full flex justify-end items-center px-5 ">
          {/* Mobile menu toggle button */}
          {isMobile && (
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="block lg:hidden p-2"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          )}
          {/* Navbar menu */}
          <ul
            className={`${
              isMobile ? "absolute top-full right-10 w-full bg-black" : "flex "
            } ${
              isMobileMenuOpen ? "flex flex-col w-max gap-5  justify-center items-center p-8 transition-all duration-500 ease-in-out " : "hidden transition-all duration-500 ease-in-out"
            } lg:flex lg:flex-row border rounded-lg lg:space-x-10 lg:bg-black lg:bg-opacity-95 lg:items-center lg:py-4 lg:px-10 `}
            style={{
              top: isMobileMenuOpen ? '48px' : 'auto', 
            }}
          >
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
                offset={-(window.innerHeight / 2) + 150}
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
