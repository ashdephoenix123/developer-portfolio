"use client";

import { useState } from "react";
import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { motion } from "framer-motion";

const socials = [
  {
    id: "instagram",
    href: "https://www.instagram.com/akashsarki_/",
    icon: FaInstagram,
    label: "Instagram",
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/akashsarki",
    icon: FaLinkedin,
    label: "LinkedIn",
  },
  {
    id: "github",
    href: "https://github.com/ashdephoenix123",
    icon: FaGithub,
    label: "GitHub",
  },
];

const Footer = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) return;

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          subject: `Portfolio message from ${form.name}`,
          message: form.message,
        }),
      });
      const data = await res.json();
      if (data.message === "success") {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 4000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <footer className="relative pt-16 pb-8">
      {/* Gradient top border */}
      <div className="section-divider mb-12" style={{ opacity: 0.4 }}></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-3 gap-8 text-gray-400 font-light"
      >
        {/* Left — Conversation Starter + Form */}
        <div className="md:col-span-2 space-y-3">
          <p className="text-gray-300 text-lg">Want to chat about F1 / MotoGP?</p>
          <div className="section-divider max-w-[40px]" style={{ opacity: 0.3 }}></div>
          <p className="text-gray-300 text-lg">Want to chat about coding tech?</p>
          <div className="section-divider max-w-[40px]" style={{ opacity: 0.3 }}></div>
          <p className="text-gray-300 text-lg">
            Maybe, Just say{" "}
            <span className="gradient-text font-medium">Hi!</span>
          </p>

          {/* <div className="flex flex-col gap-3 pt-6">
            <div className="flex flex-wrap gap-3">
              <input
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                className="glass-input w-36"
                placeholder="Name"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                className="glass-input w-56"
                placeholder="Email address"
              />
            </div>
            <div className="flex gap-3 items-end">
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={3}
                className="glass-input flex-1 resize-none"
                placeholder="Your message..."
              />
              <button
                type="button"
                onClick={handleSubmit}
                disabled={status === "sending"}
                className="border border-[var(--glass-border)] rounded-full h-10 w-10 flex-shrink-0 flex justify-center items-center text-white hover:border-[var(--accent-1)] hover:text-[var(--accent-3)] hover:shadow-[0_0_15px_var(--glow-color)] transition-all duration-300 disabled:opacity-50"
              >
                {status === "sending" ? (
                  <span className="animate-spin text-xs">⏳</span>
                ) : (
                  <IoMdArrowForward />
                )}
              </button>
            </div>
            {status === "sent" && (
              <p className="text-sm text-green-400">Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">Something went wrong. Please try again.</p>
            )}
          </div> */}
        </div>

        {/* Right — Socials */}
        <div className="flex flex-col items-start md:items-end justify-end gap-4">
          <p className="text-sm text-gray-500">Find me on</p>
          <div className="flex gap-4">
            {socials.map((social) => (
              <Link
                key={social.id}
                target="_blank"
                href={social.href}
                className="text-gray-500 hover:text-[var(--accent-3)] transition-all duration-300 hover:drop-shadow-[0_0_8px_var(--glow-color)]"
                aria-label={social.label}
              >
                <social.icon size={22} />
              </Link>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Bottom bar */}
      <div className="mt-12 pt-6 border-t border-[var(--glass-border)] flex justify-between items-center text-xs text-gray-600">
        <p>&copy; {new Date().getFullYear()} Akash Sarki</p>
      </div>
    </footer>
  );
};

export default Footer;
