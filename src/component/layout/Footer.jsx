import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-[#1a1f25] text-gray-300 h-[400px] relative px-8 ">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center h-full gap-12">
        {/* Navigation Links */}
        <div className="flex space-x-12 text-sm">
          <Link to="/" className="hover:text-white flex items-center gap-2">
            <span>🏠</span> Home
          </Link>
          <Link
            to="/about"
            className="hover:text-white flex items-center gap-2"
          >
            <span>👤</span> About me
          </Link>
          <Link
            to="/contact"
            className="hover:text-white flex items-center gap-2"
          >
            <span>📞</span> Contact
          </Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex justify-center space-x-5">
          <a
            href="#"
            className="bg-[#393E46] p-2 rounded-full hover:bg-[#EEEEEEBF]"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            className="bg-[#393E46] p-2 rounded-full hover:bg-[#EEEEEEBF]"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            className="bg-[#393E46] p-2 rounded-full hover:bg-[#EEEEEEBF]"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            className="bg-[#393E46] p-2 rounded-full hover:bg-[#EEEEEEBF]"
          >
            <FaYoutube />
          </a>
        </div>
      </div>

      {/* Terms Section (positioned at bottom-right) */}
      <div className="absolute bottom-4 right-6 text-sm text-gray-400 px-16 py-8">
        <a href="#" className="hover:text-white">
          Terms of Service
        </a>{" "}
        -{" "}
        <a href="#" className="hover:text-white">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
