"use client";

import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-30 py-4 shadow-sm bg-white text-gray-700">
      {/* Left: Logo */}
      <div className="text-2xl font-semibold text-gray-800">
        Vtech<span className="text-gray-800"></span>
      </div>

      {/* Center: Navigation Links */}
      <div className="hidden md:flex gap-8 text-sm font-medium">
        <div className="cursor-pointer">Courses</div>
        <div className="cursor-pointer">Teachers</div>
        <div className="cursor-pointer">Offers</div>
        <div className="cursor-pointer">Contact</div>
      </div>

      {/* Right: Buttons */}
      <div className="flex gap-3">
        <button className="border border-pink-500 text-pink-500 px-4 py-1 rounded-md text-sm font-medium hover:bg-pink-50">
          Sign In
        </button>
        <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-md text-sm font-medium hover:opacity-90">
          Free Trial
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
