import React from "react";

const Products = () => {
  return (
    <main className="min-h-[70vh] bg-gradient-to-b from-[#8af3c4]/30 via-white to-white">
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <header className="mb-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
            Our products
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Styles for every day, every mood.
          </h1>
          <p className="max-w-2xl text-sm md:text-base text-gray-600">
            Explore UrbanCart essentials, from relaxed basics to statement
            pieces. Everything is curated to be easy to wear, easy to style,
            and easy on your pocket.
          </p>
        </header>

        {/* Highlight categories */}
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Everyday basics",
              desc: "Soft tees, casual shorts, and comfy joggers you can wear on repeat.",
            },
            {
              title: "Going‑out fits",
              desc: "Clean silhouettes and modern pieces made for dinners, dates, and weekends.",
            },
            {
              title: "Seasonal drops",
              desc: "Limited collections inspired by current trends and fresh color stories.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <h2 className="text-sm font-semibold text-gray-900 mb-2">
                {item.title}
              </h2>
              <p className="text-sm text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-10 text-xs md:text-sm text-gray-500">
          Tip: Use the Men, Women, and Kids sections in the navigation bar to
          browse full product collections.
        </p>
      </section>
    </main>
  );
};

export default Products;
