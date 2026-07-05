"use client";

import About from "./component/About";
import ProjectsInline from "./component/ProjectsInline";
import Techs from "./component/TechStacks";
import Experience from "./component/Experience";
import Footer from "./component/Footer";
import projects from "@/projects.mock";

export default function Home() {
  return (
    <div className="w-full">
      <About />
      <ProjectsInline projects={projects} />
      <Techs />
      <Experience />
      <Footer />
    </div>
  );
}
