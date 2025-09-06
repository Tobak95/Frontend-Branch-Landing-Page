import React, { useState } from "react";
import logo from "../../assets/SaulDesign.png";
import { HiMenu, HiX } from "react-icons/hi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-[#222831] border-b border-[#EEEEEE1A]">
      <nav className="layout flex items-center justify-between h-[100px] relative">
        <img src={logo} alt="Logo" className="w-[120px]" />

        <div className="hidden md:flex text-[#EEEEEE] font-[400] text-[16px] md:text-[18px] items-center gap-5">
          <a href="/">Home</a>
          <a href="#">About Me</a>
          <a href="#">Contact</a>
        </div>

        <div
          className="md:hidden text-white text-2xl cursor-pointer z-20"
          onClick={toggleMenu}
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </div>

        {isOpen && (
          <div className="absolute top-[100px] left-0 w-full bg-[#222831] z-30 text-[#EEEEEE] flex flex-col items-center gap-6 py-6 md:hidden ">
            <a href="/" onClick={toggleMenu}>
              Home
            </a>
            <a href="#" onClick={toggleMenu}>
              About Me
            </a>
            <a href="#" onClick={toggleMenu}>
              Contact
            </a>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
