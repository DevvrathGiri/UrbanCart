import React from "react";
import arrow_icon from "../../assets/arrow_icon.png";

const Breadcrumbs = ({ product }) => {
  return (
    <nav
      className="w-full border-b border-gray-100 bg-white"
      aria-label="Breadcrumb"
    >
      <ol className="max-w-6xl mx-auto flex items-center gap-1.5 px-4 py-3 text-sm text-gray-500">
        <li>
          <a
            href="/"
            className="inline-flex items-center gap-1 hover:text-gray-900 transition-colors"
          >
            <span className="font-medium">Home</span>
          </a>
        </li>

        <li className="flex items-center">
          <img src={arrow_icon} alt="" className="w-3 h-3 opacity-60" />
        </li>

        <li>
          <a
            href="/shop"
            className="inline-flex items-center gap-1 hover:text-gray-900 transition-colors"
          >
            <span className="font-medium">Shop</span>
          </a>
        </li>

        <li className="flex items-center">
          <img src={arrow_icon} alt="" className="w-3 h-3 opacity-60" />
        </li>

        <li>
          <a
            href={`/shop/${product?.category}`}
            className="inline-flex items-center gap-1 hover:text-gray-900 transition-colors capitalize"
          >
            <span className="font-medium">{product?.category}</span>
          </a>
        </li>

        <li className="flex items-center">
          <img src={arrow_icon} alt="" className="w-3 h-3 opacity-60" />
        </li>

        <li
          className="inline-flex items-center gap-1 text-gray-900 font-semibold truncate max-w-[45%] capitalize"
          aria-current="page"
        >
          <span title={product?.name}>{product?.name}</span>
        </li>
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
