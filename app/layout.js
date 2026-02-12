import Navbar from "./component/Navbar";
import SmoothScroll from "./component/SmoothScroll";
import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Akash Sarki - Web Developer Portfolio",
  description:
    "Explore Akash Sarki's portfolio showcasing a diverse range of web development projects. Discover skills in frontend and backend development and more.",
  keywords:
    "portfolio ,Web Developer, Web Development, HTML, CSS, Javascript, ReactJS, NextJS, MongoDB, NodeJS, ExpressJS, Bootstrap, TailwindCSS, SASS, Git, Github",
  openGraph: {
    title: "Akash Sarki - A Website Developer",
    type: "website",
    images: ["/me.jpg"],
    url: "https://www.akashsarki.com",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="animated-bg">
        <main className="flex flex-col gap-1 md:gap-4 lg:gap-8 justify-between">
          <Navbar />
          <SmoothScroll>
            <div className="px-4 lg:px-8 flex flex-col justify-center">
              {children}
            </div>
          </SmoothScroll>
        </main>
      </body>
    </html>
  );
}
