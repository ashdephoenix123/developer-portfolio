"use client";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "../component/ProjectCard";
import { motion } from "framer-motion";

const containerVariant = {
  initial: { opacity: 1 },
  final: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
    },
  },
};

const cardVariant = {
  initial: { x: 350 },
  final: {
    x: 0,
    transition: { type: "spring", stiffness: 20 },
  },
};

const Projects = ({ projects }) => {
  return (
    <div className="projectSection max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.6, duration: 1 } }}
        className="flex items-center text-3xl font-bold mb-4"
      >
        <svg className="svg-1">
          <use xlinkHref="/sprite.svg#icon-books"></use>
        </svg>
        <h1 className="text-white">All Projects</h1>
      </motion.div>
      <motion.div variants={containerVariant} initial="initial" animate="final">
        <Swiper
          speed={1500}
          navigation={true}
          modules={[Navigation]}
          className="px-4 lg:px-0"
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {projects.map((project) => (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} animationVariant={cardVariant} />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </div>
  );
};

export default Projects;
