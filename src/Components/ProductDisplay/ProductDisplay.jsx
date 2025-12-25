import React, { useContext } from "react";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addTocart } = useContext(ShopContext);

  return (
    <section className="flex mx-12">
      {/* LEFT */}
      <div className="flex gap-4">
        {/* Image list */}
        <div className="flex flex-col gap-3">
          <img src={product.image} alt="" className="h-[160px]" />
          <img src={product.image} alt="" className="h-[160px]" />
          <img src={product.image} alt="" className="h-[160px]" />
        </div>

        {/* Main image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="h-[500px]"
          />
        </div>
      </div>

      {/* RIGHT */}
      <div className="mx-12 flex flex-col">
        <h1 className="text-[#3d3d3d] text-[40px] font-bold">
          {product.name}
        </h1>

        {/* Stars */}
        <div className="flex items-center gap-4 mt-2 text-[#1c1c1c] text-base">
          <img src={star_icon} alt="" className="h-5" />
          <img src={star_icon} alt="" className="h-5" />
          <img src={star_icon} alt="" className="h-5" />
          <img src={star_icon} alt="" className="h-5" />
          <img src={star_dull_icon} alt="" className="h-5" />
          <p>(130)</p>
        </div>

        {/* Prices */}
        <div className="flex gap-8 my-5 text-xl font-bold">
          <span className="text-[#818181] line-through">
            ${product.old_price}
          </span>
          <span className="text-[#ff4141]">
            ${product.new_price}
          </span>
        </div>

        {/* Description */}
        <p className="text-[#656565]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dignissimos, eaque. Amet reiciendis minus modi eum soluta hic
          autem, rem corrupti quibusdam?
        </p>

        {/* Sizes */}
        <div className="mt-3">
          <h2 className="text-[#656565] text-base font-semibold">
            Select Size
          </h2>

          <div className="flex gap-5 my-5">
            {["S", "M", "L", "XL", "XXL"].map((size) => (
              <div
                key={size}
                className="px-5 py-4 bg-[#fbfbfb] border border-[#ebebeb] rounded cursor-pointer hover:border-black"
              >
                {size}
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <button
          onClick={() => addTocart(product.id)}
          className="w-[400px] py-5 text-base font-semibold text-white bg-[#ff4141] cursor-pointer mb-5"
        >
          ADD TO CART
        </button>

        {/* Category & Tags */}
        <div className="mt-2">
          <span className="font-semibold">
            Category:{" "}
            <span className="font-normal">
              Women, T-Shirt, Crop Top
            </span>
          </span>
        </div>

        <div className="mt-2">
          <span className="font-semibold">
            Tags:{" "}
            <span className="font-normal">
              Modern, Latest, Trend Shorts
            </span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
