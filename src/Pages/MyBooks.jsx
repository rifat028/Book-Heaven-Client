import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext"; // ✅ Make sure this exists

const MyBooks = () => {
  const { user } = useContext(AuthContext); // user.email should be available
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.email) return;

    setLoading(true);
    axios
      .get(`http://localhost:3000/books?userEmail=${user.email}`)
      .then((res) => {
        setBooks(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching user books:", err);
        setLoading(false);
      });
  }, [user?.email]);

  const handleDelete = (id) => {
    const confirmDelete = confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;

    axios
      .delete(`http://localhost:3000/books/${id}`)
      .then(() => {
        setBooks((prev) => prev.filter((book) => book._id !== id));
      })
      .catch((err) => {
        console.error("Error deleting book:", err);
      });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[60vh]">
        <span className="loading loading-spinner loading-lg text-purple-500"></span>
      </div>
    );
  }

  return (
    <div className="my-10 px-4 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
        My Books
      </h2>

      {books.length === 0 ? (
        <p className="text-center text-gray-500">
          You haven’t added any books yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {books.map((book) => (
            <div
              key={book._id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition duration-300"
            >
              <img
                src={book.coverImage}
                alt={book.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-1">{book.title}</h3>
                <p className="text-gray-600 text-sm mb-1">by {book.author}</p>
                <p className="text-sm text-gray-500 mb-1">
                  Genre: {book.genre}
                </p>
                <p className="text-yellow-500 text-sm mb-2">
                  ⭐ Rating: {book.rating}
                </p>
                <button
                  onClick={() => handleDelete(book._id)}
                  className="mt-2 bg-red-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyBooks;
