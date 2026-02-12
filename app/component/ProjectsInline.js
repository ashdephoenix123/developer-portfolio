import Header from "./common/Header";
import ProjectCard from "./Projects/ProjectCard.projects";

const ProjectsInline = ({ projects }) => {
  return (
    <section className="projects space-y-8">
      <Header>Projects</Header>
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
    </section>
  );
};

export default ProjectsInline;
