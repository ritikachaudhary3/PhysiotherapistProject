import React from "react";
import Img from '/src/assets/blogimg.png'
import { CalendarDays } from "lucide-react"; // For the calendar icon (optional)
import { ChevronRight } from "lucide-react"; // For breadcrumb arrow
import BlogContent from "./BlogContent";
import Navbar from "./Navbar";
import Footer from "./Footer";


const BlogPage = () => {
  
  return (
    <>
    <Navbar/>
    <section className="bg-[#F1F0FB] py-12 px-4">
      <div className="max-w-4xl mx-auto text-center">
        
        {/* Breadcrumb */}
        <div className="flex items-center justify-center text-[#4A5568] text-sm mb-4 gap-1">
          <a href="/" className="hover:underline">Home</a>
          <ChevronRight className="w-4 h-4" />
          <a href="/blogs" className="hover:underline">Blogs</a>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#4A5568] font-medium">5 Exercises for Better Posture</span>
        </div>

        {/* Category */}
        <p className="text-[#4A5568] text-sm mb-2">Daily Activity & lifestyle</p>

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[#4A5568] mb-4 leading-tight">
          5 exercises to improve posture, according to experts
        </h1>

        {/* Subtitle */}
        <p className="text-[#4A5568] mb-6">
          Perk up your posture with these expert-approved moves.
        </p>

        {/* Metadata (Date and Reading Time) */}
        <div className="flex items-center justify-center gap-8 text-[#4A5568] text-sm mb-8">
          <div className="flex items-center gap-2">
            <CalendarDays className="w-4 h-4" />
            <span>19 January 2023</span>
          </div>
          <div>6 Mins Read</div>
        </div>

        {/* Main Image */}
        <div className="overflow-hidden rounded-xl">
          <img
            src={Img}
            alt="Yoga Exercise"
            className="  w-full  object-cover"
          />
        </div>
      </div>
    </section>
    <BlogContent/>
    <Footer/>
    </>
    

  );
};

export default BlogPage;