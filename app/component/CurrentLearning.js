"use client";

import React from "react";
import Header from "./common/Header";
import { motion } from "framer-motion";

const CurrentLearning = () => {
  return (
    <section className="experience text-gray-300">
      <Header>What I am currently learning?</Header>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="glass-card p-6"
      >
        <ul className="ps-4 list-disc space-y-3">
          <li className="font-extralight text-gray-400">
            <span className="font-normal text-gray-300">AI & Agents: </span>
            Exploring how AI agents work, building small automation tools, and
            understanding how LLMs can be integrated into web applications.
          </li>
          <li className="font-extralight text-gray-400">
            <span className="font-normal text-gray-300">
              Scaling Backend Systems:{" "}
            </span>
            Learning Docker, Redis, and message queues to build scalable and
            fault-tolerant backend architectures.
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default CurrentLearning;
