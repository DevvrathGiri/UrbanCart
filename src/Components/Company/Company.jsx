import React from "react";

const Company = () => {
  return (
    <main className="min-h-[70vh] bg-gradient-to-b from-white via-[#f4f7fb] to-white">
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <header className="mb-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
            Company
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Building a better way to shop fashion online.
          </h1>
          <p className="max-w-2xl text-sm md:text-base text-gray-600">
            UrbanCart started with a simple idea: make discovering good‑quality
            clothing as smooth as scrolling your feed. No confusing interfaces,
            no fake discounts, just clear options and reliable service.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-gray-900">
              What drives us
            </h2>
            <p className="text-sm md:text-base text-gray-600">
              We obsess over the details—from fabric selection to fit and
              packaging—so customers feel confident with every order they
              place.
            </p>
            <p className="text-sm md:text-base text-gray-600">
              Our small, focused team ships improvements regularly, listens to
              feedback, and keeps UrbanCart fast, reliable, and delightful.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold text-gray-900">
              How we work
            </h2>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>· Data‑driven decisions for what we stock and how we price.</li>
              <li>· Close collaboration with suppliers to maintain quality.</li>
              <li>· Clear policies around returns, refunds, and support.</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Company;
