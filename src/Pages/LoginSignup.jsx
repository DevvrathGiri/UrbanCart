import React from "react";

const LoginSignup = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#47fdae] to-[#e1ffea22] py-12 px-4">
      <div className="max-w-md mx-auto bg-white rounded-3xl shadow-2xl border border-gray-100 p-8 md:p-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            Sign Up
          </h1>
          <p className="text-gray-600 text-sm">
            Create your account to start shopping
          </p>
        </div>

        <div className="space-y-5">
          <div>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full h-12 px-4 text-base font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff4141] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <input
              type="email"
              placeholder="Email Address"
              className="w-full h-12 px-4 text-base font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff4141] focus:border-transparent transition-all"
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full h-12 px-4 text-base font-medium text-gray-700 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff4141] focus:border-transparent transition-all"
            />
          </div>

          <button className="w-full h-12 bg-[#ff4141] text-white text-lg font-semibold rounded-xl shadow-lg hover:bg-[#ff2626] hover:shadow-xl hover:-translate-y-0.5 transition-all">
            Continue
          </button>
        </div>

        <p className="text-center mt-6 text-gray-600 text-sm font-medium">
          Already have an account?{" "}
          <button className="text-[#ff4141] font-semibold hover:underline transition">
            Login here
          </button>
        </p>

        <div className="flex items-start gap-3 mt-6">
          <input type="checkbox" id="agree" className="mt-1 h-4 w-4 text-[#ff4141] focus:ring-[#ff4141] border-gray-300 rounded" />
          <label htmlFor="agree" className="text-sm text-gray-600 font-medium leading-relaxed">
            By continuing, I agree to the terms of use & privacy policy.
          </label>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
