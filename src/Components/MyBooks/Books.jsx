import React, { useRef, useState } from "react";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import EditBook from "./EditBook";

const Books = ({ myBooks }) => {
  const [books, setBooks] = useState(myBooks);
  const modalRef = useRef(null);

  const [editBook, setEditBook] = useState(null);

  console.log(books);

  const HandleDeleteClick = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://book-heaven-server-two.vercel.app/books/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("book deleted", data);
            if (data.deletedCount == 1) {
              const newBooks = books.filter((book) => book._id != id);
              setBooks(newBooks);
              Swal.fire({
                title: "Deleted",
                text: "Your Book has been deleted",
                icon: "success",
              });
            } else toast.error("Book was not deleted...!");
          });
      }
    });
  };

  const DisplayEditModal = (book) => {
    setEditBook(book);
    console.log(book);
    modalRef.current?.showModal();
  };

  return (
    <div className="w-full overflow-x-auto">
      <Toaster position="top-center" reverseOrder={false} />
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
                <div className="flex flex-row gap-2">
                  {/* delete button */}
                  <button
                    className="btn btn-xs sm:btn-sm btn-info text-white"
                    onClick={() => HandleDeleteClick(book._id)}
                  >
                    Delete
                  </button>
                  {/* update button */}
                  <button
                    className="btn btn-xs sm:btn-sm btn-info text-white"
                    onClick={() => DisplayEditModal(book)}
                  >
                    Update
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* modal display */}
      <dialog ref={modalRef} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          {editBook && (
            <EditBook
              key={editBook._id}
              book={editBook}
              books={books}
              setBooks={setBooks}
            ></EditBook>
          )}
          <div className="modal-action">
            <form method="dialog">
              <div className="flex justify-center">
                <button className="btn bg-red-600 hover:bg-red-700 text-white rounded-xl">
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Books;
