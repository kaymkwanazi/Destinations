import React, { useState, useEffect } from 'react';
import axios from 'axios';
import DialogForm from './DialogForm';
import { Key } from '@mui/icons-material';

export const Filtering = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([]);
    const [showResults, setShowResults] = useState(false);   

    const handleSearch = () => {
        axios.get('https://freetestapi.com/api/v1/destinations')
            .then((response) => setData(response.data))
            .catch(error => console.log('Error fetching data:', error));
    };

    const handleShowResults = () => {
        setShowResults(!showResults);
      };
      

    const byCountries = data.filter(item => item.country.toLowerCase() === searchQuery.toLowerCase());
    const rating = data.filter(item => item.country.toLowerCase() === searchQuery.toLowerCase());

    return (
      <>
      {byCountries.map((result) => (
          <div key={result.id} className="my-4">
            <h4>{result.name}, {result.country}</h4>
            <img src={result.imageUrl} alt={result.name} />
          </div>
          ))}
      <div className='grid sm:grid-cols-1 lg:grid-cols-2'>
        <div className='flex items inline'>
            <h3 className='pt-5 mr-10'>Filter</h3>
            <input
                type='text'
                placeholder='Search country'
                className='pl-2 px-2 mt-5 border border-gray-300 rounded-l-full focus:outline-none '
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
            />
           
            <button className='border border-gray-300 rounded-r-full font-semibold px-2 mt-5'
                onClick={handleShowResults}
            >
             Search
            </button>

             {/* <div>
                 <input type='rating' placeholder='Rating' 
                    className='pl-2 px-2 mt-5 ml-5 border border-gray-300 rounded-l-full focus:outline-none '
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}></input>
                    <button className='border border-gray-300 rounded-r-full font-semibold px-2 mt-5'
                        onClick={handleShowResults}>Search</button>
             </div> */}

        </div>
     
      </div>
       
        </>
    );
};
