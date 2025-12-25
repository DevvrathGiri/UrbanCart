import React from "react";
import arrow_icon from "../../assets/arrow_icon.png";

const Bredcrums = ({ product }) => {
  return (
    <div className="flex items-center gap-2 justify-center my-8 text-[#5e5e5e] text-base font-semibold capitalize">
      Home
      <img src={arrow_icon} alt="arrow" className="h-[10px]" />
      Shop
      <img src={arrow_icon} alt="arrow" className="h-[10px]" />
      {product.category}
      <img src={arrow_icon} alt="arrow" className="h-[10px]" />
      {product.name}
    </div>
  );
};

export default Bredcrums;
