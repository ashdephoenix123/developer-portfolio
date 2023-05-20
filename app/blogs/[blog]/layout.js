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
        </>
    )
}

export default layout
