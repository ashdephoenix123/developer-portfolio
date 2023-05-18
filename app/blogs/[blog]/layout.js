import React from 'react'
import Sidebar from '../../component/Sidebar'
import Image from 'next/image'

const layout = ({ children }) => {
    return (
        <>
            <div className='flex mx-auto max-[880px]:block'>
                <div className='w-[120%] max-[880px]:w-[100%]'>
                    {children}
                </div>
                <Sidebar />
            </div>
            <div className='text-gray-800 bg-gray-100 rounded-lg overflow-hidden dark:bg-gray-600  dark:text-zinc-300 px-12 py-4 max-[1200px]:px-4 mt-6'>
                <h2 className='head4'>Read Next &rarr;</h2>
                <div className='fontxs flex items-center my-6'>
                    <Image src='/me.jpg' className=' object-cover rounded-full overflow-hidden w-[60px] h-[60px]' width={100} height={100} alt='developerimage' />
                    <div className='flex flex-col ml-2'>
                        <h4 className='font-bold text-lg'>Learn Python Programming</h4>
                        <span className='fontsm'><span className='font-bold'>Akash Sarki</span> posted on May 18th 2023</span>
                    </div>
                </div>
                <div className='fontxs flex items-center my-6'>
                    <Image src='/me.jpg' className=' object-cover rounded-full overflow-hidden w-[60px] h-[60px]' width={100} height={100} alt='developerimage' />
                    <div className='flex flex-col ml-2'>
                        <h4 className='font-bold text-lg'>Learn Flask</h4>
                        <span className='fontsm'><span className='font-bold'>Akash Sarki</span> posted on May 18th 2023</span>
                    </div>
                </div>
                <div className='fontxs flex items-center my-6'>
                    <Image src='/me.jpg' className=' object-cover rounded-full overflow-hidden w-[60px] h-[60px]' width={100} height={100} alt='developerimage' />
                    <div className='flex flex-col ml-2'>
                        <h4 className='font-bold text-lg'>Build SEO friendly website with NextJS</h4>
                        <span className='fontsm'><span className='font-bold'>Akash Sarki</span> posted on May 18th 2023</span>
                    </div>
                </div>

            </div>
        </>
    )
}

export default layout
