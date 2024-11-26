import React from 'react';
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
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFigma,
  SiVisualstudiocode,
  SiPostman,
} from 'react-icons/si';

const Skills = () => {
  return (
    <section id="skills" className="w-full p-10 flex justify-center">
      <div className="flex flex-col gap-6">
        <h2 className="text-4xl font-bold text-center">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
          <div className="flex flex-col border rounded-xl p-6 items-center">
            <div className="text-5xl mb-4">
              <FaReact className="text-blue-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Frontend Development</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaReact className="mr-2 text-blue-500" /> React.js
              </li>
              <li className="flex items-center">
                <SiNextdotjs className="mr-2 text-white" /> Next.js
              </li>
              <li className="flex items-center">
                <SiTypescript className="mr-2 text-blue-600" /> TypeScript
              </li>
              <li className="flex items-center">
                <SiTailwindcss className="mr-2 text-teal-500" /> Tailwind CSS
              </li>
              <li className="flex items-center">
                <FaHtml5 className="mr-2 text-orange-500" /> HTML & CSS
              </li>
            </ul>
          </div>
          <div className="flex flex-col border rounded-xl p-6 items-center">
            <div className="text-5xl mb-4">
              <FaNodeJs className="text-green-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Backend Development</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaNodeJs className="mr-2 text-green-500" /> Node.js
              </li>
              <li className="flex items-center">
                <SiExpress className="mr-2 text-green-600" /> Express.js
              </li>
              <li className="flex items-center">
                <SiMongodb className="mr-2 text-green-600" /> MongoDB
              </li>
              <li className="flex items-center">
                <FaDatabase className="mr-2" /> SQL
              </li>
              <li className="flex items-center">
                <FaPlug className="mr-2" /> API Integration
              </li>
            </ul>
          </div>
          <div className="flex flex-col border rounded-xl p-6 items-center">
            <div className="text-5xl mb-4">
              <FaTools className="text-gray-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Other Tools</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaGitAlt className="mr-2 text-red-500" /> Git & GitHub
              </li>
              <li className="flex items-center">
                <SiFigma className="mr-2 text-pink-500" /> Figma
              </li>
              <li className="flex items-center">
                <SiVisualstudiocode className="mr-2 text-blue-600" /> Visual Studio Code
              </li>
              <li className="flex items-center">
                <SiPostman className="mr-2 text-orange-500" /> Postman
              </li>
              <li className="flex items-center">
                <FaLinux className="mr-2 text-blue-300" /> Linux
              </li>
            </ul>
          </div>
          <div className="flex flex-col border rounded-xl p-6 items-center">
            <div className="text-5xl mb-4">
              <FaUsers className="text-purple-500" />
            </div>
            <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaUsers className="mr-2" /> Team Collaboration
              </li>
              <li className="flex items-center">
                <FaLightbulb className="mr-2" /> Problem-Solving
              </li>
              <li className="flex items-center">
                <FaBrain className="mr-2" /> Critical Thinking
              </li>
              <li className="flex items-center">
                <FaClock className="mr-2" /> Time Management
              </li>
              <li className="flex items-center">
                <FaSync className="mr-2" /> Adaptability
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
