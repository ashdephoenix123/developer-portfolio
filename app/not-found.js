import React from "react";

const notfound = () => {
  return (
    <div className="text-center h-screen">
      <h2 className="text-5xl font-bold my-12">Oops... Error 404</h2>
      <p className="mb-2">
        The Page your are looking for is currently not available or lost.
      </p>
      <p>
        Or, go back to{" "}
        <a href="/" className="btn">
          HomePage
        </a>
      </p>
    </div>
  );
};

export default notfound;
