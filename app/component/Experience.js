import React from "react";
import Header from "./common/Header";

const Experience = () => {
  return (
    <section className="experience text-gray-300">
      <Header>Professional Experience</Header>
      <div>
        <h4 className="text-md">
          Appycodes <span className="text-xs underline">(2023 — Present)</span>
        </h4>
        <p className="uppercase font-light text-xs">Frontend Engineer</p>
      </div>
      <ul className="mt-4 ps-4 list-disc space-y-4">
        <li className="font-extralight">
          <span className="font-light">Performance Optimization: </span>
          Optimized responsive web applications using React and Next.js,
          achieving a 25% reduction in page load times through strategic
          code-splitting and lazy loading techniques.
        </li>
        <li className="font-extralight">
          <span className="font-light">API Architecture: </span>
          Streamlined data flow by collaborating with backend engineers to
          implement seamless REST API integrations using Axios and Interceptors.
        </li>
        <li className="font-extralight">
          <span className="font-light">Development Efficiency: </span>
          Developed a collection of reusable UI components and custom hooks to
          standardize design patterns and accelerate the internal development
          process.
        </li>
        <li className="font-extralight">
          <span className="font-light">SEO & Growth: </span>
          Boosted organic traffic by implementing SEO best practices,
          server-side rendering (SSR), and dynamic metadata management.
        </li>
        <li className="font-extralight">
          <span className="font-light">Project Leadership & Delivery: </span>
          Managed direct client communication to define requirements and ensure
          high-quality project delivery within strict deadlines.
        </li>
      </ul>
    </section>
  );
};

export default Experience;
