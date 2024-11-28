import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full py-16 my-20 bg-gray-900 text-white flex flex-col items-center"
    >
      <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
      <div className="w-5/6 text-center">
        <p className="mb-6 text-lg text-gray-300">
          I'm always open to opportunities, collaborations, or even just a friendly chat. 
          Feel free to get in touch!
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-8 mb-8">
          {/* Email */}
          <a
            href="mailto:6531503008@lamduan.mfu.ac.th"
            className="flex items-center gap-4 text-blue-400 hover:text-blue-500 transition duration-200"
          >
            <div className="p-4 rounded-full bg-gray-800 hover:bg-gray-700">
              <EmailIcon fontSize="large" />
            </div>
            <span className="text-lg font-semibold">Email Me</span>
          </a>
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/kongphop-saenphai-34a557288/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-blue-400 hover:text-blue-500 transition duration-200"
          >
            <div className="p-4 rounded-full bg-gray-800 hover:bg-gray-700">
              <LinkedInIcon fontSize="large" />
            </div>
            <span className="text-lg font-semibold">LinkedIn</span>
          </a>
          {/* GitHub */}
          <a
            href="https://github.com/kongphop1209"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 text-blue-400 hover:text-blue-500 transition duration-200"
          >
            <div className="p-4 rounded-full bg-gray-800 hover:bg-gray-700">
              <GitHubIcon fontSize="large" />
            </div>
            <span className="text-lg font-semibold">GitHub</span>
          </a>
        </div>
        <p className="text-sm text-gray-500">Looking forward to hearing from you!</p>
      </div>
    </section>
  );
};

export default Contact;
