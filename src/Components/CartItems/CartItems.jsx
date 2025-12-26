import React, { useContext } from "react";
import remove_icon from "../../assets/remove.webp";
import { ShopContext } from "../../Context/ShopContext";

const CartItems = () => {
  const { getTotalCartAmount, all_product, cartItems, removeFromCart } =
    useContext(ShopContext);

  const total = getTotalCartAmount();

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      {/* Page heading */}
      <div className="mb-8 flex flex-col gap-2">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
          Shopping Cart
        </h1>
        <p className="text-sm text-gray-500">
          Review your items and proceed to secure checkout.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[minmax(0,2.1fr)_minmax(0,0.9fr)]">
        {/* LEFT - Cart list */}
        <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
          {/* Header row */}
          <div className="hidden md:grid grid-cols-[2.2fr_1fr_1fr_1fr_auto] items-center gap-6 bg-gray-50 px-7 py-4 text-xs font-semibold tracking-wide text-gray-500 uppercase">
            <p>Product</p>
            <p className="text-center">Price</p>
            <p className="text-center">Qty</p>
            <p className="text-right">Total</p>
            <p className="text-center">Remove</p>
          </div>

          {/* Items */}
          <div className="divide-y divide-gray-100">
            {all_product.map((e) => {
              if (!cartItems[e.id]) return null;

              const lineTotal = e.new_price * cartItems[e.id];

              return (
                <div
                  key={e.id}
                  className="grid grid-cols-[minmax(0,2fr)] md:grid-cols-[2.2fr_1fr_1fr_1fr_auto] items-center gap-4 md:gap-6 px-5 md:px-7 py-5"
                >
                  {/* Product info */}
                  <div className="flex items-center gap-4 md:gap-5">
                    <img
                      src={e.image}
                      alt={e.name}
                      className="h-20 w-20 md:h-24 md:w-24 rounded-lg border border-gray-100 object-cover"
                    />
                    <div className="space-y-1">
                      <p className="text-sm md:text-base font-medium text-gray-900 line-clamp-1">
                        {e.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        ID: #{e.id.toString().padStart(4, "0")}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <p className="hidden md:block text-center text-sm md:text-base text-gray-700">
                    ${e.new_price}
                  </p>

                  {/* Quantity */}
                  <div className="flex md:justify-center">
                    <button className="inline-flex h-10 min-w-[80px] items-center justify-center rounded-full border border-gray-300 bg-white text-sm md:text-base font-medium text-gray-800">
                      {cartItems[e.id]}
                    </button>
                  </div>

                  {/* Line total */}
                  <p className="hidden md:block text-right text-sm md:text-base font-semibold text-gray-900">
                    ${lineTotal}
                  </p>

                  {/* Remove */}
                  <button
                    type="button"
                    onClick={() => removeFromCart(e.id)}
                    className="flex justify-end md:justify-center"
                  >
                    <img
                      src={remove_icon}
                      alt="remove"
                      className="h-4 w-4 cursor-pointer opacity-70 hover:opacity-100"
                    />
                  </button>

                  {/* Mobile: price + total */}
                  <div className="md:hidden col-span-full mt-1 flex justify-between text-xs text-gray-600">
                    <span>
                      Price:{" "}
                      <span className="font-medium">${e.new_price}</span>
                    </span>
                    <span>
                      Total:{" "}
                      <span className="font-semibold">${lineTotal}</span>
                    </span>
                  </div>
                </div>
              );
            })}

            {/* Empty state */}
            {total === 0 && (
              <div className="px-6 py-10 text-center text-sm text-gray-500">
                Your cart is empty. Add some products to see them here.
              </div>
            )}
          </div>
        </div>

        {/* RIGHT - Summary + promo */}
        <aside className="space-y-6">
          {/* Order summary */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm space-y-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Order summary
            </h2>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${total}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-emerald-600 font-medium">Free</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated tax</span>
                <span>$0.00</span>
              </div>
              <hr />
              <div className="flex justify-between text-base font-semibold text-gray-900">
                <span>Total</span>
                <span>${total}</span>
              </div>
            </div>

            <button className="mt-3 w-full rounded-full bg-[#ff4141] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#ff2626] hover:shadow-lg transition">
              Proceed to checkout
            </button>
          </div>

          {/* Promo code */}
          <div className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm space-y-3 text-sm">
            <p className="font-semibold text-gray-900">Have a promo code?</p>
            <p className="text-xs text-gray-500">
              Enter your coupon below to apply discounts to this order.
            </p>
            <div className="mt-2 flex rounded-full border border-gray-200 bg-gray-50 p-1">
              <input
                type="text"
                placeholder="Promo code"
                className="flex-1 bg-transparent px-3 text-xs md:text-sm outline-none"
              />
              <button className="rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold text-white hover:bg-black transition">
                Apply
              </button>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default CartItems;
