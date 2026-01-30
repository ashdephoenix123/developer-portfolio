"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const ProjectCard = ({ project, animationVariant }) => {
  return (
    <motion.div
      className="card relative flex flex-col"
      variants={animationVariant}
    >
      <Image
        priority
        src={"/" + (project?.image || "placeholder.jpg")}
        alt={project?.title + " image"}
        className="object-cover object-top h-52"
        width={550}
        height={180}
      />
      {project.status !== "completed" && (
        <div className="absolute -top-2 -right-2 bg-red-600 px-3 py-1 rounded-lg text-sm text-white">
          {project.status}
        </div>
      )}
      <div className="bg-black p-4 rounded-md border-t border-t-neutral-700 flex-1">
        <div className="mb-6">
          <h2 className="text-md text-neutral-200 font-semibold italic mb-2">
            {project.title}
          </h2>
          <p className="text-sm text-neutral-400">{project.subTitle}</p>
        </div>
        <div className="flex gap-2">
          <a
            className="flex-1 text-center md:flex-none button border border-neutral-900 text-sm text-white px-4 py-4 md:py-2 bg-neutral-600/80  hover:bg-transparent button-gradient-1"
            href={project.link}
            target="_blank"
            rel="noreferrer"
          >
            View Project
          </a>
          <a
            className="flex-1 text-center md:flex-none button border border-neutral-700 lg:border-neutral-700 text-sm text-white px-4 py-4 md:py-2 bg-transparent"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            Github Repo
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
