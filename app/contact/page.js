"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Header from "../component/common/Header";
import SocialFeed from "../component/SocialFeed";
import { instagramPosts, twitterPosts } from "@/mock/socialPosts";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
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
    <div className="max-w-6xl mx-auto px-6 pt-24 pb-20">
      <Header>Get in Touch</Header>

      <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-12 mt-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="border border-border p-6 md:p-8 bg-card/10"
        >
          <h3
            className="text-2xl font-light text-foreground mb-3"
            style={{ fontFamily: "'Fraunces', serif" }}
          >
            Send a message
          </h3>
          <p
            className="text-sm text-muted-foreground mb-8 font-light leading-relaxed"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Have a project in mind or just want to say hi? Fill out the form
            below and I&apos;ll get back to you.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6" id="contact-form">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-xs uppercase tracking-wider text-muted-foreground mb-2"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Your Name
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-border p-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground font-light"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  placeholder="e.g. John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-xs uppercase tracking-wider text-muted-foreground mb-2"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="w-full bg-transparent border border-border p-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground font-light"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                  placeholder="e.g. john@example.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="block text-xs uppercase tracking-wider text-muted-foreground mb-2"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="w-full bg-transparent border border-border p-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all text-foreground font-light resize-none"
                style={{ fontFamily: "'Outfit', sans-serif" }}
                placeholder="How can I help you?"
              />
            </div>

            <div className="flex items-center gap-4 pt-2">
              <button
                type="submit"
                id="contact-submit"
                disabled={status === "sending"}
                className="group flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors disabled:opacity-50"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {status === "sending" ? (
                  "sending..."
                ) : (
                  <>
                    send message
                    <ArrowUpRight size={15} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </>
                )}
              </button>

              {status === "sent" && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-xs text-primary"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  ✓ Message sent successfully!
                </motion.p>
              )}
              {status === "error" && (
                <motion.p
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="text-xs text-red-400"
                  style={{ fontFamily: "'DM Mono', monospace" }}
                >
                  Something went wrong. Please try again.
                </motion.p>
              )}
            </div>
          </form>
        </motion.div>

        {/* Social Feed Column */}
        <div className="space-y-6">
          <SocialFeed platform="instagram" posts={instagramPosts} />
          <SocialFeed platform="twitter" posts={twitterPosts} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
