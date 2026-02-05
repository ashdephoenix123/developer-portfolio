import projects from "@/projects.mock";
import ProjectsInline from "../component/ProjectsInline";

const ProjectsPage = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <ProjectsInline projects={projects} />
    </div>
  );
};

export default ProjectsPage;
