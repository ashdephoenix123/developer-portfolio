import React from 'react'
import Link from 'next/link'

const page = () => {
    return (
        <>
            <div className="container2 h-screen text-center">
                <h2 className='font-semibold text-4xl sm:text-5xl mt-12'>Blogs will be available soon...</h2>
                <p className='mt-8'>Go back to <Link href='/' className='btn'>HomePage</Link></p>
            </div>
        </>
    )
}

export default page
