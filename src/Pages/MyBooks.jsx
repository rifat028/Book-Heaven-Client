import React, { Suspense, use } from "react";
import { AuthContext } from "../Authentication/AuthContext";
import Books from "../Components/MyBooks/Books";
import Spinner from "../Components/Spinner";
import { useLoaderData } from "react-router";

const MyBooks = () => {
  const { user } = use(AuthContext);
  const myBooks = useLoaderData();
  return (
    <div>
      <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md mb-6">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mb-2">
          <span className="border-b-4 border-yellow-500 pb-2">
            Your All Books
          </span>
        </h1>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-4 pt-4">
          Browse your collection of books. Edit your books according to your
          necessity and delete them when they are no more in use.
        </p>
      </div>
      <Books myBooks={myBooks}></Books>
    </div>
  );
};

export default MyBooks;
