import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Experience = () => {
  const experiences = [
    {
      title: "Blitz - Flight Reservation App",
      description:
        "A Flutter-based mobile application for booking and managing flight reservations. It provided a user-friendly interface and seamless booking experience. I worked on implementing core features such as seat selection and payment integration.",
      githubLink: "https://github.com/kongphop1209/App_TravelBlitz",
    },
    {
      title: "Sport Complex Web App",
      description:
        "A web application for managing a sport complex's schedules, bookings, and events. My role focused on frontend development, ensuring responsive design and interactive features using modern web technologies.",
      githubLink: "https://github.com/6531503042/Sport-Complex",
    },
    {
      title: "Weather Forecast Web App",
      description:
        "A web application providing real-time weather forecasts and updates. I developed the interface and integrated APIs to display weather data dynamically with interactive visuals.",
      githubLink:
        "https://github.com/maefahluang-uni/99-project-forecastweather-system-group-14",
    },
  ];

  return (
    <section
      id="experience"
      className="w-full py-16 bg-gray-900 text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-12">Experience</h2>
      <div className="w-3/4 flex flex-col gap-8">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="border border-gray-700 bg-gray-800 rounded-lg shadow-lg p-6 hover:shadow-2xl hover:scale-105 transition transform duration-300"
          >
            <h3 className="text-2xl font-semibold mb-4">{exp.title}</h3>
            <p className="text-lg text-gray-300">{exp.description}</p>
            <a
              href={exp.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-500 flex items-center gap-2 mt-4 transition-colors duration-200"
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

export default Experience;
