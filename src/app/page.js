"use client";
import Courses from "./components/Courses";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Other from "./components/Other";
import TestimonialSlider from "./components/TestimonialSlider";
import GetInTouch from "./components/GetInTouch";
export default function Home() {
  return (
    <div className="flex flex-col  ">
      <Navbar/>
      <Hero/>
      <Courses/>
      <Other/>
      <TestimonialSlider/>
      <GetInTouch/>
    </div>
  );
}