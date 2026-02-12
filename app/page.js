import Head from "next/head";
import About from "./component/About";
import Techs from "./component/TechStacks";
import ProjectsInline from "./component/ProjectsInline";
import Experience from "./component/Experience";
import CurrentLearning from "./component/CurrentLearning";
import Footer from "./component/Footer";
import projects from "@/projects.mock";

export const metadata = {
  title: "Akash Sarki - Web Developer Portfolio",
  description:
    "Explore Akash Sarki's portfolio showcasing a diverse range of web development projects. Discover skills in frontend and backend development and more.",
};

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Akash Sarki - A Website Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/me.jpg" />
        <meta property="og:url" content="https://www.akashsarki.com" />
      </Head>
      <About />
      <div className="max-w-4xl mx-auto space-y-12">
        <Techs />
        <ProjectsInline projects={projects} />
        <Experience />
        <CurrentLearning />
        <Footer />
      </div>
    </>
  );
}
