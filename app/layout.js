import Navbar from "./component/Navbar";
import SmoothScroll from "./component/SmoothScroll";
import "./globals.scss";
import { Outfit, Fraunces, DM_Mono } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dm-mono",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://www.akashsarki.com"),
  title: "Akash Sarki - Web Developer Portfolio",
  description:
    "Explore Akash Sarki's portfolio showcasing a diverse range of web development projects. Discover skills in frontend and backend development and more.",
  keywords:
    "portfolio ,Web Developer, Web Development, HTML, CSS, Javascript, ReactJS, NextJS, MongoDB, NodeJS, ExpressJS, Bootstrap, TailwindCSS, SASS, Git, Github",
  alternates: {
    canonical: "https://www.akashsarki.com",
  },
  openGraph: {
    title: "Akash Sarki - A Website Developer",
    type: "website",
    images: ["/me.jpg"],
    url: "https://www.akashsarki.com",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Akash Sarki",
    "url": "https://www.akashsarki.com",
    "image": "https://www.akashsarki.com/me.jpg",
    "jobTitle": "Web Developer",
    "description": "Explore Akash Sarki's portfolio showcasing a portfolio of web development projects.",
  };

  return (
    <html
      lang="en"
      className={`${outfit.variable} ${fraunces.variable} ${dmMono.variable}`}
    >
      <body className="bg-background text-foreground font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <main className="flex flex-col justify-between">
          <Navbar />
          <SmoothScroll>
            <div className="flex flex-col justify-center">
              {children}
            </div>
          </SmoothScroll>
        </main>
      </body>
    </html>
  );
}

