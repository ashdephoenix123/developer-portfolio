import Image from "next/image";
import React from "react";

const ProjectCard = ({
  title,
  description,
  imagesrc,
  link,
  sourcecodeURL,
  techStacks,
  hideLink,
}) => {
  return (
    <div className="grid md:flex border border-gray-500 rounded-3xl overflow-hidden">
      <div className="order-2 flex-1 p-5 text-sm text-gray-300 flex flex-col">
        <p className="text-lg mb-2 font-semibold">{title}</p>
        <p className="text-sm font-light mb-4">{description}</p>

        <div className="flex gap-3 flex-1">
          {techStacks.map((Stack) => (
            <div className="relative group inline-block self-start">
              <Stack.icon size={24} />

              <span
                className="
    absolute -bottom-10 left-1/2 -translate-x-1/2
    scale-0 group-hover:scale-100
    transition-transform
    rounded bg-gray-900 px-2 py-1 text-xs text-white
    whitespace-nowrap
  "
              >
                {Stack.label}
              </span>
            </div>
          ))}
        </div>

        <div className="mt-6 md:mt-auto flex gap-4 underline-offset-[2px] [&>*]:text-xs">
          {/* <button className="hover:underline duration-500 transtion-all">
            Read More
          </button> */}
          {!hideLink && (
            <button className="hover:underline duration-500 transtion-all">
              <a href={link} target="_blank" rel="noreferrer">
                View Project
              </a>
            </button>
          )}
          <button className="hover:underline duration-500 transtion-all">
            <a href={sourcecodeURL} target="_blank" rel="noreferrer">
              Source Code
            </a>
          </button>
        </div>
      </div>
      <div className="w-full h-52 md:w-96 md:h-64 relative order-1 md:order-3">
        <Image
          src={imagesrc}
          fill
          className="object-cover object-left"
          alt="hero-image"
          priority
        ></Image>
      </div>
    </div>
  );
};

export default ProjectCard;
