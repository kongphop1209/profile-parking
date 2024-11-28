import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import FlutterIcon from "@/app/assets/flutter.png";
import FirebaseIcon from "@/app/assets/firebase.png";
import NextjsIcon from "@/app/assets/nextjs.png";
import SpringBootIcon from "@/app/assets/springboot.png";
import ReactIcon from "@/app/assets/react.png";

const Projects = () => {
  const projects = [
    {
      title: "Blitz - App",
      techStack: [FlutterIcon, FirebaseIcon],
      githubLink: "https://github.com/kongphop1209/App_TravelBlitz",
    },
    {
      title: "Sport Complex",
      techStack: [NextjsIcon, SpringBootIcon],
      githubLink: "https://github.com/6531503042/Sport-Complex",
    },
    {
      title: "Weather Forecast",
      techStack: [ReactIcon, SpringBootIcon],
      githubLink: "https://github.com/maefahluang-uni/99-project-forecastweather-system-group-14",
    },
  ];

  return (
    <section id="projects" className="w-full py-16 flex flex-col items-center bg-gray-900 text-white">
      <h2 className="text-4xl font-bold mb-12">Projects</h2>
      <div className="w-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-700 bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <h3 className="text-2xl font-semibold mb-4 text-center">{project.title}</h3>
            <div className="flex gap-4 items-center mb-6">
              {project.techStack.map((tech, i) => (
                <Image key={i} src={tech} alt={`${project.title} Tech ${i}`} width={40} height={40} />
              ))}
            </div>
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 flex items-center gap-2 transition-colors duration-200"
            >
              <GitHubIcon fontSize="small" />
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
