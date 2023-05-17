import Link from 'next/link'
import React from 'react'
import {FaInstagram, FaLinkedin, FaTwitter, FaGithub} from 'react-icons/fa'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='py-8 dark:bg-slate-950'>
            <div className='flex flex-wrap container2 items-center justify-between mb-4 fontsm max-[677px]:block'>
                <div className='flex items-center max-[677px]:justify-center max-[677px]:mb-2  max-[394px]:block  max-[394px]:text-center'>
                    <div className='flex items-center mr-2  max-[394px]:block'>
                        <div>Copyright &copy; {year} @akashsarki.me</div>
                    </div>
                    <span className='after bg-gray-400 max-[394px]:hidden'></span>
                    <span className='ml-2'>All Rights Reserved</span>
                </div>
                <ul className='flex flex-wrap items-center max-[677px]:justify-center '>
                    <li className='mx-4'>Follow me on</li>
                    <li className='mx-2 hover:underline'><Link target='_blank' href='https://www.instagram.com/akashsarki_/'><FaInstagram size={20}/></Link></li>
                    <li className='mx-2 hover:underline'><Link target='_blank' href='https://www.linkedin.com/in/akashsarki'><FaLinkedin size={20}/></Link></li>
                    <li className='mx-2 hover:underline'><Link target='_blank' href='https://twitter.com/akashsarki_'><FaTwitter size={20}/></Link></li>
                    <li className='ml-2 hover:underline'><Link target='_blank' href='https://github.com/ashdephoenix123'><FaGithub size={20}/></Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
