import React from 'react'
import { CalendarDays, ArrowRight } from "lucide-react";
import img1 from'/src/assets/image1.png'
import img2 from '/src/assets/image2.png'


const blogs = [
  {
    title: "5 Exercises for Better Posture",
    description: "Simple daily exercises to improve your posture and reduce back pain...",
    category: "Shoulder Time",
    author: "Dr. Radhika Sharma",
    date: "19 January 2023",
    image: img1, // Replace with actual image
  },
  {
    title: "The Science Behind Movement And Muscle",
    description: "Combat the effects of sitting with these effective stretches...",
    category: "Shoulder Time",
    author: "Dr. Radhika Sharma",
    date: "29 May 2024",
    image: img2,
  },
];

const Blog = () => {
    return (
            <section id="blog" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-16 text-center ">
                  {/* Header */}
                  <h2 className="text-3xl md:text-4xl font-bold text-[#4A5568] mb-2">
                    Healthy Habit and Tips
                  </h2>
                  <span className="block w-16 h-1 bg-red-500 mt-2 mb-6 mx-auto"></span>
                  <p className="text-[#4A5568]  text-lg mb-12">
                    Blog stories of Recovering resilience from Physiotherapy
                  </p>
          
                  {/* Blog Cards */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {blogs.map((blog, idx) => (
                      <div
                      key={idx}
                      className="flex flex-col md:flex-row bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all p-4"
                    >
                      {/* Image Part */}
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full md:w-1/3 h-60 md:h-auto object-cover rounded-lg"
                      />
                    
                      {/* Text Content */}
                      <div className="p-6 flex flex-col justify-between text-left w-full md:w-2/3">
                        <div>
                          <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 text-sm text-gray-500">
                            <span className="bg-blue-100 text-[#4A5568] font-medium px-3 py-2 rounded-full text-xs mb-2 md:mb-0">
                              {blog.category}
                            </span>
                            <span className="text-[#4A5568] font-medium text-sm">{blog.author}</span>
                          </div>
                    
                          <h3 className="text-xl font-semibold text-[#4A5568] mb-2">{blog.title}</h3>
                          <p className="text-[#4A5568] mb-4 text-base">{blog.description}</p>
                    
                          <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
                            <CalendarDays className="w-4 h-4" />
                            <span className='font-medium '>{blog.date}</span>
                          </div>
                        </div>
                    
                        <div className="flex items-center justify-start">
                          <button className="flex items-center gap-2 hover:underline text-[#4A5568] font-semibold">
                            View Full Bio
                            <ArrowRight className="w-5 h-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                    
                    ))}
                  </div>
          
                  {/* Explore More Button */}
                  <div className="mt-12">
                    <button className="bg-gray-800 text-1xl text-[#F1F0FB] px-6 py-3 rounded-full flex items-center gap-2 mx-auto hover:bg-gray-700 transition">
                      Explore More <ArrowRight className="w-4 h-4 font-medium" />
                    </button>
                  </div>
                </div>
              </section>
  );
};



export default Blog