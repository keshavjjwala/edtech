"use client";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React from "react";

const testimonials = [
  {
    name: "Alexa Rodriguez",
    role: "Web Developer",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback:
      "Enrolling in courses at this eLearning platform was a game-changer for me. Absolutely transformative experience!",
  },
  {
    name: "Emily Chen",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    feedback:
      "Exceptional courses! The practical insights and flexible learning structure have been instrumental in my professional growth.",
  },
  {
    name: "James Johnson",
    role: "Web Developer",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    feedback:
      "Highly recommend! The personalized feedback and real-world application in the courses have elevated my understanding.",
  },
  // Repeat samples
  {
    name: "Alexa Rodriguez",
    role: "Web Developer",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    feedback:
      "Enrolling in courses at this eLearning platform was a game-changer for me. Absolutely transformative experience!",
  },
  {
    name: "Emily Chen",
    role: "UI/UX Designer",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    feedback:
      "Exceptional courses! The practical insights and flexible learning structure have been instrumental in my professional growth.",
  },
  {
    name: "James Johnson",
    role: "Web Developer",
    img: "https://randomuser.me/api/portraits/men/3.jpg",
    feedback:
      "Highly recommend! The personalized feedback and real-world application in the courses have elevated my understanding.",
  },
];

export default function TestimonialSlider() {
  const splideRef = React.useRef(null);

  return (
    <div className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-bold">Student’s Testimonials</h2>
        <p className="text-sm md:text-base max-w-xl mx-auto mt-2">
          Here's what our students have to say about their transformative learning experience.
        </p>
      </div>

      <div className="relative">
        <Splide
          ref={splideRef}
          options={{
            perPage: 3,
            gap: "1.5rem",
            pagination: true,
            arrows: false,
            breakpoints: {
              1024: { perPage: 2 },
              640: { perPage: 1 },
            },
          }}
          className="px-2 md:px-4"
        >
          {testimonials.map((item, index) => (
            <SplideSlide key={index}>
              <div className="bg-white text-black p-6 rounded-xl shadow-lg h-full flex flex-col justify-between">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-purple-700">{item.name}</h3>
                    <p className="text-sm text-gray-600">{item.role}</p>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-800">{item.feedback}</p>
              </div>
            </SplideSlide>
          ))}
        </Splide>

        {/* Navigation Arrows */}
        <div className="flex flex-col items-center mt-8 space-y-4">
          <div className="flex justify-center gap-4">
            <button
              onClick={() => splideRef.current?.splide?.go("<")}
              aria-label="Previous testimonial"
              className="bg-white text-purple-600 px-4 py-2 rounded-full shadow hover:bg-gray-100 transition"
            >
              ←
            </button>
            <button
              onClick={() => splideRef.current?.splide?.go(">")}
              aria-label="Next testimonial"
              className="bg-white text-purple-600 px-4 py-2 rounded-full shadow hover:bg-gray-100 transition"
            >
              →
            </button>
          </div>

          {/* Pagination handled by Splide (auto placed) */}
          <div className="splide__pagination"></div>
        </div>
      </div>
    </div>
  );
}