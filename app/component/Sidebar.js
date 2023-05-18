'use client';

import React, { useState } from 'react'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

const Sidebar = () => {
    const [heart, setHeart] = useState(false)

    const changeHeart = () => {
      setHeart(!heart)
    }
    return (
        <div className='ml-4 w-1/2 border-2 bg-gray-50 border-gray-100 text-black rounded-lg p-4 self-start max-[880px]:ml-0 max-[880px]:mt-4 max-[880px]:w-full dark:bg-gray-600 dark:border-gray-600 dark:text-zinc-300'>
            <h2 className='font-semibold head3 dark:text-neutral-300 mb-2'>Writer's Name</h2>
            <p className='mb-4 fontsm min-[1200px]:text-base'>Writer's description - If you want to publish your writing then please get in touch with me. I will be happy to serve your blog on my website.</p>
            <p className='flex items-center'>Give this article a heart &nbsp; {!heart ? <BsHeart onClick={changeHeart} className='hover:cursor-pointer' size={25}/> : <BsHeartFill className='text-pink-600 hover:cursor-pointer' onClick={changeHeart}  size={25}/>}</p>
        </div>
    )
}

export default Sidebar
