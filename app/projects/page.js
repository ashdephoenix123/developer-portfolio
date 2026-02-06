import projects from "@/projects.mock";
import ProjectsInline from "../component/ProjectsInline";
import Techs from "../component/TechStacks";

const ProjectsPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <Techs />
      <ProjectsInline projects={projects} />
    </div>
  );
};

export default ProjectsPage;
