import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="w-[200px] border border-black rounded-2xl overflow-hidden transform transition duration-500 hover:scale-110">
      <Link to={`/product/${props.id}`}>
        <img
          src={props.image}
          alt={props.name}
          onClick={() => window.scrollTo(0, 0)}
          className="w-[200px] rounded-t-2xl"
        />
      </Link>

      <p className="my-1 mx-2">{props.name}</p>

      <div className="flex gap-5 pb-3">
        <span className="pl-2 text-[#374151] text-base font-semibold">
          ${props.new_price}
        </span>

        <span className="text-[#8c8c8c] text-base font-medium line-through">
          ${props.old_price}
        </span>
      </div>
    </div>
  );
};

export default Item;
