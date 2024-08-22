import React from 'react'
import greece from '../images/greece.jpg'
import { FaEnvelope, FaPhone } from 'react-icons/fa'
import { FaMapLocation } from 'react-icons/fa6'

export const Contact = () => {
  return (
    <div className='bg-gray-100'>
        <div className='relative h-96 bg-cover bg-center'
            style={{backgroundImage: `url(${greece})`}}>
            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
                <h4 className='text-4xl md:text-6xl font-bold text-white mb-6'>Contact</h4>
            </div>
        </div>
        {/* Contact details section*/}
        <div className='container mx-auto px-4 py-12'>
          <div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2'>
                <div className='bg-white rounded-lg shadow-md p-6'>
                  <h3 className='text-xl font-bold mb-4'>Contact Details</h3>
                  <div className='flex items-center mb-4'>
                    <FaEnvelope className='text-blue-500 mr-2'/>
                    <p>info@kaytravels.co.za</p>
                  </div>
                  <div className='flex items-center mb-4'>
                    <FaPhone className='text-blue-500 mr-2' />
                    <p>011 245 9818</p>
                  </div>
                  <div className='flex items-center mb-4'>
                    <FaMapLocation className='text-blue-500 mr-2' />
                    <p>123 Smit street, Pretoria CBD, South Africa</p>
                  </div>
                </div>
            
            {/* Getting in touch */}
            <div className='bg-white rounded-lg shadow-md p-6'>
              <h3 className='text-xl font-bold mb-4'>Get in touch</h3>
              <form>
                <div className='mb-4'>
                  <label className='block text-gray-700 mb-2' htmlFor='Name'>Name</label>
                  <input type='text' className='w-full p-2 border border-gray-400 rounded' placeholder='Enter your name'></input>
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-800 mb-2' htmlFor='Name'>Email</label>
                  <input type='email' className='w-full p-2 border border-gray-400 rounded' placeholder='Enter your Email'></input>
                </div>
                <div className='mb-4'>
                  <label className='block text-gray-700 mb-2' htmlFor='Name'>Message</label>
                  <textarea className='w-full p-2 border border-gray-400 rounded' placeholder="Write Message" id=''></textarea>
                </div>
                <button type='submit' className='rounded-full px-3 py-3 text-sm bg-blue-500 hover:bg-blue-600'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}
