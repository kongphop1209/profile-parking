"use client"

import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";  

const Introduce = () => {
  return (
    <section className="relative flex flex-col md:flex-row w-full justify-around items-center p-10 gap-8 min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <motion.div 
        initial={{ opacity: 0, x: -100 }} 
        animate={{ opacity: 1, x: 0 }} 
        transition={{ duration: 0.8 }} 
        className="flex flex-col w-full md:w-1/2 space-y-6 text-white"
      > 
        <div className="space-y-2"> 
          <p className="text-xl text-blue-400 tracking-wider">Hello, I'm</p> 
          <h1 className="text-5xl md:text-8xl pb-3 font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600"> 
            Kongphop
          </h1> 
          <h2 className="text-3xl font-bold text-gray-200"> 
            Software Engineering Student 
          </h2> 
        </div> 
        <p className="text-gray-300 leading-relaxed max-w-xl"> 
          Passionate about crafting intuitive user experiences and building innovative web applications. My goal is to continuously grow and become the best version of myself in the world of technology. 
        </p> 
        <div className="flex space-x-4"> 
          <Link
            to="contact"
            smooth={true}
            duration={500}
            offset={-100}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          > 
            Contact Me 
          </Link>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            offset={-250}
            className="px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-full transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer"
          > 
            View Projects 
          </Link>
        </div> 
      </motion.div> 
      
    </section> 
  ); 
}; 

export default Introduce;