"use client"; // Error components must be Client Components

import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen">
      <h2 className="mb-6 mt-12 text-xl font-semibold">
        Oops! Something went wrong!
      </h2>
      <button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
        className="btn"
      >
        Try again
      </button>{" "}
      Or{" "}
      <Link href="/" className="btn">
        Go back to Home Page
      </Link>
    </div>
  );
}
