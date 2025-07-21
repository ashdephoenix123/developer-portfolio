import Image from "next/image";
import React from "react";

const HomeSection = () => {
  return (
    <div className="">
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
              width={120}
              height={120}
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
                demonstrating commitment, adaptability, and the ability to excel
                in a digital learning environment.
              </p>
            </div>
          </div>

          <div className="educ">
            <Image
              src={"/nbu.png"}
              width={120}
              height={120}
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
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
