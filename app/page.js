import Image from "next/image";
import Link from "next/link";
import homeImage from "../public/3.jpg";
import { BsArrowUpRight } from "react-icons/bs";
import BblogCard2 from "./component/BblogCard2";

export const metadata = {
  title: "Akash Sarki - Web Developer Portfolio",
  description:
    "Explore Akash Sarki's portfolio showcasing a diverse range of web development projects. Discover skills in frontend and backend development and more.",
};

export default function Home() {
  return (
    <>
      <div className="">
        <div className="heroSection container2">
          <div className="heroContain">
            <h2 className="head1 text-white">
              Hi<span className="font-serif">,</span> I am{" "}
              <span className="span1">Akash</span>
            </h2>
            <h1 className="heroTitle">
              A Full Stack <span className="span1">Developer</span>
            </h1>
            <p className="subText">
              Want to build modern, scalable and reliable websites
              <span className="font-serif">?</span> From conception to launch, I
              work with you every step of the way to ensure that your online
              presence accurately reflects your brand and meet your needs.
            </p>
          </div>
        </div>
        <div className="skillSection text-black min-h-screen">
          <div className="container2">
            <h3 className="head1">
              Technologies I work with<span className="font-serif">,</span>
            </h3>
            <p className="subText">
              Building websites with the latest technologies to keep you
              updated!
            </p>
            <div className="skill">
              <p className="js">Javascript</p>
              <p className="react">React</p>
              <p className="next">NextJS</p>
              <p className="etc">and more...</p>
            </div>
          </div>
        </div>
        <div className="studySection container2">
          <h3 className="head1 text-white">Educational Qualifications</h3>
          <p className="subText">
            Empowering my journey with knowledge and skills to shape a brighter
            future.
          </p>
          <div className="educationLists">
            <div className="educ">
              <Image
                src={"/jain8.jpeg"}
                width={150}
                height={150}
                className="mr-4 educationimg"
                alt="educationimg"
              ></Image>
              <div className="rightSec">
                <div className="name head3">JAIN (Deemed-to-be University)</div>
                <p className="paraG">
                  Masters<span className="font-serif">'</span> in Computer
                  Application (2021 - 2023)
                </p>
                <p className="paraLower">
                  Completed my Master's degree through an online program,
                  demonstrating commitment, adaptability, and the ability to
                  excel in a digital learning environment.
                </p>
              </div>
            </div>

            <div className="educ">
              <Image
                src={"/nbu.png"}
                width={150}
                height={150}
                className="mr-4 educationimg"
                alt="educationimg"
              ></Image>
              <div className="rightSec">
                <div className="name head3">North Bengal University</div>
                <p className="paraG">
                  Bachelor<span className="font-serif">'</span> in Computer
                  Science (2017 - 2021)
                </p>
                <p className="paraLower">
                  Earned my Bachelor's degree, laying a strong foundation of
                  knowledge and skills that have propelled my academic and
                  professional journey forward.
                </p>
              </div>
            </div>

            <div className="educ">
              <Image
                src={"/school.jpg"}
                width={150}
                height={150}
                className="mr-4 educationimg"
                alt="educationimg"
              ></Image>
              <div className="rightSec">
                <div className="name head3">Siliguri Model High School</div>
                <p className="paraG">Secondary School (2015 - 2017)</p>
                <p className="paraLower">
                  Completed my secondary education with distinction,
                  establishing a solid academic foundation and igniting a
                  passion for lifelong learning and growth.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="showBlogSection min-h-screen">
          <div className="container2">
            <h3 className="head1">
              Check out Blogs I have written
              <span className="font-serif">...</span>
            </h3>
            <div className="homeBlog">
              {Array.from({ length: 3 }, (_, i) => i).map((_, ind) => (
                <BblogCard2 />
              ))}
            </div>
          </div>
        </div>

        <div
          className="services min-[950px]:padd mt-12 min-[950px]:mt-20  min-h-screen"
          id="services"
        >
          <h2 className="head1 container2">
            What others say about me<span className="font-serif">?</span>
          </h2>
          <div className="slider">
            <div className="slide-track">
              <div className="slide relative">
                <Image
                  src={"/proj1.png"}
                  fill
                  className="imageInSlide"
                  alt="projectimg"
                ></Image>
                <div className="projBack">
                  <Link
                    href={"https://nextecomm.netlify.app/"}
                    target="_blank"
                    className="btn-outline absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex items-center"
                  >
                    VISIT <BsArrowUpRight className="ml-1" />
                  </Link>
                </div>
              </div>
              <div className="slide relative">
                <Image
                  src={"/proj2.png"}
                  fill
                  className="imageInSlide"
                  alt="projectimg"
                ></Image>
                <div className="projBack">
                  <Link
                    href={"https://newzappnews.netlify.app/"}
                    target="_blank"
                    className="btn-outline absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex items-center"
                  >
                    VISIT <BsArrowUpRight className="ml-1" />
                  </Link>
                </div>
              </div>
              <div className="slide relative">
                <Image
                  src={"/proj3.png"}
                  fill
                  className="imageInSlide"
                  alt="projectimg"
                ></Image>
                <div className="projBack">
                  <Link
                    href={"https://microsoftclone1.vercel.app/"}
                    target="_blank"
                    className="btn-outline absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex items-center"
                  >
                    VISIT <BsArrowUpRight className="ml-1" />
                  </Link>
                </div>
              </div>
              <div className="slide relative">
                <Image
                  src={"/proj4.png"}
                  fill
                  className="imageInSlide"
                  alt="projectimg"
                ></Image>
                <div className="projBack">
                  <Link
                    href={"https://sarkihouse.vercel.app/"}
                    target="_blank"
                    className="btn-outline absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex items-center"
                  >
                    VISIT <BsArrowUpRight className="ml-1" />
                  </Link>
                </div>
              </div>
              <div className="slide relative">
                <Image
                  src={"/proj5.png"}
                  fill
                  className="imageInSlide"
                  alt="projectimg"
                ></Image>
                <div className="projBack">
                  <Link
                    href={"https://sttconverter.netlify.app/"}
                    target="_blank"
                    className="btn-outline absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex items-center"
                  >
                    VISIT <BsArrowUpRight className="ml-1" />
                  </Link>
                </div>
              </div>
              <div className="slide relative">
                <Image
                  src={"/proj6.png"}
                  fill
                  className="imageInSlide"
                  alt="projectimg"
                ></Image>
                <div className="projBack">
                  <Link
                    href={"https://akashsarki-projects.vercel.app/"}
                    target="_blank"
                    className="btn-outline absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex items-center"
                  >
                    VISIT <BsArrowUpRight className="ml-1" />
                  </Link>
                </div>
              </div>

              <div className="slide relative">
                <Image
                  src={"/proj1.png"}
                  fill
                  className="imageInSlide"
                  alt="projectimg"
                ></Image>
                <div className="projBack">
                  <Link
                    href={"https://nextecomm.netlify.app/"}
                    target="_blank"
                    className="btn-outline absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex items-center"
                  >
                    VISIT <BsArrowUpRight className="ml-1" />
                  </Link>
                </div>
              </div>
              <div className="slide relative">
                <Image
                  src={"/proj2.png"}
                  fill
                  className="imageInSlide"
                  alt="projectimg"
                ></Image>
                <div className="projBack">
                  <Link
                    href={"https://newzappnews.netlify.app/"}
                    target="_blank"
                    className="btn-outline absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex items-center"
                  >
                    VISIT <BsArrowUpRight className="ml-1" />
                  </Link>
                </div>
              </div>
              <div className="slide relative">
                <Image
                  src={"/proj3.png"}
                  fill
                  className="imageInSlide"
                  alt="projectimg"
                ></Image>
                <div className="projBack">
                  <Link
                    href={"https://microsoftclone1.vercel.app/"}
                    target="_blank"
                    className="btn-outline absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex items-center"
                  >
                    VISIT <BsArrowUpRight className="ml-1" />
                  </Link>
                </div>
              </div>
              <div className="slide relative">
                <Image
                  src={"/proj4.png"}
                  fill
                  className="imageInSlide"
                  alt="projectimg"
                ></Image>
                <div className="projBack">
                  <Link
                    href={"https://sarkihouse.vercel.app/"}
                    target="_blank"
                    className="btn-outline absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex items-center"
                  >
                    VISIT <BsArrowUpRight className="ml-1" />
                  </Link>
                </div>
              </div>
              <div className="slide relative">
                <Image
                  src={"/proj5.png"}
                  fill
                  className="imageInSlide"
                  alt="projectimg"
                ></Image>
                <div className="projBack">
                  <Link
                    href={"https://sttconverter.netlify.app/"}
                    target="_blank"
                    className="btn-outline absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex items-center"
                  >
                    VISIT <BsArrowUpRight className="ml-1" />
                  </Link>
                </div>
              </div>
              <div className="slide relative">
                <Image
                  src={"/proj6.png"}
                  fill
                  className="imageInSlide"
                  alt="projectimg"
                ></Image>
                <div className="projBack">
                  <Link
                    href={"https://www.thesharkkcompany.tech/"}
                    target="_blank"
                    className="btn-outline absolute top-1/2 left-1/2 -translate-x-2/4 -translate-y-2/4 flex items-center"
                  >
                    VISIT <BsArrowUpRight className="ml-1" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <Link className="btn" href="/projects">
              View All projects
            </Link>
          </div>
        </div>

        {/* <Link
          href={"/myResume.pdf"}
          target="_blank"
          className="ml-2 btn max-[350px]:ml-0"
        >
          View Resumé
        </Link> */}
      </div>
    </>
  );
}
