import React, { useState, useEffect } from 'react'
import greece2 from '../images/greece.jpg'
import axios from 'axios'
import { Filtering } from '../components/Filtering';

export const Gallery = () => {
    const [cities, setCities] = useState ([]);

    //declaration for pagination
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(14);
    const lastItem = currentPage * itemsPerPage;
    const firstItem = lastItem - itemsPerPage;
    const currentItems = cities.slice(firstItem, lastItem);
    const pageNumbers =[];
    for ( let i = 1; i <= Math.ceil(cities.length/itemsPerPage); i++)
    {
        pageNumbers.push(i);
    }

    useEffect(() => {
        axios.get('https://freetestapi.com/api/v1/destinations')
        .then((response) => setCities(response.data))
        .catch(error => console.log('Error fetching data:', error));
    }, []);

  return (
    <div>
        <div className='relative h-96 bg-cover bg-center'
            style={{backgroundImage: `url(${greece2})`}}>
            <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
                <h4 className='text-4xl md:text-6xl font-bold text-white mb-6'>Gallery</h4>
                <p className='text-white text-lg'>Browse through and choose the best destination for you and your loved ones.</p>
            </div>
        </div>

        <div className='container mx-auto px-4'>
            {/* <Filtering /> */}
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10 mb-10'>
            {currentItems.map((item) => (
                    <div key={item.id} className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'>
                        <img src={item.image} alt={item.name} className='w-full h-48 object-cover 
                            transform transition duration-300 hover:scale-110' />
                        <h4 className='text-xl font-bold mb-5 m-2'>{item.name}, {item.country}</h4>
                        <p className='text-gray-600 m-4'>{item.description}</p>
                    </div>
                    ))}
                </div>
                
        </div>
        {/* Pagination button */}
        <div className='container mx-auto px-96'>
            <div className='flex justify-evenly text-gray-600 font-semibold mx-56 mt-8 mb-8 px-3'>
                {pageNumbers.map(number => (
                    <button key={number} onClick={() => setCurrentPage(number)}
                    className={`text-sm p-2 rounded-md border ${currentPage === number ? 'bg-blue-500 text-white' : ''}`}>
                        {number}
                    </button>
                ))}
            </div>
        </div>       
        
    </div>
  )
}
