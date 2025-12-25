import React, { useState } from "react";

const Description = () => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <section className="max-w-5xl mx-auto my-16 px-4">
      {/* Tabs */}
      <div className="flex border-b border-gray-200">
        <button
          type="button"
          onClick={() => setActiveTab("description")}
          className={`px-6 py-3 text-sm font-semibold transition-colors ${
            activeTab === "description"
              ? "border-b-2 border-gray-900 text-gray-900"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          Description
        </button>

        <button
          type="button"
          onClick={() => setActiveTab("reviews")}
          className={`px-6 py-3 text-sm font-semibold transition-colors ${
            activeTab === "reviews"
              ? "border-b-2 border-gray-900 text-gray-900"
              : "text-gray-500 hover:text-gray-800"
          }`}
        >
          Reviews (135)
        </button>
      </div>

      {/* Content */}
      <div className="border border-gray-200 border-t-0 rounded-b-lg bg-white p-6 md:p-8 text-sm leading-relaxed text-gray-700">
        {activeTab === "description" && (
          <div className="space-y-4">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Praesentium reiciendis exercitationem amet totam nisi ullam
              cumque fugit magnam laudantium. Quis eos quam alias nisi
              explicabo ut, itaque qui fuga officiis.
            </p>
            <p>
              Maxime labore in molestiae, debitis vel, rem modi repudiandae
              ullam ipsam delectus dolores quibusdam reiciendis, hic temporibus
              beatae at aut possimus reprehenderit.
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed
              doloremque facilis neque non nihil quam veritatis a. Ratione
              dolore debitis quia possimus natus quo consequatur
              exercitationem quae unde, laboriosam iure!
            </p>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-base font-semibold text-gray-900">
                  Customer Reviews
                </p>
                <p className="text-xs text-gray-500">
                  4.5 out of 5 · Based on 135 reviews
                </p>
              </div>
              <button className="rounded-md bg-gray-900 px-4 py-2 text-xs font-semibold text-white hover:bg-black transition">
                Write a review
              </button>
            </div>

            {/* Placeholder review list */}
            <div className="border-t border-gray-200 pt-4 space-y-4">
              <div>
                <p className="text-sm font-semibold text-gray-900">
                  John Doe
                </p>
                <p className="text-xs text-gray-500 mb-1">
                  ★★★★☆ · 2 days ago
                </p>
                <p className="text-sm text-gray-700">
                  Great product, quality is better than expected. Shipping was
                  also fast.
                </p>
              </div>

              <div className="border-t border-gray-200 pt-4">
                <p className="text-sm font-semibold text-gray-900">
                  Jane Smith
                </p>
                <p className="text-xs text-gray-500 mb-1">
                  ★★★★★ · 1 week ago
                </p>
                <p className="text-sm text-gray-700">
                  Very comfortable and looks exactly like the photos.
                  Definitely recommend.
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
