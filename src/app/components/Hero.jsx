"use client";

import React from 'react';



const Hero = () => {
  return (
    <div>
      <div className='flex items-center justify-between mx-20'>
        <div className="flex flex-col gap-5">
          <h1 className='text-4xl md:text-5xl font-bold text-gray-800 leading-tight'>
            Develop your <br /> skills in a new <br /> and unique way
          </h1>
          <p className="text-gray-600 text-lg max-w-[40vw]">
            Explore a transformative approach to skill development on our online
            learning platform. Uncover a new realm of learning experiences and
            elevate your expertise in unique ways.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <button className="bg-[#d86eff] text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:bg-[#c25eff] transition">
              Enroll Now
            </button>

            <button className="flex items-center gap-2 text-[#d86eff] font-medium hover:underline">

              What’s Etech?
            </button>
          </div>

        </div>
        <div>
          <img
            src="/img.png"
            alt="Girl with books"
            className="w-[40vw]  mx-auto"
          />


        </div>
      </div>
      <div className="flex flex-wrap gap-12  px-2 py-8 items-center justify-center text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 text-white">
        <div className="flex items-center gap-2">
          <img src="/dd.jpg" alt="Duolingo" className="h-8" />
          <span>Duolingo</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="/mp.png" alt="Magic Leap" className="h-8" />
          <span>Magic leap</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="/ms.png" alt="Microsoft" className="h-8" />
          <span>Microsoft</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="/code.png" alt="Codecov" className="h-8" />
          <span>Codecov</span>
        </div>
        <div className="flex items-center gap-2">
          <img src="/user.png" alt="User Testing" className="h-8" />
          <span>Testing</span>
        </div>
      </div>
    </div>

  )
}

export default Hero