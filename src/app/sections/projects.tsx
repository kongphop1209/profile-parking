import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import Image from "next/image";
import FlutterIcon from "@/app/assets/flutter.png";
import FirebaseIcon from "@/app/assets/firebase.png";
import NextjsIcon from "@/app/assets/nextjs.png";
import SpringBootIcon from "@/app/assets/springboot.png";
import ReactIcon from "@/app/assets/react.png";

const Projects = () => {
  return (
    <section id="projects" className="w-full p-10 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6">Projects</h2>
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Blitz Project */}
        <div className="border flex flex-col justify-center items-center rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold">Blitz - App</h3>
          <div className="flex gap-4 items-center mt-4">
            <Image src={FlutterIcon} alt="Flutter" width={32} height={32} />
            <Image src={FirebaseIcon} alt="Firebase" width={32} height={32} />
          </div>
          <a
            href="https://github.com/kongphop1209/App_TravelBlitz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center gap-2 mt-4"
          >
            <GitHubIcon fontSize="small" />
            View on GitHub
          </a>
        </div>
        {/* Sport Complex App */}
        <div className="border flex flex-col justify-center items-center rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold">Sport Complex</h3>
          <div className="flex gap-4 items-center mt-4">
            <Image src={NextjsIcon} alt="Next.js" width={32} height={32} />
            <Image src={SpringBootIcon} alt="Spring Boot" width={32} height={32} />
          </div>
          <a
            href="https://github.com/6531503042/Sport-Complex"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center gap-2 mt-4"
          >
            <GitHubIcon fontSize="small" />
            View on GitHub
          </a>
        </div>
        {/* Weather Forecast App */}
        <div className="border flex flex-col justify-center items-center rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold">Weather Forecast</h3>
          <div className="flex gap-4 items-center mt-4">
            <Image src={ReactIcon} alt="React" width={32} height={32} />
            <Image src={SpringBootIcon} alt="Spring Boot" width={32} height={32} />
          </div>
          <a
            href="https://github.com/maefahluang-uni/99-project-forecastweather-system-group-14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline flex items-center gap-2 mt-4"
          >
            <GitHubIcon fontSize="small" />
            View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
