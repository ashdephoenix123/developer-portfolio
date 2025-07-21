import Link from "next/link";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer fixed bottom-0  right-0 py-4 w-full">
      <ul className="flex flex-wrap items-center justify-end max-[677px]:justify-center mt-4 pr-8">
        <li className="mx-2 hover:underline">
          <Link target="_blank" href="https://www.instagram.com/akashsarki_/">
            <FaInstagram size={20} />
          </Link>
        </li>
        <li className="mx-2 hover:underline">
          <Link target="_blank" href="https://www.linkedin.com/in/akashsarki">
            <FaLinkedin size={20} />
          </Link>
        </li>
        <li className="ml-2 hover:underline">
          <Link target="_blank" href="https://github.com/ashdephoenix123">
            <FaGithub size={20} />
          </Link>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
