import React from "react";
import hand_icon from "../../assets/hand_icon.png";
import arrow_icon from "../../assets/arrow_icon.png";
import men from "../../assets/p8.webp";

const Hero = () => {
  return (
    <div className="h-screen flex bg-gradient-to-b from-[#47fdae] to-[#e1ffea22]">
      {/* Left */}
      <div className="flex-1 flex flex-col justify-center pl-20">
        <h2 className="text-[#090909] text-xl font-semibold">
          Best Deals ! Best Prices !
        </h2>

        <div className="flex items-center gap-5">
          <p className="text-[#171717] text-[60px] font-bold">new</p>
          <img src={hand_icon} alt="hand" className="h-[60px]" />
        </div>

        <p className="text-[#171717] text-[60px] font-bold">collections</p>
        <p className="text-[#171717] text-[60px] font-bold">for everyone</p>

        <div className="mt-8 flex items-center justify-center gap-1 w-[300px] h-[50px] rounded-full bg-[#ff4141] text-white text-lg font-medium cursor-pointer">
          <span>Latest Collection</span>
          <img src={arrow_icon} alt="arrow" className="h-[30px]" />
        </div>
      </div>

      {/* Right */}
      <div className="flex-1 flex items-center justify-center">
        <img src={men} alt="model" className="h-[400px]" />
      </div>
    </div>
  );
};

export default Hero;
