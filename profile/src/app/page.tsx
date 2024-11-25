import React from 'react';
import Navbar from "./components/navbar";
import Header from "./components/header";
import Introduce from "./sections/introduce";
import AboutMe from "./sections/aboutme";
import Skills from "./sections/skills";

export default function Home() {
  return (
    <div className='w-full flex flex-col'>
      <Navbar/>
      <Header/>
      <div className='h-20'></div>
      <Introduce/>
      <div className='h-20'></div>
      <AboutMe/>
      <div className='h-20'></div>
      <Skills/>
    </div>
  );
}
