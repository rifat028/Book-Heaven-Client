import toast, { Toaster } from "react-hot-toast";
import { useLoaderData } from "react-router";
import BookNotFound from "../Components/BookNotFound";
import BookComment from "./BookComment";
import Spinner from "../Components/Spinner";

const BookDetails = () => {
  const book = useLoaderData();

  if (!book._id) return <BookNotFound></BookNotFound>;
  return (
    <div className="container mx-auto px-4 py-10">
      <Toaster position="top-center" reverseOrder={false} />
      {/* Card Container */}
      <div className="flex flex-col md:flex-row gap-8 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 md:p-10 transition-all">
        {/* BOOK COVER */}
        <div className="w-full md:w-1/3">
          <img
            src={book.coverImage}
            alt={book.title}
            className="w-full h-[350px] md:h-[420px] object-cover rounded-xl shadow-lg"
          />
        </div>

        {/* RIGHT SIDE DETAILS */}
        <div className="w-full md:w-2/3 flex flex-col justify-between">
          {/* TITLE */}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            {book.title}
          </h1>

          {/* AUTHOR */}
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-2">
            <span className="font-semibold">Author:</span> {book.author}
          </p>

          {/* GENRE + RATING */}
          <div className="flex flex-wrap items-center gap-4 mt-3">
            <p className="px-4 py-1 text-sm rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-gray-100">
              {book.genre}
            </p>

            <p className="px-4 py-1 text-sm rounded-full bg-yellow-300 dark:bg-yellow-600 text-gray-900 dark:text-white font-semibold">
              ⭐ {book.rating} / 5
            </p>
          </div>

          {/* SUMMARY */}
          <div className="mt-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-2">
              Summary
            </h3>

            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              {book.summary}
            </p>
          </div>

          {/* USER INFO */}
          <div className="mt-6 border-t border-gray-300 dark:border-gray-600 pt-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
              Added By
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              {book.userName} ({book.userEmail})
            </p>
          </div>

          {/* ACTION BUTTONS */}
          <div className="mt-8 flex gap-4 flex-wrap">
            <button
              className="btn btn-primary px-6 text-white rounded-lg shadow-md"
              onClick={() => toast.success("Book read successfully...!")}
            >
              Read Now
            </button>

            <button
              className="btn bg-gray-900 dark:bg-gray-100 dark:text-gray-900 text-white px-6 rounded-lg shadow-md"
              onClick={() => toast.success("Book added to favorite...!")}
            >
              Add to Favorites
            </button>
          </div>
        </div>
      </div>

      {/* Comment Section */}
      <BookComment book={book}></BookComment>
    </div>
  );
};

export default BookDetails;
