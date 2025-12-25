import React, { useContext, useState } from "react";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addTocart } = useContext(ShopContext);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");

  const images = [
    product.image,
    product.image,
    product.image,
    // Add more images later
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* LEFT - Images */}
        <div className="space-y-4 order-2 md:order-1">
          {/* Thumbnails */}
          <div className="flex flex-col gap-3 max-w-[160px]">
            {images.map((img, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`relative aspect-square rounded-lg border-2 overflow-hidden cursor-pointer transition ${
                  index === selectedImage
                    ? "border-gray-900 ring-2 ring-gray-900"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main image */}
          <div className="relative">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="w-full aspect-[4/5] rounded-2xl object-cover shadow-xl"
            />
          </div>
        </div>

        {/* RIGHT - Product info */}
        <div className="order-1 md:order-2 space-y-6">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <img src={star_icon} alt="" className="h-5" />
              <img src={star_icon} alt="" className="h-5" />
              <img src={star_icon} alt="" className="h-5" />
              <img src={star_icon} alt="" className="h-5" />
              <img src={star_dull_icon} alt="" className="h-5" />
            </div>
            <span className="text-sm text-gray-500">(130)</span>
          </div>

          {/* Prices */}
          <div className="flex items-baseline gap-4">
            <span className="text-2xl md:text-3xl font-bold text-[#ff4141]">
              ${product.new_price}
            </span>
            <span className="text-lg text-gray-400 line-through">
              ${product.old_price}
            </span>
          </div>

          {/* Description */}
          <p className="text-gray-600 leading-relaxed text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, eaque. Amet reiciendis minus modi eum soluta hic
            autem, rem corrupti quibusdam?
          </p>

          {/* Size selector */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Select Size
            </label>
            <div className="flex flex-wrap gap-3">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 rounded-lg font-medium border-2 transition-all ${
                    selectedSize === size
                      ? "border-gray-900 bg-gray-900 text-white shadow-md"
                      : "border-gray-200 bg-white hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to cart */}
          <button
            onClick={() => addTocart(product.id)}
            className="w-full max-w-md mx-auto md:mx-0 px-8 py-4 bg-[#ff4141] text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-[#ff2626] hover:shadow-xl hover:-translate-y-0.5 transition-all"
          >
            ADD TO CART
          </button>

          {/* Category & Tags */}
          <div className="space-y-2 text-sm">
            <p>
              <span className="font-semibold text-gray-900">Category: </span>
              <span className="text-gray-600">Women, T-Shirt, Crop Top</span>
            </p>
            <p>
              <span className="font-semibold text-gray-900">Tags: </span>
              <span className="text-gray-600">Modern, Latest, Trend Shorts</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
