import Image from "next/image";
import Link from "next/link";
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
      <div className="right basis-2/3 max-[866px]:pl-0 pl-16 max-[768px]:my-8">
        <h1 className="head1 text-center dark:text-white">
          What you need to know about me <span className="font-serif">?</span>
        </h1>
        <Image
          src="/me3.jpg"
          width={250}
          height={250}
          className="min-[866px]:hidden rounded-3xl mx-auto"
          alt="hero-image"
          priority
        ></Image>
        <div className="text-center text-sm max-[866px]:mt-4">
          <p className="mb-4">
            I am a passionate web developer born in a beautiful town - Siliguri,
            a part of West Bengal.
          </p>
          <p className="mb-4">
            With love for creating beautiful websites, my journey into web
            development began with a curiosity for how websites worked, and has
            since evolved into a career focused on bringing my clients' digital
            visions to life. With a strong foundation in website development, I
            create appealing user interfaces.
          </p>
          <p className="max-[530px]:hidden">
            When I'm not coding, you can find me exploring the outdoors and
            trying out new foods. I am always looking for ways to challenge
            myself and continue learning.
          </p>
        </div>
        <Link
          href={"/myResume.pdf"}
          target="_blank"
          className="ml-2 btn max-[350px]:ml-0"
        >
          View Resumé
        </Link>
      </div>
    </div>
  );
};

export default About;
