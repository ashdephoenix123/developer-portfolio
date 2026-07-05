"use client";

import React, { useEffect, useRef, useState } from "react";
import CommentArea from "./CommentArea";
import { addComment, fetchComments } from "@/firebase/crud";
import { convertTimestampToDate } from "@/utils/helpers";

const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);
  const [userName, setUserName] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const lastVisibleRef = useRef(null);

  const loadComments = async () => {
    const { comments: commentsData, lastVisible: newLastVisible } =
      await fetchComments(postId, lastVisibleRef.current);
    lastVisibleRef.current = newLastVisible;
    setComments((prev) => [...prev, ...commentsData]);
  };

  useEffect(() => {
    loadComments();
  }, [postId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await addComment(postId, userName, content);
      setUserName("");
      setContent("");
      loadComments(); // reload comments after submission
    } catch (error) {
      console.log("Error", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-screen-md mx-auto my-12">
      <h6 className="text-base tracking-tight italic mb-4 font-semibold">
        Leave a comment
      </h6>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Your Name"
          value={userName}
          className="bg-white bg-opacity-10 w-full outline-none rounded-lg p-4   text-sm placeholder-white placeholder-opacity-20 mb-4"
          onChange={(e) => setUserName(e.target.value)}
        />
        <textarea
          name="commentForPost"
          id="commentForPost"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={4}
          className="bg-white bg-opacity-10 w-full outline-none rounded-lg p-4   text-sm placeholder-white placeholder-opacity-20"
          placeholder="Type here something..."
        ></textarea>
        <button
          type="submit"
          disabled={loading}
          className="bg-white disabled:bg-opacity-30 disabled:cursor-not-allowed bg-opacity-70 hover:bg-opacity-100 text-black px-4 flex ms-auto mt-1 text-sm py-2 rounded-lg font-bold  transition-all duration-200"
        >
          Send
        </button>
      </form>
      <div className="text-sm my-6 flex flex-col gap-4">
        {comments.map((content) => (
          <CommentArea
            key={content.key}
            author={content.userId}
            comment={content.content}
            createdAt={content.createdAt.seconds}
          />
        ))}
        <button
          onClick={loadComments}
          disabled={loading}
          className="bg-white disabled:bg-opacity-30 disabled:cursor-not-allowed bg-opacity-70 hover:bg-opacity-100 text-black px-4 flex mx-auto mt-1 text-sm py-2 rounded-lg font-bold  transition-all duration-200"
        >
          Load more comments
        </button>
      </div>
    </div>
  );
};

export default Comments;

const dmummyComment = [
  {
    id: 1,
    author: "John Schtmitsmann",
    comment:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, nam quos! Omnis nisi corrupti vel aut dolorem eum praesentium quia quibusdam aspernatur voluptatum maiores alias adipisci impedit a incidunt, quo saepe quaerat, ut qui accusamus? Rerum minus vel necessitatibus hic.",
  },
  {
    id: 2,
    author: "Akash Sarki",
    comment: "Lorem ipsum dolor sit",
  },
  {
    id: 2,
    author: "Bijay Singh",
    comment:
      "Lorem ipsum dolor sitorem ipsum dolor sitorem ipsum dolor sitorem ipsum dolor sit",
  },
];
