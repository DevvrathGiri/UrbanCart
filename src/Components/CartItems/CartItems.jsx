import React, { useContext } from "react";
import remove_icon from "../../assets/remove.webp";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  return (
    <div className="mx-[70px] my-[50px]">
      {/* Header */}
      <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-8 py-3 text-[#454545] text-lg font-semibold">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>

      <hr className="h-[3px] bg-[#e2e2e2] border-0" />

      {/* Cart Items */}
      {all_product.map((e) => {
        if (cartItems[e.id] > 0) {
          return (
            <div key={e.id}>
              <div className="grid grid-cols-[0.5fr_2fr_1fr_1fr_1fr_1fr] items-center gap-8 py-3 text-[#454545] text-[15px] font-medium">
                <img src={e.image} alt="" className="h-[100px]" />
                <p>{e.name}</p>
                <p>${e.new_price}</p>

                <button className="h-10 w-[100px] border border-gray-300">
                  {cartItems[e.id]}
                </button>

                <p>${e.new_price * cartItems[e.id]}</p>

                <img
                  src={remove_icon}
                  alt="remove"
                  className="h-5 cursor-pointer"
                  onClick={() => removeFromCart(e.id)}
                />
              </div>
              <hr className="h-[3px] bg-[#e2e2e2] border-0" />
            </div>
          );
        }
        return null;
      })}

      {/* Bottom Section */}
      <div className="flex my-[70px] gap-20">
        {/* Total */}
        <div className="flex-1 flex flex-col gap-8 mr-[200px]">
          <h1 className="text-2xl font-semibold">Cart Totals</h1>

          <div>
            <div className="flex justify-between py-4">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />

            <div className="flex justify-between py-4">
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />

            <div className="flex justify-between py-4 font-semibold">
              <p>Total</p>
              <p>${getTotalCartAmount()}</p>
            </div>
          </div>

          <button className="w-[250px] h-[50px] bg-[#ff5a5a] text-white text-base font-semibold cursor-pointer">
            PROCEED TO CHECKOUT
          </button>
        </div>

        {/* Promo Code */}
        <div className="flex-1 text-base font-medium">
          <p className="text-[#555]">
            If you have a promo code, Enter it here
          </p>

          <div className="flex mt-4 bg-[#eaeaea] h-[50px] w-[300px]">
            <input
              type="text"
              placeholder="promo code"
              className="flex-1 px-4 bg-transparent outline-none text-base"
            />
            <button className="w-[150px] bg-black text-white text-base cursor-pointer">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItems;
