import React from 'react'
import Card2 from '../component/Card2'; 

const page = () => {
  return (
    <>
        <div className='container2'>
            <div className='my-12'>
            <h2 className='font-semibold text-2xl text2 max-[716px]:text-center'>All Courses</h2>
               <Card2
                title='Learn Javascript'
                img='/jsimg2.png'
                description='JavaScript is a language of the web, Master the fundamentals of JavaScript and develop dynamic web applications with our comprehensive course.'
                topic='javascript'
                />
            </div>
        </div>
    </>
  )
}

export default page
