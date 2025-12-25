import React from "react";
import Item from "../Item/Item";
import data_product from "../../assets/data";

const Popular = () => {
  return (
    <section className="flex flex-col items-center gap-3 h-[90vh]">
      <h1 className="text-[#171717] text-[40px] font-semibold">
        POPULAR IN WOMEN
      </h1>

      <hr className="w-[200px] h-[6px] bg-[#252525] rounded-xl border-0" />

      <div className="flex gap-8 mt-12">
        {data_product.map((item, i) => (
          <Item
            key={i}
            id={item.id}
            name={item.name}
            image={item.image}
            new_price={item.new_price}
            old_price={item.old_price}
          />
        ))}
      </div>
    </section>
  );
};

export default Popular;
