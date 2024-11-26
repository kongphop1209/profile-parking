import React from "react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8 mt-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-lg font-semibold">Kongphop</p>
            <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          <div className="flex gap-6 justify-center md:justify-end">
            <a
              href="https://github.com/kongphop1209"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kongphop-saenphai-34a557288/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition"
            >
              LinkedIn
            </a>
            <a
              href="mailto:6531503008@lamduan.mfu.ac.th"
              className="hover:text-gray-400 transition"
            >
              Email
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
