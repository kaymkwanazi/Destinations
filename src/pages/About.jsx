import React from 'react'
import greece from '../images/greece.jpg'
import italy from '../images/Italy.jpg'

export const About = () => {
  return (
    <div className='bg-gray-100'>
        <div className='relative h-96 bg-cover bg-center'
            style={{backgroundImage: `url(${greece})`}}>
            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
                <h4 className='text-4xl md:text-6xl font-bold text-white mb-6'>About</h4>
            </div>
        </div>

        {/* About information */}
        <div className='container mx-auto px-4 py-12'>
            <div className='grid gap-10 sm:grid-cols-1 md:grid-cols-2'>
                <div>
                    <img src={italy}></img>
                </div>
                <div>
                    <h3 className='text-2xl font-bold mb-5 mt-12'>Who We Are</h3>
                    <p className='text-base text-gray-700'>We are a passionate travel agency commited to providong the best
                        travel experiance for our clients. Our team is made up of dedicated individuals that will ensure your trips are seamless and unforgettable.
                    </p>
                    <div>
                    <h3 className='text-2xl font-bold mb-5 mt-8'>Our Mission</h3>
                    <p className='text-base text-gray-700'>Our mission is to create amazaing travel experiances that inspire and enrich the lives
                        of our clients. We believe in personalized services attention to detail,
                         and providing exceptional value.
                    </p>
                </div>
                </div>
                
            </div>
        </div>
    </div>
  )
}
