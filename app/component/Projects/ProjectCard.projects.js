"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const cardVariant = {
  initial: { opacity: 0, y: 20 },
  final: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ProjectCard = ({
  title,
  description,
  imagesrc,
  link,
  sourcecodeURL,
  techStacks,
  hideLink,
}) => {
  return (
    <motion.div
      variants={cardVariant}
      initial="initial"
      whileInView="final"
      viewport={{ once: true, margin: "-50px" }}
      className="glass-card grid md:flex overflow-hidden"
    >
      <div className="order-2 flex-1 p-6 text-sm text-gray-300 flex flex-col">
        <p className="text-lg mb-2 font-semibold text-white">{title}</p>
        <p className="text-sm font-light mb-4 text-gray-400 leading-relaxed">
          {description}
        </p>

        <div className="mt-6 md:mt-auto flex gap-4 underline-offset-[3px] [&>*]:text-xs">
          {!hideLink && (
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[var(--accent-3)] transition-colors duration-300 hover:underline"
            >
              View Project
            </a>
          )}
          <a
            href={sourcecodeURL}
            target="_blank"
            rel="noreferrer"
            className="text-gray-400 hover:text-[var(--accent-3)] transition-colors duration-300 hover:underline"
          >
            Source Code
          </a>
        </div>
      </div>
      <div className="w-full h-52 md:w-96 md:h-64 relative order-1 md:order-3 overflow-hidden">
        <Image
          src={imagesrc}
          fill
          className="object-cover object-left transition-transform duration-500 hover:scale-105"
          alt={title}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[var(--gradient-2)] opacity-30 pointer-events-none md:block hidden" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
