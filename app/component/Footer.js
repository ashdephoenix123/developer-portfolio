"use client";

import { Mail, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import FadeIn from "./common/FadeIn";

const Footer = () => {
  return (
    <section id="contact" className="border-t border-border bg-card -mx-6 px-6 lg:-mx-24 lg:px-24">
      <div className="max-w-6xl mx-auto py-24">
        <FadeIn>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-12 items-end">
            {/* Contact Left */}
            <div>
              <div
                className="text-xs text-muted-foreground mb-6 flex items-center gap-2"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                <span className="inline-block w-8 h-px bg-border" />
                get in touch
              </div>
              <h2
                className="text-5xl sm:text-6xl lg:text-7xl font-light leading-tight mb-8"
                style={{ fontFamily: "'Fraunces', serif" }}
              >
                Let&apos;s build<br />
                <em className="not-italic text-primary">something.</em>
              </h2>
              <p
                className="text-muted-foreground max-w-md leading-relaxed mb-8"
                style={{ fontWeight: 300, fontFamily: "'Outfit', sans-serif" }}
              >
                Open to new roles, freelance projects, and interesting conversations. Say hello — I respond to every message.
              </p>

              <a
                href="mailto:hello@akashsarki.com"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                <Mail size={15} />
                send a message
                <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </div>

            {/* Social Links */}
            <div className="flex flex-row lg:flex-col gap-4">
              {[
                { href: "https://github.com/ashdephoenix123", icon: FaGithub, label: "GitHub" },
                { href: "https://linkedin.com/in/akashsarki", icon: FaLinkedin, label: "LinkedIn" },
                { href: "https://instagram.com/akashsarki_", icon: FaInstagram, label: "Instagram" },
              ].map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <Icon size={16} />
                  <span
                    className="text-xs group-hover:text-primary transition-colors"
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Footer Bottom Attribution */}
      <div className="border-t border-border max-w-6xl mx-auto py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
        <span style={{ fontFamily: "'DM Mono', monospace" }}>
          © {new Date().getFullYear()} Akash Sarki
        </span>
        <span style={{ fontFamily: "'DM Mono', monospace" }}>
          Built with Next.js &amp; Tailwind · Designed from Figma
        </span>
      </div>
    </section>
  );
};

export default Footer;
