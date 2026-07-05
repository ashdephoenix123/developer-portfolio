import Image from "next/image";
import React from "react";

const Loader = ({ className = "" }) => {
  return (
    <div className={`col-span-3 mx-auto min-h-screen ${className}`}>
      <Image
        src="/images/loading-gif.svg"
        alt="loading icon"
        width={64}
        height={64}
        className="m-auto"
      />
    </div>
  );
};

export default Loader;
