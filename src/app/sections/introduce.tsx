"use client";

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import { ArrowRight, Sparkles } from "lucide-react";

const Introduce = () => {
  return (
    <section
      id="home"
      className="relative flex items-center justify-center w-full min-h-screen px-6 "
    >

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative flex flex-col items-center text-center space-y-6 max-w-3xl text-white"
      >
        {/* Intro Label */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur">
          <Sparkles className="h-4 w-4 text-blue-300" />
          <span className="text-xs tracking-widest text-blue-200">
            HELLO, I’M
          </span>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] h-max py-3 bg-gradient-to-r from-blue-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
          Kongphop
        </h1>

        {/* Subtitle */}
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-200">
          Software Engineering Student
        </h2>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed text-base md:text-lg w-full">
          Passionate about crafting intuitive user experiences and building innovative web applications. My goal is to continuously grow and become the best version of myself in the world of technology. 🚀
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-100}
            className="group inline-flex cursor-pointer items-center justify-center rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Contact Me
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-150}
            className="inline-flex cursor-pointer items-center justify-center rounded-full border border-blue-400/60 px-6 py-3 text-sm font-semibold text-blue-200 transition hover:bg-blue-500 hover:text-white"
          >
            View Projects
          </Link>
        </div>

        {/* Tech badges */}
        <ul className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-blue-200/90">
          {["TypeScript", "React", "Next.js", "Mobile App Development", "Tailwind CSS"].map(
            (t) => (
              <li
                key={t}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
              >
                {t}
              </li>
            )
          )}
        </ul>
      </motion.div>
    </section>
  );
};

export default Introduce;
