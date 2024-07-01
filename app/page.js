import Image from "next/image";

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
      </div>
    </>
  );
}
