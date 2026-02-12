"use client";

import Header from "./common/Header";
import ProjectCard from "./Projects/ProjectCard.projects";
import { motion } from "framer-motion";

const containerVariant = {
  initial: {},
  final: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const ProjectsInline = ({ projects }) => {
  return (
    <section className="projects space-y-8">
      <Header>Projects</Header>
      <motion.div
        variants={containerVariant}
        initial="initial"
        whileInView="final"
        viewport={{ once: true, margin: "-50px" }}
        className="flex flex-col gap-6"
      >
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.subTitle}
            imagesrc={"/" + (project?.image || "placeholder.jpg")}
            link={project.link}
            sourcecodeURL={project.github}
            techStacks={project.tech}
            hideLink={project.hideLink}
          />
        ))}
      </motion.div>
    </section>
  );
};

export default ProjectsInline;
