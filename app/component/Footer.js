"use client";

import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

const itemVariant = {
  initial: { opacity: 0, y: 20 },
  final: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", ease: "easeInOut" },
  },
};

const containerVariant = {
  initial: { opacity: 1 },
  final: {
    opacity: 1,
    transition: {
      delayChildren: 2,
      staggerChildren: 0.1,
    },
  },
};

const socials = [
  {
    id: "instagram",
    href: "https://www.instagram.com/akashsarki_/",
    icon: FaInstagram,
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/akashsarki",
    icon: FaLinkedin,
  },
  {
    id: "github",
    href: "https://github.com/ashdephoenix123",
    icon: FaGithub,
  },
];

const Footer = () => {
  return (
    <footer className="footer py-4 w-full">
      <motion.ul
        variants={containerVariant}
        initial="initial"
        whileInView="final"
        className="flex flex-wrap items-center justify-end max-[677px]:justify-center px-4 lg:px-8"
      >
        {socials.map((social) => (
          <motion.li
            variants={itemVariant}
            key={social.id}
            className="mx-2 last:mx-0 last:ml-2 hover:underline"
          >
            <Link target="_blank" href={social.href}>
              <social.icon size={20} />
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </footer>
  );
};

export default Footer;
