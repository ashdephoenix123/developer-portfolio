'use client';

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Search from '../component/Search';
import BlogCard from '../component/BlogCard'
import { ImPushpin } from 'react-icons/im'

const page = async () => {
    const [blogs, setBlogs] = useState([])
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getBlogs() {
            const res = await fetch('https://testproject-9lviw8m9w-ashdephoenix123.vercel.app/api/blogs', { cache: "no-cache" });
            const blogs = await res.json()
            setBlogs(blogs)
            setLoading(false)
        }
        getBlogs();
    }, [])

    if (loading) {
        return <div className='container2'>Loading All Blogs...</div>
    }

    return (
        <>
            <div className="flex">
                <div>
                    <div className='flex flex-wrap-reverse justify-between items-center max-[403px]:flex-col max-[403px]:items-stretch'>
                        <h2 className='font-semibold text-2xl text2 mr-12 max-[403px]:mt-4'>All Blogs</h2>
                        <Search getSearchResults={(result) => { setBlogs(result) }} />
                    </div>
                    <div className='my-4'>
                        {
                            blogs.length !== 0 ? blogs.map((blog) => {
                                return <BlogCard key={blog.slug} blog={blog} />
                            }) : <div>Blog not Found.</div>
                        }
                    </div>
                    <div className='w-full border-2 bg-gray-50 border-gray-100 text-black rounded-lg p-4 self-start max-[880px]:ml-0 max-[880px]:mt-4 max-[880px]:w-full dark:bg-gray-600 dark:border-gray-600 dark:text-zinc-300 relative'>
                        <h2 className='font-semibold head3 dark:text-neutral-300 mb-2'>Note</h2>
                        <ImPushpin size={30} className='text-red-600 absolute -top-2 -right-2'/>
                        <p className='mb-4 fontsm min-[1200px]:text-base'>This part of the website is still in production. What you are seeing is just a layout sample of the blog which is to be deployed in production in coming future. While you can read the blogs, there is not interactivity right now e.g. liking the blog and bookmarking it. I am constantly working on this site to offer better interactivity, please pardon me until the site is fully in production. Inconvenience is deeply regretted and Thanks for visiting my website. You can contact me from the socials or the contact page from the <Link href={'/'} className='underline'>Home</Link> page.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
