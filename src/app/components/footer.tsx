import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Section */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-xl font-bold text-white">Kongphop</p>
            <p className="text-sm">© {new Date().getFullYear()} All Rights Reserved</p>
          </div>
          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="https://github.com/kongphop1209"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/kongphop-saenphai-34a557288/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              LinkedIn
            </a>
            <a
              href="mailto:6531503008@lamduan.mfu.ac.th"
              className="hover:text-blue-400 transition duration-300"
            >
              Email
            </a>
          </div>
        </div>
        {/* Decorative Divider */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-sm text-gray-500">
          <p>
            Designed with ❤️ by <span className="text-blue-400 font-medium">Kongphop</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
