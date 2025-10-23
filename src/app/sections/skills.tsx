"use client";

import React, { useState } from "react";
import {
  FaReact,
  FaHtml5,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaLinux,
  FaUsers,
  FaLightbulb,
  FaBrain,
  FaClock,
  FaSync,
  FaPlug,
  FaTools,
  FaJava,
  FaPython,
  FaDocker,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFigma,
  SiVisualstudiocode,
  SiPostman,
  SiFirebase,
  SiPostgresql,
  SiGo,
  SiFlutter,
  SiDart,
  SiKubernetes,
  SiApachekafka,
} from "react-icons/si";
import AnimatedContent from "@/components/AnimatedContent";

const Skills = () => {
  // 🟢 Global expand toggle for all containers
  const [expanded, setExpanded] = useState(false);

  const skillsData = [
    {
      title: "Frontend Tools",
      icon: <FaReact className="text-blue-400" />,
      skills: [
        { icon: <FaReact className="text-blue-400" />, name: "React.js" },
        { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
        { icon: <SiTypescript className="text-blue-500" />, name: "TypeScript" },
        { icon: <SiTailwindcss className="text-teal-400" />, name: "Tailwind CSS" },
        { icon: <SiFlutter className="text-sky-400" />, name: "Flutter" },
        { icon: <SiDart className="text-blue-400" />, name: "Dart" },
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML & CSS" },
      ],
    },
    {
      title: "Backend Tools",
      icon: <FaNodeJs className="text-green-500" />,
      skills: [
        { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
        { icon: <SiExpress className="text-green-600" />, name: "Express.js" },
        { icon: <SiGo className="text-cyan-400" />, name: "Go (Echo, gRPC)" },
        { icon: <FaJava className="text-red-600" />, name: "Java (Spring WebFlux)" },
        { icon: <FaPython className="text-yellow-400" />, name: "Python (FastAPI, NLP)" },
        { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
        { icon: <SiPostgresql className="text-blue-500" />, name: "PostgreSQL" },
        { icon: <FaDatabase className="text-gray-400" />, name: "SQL" },
        { icon: <FaPlug className="text-purple-400" />, name: "API Integration" },
      ],
    },
    {
      title: "DevOps & Cloud",
      icon: <FaDocker className="text-blue-400" />,
      skills: [
        { icon: <FaDocker className="text-blue-400" />, name: "Docker" },
        { icon: <SiKubernetes className="text-blue-500" />, name: "Kubernetes" },
        { icon: <SiApachekafka className="text-orange-600" />, name: "Apache Kafka" },
        { icon: <SiFirebase className="text-yellow-400" />, name: "Firebase (Auth, Firestore)" },
        { icon: <FaLinux className="text-blue-300" />, name: "Linux" },
        { icon: <FaTools className="text-gray-400" />, name: "System Design" },
      ],
    },
    {
      title: "Other Tools",
      icon: <FaTools className="text-gray-500" />,
      skills: [
        { icon: <FaGitAlt className="text-red-500" />, name: "Git & GitHub" },
        { icon: <SiFigma className="text-pink-500" />, name: "Figma" },
        { icon: <SiVisualstudiocode className="text-blue-600" />, name: "VS Code" },
        { icon: <SiPostman className="text-orange-500" />, name: "Postman" },
        { icon: <FaLightbulb className="text-yellow-400" />, name: "NLP & AI Tools" },
      ],
    },
    {
      title: "Soft Skills",
      icon: <FaUsers className="text-purple-500" />,
      skills: [
        { icon: <FaUsers className="text-purple-400" />, name: "Team Collaboration" },
        { icon: <FaLightbulb className="text-yellow-400" />, name: "Problem-Solving" },
        { icon: <FaBrain className="text-pink-400" />, name: "Critical Thinking" },
        { icon: <FaClock className="text-blue-400" />, name: "Time Management" },
        { icon: <FaSync className="text-green-400" />, name: "Adaptability" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="w-full py-20 flex justify-center text-white"
    >
      <AnimatedContent
        distance={150}
        direction="vertical"
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.3}
        animateOpacity
        scale={1.05}
        threshold={0.3}
      >
        <div className="px-6 flex flex-col gap-16 items-center w-full">
          {/* Section Title */}
          <h2 className="text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-center">
            <span className="text-transparent">Skills</span>{" "}💻
          </h2>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10 w-full max-w-7xl">
            {skillsData.map((category, index) => {
              const visibleSkills = expanded
                ? category.skills
                : category.skills.slice(0, 6);

              return (
                <AnimatedContent
                  key={index}
                  distance={80}
                  direction="vertical"
                  duration={0.8}
                  ease="power3.out"
                  initialOpacity={0}
                  animateOpacity
                  threshold={0.2}
                  delay={0.05 * index}
                >
                  <div className="flex flex-col justify-between h-full border border-gray-700 bg-gray-800/60 backdrop-blur-md rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                    {/* Header */}
                    <div className="flex flex-col items-center mb-6">
                      <div className="text-5xl mb-3">{category.icon}</div>
                      <h3 className="text-2xl font-semibold text-center">
                        {category.title}
                      </h3>
                    </div>

                    {/* Skill List */}
                    <ul
                      className={`space-y-3 flex-1 overflow-hidden transition-all duration-500 ${
                        expanded ? "max-h-[1000px]" : "max-h-[260px]"
                      }`}
                    >
                      {visibleSkills.map((skill, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-lg hover:text-blue-400 transition duration-200"
                        >
                          <span className="text-xl">{skill.icon}</span>
                          <span>{skill.name}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Show More Button — Inside Each Card */}
                    {category.skills.length > 6 && (
                      <button
                        onClick={() => setExpanded(!expanded)}
                        className="mt-6 text-blue-400 hover:text-blue-500 font-medium transition-colors flex items-center justify-center gap-1"
                      >
                        {expanded ? "Show less ▲" : "Show more ▼"}
                      </button>
                    )}
                  </div>
                </AnimatedContent>
              );
            })}
          </div>
        </div>
      </AnimatedContent>
    </section>
  );
};

export default Skills;
