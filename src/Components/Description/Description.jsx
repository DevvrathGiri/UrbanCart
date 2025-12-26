import React, { useState } from "react";

const Description = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="max-w-5xl mx-auto my-16 px-4">
      {/* Tabs */}
      <div className="flex items-center gap-2 border-b border-gray-200">
        <button
          type="button"
          onClick={() => setActiveTab("description")}
          className={`relative px-5 py-3 text-sm font-semibold transition-colors
            ${
              activeTab === "description"
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-800"
            }`}
        >
          Description
          {activeTab === "description" && (
            <span className="absolute inset-x-0 -bottom-[1px] h-0.5 rounded-full bg-gray-900" />
          )}
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("reviews")}
          className={`relative px-5 py-3 text-sm font-semibold transition-colors
            ${
              activeTab === "reviews"
                ? "text-gray-900"
                : "text-gray-500 hover:text-gray-800"
            }`}
        >
          Reviews (135)
          {activeTab === "reviews" && (
            <span className="absolute inset-x-0 -bottom-[1px] h-0.5 rounded-full bg-gray-900" />
          )}
        </button>
      </div>

      {/* Content */}
      <div className="rounded-b-2xl border border-t-0 border-gray-200 bg-gray-50/70 p-6 md:p-8 text-sm leading-relaxed text-gray-700">
        {activeTab === "description" && (
          <div className="space-y-3 md:space-y-4">
            <p>
              Crafted from soft, breathable fabric designed for all‑day comfort,
              this piece keeps you cool while maintaining a clean, modern look.
            </p>
            <p>
              The relaxed fit gives you easy movement, while the precise
              stitching and premium feel make it suitable for daily wear or
              weekend outings.
            </p>
            <p>
              Pair it with jeans, joggers, or shorts to create effortless
              everyday outfits that feel as good as they look.
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-5">
            {/* Header + CTA */}
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div>
                <p className="text-base font-semibold text-gray-900">
                  Customer reviews
                </p>
                <p className="text-xs text-gray-500">
                  4.5 out of 5 · Based on 135 reviews
                </p>
              </div>
              <button className="rounded-full bg-gray-900 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-black transition">
                Write a review
              </button>
            </div>

            {/* Reviews list */}
            <div className="space-y-4 border-t border-gray-200 pt-4 text-sm">
              <div className="space-y-1">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-900">John Doe</p>
                  <span className="text-xs text-gray-500">★★★★☆ · 2 days ago</span>
                </div>
                <p className="text-gray-700">
                  Great product, quality is better than expected and the fit is
                  perfect. Shipping was also fast.
                </p>
              </div>

              <div className="space-y-1 border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-gray-900">Jane Smith</p>
                  <span className="text-xs text-gray-500">
                    ★★★★★ · 1 week ago
                  </span>
                </div>
                <p className="text-gray-700">
                  Very comfortable and looks exactly like the photos. Definitely
                  recommend for everyday wear.
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Description;
