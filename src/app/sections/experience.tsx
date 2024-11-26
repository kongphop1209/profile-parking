import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";

const Experience = () => {
  return (
    <section id="experience" className="w-full p-10 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6">Experience</h2>
      <div className="max-w-4xl flex flex-col gap-6">
        {/* Blitz Project */}
        <div className="border rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold">Blitz - Flight Reservation App</h3>
          <p className="text-lg mt-2">
            A Flutter-based mobile application for booking and managing flight reservations.
            It provided a user-friendly interface and seamless booking experience. I worked
            on implementing core features such as seat selection and payment integration.
          </p>
          <a
            href="https://github.com/kongphop1209/App_TravelBlitz"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 inline-flex items-center"
          >
            <GitHubIcon className="mr-2" /> View on GitHub
          </a>
        </div>
        {/* Sport Complex App */}
        <div className="border rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold">Sport Complex Web App</h3>
          <p className="text-lg mt-2">
            A web application for managing a sport complex's schedules, bookings, and events.
            My role focused on frontend development, ensuring responsive design and
            interactive features using modern web technologies.
          </p>
          <a
            href="https://github.com/6531503042/Sport-Complex"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 inline-flex items-center"
          >
            <GitHubIcon className="mr-2" /> View on GitHub
          </a>
        </div>
        {/* Weather Forecast App */}
        <div className="border rounded-lg shadow-md p-6">
          <h3 className="text-2xl font-semibold">Weather Forecast Web App</h3>
          <p className="text-lg mt-2">
            A web application providing real-time weather forecasts and updates.
            I developed the interface and integrated APIs to display weather data
            dynamically with interactive visuals.
          </p>
          <a
            href="https://github.com/maefahluang-uni/99-project-forecastweather-system-group-14"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline mt-2 inline-flex items-center"
          >
            <GitHubIcon className="mr-2" /> View on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Experience;
