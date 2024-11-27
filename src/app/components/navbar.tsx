"use client";

import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";
import Lottie from "lottie-react";
import animationData from "@/app/assets/animation_002.json";
import MenuIcon from '@mui/icons-material/Menu'; 

const Navbar = () => {
  const [isClient, setIsClient] = useState(false); // to check if it's client-side
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Only run in the client
  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
    }
  }, []);

  useEffect(() => {
    if (isClient) {
      const handleScroll = () => {
        setScrollPosition(window.scrollY);

        // Instead of using document.getElementById, rely on scroll position
        const sections = ["home", "about", "skills", "projects", "experience", "contact"];
        const windowHeight = window.innerHeight;

        // Use scroll position to determine active section
        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const { top, bottom } = element.getBoundingClientRect();
            if (top <= windowHeight * 0.6 && bottom >= windowHeight * 0.4) {
              setActiveSection(section);
            }
          }
        });
      };

      const handleResize = () => {
        setIsMobile(window.innerWidth < 1024); // Check if screen size is mobile
      };

      window.addEventListener("scroll", handleScroll);
      window.addEventListener("resize", handleResize);

      handleResize(); // Initial resize check

      return () => {
        window.removeEventListener("scroll", handleScroll);
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [isClient]);

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
            <MenuIcon className="w-6 h-6" />
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
          {["home", "about", "skills", "projects", "experience", "contact"].map((section) => (
            <li key={section}>
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={-(window.innerHeight / 2) + 
                         (section === "home"
                           ? 70
                           : section === "about"
                           ? 300
                           : section === "skills"
                           ? 200
                           : section === "projects"
                           ? 150
                           : section === "experience"
                           ? 150
                           : section === "contact"
                           ? 100
                           : 0)}
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
