import Head from "next/head";
import About from "./component/About";

export const metadata = {
  title: "Akash Sarki - Web Developer Portfolio",
  description:
    "Explore Akash Sarki's portfolio showcasing a diverse range of web development projects. Discover skills in frontend and backend development and more.",
};

export default function Home() {
  return (
    <>
      <Head>
        <meta property="og:title" content="Akash Sarki - A Website Developer" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="/me.jpg" />
        <meta property="og:url" content="https://www.akashsarki.com" />
      </Head>

      <About />
    </>
  );
}
