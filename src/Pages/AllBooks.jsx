import React, { Suspense, useState } from "react";
import { useLoaderData } from "react-router";
import Books from "../Components/AllBooks/Books";
import Spinner from "../Components/Spinner";

const AllBooks = () => {
  const allBooks = useLoaderData();

  const defaultSortBooks = fetch(
    "https://book-heaven-server-two.vercel.app/books",
  ).then((res) => res.json());
  const ascendingSortBooks = fetch(
    "https://book-heaven-server-two.vercel.app/books?sort=asc",
  ).then((res) => res.json());
  const descendingSortBooks = fetch(
    "https://book-heaven-server-two.vercel.app/books?sort=dsc",
  ).then((res) => res.json());

  const [bookPromise, setBookPromise] = useState(defaultSortBooks);

  // console.log(defaultSortBooks, ascendingSortBooks, descendingSortBooks);

  const HandleSort = (e) => {
    const setSortType = e.target.value;
    if (setSortType == "default") setBookPromise(defaultSortBooks);
    if (setSortType == "asc") setBookPromise(ascendingSortBooks);
    if (setSortType == "dsc") setBookPromise(descendingSortBooks);

    console.log(bookPromise);
  };

  return (
    <div>
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-2">
          <span className="border-b-4 border-yellow-500 pb-2">
            Explore All Books
          </span>
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-4 pt-4">
          Browse our collection of books. Find your favorite genres, top-rated
          books, and discover new reads!
        </p>
        <div className="flex flex-col sm:flex-row justify-between items-center mt-4 ">
          <div className="border border-gray-300 dark:border-gray-600 rounded-sm px-3 py-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100">
            <span className="text-gray-800 dark:text-gray-200 mb-2 sm:mb-0 font-bold ">
              Books Found: {allBooks.length}
            </span>
          </div>
          <div>
            <select
              onChange={HandleSort}
              className="border border-gray-300 dark:border-gray-600 rounded-sm px-3 py-1 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100"
            >
              <option value="default">Sort by Rating: Default</option>
              <option value="asc">Sort by Rating: Low to High</option>
              <option value="dsc">Sort by Rating: High to Low</option>
            </select>
          </div>
        </div>
      </div>
      <Suspense fallback={<Spinner></Spinner>}>
        <Books bookPromise={bookPromise}></Books>
      </Suspense>
    </div>
  );
};

export default AllBooks;
