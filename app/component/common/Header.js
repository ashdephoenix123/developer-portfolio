"use client";

import React from "react";
import { motion } from "framer-motion";

const Header = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="mb-12 border-b border-border pb-6 flex items-baseline justify-between"
    >
      <h1
        className="text-3xl sm:text-4xl font-light text-foreground"
        style={{ fontFamily: "'Fraunces', serif" }}
      >
        {children}
      </h1>
      <span
        className="text-xs text-muted-foreground"
        style={{ fontFamily: "'DM Mono', monospace" }}
      >
        akashsarki.com
      </span>
    </motion.div>
  );
};

export default Header;
