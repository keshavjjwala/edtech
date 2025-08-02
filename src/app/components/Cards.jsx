"use client";

import React from 'react';

const Cards = ({ image, category, title, classes, students, price, authorName, authorImage, rating }) => {
    return (
        <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full sm:max-w-sm">
            <img src={image} alt={title} className="w-[95%] h-48 mx-auto mt-2 rounded-2xl object-cover" />

            <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                    <span className="text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded">{category}</span>
                    <span className="text-xs bg-purple-500 text-white px-2 py-1 rounded">{rating}</span>
                </div>

                <h3 className="font-semibold text-lg mb-2">{title}</h3>

                <div className="text-sm text-gray-600 mb-2">
                    📚 {classes} Classes • 👥 {students} Students
                </div>

                <div className="flex justify-between items-center mt-4">
                    <span className="font-semibold text-black">${price}</span>
                    <div className="flex items-center gap-2">
                        <img src={authorImage} alt={authorName} className="w-6 h-6 rounded-full" />
                        <span className="text-sm">{authorName}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;