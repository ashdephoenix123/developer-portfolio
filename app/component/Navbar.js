"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

const NAV_LINKS = [
  { id: "work", label: "work", type: "scroll" },
  { id: "skills", label: "skills", type: "scroll" },
  { id: "about", label: "about", type: "scroll" },
  { id: "blogs", label: "blogs", type: "route", href: "/blogs" },
  { id: "case-studies", label: "case studies", type: "route", href: "/case-studies" },
  { id: "contact", label: "contact", type: "scroll" },
];

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState(null);

  useEffect(() => {
    setTime(new Date());
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const formattedTime = time
    ? time.toLocaleTimeString("en-IN", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      timeZone: "Asia/Kolkata",
      hour12: false,
    })
    : "";

  const handleLinkClick = (e, link) => {
    if (link.type === "scroll") {
      e.preventDefault();
      if (pathname === "/") {
        const el = document.getElementById(link.id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(`/#${link.id}`);
      }
      setMenuOpen(false);
    }
  };

  // Monitor scrolling to highlight active section on homepage
  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const scrollLinks = NAV_LINKS.filter((l) => l.type === "scroll");
      const sections = scrollLinks.map((link) => ({
        id: link.id,
        el: document.getElementById(link.id),
      }));
      const scrollY = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const { id, el } = sections[i];
        if (el && el.offsetTop <= scrollY) {
          setActiveSection(id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Run once initially to capture page load state
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-sm">
      <nav className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <Link
          href="/"
          className="font-medium tracking-tight text-foreground hover:text-primary transition-colors animate-fade-in"
          style={{ fontFamily: "'Fraunces', serif", fontSize: "1.05rem" }}
        >
          Akash Sarki
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => {
            const isRouteActive =
              link.type === "route" && pathname.startsWith(link.href);
            const isScrollActive =
              link.type === "scroll" && activeSection === link.id && pathname === "/";
            const isActive = isRouteActive || isScrollActive;

            return (
              <li key={link.id}>
                {link.type === "scroll" ? (
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => handleLinkClick(e, link)}
                    className={`text-sm tracking-wide transition-colors cursor-pointer ${isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                      }`}
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {link.label}
                  </a>
                ) : (
                  <Link
                    href={link.href}
                    className={`text-sm tracking-wide transition-colors ${isActive ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"
                      }`}
                    style={{ fontFamily: "'DM Mono', monospace" }}
                  >
                    {link.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Right Info */}
        <div className="hidden lg:flex items-center gap-4">
          <span
            className="text-xs text-muted-foreground tabular-nums"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {time ? `IST ${formattedTime}` : ""}
          </span>
          <div className="flex items-center gap-1.5">
            <span className="size-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-muted-foreground" style={{ fontFamily: "'DM Mono', monospace" }}>
              open to work
            </span>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-muted-foreground hover:text-foreground transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <div className="flex flex-col gap-1.5 w-5">
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden border-t border-border bg-background px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => {
            const isRouteActive =
              link.type === "route" && pathname.startsWith(link.href);
            const isScrollActive =
              link.type === "scroll" && activeSection === link.id && pathname === "/";
            const isActive = isRouteActive || isScrollActive;

            return link.type === "scroll" ? (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleLinkClick(e, link)}
                className={`text-left text-sm transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.id}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-left text-sm transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
                  }`}
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
