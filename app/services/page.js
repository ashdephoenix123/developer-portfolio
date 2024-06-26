import React from "react";
import Card from "../component/Card";

const Services = () => {
  return (
    <div
      className="container2 services min-[950px]:padd mt-12 min-[950px]:mt-20 min-[950px]:mb-36"
      id="services"
    >
      <h2 className="head1  max-[950px]:text-center dark:text-white">
        Services I Provide<span className="font-serif">,</span>
      </h2>
      <div className="cardContainer">
        <Card
          title="Website Design & Development"
          description="I will help you in custom website design and development, as well as responsive design for optimal viewing on different devices."
          link="Hire me"
        />
        <Card
          title="Mentorship"
          description="I offer one-on-one mentorship to help new and aspiring developers develop their skills. Let's work together to help you achieve your goals and reach your full potential as a web developer."
          link="Get Support"
        />
        <Card
          title="Content Writing"
          description="I can help you create website content that captivates and engages your audience. I craft content that is optimized for SEO and designed to convert visitors into customers."
          link="Get in touch"
        />
      </div>
    </div>
  );
};

export default Services;
