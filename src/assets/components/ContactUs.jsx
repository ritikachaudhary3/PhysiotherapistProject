import React from "react";
 import { FaFacebookF, FaInstagram, FaTimes, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineClock } from "react-icons/hi";

const ContactUs = () => {
  return (
    <section id="contactus"className="bg-[#F1F0FB] py-16 px-16">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-[##4A5568] mb-4">Get In Touch</h2>
          <div className="w-24 h-1 mx-auto bg-[#D44D7D] mb-4 rounded-full"></div>
          <p className="text-[#4A5568] text-lg">Have questions or ready to schedule your appointment? Contact us today.</p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-10 md:px-7">

          {/* Left Side: Contact Information */}
          <div className="space-y-6 mt-12">

            {/* Contact Info Block */}
            <div className="space-y-3">
              <h3 className="text-3xl font-semibold text-[#4A5568]">Contact Information</h3>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <HiOutlineLocationMarker className="text-[#D44D7D] w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold">Visit Us</h4>
                    <p>23 Wellness Street,<br /> Healing City, HC 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HiOutlinePhone className="text-[#D44D7D] w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold">Call Us</h4>
                    <a href="tel:1234567890" className="underline text-[#4A5568]">(123) 456-7890</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HiOutlineMail className="text-[#D44D7D] w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold">Email Us</h4>
                    <a href="mailto:info@serenephysio.com" className="underline text-[#4A5568]">info@serenephysio.com</a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <HiOutlineClock className="text-[#D44D7D] w-6 h-6 mt-1" />
                  <div>
                    <h4 className="font-semibold">Opening Hours</h4>
                    <p>Monday - Friday: 8:00 AM - 7:00 PM<br />
                       Saturday: 9:00 AM - 4:00 PM<br />
                       Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div>
              <h4 className="font-semibold md:px-1 mb-5 text-lg">Follow Us</h4>
              <div className="flex space-x-4">
                <FaFacebookF className="w-5 h-5 text-[#D44D7D] cursor-pointer" />
                <FaInstagram className="w-5 h-5 text-[#D44D7D] cursor-pointer" />
                <FaTimes className="w-5 h-5 text-[#D44D7D] cursor-pointer" />
                <FaLinkedinIn className="w-5 h-5 text-[#D44D7D] cursor-pointer mb-6" />
              </div>
            </div>

          </div>

          {/* Right Side: Form */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
            <h3 className="text-2xl font-semibold text-[#4A5568] mb-6">Book an Appointment</h3>

            <form className="space-y-6">
              <div className="flex flex-col md:flex-row gap-4">
                
                <input
                  type="text"
                  placeholder="First Name*"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                <input
                  type="text"
                  placeholder="Last Name*"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Email Address*"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
                <input
                  type="tel"
                  placeholder="Phone Number*"
                  className="border border-gray-300 rounded-md p-2 w-full"
                />
              </div>

              <select className="border border-gray-300 rounded-md p-2 w-full">
                <option>Select a service</option>
                <option>Physiotherapy</option>
                <option>Chronic Pain Therapy</option>
                <option>Sports Injury Recovery</option>
              </select>

              <textarea
                rows="4"
                placeholder="Message"
                className="border border-gray-300 rounded-md p-2 w-full"
              ></textarea>

              <div className="text-right">
                <button className="bg-blue-200 hover:bg-blue-300 text-[#4A5568] px-6 py-2 rounded-full transition font-medium">
                  Send Message
                </button>
              </div>

            </form>
          </div>

        </div>

      </div>
    </section>
  );
};

export default ContactUs;