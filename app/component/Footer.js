import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import { IoMdMail } from 'react-icons/io'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { ImLocation } from 'react-icons/im'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className='py-8 dark:bg-slate-950 dark:text-gray-400'>
            <div className='container2 fontsm'>
                <div className='flex items-center mb-2 w-fit max-[677px]:mx-auto'><IoMdMail className='mr-2' size={20} />akashsarki24@gmail.com</div>
                <div className='flex items-center mb-2 w-fit max-[677px]:mx-auto'><BsFillTelephoneFill className='mr-2' size={20} />9883475729</div>
                <Link className='flex items-center mb-4 hover:underline w-fit max-[677px]:mx-auto' target='_blank' href={'https://www.google.com/maps/place/Champasari+Rd,+Siliguri,+West+Bengal+734003/@26.7518566,88.4144492,17z/data=!3m1!4b1!4m6!3m5!1s0x39e440dc036f43e7:0xc38e5c4edbd49084!8m2!3d26.7518566!4d88.4170241!16s%2Fg%2F1tk9p589?entry=ttu'}><ImLocation className='mr-2' size={20} />Siliguri, West Bengal, IN</Link>
            </div>
            <div className='container2 h-[0.2px] bg-gray-500'>
            </div>
            <div className='flex flex-wrap container2 items-center justify-between mb-4 fontsm max-[677px]:block mt-12'>
                <div className='flex items-center max-[677px]:justify-center max-[677px]:mb-2  max-[394px]:block  max-[394px]:text-center mt-4'>
                    <div className='flex items-center mr-2  max-[394px]:block'>
                        <div>Copyright &copy; {year} @akashsarki.me</div>
                    </div>
                    <span className='after bg-gray-400 max-[394px]:hidden'></span>
                    <span className='ml-2'>All Rights Reserved</span>
                </div>
                <ul className='flex flex-wrap items-center max-[677px]:justify-center mt-4'>
                    <li className='mx-4'>Follow me on</li>
                    <li className='mx-2 hover:underline'><Link target='_blank' href='https://www.instagram.com/akashsarki_/'><FaInstagram size={20} /></Link></li>
                    <li className='mx-2 hover:underline'><Link target='_blank' href='https://www.linkedin.com/in/akashsarki'><FaLinkedin size={20} /></Link></li>
                    <li className='mx-2 hover:underline'><Link target='_blank' href='https://twitter.com/akashsarki_'><FaTwitter size={20} /></Link></li>
                    <li className='ml-2 hover:underline'><Link target='_blank' href='https://github.com/ashdephoenix123'><FaGithub size={20} /></Link></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
