import React from 'react';
import Navbar from "@/app/components/navbar";
import Introduce from "@/app/sections/introduce";
import AboutMe from "@/app/sections/aboutme";
import Skills from "@/app/sections/skills";
import Projects from "@/app/sections/projects";
import Experience from "@/app/sections/experience";
import Contact from "@/app/sections/contact";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <div className="h-20"></div>
      <div id="home">
        <Introduce />
      </div>
      <div className="h-20"></div>
      <div id="about">
        <AboutMe />
      </div>
      <div className="h-20"></div>
      <div id="skills">
        <Skills />
      </div>
      <div className="h-20"></div>
      <div id="projects">
        <Projects />
      </div>
      <div className="h-20"></div>
      <div id="experience">
        <Experience />
      </div>
      <div className="h-20"></div>
      <div id="contact">
        <Contact />
      </div>
      <div className="h-20"></div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

