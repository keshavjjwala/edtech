"use client";

import React from 'react'
import Cards from './Cards';
import cardsData from './CardsData';

const Courses = () => {
    
    return (
        <div className="min-h-screen flex flex-col gap-2 items-center justify-center bg-gradient-to-r from-purple-300 to-pink-300">
            <h1 className="text-3xl md:text-4xl font-bold text-white text-center">Our Popular Courses</h1>
            <p className="mt-2 text-sm md:text-base text-white/70 text-center max-w-xl mx-auto leading-relaxed">
                Discover our most sought-after courses, carefully curated to meet the
                demands of today's learners.Diveinto engaging content crafted for
                success in every step of your educational journey.</p>
            <div>
                <div className='flex gap-15 mt-7  '>
                    {
                        cardsData.map((card, index) => {

                            return (
                                <Cards
                                    key={index}
                                    image={card.image}
                                    category={card.category}
                                    title={card.title}
                                    classes={card.classes}
                                    students={card.students}
                                    price={card.price}
                                    authorName={card.authorName}
                                    rating={card.rating}

                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Courses