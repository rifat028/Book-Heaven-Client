const LatestBooks = ({ latestBooks }) => {
  return (
    <div className="my-10 px-4 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center">
        <span className="border-b-4 border-yellow-500 pb-2"> Latest Books</span>
      </h2>
      <h4 className=" mt-8 text-xs md:text-lg text-center text-gray-700 dark:text-gray-300 max-w-4xl mx-auto mb-10 leading-relaxed">
        Explore all our latest books from top authors and various genre.
      </h4>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {latestBooks.slice(0, 6).map((book) => (
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
              <p className="text-gray-600 text-sm mb-2">by {book.author}</p>
              <p className="text-sm text-gray-500 mb-2">Genre: {book.genre}</p>
              <p className="text-yellow-500 text-sm mb-2">
                ⭐ Rating: {book.rating}
              </p>
              <p className="text-gray-700 text-sm line-clamp-3">
                {book.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestBooks;
