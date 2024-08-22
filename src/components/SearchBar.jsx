import React, {useState, useEffect} from 'react'
import axios from 'axios';

export const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [data, setData] = useState([]);

    const handleSearch = () => {
        axios.get('https://freetestapi.com/api/v1/destinations')
        .then((response) => setData(response.data))
        .catch(error => console.log('Error fetching data:', error));
    };

    console.log("data: ", data);
    console.log("search: ", searchQuery);

    const results = data.filter(item => item.name === searchQuery)
    
  return (
    <div className='flex items-center'>
        <input type='text' placeholder='Search destination' 
            className='px-4 py-2 border rounded-l-full focus:outline-none'
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)} />
            <button className='border rounded-r-full font-semibold px-5 py-2 bg-cyan-600 hover:bg-cyan-700'
             onClick={handleSearch}>Search</button>

             {/* displaying results */}
             <div>
                {results.map((result, index) => (
                    <div key={index} className='text-gray-600'>
                        {result}
                        </div>
                ))}
             </div>
        
    </div>
  )
}
