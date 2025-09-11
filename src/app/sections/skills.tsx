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
        { icon: <SiGo className="text-cyan-500" />, name: "Go (Echo, gRPC)" },
        { icon: <FaJava className="text-red-600" />, name: "Java (Spring WebFlux)" },
        { icon: <FaPython className="text-yellow-400" />, name: "Python (FastAPI, NLP)" },
        { icon: <SiMongodb className="text-green-600" />, name: "MongoDB" },
        { icon: <SiPostgresql className="text-blue-500" />, name: "PostgreSQL" },
        { icon: <FaDatabase />, name: "SQL" },
        { icon: <FaPlug />, name: "API Integration" },
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
