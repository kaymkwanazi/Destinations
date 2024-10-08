import React from 'react'
import greece from '../images/greece.jpg'
import spain from '../images/spain.jpg'
import { PopularDestination } from '../components/PopularDestination'
import { Services } from '../components/Services';
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6";
import { SearchBar } from '../components/SearchBar';

export const Home = () => {
  return (
    <>
    
    <div className='relative h-screen bg-cover bg-center'
        style={{backgroundImage: `url(${spain})`}}>

        <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
            <h1 className='text-4xl md:text-6xl font-bold text-white mb-6'>COME EXPLORE THE WORLD WITH US</h1>
            <p className='text-lg text-white md:text-2xl mb-8'>Seeing the world has never been this cheap. Check out our affordable prices and exclusive deals.</p>
            <SearchBar />
            
        </div>
    </div>
    <PopularDestination />
    <Services />
    </>
  )
}
