import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, image, name, new_price, old_price }) => {
  return (
    <div className="group rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm transition transform hover:-translate-y-1 hover:shadow-lg">
      <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
        <div className="aspect-[3/4] overflow-hidden bg-gray-50">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="px-3 pb-3 pt-2">
        <p className="text-sm font-medium text-gray-900 line-clamp-2">
          {name}
        </p>

        <div className="mt-2 flex items-center gap-3">
          <span className="text-base font-semibold text-gray-900">
            ${new_price}
          </span>
          <span className="text-sm font-medium text-gray-400 line-through">
            ${old_price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Item;
