import React from "react";

const Newsletter = () => {
  return (
    <section className="w-full h-[50vh] flex flex-col items-center justify-center gap-8 px-[140px] mb-36 bg-gradient-to-b from-[#fde1ff] to-[#e1ffea22]">
      <h1 className="text-[#454545] text-[55px] font-semibold text-center">
        Get Exclusive Offers on Your Email
      </h1>

      <p className="text-[#454545] text-xl text-center">
        Subscribe to our newsletter and stay updated
      </p>

      <div className="flex items-center justify-between bg-white w-[700px] h-[50px] rounded-full border border-[#e3e3e3]">
        <input
          type="email"
          placeholder="Your Email id"
          className="w-[500px] ml-8 border-none outline-none text-[#616161] text-base bg-transparent"
        />
        <button className="w-[200px] h-[50px] rounded-full bg-black text-white text-base cursor-pointer">
          Subscribe
        </button>
      </div>
    </section>
  );
};

export default Newsletter;
