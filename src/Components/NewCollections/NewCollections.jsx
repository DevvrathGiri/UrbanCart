import React from "react";
import new_collections from "../../assets/newcollections";
import Item from "../Item/Item";

const NewCollections = () => {
  return (
    <section className="flex flex-col items-center gap-3 mb-24">
      <h1 className="text-[#171717] text-[40px] font-semibold">
        NEW COLLECTIONS
      </h1>

      <hr className="w-[200px] h-[6px] bg-[#252525] rounded-xl border-0" />

      <div className="grid grid-cols-4 gap-8 mt-12">
        {new_collections.map((item, i) => (
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

export default NewCollections;
