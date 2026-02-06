import Image from "next/image";
import React from "react";

const techStacks = [
  { name: "HTML", imagesrc: "html" },
  { name: "CSS", imagesrc: "css" },
  { name: "JavaScript", imagesrc: "js" },
  { name: "TypeScript", imagesrc: "ts" },
  { name: "React", imagesrc: "react" },
  { name: "Redux", imagesrc: "redux" },
  { name: "Next JS", imagesrc: "next" },
  { name: "MongoDB", imagesrc: "mongodb" },
  { name: "Node JS", imagesrc: "node" },
  { name: "Express", imagesrc: "expressjs" },
  { name: "Tanstack Query", imagesrc: "tanstack" },
  { name: "Axios", imagesrc: "axios" },
  { name: "Postman", imagesrc: "postman" },
  { name: "Webpack", imagesrc: "webpack" },
];

const Techs = () => {
  return (
    <div className="my-12">
      <p className="text-xl mb-8 font-semibold text-gray-300">
        Frequently used Tech Stacks:
      </p>
      <div className="grid [grid-template-columns:repeat(auto-fill,minmax(80px,1fr))] gap-4">
        {techStacks.map((tech) => {
          return (
            <div className="flex flex-col gap-2 items-center">
              <Image
                width={60}
                height={60}
                src={`/techstacks/${tech.imagesrc}.png`}
                alt={tech.name}
              />
              <p className="text-xs text-center text-gray-300 font-light">
                {tech.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Techs;
