import React from "react";
import exclusive from "../../assets/exclu.webp";

const Offers = () => {
  return (
    <section className="w-[65%] h-[60vh] flex mx-auto mt-[150px] mb-[150px] px-[140px] bg-gradient-to-b from-[#e1ffea22] to-[#47fdae]">
      {/* Left */}
      <div className="flex-1 flex flex-col justify-center">
        <h1 className="text-[#171717] text-[40px] font-semibold">
          Exclusive
        </h1>
        <h1 className="text-[#171717] text-[40px] font-semibold">
          Offers For You
        </h1>

        <p className="text-[#171717] text-lg font-semibold mt-2">
          ONLY ON BEST SELLERS PRODUCTS
        </p>

        <button className="mt-8 w-[200px] h-[40px] rounded-full bg-[#ff4141] text-white text-base font-medium cursor-pointer">
          Check Now
        </button>
      </div>

      {/* Right */}
      <div className="flex-1 flex items-center justify-end">
        <img src={exclusive} alt="exclusive" className="h-[330px]" />
      </div>
    </section>
  );
};

export default Offers;
