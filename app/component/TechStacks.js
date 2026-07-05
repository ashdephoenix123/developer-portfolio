"use client";

import FadeIn from "./common/FadeIn";

const SKILLS = [
  { label: "React", category: "ui" },
  { label: "React Native", category: "ui" },
  { label: "Expo", category: "framework" },
  { label: "TypeScript", category: "lang" },
  { label: "Next.js", category: "framework" },
  { label: "JavaScript", category: "lang" },
  { label: "Redux Toolkit", category: "state" },
  { label: "Tanstack Query", category: "state" },
  { label: "Node.js", category: "backend" },
  { label: "Express", category: "backend" },
  { label: "MongoDB", category: "database" },
  { label: "PostgreSQL", category: "database" },
  { label: "Supabase", category: "database" },
  { label: "REST API", category: "api" },
  { label: "Webpack", category: "tooling" },
  { label: "Axios", category: "tooling" },
  { label: "HTML / CSS", category: "ui" },
  { label: "Git", category: "tooling" },
  { label: "GitHub", category: "tooling" },
  { label: "Vercel", category: "Deployment" },
  { label: "AWS", category: "Cloud" },
  { label: "Google Cloud", category: "Cloud" },
];

const CATEGORY_COLORS = {
  ui: "text-[#b9ff4d]",
  lang: "text-[#ffb84d]",
  framework: "text-[#4dcfff]",
  state: "text-[#c084fc]",
  backend: "text-[#fb7185]",
  data: "text-[#34d399]",
  tooling: "text-[#94a3b8]",
};

const Techs = () => {
  return (
    <section id="skills" className="bg-card border-y border-border py-24 -mx-6 px-6 lg:-mx-24 lg:px-24">
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
              <div className="group flex items-center gap-3 border border-border px-4 py-3 hover:border-primary/40 hover:bg-primary/5 transition-all cursor-default w-full">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 bg-current ${CATEGORY_COLORS[skill.category] || "text-foreground"}`} />
                <span
                  className="text-sm text-foreground"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  {skill.label}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Currently Learning Panel */}
        <FadeIn delay={300}>
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
        </FadeIn>
      </div>
    </section>
  );
};

export default Techs;
