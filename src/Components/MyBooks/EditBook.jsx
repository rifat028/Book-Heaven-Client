import React, { use, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../Authentication/AuthContext";
import { useNavigate } from "react-router";

const EditBook = ({ book, books, setBooks }) => {
  const { user } = use(AuthContext);
  const navigate = useNavigate(null);
  const [newBook, setNewBook] = useState({});

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const title = e.target.title.value;
    const author = e.target.author.value;
    const genre = e.target.genre.value;
    const rating = e.target.rating.value;
    const summary = e.target.summary.value;
    const coverImage = e.target.coverImage.value;
    const userEmail = e.target.userEmail.value;
    const userName = e.target.userName.value;

    const updatedBook = {
      title,
      author,
      genre,
      rating: parseInt(rating),
      summary,
      coverImage,
      userEmail,
      userName,
    };
    setNewBook(updatedBook);

    fetch(`https://book-heaven-server-two.vercel.app/books/${book._id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedBook),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("book updated", data);
        if (data.modifiedCount == 1) {
          const updatedBooks = books.map((currBook) => {
            if (currBook._id !== book._id) return currBook;
            // Merge updates but keep the object reference order intact
            return { ...currBook, ...updatedBook };
          });
          console.log("Books after Update:", updatedBooks);
          setBooks(updatedBooks);
          toast.success("Book updated Successfully...!");
        } else toast.error("Book could not updated...!");
      });
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 sm:p-8">
      <Toaster position="bottom-center" reverseOrder={false} />
      {/* ---------- TOP SECTION ---------- */}
      <div className="bg-linear-to-r from-purple-500 to-indigo-600 text-white rounded-2xl p-6 shadow-lg mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold">Update Your Book</h1>
        <p className="text-sm sm:text-base mt-2 opacity-90">
          Update information in the form below to update your book.
        </p>
      </div>

      {/* ---------- FORM SECTION ---------- */}
      <form
        onSubmit={handleSubmit}
        className="bg-white dark:bg-gray-800 shadow-lg p-6 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-6"
      >
        {/* Title */}
        <div className="sm:col-span-2">
          <label className="block text-gray-900 dark:text-gray-100 font-medium mb-1">
            Title
          </label>
          <input
            type="text"
            name="title"
            defaultValue={book.title}
            className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-gray-900 dark:text-gray-100 font-medium mb-1">
            Author
          </label>
          <input
            type="text"
            name="author"
            defaultValue={book.author}
            className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* Genre */}
        <div>
          <label className="block text-gray-900 dark:text-gray-100 font-medium mb-1">
            Genre
          </label>
          <input
            type="text"
            name="genre"
            defaultValue={book.genre}
            className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-gray-900 dark:text-gray-100 font-medium mb-1">
            Rating (1 - 5)
          </label>
          <select
            name="rating"
            defaultValue={book.rating}
            className="w-full input input-bordered dark:bg-gray-700 dark:text-white"
            required
          >
            <option value="">Select Rating</option>
            <option value="5">5 ⭐</option>
            <option value="4">4 ⭐</option>
            <option value="3">3 ⭐</option>
            <option value="2">2 ⭐</option>
            <option value="1">1 ⭐</option>
          </select>
        </div>

        {/* Cover Image */}
        <div>
          <label className="block text-gray-900 dark:text-gray-100 font-medium mb-1">
            Cover Image URL
          </label>
          <input
            type="text"
            name="coverImage"
            defaultValue={book.coverImage}
            className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
            required
          />
        </div>

        {/* Summary (Full width) */}
        <div className="sm:col-span-2">
          <label className="block text-gray-900 dark:text-gray-100 font-medium mb-1">
            Summary
          </label>
          <textarea
            name="summary"
            defaultValue={book.summary}
            rows="4"
            className="textarea textarea-bordered w-full dark:bg-gray-700 dark:text-white"
            required
          ></textarea>
        </div>

        {/* User Email */}
        <div>
          <label className="block text-gray-900 dark:text-gray-100 font-medium mb-1">
            User Email
          </label>
          <input
            type="email"
            name="userEmail"
            className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
            defaultValue={book.userEmail}
            required
          />
        </div>

        {/* User Name */}
        <div>
          <label className="block text-gray-900 dark:text-gray-100 font-medium mb-1">
            User Name
          </label>
          <input
            type="text"
            name="userName"
            className="input input-bordered w-full dark:bg-gray-700 dark:text-white"
            defaultValue={book.userName || user?.displayName}
            required
          />
        </div>

        {/* Submit button (Full width) */}
        <div className="sm:col-span-2">
          <button
            type="submit"
            className="btn w-full bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl"
          >
            Update Book
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
