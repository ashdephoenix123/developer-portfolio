"use client";

import FadeIn from "./common/FadeIn";

const Experience = () => {
  return (
    <section id="about" className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-16 lg:gap-24">
        {/* About Column */}
        <FadeIn delay={0}>
          <div>
            <h2
              className="text-3xl sm:text-4xl font-light mb-8"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              About
            </h2>
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed" style={{ fontFamily: "'Outfit', sans-serif" }}>
              <p>
                I&apos;m a frontend developer who cares about the craft — clean components, fast pages, and interfaces that feel good to use. I specialize in React and the JavaScript ecosystem, with a strong focus on performance and maintainable code.
              </p>
              <p>
                Right now I&apos;m at Appycodes, where I&apos;ve shipped everything from SEO-optimized Next.js apps to internal dashboards. On the side, I&apos;m building with AI and agents — exploring how LLMs can be woven into real web products.
              </p>
              <p>
                Outside code: F1 races, MotoGP weekends, and strong opinions about UI details.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Experience Column */}
        <FadeIn delay={150}>
          <div>
            <h2
              className="text-3xl sm:text-4xl font-light mb-8"
              style={{ fontFamily: "'Fraunces', serif" }}
            >
              Experience
            </h2>

            <div className="border border-border p-6 hover:border-primary/30 transition-colors bg-card/10">
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div
                    className="text-base font-medium text-foreground"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Frontend Engineer
                  </div>
                  <div
                    className="text-sm text-primary mt-0.5"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    Appycodes
                  </div>
                </div>
                <span
                  className="text-xs text-muted-foreground whitespace-nowrap"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  2023 — present
                </span>
              </div>

              <ul className="space-y-2.5">
                {[
                  "Reduced page load times by 25% through code-splitting and lazy loading",
                  "Built REST API integrations using Axios and request interceptors",
                  "Created reusable component libraries and custom React hooks",
                  "Implemented SSR with Next.js and dynamic metadata for SEO",
                  "Managed client communication and end-to-end project delivery",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 text-sm text-muted-foreground"
                    style={{ fontWeight: 300, fontFamily: "'Outfit', sans-serif" }}
                  >
                    <span className="text-primary mt-0.5 flex-shrink-0">—</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Experience;
