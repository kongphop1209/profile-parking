"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import animationData from "@/app/assets/animation_002.json";

const SECTIONS = ["home", "about", "skills", "projects", "experience", "contact"];

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Ensure this runs only in the browser
    if (typeof window === "undefined") return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Determine active section based on scroll position
      for (const section of SECTIONS) {
        const element = document.getElementById(section);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          if (top <= windowHeight * 0.6 && bottom >= windowHeight * 0.4) {
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
  }, []); // No dynamic dependency here

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const buttonPosition = Math.min(scrollPosition / 2, 100);

  return (
    <div>
      <nav className="fixed w-full top-0 z-50 p-6 bg-black flex justify-between items-center">
        <div className="text-4xl flex items-center font-bold cursor-pointer">
          <Lottie animationData={animationData} loop={true} className="w-16 h-16" />
          <span className="text-white">PARKING</span>
        </div>

        {isMobile && (
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="block lg:hidden text-white"
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

        <ul
          className={`${
            isMobile
              ? `absolute top-16 right-4 bg-black text-white w-48 flex flex-col gap-4 p-4 rounded-lg shadow-lg transition-all duration-300 ${
                  isMobileMenuOpen ? "block" : "hidden"
                }`
              : "flex flex-row gap-6 items-center"
          }`}
        >
          {SECTIONS.map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={-100}
                className={`cursor-pointer transition ${
                  activeSection === section
                    ? "text-white font-bold border-b-2 border-blue-500"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => isMobile && setIsMobileMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <button
        onClick={scrollToTop}
        className="fixed lg:text-2xl text-md right-12 px-3 py-1 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-opacity duration-500"
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
