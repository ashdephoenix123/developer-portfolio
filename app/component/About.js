"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import CircularText from "./CircularText";
import { IoMdArrowForward } from "react-icons/io";

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
      staggerChildren: 0.12,
    },
  },
};

const About = () => {
  const router = useRouter();
  return (
    <div className="lg:grid lg:grid-cols-2 mx-auto min-h-[85vh] items-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{
          opacity: 1,
          scale: 1,
          transition: { delay: 0.5, duration: 1.5, ease: "easeOut" },
        }}
        className="relative flex justify-center"
      >
        <div className="relative float-animation">
          <div className="profile-glow rounded-full">
            <Image
              src="/profile-27-JAN.JPG"
              width={220}
              height={220}
              className="w-72 h-72 object-cover max-[866px]:hidden rounded-full relative z-10"
              alt="hero-image"
              priority
            />
          </div>
        </div>
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
          <div className="relative float-animation">
            <div className="profile-glow rounded-full">
              <Image
                src="/profile-27-JAN.JPG"
                width={180}
                height={180}
                className="min-[866px]:hidden rounded-full mx-auto relative z-10"
                alt="hero-image"
                priority
              />
            </div>
          </div>
          <div className="absolute lg:hidden -top-[30px]">
            <CircularText
              text="JS*DEVELOPER*JS*DEVELOPER*JS*DEVELOPER*"
              onHover="slowDown"
              spinDuration={30}
              className="bg-transparent"
            />
          </div>
        </motion.div>

        <motion.div variants={itemVariant} className="flex justify-center lg:justify-start mb-6">
          <span className="status-badge">
            <span className="pulse-dot"></span>
            Available for work
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariant}
          className="head1 text-center lg:text-left"
        >
          Hi, I am{" "}
          <span className="gradient-text">Akash</span>
          <span className="font-serif">,</span>
        </motion.h1>
        <motion.div
          variants={itemVariant}
          className="text-center lg:text-left text-sm max-[866px]:mt-4"
        >
          <p className="mb-6 max-w-lg mx-auto lg:mx-0 text-neutral-400 leading-relaxed">
            I&apos;m a front-end developer with experience in JavaScript and React,
            focused on building responsive, user-friendly interfaces. I enjoy
            turning ideas into functional and visually engaging web experiences.
            Always eager to learn and improve, I strive to write clean,
            efficient code that brings designs to life.
          </p>
        </motion.div>
        <motion.div
          variants={itemVariant}
          className="btnCont flex justify-center lg:justify-start gap-3"
        >
          <button
            onClick={() => router.push("/resume-18-dec-2025.pdf")}
            className="button text-sm text-white px-6 py-3 button-gradient-1 flex items-center gap-2"
          >
            View Resumé
            <IoMdArrowForward className="text-base" />
          </button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
