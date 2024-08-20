import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUmbrellaBeach } from "react-icons/fa";
import { FaPlane } from "react-icons/fa";
import { FaHotel } from "react-icons/fa6";


{
        "services" [
        {
            "icon": <FaPlane className='text-4xl text-blue-500' />,
            "title": 'Flight booking',
            "description": 'We provide easy and quick flight booking service to make your travel hassle-free',

        },
        {
            "icon": <FaHotel className='text-4xl text-blue-500' />,
            "title": 'Hotel booking',
            "description": 'Book hotels at the best prices with our excusive deals and discount',
        },
        {
            "icon": <FaUmbrellaBeach className='text-4xl text-blue-500' />,
            "title": 'Beach Tours',
            "description": 'Experiance the relaxing beach tours with all inclusive packages and guided tours.',

        }
    ]
}

export const Services = () => {
    const [services, setServices] = useState ();
    console.log(services);

    useEffect(() => {
        axios.get('services')
        .then((response) => setServices(response.data))
        .catch(error => console.log('Error fetching data:', error));
    }, []);

    
    
  return (
    <div className='py-10 bg-gray-100'>
        <div className='container mx-auto px-4'>
            <h3 className='text-center text-2xl font-bold mb-8'>Our Services</h3>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {Array.isArray(services) ? services.map((index) => (
                    <div key={index.icon} className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'>
                        <div>
                          <div className='mb-4'>{services.icon}</div>  
                        </div>
                        <div className='p-6'>
                            <h4 className='text-xl font-bold'>{index.title}</h4>
                            <h4 className='text-gray-600'>{index.description}</h4>
                        </div> 

                    </div>
                )): []}
            </div>
        </div>
    </div>
  )
}
