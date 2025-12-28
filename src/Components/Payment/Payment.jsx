import React, { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";

const Payment = () => {
  const { getTotalCartAmount } = useContext(ShopContext);
  const total = getTotalCartAmount();

  // dummy shipping/tax
  const shipping = total > 0 ? 0 : 0;
  const grandTotal = total + shipping;

  return (
    <main className="min-h-[70vh] bg-gradient-to-b from-[#8af3c4]/20 via-white to-white">
      <section className="max-w-6xl mx-auto px-4 py-12 md:py-16">
        {/* heading */}
        <div className="mb-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
            Secure checkout
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
            Payment details
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            Enter your billing and card information to complete your UrbanCart
            order.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] items-start">
          {/* LEFT – billing + payment form */}
          <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-6 md:p-8 space-y-6">
            {/* Billing info */}
            <div className="space-y-3">
              <h2 className="text-sm font-semibold text-gray-900">
                Billing information
              </h2>

              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    First name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900/40"
                    placeholder="Devvrath"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Last name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900/40"
                    placeholder="Giri"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900/40"
                  placeholder="Dev@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Shipping address
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900/40"
                  placeholder="House, street, area"
                />
              </div>

              <div className="grid gap-4 md:grid-cols-3">
                <div className="md:col-span-1">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900/40"
                    placeholder="New Delhi"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    State
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900/40"
                    placeholder="Delhi"
                  />
                </div>
                <div className="md:col-span-1">
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    PIN code
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900/40"
                    placeholder="122001"
                  />
                </div>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Payment method */}
            <div className="space-y-4">
              <h2 className="text-sm font-semibold text-gray-900">
                Payment method
              </h2>

              {/* Card type pills (UI only) */}
              <div className="flex flex-wrap gap-3 text-xs">
                <button className="rounded-full border border-gray-900 bg-gray-900 px-3 py-1.5 font-semibold text-white">
                  Card
                </button>
                <button className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-gray-700">
                  UPI
                </button>
                <button className="rounded-full border border-gray-200 bg-white px-3 py-1.5 text-gray-700">
                  Wallet
                </button>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-1">
                    Card number
                  </label>
                  <input
                    type="text"
                    inputMode="numeric"
                    className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900/40"
                    placeholder="1234 5678 9012 3456"
                  />
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Name on card
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900/40"
                      placeholder="Devvrath Giri"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      Expiry
                    </label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900/40"
                      placeholder="MM / YY"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-1">
                      CVV
                    </label>
                    <input
                      type="password"
                      className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900/40"
                      placeholder="***"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#ff4141] px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-[#ff2626] hover:shadow-lg transition"
            >
              Pay ${grandTotal}
            </button>

            <p className="mt-2 text-[11px] text-gray-500">
              By completing this payment you agree to UrbanCart&apos;s Terms of
              Service and return policy.
            </p>
          </div>

          {/* RIGHT – order summary */}
          <aside className="rounded-3xl border border-gray-100 bg-white shadow-sm p-6 md:p-7 space-y-4">
            <h2 className="text-sm font-semibold text-gray-900">
              Order summary
            </h2>

            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between">
                <span>Items subtotal</span>
                <span>${total}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-emerald-600 font-medium">
                  {shipping === 0 ? "Free" : `$${shipping}`}
                </span>
              </div>
              <div className="flex justify-between">
                <span>Estimated tax</span>
                <span>$0.00</span>
              </div>
              <hr />
              <div className="flex justify-between text-base font-semibold text-gray-900">
                <span>Amount to pay</span>
                <span>${grandTotal}</span>
              </div>
            </div>

            <p className="text-xs text-gray-500">
              Your card details are not actually processed in this demo. Integrate a real provider like Stripe or Razorpay for live payments.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
};

export default Payment;
