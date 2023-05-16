import Link from 'next/link'
import { IoIosArrowForward } from "react-icons/io";
import React from 'react'

const Card = ({ title, description, link }) => {
    return (
        <>
            <div className="cardItem">
                <div>
                    <h2 className="text-2xl my-4 font-semibold">{title}</h2>
                    <p>{description}</p>
                    <Link href='#contact' className="flex my-4 items-center text1 font-semibold hover:underline"><span className='hover:mr-0.5 transition-all'>{link}</span><IoIosArrowForward size={20} className="ml-1" /></Link>
                </div>
            </div>
        </>
    )
}

export default Card
