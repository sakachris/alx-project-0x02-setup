import React from "react";
import { type PostProps } from "../../interfaces";

const PostCard: React.FC<PostProps> = ({ title, content, userId }) => {
  return (
    <article className="bg-white shadow-md rounded-xl p-6 border border-gray-200 hover:shadow-lg transition">
      <h2 className="text-xl font-semibold mb-2 text-gray-800">{title}</h2>
      <p className="text-gray-700 mb-4">{content}</p>
      <span className="text-sm text-gray-500">👤 User ID: {userId}</span>
    </article>
  );
};

export default PostCard;
