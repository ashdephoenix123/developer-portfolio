
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const Card = () => {

    return (
        <div className='flex bg-gray-200 text-black rounded my-2 dark:bg-gray-600 dark:text-zinc-300 overflow-hidden max-[716px]:block'>
            <Image src={'/jsimg2.png'} width={200} height={200} className='object-contain h-48 w-fit max-[716px]:mx-auto' alt="jsimg" />
            <div className='py-6 self-center mx-6 w-3/4 max-[716px]:text-center max-[716px]:mx-auto'>
                <h2 className='head3 font-semibold dark:text-neutral-300 mb-2 max-[716px]:text-center'>Learn Javascript</h2>
                <p className='fontsm min-[1200px]:text-base mt-1 mb-3'>JavaScript is a language of the web, Master the fundamentals of JavaScript and develop dynamic web applications with our comprehensive course.</p>
                <Link className='btn inline-block' href={`/blogs/js`}>Start Course</Link>
            </div>
        </div>
       
    )
}

export default Card
