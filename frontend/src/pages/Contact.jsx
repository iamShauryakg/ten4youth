import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa'

function Contact() {
    return (
        <div className='flex flex-col max-w-screen-full px-6 md:-w-auto md:px-30  py-16 bg-gray-100'>
            <div className='flex flex-col md:flex-row items-stretch justify-center gap-12'>
                <div className='w-full items-center md:w-2/3'>
                    <h1 className='text-3xl font-bold text-orange-500 mb-2'>CONTACT US</h1>
                    <p className='text-sm text-gray-800 mb-6'>
                        TEN4YOUTH’s approach is based on interactions, key to enable the sustainable integration of young people.
                        We are therefore committed to connect you as quickly as possible with the right person to answer your questions.
                    </p>

                     <form action="" className='flex flex-col rounded-2xl gap-4'>
                        <input
                            type='text'
                            placeholder='Name*'
                            className='rounded-2xl py-3 px-5 bg-white border border-b-black outline-orange-500'/>
                        <input
                            type='email'
                            placeholder='Email*'
                            className='rounded-2xl py-3 px-5 bg-white border border-b-black outline-orange-500'/>
                        <input
                            type='text'
                            placeholder='Organization'
                            className='rounded-2xl py-3 px-5 bg-white border border-b-black outline-orange-500'/>
                        <input
                            type='text'
                            placeholder='Country'
                            className='rounded-2xl py-3 px-5 bg-white border border-b-black outline-orange-500'/>
                        <input
                            type='text'
                            placeholder='Subject*'
                            className='rounded-2xl py-3 px-5 bg-white border border-b-black outline-orange-500'/>
                        <textarea
                            rows={5}
                            placeholder='Write your message here...'
                            className='rounded-xl py-3 px-5 bg-white border border-b-black outline-orange-500 resize-full'></textarea>
                        <button 
                        type='submit' 
                        className='bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-full w-40 self-center mt-2'>SEND</button>
                    </form>
                </div>

                <div className='w-full md:w-1/4 flex flex-col items-center py-4 mt-0'>
                    <h2 className='text-3xl font-bold text-orange-500 mb-8'>FOLLOW US</h2>
                    <div className='flex flex-col gap-20'>
                        <a href='https://facebook.com' target='_blank' className='bg-orange-500 text-white p-4 rounded-full text-xl hover:bg-orange-600'>
                            <FaFacebookF />
                        </a>
                        <a href='https://instagram.com' target='_blank' className='bg-orange-500 text-white p-4 rounded-full text-xl hover:bg-orange-600'>
                            <FaInstagram />
                        </a>
                        <a href='https://linkedin.com' target='_blank' className='bg-orange-500 text-white p-4 rounded-full text-xl hover:bg-orange-600'>
                            <FaLinkedinIn />
                        </a>
                        <a href='https://youtube.com' target='_blank' className='bg-orange-500 text-white p-4 rounded-full text-xl hover:bg-orange-600'>
                            <FaYoutube />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
