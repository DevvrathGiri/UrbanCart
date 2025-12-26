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

  const isRouteActive = (item) =>
    menu === item.key || location.pathname === item.to;

  return (
    // same gradient as body + blur so navbar body se attached lage
    <header className=" top-0 z-30 border-b border-white/20 bg-gradient-to-r from-[#8af3c4]/70 via-[#76f0c1]/70 to-[#6de6ff]/70 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5 scale-120">
        {/* Logo section */}
        <Link
          to="/"
          className="flex items-center gap-5"
          onClick={() => setMenu("home")}
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-white shadow-lg">
            <img
              src={logo}
              alt="UrbanCart logo"
              className="h-12 w-12 object-contain"
            />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-3xl font-semibold tracking-tight text-gray-900">
              UrbanCart
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.25em] text-gray-600">
              Best deals · Best prices
            </span>
          </div>
        </Link>

        {/* Menu */}
        <ul className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          {navItems.map((item) => {
            const active = isRouteActive(item);
            return (
              <li key={item.key} className="relative">
                <Link
                  to={item.to}
                  onClick={() => setMenu(item.key)}
                  className={`transition-colors ${
                    active
                      ? "text-gray-900"
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  {item.label}
                </Link>
                {/* underline pill */}
                {active && (
                  <span className="absolute left-1/2 top-7 h-0.5 w-7 -translate-x-1/2 rounded-full bg-[#ff4141]" />
                )}
              </li>
            );
          })}
        </ul>

        {/* Login & Cart */}
        <div className="flex items-center gap-4">
          {/* glass / pill login button */}
          <Link to="/login">
            <button className="hidden md:inline-flex items-center justify-center rounded-full border border-white/40 bg-white/70 px-6 py-2 text-sm font-semibold text-gray-900 shadow-md shadow-white/40 backdrop-blur-md transition hover:bg-white hover:shadow-lg">
              Login
            </button>
          </Link>

          {/* glass icon pill cart */}
          <Link
            to="/cart"
            className="relative inline-flex items-center justify-center rounded-full border border-white/40 bg-white/70 p-3 shadow-md shadow-white/40 backdrop-blur-md transition hover:bg-white hover:shadow-lg"
          >
            <img src={cart_icon} alt="cart" className="h-6 w-6" />
            {getTotalCartItems() > 0 && (
              <span className="absolute -right-1.5 -top-1.5 flex h-5 min-w-[18px] items-center justify-center rounded-full bg-red-600 px-1 text-[11px] font-semibold text-white">
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
