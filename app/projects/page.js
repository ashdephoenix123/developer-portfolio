import React from "react";

const Projects = () => {
  return (
    <div className="container2 projectSection min-[950px]:my-12">
      <div className="header">
        <div className="header-fit">
          <svg className="svg-1">
            <use xlinkHref="/sprite.svg#icon-books"></use>
          </svg>
          <h1 className="primary-heading">All Projects</h1>
        </div>
      </div>
      <main className="project-lists">
        <div className="card">
          <figure className="card-figure">
            <img className="card-img" src="img/proj9.png" alt="proj9" />
          </figure>
          <div className="card-info">
            <h2 className="secondary-heading">NextJS ECommerce</h2>
            <p className="card-desc">
              A Fully fledged E-Commerce application made using NextJS Framework
              with various functionalities. Sendgrid API is used for Email
              intimation. &nbsp;
              <span className="makeItBold">
                {" "}
                &nbsp; Made with - NextJS, MongoDB, NodeJS and Sendgrid API
                &nbsp;
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
            <h2 className="secondary-heading">React E-Commerce</h2>
            <p className="card-desc">
              A Simple React based Web application with functionality like
              Products listings & Add to cart. Listed products are fetched
              through REST API. &nbsp;
              <span className="makeItBold">
                {" "}
                &nbsp; Made with - React &nbsp;
              </span>
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
            <h2 className="secondary-heading">News Application</h2>
            <p className="card-desc">
              A News Web Application designed solely for reading news articles
              with modern approach of infinite scroll. Data Fetched from a third
              party API- NewsData.io &nbsp;{" "}
              <span className="makeItBold">
                {" "}
                &nbsp; Made with - React &nbsp;
              </span>{" "}
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
            <h2 className="secondary-heading">Microsoft Clone</h2>
            <p className="card-desc">
              A Clone of Microsoft's Home Page. &nbsp;{" "}
              <span className="makeItBold">
                {" "}
                &nbsp; Made with - HTML, CSS & NextJS &nbsp;
              </span>{" "}
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
            <h2 className="secondary-heading">Speech to Text Converter</h2>
            <p className="card-desc">
              A Speech to text Converter &nbsp;{" "}
              <span className="makeItBold">
                {" "}
                &nbsp; Made with - React and NPM packages &nbsp;
              </span>{" "}
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
            <h2 className="secondary-heading">To-do List App</h2>
            <p className="card-desc">
              A Simple to-do list application. &nbsp;{" "}
              <span className="makeItBold">
                {" "}
                &nbsp; Made with - HTML, CSS, JavaScript & EJS template &nbsp;
              </span>{" "}
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
            <h2 className="secondary-heading">To-do List App V2</h2>
            <p className="card-desc">
              A Simple To-do list application. &nbsp;{" "}
              <span className="makeItBold">
                {" "}
                &nbsp; Made with - React &nbsp;
              </span>{" "}
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
            <h2 className="secondary-heading">Booking App</h2>
            <p className="card-desc">
              A UI of a Booking Application made using css flexbox. Reference-
              Trillo application by John Schmedtmann &nbsp;{" "}
              <span className="makeItBold">
                {" "}
                &nbsp; Made with - HTML & Sass &nbsp;
              </span>{" "}
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
            <h2 className="secondary-heading">Blog Website</h2>
            <p className="card-desc">
              A Simple Blog website with backend functionality. Blogs are saved
              in MongoDB Database. A User can write an article and save it for
              his reference. &nbsp;{" "}
              <span className="makeItBold">
                {" "}
                &nbsp; Made with - EJS template, MongoDB, Mongoose &nbsp;
              </span>{" "}
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
            <h2 className="secondary-heading">Weather Application</h2>
            <p className="card-desc">
              A Weather application, Data is fetched from open source weather
              API - openweather.org. &nbsp;{" "}
              <span className="makeItBold">
                {" "}
                &nbsp; Made with - React &nbsp;
              </span>{" "}
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
            <h2 className="secondary-heading">REST API</h2>
            <p className="card-desc">
              A JSON data made using using REST API which is saved in MongoDB
              database. &nbsp;{" "}
              <span className="makeItBold">
                {" "}
                &nbsp; Made with - NodeJS, MongoDB, Mongoose &nbsp;
              </span>{" "}
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
