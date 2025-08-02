"use client";

import React from 'react';

const Hero = () => {
  return (
    <div>
      {/* Main Hero Section */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-10">
        {/* Left Content */}
        <div className="flex flex-col gap-5 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
            Develop your <br /> skills in a new <br /> and unique way
          </h1>
          <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            Explore a transformative approach to skill development on our online
            learning platform. Uncover a new realm of learning experiences and
            elevate your expertise in unique ways.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 justify-center md:justify-start">
            <button className="bg-[#d86eff] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#c25eff] transition">
              Enroll Now
            </button>
            <button className="flex items-center gap-2 text-[#d86eff] font-medium hover:underline">
              What’s Etech?
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="mt-10 md:mt-0">
          <img
            src="/img.png"
            alt="Girl with books"
            className="w-full max-w-md md:max-w-lg mx-auto"
          />
        </div>
      </div>

      {/* Partner Logos */}
      {/* Partner Logos */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 px-4 py-8 items-center justify-center bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="flex items-center gap-2 justify-center">
          <img src="/dd.jpg" alt="Duolingo" className="w-6 sm:w-8 md:w-10" />
          <span className="text-sm sm:text-base md:text-lg font-semibold">Duolingo</span>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <img src="/mp.png" alt="Magic Leap" className="w-6 sm:w-8 md:w-10" />
          <span className="text-sm sm:text-base md:text-lg font-semibold">Magic Leap</span>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <img src="/ms.png" alt="Microsoft" className="w-6 sm:w-8 md:w-10" />
          <span className="text-sm sm:text-base md:text-lg font-semibold">Microsoft</span>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <img src="/code.png" alt="Codecov" className="w-6 sm:w-8 md:w-10" />
          <span className="text-sm sm:text-base md:text-lg font-semibold">Codecov</span>
        </div>
        <div className="flex items-center gap-2 justify-center">
          <img src="/user.png" alt="User Testing" className="w-6 sm:w-8 md:w-10" />
          <span className="text-sm sm:text-base md:text-lg font-semibold">Testing</span>
        </div>
      </div>

    </div>
  );
};

export default Hero;