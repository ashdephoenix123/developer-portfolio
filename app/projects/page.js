"use client";

import projects from "@/projects.json";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectCard from "../component/ProjectCard";

const Projects = () => {
  return (
    <div className="projectSection max-w-6xl mx-auto">
      <div className="flex items-center text-3xl font-bold mb-4">
        <svg className="svg-1">
          <use xlinkHref="/sprite.svg#icon-books"></use>
        </svg>
        <h1 className="text-white">All Projects</h1>
      </div>
      <Swiper
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
            <ProjectCard project={project} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Projects;
