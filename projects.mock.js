import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiSanity } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiReactquery } from "react-icons/si";
import { SiAxios } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { SiRazorpay } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { SiBrevo } from "react-icons/si";

const projectMOCK = [
  {
    id: "Personal-Blog-Website",
    title: "Web Journal",
    subTitle:
      "A personal blogging platform powered by Sanity CMS — built to prioritize writing and content creation over site maintenance.",
    link: "https://web-journal-ashdephoenix123s-projects.vercel.app/",
    github: "https://github.com/ashdephoenix123/personal-blog-site",
    image: "img/blog.png",
    status: "completed",
    tech: [
      {
        label: "React",
        icon: FaReact,
      },
      {
        label: "Next JS",
        icon: SiNextdotjs,
      },
      {
        label: "Sanity",
        icon: SiSanity,
      },
    ],
  },
  {
    id: "youtube-clone",
    title: "Flix Stream",
    subTitle:
      "A streamlined video-sharing platform inspired by YouTube — upload videos, manage your channel and subscribe to other creators.",
    link: "https://flixstream.online",
    github: "https://github.com/ashdephoenix123/video-streaming-frontend",
    image: "img/flixstream.png",
    status: "completed",
    tech: [
      {
        label: "React",
        icon: FaReact,
      },
      {
        label: "Next JS",
        icon: SiNextdotjs,
      },
      {
        label: "React Query",
        icon: SiReactquery,
      },
      {
        label: "Axios",
        icon: SiAxios,
      },
      {
        label: "MongoDB",
        icon: DiMongodb,
      },
    ],
  },
  {
    id: "next-ecomm",
    title: "The Sharkk Co.",
    subTitle:
      "A full-scale e-commerce application built with Next.js, MongoDB and Node.js — featuring user accounts, product listings and automated email notifications via brevo.",
    link: "https://nextecomm.netlify.app/",
    github: "https://github.com/ashdephoenix123/NextJS-Ecom",
    image: "img/image.png",
    status: "completed",
    tech: [
      {
        label: "React",
        icon: FaReact,
      },
      {
        label: "Next JS",
        icon: SiNextdotjs,
      },
      {
        label: "MongoDB",
        icon: DiMongodb,
      },
      {
        label: "Razorpay",
        icon: SiRazorpay,
      },
      {
        label: "Brevo",
        icon: SiBrevo,
      },
    ],
  },
  {
    id: "next-ecomm-product-management",
    title: "Project Management - The Sharkk Co.",
    subTitle:
      "A dedicated product management dashboard for the main Sharkk Co. e-commerce platform — built with Next.js to streamline product creation, updates and inventory control.",
    link: "https://next-ecomm-product-management.vercel.app/",
    github: "https://github.com/ashdephoenix123/next-ecomm-product-management",
    image: "img/next-ecomm-pm.jpg",
    status: "completed",
    tech: [
      {
        label: "React",
        icon: FaReact,
      },
      {
        label: "Next JS",
        icon: SiNextdotjs,
      },
      {
        label: "MUI",
        icon: SiMui,
      },
    ],
    hideLink: true,
  },
  // {
  //   id: "lms",
  //   title: "Anonymous University",
  //   subTitle:
  //     "A Learning Management System where students can access study materials, participate in discussions and collaborate via community-style forums.",
  //   link: "https://anonymousuniversity.vercel.app/",
  //   github: "https://github.com/ashdephoenix123/learning-management-system",
  //   image: "img/lms.png",
  //   status: "In Progress",
  //   tech: [FaReact, SiNextdotjs],
  // },
];

export default projectMOCK;
