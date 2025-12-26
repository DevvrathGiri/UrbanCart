import React from "react";
import logo from "../../assets/logo.webp";

const About = () => {
  return (
    <main className="min-h-[70vh] bg-gradient-to-b from-[#8af3c4]/40 via-white to-white">
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        {/* Top section */}
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr] items-center">
          {/* Left: text */}
          <div className="space-y-5">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
              About UrbanCart
            </p>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Making everyday fashion easy, affordable & fun.
            </h1>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              UrbanCart is an online fashion destination built for modern
              shoppers. From everyday essentials to statement pieces, we curate
              styles that are fresh, comfortable, and ready for your daily life.
            </p>

            <p className="text-sm md:text-base text-gray-600 leading-relaxed">
              We focus on quality fabrics, clean fits, and honest pricing so you
              can upgrade your wardrobe without overthinking every purchase.
              Fast delivery, easy returns, and secure checkout keep the whole
              experience smooth.
            </p>

            {/* Stats row */}
            <div className="mt-4 grid grid-cols-3 gap-4 max-w-sm text-center">
              <div className="rounded-2xl bg-white/80 border border-gray-100 shadow-sm px-3 py-3">
                <p className="text-xl md:text-2xl font-bold text-gray-900">
                  5K+
                </p>
                <p className="text-[11px] md:text-xs text-gray-500">
                  Happy customers
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 border border-gray-100 shadow-sm px-3 py-3">
                <p className="text-xl md:text-2xl font-bold text-gray-900">
                  1K+
                </p>
                <p className="text-[11px] md:text-xs text-gray-500">
                  Products listed
                </p>
              </div>
              <div className="rounded-2xl bg-white/80 border border-gray-100 shadow-sm px-3 py-3">
                <p className="text-xl md:text-2xl font-bold text-gray-900">
                  48h
                </p>
                <p className="text-[11px] md:text-xs text-gray-500">
                  Avg. delivery time
                </p>
              </div>
            </div>
          </div>

          {/* Right: logo / card */}
          <div className="justify-self-center w-full max-w-xs">
            <div className="rounded-3xl bg-white shadow-[0_18px_60px_rgba(15,23,42,0.18)] border border-white/70 p-6 flex flex-col items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-900">
                <img
                  src={logo}
                  alt="UrbanCart logo"
                  className="h-10 w-10 object-contain"
                />
              </div>
              <div className="text-center space-y-1">
                <p className="text-lg font-semibold text-gray-900">
                  UrbanCart
                </p>
                <p className="text-[11px] uppercase tracking-[0.22em] text-gray-500">
                  Best deals · Best prices
                </p>
              </div>
              <p className="text-xs text-gray-500 leading-relaxed">
                Built for people who love discovering new looks without spending
                hours browsing or overpaying.
              </p>
            </div>
          </div>
        </div>

        {/* Mission & values */}
        <section className="mt-16 grid gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5 space-y-2">
            <h2 className="text-sm font-semibold text-gray-900">
              Our mission
            </h2>
            <p className="text-sm text-gray-600">
              Make good style accessible with a simple, intuitive shopping
              experience and fair pricing.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5 space-y-2">
            <h2 className="text-sm font-semibold text-gray-900">
              What we care about
            </h2>
            <p className="text-sm text-gray-600">
              Comfort, quality, and reliable service – from curated products to
              quick support when you need it.
            </p>
          </div>

          <div className="rounded-2xl bg-white border border-gray-100 shadow-sm p-5 space-y-2">
            <h2 className="text-sm font-semibold text-gray-900">
              Shopping made simple
            </h2>
            <p className="text-sm text-gray-600">
              Clear categories, clean UI, and secure checkout so you can go from
              browsing to order in just a few clicks.
            </p>
          </div>
        </section>
      </section>
    </main>
  );
};

export default About;
