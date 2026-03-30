import React, { use, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../Authentication/AuthContext";

const BookComment = ({ book }) => {
  const [comments, setComments] = useState([]);
  const { user } = use(AuthContext);

  useEffect(() => {
    fetch(
      `https://book-heaven-server-m5t7susex-istiak-ahmad-rifats-projects.vercel.app/comments?bookID=${book._id}`,
    )
      .then((res) => res.json())
      .then((data) => setComments(data));
  }, [book._id]);

  const HandleComment = (e) => {
    {
      e.preventDefault();
      const commentText = e.target.comment.value;

      if (!commentText.trim()) {
        toast.error("Comment cannot be empty!");
        return;
      }

      // Create Comment Object
      const newComment = {
        text: commentText,
        userName: user.displayName,
        userDP: user.photoURL,
        bookID: book._id,
      };
      //   console.log(newComment);
      fetch(
        "https://book-heaven-server-m5t7susex-istiak-ahmad-rifats-projects.vercel.app/comments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newComment),
        },
      )
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            setComments((prev) => [newComment, ...prev]);
            e.target.reset();
            toast.success("Comment added!");
          } else toast.error("Comment was not added...!");
        });
    }
  };

  return (
    <div className="mt-12 bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-6 md:p-8">
      {/* Section Title */}
      <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">
        Comments
      </h2>

      {/* Add New Comment */}
      <form onSubmit={HandleComment} className="mb-10">
        <label className="block text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2">
          Add a Comment
        </label>

        <textarea
          name="comment"
          className="textarea textarea-bordered w-full dark:bg-gray-700 dark:text-gray-100 rounded-xl p-3"
          rows="3"
          placeholder="Write your thoughts about this book..."
        />

        <button
          type="submit"
          className="mt-3 btn bg-indigo-600 text-white px-6 rounded-xl hover:bg-indigo-700 w-full md:w-auto"
        >
          Post Comment
        </button>
      </form>

      {/* Latest Comments */}
      <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100 mb-4">
        Latest Comments
      </h3>

      {comments.length == 0 ? (
        <p className="text-gray-600 dark:text-gray-400 italic">
          No comments yet. Be the first to comment!
        </p>
      ) : (
        <div className="space-y-4">
          {comments.map((c, index) => (
            <div
              key={index}
              className="p-4 border border-gray-300 dark:border-gray-700 rounded-xl bg-gray-50 dark:bg-gray-900"
            >
              {/* User Info */}
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={c.userDP}
                  alt="User DP"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <span className="text-gray-900 dark:text-gray-200 font-semibold">
                  {c.userName}
                </span>
              </div>

              {/* Comment Text */}
              <p className="text-gray-800 dark:text-gray-300 leading-relaxed">
                {c.text}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookComment;
