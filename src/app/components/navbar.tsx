"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isClient, setIsClient] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    "home", 
    "about", 
    "skills", 
    "projects", 
    "experience", 
    "contact"
  ];

  useEffect(() => {
    setIsClient(true);

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Determine active section based on scroll position
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          
          // Check if section is in the middle 40% of the viewport
          if (
            top <= windowHeight * 0.6 && 
            bottom >= windowHeight * 0.4
          ) {
            setActiveSection(section);
            break;
          }
        }
      }

      setScrollPosition(scrollY);
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); 
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    handleResize(); 

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
      <nav className="fixed w-full top-0 z-50 p-6 bg-black flex flex-row">
        <div className="text-4xl font-bold text cursor-pointer">
          <span>PARKING</span>
        </div>
        <div className="w-full flex justify-end items-center px-5">
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
              isMobileMenuOpen
                ? "flex flex-col w-max gap-5 justify-center items-center p-8 transition-all duration-500 ease-in-out"
                : "hidden transition-all duration-500 ease-in-out"
            } lg:flex lg:flex-row border rounded-lg lg:bg-black lg:bg-opacity-95 lg:items-center lg:py-4 lg:px-10 space-x-8`}
            style={{
              top: isMobileMenuOpen ? "48px" : "auto",
            }}
          >
            {sections.map((section) => (
              <li key={section}>
                <Link
                  to={section}
                  smooth={true}
                  duration={500}
                  offset={-(window.innerHeight / 2) + (section === 'home' ? 60 : 
                           section === 'about' ? 70 : 
                           section === 'skills' ? 150 : 
                           section === 'projects' ? 100 : 
                           section === 'experience' ? 150 : 
                           section === 'contact' ? 100 : 0)}
                  className={`cursor-pointer transition  ${
                    activeSection === section 
                      ? 'text-white font-bold p-2.5 border rounded-lg' 
                      : 'hover:text-gray-400 p-2.5'
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>
      <button
        onClick={scrollToTop}
        className="fixed flex items-center justify-center right-12 pt-0 px-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-opacity duration-500"
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