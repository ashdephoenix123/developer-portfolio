import React from "react";

const Header = ({ children }) => {
  return (
    <h3 className="text-2xl mb-8 font-normal tracking-wide text-gray-300 uppercase">
      {children}
    </h3>
  );
};

export default Header;
