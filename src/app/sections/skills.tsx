"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaTools,
  FaUsers,
  FaLightbulb,
  FaBrain,
  FaClock,
  FaSync,
  FaJava,
  FaPython,
  FaDatabase,
  FaGitAlt,
  FaHtml5,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiFirebase,
  SiPostgresql,
  SiMongodb,
  SiFigma,
  SiVisualstudiocode,
  SiPostman,
  SiGo,
  SiFlutter,
  SiDart,
} from "react-icons/si";
import { ChevronLeft, ChevronRight } from "lucide-react";
import AnimatedContent from "@/components/AnimatedContent";

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend Tools",
      icon: <FaReact className="text-blue-400" />,
      skills: [
        { icon: <FaReact className="text-blue-400" />, name: "React.js" },
        { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
        {
          icon: <SiTypescript className="text-blue-500" />,
          name: "TypeScript",
        },
        {
          icon: <SiTailwindcss className="text-teal-400" />,
          name: "Tailwind CSS",
        },
        { icon: <SiFlutter className="text-sky-400" />, name: "Flutter" },
        { icon: <SiDart className="text-blue-400" />, name: "Dart" },
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML & CSS" },
      ],
    },
    {
      title: "Backend Tools",
      icon: <FaNodeJs className="text-green-400" />,
      skills: [
        { icon: <FaNodeJs className="text-green-400" />, name: "Node.js" },
        { icon: <SiExpress className="text-green-600" />, name: "Express.js" },
        { icon: <SiGo className="text-cyan-400" />, name: "Go (Echo, gRPC)" },
        {
          icon: <FaJava className="text-[#E76F00]" />,
          name: "Java (Spring WebFlux)",
        },
        {
          icon: <FaPython className="text-yellow-400" />,
          name: "Python (FastAPI, NLP)",
        },
        {
          icon: <SiPostgresql className="text-[#336791]" />,
          name: "PostgreSQL",
        },
        { icon: <SiMongodb className="text-[#4FAA41]" />, name: "MongoDB" },
        { icon: <FaDatabase className="text-gray-400" />, name: "SQL" },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: <FaDocker className="text-blue-400" />,
      skills: [
        { icon: <FaDocker className="text-blue-400" />, name: "Docker" },
        {
          icon: <SiFirebase className="text-yellow-400" />,
          name: "Firebase (Auth, Firestore)",
        },
        { icon: <FaTools className="text-gray-400" />, name: "System Design" },
      ],
    },
    {
      title: "Other Tools",
      icon: <FaTools className="text-gray-300" />,
      skills: [
        { icon: <FaGitAlt className="text-red-500" />, name: "Git & GitHub" },
        { icon: <SiFigma className="text-pink-500" />, name: "Figma" },
        {
          icon: <SiVisualstudiocode className="text-blue-600" />,
          name: "VS Code",
        },
        { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
      ],
    },
    {
      title: "Soft Skills",
      icon: <FaUsers className="text-purple-400" />,
      skills: [
        {
          icon: <FaUsers className="text-purple-400" />,
          name: "Team Collaboration",
        },
        {
          icon: <FaLightbulb className="text-yellow-400" />,
          name: "Problem-Solving",
        },
        {
          icon: <FaBrain className="text-pink-400" />,
          name: "Critical Thinking",
        },
        {
          icon: <FaClock className="text-blue-400" />,
          name: "Time Management",
        },
        { icon: <FaSync className="text-green-400" />, name: "Adaptability" },
      ],
    },
  ];

  const [index, setIndex] = useState(0);
  const visibleCount = 3;

  const next = () => {
    setIndex((prev) =>
      prev + visibleCount >= skillsData.length ? 0 : prev + visibleCount
    );
  };

  const prev = () => {
    setIndex((prev) =>
      prev - visibleCount < 0
        ? Math.max(0, skillsData.length - visibleCount)
        : prev - visibleCount
    );
  };

  const visibleItems = skillsData.slice(index, index + visibleCount);

  return (
    <section
      id="skills"
      className="w-full py-20 flex flex-col items-center text-white relative overflow-hidden"
    >
      <AnimatedContent
        distance={100}
        direction="vertical"
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.3}
        animateOpacity
        scale={1.05}
        threshold={0.3}
      >
        <h2 className="text-5xl font-extrabold mb-14 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-center">
          <span className="text-transparent">Skills</span> 💻
        </h2>
      </AnimatedContent>

      {/* 🔹 Container Arrow + Carousel */}
      <div className="relative w-11/12 md:w-3/4 border border-gray-700 bg-gray-900/40 rounded-3xl backdrop-blur-md shadow-2xl py-10 px-8 flex flex-col items-center">
        {/* 🔸 Arrow Buttons */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white p-3 rounded-full z-10 border border-gray-600 transition"
        >
          <ChevronLeft size={26} />
        </button>

        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-gray-800/80 hover:bg-gray-700 text-white p-3 rounded-full z-10 border border-gray-600 transition"
        >
          <ChevronRight size={26} />
        </button>

        {/* 🔸 Carousel Section */}
        <div className="relative w-full overflow-hidden p-10">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {visibleItems.map((category, idx) => (
                <motion.div
                  key={idx}
                  className="flex flex-col items-start border border-gray-700 bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Header */}
                  <div className="flex flex-col items-center w-full mb-4">
                    <div className="text-5xl mb-3">{category.icon}</div>
                    <h3 className="text-2xl font-semibold text-center w-full">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills */}
                  <ul className="space-y-3 text-lg w-full">
                    {category.skills.map((skill, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-3 hover:text-blue-400 transition"
                      >
                        <span className="text-xl">{skill.icon}</span>
                        {skill.name}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* 🔸 Dots */}
        <div className="flex gap-2 mt-6">
          {Array.from({
            length: Math.ceil(skillsData.length / visibleCount),
          }).map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i * visibleCount)}
              className={`w-3 h-3 rounded-full transition ${
                i === Math.floor(index / visibleCount)
                  ? "bg-blue-500"
                  : "bg-gray-600 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
