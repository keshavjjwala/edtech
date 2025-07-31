// src/components/TestimonialSlider.jsx
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
  // Add more testimonials if needed
];

export default function TestimonialSlider() {
  return (
    <div className="py-16 bg-gradient-to-br from-purple-500 to-pink-500 text-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Student’s Testimonials</h2>
        <p className="text-sm max-w-md mx-auto mt-2">
          Here's what our students have to say about their transformative learning experience.
        </p>
      </div>

      <Splide
        options={{
          perPage: 3,
          gap: "1rem",
          pagination: true,
          breakpoints: {
            1024: { perPage: 2 },
            640: { perPage: 1 },
          },
          arrows: false,
        }}
        className="px-4"
      >
        {testimonials.map((item, index) => (
          <SplideSlide key={index}>
            <div className="bg-white text-black p-6 rounded-xl shadow-lg h-full">
              <div className="flex items-center gap-4 mb-4">
                <img src={item.img} alt={item.name} className="w-12 h-12 rounded-full" />
                <div>
                  <h3 className="font-semibold text-purple-700">{item.name}</h3>
                  <p className="text-sm">{item.role}</p>
                </div>
              </div>
              <p className="text-sm">{item.feedback}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </div>
  );
}
