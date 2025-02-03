import React from 'react'
import picture from '/assets/Asset1.png'

const HeroSection = () => {
    return (
      <section className="flex items-center justify-center  bg-white ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center max-w-6xl mx-auto">
          {/* Left Content */}
          <div>
            <h4 className="text-blue-600 font-semibold text-lg">Hey There 👋 I am</h4>
            <h1 className="text-4xl font-bold text-gray-900 mt-2">Mohamed Anis</h1>
            <h2 className="text-lg text-gray-500 font-medium mt-1">
              <span className="text-gray-700 font-bold">Professional</span> Web Developer
            </h2>
            <p className="text-gray-600 mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean interdum consequat convallis.
            </p>
            <div className="mt-6 flex space-x-4">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition">
                Contact Me
              </button>
              <button className="bg-gray-900 text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-700 transition">
                Learn More
              </button>
            </div>
          </div>
  
          {/* Right Image */}
          <div className="relative">
            <img
              src={picture}
              alt="Mohamed Anis"
              className="w-60 md:w-80 rounded-full z-10 shadow-lg"
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default HeroSection;