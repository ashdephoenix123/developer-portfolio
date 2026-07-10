import projects from "@/projects.mock";
import ProjectsInline from "../component/ProjectsInline";
import Techs from "../component/TechStacks";
import Experience from "../component/Experience";
import CurrentLearning from "../component/CurrentLearning";
import Footer from "../component/Footer";

export const metadata = {
  title: "Projects - Akash Sarki Portfolio",
  description: "Browse the developer and web projects built by Akash Sarki.",
  alternates: {
    canonical: "https://www.akashsarki.com/projects",
  },
};

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
