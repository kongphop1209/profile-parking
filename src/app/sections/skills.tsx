import React from "react";
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
} from "react-icons/si";

const Skills = () => {
  const skillsData = [
    {
      title: "Frontend Tools",
      icon: <FaReact className="text-blue-500" />,
      skills: [
        { icon: <FaReact className="text-blue-500" />, name: "React.js" },
        { icon: <SiNextdotjs className="text-white" />, name: "Next.js" },
        { icon: <SiTypescript className="text-blue-600" />, name: "TypeScript" },
        { icon: <SiTailwindcss className="text-teal-500" />, name: "Tailwind CSS" },
        { icon: <FaHtml5 className="text-orange-500" />, name: "HTML & CSS" },
      ],
    },
    {
      title: "Backend Tools",
      icon: <FaNodeJs className="text-green-500" />,
      skills: [
        { icon: <FaNodeJs className="text-green-500" />, name: "Node.js" },
        { icon: <SiExpress className="text-green-600" />, name: "Express.js" },
        { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
        { icon: <FaDatabase />, name: "SQL" },
        { icon: <FaPlug />, name: "API Integration" },
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
        { icon: <FaLinux className="text-blue-300" />, name: "Linux" },
      ],
    },
    {
      title: "Soft Skills",
      icon: <FaUsers className="text-purple-500" />,
      skills: [
        { icon: <FaUsers />, name: "Team Collaboration" },
        { icon: <FaLightbulb />, name: "Problem-Solving" },
        { icon: <FaBrain />, name: "Critical Thinking" },
        { icon: <FaClock />, name: "Time Management" },
        { icon: <FaSync />, name: "Adaptability" },
      ],
    },
  ];

  return (
    <section id="skills" className="w-full py-16 flex justify-center bg-gray-900 text-white">
      <div className="px-4 flex flex-col gap-12">
        <h2 className="text-4xl font-bold text-center">Skills</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-12">
          {skillsData.map((category, index) => (
            <div
              key={index}
              className="flex flex-col items-center border border-gray-700 bg-gray-800 rounded-xl p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill, i) => (
                  <li
                    key={i}
                    className="flex items-center text-lg hover:text-blue-400 transition duration-200"
                  >
                    <span className="mr-3">{skill.icon}</span>
                    {skill.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
