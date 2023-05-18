import React from 'react'
import { FaInstagram, FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import Sidebar from '../component/Sidebar'
import Link from 'next/link'

const layout = ({ children }) => {
    return (
        <>
            <div className="container2 min-h-screen">
                <div className='flex w-[90%] max-[1200px]:w-[100%] mx-auto my-12 max-[880px]:block max-[880px]:my-6'>
                    <ul className='flex flex-col px-4 mr-4 max-[880px]:hidden self-start'>
                        <li className='mt-1.5'><Link target='_blank' href='https://www.instagram.com/akashsarki_/'><FaInstagram size={25} /></Link></li>
                        <li className='mt-6'><Link target='_blank' href='https://www.linkedin.com/in/akashsarki'><FaLinkedin size={25} /></Link></li>
                        <li className='mt-6'><Link target='_blank' href='https://twitter.com/akashsarki_'><FaTwitter size={25} /></Link></li>
                        <li className='mt-6'><Link target='_blank' href='https://github.com/ashdephoenix123'><FaGithub size={25} /></Link></li>
                    </ul>
                    <div className='w-[120%] max-[880px]:w-[100%]'>
                        {children}
                    </div>
                    <Sidebar />
                </div>
            </div>
        </>
    )
}

export default layout
