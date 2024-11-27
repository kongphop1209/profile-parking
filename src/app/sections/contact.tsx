import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Contact = () => {
  return (
    <section id="contact" className="w-full h-96 p-10 mt-24 flex flex-col items-center">
      <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
      <div className="max-w-4xl text-center">
        <p className="mb-4 text-lg">
          Feel free to reach out to me for any inquiries, collaborations, or just to say hi!
        </p>
        <div className="flex justify-center gap-10 mb-6">
          <a
            href="mailto:6531503008@lamduan.mfu.ac.th"
            className="flex items-center text-blue-500 hover:underline"
          >
            <EmailIcon fontSize="large" className="mr-2" />
            Email Me
          </a>
          <a
            href="https://www.linkedin.com/in/kongphop-saenphai-34a557288/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:underline"
          >
            <LinkedInIcon fontSize="large" className="mr-2" />
            LinkedIn
          </a>
          <a
            href="https://github.com/kongphop1209"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-500 hover:underline"
          >
            <GitHubIcon fontSize="large" className="mr-2" />
            GitHub
          </a>
        </div>
        <p className="text-sm text-gray-500">Let's connect!</p>
      </div>
    </section>
  );
};

export default Contact;
