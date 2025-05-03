import React from "react";
import { useState } from "react";
import {  Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    const yOffset = -100; // Adjust this based on your navbar height (e.g., -80px to -100px)
    const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
  
    window.scrollTo({ top: y, behavior: 'smooth' });
  };
  
  
    return (
      <nav className="bg-white border-b-2 sticky top-0 z-50 shadow-md 
">
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-20">
          
          {/* Brand */}
          <div className="font-lato text-2xl md:text-3xl font-semibold">
          <Link to='/'className="text-gray-900">Serene
            <span className="text-[#3B82F6] hover:text-[#D44D7D]">Physio</span></Link>
          </div>
  
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-lg text-[#4A5568] font-medium">
            <button onClick={() => scrollToSection('about')} className="hover:text-[#3B82F6]">About</button>
            <button onClick={() => scrollToSection('service')} className="hover:text-[#3B82F6]">Service</button>
            <button onClick={() => scrollToSection('stories')} className="hover:text-[#3B82F6]">Testimonial</button>
            <Link to="/blogpage" className="hover:text-[#3B82F6]">Blog</Link>
            <button onClick={() => scrollToSection('contactus')} className="hover:text-[#3B82F6]">Contact Us</button>
          </div>
  
          {/* Book Appointment Button */}
          <div className="hidden md:flex">
            <button 
              onClick={() => scrollToSection('contactus')}
              className="bg-purple-100 hover:bg-purple-200  text-gray-800 text-base px-6 py-2 rounded-full hover:scale-110 transition-transform duration-300"
            >
              Book an Appointment
            </button>
          </div>
  
          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
  
        </div>
  
        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg px-6 py-4 space-y-4 text-[#4A5568] font-medium text-lg">
            <button onClick={() => scrollToSection('about')} className="block w-full text-left">About</button>
            <button onClick={() => scrollToSection('service')} className="block w-full text-left">Service</button>
            <button onClick={() => scrollToSection('stories')} className="block w-full text-left">Testimonial</button>
            <Link to="/blogpage" className="block w-full text-left hover:text-[#3B82F6]">Blog</Link>
            <button onClick={() => scrollToSection('contactus')} className="block w-full text-left">Contact</button>
            <button
              onClick={() => scrollToSection('contactus')}
              className="bg-purple-100 hover:bg-purple-200 transition text-gray-800 w-full text-center mt-2 py-2 rounded-full"
            >
              Book an Appointment
            </button>
          </div>
        )}
      </nav>
    );
  };
  