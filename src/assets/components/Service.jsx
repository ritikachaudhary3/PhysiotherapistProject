import React from 'react'
import { Brain, Activity, Medal,} from 'lucide-react'; // We'll use simple Lucide icons


const services = [
  {
    title: "Chronic Therapy",
    description: "Highly trained professionals in this field, employ a patient.",
    icon: <Brain className="w-10 h-10 " />,
  },
  {
    title: "Physio Therapy",
    description: "Hands-on treatments to improve mobility, reduce pain, and restore function.",
    icon: <Activity className="w-10 h-10 " />,
  },
  {
    title: "Sports Injuries",
    description: "Specialized treatment for athletes & sports-related injuries with focus on recovery.",
    icon: <Medal className="w-10 h-10 " />,
  },
];

const Service = () => {
  return (
    <section id="service" className="bg-[#F1F0FB] py-16 px-8">
      <div className="max-w-7xl mx-auto text-center">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl  font-poppins font-bold text-[#4A5568] mb-4">
          Our Service
          <span className="block w-20 h-1 bg-red-500 mt-2 mx-auto"></span>
        </h2>
        {/* Subtitle */}
        <p className="text-[#4A5568] text-lg mb-12 font-poppins">
          Comprehensive physiotherapy services tailored to your individual needs
        </p>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 px-14">
          {services.map((service, index) => (
            <div
            key={index}
            className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition transform  flex flex-col items-center "
          >
            <div className="mb-4">{service.icon}</div>  {/* Less bottom margin */}
            
            <h3 className=" font-poppins text-2xl font-semibold text-[#4A5568] mb-4">
              {service.title}
            </h3>
          
            <p className="font-poppins text-sm text-[#4A5568] mb-6">
              {service.description}
            </p>
          
            <button className="text-[#4A5568] text-[18px]  font-poppins font-medium flex items-center gap-2 hover:underline">
              View Full Bio
              <span className='text-2xl font-medium'>→</span>
            </button>
          </div>
          
          ))}
        </div>
      </div>
    </section>
  );
};



export default Service