"use client";

import React, { useState } from "react";
import Image from "next/image";
import GitHubIcon from "@mui/icons-material/GitHub";
import AnimatedContent from "@/components/AnimatedContent";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiFirebase,
  SiSpringboot,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "ATA Admin Dashboard",
      description:
        "A full-stack confidential feedback management system for organizations. Built with Next.js (Frontend), Java Spring WebFlux & FastAPI (Backend), PostgreSQL & MongoDB, and Docker. Provides multi-role dashboards, NLP sentiment analysis, and real-time data visualization.",
      private: true,
      images: ["/ata_1.png", "/ata_2.png", "/ata_3.png"],
      logos: [
        { node: <SiNextdotjs className="text-white" />, title: "Next.js" },
        { node: <FaJava className="text-[#E76F00]" />, title: "Java" },
        {
          node: <SiSpringboot className="text-[#6DB33F]" />,
          title: "Spring Boot",
        },
        {
          node: <SiPostgresql className="text-[#336791]" />,
          title: "PostgreSQL",
        },
        { node: <SiDocker className="text-[#0db7ed]" />, title: "Docker" },
      ],
    },
    {
      title: "Health Teen App",
      description:
        "A Flutter + Firebase-based mobile health-tracking application for teenagers. It provides secure authentication, personalized dashboards, and health data management using Provider and Firebase Cloud.",
      githubLink: "https://github.com/kongphop1209/Health-teen-app",
      images: ["/health_1.jpg"],
      logos: [
        { node: <SiFlutter className="text-[#02569B]" />, title: "Flutter" },
        { node: <SiFirebase className="text-[#FFCA28]" />, title: "Firebase" },
      ],
    },
    {
      title: "Blitz - Flight Reservation App",
      description:
        "A Flutter-based mobile application for booking and managing flight reservations. Implemented seat selection, payment flow, and booking logic.",
      githubLink: "https://github.com/kongphop1209/App_TravelBlitz",
      images: ["/travel_1.png", "/travel_2.png", "/travel_3.png"],
      logos: [
        { node: <SiFlutter className="text-[#02569B]" />, title: "Flutter" },
        { node: <SiFirebase className="text-[#FFCA28]" />, title: "Firebase" },
      ],
    },
    {
      title: "Sport Complex Web App",
      description:
        "A responsive web application for managing a sport complex’s schedules, bookings, and events — built with Next.js and TailwindCSS.",
      githubLink: "https://github.com/6531503042/Sport-Complex",
      images: ["/sport_complex_2.png", "/sport_complex_1.png"],
      logos: [
        { node: <SiNextdotjs className="text-white" />, title: "Next.js" },
        {
          node: <SiTypescript className="text-[#3178C6]" />,
          title: "TypeScript",
        },
        {
          node: <SiTailwindcss className="text-[#38BDF8]" />,
          title: "Tailwind CSS",
        },
      ],
    },
  ];

  const [modalImages, setModalImages] = useState<string[]>([]);
  const [modalIndex, setModalIndex] = useState<number>(0);

  const openModal = (images: string[] | string, index = 0) => {
    if (Array.isArray(images)) {
      setModalImages(images);
      setModalIndex(index);
    } else {
      setModalImages([images]);
      setModalIndex(0);
    }
  };

  const closeModal = () => setModalImages([]);
  const nextImage = () => setModalIndex((i) => (i + 1) % modalImages.length);
  const prevImage = () =>
    setModalIndex((i) => (i - 1 + modalImages.length) % modalImages.length);

  return (
    <section
      id="projects"
      className="w-full py-20 text-white flex flex-col items-center"
    >
      <AnimatedContent
        distance={150}
        direction="vertical"
        duration={1.2}
        ease="power3.out"
        initialOpacity={0.3}
        animateOpacity
        scale={1.05}
        threshold={0.3}
      >
        <h2 className="text-5xl font-extrabold mb-14 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 bg-clip-text text-center">
          <span className="text-transparent">Projects</span>{" "}🚀
        </h2>
      </AnimatedContent>

      {/* ✅ fixed height container grid */}
      <div className="w-11/12 md:w-5/6 grid grid-cols-1 lg:grid-cols-2 gap-10 auto-rows-[1fr]">
        {projects.map((pro, index) => {
          const imgs =
            pro.images && pro.images.length > 0
              ? pro.images.slice(0, 2)
              : ["/projects/placeholder-generic.jpg"];

          return (
            <AnimatedContent
              key={index}
              distance={100}
              direction="vertical"
              duration={1}
              ease="power3.out"
              initialOpacity={0}
              animateOpacity
              threshold={0.25}
              delay={0.1 * index}
            >
              <div className="flex flex-col h-full border border-gray-700 bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300 overflow-hidden">
                {/* images */}
                {imgs.length > 0 && (
                  <div
                    className={`grid ${
                      imgs.length > 1 ? "grid-cols-2" : "grid-cols-1"
                    } gap-1 h-56`}
                  >
                    {imgs.map((img, i) => (
                      <div
                        key={i}
                        className="relative w-full h-full cursor-pointer group"
                        onClick={() => openModal(pro.images || img, i)}
                      >
                        <Image
                          src={img}
                          alt={`${pro.title} preview ${i + 1}`}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center text-sm transition">
                          <span className="bg-white/10 px-3 py-1 rounded-lg text-gray-100">
                            Click to preview
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* text section */}
                <div className="flex flex-col justify-between flex-1 p-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-4 text-white">
                      {pro.title}
                    </h3>
                    <p className="text-gray-300 text-base leading-relaxed mb-6">
                      {pro.description}
                    </p>
                  </div>

                  {/* icons */}
                  <div className="w-full mb-6 min-h-[50px] flex items-center justify-center gap-10 flex-wrap">
                    {pro.logos.map((logo, i) => (
                      <div key={i} title={logo.title} className="text-3xl">
                        {logo.node}
                      </div>
                    ))}
                  </div>

                  {/* footer */}
                  <div className="mt-auto">
                    {pro.private ? (
                      <div className="inline-flex items-center gap-2 text-gray-400 font-medium italic select-none">
                        🔒 Private Source
                      </div>
                    ) : (
                      <a
                        href={pro.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-500 font-medium transition-colors duration-200"
                      >
                        <GitHubIcon fontSize="small" />
                        View on GitHub
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </AnimatedContent>
          );
        })}
      </div>

      {/* modal */}
      {modalImages.length > 0 && (
        <div
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 h-[80vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={modalImages[modalIndex]}
              alt="Full Preview"
              fill
              className="object-contain"
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-gray-900/80 text-white px-3 py-2 rounded-full hover:bg-red-500 transition"
            >
              ✕
            </button>
            {modalImages.length > 1 && (
              <>
                <button
                  onClick={prevImage}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-gray-900/70 text-white px-3 py-2 rounded-full hover:bg-gray-700"
                >
                  ◀
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-900/70 text-white px-3 py-2 rounded-full hover:bg-gray-700"
                >
                  ▶
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
