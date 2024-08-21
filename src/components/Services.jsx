import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaUmbrellaBeach, FaPlane, FaHotel} from "react-icons/fa";
import { MdOutlineTour } from "react-icons/md";

const servicesData = [
        {
            icon: <FaPlane className='text-4xl text-blue-500' />,
            title: 'Flight booking',
            description: 'We provide easy and quick flight booking service to make your travel hassle-free',

        },
        {
            icon: <FaHotel className='text-4xl text-blue-500' />,
            title: 'Hotel booking',
            description: 'Book hotels at the best prices with our excusive deals and discount',
        },
        {
            icon: <FaUmbrellaBeach className='text-4xl text-blue-500' />,
            title: 'Beach Tours',
            description: 'Enjoy the relaxing beach tours with all inclusive packages and guided tours.',

        },

        {
            icon: <MdOutlineTour className='text-4xl text-blue-500' />,
            title: 'City Tours',
            description: 'Explore the different cities by site seeing with our experianced tour guides in selected packages',

        },
    ];

export const Services = () => {

    const [services, setServices] = useState ([]);

    useEffect(() => {

        axios.get('services')
            .then((response) => setServices(response.data.services || servicesData))
            .catch(error => console.log('Error fetching data:', error));

    }, []);

  return (
    <div className='py-12 bg-gray-200'>
        <div className='container mx-auto px-4'>
            <h2 className='text-center text-4xl font-bold mb-8'>Our Services</h2>
            <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
                {services.map((service, index) => (
                    <div key={index} className='bg-white rounded-lg shadow-md p-8 flex flex-cols items-center 
                        transform transition duration-300 hover:scale-110 overflow-hidden cursor-pointer'>
                        <div className='mb-4'>{service.icon}
                            <h4 className='text-xl font-bold mt-3 mb-2'>{service.title}</h4>
                            <h4 className='text-gray-600'>{service.description}</h4>
                        </div> 

                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}
