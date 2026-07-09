"use client";

import { ExternalLink } from "lucide-react";
import FadeIn from "./common/FadeIn";

export default function ProjectsInline({ projects }) {
  // Sort projects so they match the Figma redesign order
  const sortedProjects = [...projects].sort((a, b) => {
    const order = [
      "The Sharkk Co.",
      "Project Management - The Sharkk Co.",
      "Flix Stream",
      "Web Journal"
    ];
    const indexA = order.indexOf(a.title);
    const indexB = order.indexOf(b.title);
    
    const valA = indexA === -1 ? 99 : indexA;
    const valB = indexB === -1 ? 99 : indexB;
    return valA - valB;
  });

  const getProjectType = (title) => {
    if (title.includes("The Sharkk Co.") && !title.includes("Project Management")) {
      return "E-Commerce Platform";
    }
    if (title.includes("Project Management")) {
      return "Admin Dashboard";
    }
    if (title.includes("Flix Stream")) {
      return "Video Platform";
    }
    if (title.includes("Web Journal")) {
      return "Content Platform";
    }
    if (title.includes("ExpenseFlow")) {
      return "Mobile Application";
    }
    return "Web Application";
  };

  const getProjectName = (title) => {
    if (title === "Project Management - The Sharkk Co.") {
      return "Sharkk Co. PM Dashboard";
    }
    return title;
  };

  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-24">
      <FadeIn>
        <div className="flex items-baseline justify-between mb-16">
          <h2
            className="text-3xl sm:text-4xl font-light"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Selected Work
          </h2>
          <span
            className="text-xs text-muted-foreground"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            2022 — 2025
          </span>
        </div>
      </FadeIn>

      <div className="divide-y divide-border">
        {sortedProjects.map((project, i) => {
          const number = String(i + 1).padStart(2, "0");
          const targetUrl = project.link || project.github;
          const projectType = getProjectType(project.title);
          const name = getProjectName(project.title);

          return (
            <FadeIn key={project.id} delay={i * 80}>
              <a
                href={targetUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group py-8 grid grid-cols-1 md:grid-cols-[80px_1fr_auto] gap-4 md:gap-8 items-start cursor-pointer hover:bg-card/40 transition-colors rounded px-2 -mx-2 block"
              >
                {/* Project Number */}
                <span
                  className="text-xs text-muted-foreground pt-1"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {number}
                </span>

                {/* Project Details */}
                <div>
                  <div className="flex items-start gap-3 mb-2">
                    <h3
                      className="text-xl sm:text-2xl font-light group-hover:text-primary transition-colors"
                      style={{ fontFamily: "'Fraunces', serif" }}
                    >
                      {name}
                    </h3>
                    <ExternalLink
                      size={14}
                      className="mt-1.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </div>
                  <p
                    className="text-muted-foreground text-sm leading-relaxed mb-4 max-w-xl"
                    style={{ fontWeight: 300, fontFamily: "'Outfit', sans-serif" }}
                  >
                    {project.subTitle}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tag) => (
                      <span
                        key={tag.label}
                        className="text-xs text-muted-foreground border border-border px-2 py-0.5"
                        style={{ fontFamily: "'DM Mono', monospace" }}
                      >
                        {tag.label}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Type */}
                <span
                  className="text-xs text-muted-foreground hidden md:block mt-1 whitespace-nowrap"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {projectType}
                </span>
              </a>
            </FadeIn>
          );
        })}
      </div>
    </section>
  );
}
