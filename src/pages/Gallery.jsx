import React, { useState, useEffect } from 'react'
import greece2 from '../images/greece.jpg'
import axios from 'axios'

export const Gallery = () => {
    const [cities, setCities] = useState ([]);

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
        {/* <div>
            {cities.map((city, index) => (


            ))}
        </div> */}
    </div>
  )
}
