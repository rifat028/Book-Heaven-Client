import React, { useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";

const Register = () => {
  const [eye, setEye] = useState(false);
  const error = null;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      {/* <Toaster position="top-center" reverseOrder={false} /> */}
      <div className="w-full max-w-lg bg-white p-8 md:p-10 rounded-xl shadow-2xl border-t-4 border-indigo-600 space-y-3">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">
            Create Your Account
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Join us and start exploring books today.
          </p>
        </div>

        <form
          className="space-y-3"
          // onSubmit={HandleRegister}
        >
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name <span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                name="name"
                type="text"
                placeholder="Your name Here"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address<span className="text-red-500">*</span>
            </label>
            <div className="mt-1">
              <input
                name="email"
                type="email"
                placeholder="you@example.com"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Photo URL
            </label>
            <div className="mt-1">
              <input
                name="photoUrl"
                type="photoUrl"
                placeholder="URL of The Photo Here"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password<span className="text-red-500">*</span>
            </label>
            <div className="mt-1 relative">
              <input
                name="password"
                type={eye ? "text" : "password"}
                placeholder="Create a strong password"
                required
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-emerald-500 focus:border-emerald-500 sm:text-sm"
              />
              <div
                className="absolute top-3 right-2"
                onClick={() => setEye(!eye)}
              >
                {!eye ? <IoEye /> : <IoMdEyeOff />}
              </div>
            </div>
          </div>

          {error && (
            <div className="text-red-500 font-semibold text-sm">{error}</div>
          )}

          <div className="mt-4">
            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition duration-150"
            >
              Register
            </button>
          </div>
        </form>

        <div className="flex items-center gap-2">
          <div className="w-full bg-gray-400 h-px"></div>
          <div>or</div>
          <div className="w-full bg-gray-400 h-px"></div>
        </div>

        <div>
          <button
            className="btn border-[#e5e5e5] w-full rounded-lg bg-black text-white hover:text-yellow-400"
            // onClick={HandleGoogleLogIn}
          >
            <FaGoogle />
            Sign In with Google
          </button>
        </div>

        <div className="text-center pt-2">
          <p className="text-sm text-gray-600">
            Already have an account?
            <a
              href="/login"
              className="font-bold text-indigo-600 hover:text-indigo-700 ml-1"
            >
              Log In
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
