"use client";

import About from "./component/About";
import Techs from "./component/TechStacks";
import ProjectsInline from "./component/ProjectsInline";
import Experience from "./component/Experience";
import CurrentLearning from "./component/CurrentLearning";
import Footer from "./component/Footer";
import projects from "@/projects.mock";

export default function Home() {
  return (
    <>
      <About />
      <div className="max-w-4xl mx-auto space-y-16 pb-8">
        <Techs />
        <ProjectsInline projects={projects} />
        <Experience />
        <CurrentLearning />
        <Footer />
      </div>
    </>
  );
}
