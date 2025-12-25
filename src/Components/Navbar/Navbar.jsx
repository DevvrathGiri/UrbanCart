import React, { useState, useContext } from "react";
import logo from "../../assets/logo.webp";
import cart_icon from "../../assets/cart_icon.png";
import { Link } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const { getTotalCartItems } = useContext(ShopContext);

  return (
    <nav className="flex justify-around items-center p-4 shadow-[0_1px_3px_-2px_black]">
      {/* Logo */}
      <div className="flex items-center gap-1">
        <img src={logo} alt="logo" className="h-[50px]" />
        <p className="text-[#171717] text-[28px] font-semibold">Shopify</p>
      </div>

      {/* Menu */}
      <ul className="flex items-center gap-12 text-[#626262] text-lg font-medium list-none">
        <li
          onClick={() => setMenu("home")}
          className="flex flex-col items-center gap-1 cursor-pointer"
        >
          <Link to="/" className="no-underline text-[#626262]">
            Home
          </Link>
          {menu === "home" && (
            <hr className="w-[80%] h-[3px] bg-[#ff4141] rounded-lg border-0" />
          )}
        </li>

        <li
          onClick={() => setMenu("mens")}
          className="flex flex-col items-center gap-1 cursor-pointer"
        >
          <Link to="/mens" className="no-underline text-[#626262]">
            Men
          </Link>
          {menu === "mens" && (
            <hr className="w-[80%] h-[3px] bg-[#ff4141] rounded-lg border-0" />
          )}
        </li>

        <li
          onClick={() => setMenu("womens")}
          className="flex flex-col items-center gap-1 cursor-pointer"
        >
          <Link to="/womens" className="no-underline text-[#626262]">
            Women
          </Link>
          {menu === "womens" && (
            <hr className="w-[80%] h-[3px] bg-[#ff4141] rounded-lg border-0" />
          )}
        </li>

        <li
          onClick={() => setMenu("kids")}
          className="flex flex-col items-center gap-1 cursor-pointer"
        >
          <Link to="/kids" className="no-underline text-[#626262]">
            Kids
          </Link>
          {menu === "kids" && (
            <hr className="w-[80%] h-[3px] bg-[#ff4141] rounded-lg border-0" />
          )}
        </li>
      </ul>

      {/* Login & Cart */}
      <div className="flex items-center gap-11 relative">
        <Link to="/login">
          <button className="w-[140px] h-[40px] border border-[#7a7a7a] rounded-full text-[#515151] text-base font-medium bg-white cursor-pointer active:bg-[#f3f3f3]">
            Login
          </button>
        </Link>

        <Link to="/cart">
          <img src={cart_icon} alt="cart" className="h-[40px]" />
        </Link>

        <div className="absolute -top-4 -right-7 w-[22px] h-[22px] flex items-center justify-center rounded-full text-sm bg-red-600 text-white">
          {getTotalCartItems()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
