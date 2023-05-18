import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import BlogCard from '../component/BlogCard'

const page = () => {
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
                        <BlogCard />
                        
                    </div>
                </div>
            </div>
        </>
    )
}

export default page
