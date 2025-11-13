import React, { useState, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../Context/AuthContext"; // ✅ make sure this exists

const AddBooks = () => {
  const { user } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    genre: "",
    rating: "",
    coverImage: "",
    userEmail: user?.email || "",
  });
  const [loading, setLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccessMsg("");

    axios
      .post("http://localhost:3000/books", formData)
      .then((res) => {
        setLoading(false);
        setSuccessMsg("✅ Book added successfully!");
        setFormData({
          title: "",
          author: "",
          genre: "",
          rating: "",
          coverImage: "",
          userEmail: user?.email || "",
        });
      })
      .catch((err) => {
        console.error("Error adding book:", err);
        setLoading(false);
      });
  };

  return (
    <div className="max-w-lg mx-auto my-10 p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">Add a New Book</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Book Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-purple-300"
          />
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-medium mb-1">Author</label>
          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-purple-300"
          />
        </div>

        {/* Genre */}
        <div>
          <label className="block text-sm font-medium mb-1">Genre</label>
          <input
            type="text"
            name="genre"
            value={formData.genre}
            onChange={handleChange}
            placeholder="e.g. Mystery, Romance, Sci-Fi"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-purple-300"
          />
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium mb-1">Rating (1–5)</label>
          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            step="0.1"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-purple-300"
          />
        </div>

        {/* Cover Image */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Cover Image URL
          </label>
          <input
            type="text"
            name="coverImage"
            value={formData.coverImage}
            onChange={handleChange}
            placeholder="https://example.com/book.jpg"
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-purple-300"
          />
        </div>

        {/* Email (readonly) */}
        <div>
          <label className="block text-sm font-medium mb-1">Your Email</label>
          <input
            type="email"
            name="userEmail"
            value={formData.userEmail}
            readOnly
            className="w-full border border-gray-300 rounded-md px-3 py-2 bg-gray-100"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-purple-600 text-white py-2 rounded-md font-semibold hover:bg-purple-700 transition"
        >
          {loading ? "Adding..." : "Add Book"}
        </button>
      </form>

      {successMsg && (
        <p className="text-green-600 text-center mt-4 font-medium">
          {successMsg}
        </p>
      )}
    </div>
  );
};

export default AddBooks;
