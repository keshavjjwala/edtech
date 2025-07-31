"use client";

import React from 'react'

const Other = () => {
    return (
        <div className="bg-[#faf4fd] min-h-screen px-8 py-12 font-sans">
            {/* Search Bar */}
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Search Courses</h2>
                <div className="flex justify-center">
                    <input
                        type="text"
                        placeholder="Search for over 50+ courses"
                        className="px-6 py-3 w-72 rounded-l-full border-none focus:outline-none"
                    />
                    <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-r-full font-semibold">
                        Search
                    </button>
                </div>
            </div>

            {/* Grid Section */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-6">
                {/* Students Grid */}
                <div className="grid grid-cols-2 gap-4  rounded-3xl p-4">
                    <img src="/grp.png" alt="Student 1" className="rounded-2xl" />
                    {/* <img src="/images/boy1.png" alt="Student 2" className="rounded-2xl" />
                    <img src="/images/girl2.png" alt="Student 3" className="rounded-2xl" />
                    <img src="/images/boy2.png" alt="Student 4" className="rounded-2xl" /> */}
                </div>

                {/* Benefits Text */}
                <div className="max-w-md">
                    <h3 className="text-2xl font-semibold text-gray-800">
                        <span className="text-purple-500 font-bold">Benefits</span> From Our Online Learning
                    </h3>
                    <ul className="mt-6 space-y-4 text-gray-700 text-sm">
                        <li className="flex gap-4 items-start">
                            <span className="text-purple-600 text-xl">🎓</span>
                            <div>
                                <strong className="block">Online Degrees</strong>
                                <p>Earn accredited degrees from the comfort of your home, opening doors to a world of possibilities.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="text-pink-500 text-xl">📘</span>
                            <div>
                                <strong className="block">Short Courses</strong>
                                <p>Enhance your skills with concise and focused courses, designed for quick and effective learning.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="text-yellow-500 text-xl">👨‍🏫</span>
                            <div>
                                <strong className="block">Training From Experts</strong>
                                <p>Immerse yourself in knowledge with industry experts guiding you through hands-on experience.</p>
                            </div>
                        </li>
                        <li className="flex gap-4 items-start">
                            <span className="text-blue-500 text-xl">🎥</span>
                            <div>
                                <strong className="block">1.5k+ Video Courses</strong>
                                <p>Dive into a vast library of over 1.5k video courses covering many subjects, offering a visual learning experience.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};


export default Other