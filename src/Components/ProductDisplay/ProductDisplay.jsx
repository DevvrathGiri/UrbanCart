import React, { useContext, useState } from "react";
import star_icon from "../../assets/star_icon.png";
import star_dull_icon from "../../assets/star_dull_icon.png";
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = ({ product }) => {
  const { addTocart } = useContext(ShopContext);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState("M");

  // real project me yahan different images aayengi
  const images = [product.image, product.image, product.image];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <div className="grid gap-10 lg:gap-14 lg:grid-cols-2">
        {/* LEFT - Gallery */}
        <div className="flex flex-col md:flex-row gap-4 lg:gap-6">
          {/* Thumbnails */}
          <div className="flex md:flex-col gap-3 md:w-24">
            {images.map((img, index) => (
              <button
                key={index}
                type="button"
                onClick={() => setSelectedImage(index)}
                className={`aspect-square w-20 md:w-full rounded-lg border transition ${
                  index === selectedImage
                    ? "border-gray-900 ring-1 ring-gray-900"
                    : "border-gray-200 hover:border-gray-400"
                }`}
              >
                <img
                  src={img}
                  alt={`${product.name} ${index + 1}`}
                  className="h-full w-full object-cover rounded-md"
                />
              </button>
            ))}
          </div>

          {/* Main image (controlled size) */}
          <div className="flex-1">
            <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-md bg-white">
              <img
                src={images[selectedImage]}
                alt={product.name}
                className="w-full h-[360px] md:h-[420px] lg:h-[460px] object-cover"
              />
            </div>
          </div>
        </div>

        {/* RIGHT - Info */}
        <div className="space-y-5">
          {/* Breadcrumb / small meta */}
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-500">
            UrbanCart · Women
          </p>

          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
            {product.name}
          </h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex gap-1">
              <img src={star_icon} alt="" className="h-4" />
              <img src={star_icon} alt="" className="h-4" />
              <img src={star_icon} alt="" className="h-4" />
              <img src={star_icon} alt="" className="h-4" />
              <img src={star_dull_icon} alt="" className="h-4" />
            </div>
            <span className="text-sm text-gray-500">4.0 · 130 reviews</span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-2xl md:text-3xl font-bold text-[#ff4141]">
              ${product.new_price}
            </span>
            <span className="text-lg text-gray-400 line-through">
              ${product.old_price}
            </span>
          </div>

          {/* Short description */}
          <p className="text-sm md:text-base text-gray-600 leading-relaxed">
            Soft, breathable fabric with a relaxed fit designed for everyday
            comfort. Perfect for pairing with jeans, joggers, or shorts for a
            casual modern look.
          </p>

          {/* Size selector */}
          <div className="pt-2 space-y-2">
            <span className="block text-sm font-semibold text-gray-800">
              Select size
            </span>
            <div className="flex flex-wrap gap-2">
              {["S", "M", "L", "XL", "XXL"].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`h-10 min-w-[44px] rounded-lg border text-sm font-medium transition ${
                    selectedSize === size
                      ? "border-gray-900 bg-gray-900 text-white"
                      : "border-gray-200 bg-white text-gray-800 hover:border-gray-400"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Add to cart */}
          <div className="pt-3 flex flex-col gap-3">
            <button
              onClick={() => addTocart(product.id)}
              className="inline-flex items-center justify-center rounded-lg bg-[#ff4141] px-6 py-3 text-sm md:text-base font-semibold text-white shadow-md hover:bg-[#ff2626] hover:shadow-lg transition"
            >
              Add to cart
            </button>
            <p className="text-xs text-gray-500">
              Free shipping over $49 · 7‑day easy returns.
            </p>
          </div>

          {/* Category & tags */}
          <div className="pt-2 space-y-1 text-sm text-gray-600">
            <p>
              <span className="font-semibold text-gray-900">Category: </span>
              Women, T‑Shirt, Crop Top
            </p>
            <p>
              <span className="font-semibold text-gray-900">Tags: </span>
              Modern, Latest, Trend Shorts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
