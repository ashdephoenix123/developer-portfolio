import React from "react";
import Header from "./common/Header";

const CurrentLearning = () => {
  return (
    <section className="experience text-gray-300">
      <Header>What I am currently learning?</Header>
      <ul className="mt-4 ps-4 list-disc space-y-4">
        <li className="font-extralight">
          Mention things like "Exploring AI & Agents" or "Scaling Backend
          Systems" (since you've been looking into Redis/Docker).
        </li>
        <li className="font-extralight">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit, et
          vero! Repudiandae, accusamus obcaecati aperiam impedit delectus
          accusantium tempore! Accusantium.
        </li>
      </ul>
    </section>
  );
};

export default CurrentLearning;
