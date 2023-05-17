'use client';

import Image from 'next/image'
import React, { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import { SlArrowRight } from 'react-icons/sl'
import { VscSearch } from 'react-icons/vsc'
import { HiBars3 } from 'react-icons/hi2'
import { RxCross2 } from 'react-icons/rx'
import { BsSunFill, BsFillMoonStarsFill, BsArrowUpRight } from 'react-icons/bs'
import { useTheme } from 'next-themes';

const Navbar = () => {
    const [dropdown, setdropdown] = useState(false)
    const [search, setsearch] = useState(false)
    const [toggle, setToggle] = useState(false)
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme, systemTheme } = useTheme()
    const ref = useRef(null)
    const searchref = useRef(null);
    const toggleref = useRef(null);

    const currentTheme = theme === 'system' ? systemTheme : theme;
    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (ref.current && !ref.current.contains(event.target)) {
            setdropdown(false);
        }
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
    }

    const submitInputForm = (e) => {
        e.preventDefault();
    }

    useEffect(() => {
        setMounted(true)
    }, [])
    if (!mounted) {
        return null
    }


    return (
        <>
            <nav className='navbar shadow-md dark:shadow-md dark:shadow-gray-800 relative'>
                <div className="container2">
                    <div className="py-3 flex items-center fontsm bp1 relative">
                        <div className='hide3 mr-auto'>
                            <div onClick={() => { setToggle(prev => !prev) }}>
                                {
                                    !toggle ? <HiBars3 size={25} className='mr-3 cursor-pointer' /> : <RxCross2 size={25} className='mr-3 font-thin cursor-pointer' />
                                }
                            </div>
                            <ul>
                                {currentTheme === 'light' ?
                                    <li className='flex items-center mr-4 cursor-pointer px-2 py-2 rounded-full' onClick={() => { setTheme('dark'); }}><BsFillMoonStarsFill className='text-gray-600' size={18} /></li>
                                    :
                                    <li className='flex items-center mr-4 cursor-pointer px-2 py-2 rounded-full' onClick={() => { setTheme('light'); }}><BsSunFill className='text-yellow-400' size={18} /></li>

                                }
                            </ul>
                        </div>
                        <Link href="/" className="flex mr-6">
                            <Image src="/1.png" width={30} height={10} className='mr-2 dark:hidden' alt='logo'></Image>
                            <Image src="/2.png" width={30} height={10} className='mr-2 dark:block hidden' alt='logo'></Image>
                            <span className='text-xl font-semibold tracking-tight text-gray-700 dark:text-white'>AkashSarki</span>
                        </Link>
                        {!search ?
                            <> <ul className='flex ml-4 mr-auto'>
                                <li className='mx-2 border-transparent border-2 hover:border-b-black hide2'><Link href='/'>Home</Link></li>
                                <li className='mx-2 border-transparent border-2 hover:border-b-black hide2'><Link href='#about'>About</Link></li>
                                <li className='mx-2 border-transparent border-2 hover:border-b-black hide2'><Link href='#services'>Services</Link></li>
                                <li className='mx-2 border-transparent border-2 hover:border-b-black hide2'><Link href='#contact'>Contact</Link></li>
                                <li className='mx-2 border-transparent hide2'><Link href='https://www.thesharkkcompany.tech/' target='_blank' className='flex items-center'><div className='mr-0.5 border-2 hover:border-b-black border-transparent'>Projects</div><BsArrowUpRight size={10} /></Link></li>
                            </ul>
                                <ul className='flex'>
                                    {currentTheme === 'light' ?
                                        <li className='flex items-center mr-4 cursor-pointer hide2 px-3 py-2 rounded-full' onClick={() => { setTheme('dark'); }}><BsFillMoonStarsFill className='text-gray-600' size={18} /></li>

                                        :
                                        <li className='flex items-center mr-4 cursor-pointer hide2 px-3 py-2 rounded-full' onClick={() => { setTheme('light'); }}><BsSunFill className='text-yellow-400' size={18} /></li>
                                    }
                                    <li className='flex items-center cursor-pointer px-1.5 py-1 bg-yellow-300 rounded-full hover:bg-yellow-400'><Link href={'https://www.buymeacoffee.com/akashsarki'} target='_blank' className='relative w-7 h-8'><Image src={'/coffee2.png'} fill /></Link></li>
                                </ul>
                            </> : <>
                                <div className='flex w-full fillit bg-white'>
                                    <div className='flex items-center justify-end w-full relative' ref={searchref}>
                                        <input type="text" className='border-2 border-gray-500 rounded focus:outline-none px-4 py-1.5 mr-2 w-full' placeholder='Search in Blogs' />
                                        <button className='-ml-10 p-1.5' onClick={submitInputForm}>
                                            <VscSearch size={18} />
                                        </button>
                                    </div>
                                    <button className='ml-4 border py-1.5 px-4 border-black' onClick={() => setsearch(false)}>Cancel</button>
                                </div>
                            </>}
                    </div>
                </div>
            </nav>
            {dropdown &&
                <div className='dropdown z-10' ref={ref}>
                    <div className="dropdownGrid mb-6">
                        <div className="dropdownchild">
                            <h3 className='fontsm font-semibold mb-4'>Category</h3>
                            <ul className="singlecol">
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                            </ul>
                        </div>
                        <div className="dropdownchild">
                            <h3 className='fontsm font-semibold mb-4'>Category</h3>
                            <ul className="singlecol">
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                            </ul>
                        </div>
                        <div className="dropdownchild">
                            <h3 className='fontsm font-semibold mb-4'>Category</h3>
                            <ul className="singlecol">
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                            </ul>
                        </div>
                        <div className="dropdownchild">
                            <h3 className='fontsm font-semibold mb-4'>Category</h3>
                            <ul className="singlecol">
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                            </ul>
                        </div>
                        <div className="dropdownchild">
                            <h3 className='fontsm font-semibold mb-4'>Category</h3>
                            <ul className="singlecol">
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                            </ul>
                        </div>
                        <div className="dropdownchild">
                            <h3 className='fontsm font-semibold mb-4'>Category</h3>
                            <ul className="singlecol">
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                                <li className="fontsm py-2 hover:underline text4"><Link href="#">Blog title</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className='absolute w-full left-0 border-b-black border-b-2'>
                        <div className="block bg-zinc-200 w-full text-center py-2">
                            <Link href={'#'}><span className='uppercase fontxs mr-1.5 hover:underline'>Visit Blog Site</span></Link>
                            <SlArrowRight size={12} className='inline-block text-sm' />
                        </div>
                    </div>
                </div>
            }
            {
                toggle && <>
                    <div className='absolute w-full h-fit bg1 z-10' ref={toggleref}>
                        <ul>
                            <li onClick={() => { setToggle(prev => !prev) }} className='cursor-pointer dark:bg-gray-700 dark:border-b-slate-500 hover:bg-zinc-200 border-b'><Link href={'/'} className='p-4 block'><span className='w-fit inline-block text-sm tracking-wide mr-1.5'>Home</span></Link></li>
                            <li onClick={() => { setToggle(prev => !prev) }} className='cursor-pointer dark:bg-gray-700 dark:border-b-slate-500 hover:bg-zinc-200 border-b'><Link href={'#about'} className='p-4 block'><span className='w-fit inline-block text-sm tracking-wide mr-1.5'>About</span></Link></li>
                            <li onClick={() => { setToggle(prev => !prev) }} className='cursor-pointer dark:bg-gray-700 dark:border-b-slate-500 hover:bg-zinc-200 border-b'><Link href={'#services'} className='p-4 block'><span className='w-fit inline-block text-sm tracking-wide mr-1.5'>Services</span></Link></li>
                            <li onClick={() => { setToggle(prev => !prev) }} className='cursor-pointer dark:bg-gray-700 dark:border-b-slate-500 hover:bg-zinc-200 border-b'><Link href={'#contact'} className='p-4 block'><span className='w-fit inline-block text-sm tracking-wide mr-1.5'>Contact</span></Link></li>
                            <li onClick={() => { setToggle(prev => !prev) }} className='cursor-pointer dark:bg-gray-700 dark:border-b-slate-500 hover:bg-zinc-200 border-b'><Link href={'https://www.thesharkkcompany.tech'} target='_blank' className='p-4 flex items-center'><span className='w-fit inline-block text-sm tracking-wide mr-1.5'>Projects</span><BsArrowUpRight size={10} /></Link></li>
                        </ul>
                    </div>
                </>
            }
        </>
    )
}

export default Navbar
