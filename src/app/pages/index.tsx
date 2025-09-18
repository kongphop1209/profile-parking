"use client"

import React from 'react';
import Introduce from "@/app/sections/introduce";
import AboutMe from "@/app/sections/aboutme";
import Skills from "@/app/sections/skills";
import Contact from "@/app/sections/contact";
import Footer from "@/app/components/footer";
import dynamic from 'next/dynamic';
import Project from '@/app/sections/projects';

const Navbar = dynamic(() => import('@/app/components/navbar'), { ssr: false });

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />

      <div id="home">
        <Introduce />
      </div>

      <div id="about">
        <AboutMe />
      </div>

      <div id="skills">
        <Skills />
      </div>

      <div id="projects">
        <Project />
      </div>

      <div id="contact">
        <Contact />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

