import React from "react";
import { useState } from "react";
import {  Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false); // Close mobile menu after click
    }
  };

  return (
    <nav className="bg-white border-b-2">
      <div className="max-w-7xl mx-auto md:px-20 py-4 flex justify-between px-8 items-center">
        {/* Brand */}
        <div className="font-lato md:text-[27px] text-[20px] font-[500] leading-[100%]">
          <span className="text-gray-900">Serene</span>
          <span className="text-[#3B82F6] hover:text-[#D44D7D]">Physio</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 items-center font-lato text-[20px] font-[500] text-[#4A5568]">
          <button onClick={() => scrollToSection('about')} className="hover:text-[#3B82F6]">About</button>
          <button onClick={() => scrollToSection('service')} className="hover:text-[#3B82F6]">Service</button>
          <button onClick={() => scrollToSection('stories')} className="hover:text-[#3B82F6]">Testimonial</button>
          <Link to ='/blogpage' className="hover:text-[#3B82F6]">Blog</Link>
          <button onClick={() => scrollToSection('contactus')} className="hover:text-[#3B82F6]">Contact Us</button>
        </div>

        {/* Book Appointment Button */}
        <button 
          onClick={() => scrollToSection('contactus')} 
          className="bg-purple-100 text-gray-800 md:text-[18px] text-[15px] font-[400] leading-[100%] md:px-7 md:py-3 py-1 px-2 rounded-full hover:bg-purple-200 transition"
        >
          Book an Appointment
        </button>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-8 pb-4 space-y-4 font-lato text-[16px] font-[500] text-[#4A5568]">
          <button onClick={() => scrollToSection('about')} className="block w-full text-left">About</button>
          <button onClick={() => scrollToSection('service')} className="block w-full text-left">Service</button>
          <button onClick={() => scrollToSection('stories')} className="block w-full text-left">Testimonial</button>
          <Link to='/blogpage' className="block w-full text-left">Blog</Link>
          <button onClick={() => scrollToSection('contactus')} className="block w-full text-left">Contact</button>
        </div>
      )}
    </nav>
  );
}
