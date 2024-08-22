import React from 'react'
import { FaFacebook, FaFacebookF, FaInstagram, FaWhatsapp, FaYoutube } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { PiCopyrightThin } from "react-icons/pi";

export const Footer = () => {
  return (
    <div className='bg-gray-800 p-4 text-white'>
        <div className='container mx-auto px-4'>
        <div className='grid grid-cols-1 md:grid-cols-3'>
            <div>
                <h2 className='text-2xl font-bold mb-4'>Kay Travels</h2>
                <p className='mb-4'>Your trusted partner for unforgettable travel experiances. 
                    Come, explore the world with us </p>
            </div>
            <div className='flex flex-col md:items-center'>
                <h2 className='text-lg font-semibold'>Quick Links</h2>
                <div className='flex flex-col mt-4 space-y-4'>
                    <Link to= '/'>Home</Link>
                    <Link to= '/about'>About</Link>
                    <Link to= '/gallery'>Gallery</Link>
                    <Link to= '/contact'>Contact</Link>
                </div>
            </div>
            <div>
                <h2 className='text-xl font-bold mb-4'>Follow Us</h2>
                <div>
                    <FaFacebookF size={24} className='text-blue-500 hover:text-blue-600'/>
                    <FaInstagram size={24} className='text-pink-500 hover:text-pink-600'/>
                    <FaYoutube size={24} className='text-red-500 hover:text-red-600'/>
                    <FaWhatsapp size={24} className='text-green-500 hover:text-green-600'/>
                </div>
                <form className='flex items-center justify-center mt-8'>
                    <input type='email' placeholder='Enter email' 
                    className='w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600'/>
                    <button type='submit' className='bg-blue-600 px-4 py-2 rounded-r-lg border border-gray-500'>Subscribe</button>
                </form>
            </div> 
            </div>
            <div className='text-center border-t mt-16  border-gray-700 pt-4'>
                <p><PiCopyrightThin className='inline'/> 2024 Kay Travels. All rights reserved.</p>
            </div>
        </div>
    </div>
  )
}
