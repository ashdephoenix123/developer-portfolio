'use client';

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

const BlogCard = () => {
  const [heart, setHeart] = useState(false)

  const changeHeart = () => {
    setHeart(!heart)
  }

  return (
    <div className='block bg-gray-200 text-black rounded my-2 p-4 hover:bg-gray-300 dark:bg-gray-600 dark:text-zinc-300 scaleIt transition-all'>
      <h2 className='head3 font-semibold dark:text-neutral-300 flex justify-between items-center mb-2'>A Day in my Life {!heart ? <BsHeart onClick={changeHeart} className='hover:cursor-pointer'/> : <BsHeartFill className='text-pink-600 hover:cursor-pointer' onClick={changeHeart} />}</h2>
      <div className='fontxs min-[1200px]:text-sm flex items-center'><Image src='/me.jpg' className=' object-cover rounded-full overflow-hidden w-[30px] h-[30px]' width={100} height={100}/><span className='ml-2'><span className='font-bold'>Akash Sarki</span> posted on May 18th 2023</span></div>
      <p className='fontsm min-[1200px]:text-base mt-1 mb-3'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci aliquam, sunt sapiente possimus explicabo ipsum neque quo numquam quae odit, ducimus sit dolorem atque pariatur debitis, nemo nulla? A non reprehenderit molestiae nobis illo facere blanditiis assumenda esse laboriosam, explicabo obcaecati repellendus minima voluptate? Accusamus voluptatibus voluptate tenetur facilis!</p>
      <Link className='btn' href={'/blogs/akash'}>Read</Link>
    </div>
  )
}

export default BlogCard
