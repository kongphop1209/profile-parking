import React from 'react';
import Navbar from "./components/navbar";
import Header from "./components/header";
import Introduce from "./sections/introduce";
import AboutMe from "./sections/aboutme";
import Skills from "./sections/skills";
import Projects from "./sections/projects";
import Experience from "./sections/experience";
import Contact from "./sections/contact";

export default function Home() {
  return (
    <div className="w-full flex flex-col">
      <Navbar />
      <Header />
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
    </div>
  );
}

