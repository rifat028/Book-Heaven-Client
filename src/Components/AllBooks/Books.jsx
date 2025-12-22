import React, { use } from "react";
import { useNavigate } from "react-router";

const Books = ({ bookPromise }) => {
  const books = use(bookPromise);
  const navigate = useNavigate();

  // console.log(books);

  return (
    <div className="w-full overflow-x-auto">
      <table className="table table-sm sm:table-md md:table-lg">
        <thead className="bg-gray-200 dark:bg-gray-700">
          <tr>
            <th className="text-gray-800 dark:text-gray-100">Name</th>

            {/* HIDE THESE ON MOBILE */}
            <th className="hidden sm:table-cell text-gray-800 dark:text-gray-100">
              Author
            </th>
            <th className="hidden sm:table-cell text-gray-800 dark:text-gray-100">
              Genre
            </th>
            <th className="hidden sm:table-cell text-gray-800 dark:text-gray-100">
              Rating
            </th>

            <th className="text-gray-800 dark:text-gray-100">Action</th>
          </tr>
        </thead>

        <tbody>
          {books.map((book, index) => (
            <tr
              key={index}
              className="hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            >
              {/* NAME */}
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask h-10 w-10 sm:h-12 sm:w-12">
                      <img src={book.coverImage} alt="Book Cover" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                      {book.title}
                    </div>
                    {/* Small description for mobile */}
                    <p className="text-xs text-gray-500 dark:text-gray-400 sm:hidden">
                      {book.genre} • ⭐ {book.rating}
                    </p>
                  </div>
                </div>
              </td>

              {/* AUTHOR (hidden on mobile) */}
              <td className="hidden sm:table-cell text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                {book.author}
              </td>

              {/* GENRE (hidden on mobile) */}
              <td className="hidden sm:table-cell text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                {book.genre}
              </td>

              {/* RATING (hidden on mobile) */}
              <td className="hidden sm:table-cell text-gray-900 dark:text-gray-100">
                ⭐ {book.rating}
              </td>

              {/* ACTION */}
              <td>
                <button
                  className="btn btn-xs sm:btn-sm btn-info text-white"
                  onClick={() => navigate(`/all-books/${book._id}`)}
                >
                  <span className="hidden md:inline">View</span> Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
