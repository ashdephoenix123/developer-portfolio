"use client";

import React from "react";
import Header from "./common/Header";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section className="experience text-gray-300">
      <Header>Professional Experience</Header>
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="glass-card p-6 relative"
      >
        <div className="timeline">
          <div className="relative pl-6">
            <div className="timeline-dot"></div>
            <div className="mb-2">
              <h4 className="text-md font-medium text-white">
                Appycodes{" "}
                <span className="text-xs text-[var(--accent-3)] font-normal">
                  (2023 — Present)
                </span>
              </h4>
              <p className="uppercase font-light text-xs text-gray-500 tracking-wider">
                Frontend Engineer
              </p>
            </div>
            <ul className="mt-4 ps-4 list-disc space-y-3">
              <li className="font-extralight text-gray-400">
                <span className="font-normal text-gray-300">
                  Performance Optimization:{" "}
                </span>
                Optimized responsive web applications using React and Next.js,
                achieving a 25% reduction in page load times through strategic
                code-splitting and lazy loading techniques.
              </li>
              <li className="font-extralight text-gray-400">
                <span className="font-normal text-gray-300">
                  API Architecture:{" "}
                </span>
                Streamlined data flow by collaborating with backend engineers to
                implement seamless REST API integrations using Axios and
                Interceptors.
              </li>
              <li className="font-extralight text-gray-400">
                <span className="font-normal text-gray-300">
                  Development Efficiency:{" "}
                </span>
                Developed a collection of reusable UI components and custom hooks
                to standardize design patterns and accelerate the internal
                development process.
              </li>
              <li className="font-extralight text-gray-400">
                <span className="font-normal text-gray-300">
                  SEO &amp; Growth:{" "}
                </span>
                Boosted organic traffic by implementing SEO best practices,
                server-side rendering (SSR), and dynamic metadata management.
              </li>
              <li className="font-extralight text-gray-400">
                <span className="font-normal text-gray-300">
                  Project Leadership &amp; Delivery:{" "}
                </span>
                Managed direct client communication to define requirements and
                ensure high-quality project delivery within strict deadlines.
              </li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Experience;
