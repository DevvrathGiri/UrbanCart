import React from "react";
import logo from "../../assets/logo.webp";
import instagram_icon from "../../assets/instagram.png";
import facebook_icon from "../../assets/facebook.png";
import whatsapp_icon from "../../assets/whatsapp.png";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center gap-12">
      {/* Logo */}
      <div className="flex items-center gap-5">
        <img src={logo} alt="logo" className="h-10" />
        <p className="text-[40px] font-bold text-[#383838]">Shopify</p>
      </div>

      {/* Links */}
      <ul className="flex gap-12 text-xl text-[#252525] list-none">
        <li className="cursor-pointer">About</li>
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Offices</li>
        <li className="cursor-pointer">Company</li>
        <li className="cursor-pointer">Contact</li>
      </ul>

      {/* Social Icons */}
      <div className="flex gap-5">
        {[instagram_icon, facebook_icon, whatsapp_icon].map((icon, index) => (
          <div
            key={index}
            className="p-2 pb-1.5 bg-[#fbfbfb] border border-[#ebebeb]"
          >
            <img src={icon} alt="social" className="h-[30px]" />
          </div>
        ))}
      </div>

      {/* Copyright */}
      <div className="flex flex-col items-center gap-8 w-full mb-8 text-xl text-[#1a1a1a]">
        <hr className="w-[80%] h-[3px] bg-[#c7c7c7] border-0 rounded-lg" />
        <p>Copyright © 2023 – All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
