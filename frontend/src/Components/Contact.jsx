import React from 'react'

function Contact() {
    return (
        <>
            <div className='flex flex-col items-center justify-center max-h-screen-2xl mx-auto px-10 py-60 md:-20 my-16'>
                <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
                <span>Please fill out the form below to contact me</span>
                <div className='flex flex-col items-center justify-center mt-5'>
                    <form action="" className='bg-slate-200 w-96 px-8 py-6 rounded-xl'>
                        <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700' htmlFor=""> Full Name</label>
                            <input className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight' type="text" placeholder='Enter your full name' />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700' htmlFor="">Enter Email</label>
                            <input className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight' type="text" placeholder='Enter your email address' />
                        </div>
                        <div className='flex flex-col mb-4'>
                            <label className='block text-gray-700' htmlFor="">Write Message</label>
                            <textarea className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight' type="text" placeholder='Write your message' />
                        </div>
                        <button className='bg-black text-white px-3 py-2 rounded-xl hover:bg-slate-700 duration-300'>Send</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Contact;