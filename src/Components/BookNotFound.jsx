import React from "react";
import { useNavigate } from "react-router";

const BookNotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-8">
      <div className="text-center p-8 bg-white rounded-xl shadow-2xl max-w-lg w-full">
        <h1 className="text-7xl font-extrabold text-red-500 mb-4 transition-transform duration-500 ease-in-out hover:scale-105">
          Book Missing
        </h1>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">
          The requested Book could not be found.
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          It looks like the ID in the URL is invalid, or the Book you are
          searching for does not exist in our database. Please check the URL or
          browse our available Books.
        </p>

        <div className="space-y-4 sm:space-y-0 sm:space-x-4">
          <button
            onClick={handleGoHome}
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-emerald-600 hover:bg-emerald-700 transition duration-300 ease-in-out focus:outline-none focus:ring-4 focus:ring-emerald-500 focus:ring-opacity-50 transform hover:-translate-y-0.5"
          >
            Explore All Books
          </button>

          <button
            onClick={() => navigate(-1)} // Go back to the previous page
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg shadow-sm text-gray-700 bg-white hover:bg-gray-100 transition duration-300 ease-in-out focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookNotFound;
