import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

const BlogCard = () => {
  return (
    <Link href={'/blogs/test'} className='block bg-gray-200 text-black rounded my-2 p-4 hover:bg-gray-300 dark:bg-gray-600 dark:text-zinc-300 scaleIt transition-all'>
      <h2 className='text-xl font-semibold dark:text-neutral-300'>A Day in my Life</h2>
      <div className='fontxs flex items-center'><Image src='/me.jpg' className='border object-cover rounded-full overflow-hidden w-[30px] h-[30px]' width={30} height={30}/><span className='ml-2'>Akash Sarki on May 18th 2023</span></div>
      <p className='fontsm mt-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum adipisci aliquam, sunt sapiente possimus explicabo ipsum neque quo numquam quae odit, ducimus sit dolorem atque pariatur debitis, nemo nulla? A non reprehenderit molestiae nobis illo facere blanditiis assumenda esse laboriosam, explicabo obcaecati repellendus minima voluptate? Accusamus voluptatibus voluptate tenetur facilis!</p>
    </Link>
  )
}

export default BlogCard
