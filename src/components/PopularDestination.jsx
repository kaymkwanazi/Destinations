import React, { useEffect, useState } from 'react';
import axios from 'axios';
import greece from '../images/greece.jpg'

export const PopularDestination = () => {
    const [destinations, setDestinations] = useState ([]);
    console.log(destinations);

    useEffect(() => {
        axios.get('https://freetestapi.com/api/v1/destinations')
        .then((response) => setDestinations(response.data))
        .catch(error => console.log('Error fetching data:', error));
    }, []);

    
    
  return (
    <div className='py-10 bg-gray-200'>
        <div className='container mx-auto px-4'>
            <h3 className='text-center text-4xl font-bold mb-8'>Popular Destinations</h3>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {destinations.slice(0,4).map((element) => (
                    <div key={element.id} className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'>
                        <img src={element.image} alt={element.name} className='w-full h-48 object-cover 
                           transform transition duration-300 hover:scale-110'></img>
                        <div className='p-6'>
                            <h4 className='text-xl font-bold'>{element.name}, {element.country}</h4>
                            <h4 className='text-gray-600'>{element.description}</h4>
                        </div> 

                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
