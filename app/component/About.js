"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const About = () => {
  const router = useRouter();
  return (
    <div
      className="lg:flex mt-16 lg:mt-0 flex-wrap items-center min-h-screen max-w-[62rem] mx-auto p-4 md:p-8"
      id="about"
    >
      <div className="left relative lg:basis-1/3 overflow-hidden rounded-full shade1">
        <Image
          src="/profile-picture.jpg"
          width={500}
          height={500}
          className="w-full object-cover object-top max-[866px]:hidden"
          alt="hero-image"
          priority
        ></Image>
      </div>
      <div className="right lg:basis-2/3 max-[866px]:pl-0 max-[768px]:my-8">
        <h1 className="head1 text-center dark:text-white">
          Hi, I am Akash<span className="font-serif">,</span>
        </h1>
        <Image
          src="/profile-picture.jpg"
          width={250}
          height={250}
          className="min-[866px]:hidden rounded-full mx-auto"
          alt="hero-image"
          priority
        ></Image>
        <div className="text-center text-sm max-[866px]:mt-4">
          <p className="mb-4 max-w-lg mx-auto">
            I'm a front-end developer with experience in JavaScript and React,
            focused on building responsive, user-friendly interfaces. I enjoy
            turning ideas into functional and visually engaging web experiences.
            Always eager to learn and improve, I strive to write clean,
            efficient code that brings designs to life.
          </p>
        </div>
        <div className="btnCont gap-2 ">
          <button
            onClick={() => router.push("/myResume.pdf")}
            target="_blank"
            className="button border border-neutral-600 rounded-full text-sm bg-neutral-600/80 text-white px-4 py-2 hover:bg-transparent"
          >
            View Resumé
          </button>
          <button
            onClick={() => router.push("/projects")}
            target="_blank"
            className="button border border-neutral-600 rounded-full text-sm bg-transparent text-white px-4 py-2 ml-2"
          >
            View projects
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
