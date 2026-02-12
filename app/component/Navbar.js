"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";



const Navbar = () => {
  return (
    <>
      <nav className="navbar px-4 lg:px-8 w-full">
        <div>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0, transition: { delay: 1.75, duration: 0.5 } }}
            className="flex items-center justify-between fontmd bp1 relative py-4"
          >
            <Link href="/" className="flex mr-6">
              <Image
                src="/2.png"
                width={35}
                height={15}
                className="mr-2"
                alt="logo"
              ></Image>
            </Link>

           
          </motion.div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
