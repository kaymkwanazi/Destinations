import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { MdOutlineTravelExplore } from "react-icons/md"
import { FaBars, FaTimes } from "react-icons/fa";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
  return (
    <nav className='fixed m-4 top-0 right-0 left-0 shadow-lg z-50 bg-white'>
        <div className='container px-4 flex justify-between items-center h-16'>
            <Link to='/'>
                <h3 className='text-2xl font-bold flex text-purple-700 cursor-pointer'><MdOutlineTravelExplore />KayTravels</h3>
            </Link>
            <div className='hidden md:flex space-x-4 text-sm font-bold items-center' >
                <Link to='/' className='px-6 py-2 hover:bg-gray-600 hover:text-white'>Home</Link>
                <Link to='/about' className='px-6 py-2 hover:bg-gray-600 hover:text-white'>About</Link>
                <Link to='/gallery' className='px-6 py-2 hover:bg-gray-600 hover:text-white'>Gallery</Link>
                <Link to='/contact' className='px-6 py-2 hover:bg-gray-600 hover:text-white'>Contact</Link>
                <button className='py-2 px-6 border bg-gray-300'>Login</button>
            </div>
            <div className='md:hidden'>
                <button onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </div>
        {isOpen && (
            <div className='md:hidden flex space-y-6 flex-col bg-white items-center' >
            <Link to='/' className='px-6 py-2 hover:bg-gray-600 hover:text-white'>Home</Link>
            <Link to='/about' className='px-6 py-2 hover:bg-gray-600 hover:text-white'>About</Link>
            <Link to='/gallery' className='px-6 py-2 hover:bg-gray-600 hover:text-white'>Gallery</Link>
            <Link to='/contact' className='px-6 py-2 hover:bg-gray-600 hover:text-white'>Contact</Link>
            <button className='py-2 px-6 border bg-gray-300'>Login</button>
        </div>
        )}
    </nav>
  )
}
