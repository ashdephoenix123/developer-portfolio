"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import CircularText from "./CircularText";

const About = () => {
  const router = useRouter();
  return (
    <div
      className="lg:flex flex-wrap items-center min-h-screen mx-auto"
      id="about"
    >
      <div className="relative lg:basis-1/3 flex justify-center">
        <Image
          src="/profile-picture.jpg"
          width={220}
          height={220}
          className="w-72 h-72 object-cover object-top max-[866px]:hidden rounded-full"
          alt="hero-image"
          priority
        ></Image>
        <div className="absolute hidden lg:block -top-[36px]">
          <CircularText
            text="JS*DEVELOPER*JS*DEVELOPER*JS*DEVELOPER*"
            onHover="speedUp"
            spinDuration={30}
            className="bg-transparent"
          />
        </div>
      </div>
      <div className="lg:basis-2/3 max-[866px]:pl-0 max-[768px]:my-8">
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
