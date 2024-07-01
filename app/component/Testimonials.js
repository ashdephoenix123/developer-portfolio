"use client";

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  className: "testimonials",
};

const Testimonials = () => {
  return (
    <Slider {...settings}>
      <div className="testimonial">
        <h4 className="review">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          placeat?
        </h4>
        <div className="author">
          <Image
            src="/img/me.jpg"
            alt="author"
            width={24}
            height={24}
            className="img-author"
          />
          <p className="name">Author name</p>
        </div>
      </div>
      <div className="testimonial">
        <h4 className="review">
          Ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          placeat?
        </h4>
        <div className="author">
          <Image
            src="/img/me.jpg"
            alt="author"
            width={24}
            height={24}
            className="img-author"
          />
          <p className="name">Author name</p>
        </div>
      </div>
      <div className="testimonial">
        <h4 className="review">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur,
          placeat?
        </h4>
        <div className="author">
          <Image
            src="/img/me.jpg"
            alt="author"
            width={24}
            height={24}
            className="img-author"
          />
          <p className="name">Author name</p>
        </div>
      </div>
    </Slider>
  );
};

export default Testimonials;
