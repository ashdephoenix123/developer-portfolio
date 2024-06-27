import Image from "next/image";
import Link from "next/link";
import homeImage from "../public/3.jpg";
import { BsArrowUpRight } from "react-icons/bs";

export const metadata = {
  title: "Akash Sarki - A Web Developer",
  description:
    "Explore Akash Sarki's portfolio showcasing a diverse range of web development projects. Discover skills in frontend and backend development and more.",
};

export default function Home() {
  return (
    <>
      <div className="container2">
        <div className="heroSection">
          <h1 className="heroTitle">
            Full Stack <span className="span1">Developer</span>
          </h1>
          <h2 className="head1">
            Hi<span className="font-serif">,</span> I am{" "}
            <span className="span1">Akash</span>
          </h2>
          <p className="subText">
            Want to build modern, scalable and reliable websites
            <span className="font-serif">?</span> From conception to launch, I
            work with you every step of the way to ensure that your online
            presence accurately reflects your brand and meet your needs.
          </p>
        </div>
        <div className="skillSection">
          <h3 className="head1">
            Skills<span className="font-serif">,</span>
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quae
            et possimus ex similique sunt, minima esse sed ad, ipsam alias
            dolores architecto! Odit error vel, repellendus ducimus doloremque
            saepe eos nam consectetur at dolore magni expedita consequatur ea
            perferendis iusto ad aspernatur a non, molestias rerum
            exercitationem quo?
          </p>
        </div>
        <div className="EducationSection">
          <h3 className="head1">
            My Qualifications<span className="font-serif">'</span>
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quae
            et possimus ex similique sunt, minima esse sed ad, ipsam alias
            dolores architecto! Odit error vel, repellendus ducimus doloremque
            saepe eos nam consectetur at dolore magni expedita consequatur ea
            perferendis iusto ad aspernatur a non, molestias rerum
            exercitationem quo?
          </p>
        </div>
        <div className="EducationSection">
          <h3 className="head1">
            What others say about me<span className="font-serif">?</span>
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quae
            et possimus ex similique sunt, minima esse sed ad, ipsam alias
            dolores architecto! Odit error vel, repellendus ducimus doloremque
            saepe eos nam consectetur at dolore magni expedita consequatur ea
            perferendis iusto ad aspernatur a non, molestias rerum
            exercitationem quo?
          </p>
        </div>
        <div className="EducationSection">
          <h3 className="head2">
            Check out Blogs I have written
            <span className="font-serif">...</span>
          </h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio quae
            et possimus ex similique sunt, minima esse sed ad, ipsam alias
            dolores architecto! Odit error vel, repellendus ducimus doloremque
            saepe eos nam consectetur at dolore magni expedita consequatur ea
            perferendis iusto ad aspernatur a non, molestias rerum
            exercitationem quo?
          </p>
        </div>
        <div className="flex min-[950px]:padd h-[50vh] relative homeS">
          <div className="left basis-1/2 my-auto heroSection  max-[350px]:px-3">
            <h1 className="font-semibold text-4xl text-gray-700 dark:text-white">
              Welcome You<span className="font-serif">,</span>
            </h1>
            <p className="italic mb-4">
              Building a better web, one line of code at a time.
            </p>
            <p className="pr-16 mb-4 removePad1  max-[394px]:text-sm">
              <span className="block">
                Want to bring your digital ideas to life through clean, modern,
                and functional websites and web applications?
              </span>{" "}
              From conception to launch, I work with you every step of the way
              to ensure that your online presence accurately reflects your brand
              and meet your needs.
            </p>
            <Link
              href={"/blogs"}
              className="btn max-[350px]:block max-[350px]:mb-2"
            >
              Explore Blogs
            </Link>
            <Link
              href={"/myResume.pdf"}
              target="_blank"
              className="ml-2 btn max-[350px]:ml-0"
            >
              View Resumé
            </Link>
          </div>
          <div className="right relative basis-1/2 clipIt clipOver">
            <Image
              src={homeImage}
              fill
              className="object-cover"
              alt="hero-image"
              placeholder="blur"
              priority
            ></Image>
          </div>
        </div>
        <div className="w-full disp">
          {/* <Image src='/3.jpg' fill className='w-full object-cover opacity-90' alt="hero-image2"></Image> */}
          <div className="px-4 py-12 my-auto max-[866px]:text-center">
            <h1 className="font-semibold text-4xl text-gray-700 dark:text-white">
              Welcome You<span className="font-serif">,</span>
            </h1>
            <p className="italic mb-4 text-sm -mt-0.5">
              Building a better web, one line of code at a time.
            </p>
            <p className="mb-6 text-sm min-[866px]:pr-48">
              <span className="block">
                Want to bring your digital ideas to life through web
                applications?{" "}
              </span>
              From conception to launch, I work with you every step of the way
              to ensure that your online presence accurately reflects your brand
              and meet your needs.
            </p>
            <Link href={"/blogs"} className="btn">
              Explore Blogs
            </Link>
            <Link href={"/myResume.pdf"} target="_blank" className="ml-2 btn">
              View Resumé
            </Link>
          </div>
        </div>
        <div className="skillsandeducation flex mt-12 min-[950px]:mt-28 min-[950px]:padd">
          <div className="left basis-1/2 mr-4">
            <h1 className="font-semibold text-4xl text-gray-700 max-[950px]:text-center dark:text-white">
              Skills I have<span className="font-serif">,</span>
            </h1>
            <p className="italic mb-4  max-[950px]:text-center">
              These are the building blocks of success.
            </p>
            <div className="flex items-start">
              <Image
                className="max-[530px]:hidden"
                src={"/connection2.gif"}
                width={180}
                height={180}
                alt="skillimg"
              ></Image>
              <div className="py-2 px-6 flex gap-1 justify-center max-[950px]:mx-auto self-center flex-wrap">
                <button className="btn2 hover:scale-105 transition-all bg-red-600">
                  HTML
                </button>
                <button className="btn2 hover:scale-105 transition-all bg-blue-600">
                  CSS
                </button>
                <button className="btn2 hover:scale-105 transition-all bg-yellow-500">
                  JavaScript
                </button>
                <button className="btn2 hover:scale-105 transition-all bg-blue-500">
                  React
                </button>
                <button className="btn2 hover:scale-105 transition-all bg-green-700">
                  NodeJS
                </button>
                <button className="btn2 hover:scale-105 transition-all bg-black">
                  NextJS
                </button>
                <button className="btn2 hover:scale-105 transition-all bg-gray-600">
                  Express
                </button>
                <button className="btn2 hover:scale-105 transition-all bg-green-800">
                  MongoDB
                </button>
              </div>
            </div>
          </div>
          <div className="right relative basis-1/2">
            <h1 className="font-semibold text-4xl text-gray-700  max-[950px]:text-center dark:text-white">
              Educational Qualifications<span className="font-serif">,</span>
            </h1>
            <p className="italic mb-4  max-[950px]:text-center">
              It's not just a degree, it's the knowledge and skills that help
              you achieve your goals.
            </p>
            <ul>
              <li className="flex items-center overflow-hidden  max-[950px]:justify-center">
                <Image
                  src={"/jain5.jpg"}
                  width={80}
                  height={80}
                  className="mr-4"
                  alt="educationimg"
                ></Image>
                <span className="font-sm text4 dark:text-gray-300">
                  Jain University (2021 - present)
                </span>
              </li>
              <li className="flex items-center overflow-hidden  max-[950px]:justify-center">
                <Image
                  src={"/nbu.png"}
                  width={80}
                  height={80}
                  className="mr-4"
                  alt="educationimg"
                ></Image>
                <span className="font-sm text4 dark:text-gray-300">
                  North Bengal University (2017 - 2021)
                </span>
              </li>
              <li className="flex items-center overflow-hidden  max-[950px]:justify-center">
                <Image
                  src={"/school.jpg"}
                  width={80}
                  height={80}
                  className="mr-4"
                  alt="educationimg"
                ></Image>
                <span className="font-sm text4 dark:text-gray-300">
                  Siliguri Model High School (2015 - 2017)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="services min-[950px]:padd mt-12 min-[950px]:mt-20"
          id="services"
        >
          <h2 className="head2 max-[950px]:text-center dark:text-white">
            Some of my Projects<span className="font-serif">,</span>
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
      </div>
    </>
  );
}
