import React from "react";

const Projects = () => {
  return (
    <div className="max-w-lg projectSection min-[950px]:my-12">
      <div className="header">
        <div className="header-fit">
          <svg className="svg-1">
            <use xlinkHref="/sprite.svg#icon-books"></use>
          </svg>
          <h1 className="primary-heading text-white">All Projects</h1>
        </div>
      </div>
      <main className="project-lists">
        <div className="card">
          <figure className="card-figure">
            <img className="card-img" src="img/proj9.png" alt="proj9" />
          </figure>
          <div className="card-info">
            <h2 className="secondary-heading  text-white font-semibold">
              NextJS ECommerce
            </h2>
            <p className="card-desc text-white">
              A Fully fledged E-Commerce application made using NextJS Framework
              with various functionalities. Sendgrid API is used for Email
              intimation.
              <span className="makeItBold">
                Made with - NextJS, MongoDB, NodeJS and Sendgrid API.
              </span>
            </p>
            <a
              className="btn"
              href="https://nextecomm.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
            <a
              className="btn"
              href="https://github.com/ashdephoenix123/NextJS-Ecom"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </div>
        </div>

        <div className="card">
          <figure className="card-figure">
            <img className="card-img" src="img/proj1.png" alt="proj1" />
          </figure>
          <div className="card-info">
            <h2 className="secondary-heading  text-white font-semibold">
              React E-Commerce
            </h2>
            <p className="card-desc text-white">
              A Simple React based Web application with functionality like
              Products listings & Add to cart. Listed products are fetched
              through REST API.
              <span className="makeItBold">Made with - React</span>
            </p>
            <a
              className="btn"
              href="https://sarkihouse.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
            <a
              className="btn"
              href="https://github.com/ashdephoenix123/sarkihouse"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </div>
        </div>

        <div className="card">
          <figure className="card-figure">
            <img className="card-img" src="img/proj2.png" alt="proj2" />
          </figure>
          <div className="card-info">
            <h2 className="secondary-heading  text-white font-semibold">
              News Application
            </h2>
            <p className="card-desc text-white">
              A News Web Application designed solely for reading news articles
              with modern approach of infinite scroll. Data Fetched from a third
              party API- NewsData.io
              <span className="makeItBold">Made with - React</span>{" "}
            </p>
            <a
              className="btn"
              href="https://newzappnews.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
            <a
              className="btn"
              href="https://github.com/ashdephoenix123/news_application"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </div>
        </div>

        <div className="card">
          <figure className="card-figure">
            <img className="card-img" src="img/proj10.png" alt="proj3" />
          </figure>
          <div className="card-info">
            <h2 className="secondary-heading  text-white font-semibold">
              Microsoft Clone
            </h2>
            <p className="card-desc text-white">
              A Clone of Microsoft's Home Page.
              <span className="makeItBold">Made with - HTML, CSS & NextJS</span>
            </p>
            <a
              className="btn"
              href="https://microsoftclone1.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
            <a
              className="btn"
              href="https://github.com/ashdephoenix123/microsoft-clone"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </div>
        </div>

        <div className="card">
          <figure className="card-figure">
            <img className="card-img" src="img/proj11.png" alt="proj11" />
          </figure>
          <div className="card-info">
            <h2 className="secondary-heading  text-white font-semibold">
              Speech to Text Converter
            </h2>
            <p className="card-desc text-white">
              A Speech to text Converter
              <span className="makeItBold">
                Made with - React and NPM packages
              </span>
            </p>
            <a
              className="btn"
              href="https://sttconverter.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
            <a
              className="btn"
              href="https://github.com/ashdephoenix123/speech-to-text-converter"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </div>
        </div>

        <div className="card">
          <figure className="card-figure">
            <img className="card-img" src="img/proj3.png" alt="proj3" />
          </figure>
          <div className="card-info">
            <h2 className="secondary-heading  text-white font-semibold">
              To-do List App
            </h2>
            <p className="card-desc text-white">
              A Simple to-do list application.
              <span className="makeItBold">
                Made with - HTML, CSS, JavaScript & EJS template
              </span>
            </p>
            <a
              className="btn"
              href="https://todolist-s5d0.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
            <a
              className="btn"
              href="https://github.com/ashdephoenix123/TodoList"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </div>
        </div>

        <div className="card">
          <figure className="card-figure">
            <img className="card-img" src="img/proj4.png" alt="proj4" />
          </figure>
          <div className="card-info">
            <h2 className="secondary-heading  text-white font-semibold">
              To-do List App V2
            </h2>
            <p className="card-desc text-white">
              A Simple To-do list application.
              <span className="makeItBold">Made with - React</span>
            </p>
            <a
              className="btn"
              href="https://checktodayslist.netlify.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="card">
          <figure className="card-figure">
            <img className="card-img" src="img/proj8.png" alt="proj8" />
          </figure>
          <div className="card-info">
            <h2 className="secondary-heading  text-white font-semibold">
              Booking App
            </h2>
            <p className="card-desc text-white">
              A UI of a Booking Application made using css flexbox. Reference-
              Trillo application by John Schmedtmann
              <span className="makeItBold">Made with - HTML & Sass</span>
            </p>
            <a
              className="btn"
              href="https://bookship.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
            <a
              className="btn"
              href="https://github.com/ashdephoenix123/bookship"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </div>
        </div>

        <div className="card">
          <figure className="card-figure">
            <img className="card-img" src="img/proj5.png" alt="proj5" />
          </figure>
          <div className="card-info">
            <h2 className="secondary-heading  text-white font-semibold">
              Blog Website
            </h2>
            <p className="card-desc text-white">
              A Simple Blog website with backend functionality. Blogs are saved
              in MongoDB Database. A User can write an article and save it for
              his reference.
              <span className="makeItBold">
                &nbsp; Made with - EJS template, MongoDB, Mongoose
              </span>
            </p>
            <a
              className="btn"
              href="https://sarki-blog.onrender.com/"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
            <a
              className="btn"
              href="https://github.com/ashdephoenix123/my-blog-website1"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </div>
        </div>

        <div className="card">
          <figure className="card-figure">
            <img className="card-img" src="img/proj6.png" alt="proj6" />
          </figure>
          <div className="card-info">
            <h2 className="secondary-heading  text-white font-semibold">
              Weather Application
            </h2>
            <p className="card-desc text-white">
              A Weather application, Data is fetched from open source weather
              API - openweather.org.
              <span className="makeItBold">Made with - React</span>
            </p>
            <a
              className="btn"
              href="https://sarkiweatherapp.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
          </div>
        </div>

        <div className="card">
          <figure className="card-figure">
            <img className="card-img" src="img/proj7.png" alt="proj7" />
          </figure>
          <div className="card-info">
            <h2 className="secondary-heading  text-white font-semibold">
              REST API
            </h2>
            <p className="card-desc text-white">
              A JSON data made using using REST API which is saved in MongoDB
              database.
              <span className="makeItBold">
                Made with - NodeJS, MongoDB, Mongoose
              </span>
            </p>
            <a
              className="btn"
              href="https://apidata-y8k9.onrender.com/api/allProducts"
              target="_blank"
              rel="noreferrer"
            >
              View Project
            </a>
            <a
              className="btn"
              href="https://github.com/ashdephoenix123/API"
              target="_blank"
              rel="noreferrer"
            >
              Github Repo
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Projects;
