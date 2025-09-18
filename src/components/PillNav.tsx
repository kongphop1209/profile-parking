"use client";

import React, { useEffect, useRef, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { gsap } from "gsap";
import Image from "next/image";

export type PillNavItem = {
  label: string;
  href: string; // section id like "home", "about"
  ariaLabel?: string;
};

export interface PillNavProps {
  logo: string;
  logoAlt?: string;
  items: PillNavItem[];
  activeHref?: string;
  className?: string;
  ease?: string;
  baseColor?: string;
  pillColor?: string;
  hoveredPillTextColor?: string;
  pillTextColor?: string;
  onMobileMenuClick?: () => void;
  initialLoadAnimation?: boolean;
}

const PillNav: React.FC<PillNavProps> = ({
  logo,
  logoAlt = "Logo",
  items,
  activeHref,
  className = "",
  ease = "power3.easeOut",
  baseColor = "#fff",
  pillColor = "#060010",
  hoveredPillTextColor = "#060010",
  pillTextColor,
  onMobileMenuClick,
  initialLoadAnimation = true,
}) => {
  const resolvedPillTextColor = pillTextColor ?? baseColor;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const circleRefs = useRef<Array<HTMLSpanElement | null>>([]);
  const tlRefs = useRef<Array<gsap.core.Timeline | null>>([]);
  const activeTweenRefs = useRef<Array<gsap.core.Tween | null>>([]);
  const logoImgRef = useRef<HTMLImageElement | null>(null);
  const logoTweenRef = useRef<gsap.core.Tween | null>(null);
  const hamburgerRef = useRef<HTMLButtonElement | null>(null);
  const mobileMenuRef = useRef<HTMLDivElement | null>(null);
  const navItemsRef = useRef<HTMLDivElement | null>(null);
  const logoRef = useRef<HTMLAnchorElement | null>(null);

  // Effect for layout & resize (re-runs if items change)
useEffect(() => {
  const layout = () => {
    circleRefs.current.forEach((circle) => {
      if (!circle?.parentElement) return;

      const pill = circle.parentElement as HTMLElement;
      const rect = pill.getBoundingClientRect();
      const { width: w, height: h } = rect;
      const R = ((w * w) / 4 + h * h) / (2 * h);
      const D = Math.ceil(2 * R) + 2;
      const delta =
        Math.ceil(R - Math.sqrt(Math.max(0, R * R - (w * w) / 4))) + 1;
      const originY = D - delta;

      circle.style.width = `${D}px`;
      circle.style.height = `${D}px`;
      circle.style.bottom = `-${delta}px`;

      gsap.set(circle, {
        xPercent: -50,
        scale: 0,
        transformOrigin: `50% ${originY}px`,
      });

      const label = pill.querySelector<HTMLElement>(".pill-label");
      const white = pill.querySelector<HTMLElement>(".pill-label-hover");

      if (label) gsap.set(label, { y: 0 });
      if (white) gsap.set(white, { y: h + 12, opacity: 0 });

      const index = circleRefs.current.indexOf(circle);
      if (index === -1) return;

      tlRefs.current[index]?.kill();
      const tl = gsap.timeline({ paused: true });

      tl.to(
        circle,
        { scale: 1.2, xPercent: -50, duration: 2, ease, overwrite: "auto" },
        0
      );

      if (label) {
        tl.to(
          label,
          { y: -(h + 8), duration: 2, ease, overwrite: "auto" },
          0
        );
      }

      if (white) {
        gsap.set(white, { y: Math.ceil(h + 100), opacity: 0 });
        tl.to(
          white,
          { y: 0, opacity: 1, duration: 2, ease, overwrite: "auto" },
          0
        );
      }

      tlRefs.current[index] = tl;
    });
  };

  layout();
  const onResize = () => layout();
  window.addEventListener("resize", onResize);

  if (document.fonts) {
    document.fonts.ready.then(layout).catch(() => {});
  }

  return () => window.removeEventListener("resize", onResize);
}, [items, ease]); // ✅ layout only re-runs if items/ease change

// Effect for initial load animation (runs ONCE)
useEffect(() => {
  if (initialLoadAnimation) {
    const logo = logoRef.current;
    const navItems = navItemsRef.current;

    if (logo) {
      gsap.set(logo, { scale: 0 });
      gsap.to(logo, { scale: 1, duration: 0.6, ease });
    }

    if (navItems) {
      gsap.set(navItems, { width: 0, overflow: "hidden" });
      gsap.to(navItems, { width: "auto", duration: 0.6, ease });
    }
  }
}, []); // ✅ empty deps → only once when mounted


  const handleEnter = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(tl.duration(), {
      duration: 0.3,
      ease,
      overwrite: "auto",
    });
  };

  const handleLeave = (i: number) => {
    const tl = tlRefs.current[i];
    if (!tl) return;
    activeTweenRefs.current[i]?.kill();
    activeTweenRefs.current[i] = tl.tweenTo(0, {
      duration: 0.2,
      ease,
      overwrite: "auto",
    });
  };

  const handleLogoEnter = () => {
    const img = logoImgRef.current;
    if (!img) return;
    logoTweenRef.current?.kill();
    gsap.set(img, { rotate: 0 });
    logoTweenRef.current = gsap.to(img, {
      rotate: 360,
      duration: 0.2,
      ease,
      overwrite: "auto",
    });
  };

  const toggleMobileMenu = () => {
    const newState = !isMobileMenuOpen;
    setIsMobileMenuOpen(newState);

    const menu = mobileMenuRef.current;

    if (menu) {
      if (newState) {
        gsap.set(menu, { visibility: "visible" });
        gsap.to(menu, { opacity: 1, y: 0, duration: 0.3, ease });
      } else {
        gsap.to(menu, {
          opacity: 0,
          y: 10,
          duration: 0.2,
          ease,
          onComplete: () => {
            gsap.set(menu, { visibility: "hidden" });
          },
        });
      }
    }

    onMobileMenuClick?.();
  };

  const cssVars = {
    ["--base"]: baseColor,
    ["--pill-bg"]: pillColor,
    ["--hover-text"]: hoveredPillTextColor,
    ["--pill-text"]: resolvedPillTextColor,
    ["--nav-h"]: "42px",
  } as React.CSSProperties;

  return (
    <div className="absolute top-[1em] z-[1000] w-full left-0 md:w-auto md:left-auto">
      <nav
        className={`w-full flex items-center justify-between ${className}`}
        aria-label="Primary"
        style={cssVars}
      >
        {/* Logo */}
        <a
          href="#home"
          aria-label="Home"
          onMouseEnter={handleLogoEnter}
          ref={logoRef}
          className="rounded-full p-2 inline-flex items-center justify-center overflow-hidden"
          style={{
            width: "var(--nav-h)",
            height: "var(--nav-h)",
            background: "var(--base, #000)",
          }}
        >
          <Image
  src={logo}
  alt={logoAlt}
  ref={logoImgRef}
  width={42} // or whatever size is appropriate
  height={42}
  className="w-full h-full object-cover block"
/>
        </a>

        {/* Nav Items */}
        <div
          ref={navItemsRef}
          className="relative items-center rounded-full hidden md:flex ml-2"
          style={{
            height: "var(--nav-h)",
            background: "var(--base, #000)",
          }}
        >
          <ul className="flex list-none m-0 p-[3px] h-full">
            {items.map((item, i) => {
              const isActive = activeHref === item.href;

              return (
                <li key={item.href} className="flex h-full">
                  <ScrollLink
                    to={item.href}
                    smooth={true}
                    duration={500}
                    offset={-80}
                    className={`relative overflow-hidden inline-flex items-center justify-center h-full no-underline rounded-full px-4 font-medium uppercase cursor-pointer ${
                      isActive ? "text-blue-500" : "text-white"
                    }`}
                    onMouseEnter={() => handleEnter(i)}
                    onMouseLeave={() => handleLeave(i)}
                  >
                    <span
                      className="pill-label relative z-[2]"
                      style={{ willChange: "transform" }}
                    >
                      {item.label}
                    </span>
                    {isActive && (
                      <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-blue-500" />
                    )}
                  </ScrollLink>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Mobile menu toggle */}
        <button
          ref={hamburgerRef}
          onClick={toggleMobileMenu}
          className="md:hidden text-white"
        >
          ☰
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        ref={mobileMenuRef}
        className="md:hidden absolute top-[3em] left-4 right-4 bg-black text-white rounded-lg shadow-lg p-4"
      >
        <ul className="flex flex-col gap-4">
          {items.map((item) => (
            <li key={item.href}>
              <ScrollLink
                to={item.href}
                smooth={true}
                duration={500}
                offset={-80}
                className="block cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </ScrollLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PillNav;
