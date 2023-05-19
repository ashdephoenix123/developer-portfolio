import React from 'react'
import Image from 'next/image';


async function getBlog(blog) {
    const res = await fetch(`https://www.akashsarki.me/api/blogs`)
    const data = await res.json()
    const thatBlog = await data.find((item) => item.id === Number(blog))
    return thatBlog
}

const BlogPost = async ({ params: { blog } }) => {
    const fetchBlog = await getBlog(blog)
    const { title, description, author, authorimg, date, image} = fetchBlog;
    return (
        <div className='text-gray-800 bg-gray-100 rounded-lg overflow-hidden dark:bg-gray-600  dark:text-zinc-300'>
            <Image src={image} width={500} height={500} className='w-full h-full' alt='mainImage' ></Image>
            <div className='px-12 py-16 max-[1200px]:px-4 max-[1200px]:py-12'>
                <h2 className='font-bold text-5xl text-black mb-2 max-[980px]:text-4xl dark:text-neutral-300'>{title}</h2>
                <div className='fontxs flex items-center'>
                    <Image src={authorimg} className=' object-cover rounded-full overflow-hidden w-[30px] h-[30px]' width={100} height={100} alt='developerimage' />
                    <span className='ml-2 fontsm'><span className='font-bold'>{author}</span> posted on {date}</span>
                </div>

                <div className='mt-8 min-[981px]:text-lg max-[980px]:fonttest'>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogPost
