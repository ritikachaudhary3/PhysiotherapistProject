import React from 'react'
import { FaFacebookF, FaInstagram, FaTimes, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail,HiOutlineClock } from "react-icons/hi";

 
    const Footer = () => {
      return (
        <footer className="bg-[#3b4661] text-gray-300 py-10 px-8">
          <div className="max-w-7xl mx-auto px-10 grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
    
            {/* First Column */}
            <div className="flex flex-col items-center md:items-start justify-start space-y-4">
              <h2 className="text-2xl font-bold">
                Serene<span className="text-pink-400">Physio</span>
              </h2>
              <p className="text-[16px]">
                Professional physiotherapy services to help you move, feel and live better.
              </p>
              <div className="flex space-x-4 mt-2">
                <FaFacebookF className="w-5 h-5 hover:text-pink-400 cursor-pointer" />
                <FaInstagram className="w-5 h-5 hover:text-pink-400 cursor-pointer" />
                <FaTimes className="w-5 h-5 hover:text-pink-400 cursor-pointer" />
                <FaLinkedinIn className="w-5 h-5 hover:text-pink-400 cursor-pointer" />
              </div>
            </div>
    
            {/* Second Column */}
            <div className="flex ml-10 flex-col items-center  md:items-start justify-start space-y-2">
              <h3 className="text-[22px] font-semibold ">Quick Links</h3>
              <ul className="space-y-2 text-[16px]">
                <li className="hover:text-pink-400 cursor-pointer">About us</li>
                <li className="hover:text-pink-400 cursor-pointer">Our service</li>
                <li className="hover:text-pink-400 cursor-pointer">Testimonial</li>
                <li className="hover:text-pink-400 cursor-pointer">Contact us</li>
                <li className="hover:text-pink-400 cursor-pointer">Privacy Policy</li>
              </ul>
            </div>
    
            {/* Third Column */}
            <div className="flex flex-col items-center md:items-start justify-start  space-y-3">
              <h3 className="text-[22px] font-semibold">Contact Us</h3>
              <ul className="space-y-3 text-[16px]">
                <li className="flex items-center gap-2">
                  <HiOutlineLocationMarker className="text-pink-400" />
                  23 Wellness Street, Healing City, HC 12345
                </li>
                <li className="flex items-center gap-2">
                  <HiOutlinePhone className="text-pink-400" />
                  (123) 456-7890
                </li>
                <li className="flex items-center gap-2">
                  <HiOutlineMail className="text-pink-400" />
                  info@serenephysio.com
                </li>
              </ul>
            </div>
    
            {/* Fourth Column */}
            <div className="flex flex-col ml-12 items-center md:items-start justify-start space-y-3">
              <h3 className="text-[22px] font-semibold">Opening Hours</h3>
              <ul className="space-y-2 text-[16px]">
                <li className="flex items-center gap-2">
                  <HiOutlineClock className="text-pink-400" />
                  Monday - Friday <br /> 8:00 AM - 7:00 PM
                </li>
                <li className="flex items-center gap-2">
                  <HiOutlineClock className="text-pink-400" />
                  Saturday <br /> 9:00 AM - 4:00 PM
                </li>
                <li className="flex items-center gap-2">
                  <HiOutlineClock className="text-pink-400" />
                  Sunday <br /> Closed
                </li>
              </ul>
            </div>
    
          </div>
    
          {/* Bottom Line */}
          <div className="border-t border-gray-400 mt-8 pt-4 text-center text-base font-medium">
            © 2025 Serene Physiotherapy. All rights reserved.
          </div>
        </footer>
      );
    };
    



export default Footer