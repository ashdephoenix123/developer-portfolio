import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div
      className="container2 aboutSection flex flex-wrap items-center max-[866px]:block min-[950px]:padd min-[950px]:my-20"
      id="about"
    >
      <div className="left relative basis-1/3 overflow-hidden rounded-2xl shade1">
        <Image
          src="/me3.jpg"
          width={500}
          height={500}
          className="w-full object-cover object-top max-[866px]:hidden"
          alt="hero-image"
          priority
        ></Image>
      </div>
      <div className="right basis-2/3 max-[866px]:pl-0 pl-16">
        <h2 className="head1 text-center dark:text-white">
          About Me<span className="font-serif">,</span>
        </h2>
        <Image
          src="/me3.jpg"
          width={250}
          height={250}
          className="min-[866px]:hidden rounded-3xl mx-auto"
          alt="hero-image"
          priority
        ></Image>
        <div className="text-center text-sm italic max-[866px]:mt-4">
          <p className="mb-4">
            Hello and welcome! I am a passionate web developer with a love for
            creating beautiful, functional websites and web applications. My
            journey into web development began with a curiosity for how websites
            worked, and has since evolved into a career focused on bringing my
            clients' digital visions to life.
          </p>
          <p className="mb-4">
            With a strong foundation in front-end development using HTML, CSS,
            and JavaScript, I am able to create engaging user interfaces that
            are responsive across all devices. I am also comfortable working
            with back-end technologies such as Node.js, and databases such as
            MongoDB.
          </p>
          <p className="max-[530px]:hidden">
            When I'm not coding, you can find me exploring the outdoors and
            trying out new foods. I am always looking for ways to challenge
            myself and continue learning, and I am excited for the opportunity
            to work with you and bring your digital ideas to life."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
