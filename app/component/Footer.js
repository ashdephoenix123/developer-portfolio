"use client";

import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";

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
    <footer className="grid grid-cols-4 text-gray-300 font-light border-t pt-12">
      <div className="footer-left col-span-3">
        <p>Want to chat about F1 / MotoGP?</p>
        <p>Or -----------</p>
        <p>Want to chat about coding tech?</p>
        <p>Or -----------</p>
        <p>Maybe, Just say Hi!</p>

        <div className="flex gap-2 my-12">
          <input
            name="name"
            type="text"
            className="bg-transparent border rounded-md px-2 py-1 placeholder:text-sm text-sm w-36"
            placeholder="Name"
          />
          <input
            name="email"
            type="text"
            className="bg-transparent border rounded-md px-2 py-1 placeholder:text-sm text-sm w-56"
            placeholder="Email address"
          />
          <button
            type="button"
            className="border border-white rounded-full h-10 w-10 flex justify-center items-center"
          >
            <IoMdArrowForward />
          </button>
        </div>

        <div className="py-4 w-full flex justify-start">
          <p>I am available on </p>
          <ul
            variants={containerVariant}
            initial="initial"
            whileInView="final"
            className="flex flex-wrap items-center justify-end max-[677px]:justify-center px-4 lg:px-2"
          >
            {socials.map((social) => (
              <li
                variants={itemVariant}
                key={social.id}
                className="mx-2 last:mx-0 last:ml-2 hover:underline"
              >
                <Link target="_blank" href={social.href}>
                  <social.icon size={20} />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="footer-right">Total views: ____</div>
    </footer>
  );
};

export default Footer;
