import React from 'react'
import Sidebar from '../../component/Sidebar'
import Image from 'next/image'
import Link from 'next/link'

const layout = ({ children }) => {
    return (
        <>
            <div className='flex mx-auto max-[880px]:block'>
                <div className='w-[120%] max-[880px]:w-[100%]'>
                    {children}
                </div>
                <Sidebar />
            </div>
            {/* <div className='text-gray-800 bg-gray-100 rounded-lg overflow-hidden dark:bg-gray-600  dark:text-zinc-300 px-12 py-4 max-[1200px]:px-4 mt-6'>
                <h2 className='head4'>Read Next &rarr;</h2>
                <Link href={'/'} className='fontxs flex items-center my-6 w-fit group'>
                    <Image src='/me.jpg' className=' object-cover rounded-full overflow-hidden w-[60px] h-[60px]' width={100} height={100} alt='developerimage' />
                    <div className='flex flex-col ml-2'>
                        <div className='font-bold text-lg cursor-pointer group-hover:underline group-hover:text-purple-600 dark:group-hover:text-amber-400'>Learn Python Programming</div>
                        <span className='fontsm'><span className='font-bold'>Akash Sarki</span> posted on May 18th 2023</span>
                    </div>
                </Link>
                <Link href={'/'} className='fontxs flex items-center my-6 w-fit group'>
                    <Image src='/me.jpg' className=' object-cover rounded-full overflow-hidden w-[60px] h-[60px]' width={100} height={100} alt='developerimage' />
                    <div className='flex flex-col ml-2'>
                        <div className='font-bold text-lg cursor-pointer group-hover:underline group-hover:text-purple-600 dark:group-hover:text-amber-400'>Learn Flask</div>
                        <span className='fontsm'><span className='font-bold'>Akash Sarki</span> posted on May 18th 2023</span>
                    </div>
                </Link>
                <Link href={'/'} className='fontxs flex items-center my-6 w-fit group'>
                    <Image src='/me.jpg' className=' object-cover rounded-full overflow-hidden w-[60px] h-[60px]' width={100} height={100} alt='developerimage' />
                    <div className='flex flex-col ml-2'>
                        <div className='font-bold text-lg cursor-pointer group-hover:underline group-hover:text-purple-600 dark:group-hover:text-amber-400'>Build SEO friendly website with NextJS</div>
                        <span className='fontsm'><span className='font-bold'>Akash Sarki</span> posted on May 18th 2023</span>
                    </div>
                </Link>

            </div> */}
        </>
    )
}

export default layout
