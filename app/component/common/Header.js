"use client";

import React from "react";
import { motion } from "framer-motion";

const Header = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className="mb-10"
    >
      <h3 className="text-2xl font-normal tracking-wide text-gray-300 uppercase">
        {children}
      </h3>
      <div className="section-divider mt-3 max-w-[60px]" style={{ opacity: 0.6 }}></div>
    </motion.div>
  );
};

export default Header;
