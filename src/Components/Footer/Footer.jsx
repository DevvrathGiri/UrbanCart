import React from "react";
import logo from "../../assets/logo.webp";
import {Link} from "react-router-dom"
import instagram_icon from "../../assets/instagram.png";
import facebook_icon from "../../assets/facebook.png";
import whatsapp_icon from "../../assets/whatsapp.png";

const Footer = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-10 md:py-12">
        {/* Top row */}
        <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <img src={logo} alt="logo" className="h-9 w-auto" />
            <span className="text-2xl md:text-3xl font-bold text-gray-900">
              UrbanCart
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-4 md:gap-8 text-sm font-medium text-gray-600">
            <Link to="/About" ><button className="hover:text-gray-900 transition-colors">
              About
            </button></Link>
            
            <button className="hover:text-gray-900 transition-colors">
              Products
            </button>
            <button className="hover:text-gray-900 transition-colors">
              Offices
            </button>
            <button className="hover:text-gray-900 transition-colors">
              Company
            </button>
            <button className="hover:text-gray-900 transition-colors">
              Contact
            </button>
          </nav>

          {/* Social */}
          <div className="flex items-center gap-3">
            {[instagram_icon, facebook_icon, whatsapp_icon].map(
              (icon, index) => (
                <button
                  key={index}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-900 hover:border-gray-900 group transition"
                  aria-label="Social link"
                >
                  <img
                    src={icon}
                    alt="social"
                    className="h-4 w-4 object-contain group-hover:invert"
                  />
                </button>
              )
            )}
          </div>
        </div>

        {/* Divider & bottom */}
        <div className="mt-8 border-t border-gray-200 pt-5 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-gray-500">
            © 2025 UrbanCart. All rights reserved.
          </p>

          <div className="flex flex-wrap gap-4 text-xs text-gray-500">
            <button className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </button>
            <button className="hover:text-gray-900 transition-colors">
              Terms of Service
            </button>
            <button className="hover:text-gray-900 transition-colors">
              Cookies
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
