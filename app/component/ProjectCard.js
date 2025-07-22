import Image from "next/image";
import React from "react";

const ProjectCard = ({ project }) => {
  return (
    <div className="card">
      {project?.image && (
        <Image
          src={"/" + project.image}
          alt={project.title + " image"}
          className="object-cover object-top h-44 mb-4"
          width={550}
          height={180}
        />
      )}
      <div className="mb-4">
        <h2 className="text-md text-white font-semibold">{project.title}</h2>
        <p className="text-sm text-white">{project.subTitle}</p>
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
    </div>
  );
};

export default ProjectCard;
