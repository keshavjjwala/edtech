"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Optional icons, or use any

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white text-gray-700 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          Vtech<span className="text-purple-600"></span>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-8 text-sm font-medium">
          <div className="cursor-pointer hover:text-purple-600">Courses</div>
          <div className="cursor-pointer hover:text-purple-600">Teachers</div>
          <div className="cursor-pointer hover:text-purple-600">Offers</div>
          <div className="cursor-pointer hover:text-purple-600">Contact</div>
        </div>

        {/* Action Buttons */}
        <div className="hidden md:flex gap-3">
          <button className="border border-pink-500 text-pink-500 px-4 py-1 rounded-md text-sm font-medium hover:bg-pink-50 transition">
            Sign In
          </button>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-md text-sm font-medium hover:opacity-90 transition">
            Free Trial
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label="Toggle Menu">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-3 text-sm font-medium">
          <div className="cursor-pointer hover:text-purple-600">Courses</div>
          <div className="cursor-pointer hover:text-purple-600">Teachers</div>
          <div className="cursor-pointer hover:text-purple-600">Offers</div>
          <div className="cursor-pointer hover:text-purple-600">Contact</div>

          <div className="flex flex-col gap-2 pt-4">
            <button className="border border-pink-500 text-pink-500 px-4 py-1 rounded-md text-sm font-medium hover:bg-pink-50 transition">
              Sign In
            </button>
            <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-1 rounded-md text-sm font-medium hover:opacity-90 transition">
              Free Trial
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;