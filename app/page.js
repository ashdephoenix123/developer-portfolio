import About from "./component/About";
import ProjectsInline from "./component/ProjectsInline";
import Techs from "./component/TechStacks";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import projects from "@/projects.mock";
import { fetchActiveResume } from "@/sanity/queries/fetchResume";

export const revalidate = 60;

export default async function Home() {
  const resume = await fetchActiveResume();

  return (
    <div className="w-full">
      <About resumeUrl={resume?.fileUrl} />
      <ProjectsInline projects={projects} />
      <Techs />
      <Experience />
      <Footer />
    </div>
  );
}
