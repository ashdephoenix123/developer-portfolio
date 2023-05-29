
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Card = ({title, description, topic, img}) => {

    return (
        <div className='flex bg-gray-200 text-black rounded my-2 dark:bg-gray-600 dark:text-zinc-300 overflow-hidden max-[716px]:block'>
            <Image src={img} width={200} height={200} className='object-contain h-48 w-fit max-[716px]:mx-auto max-[716px]:w-full max-[716px]:object-cover max-[716px]:h-72 max-[716px]:object-bottom' alt="jsimg" />
            <div className='py-6 self-center mx-6 w-3/4 max-[716px]:text-center max-[716px]:mx-auto'>
                <h2 className='head3 font-semibold dark:text-neutral-300 mb-2 max-[716px]:text-center'>{title}</h2>
                <p className='fontsm min-[1200px]:text-base mt-1 mb-3'>{description}</p>
                <Link className='btn inline-block' href={`/courses/${topic}`}>Start Course</Link>
            </div>
        </div>
       
    )
}

export default Card
