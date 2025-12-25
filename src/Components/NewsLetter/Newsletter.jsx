import React from "react";

const Newsletter = () => {
  return (
    <section className="bg-gradient-to-r from-[#fde1ff] to-[#e1ffea22] py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Content */}
        <div className="mb-8">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4 leading-tight">
            Get Exclusive Offers
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Subscribe to our newsletter and stay updated with the latest deals
            and new arrivals.
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 min-w-0 px-4 py-3 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-full outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition"
          />
          <button className="px-8 py-3 bg-gray-900 text-white text-sm font-semibold rounded-full hover:bg-black focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
