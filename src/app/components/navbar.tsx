"use client";

import React, { useEffect, useState } from "react";
import PillNav from "@/components/PillNav";

const Navbar = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);

      const sections = ["home", "about", "skills", "projects", "contact"];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom > 80) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full flex justify-center pt-6 z-50 fixed top-0">
      <PillNav
        logo="/react.png"
        logoAlt="Parking Logo"
        items={[
          { label: "Home", href: "home" },
          { label: "About", href: "about" },
          { label: "Skills", href: "skills" },
          { label: "Projects", href: "projects" },
          { label: "Contact", href: "contact" },
        ]}
        activeHref={activeSection}
        ease="power2.easeOut"
        baseColor="#1a1a1a"
        pillColor="#ffffff"
        hoveredPillTextColor="#1a1a1a"
        pillTextColor="#1a1a1a"
        className={`shadow-lg rounded-full px-6 py-2 cursor-pointer
                   bg-white/10 backdrop-blur-md border border-white/20
                   transition-all duration-500 hover:shadow-xl flex flex-row items-center
                   ${scrollPosition > 0 ? "scale-95" : "scale-100"}`}
      />
    </div>
  );
};

export default Navbar;
