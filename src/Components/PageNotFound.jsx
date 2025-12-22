import React from "react";
import { useNavigate } from "react-router";

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="text-center p-8 bg-white rounded-xl shadow-2xl max-w-lg w-full">
        <h1 className="text-9xl font-extrabold text-emerald-600 mb-4 transition-transform duration-500 ease-in-out hover:scale-105">
          404
        </h1>
        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          Oops! Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          We can't seem to find the page you're looking for. It might have been
          moved, deleted, or you might have mistyped the address.
        </p>
        <button
          onClick={handleGoHome}
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-emerald-600 hover:bg-emerald-700 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-50 transform hover:-translate-y-0.5"
        >
          Go Back to Homepage
        </button>
      </div>
    </div>
  );
};

export default PageNotFound;
