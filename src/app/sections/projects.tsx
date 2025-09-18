"use client";

import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LogoLoop from "@/components/LogoLoop";
import AnimatedContent from "@/components/AnimatedContent";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiFlutter,
  SiFirebase,
} from "react-icons/si";

const Projects = () => {
  const projects = [
    {
      title: "Blitz - Flight Reservation App",
      description:
        "A Flutter-based mobile application for booking and managing flight reservations. It provided a user-friendly interface and seamless booking experience. I worked on implementing core features such as seat selection and payment integration.",
      githubLink: "https://github.com/kongphop1209/App_TravelBlitz",
      logos: [
        { node: <SiFlutter />, title: "Flutter", href: "https://flutter.dev" },
        {
          node: <SiFirebase />,
          title: "Firebase",
          href: "https://firebase.google.com",
        },
      ],
    },
    {
      title: "Sport Complex Web App",
      description:
        "A web application for managing a sport complex's schedules, bookings, and events. My role focused on frontend development, ensuring responsive design and interactive features using modern web technologies.",
      githubLink: "https://github.com/6531503042/Sport-Complex",
      logos: [
        { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
        {
          node: <SiTypescript />,
          title: "TypeScript",
          href: "https://www.typescriptlang.org",
        },
        {
          node: <SiTailwindcss />,
          title: "Tailwind CSS",
          href: "https://tailwindcss.com",
        },
      ],
    },
    {
      title: "Weather Forecast Web App",
      description:
        "A web application providing real-time weather forecasts and updates. I developed the interface and integrated APIs to display weather data dynamically with interactive visuals.",
      githubLink:
        "https://github.com/maefahluang-uni/99-project-forecastweather-system-group-14",
      logos: [
        { node: <SiReact />, title: "React", href: "https://react.dev" },
        {
          node: <SiTypescript />,
          title: "TypeScript",
          href: "https://www.typescriptlang.org",
        },
        {
          node: <SiTailwindcss />,
          title: "Tailwind CSS",
          href: "https://tailwindcss.com",
        },
      ],
    },
  ];

  return (
    <section
      id="projects"
      className="w-full py-16 text-white flex flex-col items-center"
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
        <h2 className="text-4xl font-bold mb-12">Projects</h2>
      </AnimatedContent>

      <div className="w-3/4 flex flex-col gap-8">
        {projects.map((pro, index) => (
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
            <div className="border border-gray-700 bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition transform duration-300">
              <h3 className="text-2xl font-semibold mb-4">{pro.title}</h3>
              <p className="text-lg text-gray-300 mb-4">{pro.description}</p>
              <div className="w-1/3 px-2">
              <LogoLoop
                logos={pro.logos}
                speed={10}
                direction="left"
                logoHeight={32}
                gap={32}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#1f2937"
              />
              </div>
              <a
                href={pro.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-500 flex items-center gap-2 mt-4 transition-colors duration-200 "
              >
                <GitHubIcon fontSize="small" />
                View on GitHub
              </a>
            </div>
          </AnimatedContent>
        ))}
      </div>
    </section>
  );
};

export default Projects;
