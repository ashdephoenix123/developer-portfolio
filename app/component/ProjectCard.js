"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, animationVariant }) => {
  return (
    <motion.div className="card relative" variants={animationVariant}>
      <Image
        priority
        src={"/" + (project?.image || "placeholder.jpg")}
        alt={project?.title + " image"}
        className="object-cover object-top h-44 mb-4"
        width={550}
        height={180}
      />
      {project.status !== "completed" && (
        <div className="absolute -top-2 -right-2 bg-red-600 px-3 py-1 rounded-lg text-sm text-white">
          {project.status}
        </div>
      )}
      <div className="mb-6">
        <h2 className="text-md text-neutral-300 font-semibold italic mb-2">
          {project.title}
        </h2>
        <p className="text-sm text-neutral-500">{project.subTitle}</p>
      </div>
      <div className="flex gap-2">
        <a
          className="button border border-neutral-600 rounded-full text-sm text-white px-4 py-2 bg-neutral-600/80  hover:bg-transparent"
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          View Project
        </a>
        <a
          className="button border border-neutral-600 rounded-full text-sm text-white px-4 py-2 bg-transparent"
          href={project.github}
          target="_blank"
          rel="noreferrer"
        >
          Github Repo
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
