"use client";

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { VscSearch } from "react-icons/vsc";
import { HiBars3 } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [search, setsearch] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [mounted, setMounted] = useState(false);
  const ref = useRef(null);
  const searchref = useRef(null);
  const toggleref = useRef(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleClickOutside = (event) => {
    if (searchref.current && !searchref.current.contains(event.target)) {
      setsearch(false);
    }
    if (toggleref.current && !toggleref.current.contains(event.target)) {
      setToggle(false);
    }
  };

  const searchHandler = () => {
    setsearch(true);
    if (search && searchref.current) {
      searchref.current.focus();
    }
  };

  const submitInputForm = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav className="navbar shadow-md relative">
        <div className="container2">
          <div className="flex items-center fontmd bp1 relative py-4">
            <div className="hide3 mr-auto">
              <div
                onClick={() => {
                  setToggle((prev) => !prev);
                }}
              >
                {!toggle ? (
                  <HiBars3 size={25} className="mr-3 cursor-pointer" />
                ) : (
                  <RxCross2
                    size={25}
                    className="mr-3 font-thin cursor-pointer"
                  />
                )}
              </div>
            </div>
            <Link href="/" className="flex mr-6">
              <Image
                src="/2.png"
                width={30}
                height={10}
                className="mr-2"
                alt="logo"
              ></Image>
              <span className="text-xl font-semibold tracking-tight ">
                AkashSarki
              </span>
            </Link>
            {!search ? (
              <>
                {" "}
                <ul className="flex ml-auto">
                  {/* <li className="mx-2 border-transparent border-2 hover:border-b-black hide2">
                    <Link href="/">Home</Link>
                  </li> */}
                  <li className="mx-2 border-transparent border-2 hover:border-b-black hide2">
                    <Link href="/about">About Me</Link>
                  </li>
                  <li className="mx-2 border-transparent border-2 hover:border-b-black hide2">
                    <Link href="/services">Services</Link>
                  </li>
                  <li className="mx-2 border-transparent border-2 hover:border-b-black hide2">
                    <Link href="/contact">Contact</Link>
                  </li>
                  <li className="mx-2 border-transparent hide2">
                    <Link href="/projects" className="flex items-center">
                      <div className="mr-0.5 border-2 hover:border-b-black border-transparent">
                        Projects
                      </div>
                    </Link>
                  </li>
                  <li className="mx-2 border-transparent hide2">
                    <Link
                      href="https://blogs.akashsarki.com/"
                      className="flex items-center"
                    >
                      <div className="mr-0.5 border-2 hover:border-b-black border-transparent">
                        Blogs
                      </div>
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <div className="flex w-full fillit bg-white">
                  <div
                    className="flex items-center justify-end w-full relative"
                    ref={searchref}
                  >
                    <input
                      type="text"
                      className="border-2 border-gray-500 rounded focus:outline-none px-4 py-1.5 mr-2 w-full"
                      placeholder="Search in Blogs"
                    />
                    <button className="-ml-10 p-1.5" onClick={submitInputForm}>
                      <VscSearch size={18} />
                    </button>
                  </div>
                  <button
                    className="ml-4 border py-1.5 px-4 border-black"
                    onClick={() => setsearch(false)}
                  >
                    Cancel
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
      {toggle && (
        <>
          <div className="absolute w-full h-fit bg1 z-10" ref={toggleref}>
            <ul>
              {/* <li
                onClick={() => {
                  setToggle((prev) => !prev);
                }}
                className="cursor-pointer dark:bg-gray-700 dark:hover:bg-slate-800 dark:border-b-slate-500 hover:bg-zinc-200 border-b"
              >
                <Link href={"/"} className="p-4 block">
                  <span className="w-fit inline-block text-sm tracking-wide mr-1.5">
                    Home
                  </span>
                </Link>
              </li> */}
              <li
                onClick={() => {
                  setToggle((prev) => !prev);
                }}
                className="cursor-pointer dark:bg-gray-700 dark:hover:bg-slate-800 dark:border-b-slate-500 hover:bg-zinc-200 border-b"
              >
                <Link href={"/about"} className="p-4 block">
                  <span className="w-fit inline-block text-sm tracking-wide mr-1.5">
                    About Me
                  </span>
                </Link>
              </li>
              <li
                onClick={() => {
                  setToggle((prev) => !prev);
                }}
                className="cursor-pointer dark:bg-gray-700 dark:hover:bg-slate-800 dark:border-b-slate-500 hover:bg-zinc-200 border-b"
              >
                <Link href={"/services"} className="p-4 block">
                  <span className="w-fit inline-block text-sm tracking-wide mr-1.5">
                    Services
                  </span>
                </Link>
              </li>
              <li
                onClick={() => {
                  setToggle((prev) => !prev);
                }}
                className="cursor-pointer dark:bg-gray-700 dark:hover:bg-slate-800 dark:border-b-slate-500 hover:bg-zinc-200 border-b"
              >
                <Link href={"/contact"} className="p-4 block">
                  <span className="w-fit inline-block text-sm tracking-wide mr-1.5">
                    Contact
                  </span>
                </Link>
              </li>
              <li
                onClick={() => {
                  setToggle((prev) => !prev);
                }}
                className="cursor-pointer dark:bg-gray-700 dark:hover:bg-slate-800 dark:border-b-slate-500 hover:bg-zinc-200 border-b"
              >
                <Link href={"/projects"} className="p-4 flex items-center">
                  <span className="w-fit inline-block text-sm tracking-wide mr-1.5">
                    Projects
                  </span>
                </Link>
              </li>
              <li
                onClick={() => {
                  setToggle((prev) => !prev);
                }}
                className="cursor-pointer dark:bg-gray-700 dark:hover:bg-slate-800 dark:border-b-slate-500 hover:bg-zinc-200 border-b"
              >
                <Link href={"/blogs"} className="p-4 block">
                  <span className="w-fit inline-block text-sm tracking-wide mr-1.5">
                    Blogs
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
