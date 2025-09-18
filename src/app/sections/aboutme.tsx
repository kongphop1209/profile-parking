"use client"

import React from 'react';
import { Code, User, Target } from 'lucide-react';
import Lottie from 'lottie-react';
import animationData from '@/app/assets/animation_001.json'; 
import AnimatedContent from "@/components/AnimatedContent";

const AboutMe = () => {
  return (
    <section id="about" className="w-full py-16 px-4">
      <AnimatedContent
        distance={150}
        direction="vertical"
        reverse={false}
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.2}
        animateOpacity
        scale={1.05}
        threshold={0.2}
        delay={0.2}
      >

      <div className=" mx-auto flex flex-col md:flex-row items-center justify-around gap-12">
        {/* Lottie Animation */}
        <div className="w-full md:w-1/3 flex justify-center">
          <Lottie animationData={animationData} loop={true} className="w-96 h-96" />
        </div>
        
        {/* Text Content */}
        <div className="w-full md:w-1/2 space-y-6">
          <h2 className="text-4xl font-extrabold text-gray-100 mb-4 border-b-4 border-blue-600 pb-2">
            About Me
          </h2>
          <p className="text-lg text-gray-300 leading-relaxed">
            Hello! I'm Kongphop, a bachelor student pursuing a degree in Information Technology with a major in Software Engineering. I am passionate about building creative and efficient software solutions, especially in the fields of UX/UI and frontend development.
          </p>
          
          <div className="space-y-4">
            <div className="flex items-center space-x-4 bg-gray-800 shadow-xl rounded-lg p-4 border border-gray-700">
              <Code className="text-blue-400 w-10 h-10" />
              <p className="text-gray-200">
                Currently improving my skills in React and TypeScript and trying to learn more Backend stuff.
              </p>
            </div>
            <div className="flex items-center space-x-4 bg-gray-800 shadow-xl rounded-lg p-4 border border-gray-700">
              <Target className="text-green-400 w-10 h-10" />
              <p className="text-gray-200">
                Interested in AI, UI design, and scalable web applications.
              </p>
            </div>
            <div className="flex items-center space-x-4 bg-gray-800 shadow-xl rounded-lg p-4 border border-gray-700">
              <User className="text-purple-400 w-10 h-10" />
              <p className="text-gray-200">
                Committed to becoming the best version of myself through learning and growth.
              </p>
            </div>
          </div>

          <p className="text-lg italic text-gray-500">
            Fun fact: I love solving puzzles and exploring new technologies in my free time!
          </p>
        </div>
      </div>
      </AnimatedContent>
    </section>
  );
};

export default AboutMe;
