import React from 'react'
import { Star, Quote } from "lucide-react";

    const testimonials = [
      {
        text: "The sports rehabilitation program here is exceptional. After my shoulder injury, they created a personalized plan that helped me regain my strength and mobility. I'm now playing tennis at an even higher level than before!",
        name: "Bruno Mars",
        role: "Tennis Player",
        image: "https://randomuser.me/api/portraits/men/32.jpg", // Replace with your real image
      },
      {
        text: "I suffered from chronic back pain for years due to sitting at a desk all day. The physiotherapists here provided me with targeted exercises and manual therapy that have significantly reduced my pain. Highly recommended!",
        name: "Sarah Johnson",
        role: "Office Worker",
        image: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        text: "After my knee injury, I thought I'd never run again. The team at Serene Physiotherapy not only helped me recover but improved my overall running form. I'm now back to running marathons pain-free!",
        name: "Michael Chen",
        role: "Marathon Runner",
        image: "https://randomuser.me/api/portraits/men/65.jpg",
      },
    ];
    
    const Stories = () => {
        return (
        <section  id="stories" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto text-center px-5">
            <h2 className="text-3xl md:text-4xl font-bold text-[#4A5568] mb-4">
              Patient <span className="text-[#4A5568]">Success Stories</span>
            </h2>
            <p className="text-[#4A5568] text-lg mb-12">
              Don't just take our word for it. Here's what our patients have to say
              about their experience with Serene Physiotherapy.
            </p>
    
            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8 px-14">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="bg-[#F1F0FB] p-8 rounded-lg shadow-md hover:shadow-lg transition transform relative flex flex-col justify-between"
                >
                  {/* Stars */}
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="text-yellow-400 w-5 h-5 fill-yellow-400" />
                    ))}
                  </div>
    
                  {/* Quote */}
                  <p className="text-[#4A5568] font-poppins  mb-6 ">
                    <Quote className="w-6 h-6 text-gray-400 absolute top-8 right-8" />
                    {testimonial.text}
                  </p>
    
                  {/* User Info */}
                  <div className="flex items-center mt-auto">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-10 h-10 rounded-full mr-4"
                    />
                    <div className="text-left">
                      <h4 className="font-semibold text-red-600 ">{testimonial.name}</h4>
                      <p className="text-[#4A5568] text-sm ">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
    
            {/* Bottom Rating */}
            <div className="mt-12 inline-flex items-center bg-blue-100 px-6 py-2 rounded-full text-blue-600 font-semibold text-sm space-x-2">
              <span className='text-lg'>4.9</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-yellow-400 text-yellow-400 font-medium" />
                ))}
              </div>
              <span className='text-lg'>Based on 120+ reviews</span>
            </div>
          </div>
        </section>
      );
    };
    
  

export default Stories