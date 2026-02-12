"use client";

import Image from "next/image";
import React from "react";
import Header from "./common/Header";
import { motion } from "framer-motion";

const techStacks = [
  { name: "HTML", imagesrc: "html" },
  { name: "CSS", imagesrc: "css" },
  { name: "JavaScript", imagesrc: "js" },
  { name: "TypeScript", imagesrc: "ts" },
  { name: "React", imagesrc: "react" },
  { name: "Redux", imagesrc: "redux" },
  { name: "Next JS", imagesrc: "next" },
  { name: "MongoDB", imagesrc: "mongodb" },
  { name: "Node JS", imagesrc: "node" },
  { name: "Express", imagesrc: "expressjs" },
  { name: "Tanstack Query", imagesrc: "tanstack" },
  { name: "Axios", imagesrc: "axios" },
  { name: "Postman", imagesrc: "postman" },
  { name: "Webpack", imagesrc: "webpack" },
];

const containerVariant = {
  initial: {},
  final: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariant = {
  initial: { opacity: 0, y: 16 },
  final: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const Techs = () => {
  return (
    <section className="techStacks">
      <Header>Frequently used Tech Stacks:</Header>
      <motion.div
        variants={containerVariant}
        initial="initial"
        whileInView="final"
        viewport={{ once: true, margin: "-80px" }}
        className="grid [grid-template-columns:repeat(auto-fill,minmax(90px,1fr))] gap-4"
      >
        {techStacks.map((tech) => {
          return (
            <motion.div
              key={tech.name}
              variants={itemVariant}
              className="glass-card flex flex-col gap-3 items-center p-4 cursor-default"
            >
              <Image
                width={44}
                height={44}
                src={`/techstacks/${tech.imagesrc}.png`}
                alt={tech.name}
              />
              <p className="text-xs text-center text-gray-400 font-light">
                {tech.name}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default Techs;
