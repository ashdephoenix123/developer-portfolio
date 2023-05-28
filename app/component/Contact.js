'use client';

import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

    const handleSubmit = async (e) => {
        e.preventDefault();
        const dataSend = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
        })
        const data = await dataSend.json();
        if (data.message === 'success') {
            toast.success('Message sent!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            setDetails({
                email: "",
                subject: "",
                message: ""
            })
        } else {
            toast.error('Some error occured, Please try again!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    return (
        <div className="contactbg flex flex-col justify-center w-full py-20 mt-12 min-[950px]:mt-28">
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className="contact min-[950px]:padd mb-12 text-center" id="contact">
                <h2 className="head2">Leave a Message<span className="font-serif">,</span></h2>
                <form onSubmit={handleSubmit} className="flex flex-col mx-auto mt-22 text-black fontsm w-[90%] min-[710px]:w-[70%] min-[950px]:w-1/3">
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
