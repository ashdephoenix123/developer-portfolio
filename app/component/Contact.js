'use client';

import React, { useEffect, useState } from 'react'

const Contact = () => {

    const [details, setDetails] = useState({
        email: "",
        subject: "",
        message: ""
    })

    const handleDetails = (e) => {
        const { name, value } = e.target;
        setDetails((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(details))
        setDetails({
            email: "",
            subject: "",
            message: ""
        })
    }

    return (
        <div className="contactbg flex flex-col justify-center w-full py-20 mt-12 min-[950px]:mt-28">
            <div className="contact min-[950px]:padd mb-12 text-center" id="contact">
                <h2 className="head2">Contact Me<span className="font-serif">,</span></h2>
                <form action='mailto:akashsarki24@gmail.com' className="flex flex-col mx-auto mt-22 text-black fontsm w-[90%] min-[710px]:w-[70%] min-[950px]:w-1/3">
                    <input required onChange={handleDetails} name='email' value={details.email} type="email" placeholder="name@email.com" className="dark:text-white rounded my-1 px-3 py-1.5 outline-none" />
                    <input required onChange={handleDetails} name='subject' value={details.subject} type="text" placeholder="Subject" className="dark:text-white rounded my-1 px-3 py-1.5 outline-none" />
                    <textarea required onChange={handleDetails} name='message' value={details.message} cols="30" rows="10" placeholder="Leave a comment..." className="dark:text-white rounded my-1 px-3 py-2 outline-none"></textarea>
                    <button type='submit' className="btn mt-1 hover:bg-blue-700 border-0 focus:outline-none focus:bg-blue-700">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact
