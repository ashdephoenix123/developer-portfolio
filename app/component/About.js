"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CircularText from "./CircularText";

const itemVariant = {
  initial: { opacity: 0, y: 20 },
  final: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const containerVariant = {
  initial: { opacity: 0 },
  final: {
    opacity: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.1,
    },
  },
};

const About = () => {
  const router = useRouter();
  return (
    <div className="lg:grid lg:grid-cols-2 mx-auto">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.5, duration: 2 } }}
        className="relative flex justify-center"
      >
        <Image
          src="/profile-27-JAN.JPG"
          width={220}
          height={220}
          className="w-72 h-72 object-cover max-[866px]:hidden rounded-full"
          alt="hero-image"
          priority
        ></Image>
        <div className="absolute hidden lg:block -top-[36px]">
          <CircularText
            text="JS*DEVELOPER*JS*DEVELOPER*JS*DEVELOPER*"
            onHover="slowDown"
            spinDuration={30}
            className="bg-transparent"
          />
        </div>
      </motion.div>
      <motion.div
        variants={containerVariant}
        initial="initial"
        animate="final"
        className="overflow-hidden"
      >
        <motion.div
          variants={itemVariant}
          className="relative lg:basis-1/3 justify-center my-12 flex lg:hidden"
        >
          <Image
            src="/profile-27-JAN.JPG"
            width={180}
            height={180}
            className="min-[866px]:hidden rounded-full mx-auto"
            alt="hero-image"
            priority
          ></Image>
          <div className="absolute lg:hidden -top-[30px]">
            <CircularText
              text="JS*DEVELOPER*JS*DEVELOPER*JS*DEVELOPER*"
              onHover="slowDown"
              spinDuration={30}
              className="bg-transparent"
            />
          </div>
        </motion.div>
        <motion.h1
          variants={itemVariant}
          className="head1 text-center dark:text-white"
        >
          Hi, I am Akash<span className="font-serif">,</span>
        </motion.h1>
        <motion.div
          variants={itemVariant}
          className="text-center text-sm max-[866px]:mt-4"
        >
          <p className="mb-4 max-w-lg mx-auto text-neutral-400">
            I'm a front-end developer with experience in JavaScript and React,
            focused on building responsive, user-friendly interfaces. I enjoy
            turning ideas into functional and visually engaging web experiences.
            Always eager to learn and improve, I strive to write clean,
            efficient code that brings designs to life.
          </p>
        </motion.div>
        <motion.div variants={itemVariant} className="btnCont gap-2 ">
          <button
            onClick={() => router.push("/resume-18-dec-2025.pdf")}
            target="_blank"
            className="button text-sm bg-neutral-600/80 text-white px-6 py-3 hover:bg-transparent button-gradient-1"
          >
            View Resumé
          </button>
          <button
            onClick={() => router.push("/projects")}
            target="_blank"
            className="button border border-neutral-700 lg:border-transparent lg:hover:border-neutral-700 text-sm bg-transparent text-white px-6 py-3 ml-2"
          >
            View projects
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
