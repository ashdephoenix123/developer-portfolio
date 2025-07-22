import projects from "@/projects.json";
import Projects from "../component/Projects";

const ProjectsPage = () => {
  return <Projects projects={projects} />;
};

export default ProjectsPage;
