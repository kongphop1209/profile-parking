"use client";

import React, { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import dynamic from "next/dynamic";

// Dynamically import Lottie to prevent SSR issues
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });
import animationData from "@/app/assets/animation_002.json";

// Section IDs to navigate
const SECTIONS = ["home", "about", "skills", "projects", "experience", "contact"];

const Navbar = () => {
  // Use state to manage client-side only rendering
  const [isClient, setIsClient] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    // Mark as client-side
    setIsClient(true);

    // Ensure the code only runs in the browser
    if (typeof window !== "undefined") {
      // Handle scroll events to determine the active section
      const handleScroll = () => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        SECTIONS.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const { top, bottom } = element.getBoundingClientRect();
            if (top <= windowHeight * 0.6 && bottom >= windowHeight * 0.4) {
              setActiveSection(section);
            }
          }
        });

        setScrollPosition(scrollY);
      };

      // Handle window resizing to toggle mobile view
      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024);
      };

      // Add event listeners
      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      // Initial checks
      handleResize();

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []); // The empty dependency array ensures this runs only once after the component mounts

  // Scroll to top functionality
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Prevent rendering of dynamic content on server
  if (!isClient) {
    return (
      <nav className="fixed w-full top-0 z-50 p-6 bg-black flex justify-between items-center shadow-md">
        <div className="text-4xl flex items-center font-bold cursor-pointer">
          <span className="text-white ml-2">PARKING</span>
        </div>
      </nav>
    );
  }

  const buttonPosition = Math.min(scrollPosition / 2, 100);

  return (
    <div>
      {/* Navbar */}
      <nav className="fixed w-full top-0 z-50 p-6 bg-black flex justify-between items-center shadow-md">
        {/* Logo Section */}
        <div className="text-4xl flex items-center font-bold cursor-pointer">
          <Lottie animationData={animationData} loop={true} className="w-12 h-12" />
          <span className="text-white ml-2">PARKING</span>
        </div>

        {/* Mobile Menu Button */}
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

        {/* Navigation Links */}
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
              <ScrollLink
                to={section}
                smooth={true}
                duration={500}
                offset={-80} // Offset to adjust for the fixed navbar
                className={`cursor-pointer transition ${
                  activeSection === section
                    ? "text-white font-bold border-b-2 border-blue-500"
                    : "text-gray-400 hover:text-white"
                }`}
                onClick={() => isMobile && setIsMobileMenuOpen(false)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Scroll to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed right-12 px-4 py-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-opacity duration-500"
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