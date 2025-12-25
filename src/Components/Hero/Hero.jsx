import React from "react";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow_icon.png";
import men from "../../assets/p8.webp";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-[#47fdae] to-[#e1ffea22]">
      <div className="max-w-6xl mx-auto flex flex-col-reverse items-center gap-10 px-4 py-12 md:flex-row md:py-20">
        {/* Left */}
        <div className="flex-1 flex flex-col justify-center text-center md:text-left">
          <p className="text-sm font-semibold tracking-[0.2em] text-gray-800 uppercase">
            Best deals · Best prices
          </p>

          <div className="mt-4 flex items-center justify-center gap-3 md:justify-start">
            <p className="text-4xl md:text-5xl font-bold text-[#171717]">
              New
            </p>
            <img src={hand_icon} alt="hand" className="h-10 md:h-12" />
          </div>

          <p className="text-4xl md:text-5xl font-bold text-[#171717] mt-1">
            collections
          </p>
          <p className="text-4xl md:text-5xl font-bold text-[#171717]">
            for everyone
          </p>

          <p className="mt-4 max-w-md text-sm md:text-base text-gray-700 mx-auto md:mx-0">
            Discover fresh arrivals, exclusive discounts, and curated picks
            designed to fit every style and occasion.
          </p>

          <button className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-[#ff4141] px-8 py-3 text-sm md:text-base font-semibold text-white shadow-md hover:bg-[#ff2626] transition">
            <span>Shop latest collection</span>
            <img src={arrow_icon} alt="arrow" className="h-5" />
          </button>
        </div>

        {/* Right */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-white/50 blur-2xl" />
            <img
              src={men}
              alt="model"
              className="relative h-72 w-auto md:h-[420px] object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
