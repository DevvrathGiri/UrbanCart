import React from "react";

const Offices = () => {
  return (
    <main className="min-h-[70vh] bg-white">
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <header className="mb-8 space-y-3">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
            Our offices
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            A digital‑first brand with real teams.
          </h1>
          <p className="max-w-2xl text-sm md:text-base text-gray-600">
            UrbanCart works remotely, but we operate from a small set of core
            hubs to keep logistics, support, and operations smooth.
          </p>
        </header>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-gray-100 bg-gray-50/80 p-5">
            <h2 className="text-sm font-semibold text-gray-900 mb-1">
              HQ · Gurugram
            </h2>
            <p className="text-sm text-gray-600">
              Product, design, and engineering teams building the UrbanCart
              experience.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-gray-50/80 p-5">
            <h2 className="text-sm font-semibold text-gray-900 mb-1">
              Fulfilment Center
            </h2>
            <p className="text-sm text-gray-600">
              Warehousing and packaging partners handling orders with care and
              quick dispatch.
            </p>
          </div>
          <div className="rounded-2xl border border-gray-100 bg-gray-50/80 p-5">
            <h2 className="text-sm font-semibold text-gray-900 mb-1">
              Support Team
            </h2>
            <p className="text-sm text-gray-600">
              Distributed customer support team available over email and chat to
              help you with any order.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Offices;
