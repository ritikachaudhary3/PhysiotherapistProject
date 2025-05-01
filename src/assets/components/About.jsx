import React from 'react'
import Img from '/src/assets/aboutimg.png'

import { ArrowRight, Award } from 'lucide-react'; // Make sure you have lucide-react installed



const About = () => {
  return (
    <section id="about" className="bg-[#fff] py-20 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-28">
        
        {/* Image Section */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mx-auto">
            <img 
              src={Img} 
              alt="Dr. Radhika Sharma" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Experience Badge */}
          <div className="flex justify-center mt-6">
            <div className="flex items-center bg-white px-5 py-2 rounded-full text-sm font-semibold text-[#4A5568] gap-2 shadow-md">
              <Award className="w-4 h-4 text-pink-500" />
              15+ Years Experience
            </div>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-4xl font-bold text-[#4A5568] mb-4">
            Dr. Radhika Sharma, MPT
          </h2>
          <p className="text-lg font-semibold text-[#4A5568] mb-4">
            Senior Physiotherapist
          </p>
          <p className="text-[#4A5568] mb-4 max-w-2xl">
            With over 15 years of experience in physiotherapy, I specialize in providing personalized treatment plans that focus on long-term recovery and prevention. My approach combines traditional techniques with modern evidence-based practices to ensure optimal results for each patient.
          </p>
          <p className="text-[#4A5568] mb-6 max-w-2xl">
            I'm committed to helping you achieve your health goals through dedicated one-on-one sessions and comprehensive care plans tailored to your specific needs.
          </p>

          {/* Awards */}
          <div className="flex flex-col sm:flex-row gap-4 mb-6">
            <div className="flex items-center gap-2 text-sm text-[#4A5568]">
              <Award className="w-4 h-4 text-pink-500" />
              <div>
                Top Rehab Specialist
                <div className="text-xs text-gray-500">Delhi Health Award 2019</div>
              </div>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#4A5568]">
              <Award className="w-4 h-4 text-pink-500" />
              <div>
                Best Physiotherapist
                <div className="text-xs text-gray-500">India Medical Forum 2023</div>
              </div>
            </div>
          </div>

          {/* View Full Bio */}
          <div className="flex items-center gap-2 text-blue-600 cursor-pointer hover:underline font-semibold">
            View Full Bio
            <ArrowRight className="w-4 h-4" />
          </div>
        </div>

      </div>
    </section>
  );
};







export default About