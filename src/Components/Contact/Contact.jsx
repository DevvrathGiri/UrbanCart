import React from "react";

const Contact = () => {
  return (
    <main className="min-h-[70vh] bg-gradient-to-b from-[#8af3c4]/20 via-white to-white">
      <section className="max-w-6xl mx-auto px-4 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] items-start">
          {/* Left: form */}
          <div className="rounded-3xl border border-gray-100 bg-white shadow-sm p-6 md:p-8">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
              Contact us
            </h1>
            <p className="text-sm md:text-base text-gray-600 mb-6">
              Have a question about an order, product, or return? Send a message
              and the UrbanCart team will get back within 24 hours.
            </p>

            <form className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900/40"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900/40"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900/40 resize-none"
                  placeholder="Tell us how we can help..."
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex items-center justify-center rounded-full bg-[#ff4141] px-6 py-2.5 text-sm font-semibold text-white shadow-md hover:bg-[#ff2626] hover:shadow-lg transition"
              >
                Send message
              </button>
            </form>
          </div>

          {/* Right: contact info */}
          <div className="space-y-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-gray-500">
                Get in touch
              </p>
              <p className="mt-2 text-sm md:text-base text-gray-600">
                Reach us through any of the channels below. Support hours are
                10:00 AM – 7:00 PM IST, Monday to Saturday.
              </p>
            </div>

            <div className="space-y-4 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">Customer support</p>
                <p>support@urbancart.com</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">WhatsApp</p>
                <p>+91-90000-00000</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Office</p>
                <p>Gurugram, Haryana, India</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
