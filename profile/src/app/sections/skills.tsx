import React from 'react';

const Skills = () => {
  return (
    <section id="skills" className="w-full p-10 flex justify-center">
      <div className="flex flex-col gap-6">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center">Skills</h2>
        {/* Skills Content */}
        <div className="grid grid-cols-4 gap-6 mt-6 ">
          {/* Frontend Skills */}
          <div className="flex flex-col border rounded-xl p-3 items-center">
            <h3 className="text-2xl font-semibold mb-4">Frontend Development</h3>
            <ul className="">
              <li>React.js</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
              <li>HTML & CSS</li>
            </ul>
          </div>
          {/* Backend Skills */}
          <div className="flex flex-col border rounded-xl p-3 items-center">
            <h3 className="text-2xl font-semibold mb-4">Backend Development</h3>
            <ul className="">
              <li>Node.js</li>
              <li>Express.js</li>
              <li>MongoDB</li>
              <li>SQL</li>
              <li>API Integration</li>
            </ul>
          </div>
          {/* Other Tools */}
          <div className="flex flex-col border rounded-xl p-3 items-center">
            <h3 className="text-2xl font-semibold mb-4">Other Tools</h3>
            <ul className="">
              <li>Git & GitHub</li>
              <li>Figma</li>
              <li>Visual Studio Code</li>
              <li>Postman</li>
              <li>Linux</li>
            </ul>
          </div>
          {/* Soft Skills */}
          <div className="flex flex-col border rounded-xl p-3 items-center">
            <h3 className="text-2xl font-semibold mb-4">Soft Skills</h3>
            <ul className="">
              <li>Team Collaboration</li>
              <li>Problem-Solving</li>
              <li>Critical Thinking</li>
              <li>Time Management</li>
              <li>Adaptability</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
