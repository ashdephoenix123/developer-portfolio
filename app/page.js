import Image from "next/image";
import Card from "./component/Card";
import Contact from "./component/Contact";
import Link from "next/link";
import homeImage from "../public/3.jpg";

export default function Home() {

  return (
    <>
      <div className="container2">
        <div className="flex min-[950px]:padd h-[50vh] relative homeS">
          <div className="left basis-1/2 my-auto heroSection  max-[350px]:px-3">
            <h1 className="font-semibold text-4xl text-gray-700 dark:text-white">Welcome You<span className="font-serif">,</span></h1>
            <p className="italic mb-4">Building a better web, one line of code at a time.</p>
            <p className="pr-16 mb-4 removePad1  max-[394px]:text-sm"><span className="block">Want to bring your digital ideas to life through clean, modern, and functional websites and web applications?</span> From conception to launch, I work with you every step of the way to ensure that your online presence accurately reflects your brand and meet your needs.</p>
            <button className="btn max-[350px]:block max-[350px]:mb-2">Explore Blogs</button>
            <Link href={'/resume.pdf'} target="_blank" className="ml-2 btn  max-[350px]:ml-0">View Resumé</Link>
          </div>
          <div className="right relative basis-1/2 clipIt clipOver">
            <Image src={homeImage} fill className='object-cover' alt="hero-image" placeholder="blur" priority></Image>
          </div>
        </div>
        <div className="w-full disp">
          {/* <Image src='/3.jpg' fill className='w-full object-cover opacity-90' alt="hero-image2"></Image> */}
          <div className="px-4 py-12 my-auto max-[866px]:text-center">
            <h1 className="font-semibold text-4xl text-gray-700 dark:text-white">Welcome You<span className="font-serif">,</span></h1>
            <p className="italic mb-4 text-sm -mt-0.5">Building a better web, one line of code at a time.</p>
            <p className="mb-6 text-sm min-[866px]:pr-48"><span className="block">Want to bring your digital ideas to life through web applications? </span>From conception to launch, I work with you every step of the way to ensure that your online presence accurately reflects your brand and meet your needs.</p>
            <button className="btn">Explore Blogs</button>
            <Link href={'/resume.pdf'} target="_blank" className="ml-2 btn">View Resumé</Link>
          </div>
        </div>
        <div className="aboutSection flex flex-wrap items-center max-[866px]:block min-[950px]:padd mt-12 min-[950px]:mt-28" id="about">
          <div className="left relative basis-1/3 overflow-hidden rounded-2xl shade1">
            <Image src='/me3.jpg' width={500} height={500} className='w-full object-cover object-top max-[866px]:hidden' alt="hero-image" priority></Image>
          </div>
          <div className="right basis-2/3 max-[866px]:pl-0 pl-16">
            <h2 className="head1 text-center dark:text-white">About Me<span className="font-serif">,</span></h2>
            <Image src='/me3.jpg' width={250} height={250} className='min-[866px]:hidden rounded-3xl mx-auto' alt="hero-image" priority></Image>
            <div className="text-center text-sm italic max-[866px]:mt-4">
              <p className="mb-4">Hello and welcome! I am a passionate web developer with a love for creating beautiful, functional websites and web applications. My journey into web development began with a curiosity for how websites worked, and has since evolved into a career focused on bringing my clients' digital visions to life.</p>
              <p className="mb-4">With a strong foundation in front-end development using HTML, CSS, and JavaScript, I am able to create engaging user interfaces that are responsive across all devices. I am also comfortable working with back-end technologies such as Node.js, and databases such as MongoDB.</p>
              <p className="max-[530px]:hidden">When I'm not coding, you can find me exploring the outdoors and trying out new foods. I am always looking for ways to challenge myself and continue learning, and I am excited for the opportunity to work with you and bring your digital ideas to life."</p>
            </div>
          </div>
        </div>
        <div className="skillsandeducation flex mt-12 min-[950px]:mt-28 min-[950px]:padd">
          <div className="left basis-1/2 mr-4">
            <h1 className="font-semibold text-4xl text-gray-700 max-[950px]:text-center dark:text-white">Skills I have<span className="font-serif">,</span></h1>
            <p className="italic mb-4  max-[950px]:text-center">These are the building blocks of success.</p>
            <div className="flex items-start">
              <Image className="max-[530px]:hidden" src={'/connection2.gif'} width={180} height={180}></Image>
              <div className="py-2 px-6 flex gap-1 justify-center max-[950px]:mx-auto self-center flex-wrap">
                <button className="btn2 hover:scale-105 transition-all bg-red-600">HTML</button>
                <button className="btn2 hover:scale-105 transition-all bg-blue-600">CSS</button>
                <button className="btn2 hover:scale-105 transition-all bg-yellow-500">JavaScript</button>
                <button className="btn2 hover:scale-105 transition-all bg-blue-500">React</button>
                <button className="btn2 hover:scale-105 transition-all bg-green-700">NodeJS</button>
                <button className="btn2 hover:scale-105 transition-all bg-black">NextJS</button>
                <button className="btn2 hover:scale-105 transition-all bg-gray-600">Express</button>
                <button className="btn2 hover:scale-105 transition-all bg-green-800">MongoDB</button>
              </div>
            </div>
          </div>
          <div className="right relative basis-1/2">
            <h1 className="font-semibold text-4xl text-gray-700  max-[950px]:text-center dark:text-white">Educational Qualifications<span className="font-serif">,</span></h1>
            <p className="italic mb-4  max-[950px]:text-center">It's not just a degree, it's the knowledge and skills that help you achieve our goals.</p>
            <ul>
              <li className="flex items-center overflow-hidden  max-[950px]:justify-center">
                <Image src={'/jain5.jpg'} width={80} height={80} className="mr-4"></Image>
                <span className="font-sm text4 dark:text-gray-300">Jain University (2021 - present)</span>
              </li>
              <li className="flex items-center overflow-hidden  max-[950px]:justify-center">
                <Image src={'/nbu.png'} width={80} height={80} className="mr-4"></Image>
                <span className="font-sm text4 dark:text-gray-300">North Bengal University (2017 - 2021)</span>
              </li>
              <li className="flex items-center overflow-hidden  max-[950px]:justify-center">
                <Image src={'/school.jpg'} width={80} height={80} className="mr-4"></Image>
                <span className="font-sm text4 dark:text-gray-300">Siliguri Model High School (2015 - 2017)</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="services min-[950px]:padd mt-12 min-[950px]:mt-20" id="services">
          <h2 className="head1  max-[950px]:text-center dark:text-white">Services I Provide<span className="font-serif">,</span></h2>
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
      </div>
      <Contact />
    </>
  )
}
