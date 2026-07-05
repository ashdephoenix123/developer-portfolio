"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { IoMdArrowForward } from "react-icons/io";
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
    <div className="max-w-5xl mx-auto pb-16 space-y-12">
      <Header>Get in Touch</Header>

      <div className="contact-layout">
        {/* ──── Contact Form ──── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="contact-form-section"
        >
          <div className="glass-card p-6 md:p-8">
            <h3 className="text-lg font-medium text-white mb-2">
              Send me a message
            </h3>
            <p className="text-sm text-gray-400 mb-6">
              Have a project in mind or just want to say hi? Fill out the form
              below and I&apos;ll get back to you.
            </p>

            <form onSubmit={handleSubmit} className="contact-form" id="contact-form">
              <div className="contact-form__row">
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  className="glass-input contact-form__input"
                  placeholder="Your name"
                />
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  className="glass-input contact-form__input"
                  placeholder="Email address"
                />
              </div>
              <textarea
                id="contact-message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                rows={5}
                className="glass-input contact-form__textarea"
                placeholder="Your message..."
              />
              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  id="contact-submit"
                  disabled={status === "sending"}
                  className="button button-gradient-1 text-sm text-white px-6 py-3 flex items-center gap-2 disabled:opacity-50"
                >
                  {status === "sending" ? (
                    <>
                      <span className="animate-spin">⏳</span> Sending...
                    </>
                  ) : (
                    <>
                      Send Message <IoMdArrowForward />
                    </>
                  )}
                </button>
                {status === "sent" && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm text-green-400"
                  >
                    ✓ Message sent successfully!
                  </motion.p>
                )}
                {status === "error" && (
                  <motion.p
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="text-sm text-red-400"
                  >
                    Something went wrong. Please try again.
                  </motion.p>
                )}
              </div>
            </form>
          </div>
        </motion.div>

        {/* ──── Social Feeds ──── */}
        <div className="contact-social-section">
          <SocialFeed platform="instagram" posts={instagramPosts} />
          <SocialFeed platform="twitter" posts={twitterPosts} />
        </div>
      </div>
    </div>
  );
};

export default Contact;
