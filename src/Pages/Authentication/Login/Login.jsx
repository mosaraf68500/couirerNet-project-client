import React from "react";

const Login = () => {
  return (
    <div className=" flex items-center justify-center bg-gradient-to">
      <div className="p-8 rounded-2xl w-full">
        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Please login to your account
        </p>

        {/* Form */}
        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full input input-bordered focus:ring-2 focus:ring-neutral-400"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full input input-bordered focus:ring-2 focus:ring-neutral-400"
              required
            />
          </div>

          <div className="flex items-center justify-between text-sm">
            <a href="#" className="text-neutral-600 hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full btn btn-neutral mt-2 hover:scale-[1.02] transition-transform duration-200"
          >
            Login
          </button>
        </form>

        {/* Footer */}
        <p className="text-center text-gray-500 text-sm mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-neutral-600 font-medium hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
