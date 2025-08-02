import React from "react";

const GetInTouch = () => {
  return (
    <div className="w-full px-4 py-8 md:py-12">
      <div className="rounded-2xl w-full md:w-[70%] mx-auto text-white bg-gradient-to-r from-pink-400 to-purple-400 py-16 px-6 md:px-10">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get in Touch!</h2>
          <p className="mb-8 max-w-md font-semibold text-md">
            Subscribe to stay updated with discounts, promos, and more!
          </p>

          <form className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 rounded text-black bg-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              aria-label="Email address"
            />
            <button
              type="submit"
              className="bg-white text-purple-600 px-6 py-3 rounded font-bold text-lg hover:bg-gray-100 transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;