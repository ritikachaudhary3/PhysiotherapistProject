import React from 'react'
import bgImage from '/src/assets/home.png'; // If using an imported local image



const Home = () => {
  

  // Smooth scroll function
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div
      className="relative h-screen flex px-12 items-center bg-center"
      style={{
        backgroundImage: `url(${bgImage})`, // Or use public path: url('/bg.jpg')
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* Content */}
      <div className="relative z-10  px-4 md:px-8">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Recover. Restore. 
          <br className="hidden md:block " /> 
          <span className="mt-6 block">Rebuild.</span>
        </h1>

        <p className="text-md sm:text-lg md:text-xl text-[#fff] mb-8">
          Personalized physiotherapy sessions tailored to your needs
        </p>

        <div className="flex flex-col sm:flex-row items-start gap-4 mt-14">
          <button onClick={() => scrollToSection('contactus')} className="bg-white text-[#4A5568] px-8 py-3 rounded-full font-lato text-[18px] font-medium hover:bg-gray-100 transition">
            Book an Appointment
          </button>
          <button onClick={() => scrollToSection('service')} className="border border-white  text-[18px] px-8 py-3 rounded-full font-medium text-white hover:bg-white hover:text-black transition min-w-[220px]">
          View Service <span className='text-2xl'>→</span>
          </button>
        </div>
      </div>
    </div>
  );
};





export default Home;