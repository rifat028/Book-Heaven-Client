import React from "react";
import { Link } from "react-router";

// --- Placeholder/Mock Data ---
const mockGenres = [
  {
    name: "Fantasy",
    icon: "✨",
    color:
      "text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-300",
  },
  {
    name: "Mystery",
    icon: "🔍",
    color: "text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    name: "Sci-Fi",
    icon: "🚀",
    color:
      "text-indigo-600 bg-indigo-100 dark:bg-indigo-900 dark:text-indigo-300",
  },
  {
    name: "Non-Fiction",
    icon: "🧠",
    color: "text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300",
  },
  {
    name: "Thriller",
    icon: "🔪",
    color: "text-red-600 bg-red-100 dark:bg-red-900 dark:text-red-300",
  },
  {
    name: "Historical",
    icon: "🕰️",
    color:
      "text-yellow-600 bg-yellow-100 dark:bg-yellow-900 dark:text-yellow-300",
  },
];

// --- Main Top Genres Section Component ---

const TopGenres = () => {
  return (
    <section className="top-genres container mx-auto px-4 py-12">
      <h2 className="text-4xl font-extrabold text-center mb-10 text-gray-900 dark:text-white">
        <span className="inline-block border-b-4 border-yellow-500 pb-2">
          Explore Popular Genres
        </span>
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
        {mockGenres.map((genre) => (
          <div
            key={genre.name}
            // to={`/all-books?genre=${genre.name}`}
            className="genre-card block text-center p-6 sm:p-8 
                       bg-white dark:bg-gray-800 border-2 border-transparent rounded-xl 
                       shadow-md hover:shadow-xl transition-all duration-300 
                       transform hover:-translate-y-1 hover:border-indigo-500"
          >
            {/* Genre icon */}
            <div
              className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 text-3xl font-bold ${genre.color}`}
            >
              {genre.icon}
            </div>
            {/* Genre Name */}
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 dark:text-white">
              {genre.name}
            </h3>

            {/* Subtext */}
            <p className="text-sm text-indigo-600 dark:text-indigo-400 mt-1 font-medium">
              Explore Books
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopGenres;
