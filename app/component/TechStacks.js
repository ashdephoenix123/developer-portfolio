"use client";

import Image from "next/image";
import FadeIn from "./common/FadeIn";

const SKILLS = [
  { label: "React", category: "ui", icon: "/techstacks/react.png" },
  { label: "React Native", category: "ui", icon: "/techstacks/react.png" },
  { label: "Expo", category: "framework", icon: "/techstacks/expo.svg?v=1" },
  { label: "TypeScript", category: "lang", icon: "/techstacks/ts.png" },
  { label: "Next.js", category: "framework", icon: "/techstacks/next.png" },
  { label: "JavaScript", category: "lang", icon: "/techstacks/js.png" },
  { label: "Redux Toolkit", category: "state", icon: "/techstacks/redux.png" },
  { label: "Tanstack Query", category: "state", icon: "/techstacks/tanstack.png" },
  { label: "Node.js", category: "backend", icon: "/techstacks/nodejs.png" },
  { label: "Express", category: "backend", icon: "/techstacks/expressjs.png" },
  { label: "MongoDB", category: "database", icon: "/techstacks/mongodb.png" },
  { label: "PostgreSQL", category: "database", icon: "/techstacks/postgresql.svg?v=1" },
  { label: "Supabase", category: "database", icon: "/techstacks/supabase.svg" },
  { label: "REST API", category: "api", icon: "/techstacks/api.svg" },
  { label: "Webpack", category: "tooling", icon: "/techstacks/webpack.png" },
  { label: "Axios", category: "tooling", icon: "/techstacks/axios.png" },
  { label: "HTML / CSS", category: "ui", icon: "/techstacks/html.png", iconSecondary: "/techstacks/css.png" },
  { label: "Git", category: "tooling", icon: "/techstacks/git.svg" },
  { label: "GitHub", category: "tooling", icon: "/techstacks/github.svg" },
  { label: "Vercel", category: "Deployment", icon: "/techstacks/vercel.svg?v=1" },
  { label: "AWS", category: "Cloud", icon: "/techstacks/aws.svg" },
  { label: "Google Cloud", category: "Cloud", icon: "/techstacks/gcloud.png" },
];

const CATEGORY_COLORS = {
  ui: "text-[#b9ff4d]",
  lang: "text-[#ffb84d]",
  framework: "text-[#4dcfff]",
  state: "text-[#c084fc]",
  backend: "text-[#fb7185]",
  database: "text-[#34d399]",
  data: "text-[#34d399]",
  api: "text-[#38bdf8]",
  tooling: "text-[#94a3b8]",
  Deployment: "text-[#a78bfa]",
  Cloud: "text-[#f472b6]",
};

const Techs = () => {
  return (
    <section id="skills" className="bg-card border-y border-border py-24 px-6 lg:px-24">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <FadeIn>
          <div className="flex items-baseline justify-between mb-16">
            <h2
              className="text-3xl sm:text-4xl font-light"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Tech Stack
            </h2>
            <span
              className="text-xs text-muted-foreground"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              tools &amp; technologies
            </span>
          </div>
        </FadeIn>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {SKILLS.map((skill, i) => (
            <FadeIn key={skill.label} delay={i * 30}>
              <div className="group flex items-center gap-3 border border-border px-3.5 py-3 hover:border-primary/40 hover:bg-card/40 transition-all cursor-default w-full">
                {skill.iconSecondary ? (
                  <div className="w-5 h-5 flex-shrink-0 relative flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <Image
                      src={skill.icon}
                      alt="HTML"
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5 object-contain absolute left-0 top-0"
                    />
                    <Image
                      src={skill.iconSecondary}
                      alt="CSS"
                      width={14}
                      height={14}
                      className="w-3.5 h-3.5 object-contain absolute right-0 bottom-0"
                    />
                  </div>
                ) : (
                  <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                    <Image
                      src={skill.icon}
                      alt={skill.label}
                      width={20}
                      height={20}
                      className="w-5 h-5 object-contain group-hover:scale-110 transition-transform duration-200"
                      unoptimized={skill.icon?.endsWith(".svg")}
                    />
                  </div>
                )}
                <span
                  className="text-sm text-foreground group-hover:text-primary transition-colors truncate"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {skill.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Currently Learning Panel */}
        {/* <FadeIn delay={300}>
          <div className="mt-12 border border-primary/20 bg-primary/5 px-6 py-5">
            <div
              className="text-xs text-primary mb-3"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              currently learning
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["AI Agents & LLM Integration, OpenAI"].map((item) => (
                <span
                  key={item}
                  className="text-sm text-muted-foreground flex items-center gap-2"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  <span className="text-primary">—</span>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </FadeIn> */}
      </div>
    </section>
  );
};

export default Techs;
