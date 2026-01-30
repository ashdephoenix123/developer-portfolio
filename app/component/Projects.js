"use client";

import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/navigation";
import ProjectCard from "../component/ProjectCard";

const containerVariant = {
  initial: { opacity: 1 },
  final: {
    opacity: 1,
    transition: {
      delayChildren: 1.1,
      staggerChildren: 0.25,
    },
  },
};

const cardVariant = {
  initial: { y: 50, opacity: 0 },
  final: {
    y: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 20 },
  },
};

const Projects = ({ projects }) => {
  return (
    <div className="projectSection w-full lg:max-w-[1600px] mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.6, duration: 1 } }}
        className="flex items-center text-3xl font-bold mb-14"
      >
        <svg className="svg-1">
          <use xlinkHref="/sprite.svg#icon-books"></use>
        </svg>
        <h1 className="text-white">Projects</h1>
      </motion.div>
      <motion.div
        variants={containerVariant}
        initial="initial"
        animate="final"
        className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
      >
        {projects.map((project) => (
          <ProjectCard project={project} animationVariant={cardVariant} />
        ))}
      </motion.div>
    </div>
  );
};

export default Projects;
