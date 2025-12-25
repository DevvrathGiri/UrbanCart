import React from "react";
import exclusive from "../../assets/exclu.webp";

const Offers = () => {
  return (
    <section className="bg-gradient-to-r from-[#e1ffea22] to-[#47fdae] py-20">
      <div className="max-w-6xl mx-auto px-4 flex flex-col-reverse items-center gap-12 lg:flex-row lg:gap-20">
        {/* Left */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Exclusive
          </h2>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Offers For You
          </h2>

          <p className="text-lg md:text-xl font-semibold text-gray-800 uppercase tracking-wide mb-8 max-w-lg mx-auto lg:mx-0">
            Only on best sellers products
          </p>

          <button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#ff4141] px-8 py-4 text-base font-semibold text-white shadow-lg hover:bg-[#ff2626] hover:shadow-xl transition transform hover:-translate-y-0.5">
            Check Now
          </button>
        </div>

        {/* Right */}
        <div className="flex-1 flex items-center justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-6 lg:-inset-8 bg-white/30 rounded-3xl blur-xl" />
            <img
              src={exclusive}
              alt="exclusive offers"
              className="relative h-72 md:h-96 lg:h-[420px] w-auto drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offers;
