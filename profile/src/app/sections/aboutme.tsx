import React from 'react';
import MyselfImage from '@/app/assets/myself.jpg';

const AboutMe = () => {
  return (
    <section id="about" className="w-full p-10 flex flex-row">
      <div className="max-w-4xl flex flex-col gap-6 w-1/2">
        <h2 className="text-4xl font-bold ">About Me</h2>
        <p className="text-lg ">
          Hello! I'm Kongphop, a bachelor student pursuing a degree in Information Technology with a major in Software Engineering. I am passionate about building creative and efficient software solutions, especially in the fields of UX/UI and frontend development.
        </p>
        <ul className=" text-lg list-disc list-inside">
          <li>Currently improving my skills in React and TypeScript and try to Learn more Backend Stuff.</li>
          <li>Interested in AI, UI design, and scalable web applications.</li>
          <li>Committed to becoming the best version of myself through learning and growth.</li>
        </ul>
        <p className=" italic">
          Fun fact: I love solving puzzles and exploring new technologies in my free time!
        </p>
      </div>
      <div className="flex justify-center items-center w-1/2">
        <img
          src={MyselfImage.src}
          alt=""
          className="rounded-full shadow-lg border border-gray-300 w-60 h-60 object-cover"
        />
      </div>
    </section>
  );
};

export default AboutMe;
