import React, { useState, useContext } from "react";
import logo from "../../assets/logo.webp";
import cart_icon from "../../assets/cart_icon.png";
import { Link, useLocation } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems } = useContext(ShopContext);
  const location = useLocation();

  const navItems = [
    { key: "home", label: "Home", to: "/" },
    { key: "mens", label: "Men", to: "/mens" },
    { key: "womens", label: "Women", to: "/womens" },
    { key: "kids", label: "Kids", to: "/kids" },
  ];

  return (
    <header className="border-b border-gray-100 bg-white">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="logo" className="h-10 w-auto" />
          <span className="text-2xl font-semibold text-gray-900">Shopify</span>
        </Link>

        {/* Menu */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
          {navItems.map((item) => {
            const isActive =
              menu === item.key ||
              location.pathname === item.to; // simple sync with route

            return (
              <li key={item.key} className="flex flex-col items-center gap-1">
                <Link
                  to={item.to}
                  onClick={() => setMenu(item.key)}
                  className={`transition-colors ${
                    isActive
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
                {isActive && (
                  <span className="h-0.5 w-7 rounded-full bg-[#ff4141]" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Login & Cart */}
        <div className="flex items-center gap-6">
          <Link to="/login">
            <button className="hidden md:inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-2 text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition">
              Login
            </button>
          </Link>

          <Link to="/cart" className="relative inline-flex">
            <img src={cart_icon} alt="cart" className="h-8 w-8" />
            {getTotalCartItems() > 0 && (
              <span className="absolute -top-1.5 -right-1.5 flex h-5 min-w-[20px] items-center justify-center rounded-full bg-red-600 px-1 text-[11px] font-semibold text-white">
                {getTotalCartItems()}
              </span>
            )}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
