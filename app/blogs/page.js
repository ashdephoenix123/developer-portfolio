import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import BlogCard from '../component/BlogCard'
import Link from 'next/link'

async function getBlogs() {
    const res = await fetch('http://localhost/api/blogs')
    const blogs = await res.json()
    return blogs
}

const page = async () => {
    const blogs = await getBlogs();

    return (
        <>
            <div className="flex">
                <div>
                    <div className='flex flex-wrap-reverse justify-between items-center max-[403px]:flex-col max-[403px]:items-stretch'>
                        <h2 className='font-semibold text-2xl text2 mr-12 max-[403px]:mt-4'>Latest Blogs</h2>
                        <div className='flex items-center relative rounded overflow-hidden shadow-md max-[403px]:-order-1'>
                            <input type="text" placeholder='Search in Blogs...' className='border border-zinc-500 rounded px-1.5 py-1.5 text-sm dark:text-gray-300 dark:outline-none max-[403px]:w-full w-[200px] focus:outline-purple-600  text-gray-700' />
                            <button className='absolute right-0 h-full px-2 outline outline-1 focus:text-purple-500'>
                                <AiOutlineSearch className=' hover:text-purple-500' size={20} />
                            </button>
                        </div>
                    </div>
                    <div className='my-4'>
                        {
                           blogs.length !==0 && blogs.map((blog) => {
                                return <BlogCard key={blog.title} blog={blog} />
                            })
                        }
                    </div>
                    <div className='w-full border-2 bg-gray-50 border-gray-100 text-black rounded-lg p-4 self-start max-[880px]:ml-0 max-[880px]:mt-4 max-[880px]:w-full dark:bg-gray-600 dark:border-gray-600 dark:text-zinc-300'>
                        <h2 className='font-semibold head3 dark:text-neutral-300 mb-2'>Note</h2>
                        <p className='mb-4 fontsm min-[1200px]:text-base'>This part of the website is still in production. What you are seeing is just a layout sample of the blog which is to be deployed in production in coming future. Inconvenience is deeply regretted and Thanks for visiting my website. You can contact me from the socials or the contact page from the <Link href={'/'} className='underline'>Home</Link> page.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
