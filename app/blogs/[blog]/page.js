import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
// import { Remarkable } from 'remarkable';

const fetchBlog = async () => {
    const res = await fetch('http://localhost:3000/api/blogs', { cache: 'no-store' })
    const data = await res.json()
    return data
}

const BlogPost = async ({ params: { blog } }) => {

    const allBlogs = await fetchBlog(blog)
    const thatBlog = await allBlogs.find((item) => item.slug === blog)
    if (!thatBlog) {
        return <>
            <h3 className='text-2xl font-semibold'>Blog not Found.</h3>
            <p>Go back to <Link href={'/blogs'} className='underline text-blue-600'>All Blogs</Link> page to explore other blogs.</p>
        </>
    }
    const restBlogs = allBlogs.filter((item) => item.slug !== blog)
    const { title, description, image, author, date, authorimg } = thatBlog;
    // const md = new Remarkable();

    function markup(content) {
        // const renderedHTML = md.render(content);
        return { __html: content };
    }


    return (
        <>

            <div className='text-gray-800 bg-gray-100 rounded-lg overflow-hidden dark:bg-gray-600  dark:text-zinc-300'>
                <Image src={image} width={500} height={500} className='w-full h-full' alt='mainImage' ></Image>
                <div className='px-12 py-16 max-[1200px]:px-4 max-[1200px]:py-12'>
                    <h2 className='font-bold text-5xl text-black mb-2 max-[980px]:text-4xl dark:text-neutral-300'>{title}</h2>
                    <div className='fontxs flex items-center'>
                        <Image src={authorimg} className=' object-cover rounded-full overflow-hidden w-[30px] h-[30px]' width={100} height={100} alt='developerimage' />
                        <span className='ml-2 fontsm'><span className='font-bold'>{author.slice(0, 1).toUpperCase().concat(author.slice(1))}</span> posted on {date}</span>
                    </div>

                    <div className='mt-8 min-[981px]:text-lg max-[980px]:fonttest'>
                        {/* <p>{description}</p> */}
                        <div dangerouslySetInnerHTML={markup(description)}></div>
                    </div>
                </div>
            </div>
            <div className='text-gray-800 bg-gray-100 rounded-lg overflow-hidden dark:bg-gray-600  dark:text-zinc-300 px-12 py-4 max-[1200px]:px-4 mt-6'>
                <h2 className='head4'>Read Next &rarr;</h2>
                <Link href={`/blogs/${restBlogs[0].slug}`} className='fontxs flex items-center my-6 w-fit group'>
                    <Image src={restBlogs[0].authorimg} className='object-cover rounded-full overflow-hidden w-[60px] h-[60px] max-[682px]:w-[40px] max-[682px]:h-[40px]' width={100} height={100} alt='developerimage' />
                    <div className='flex flex-col ml-2'>
                        <div className='font-bold text-lg cursor-pointer group-hover:underline group-hover:text-purple-600 dark:group-hover:text-amber-400 max-[682px]:text-base'>{restBlogs[0].title}</div>
                        <span className='fontsm'><span className='font-bold'>{restBlogs[0].author.slice(0, 1).toUpperCase().concat(restBlogs[0].author.slice(1))}</span> posted on {restBlogs[0].date}</span>
                    </div>
                </Link>
                <Link href={`/blogs/${restBlogs[1].slug}`} className='fontxs flex items-center my-6 w-fit group'>
                    <Image src={restBlogs[1].authorimg} className='object-cover rounded-full overflow-hidden w-[60px] h-[60px] max-[682px]:w-[40px] max-[682px]:h-[40px]' width={100} height={100} alt='developerimage' />
                    <div className='flex flex-col ml-2'>
                        <div className='font-bold text-lg cursor-pointer group-hover:underline group-hover:text-purple-600 dark:group-hover:text-amber-400 max-[682px]:text-base'>{restBlogs[1].title}</div>
                        <span className='fontsm'><span className='font-bold'>{restBlogs[1].author.slice(0, 1).toUpperCase().concat(restBlogs[1].author.slice(1))}</span> posted on {restBlogs[1].date}</span>
                    </div>
                </Link>
                <Link href={`/blogs/${restBlogs[2].slug}`} className='fontxs flex items-center my-6 w-fit group'>
                    <Image src={restBlogs[2].authorimg} className='object-cover rounded-full overflow-hidden w-[60px] h-[60px] max-[682px]:w-[40px] max-[682px]:h-[40px]' width={100} height={100} alt='developerimage' />
                    <div className='flex flex-col ml-2'>
                        <div className='font-bold text-lg cursor-pointer group-hover:underline group-hover:text-purple-600 dark:group-hover:text-amber-400 max-[682px]:text-base'>{restBlogs[2].title}</div>
                        <span className='fontsm'><span className='font-bold'>{restBlogs[2].author.slice(0, 1).toUpperCase().concat(restBlogs[2].author.slice(1))}</span> posted on {restBlogs[2].date}</span>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default BlogPost
