import projects from "@/projects.mock";
import ProjectsInline from "../component/ProjectsInline";
import Techs from "../component/TechStacks";
import Experience from "../component/Experience";
import CurrentLearning from "../component/CurrentLearning";
import Footer from "../component/Footer";

const ProjectsPage = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <Techs />
      <ProjectsInline projects={projects} />
      <Experience />
      <CurrentLearning />
      <Footer />
    </div>
  );
};

export default ProjectsPage;
