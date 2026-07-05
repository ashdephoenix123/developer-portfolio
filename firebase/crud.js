import { db } from "./firebaseConfig";
import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  orderBy,
  limit,
  startAfter,
} from "firebase/firestore";

// Add a comment
export const addComment = async (postId, userId, content) => {
  await addDoc(collection(db, "comments"), {
    postId,
    userId,
    content,
    createdAt: new Date(), // Using Date for the timestamp
  });
};

// Fetch comments for a specific post
export const fetchComments = async (
  postId,
  lastVisibleComment = null,
  pageSize = 5
) => {
  const commentsRef = collection(db, "comments");
  let q = query(
    commentsRef,
    where("postId", "==", postId),
    orderBy("createdAt", "desc"),
    limit(pageSize)
  );

  if (lastVisibleComment) {
    q = query(q, startAfter(lastVisibleComment));
  }

  const snapshot = await getDocs(q);
  const comments = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  const lastVisible = snapshot.docs[snapshot.docs.length - 1];

  return { comments, lastVisible };
};
