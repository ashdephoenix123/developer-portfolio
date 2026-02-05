import ProjectCard from "./Projects/ProjectCard.projects";

const ProjectsInline = ({ projects }) => {
  return (
    <>
      <div className="flex flex-col gap-4">
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
      </div>
    </>
  );
};

export default ProjectsInline;
