'use client';

import Image from 'next/image'
import React, { useState } from 'react'
import Link from 'next/link'
import { BsHeart, BsHeartFill } from 'react-icons/bs'

const BlogCard = ({ blog: { title, description, author, authorimg, date, id } }) => {

  const [heart, setHeart] = useState(false)

  const changeHeart = () => {
    setHeart(!heart)
  }

  return (
    <div className='block bg-gray-200 text-black rounded my-2 p-4 hover:bg-gray-300 dark:bg-gray-600 dark:text-zinc-300 scaleIt transition-all'>
      <h2 className='head3 font-semibold dark:text-neutral-300 flex justify-between items-center mb-2'>{title} {!heart ? <BsHeart onClick={changeHeart} className='hover:cursor-pointer ml-4 max-[456px]:text-5xl' /> : <BsHeartFill className='text-pink-600 hover:cursor-pointer ml-4 max-[456px]:text-5xl heartAnimation' onClick={changeHeart} />}</h2>
      <div className='fontxs min-[1200px]:text-sm flex items-center'><Image src='/me.jpg' className=' object-cover rounded-full overflow-hidden w-[30px] h-[30px]' width={100} height={100} alt={authorimg} /><span className='ml-2'><span className='font-bold'>{author.slice(0, 1).toUpperCase().concat(author.slice(1))}</span> posted on {date}</span></div>
      <p className='fontsm min-[1200px]:text-base mt-1 mb-3'>{description}</p>
      <Link className='btn' href={`/blogs/${id}`}>Read</Link>
    </div>
  )
}

export default BlogCard
