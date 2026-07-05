"use client";

import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import FadeIn from "./common/FadeIn";

const About = () => {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center max-w-6xl mx-auto px-6 pt-24 pb-16">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">
        {/* Main Content Column */}
        <div className="flex flex-col items-start w-full">
          <FadeIn delay={0} className="w-full">
            <div
              className="text-xs text-muted-foreground mb-8 flex items-center gap-2"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              <span className="inline-block w-8 h-px bg-border align-middle" />
              Frontend Developer — React &amp; JS
            </div>
          </FadeIn>

          <FadeIn delay={100} className="w-full">
            <h1
              className="text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-light leading-[0.95] tracking-tight mb-8"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Akash<br />
              <em className="not-italic text-primary">Sarki.</em>
            </h1>
          </FadeIn>

          <FadeIn delay={200} className="w-full">
            <p
              className="text-lg text-muted-foreground max-w-xl leading-relaxed mb-10"
              style={{ fontWeight: 300, fontFamily: "'Outfit', sans-serif" }}
            >
              I build fast, precise, and user-centric web interfaces. Currently at{" "}
              <span className="text-foreground font-medium">Appycodes</span> — shipping production-grade React apps and exploring AI integration for the web.
            </p>
          </FadeIn>

          <FadeIn delay={300} className="w-full">
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("work")}
                className="group flex items-center gap-2 bg-primary text-primary-foreground px-5 py-2.5 text-sm font-medium hover:bg-primary/90 transition-colors"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                view work
                <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
              <a
                href="https://github.com/ashdephoenix123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-border text-muted-foreground px-5 py-2.5 text-sm hover:text-foreground hover:border-foreground/30 transition-colors"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                <FaGithub size={15} />
                github
              </a>
            </div>
          </FadeIn>
        </div>

        {/* Stats Column */}
        <div className="hidden lg:flex flex-col gap-6 pb-2">
          {[
            { value: "3+", label: "years experience", delay: 300 },
            { value: "20+", label: "shipped projects", delay: 400 },
            { value: "25%", label: "load time reduction", delay: 500 },
          ].map(({ value, label, delay }) => (
            <FadeIn key={label} delay={delay}>
              <div className="text-right">
                <div
                  className="text-4xl font-light text-foreground leading-none"
                  style={{ fontFamily: "'Fraunces', serif" }}
                >
                  {value}
                </div>
                <div className="text-xs text-muted-foreground mt-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                  {label}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Horizontal rule with scroll indicator */}
      <FadeIn delay={600} className="mt-16 lg:mt-24 w-full">
        <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
            scroll to explore
          </span>
          <div className="flex-1 h-px bg-border" />
        </div>
      </FadeIn>
    </section>
  );
};

export default About;
