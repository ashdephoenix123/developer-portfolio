"use client";

import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <nav className="navbar px-8 fixed top-0 w-full">
        <div className="">
          <div className="flex items-center fontmd bp1 relative py-4">
            <Link href="/" className="flex mr-6">
              <Image
                src="/2.png"
                width={35}
                height={15}
                className="mr-2"
                alt="logo"
              ></Image>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
